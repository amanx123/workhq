import { BentoCard } from "@/components/ui/bento-card";
import { NEWS_DATA } from "@/lib/constants";
import type { NewsItem } from "@/types";

const CATEGORY_STYLES: Record<NewsItem["category"], string> = {
  AI: "bg-[#00ff41]/10 text-[#00ff41]",
  Tech: "bg-[#00ff41]/10 text-[#00ff41]",
  Dev: "bg-[#00ff41]/10 text-[#00ff41]",
  Design: "bg-[#00ff41]/10 text-[#00ff41]",
  Finance: "bg-[#00ff41]/10 text-[#00ff41]",
};

export function NewsCard() {
  return (
    <BentoCard
      title="NEWS_FEED"
      icon="◉"
      subtitle="LIVE"
      className="col-span-12 row-span-2 lg:col-span-5"
    >
      <div className="space-y-2">
        {NEWS_DATA.map((item) => (
          <div
            key={item.title}
            className="group cursor-pointer rounded-lg border border-[#00ff41]/10 bg-black/40 p-3 transition-colors hover:border-[#00ff41]/30 hover:bg-[#00ff41]/5"
          >
            <div className="mb-1 flex items-center gap-2">
              <span
                className={`rounded border border-[#00ff41]/30 px-1.5 py-0.5 text-[8px] font-bold ${CATEGORY_STYLES[item.category]}`}
              >
                {item.category.toUpperCase()}
              </span>
              <span className="text-[9px] text-[#00ff41]/40">
                {item.time} AGO
              </span>
            </div>
            <p className="text-[10px] leading-relaxed text-[#00ff41]/70 group-hover:text-[#00ff41]">
              {item.title}
            </p>
            <p className="mt-1 text-[9px] text-[#00ff41]/40">
              SOURCE: {item.source}
            </p>
          </div>
        ))}
      </div>
    </BentoCard>
  );
}

