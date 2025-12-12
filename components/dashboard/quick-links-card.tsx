import { BentoCard } from "@/components/ui/bento-card";
import { QUICK_LINKS } from "@/lib/constants";

export function QuickLinksCard() {
  return (
    <BentoCard
      title="QUICK_ACCESS"
      icon="⬡"
      className="col-span-12 sm:col-span-6 lg:col-span-5"
    >
      <div className="grid grid-cols-4 gap-2">
        {QUICK_LINKS.map((link) => (
          <button
            key={link.label}
            className="flex flex-col items-center gap-1 rounded-lg border border-[#00ff41]/10 bg-black/40 p-2 transition-all hover:border-[#00ff41]/30 hover:bg-[#00ff41]/5 hover:shadow-[0_0_10px_rgba(0,255,65,0.1)]"
          >
            <span className="text-sm font-bold text-[#00ff41]">
              {link.icon}
            </span>
            <span className="text-[8px] text-[#00ff41]/60">{link.label}</span>
          </button>
        ))}
      </div>
    </BentoCard>
  );
}

