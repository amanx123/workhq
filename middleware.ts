import { NextRequest, NextResponse } from "next/server";
import { SESSION_COOKIE_NAME, verifySessionToken } from "@/lib/auth";

function isPublicAsset(pathname: string) {
  if (pathname.startsWith("/_next/")) return true;
  if (pathname === "/favicon.ico") return true;
  // Never treat API routes as public assets.
  if (pathname.startsWith("/api/")) return false;

  // Allow common static file types from /public (and similar).
  const ext = pathname.split(".").pop()?.toLowerCase();
  if (!ext || ext === pathname) return false;

  const allowed = new Set([
    "css",
    "js",
    "map",
    "txt",
    "xml",
    "json",
    "ico",
    "png",
    "jpg",
    "jpeg",
    "gif",
    "webp",
    "svg",
    "woff",
    "woff2",
    "ttf",
    "otf",
  ]);
  if (allowed.has(ext)) return true;
  return false;
}

function isAuthApi(pathname: string) {
  return pathname === "/api/auth/login" || pathname === "/api/auth/logout";
}

export async function middleware(req: NextRequest) {
  const { pathname, search } = req.nextUrl;

  if (isPublicAsset(pathname)) return NextResponse.next();
  if (isAuthApi(pathname)) return NextResponse.next();

  const secret = process.env.AUTH_SECRET;
  const token = req.cookies.get(SESSION_COOKIE_NAME)?.value;

  const session =
    secret && token ? await verifySessionToken({ token, secret }) : null;

  // /login is always reachable; if already logged in, bounce to next or home.
  if (pathname === "/login") {
    if (!session) return NextResponse.next();
    const next = req.nextUrl.searchParams.get("next");
    const dest = next && next.startsWith("/") ? next : "/";
    return NextResponse.redirect(new URL(dest, req.url));
  }

  if (session) return NextResponse.next();

  // Unauthenticated: pages redirect to login; APIs return 401.
  if (pathname.startsWith("/api/")) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }

  const next = `${pathname}${search}`;
  const loginUrl = new URL(`/login?next=${encodeURIComponent(next)}`, req.url);
  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: ["/:path*"],
};


