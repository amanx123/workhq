import { cn } from "@/lib/utils";

interface BentoCardProps {
  title: string;
  icon: string;
  children: React.ReactNode;
  className?: string;
  headerAction?: React.ReactNode;
  subtitle?: string;
  glow?: boolean;
}

export function BentoCard({
  title,
  icon,
  children,
  className,
  headerAction,
  subtitle,
  glow = false,
}: BentoCardProps) {
  return (
    <div
      className={cn(
        "bento-item glass rounded-2xl p-4",
        glow && "glow",
        className
      )}
    >
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-lg border border-[#00ff41]/30 bg-[#00ff41]/10">
            <span className="text-[10px] text-[#00ff41]">{icon}</span>
          </div>
          <span className="text-[10px] font-bold tracking-widest text-[#00ff41]">
            [ {title} ]
          </span>
        </div>
        {headerAction ??
          (subtitle && (
            <span className="text-[9px] text-[#00ff41]/40">&gt; {subtitle}</span>
          ))}
      </div>
      {children}
    </div>
  );
}

