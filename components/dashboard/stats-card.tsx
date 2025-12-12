import { BentoCard } from "@/components/ui/bento-card";
import { TODAY_STATS } from "@/lib/constants";

export function StatsCard() {
  return (
    <BentoCard title="TODAY" icon="◆" className="col-span-12 lg:col-span-5">
      <div className="grid grid-cols-4 gap-2">
        {TODAY_STATS.map((stat) => (
          <div
            key={stat.label}
            className="rounded-lg border border-[#00ff41]/10 bg-black/40 p-3 text-center"
          >
            <p className="text-lg font-bold text-[#00ff41]">{stat.value}</p>
            <p className="text-[9px] text-[#00ff41]/60">{stat.label}</p>
            <p className="text-[8px] text-[#00ff41]/40">{stat.sub}</p>
          </div>
        ))}
      </div>
    </BentoCard>
  );
}

