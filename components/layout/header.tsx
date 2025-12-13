import { QUICK_ACTIONS } from "@/lib/constants";
import { LogoutButton } from "./logout-button";

export function Header() {
  return (
    <header className="mb-6 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="animate-flicker flex h-8 w-8 items-center justify-center rounded-lg border border-[#00ff41]/20 bg-[#00ff41]/5 text-xs font-bold text-[#00ff41]">
          W
        </div>
        <div>
          <h1 className="text-sm font-bold tracking-wider text-[#00ff41]">
            WORK//OS
          </h1>
          <p className="text-[10px] tracking-[0.2em] text-[#00ff41]/40">
            [ PERSONAL_HQ ]
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        {QUICK_ACTIONS.map((action) => (
          <button
            key={action.label}
            className="glass glass-hover flex h-8 items-center gap-2 rounded-lg px-3 text-[10px] font-medium tracking-wider text-[#00ff41]/50 transition-all hover:text-[#00ff41]"
          >
            <span className="text-xs">{action.icon}</span>
            <span className="hidden sm:inline">{action.cmd}</span>
          </button>
        ))}
        <LogoutButton />
        <div className="ml-2 flex h-8 w-8 items-center justify-center rounded-full border border-[#00ff41]/30 bg-[#00ff41]/5">
          <div className="animate-pulse-slow h-2 w-2 rounded-full bg-[#00ff41]" />
        </div>
      </div>
    </header>
  );
}

