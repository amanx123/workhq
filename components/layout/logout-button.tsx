"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export function LogoutButton() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  async function logout() {
    setIsLoading(true);
    try {
      await fetch("/api/auth/logout", { method: "POST" });
    } finally {
      router.replace("/login");
      router.refresh();
      setIsLoading(false);
    }
  }

  return (
    <button
      type="button"
      disabled={isLoading}
      onClick={logout}
      className="glass glass-hover flex h-8 items-center gap-2 rounded-lg px-3 text-[10px] font-medium tracking-wider text-[#00ff41]/50 transition-all hover:text-[#00ff41] disabled:opacity-50"
      title="Logout"
    >
      <span className="text-xs">⏻</span>
      <span className="hidden sm:inline">{isLoading ? "LOGGING_OUT" : "LOGOUT"}</span>
    </button>
  );
}


