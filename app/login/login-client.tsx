"use client";

import { useMemo, useState, type FormEvent } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export function LoginClient() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const next = useMemo(() => {
    const n = searchParams.get("next");
    return n && n.startsWith("/") ? n : "/";
  }, [searchParams]);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setIsLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ username, password, next }),
      });

      const data = (await res.json()) as
        | { ok: true; redirectTo: string }
        | { ok: false; error?: string };

      if (!res.ok || !data.ok) {
        setError(data && "error" in data && data.error ? data.error : "Login failed");
        return;
      }

      router.replace(data.redirectTo || "/");
    } catch {
      setError("Login failed");
    } finally {
      setIsLoading(false);
    }
  }

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
            <p className="text-xs text-[#00ff41]/50">
              Sign in to access your dashboard.
            </p>
          </div>

          <form onSubmit={onSubmit} className="space-y-3">
            <div className="space-y-2">
              <label className="block text-[10px] tracking-wider text-[#00ff41]/60">
                USERNAME
              </label>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoComplete="username"
                className="glass w-full rounded-lg px-3 py-2 text-xs text-[#00ff41] placeholder:text-[#00ff41]/20"
                placeholder="your username"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="block text-[10px] tracking-wider text-[#00ff41]/60">
                PASSWORD
              </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                type="password"
                className="glass w-full rounded-lg px-3 py-2 text-xs text-[#00ff41] placeholder:text-[#00ff41]/20"
                placeholder="••••••••••"
                required
              />
            </div>

            {error ? (
              <div className="rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-2 text-xs text-red-400">
                {error}
              </div>
            ) : null}

            <button
              disabled={isLoading}
              className="glass glass-hover mt-2 flex h-9 w-full items-center justify-center rounded-lg px-3 text-[10px] font-medium tracking-wider text-[#00ff41]/70 transition-all disabled:opacity-50"
              type="submit"
            >
              {isLoading ? "SIGNING_IN..." : "SIGN_IN"}
            </button>

            <p className="pt-2 text-center text-[10px] tracking-wider text-[#00ff41]/30">
              Next: {next}
            </p>
          </form>
        </div>
      </main>
    </div>
  );
}


