import React from "react";
import { Terminal } from "lucide-react";

export default function Loading() {
  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0a0a0a] text-white"
      role="status"
      aria-label="Loading Suyash Borse Portfolio"
    >
      {/* Subtle ambient background glow */}
      <div className="absolute w-96 h-96 bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute w-80 h-80 bg-cyan-600/15 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="relative flex flex-col items-center z-10 px-6 text-center">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 border border-indigo-500/30 flex items-center justify-center text-cyan-400 mb-6 shadow-glow-cyan/40">
          <Terminal className="w-8 h-8 text-cyan-400 animate-pulse" />
        </div>

        <h1 className="text-3xl sm:text-5xl font-black tracking-tight mb-2">
          <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-indigo-300 bg-clip-text text-transparent">
            Suyash Borse
          </span>
        </h1>

        <p className="text-xs sm:text-sm font-mono text-zinc-400 tracking-wider uppercase mb-8">
          Java Developer • Web Engineer • Problem Solver
        </p>

        {/* Animated Loading Bar */}
        <div className="w-[220px] h-1 bg-zinc-900 rounded-full overflow-hidden border border-zinc-800 relative">
          <div className="h-full bg-gradient-to-r from-indigo-500 via-cyan-400 to-indigo-400 rounded-full w-full animate-pulse" />
        </div>

        <div className="flex items-center justify-center w-[220px] mt-2.5 text-[11px] font-mono text-zinc-500">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
            Loading portfolio...
          </span>
        </div>
      </div>
    </div>
  );
}
