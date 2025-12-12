import { BentoCard } from "@/components/ui/bento-card";
import { ANALYTICS_DATA } from "@/lib/constants";

export function AnalyticsCard() {
  return (
    <BentoCard
      title="ANALYTICS"
      icon="◐"
      subtitle="LAST 7D"
      className="col-span-12 row-span-2 lg:col-span-7"
    >
      <div className="space-y-3">
        {ANALYTICS_DATA.map((app) => (
          <div
            key={app.app}
            className="rounded-lg border border-[#00ff41]/10 bg-black/40 p-3"
          >
            <div className="mb-2 flex items-center justify-between">
              <span className="text-[11px] font-bold text-[#00ff41]/90">
                {app.app.toUpperCase()}
              </span>
              <span
                className={`text-[10px] font-bold ${app.change.startsWith("+")
                  ? "text-[#00ff41]"
                  : "text-[#ff0000]"
                  }`}
              >
                {app.change}
              </span>
            </div>
            <div className="flex items-end justify-between">
              <div>
                <p className="text-xl font-bold text-[#00ff41]">
                  {app.visitors}
                </p>
                <p className="text-[9px] text-[#00ff41]/40">VISITORS</p>
              </div>
              <div className="flex gap-4 text-right">
                <div>
                  <p className="text-[12px] font-bold text-[#00ff41]/80">
                    {app.sessions}
                  </p>
                  <p className="text-[9px] text-[#00ff41]/40">SESSIONS</p>
                </div>
                <div>
                  <p className="text-[12px] font-bold text-[#00ff41]/80">
                    {app.bounce}
                  </p>
                  <p className="text-[9px] text-[#00ff41]/40">BOUNCE</p>
                </div>
              </div>
            </div>
            <div className="mt-2 h-1 overflow-hidden rounded-full bg-[#00ff41]/10">
              <div
                className="h-1 bg-[#00ff41] shadow-[0_0_10px_rgba(0,255,65,0.5)]"
                style={{ width: `${parseInt(app.change) * 3 + 40}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </BentoCard>
  );
}

