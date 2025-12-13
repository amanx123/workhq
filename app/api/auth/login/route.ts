import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
import {
  createSessionToken,
  SESSION_COOKIE_NAME,
  sessionCookieOptions,
} from "@/lib/auth";
import { getAuthEnv } from "@/lib/env";

export const runtime = "nodejs";

function isProduction() {
  return process.env.NODE_ENV === "production";
}

function getExpectedOrigin(req: NextRequest): string | null {
  const proto = req.headers.get("x-forwarded-proto") ?? "http";
  const host = req.headers.get("x-forwarded-host") ?? req.headers.get("host");
  if (!host) return null;
  return `${proto}://${host}`;
}

function assertSameOrigin(req: NextRequest) {
  const origin = req.headers.get("origin");
  const expected = getExpectedOrigin(req);
  if (!origin || !expected || origin !== expected) {
    return false;
  }
  return true;
}

export async function POST(req: NextRequest) {
  // CSRF mitigation for credentialed endpoints (strict in production).
  if (isProduction() && !assertSameOrigin(req)) {
    return NextResponse.json(
      { ok: false, error: "Forbidden" },
      { status: 403 }
    );
  }

  let expectedUsername: string;
  let passwordHash: string;
  let secret: string;
  let sessionTtlSeconds: number;
  try {
    ({
      username: expectedUsername,
      passwordHash,
      secret,
      sessionTtlSeconds,
    } = getAuthEnv());
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Auth configuration error";
    console.error("[auth] misconfigured environment:", message);
    return NextResponse.json(
      {
        ok: false,
        error: isProduction()
          ? "Server misconfigured"
          : `Server misconfigured: ${message}`,
      },
      { status: 500 }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON body" },
      { status: 400 }
    );
  }

  const obj: Record<string, unknown> =
    body && typeof body === "object" ? (body as Record<string, unknown>) : {};

  const username = obj.username;
  const password = obj.password;
  const next = obj.next;

  if (typeof username !== "string" || typeof password !== "string") {
    return NextResponse.json(
      { ok: false, error: "Missing username or password" },
      { status: 400 }
    );
  }

  const normalizedUsername = username.trim();

  if (normalizedUsername !== expectedUsername) {
    if (!isProduction()) {
      // Server-side only; do not leak details to the client.
      console.warn("[auth] username mismatch");
    }
    return NextResponse.json(
      { ok: false, error: "Invalid credentials" },
      { status: 401 }
    );
  }

  if (!isProduction() && !passwordHash.startsWith("$2")) {
    console.warn(
      "[auth] AUTH_PASSWORD_HASH does not look like a bcrypt hash. If it starts with $2a$..., wrap it in single quotes in .env.local to avoid $ expansion."
    );
  }

  const ok = await bcrypt.compare(password, passwordHash);
  if (!ok) {
    if (!isProduction()) {
      // Server-side only; do not leak details to the client.
      console.warn("[auth] password mismatch");
    }
    return NextResponse.json(
      { ok: false, error: "Invalid credentials" },
      { status: 401 }
    );
  }

  const token = await createSessionToken({
    username: expectedUsername,
    secret,
    ttlSeconds: sessionTtlSeconds,
  });

  const res = NextResponse.json({
    ok: true,
    redirectTo: typeof next === "string" && next.startsWith("/") ? next : "/",
  });

  res.cookies.set(
    SESSION_COOKIE_NAME,
    token,
    sessionCookieOptions(sessionTtlSeconds)
  );
  return res;
}
