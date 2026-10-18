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
