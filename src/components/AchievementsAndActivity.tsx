"use client";

import React from "react";
import {
  Trophy,
  Flame,
  ExternalLink,
  FolderGit2,
} from "lucide-react";
import { motion } from "framer-motion";

export default function AchievementsAndActivity() {
  return (
    <section
      id="achievements"
      className="mt-20 sm:mt-32 max-w-5xl mx-auto px-4 scroll-mt-20 w-full"
      aria-label="Achievements & Activity"
    >
      {/* Section Header */}
      <div className="mb-8 sm:mb-10">
        <div className="flex items-center gap-2">
          <Trophy className="w-5 h-5 text-amber-400" />
          <h3 className="font-semibold tracking-tighter text-2xl sm:text-3xl text-white">
            Achievements &amp; Activity
          </h3>
        </div>
        <p className="text-zinc-500 font-mono text-xs sm:text-sm mt-1">
          Coding milestones, competitive programming records, and hackathon achievements
        </p>
      </div>

      {/* 3 Main Achievement Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Card 1: 1000+ Problems on CodeChef */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.05 }}
          className="glass-card rounded-xl p-5 sm:p-6 border border-zinc-800/80 hover:border-orange-500/40 transition-all flex flex-col justify-between group"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="p-2.5 rounded-lg bg-orange-950/40 border border-orange-800/40 text-orange-400 group-hover:scale-105 transition-transform">
                <Flame className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-orange-950/50 text-orange-300 border border-orange-800/40 uppercase tracking-wider">
                Competitive DSA
              </span>
            </div>
            <div className="text-3xl sm:text-4xl font-bold font-mono text-white tracking-tight mb-1">
              1,000+
            </div>
            <h4 className="text-base font-semibold text-zinc-100 tracking-tight mb-2">
              Problems Solved on CodeChef
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              Mastered foundational problem solving in Java focusing on Arrays, Strings, ArrayList, Stack, and Queue implementations.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-center justify-between text-[11px] font-mono text-zinc-500">
            <span>Arrays, Strings &amp; Stacks</span>
            <a
              href="https://www.codechef.com/users/rcpit251109101"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-400 hover:text-orange-300 transition-colors inline-flex items-center gap-1 font-medium"
            >
              <span>rcpit251109101</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </motion.div>

        {/* Card 2: 10+ Repositories in GitHub */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.1 }}
          className="glass-card rounded-xl p-5 sm:p-6 border border-zinc-800/80 hover:border-cyan-500/40 transition-all flex flex-col justify-between group"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="p-2.5 rounded-lg bg-cyan-950/40 border border-cyan-800/40 text-cyan-400 group-hover:scale-105 transition-transform">
                <FolderGit2 className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950/50 text-cyan-300 border border-cyan-800/40 uppercase tracking-wider">
                Open Source
              </span>
            </div>
            <div className="text-3xl sm:text-4xl font-bold font-mono text-white tracking-tight mb-1">
              10+
            </div>
            <h4 className="text-base font-semibold text-zinc-100 tracking-tight mb-2">
              GitHub Repositories
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              Engineered independent web applications like EcoTrack and Currency Converter, alongside collaborative full-stack projects across 10+ public repositories.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-center justify-between text-[11px] font-mono text-zinc-500">
            <span>Independent &amp; Team Projects</span>
            <a
              href="https://github.com/SuyashBorse"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 transition-colors inline-flex items-center gap-1 font-medium"
            >
              <span>Explore Code</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </motion.div>

        {/* Card 3: SIH '26 Internal Round Clear */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.15 }}
          className="glass-card rounded-xl p-5 sm:p-6 border border-zinc-800/80 hover:border-emerald-500/40 transition-all flex flex-col justify-between group"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-800/40 text-emerald-400 group-hover:scale-105 transition-transform">
                <Trophy className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950/50 text-emerald-300 border border-emerald-800/40 uppercase tracking-wider">
                National Hackathon
              </span>
            </div>
            <div className="text-3xl sm:text-4xl font-bold font-mono text-white tracking-tight mb-1 text-emerald-400">
              Cleared
            </div>
            <h4 className="text-base font-semibold text-zinc-100 tracking-tight mb-2">
              SIH &apos;26 Internal Round
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              Qualified through the competitive Smart India Hackathon 2026 college internal round with Team PARSU, contributing to literature research, Simulink modeling, and presentation.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-center justify-between text-[11px] font-mono text-zinc-500">
            <span>Research &amp; Presentation · Team PARSU</span>
            <span className="text-emerald-400 font-medium">Smart India Hackathon</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
