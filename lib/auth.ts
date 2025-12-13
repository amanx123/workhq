import { SignJWT, jwtVerify } from "jose";

export const SESSION_COOKIE_NAME = "workos_session";

export type Session = {
  username: string;
  iat: number;
  exp: number;
};

function getSecretKey(secret: string): Uint8Array {
  return new TextEncoder().encode(secret);
}

export function isProduction() {
  return process.env.NODE_ENV === "production";
}

export function getSessionTtlSeconds(): number {
  const raw = process.env.AUTH_SESSION_TTL_SECONDS;
  const n = raw ? Number.parseInt(raw, 10) : NaN;
  if (!Number.isFinite(n) || n <= 0) return 60 * 60 * 24 * 7; // 7 days
  return n;
}

export async function createSessionToken(params: {
  username: string;
  secret: string;
  ttlSeconds: number;
}): Promise<string> {
  const now = Math.floor(Date.now() / 1000);

  return await new SignJWT({})
    .setProtectedHeader({ alg: "HS256", typ: "JWT" })
    .setSubject(params.username)
    .setIssuedAt(now)
    .setExpirationTime(now + params.ttlSeconds)
    .sign(getSecretKey(params.secret));
}

export async function verifySessionToken(params: {
  token: string;
  secret: string;
}): Promise<Session | null> {
  try {
    const { payload } = await jwtVerify(params.token, getSecretKey(params.secret), {
      algorithms: ["HS256"],
    });

    const username = typeof payload.sub === "string" ? payload.sub : null;
    const iat = typeof payload.iat === "number" ? payload.iat : null;
    const exp = typeof payload.exp === "number" ? payload.exp : null;

    if (!username || !iat || !exp) return null;
    return { username, iat, exp };
  } catch {
    return null;
  }
}

export function sessionCookieOptions(ttlSeconds: number) {
  return {
    httpOnly: true,
    secure: isProduction(),
    sameSite: "lax" as const,
    path: "/",
    maxAge: ttlSeconds,
  };
}


