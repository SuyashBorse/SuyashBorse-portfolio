"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal } from "lucide-react";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setIsLoading(false);
      return;
    }

    // Smooth simulated progress up to 100%
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsLoading(false);
          }, 350);
          return 100;
        }
        return prev + 5;
      });
    }, 45);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -25, transition: { duration: 0.6, ease: "easeInOut" } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0a0a0a] text-white select-none"
          aria-label="Loading Suyash Borse Portfolio"
          role="status"
          aria-live="polite"
        >
          {/* Subtle ambient background glow */}
          <div className="absolute w-96 h-96 bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="absolute w-80 h-80 bg-cyan-600/15 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="relative flex flex-col items-center z-10 px-6 text-center">
            {/* Monogram Icon */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 border border-indigo-500/30 flex items-center justify-center text-cyan-400 mb-6 shadow-glow-cyan/40"
            >
              <Terminal className="w-8 h-8 text-cyan-400 animate-pulse" />
            </motion.div>

            {/* Owner Name Branding */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-5xl font-black tracking-tight mb-2"
            >
              <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-indigo-300 bg-clip-text text-transparent">
                Suyash Borse
              </span>
            </motion.h1>

            {/* Subtitle / Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xs sm:text-sm font-mono text-zinc-400 tracking-wider uppercase mb-8"
            >
              Java Developer • Web Engineer • Problem Solver
            </motion.p>

            {/* Sleek Progress Bar */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "220px", opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.25 }}
              className="w-[220px] h-1 bg-zinc-900 rounded-full overflow-hidden border border-zinc-800"
            >
              <motion.div
                className="h-full bg-gradient-to-r from-indigo-500 via-cyan-400 to-indigo-400 rounded-full"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              />
            </motion.div>

            {/* Percentage & Loading Status */}
            <div className="flex items-center justify-between w-[220px] mt-2.5 text-[11px] font-mono text-zinc-500">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
                Loading...
              </span>
              <span>{progress}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
