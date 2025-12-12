import { BentoCard } from "@/components/ui/bento-card";
import { SCHEDULE_DATA } from "@/lib/constants";

export function ScheduleCard() {
  return (
    <BentoCard
      title="SCHEDULE"
      icon="◷"
      className="col-span-12 sm:col-span-6 lg:col-span-3"
    >
      <div className="space-y-2">
        {SCHEDULE_DATA.map((event) => (
          <div
            key={event.time}
            className="flex items-center gap-3 rounded-lg border border-[#00ff41]/10 bg-black/40 px-3 py-2"
          >
            <span className="text-[10px] font-bold text-[#00ff41]/60">
              {event.time}
            </span>
            <div
              className={`h-full w-1 rounded-full ${event.type === "focus"
                ? "bg-[#00ff41] shadow-[0_0_5px_rgba(0,255,65,0.5)]"
                : "bg-[#ffaa00] shadow-[0_0_5px_rgba(255,170,0,0.3)]"
                }`}
            />
            <div className="flex-1">
              <p className="text-[10px] font-bold text-[#00ff41]/90">
                {event.title}
              </p>
              <p className="text-[9px] text-[#00ff41]/40">{event.duration}</p>
            </div>
          </div>
        ))}
      </div>
    </BentoCard>
  );
}

