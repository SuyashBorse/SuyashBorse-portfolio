"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-[calc(100vh-8.5rem)] sm:min-h-[calc(100vh-9rem)] flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto select-none scroll-mt-20 py-6"
      aria-label="Introduction Hero"
    >
      {/* Giant Editorial Heading (Dino Kupinic Style) */}
      <motion.h1
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-t from-zinc-600 via-zinc-200 to-white bg-clip-text text-transparent text-6xl sm:text-8xl md:text-[130px] lg:text-[148px] font-medium tracking-[-0.075em] leading-[0.95] text-center antialiased"
      >
        Suyash Borse
      </motion.h1>

      {/* Subtitle */}
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-zinc-500 text-lg sm:text-2xl md:text-3xl font-bold tracking-wider uppercase text-center mt-3 sm:mt-5"
      >
        SOFTWARE ENGINEER
      </motion.h2>
    </section>
  );
}
