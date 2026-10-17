"use client";

import React, { useState, useEffect } from "react";
import { ArrowDown, ArrowUpRight, Terminal } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const fullSubText = "Java Developer | Web Engineer | Algorithmic Problem Solver";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setDisplayedText(fullSubText);
      return;
    }

    if (index < fullSubText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullSubText[index]);
        setIndex((prev) => prev + 1);
      }, 40);
      return () => clearTimeout(timeout);
    }
  }, [index, fullSubText]);

  return (
    <section
      id="hero"
      className="mt-12 sm:mt-24 md:mt-32 flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto"
      aria-label="Introduction Hero"
    >
      {/* Circular Avatar with Orbiting Dotted Ring */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative mb-6 sm:mb-8 flex items-center justify-center w-28 h-28 sm:w-32 sm:h-32"
      >
        {/* Ambient subtle background glow */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 blur-xl pointer-events-none"></div>

        {/* Outer Fine Rotating Dotted Ring */}
        <motion.svg
          animate={{ rotate: 360 }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -inset-1 w-[calc(100%+8px)] h-[calc(100%+8px)] pointer-events-none"
          viewBox="0 0 160 160"
        >
          <defs>
            <linearGradient id="dottedRingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="50%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
          </defs>
          <circle
            cx="80"
            cy="80"
            r="75"
            fill="none"
            stroke="rgba(255, 255, 255, 0.05)"
            strokeWidth="0.75"
          />
          <circle
            cx="80"
            cy="80"
            r="75"
            fill="none"
            stroke="url(#dottedRingGradient)"
            strokeWidth="1.75"
            strokeDasharray="1 6"
            strokeLinecap="round"
            className="filter drop-shadow-[0_0_3px_rgba(6,182,212,0.5)]"
          />
        </motion.svg>

        {/* Inner Circle Avatar Container */}
        <div className="relative w-[102px] h-[102px] sm:w-[116px] sm:h-[116px] rounded-full bg-[#111113] border border-zinc-800 flex items-center justify-center overflow-hidden shadow-inner z-10">
          <motion.div
            animate={{ y: [0, -2, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="flex items-center justify-center w-full h-full select-none"
          >
            <span className="text-3xl sm:text-4xl font-black bg-gradient-to-b from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent tracking-tighter">
              S
            </span>
          </motion.div>
        </div>

        {/* Status Dot */}
        <div
          className="absolute bottom-0 right-0 w-5 h-5 rounded-full bg-zinc-950 border-2 border-[#09090b] flex items-center justify-center shadow-lg z-20"
          title="Available for opportunities"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
        </div>
      </motion.div>

      {/* Giant Editorial Heading (Dino Kupinic Style) */}
      <motion.h1
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-t from-zinc-500 via-zinc-200 to-white bg-clip-text text-transparent text-6xl sm:text-8xl md:text-[120px] lg:text-[138px] font-medium tracking-[-0.075em] leading-[0.95] text-center antialiased"
      >
        Suyash Borse
      </motion.h1>

      {/* Subtitle */}
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="bg-gradient-to-t from-zinc-500 to-white bg-clip-text text-transparent text-lg sm:text-2xl md:text-3xl font-bold tracking-wider uppercase text-center mt-4 sm:mt-5"
      >
        JAVA DEVELOPER · WEB ENGINEER
      </motion.h2>

      {/* Animated Typing Line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-4 font-mono text-xs sm:text-sm text-zinc-400 max-w-xl flex items-center justify-center"
      >
        <span className="sr-only">{fullSubText}</span>
        <span aria-hidden="true" className="flex items-center">
          <span>{displayedText}</span>
          <span className="inline-block w-1.5 h-4 bg-zinc-400 ml-1 animate-pulse"></span>
        </span>
      </motion.div>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex flex-row items-center justify-center gap-3 mt-8 sm:mt-10"
      >
        <a
          href="#projects"
          className="inline-flex items-center justify-center whitespace-nowrap text-xs font-mono uppercase tracking-wider font-semibold rounded-md bg-white text-zinc-950 hover:bg-zinc-200 transition-colors h-9 px-5 shadow-sm"
        >
          <span>All Projects</span>
        </a>
        <a
          href="#contact"
          className="inline-flex items-center justify-center whitespace-nowrap text-xs font-mono uppercase tracking-wider rounded-md border border-zinc-800 bg-zinc-900/60 hover:bg-zinc-800 text-zinc-300 hover:text-white transition-colors h-9 px-5"
        >
          <span>Contact Me</span>
        </a>
      </motion.div>
    </section>
  );
}
