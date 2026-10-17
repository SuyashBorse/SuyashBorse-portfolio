"use client";

import React from "react";
import { MapPin, Trophy, Share2, Code2, GraduationCap, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { GithubIcon, LinkedinIcon, CodeChefIcon, LeetCodeIcon } from "@/components/SocialIcons";
import { socialLinksData } from "@/data/socialLinks";

const row1Skills = [
  "Java",
  "JavaScript",
  "TypeScript",
  "SQL",
  "React",
  "Tailwind CSS",
  "Next.js",
];

const row2Skills = [
  "Node.js",
  "Supabase",
  "Firebase",
  "MySQL",
  "MongoDB",
  "Git",
  "GitHub",
  "VS Code",
  "Power BI",
];

export default function About() {
  return (
    <section
      id="about"
      className="mt-20 sm:mt-32 max-w-5xl mx-auto px-4 scroll-mt-20 w-full"
      aria-label="About Suyash Anil Borse"
    >
      <div className="mb-6 sm:mb-8">
        <h3 className="font-semibold tracking-tighter text-2xl sm:text-3xl text-white">
          About me
        </h3>
        <p className="text-zinc-500 font-mono text-xs sm:text-sm mt-1">
          Background, algorithmic focus &amp; technical proficiencies
        </p>
      </div>

      {/* Bento Grid — Dino Kupinic Layout with Glassmorphism */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Card 1: Location & College Background (Col-span-2) */}
        <div className="md:col-span-2 glass-card rounded-xl p-5 relative overflow-hidden group">
          <div className="flex items-center space-x-2 font-mono text-xs text-zinc-400 uppercase tracking-wider mb-4">
            <MapPin className="w-4 h-4 text-cyan-400" />
            <h4 className="font-semibold text-zinc-200">Maharashtra, India · Academic Base</h4>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-3">
            <div>
              <p className="text-lg sm:text-xl font-bold text-white tracking-tight">
                R. C. Patel Institute of Technology
              </p>
              <p className="text-zinc-400 text-xs sm:text-sm font-mono mt-1">
                2nd-year B.Tech Student in Information Technology Engineering
              </p>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/[0.04] backdrop-blur-md border border-white/10 text-xs font-mono text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              <span>21.35° N, 74.88° E</span>
            </div>
          </div>
        </div>

        {/* Card 2: Daily Algorithmic Practice & DSA */}
        <div className="glass-card rounded-xl p-5 flex flex-col justify-between">
          <div className="flex items-center space-x-2 font-mono text-xs text-zinc-400 uppercase tracking-wider mb-4">
            <Trophy className="w-4 h-4 text-indigo-400" />
            <h4 className="font-semibold text-zinc-200">Problem Solving</h4>
          </div>

          <div className="my-2">
            <div className="text-4xl sm:text-5xl font-black text-white tracking-tight font-mono">
              DAILY
            </div>
            <p className="text-xs sm:text-sm text-zinc-400 mt-2 leading-relaxed">
              Practicing on <strong className="text-zinc-200">CodeChef</strong> &amp;{" "}
              <strong className="text-zinc-200">LeetCode</strong> with a deep focus on Data Structures &amp; Algorithms.
            </p>
          </div>

          <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06] text-xs font-mono text-zinc-500">
            <span className="flex items-center gap-1.5 text-zinc-400">
              <CodeChefIcon className="w-3.5 h-3.5 text-cyan-400" />
              <span>CodeChef</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5 text-zinc-400">
              <LeetCodeIcon className="w-3.5 h-3.5 text-cyan-400" />
              <span>LeetCode</span>
            </span>
          </div>
        </div>

        {/* Card 3: Social Links List (Dino Style Stack) */}
        <div className="glass-card rounded-xl p-5 flex flex-col justify-between">
          <div className="flex items-center space-x-2 font-mono text-xs text-zinc-400 uppercase tracking-wider mb-3">
            <Share2 className="w-4 h-4 text-cyan-400" />
            <h4 className="font-semibold text-zinc-200">Socials</h4>
          </div>

          <div className="flex flex-col gap-2.5 my-1">
            {socialLinksData.map((social) => {
              if (social.url) {
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-xs font-mono text-zinc-300 hover:text-white hover:underline decoration-dotted transition-colors py-1"
                  >
                    <span className="flex items-center gap-2">
                      {social.iconName === "github" && <GithubIcon className="w-3.5 h-3.5" />}
                      <span>{social.name}</span>
                    </span>
                    <ExternalLink className="w-3 h-3 text-zinc-500" />
                  </a>
                );
              }
              return (
                <div
                  key={social.name}
                  className="flex items-center justify-between text-xs font-mono text-zinc-500 py-1"
                >
                  <span className="flex items-center gap-2">
                    {social.iconName === "linkedin" && <LinkedinIcon className="w-3.5 h-3.5" />}
                    {social.iconName === "codechef" && <CodeChefIcon className="w-3.5 h-3.5" />}
                    {social.iconName === "leetcode" && <LeetCodeIcon className="w-3.5 h-3.5" />}
                    <span>{social.name}</span>
                  </span>
                  <span className="text-[10px] text-zinc-600 bg-zinc-900/60 px-1 rounded">Soon</span>
                </div>
              );
            })}
          </div>

          <div className="pt-3 border-t border-white/[0.06] text-[11px] font-mono text-zinc-500">
            Open for collaborations
          </div>
        </div>

        {/* Card 4: Infinite Scrolling Skills Marquee (Col-span-2) */}
        <div className="md:col-span-2 glass-card rounded-xl p-5 overflow-hidden">
          <div className="flex items-center space-x-2 font-mono text-xs text-zinc-400 uppercase tracking-wider mb-4">
            <Code2 className="w-4 h-4 text-indigo-400" />
            <h4 className="font-semibold text-zinc-200">Tech Stack &amp; Tooling</h4>
          </div>

          {/* Marquee Rows with Edge Gradient Masks */}
          <div className="mask-gradient-x overflow-hidden py-1 space-y-2.5">
            {/* Row 1: Leftward Marquee */}
            <div className="animate-marquee gap-2.5">
              {[...row1Skills, ...row1Skills, ...row1Skills].map((skill, index) => (
                <div
                  key={`r1-${skill}-${index}`}
                  className="px-3.5 py-1.5 rounded-md border border-white/[0.08] bg-white/[0.04] backdrop-blur-md text-xs font-mono text-zinc-200 select-none hover:border-white/20 transition-colors"
                >
                  {skill}
                </div>
              ))}
            </div>

            {/* Row 2: Rightward Reverse Marquee */}
            <div className="animate-marquee-reverse gap-2.5">
              {[...row2Skills, ...row2Skills, ...row2Skills].map((skill, index) => (
                <div
                  key={`r2-${skill}-${index}`}
                  className="px-3.5 py-1.5 rounded-md border border-white/[0.08] bg-white/[0.04] backdrop-blur-md text-xs font-mono text-zinc-200 select-none hover:border-white/20 transition-colors"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
