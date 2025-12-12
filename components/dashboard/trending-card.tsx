import { BentoCard } from "@/components/ui/bento-card";
import { StatusIndicator } from "@/components/ui/status-indicator";
import { TRENDING_DATA } from "@/lib/constants";

export function TrendingCard() {
  return (
    <BentoCard
      title="TRENDING"
      icon="◎"
      className="col-span-12 sm:col-span-6 lg:col-span-3"
    >
      <div className="space-y-2">
        {TRENDING_DATA.map((item) => (
          <div
            key={item.topic}
            className="flex items-center justify-between rounded-lg border border-[#00ff41]/10 bg-black/40 px-3 py-2"
          >
            <div>
              <p className="text-[10px] font-bold text-[#00ff41]/90">
                {item.topic}
              </p>
              <p className="text-[9px] text-[#00ff41]/40">{item.posts} posts</p>
            </div>
            <StatusIndicator status={item.sentiment} />
          </div>
        ))}
      </div>
    </BentoCard>
  );
}

