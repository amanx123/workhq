export function Footer() {
  return (
    <footer className="mt-6 flex items-center justify-between rounded-lg border border-[#00ff41]/10 bg-black/40 px-4 py-2 text-[9px] font-mono text-[#00ff41]/40 backdrop-blur">
      <span>WORK//OS v0.1 // BUILT_WITH NEXT.JS</span>
      <div className="flex items-center gap-2">
        <span className="h-1 w-1 animate-pulse rounded-full bg-[#00ff41]" />
        <span>LAST_SYNC: NOW</span>
      </div>
    </footer>
  );
}

