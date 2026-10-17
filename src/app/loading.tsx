"use client";

import React from "react";
import { Terminal } from "lucide-react";

export default function Loading() {
  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#09090b] text-white"
      role="status"
      aria-label="Loading Suyash Borse Portfolio"
    >
      {/* Subtle ambient background glow */}
      <div className="absolute w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute w-80 h-80 bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="relative flex flex-col items-center z-10 px-6 text-center">
        <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-cyan-400 mb-6 shadow-sm">
          <Terminal className="w-7 h-7 text-cyan-400 animate-pulse" />
        </div>

        <h1 className="text-3xl sm:text-5xl font-medium tracking-tight mb-2">
          <span className="bg-gradient-to-t from-zinc-500 via-zinc-200 to-white bg-clip-text text-transparent">
            Suyash Borse
          </span>
        </h1>

        <p className="text-xs sm:text-sm font-mono text-zinc-400 tracking-wider uppercase mb-8">
          Java Developer · Web Engineer
        </p>

        {/* Animated Loading Bar */}
        <div className="w-[200px] h-1 bg-zinc-900 rounded-full overflow-hidden border border-zinc-800 relative">
          <div className="h-full bg-gradient-to-r from-indigo-500 via-cyan-400 to-indigo-400 rounded-full w-full animate-pulse" />
        </div>

        <div className="flex items-center justify-center w-[200px] mt-2.5 text-[11px] font-mono text-zinc-500">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
            Loading portfolio...
          </span>
        </div>
      </div>
    </div>
  );
}
