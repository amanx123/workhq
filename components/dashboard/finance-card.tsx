import { BentoCard } from "@/components/ui/bento-card";
import { FINANCE_STATS } from "@/lib/constants";

export function FinanceCard() {
  return (
    <BentoCard
      title="FINANCE"
      icon="$"
      className="col-span-12 sm:col-span-6 lg:col-span-4"
    >
      <div className="grid grid-cols-3 gap-2">
        {FINANCE_STATS.map((stat) => (
          <div
            key={stat.label}
            className="rounded-lg border border-[#00ff41]/10 bg-black/40 p-3"
          >
            <p className="text-[9px] text-[#00ff41]/40">{stat.label}</p>
            <p className="text-lg font-bold text-[#00ff41]">{stat.value}</p>
            <p
              className={`text-[8px] ${stat.highlight ? "text-[#00ff41]" : "text-[#00ff41]/40"
                }`}
            >
              {stat.sub}
            </p>
          </div>
        ))}
      </div>
    </BentoCard>
  );
}

