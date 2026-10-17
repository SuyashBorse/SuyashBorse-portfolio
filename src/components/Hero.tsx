"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, Code2, Sparkles, Terminal, Layers } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const fullText = "Java Developer | Web Engineer | Algorithmic Problem Solver";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  // Typing effect that gracefully displays complete text if reduced-motion is preferred
  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setDisplayedText(fullText);
      return;
    }

    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }, 45);
      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col items-center justify-center text-center px-4 pt-24 pb-16 max-w-5xl mx-auto"
      aria-label="Introduction Hero"
    >
      {/* Animated Circular Avatar / Profile Image Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative mb-8 group flex items-center justify-center w-32 h-32 sm:w-36 sm:h-36"
      >
        {/* Ambient background pulsing glow */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 blur-2xl opacity-40 group-hover:opacity-75 transition-opacity duration-500 animate-pulse"></div>

        {/* Outer Smooth Rotating Dotted Ring (Small & Refined) */}
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
          {/* Subtle faint track */}
          <circle
            cx="80"
            cy="80"
            r="75"
            fill="none"
            stroke="rgba(255, 255, 255, 0.05)"
            strokeWidth="0.75"
          />
          {/* Luminous Small Rotating Dotted Ring */}
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

        {/* Inner Circle Avatar Container (Stationary - stays upright) */}
        <div className="relative w-[118px] h-[118px] sm:w-[134px] sm:h-[134px] rounded-full bg-[#111113] border border-white/10 flex items-center justify-center overflow-hidden shadow-inner z-10">
          {/* 
            PROFILE IMAGE PLACEHOLDER:
            When you are ready to use your photo, replace the block below with:
            <img src="/your-photo.jpg" alt="Suyash Borse" className="w-full h-full object-cover rounded-full" />
          */}
          <motion.div
            animate={{
              y: [0, -3, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex items-center justify-center w-full h-full select-none"
          >
            <span className="text-4xl sm:text-5xl font-black bg-gradient-to-br from-indigo-300 via-cyan-400 to-white bg-clip-text text-transparent tracking-tighter drop-shadow-md">
              S
            </span>
          </motion.div>

          {/* Subtle internal radial shine */}
          <div className="absolute inset-0 bg-radial from-white/10 to-transparent pointer-events-none rounded-full"></div>
        </div>

        {/* Active Status Badge Indicator (Stationary at bottom-right) */}
        <div
          className="absolute bottom-0.5 right-0.5 w-6 h-6 rounded-full bg-zinc-950 border-2 border-[#0a0a0a] flex items-center justify-center shadow-lg z-20"
          title="Available for opportunities"
          aria-label="Status: Active"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
        </div>
      </motion.div>

      {/* Main Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]"
      >
        Hi, I&apos;m{" "}
        <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-indigo-300 bg-clip-text text-transparent">
          Suyash Anil Borse.
        </span>
      </motion.h1>

      {/* Accessible Animated Sub-headline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="h-14 sm:h-10 flex items-center justify-center mb-8"
      >
        {/* Screen reader only full text for assistive accessibility */}
        <span className="sr-only">{fullText}</span>

        {/* Visual typing representation */}
        <p
          aria-hidden="true"
          className="text-base sm:text-xl font-mono text-zinc-300 tracking-wide flex items-center justify-center flex-wrap"
        >
          <span>{displayedText}</span>
          <span className="inline-block w-2 h-5 bg-cyan-400 ml-1 animate-pulse"></span>
        </p>
      </motion.div>

      {/* Supporting context snippet */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-zinc-400 text-sm sm:text-base max-w-2xl mb-10 leading-relaxed font-normal"
      >
        Engineering modern web applications and mastering Data Structures &amp; Algorithms through daily problem-solving on CodeChef and LeetCode.
      </motion.p>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
      >
        <a
          href="#projects"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 shadow-glow-indigo/50 hover:shadow-glow-cyan/50 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none"
        >
          <span>View Projects</span>
          <ArrowRight className="w-4 h-4" />
        </a>
        <a
          href="#contact"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium text-zinc-300 hover:text-white bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none"
        >
          <span>Contact Me</span>
        </a>
      </motion.div>

      {/* Quick stats / Highlights bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-16 pt-8 border-t border-zinc-900/80 grid grid-cols-2 sm:grid-cols-3 gap-6 text-left max-w-2xl w-full"
      >
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-indigo-400">
            <Code2 className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-mono text-zinc-500 uppercase">Focus</div>
            <div className="text-sm font-semibold text-zinc-200">DSA &amp; Systems</div>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-cyan-400">
            <Terminal className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-mono text-zinc-500 uppercase">Practice</div>
            <div className="text-sm font-semibold text-zinc-200">CodeChef &amp; LeetCode</div>
          </div>
        </div>

        <div className="col-span-2 sm:col-span-1 flex items-start gap-3">
          <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-indigo-400">
            <Layers className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-mono text-zinc-500 uppercase">Specialization</div>
            <div className="text-sm font-semibold text-zinc-200">Full-Stack &amp; DSA</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
