import { cn } from "@/lib/utils";

interface StatusIndicatorProps {
  status: "positive" | "negative" | "neutral" | "active";
  size?: "sm" | "md";
  pulse?: boolean;
}

export function StatusIndicator({
  status,
  size = "sm",
  pulse = false,
}: StatusIndicatorProps) {
  return (
    <div
      className={cn(
        "rounded-sm border",
        size === "sm" ? "h-2 w-2" : "h-1.5 w-1.5",
        status === "positive" &&
        "border-[#00ff41] bg-[#00ff41]/50 shadow-[0_0_5px_rgba(0,255,65,0.5)]",
        status === "negative" && "border-red-500 bg-red-500/50",
        status === "neutral" && "border-[#00ff41]/30",
        status === "active" &&
        "rounded-full bg-[#00ff41] shadow-[0_0_5px_rgba(0,255,65,0.5)]",
        pulse && "animate-pulse"
      )}
    />
  );
}

