import { BentoCard } from "@/components/ui/bento-card";
import { TerminalButton } from "@/components/ui/terminal-button";

export function PostsCard() {
  return (
    <BentoCard
      title="POSTS"
      icon="✦"
      className="col-span-12 row-span-2 sm:col-span-6 lg:col-span-4"
      headerAction={<TerminalButton variant="primary">[NEW]</TerminalButton>}
    >
      <div className="space-y-3">
        <div className="rounded-lg border border-[#00ff41]/10 bg-black/40 p-3">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-[9px] text-[#00ff41]/40">DRAFT // X</span>
            <span className="text-[9px] font-bold text-[#ffaa00]">
              SCHED: 16:00
            </span>
          </div>
          <p className="text-[10px] leading-relaxed text-[#00ff41]/80">
            &gt; Just shipped a new feature for Work OS — an AI assistant that
            can actually execute tasks, not just chat. The future of
            productivity tools is agentic. 🚀
          </p>
          <div className="mt-2 flex gap-2">
            <TerminalButton>[EDIT]</TerminalButton>
            <TerminalButton>[POST]</TerminalButton>
          </div>
        </div>

        <div className="rounded-lg border border-[#00ff41]/10 bg-black/40 p-3">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-[9px] text-[#00ff41]/40">LIVE // LINKEDIN</span>
            <span className="text-[9px] font-bold text-[#00ff41]">
              2.4K VIEWS
            </span>
          </div>
          <p className="text-[10px] leading-relaxed text-[#00ff41]/80">
            Building in public update: Week 12 of Work OS development...
          </p>
          <div className="mt-2 flex gap-3 text-[9px] text-[#00ff41]/40">
            <span>48 ↑</span>
            <span>12 ✎</span>
            <span>8 ⟳</span>
          </div>
        </div>

        <div className="rounded-lg border border-dashed border-[#00ff41]/20 bg-black/20 p-3 text-center">
          <p className="text-[9px] text-[#00ff41]/30">&gt; DRAG IDEAS HERE_</p>
        </div>
      </div>
    </BentoCard>
  );
}

