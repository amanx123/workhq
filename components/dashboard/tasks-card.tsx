import { BentoCard } from "@/components/ui/bento-card";
import { TerminalButton } from "@/components/ui/terminal-button";
import { TASKS_DATA } from "@/lib/constants";

export function TasksCard() {
  return (
    <BentoCard
      title="TASKS"
      icon="◇"
      subtitle={`${TASKS_DATA.length} PENDING`}
      className="col-span-12 sm:col-span-6 lg:col-span-4"
    >
      <div className="space-y-2">
        {TASKS_DATA.map((task) => (
          <div
            key={task.id}
            className="flex items-center gap-3 rounded-lg border border-[#00ff41]/10 bg-black/40 px-3 py-2.5"
          >
            <div
              className={`h-2 w-2 rounded-sm ${task.priority === "high"
                ? "bg-[#ff0000] shadow-[0_0_5px_rgba(255,0,0,0.5)]"
                : "bg-[#ffaa00] shadow-[0_0_5px_rgba(255,170,0,0.3)]"
                }`}
            />
            <div className="flex-1">
              <p className="text-[10px] font-bold text-[#00ff41]/90">
                {task.title.toUpperCase()}
              </p>
              <p className="text-[9px] text-[#00ff41]/40">
                {task.project} • {task.due}
              </p>
            </div>
            <TerminalButton>[✓]</TerminalButton>
          </div>
        ))}
      </div>
    </BentoCard>
  );
}

