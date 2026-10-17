"use client";

import React from "react";
import { GraduationCap, Trophy, Cpu, Code2, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { CodeChefIcon, LeetCodeIcon } from "@/components/SocialIcons";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-4 max-w-6xl mx-auto scroll-mt-20"
      aria-label="About Suyash Anil Borse"
    >
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-indigo-400 bg-indigo-950/30 border border-indigo-800/40 mb-3">
          <span>01. BACKGROUND</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
          About Me
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full mb-6"></div>
        <p className="text-zinc-400 max-w-2xl text-sm sm:text-base leading-relaxed">
          Driven by a continuous pursuit of algorithmic efficiency, system design, and software craftsmanship.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1: Academic Background */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-6 sm:p-8 rounded-2xl bg-[#171717] border border-zinc-800 hover:border-indigo-500/50 transition-all duration-300 relative group overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl group-hover:bg-indigo-500/10 transition-colors pointer-events-none"></div>
          
          <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-105 transition-transform">
            <GraduationCap className="w-6 h-6" />
          </div>

          <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
            Engineering Education
          </h3>
          <p className="text-zinc-400 text-sm leading-relaxed mb-6">
            Currently a <strong className="text-zinc-200">2nd-year B.Tech Information Technology</strong> engineering student at{" "}
            <strong className="text-indigo-400">R. C. Patel Institute of Technology</strong>.
          </p>

          <div className="pt-4 border-t border-zinc-800/80 flex items-center gap-2 text-xs font-mono text-zinc-400">
            <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
            <span>Information Technology Major</span>
          </div>
        </motion.div>

        {/* Card 2: Algorithmic Problem Solving */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="p-6 sm:p-8 rounded-2xl bg-[#171717] border border-zinc-800 hover:border-cyan-500/50 transition-all duration-300 relative group overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/10 transition-colors pointer-events-none"></div>

          <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-105 transition-transform">
            <Trophy className="w-6 h-6" />
          </div>

          <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
            Competitive Programming
          </h3>
          <p className="text-zinc-400 text-sm leading-relaxed mb-6">
            Engaged in <strong className="text-zinc-200">daily competitive-programming practice</strong> on{" "}
            <strong className="text-cyan-400">CodeChef</strong> and{" "}
            <strong className="text-cyan-400">LeetCode</strong> to hone problem-solving intuition and algorithmic speed.
          </p>

          <div className="pt-4 border-t border-zinc-800/80 flex items-center gap-3 text-xs font-mono text-zinc-400">
            <span className="flex items-center gap-1">
              <CodeChefIcon className="w-3.5 h-3.5 text-cyan-400" />
              <span>CodeChef</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <LeetCodeIcon className="w-3.5 h-3.5 text-cyan-400" />
              <span>LeetCode</span>
            </span>
          </div>
        </motion.div>

        {/* Card 3: DSA & Software Architecture */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="p-6 sm:p-8 rounded-2xl bg-[#171717] border border-zinc-800 hover:border-indigo-500/50 transition-all duration-300 relative group overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl group-hover:bg-indigo-500/10 transition-colors pointer-events-none"></div>

          <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-105 transition-transform">
            <Cpu className="w-6 h-6" />
          </div>

          <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
            Data Structures &amp; Algorithms
          </h3>
          <p className="text-zinc-400 text-sm leading-relaxed mb-6">
            A deep passion for <strong className="text-zinc-200">Data Structures &amp; Algorithms</strong>, memory efficiency, and building structured, maintainable software architectures.
          </p>

          <div className="pt-4 border-t border-zinc-800/80 flex items-center gap-2 text-xs font-mono text-zinc-400">
            <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
            <span>Core Foundation Focus</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
