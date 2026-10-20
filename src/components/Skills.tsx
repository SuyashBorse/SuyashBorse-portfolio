"use client";

import React from "react";
import { Terminal, Layout, Database, Wrench, Cpu } from "lucide-react";
import { motion } from "framer-motion";

interface SkillCategory {
  title: string;
  category: string;
  icon: React.ReactNode;
  skills: string[];
  colSpan?: string;
  hasDot?: boolean;
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    category: "Core Foundations",
    icon: <Terminal className="w-4 h-4 text-zinc-300" />,
    skills: ["Java", "JavaScript", "TypeScript", "HTML5", "CSS3", "C"],
    colSpan: "md:col-span-1 lg:col-span-2",
  },
  {
    title: "Frameworks & UI",
    category: "Styling & Build",
    icon: <Layout className="w-4 h-4 text-zinc-300" />,
    skills: ["Spring", "Tailwind CSS", "Vite", "Figma"],
    colSpan: "md:col-span-1 lg:col-span-2",
  },
  {
    title: "Developer Tools",
    category: "Workflow & Build",
    icon: <Wrench className="w-4 h-4 text-zinc-300" />,
    skills: ["Git", "GitHub", "VS Code", "Maven", "Gradle", "Postman"],
    colSpan: "md:col-span-1 lg:col-span-2",
  },
  {
    title: "Databases & Cloud",
    category: "Storage & Services",
    icon: <Database className="w-4 h-4 text-zinc-300" />,
    skills: ["PostgreSQL", "MySQL", "Supabase", "Firebase", "Firestore", "Google Cloud Console"],
    colSpan: "md:col-span-1 lg:col-span-3",
  },
  {
    title: "Computer Science Core",
    category: "Academic Fundamentals",
    icon: <Cpu className="w-4 h-4 text-emerald-400" />,
    skills: [
      "Data Structures & Algos",
      "Object-Oriented Design",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
    ],
    colSpan: "md:col-span-2 lg:col-span-3",
    hasDot: true,
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="mt-20 sm:mt-32 max-w-5xl mx-auto px-4 scroll-mt-20 w-full"
      aria-label="Technical Skills"
    >
      <div className="mb-6 sm:mb-8">
        <h3 className="font-semibold tracking-tighter text-2xl sm:text-3xl text-white">
          Skills
        </h3>
        <p className="text-zinc-500 font-mono text-xs sm:text-sm mt-1">
          Detailed technical inventory &amp; fundamentals
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5">
        {skillCategories.map((cat, idx) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: idx * 0.08 }}
            className={`glass-card rounded-xl p-6 sm:p-7 flex flex-col justify-between ${
              cat.colSpan || "col-span-1"
            }`}
          >
            <div>
              <div className="flex items-center gap-2.5 mb-5">
                <div className="p-2 rounded-lg bg-white/[0.06] backdrop-blur-md border border-white/10">
                  {cat.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    {cat.hasDot && (
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    )}
                    <h4 className="text-base font-semibold text-white tracking-tight">
                      {cat.title}
                    </h4>
                  </div>
                  <span className="text-[11px] font-mono text-zinc-400 uppercase block">
                    {cat.category}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.06] mt-3">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/[0.05] backdrop-blur-md text-zinc-200 border border-white/[0.08] hover:border-white/20 transition-colors select-none"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
