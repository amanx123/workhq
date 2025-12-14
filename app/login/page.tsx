import { Suspense } from "react";
import { LoginClient } from "./login-client";

function LoginFallback() {
  return (
    <div className="relative min-h-screen">
      <main className="relative z-10 mx-auto flex min-h-screen max-w-[1400px] items-center justify-center px-4 py-10 lg:px-6">
        <div className="glass glow w-full max-w-md rounded-2xl p-6">
          <div className="mb-6">
            <div className="mb-3 flex items-center gap-3">
              <div className="animate-flicker flex h-9 w-9 items-center justify-center rounded-lg border border-[#00ff41]/20 bg-[#00ff41]/5 text-xs font-bold text-[#00ff41]">
                W
              </div>
              <div>
                <h1 className="text-sm font-bold tracking-wider text-[#00ff41]">
                  WORK//OS
                </h1>
                <p className="text-[10px] tracking-[0.2em] text-[#00ff41]/40">
                  [ AUTH_REQUIRED ]
                </p>
              </div>
            </div>
            <p className="text-xs text-[#00ff41]/50">Loading…</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<LoginFallback />}>
      <LoginClient />
    </Suspense>
  );
}


