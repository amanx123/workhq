import { NextRequest, NextResponse } from "next/server";
import { SESSION_COOKIE_NAME, sessionCookieOptions } from "@/lib/auth";

export const runtime = "nodejs";

export async function POST(_req: NextRequest) {
  // We only need TTL to reuse cookie settings (path/samesite/secure); then expire it.
  // Do not depend on env here; logout should always work.
  const sessionTtlSeconds = 60 * 60 * 24 * 7;

  const res = NextResponse.json({ ok: true });
  res.cookies.set(SESSION_COOKIE_NAME, "", {
    ...sessionCookieOptions(sessionTtlSeconds),
    maxAge: 0,
  });
  return res;
}


