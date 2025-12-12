export function StatusBar() {
  return (
    <div className="mb-4 flex items-center justify-between rounded-lg border border-[#00ff41]/10 bg-black/40 px-4 py-2 text-[10px] font-mono text-[#00ff41]/60 backdrop-blur">
      <div className="flex gap-4">
        <span>
          [SYSTEM: <span className="text-[#00ff41]">ACTIVE</span>]
        </span>
        <span>
          [CPU: <span className="text-[#00ff41]">23%</span>]
        </span>
        <span>
          [MEM: <span className="text-[#00ff41]">8.2GB</span>]
        </span>
        <span>
          [UPTIME: <span className="text-[#00ff41]">127D</span>]
        </span>
      </div>
      <div className="flex items-center gap-2">
        <span className="h-1 w-1 animate-pulse rounded-full bg-[#00ff41]" />
        <span>SYNC: LIVE</span>
      </div>
    </div>
  );
}

