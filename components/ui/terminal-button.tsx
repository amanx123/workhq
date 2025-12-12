import { cn } from "@/lib/utils";

interface TerminalButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "default" | "primary" | "ghost";
  size?: "sm" | "md";
  className?: string;
}

export function TerminalButton({
  children,
  onClick,
  variant = "default",
  size = "sm",
  className,
}: TerminalButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded border font-bold transition-all",
        size === "sm" && "px-2 py-1 text-[9px]",
        size === "md" && "px-3 py-1.5 text-[10px]",
        variant === "default" &&
        "border-[#00ff41]/20 bg-black/40 text-[#00ff41]/60 hover:bg-[#00ff41]/10 hover:text-[#00ff41]",
        variant === "primary" &&
        "border-[#00ff41]/30 bg-[#00ff41]/10 text-[#00ff41] hover:bg-[#00ff41]/20",
        variant === "ghost" &&
        "border-transparent bg-transparent text-[#00ff41]/60 hover:text-[#00ff41]",
        className
      )}
    >
      {children}
    </button>
  );
}

