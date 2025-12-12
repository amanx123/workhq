export function Background() {
  return (
    <>
      {/* Grid background */}
      <div className="pointer-events-none fixed inset-0 grid-bg opacity-30" />

      {/* Ambient glows */}
      <div className="pointer-events-none fixed inset-0">
        <div className="animate-pulse-slow absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-[#00ff41] opacity-[0.02] blur-[120px]" />
        <div className="absolute right-1/4 top-1/3 h-[400px] w-[400px] rounded-full bg-[#00ff41] opacity-[0.015] blur-[100px]" />
        <div className="absolute bottom-0 left-1/2 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-[#00ff41] opacity-[0.01] blur-[80px]" />
      </div>
    </>
  );
}

