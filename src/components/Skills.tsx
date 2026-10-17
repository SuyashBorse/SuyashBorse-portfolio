"use client";

import React from "react";
import { Terminal, Layout, Database, Wrench, Sparkles, Check } from "lucide-react";
import { motion } from "framer-motion";

interface SkillCategory {
  title: string;
  category: string;
  icon: React.ReactNode;
  skills: string[];
  accentColor: "indigo" | "cyan";
  colSpan?: string;
  description: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    category: "Languages",
    icon: <Terminal className="w-5 h-5" />,
    skills: ["Java", "JavaScript", "TypeScript", "SQL"],
    accentColor: "indigo",
    colSpan: "md:col-span-2",
    description: "Core languages for building performant algorithmic solutions and scalable web backends.",
  },
  {
    title: "Frontend Engineering",
    category: "Frontend",
    icon: <Layout className="w-5 h-5" />,
    skills: ["React", "Tailwind CSS", "Next.js"],
    accentColor: "cyan",
    colSpan: "md:col-span-1",
    description: "Modern component-driven web interfaces with responsive layouts.",
  },
  {
    title: "Backend & Data",
    category: "Backend / Databases",
    icon: <Database className="w-5 h-5" />,
    skills: ["Node.js", "Supabase", "Firebase", "MySQL", "MongoDB"],
    accentColor: "cyan",
    colSpan: "md:col-span-1",
    description: "Relational and NoSQL data modeling, authentication, and RESTful service backends.",
  },
  {
    title: "Tools & Ecosystem",
    category: "Developer Tools",
    icon: <Wrench className="w-5 h-5" />,
    skills: ["Git", "GitHub", "VS Code", "Power BI"],
    accentColor: "indigo",
    colSpan: "md:col-span-2",
    description: "Version control workflows, data analysis, and modern IDE tooling.",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-4 max-w-6xl mx-auto scroll-mt-20"
      aria-label="Technical Skills and Technologies"
    >
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-cyan-400 bg-cyan-950/30 border border-cyan-800/40 mb-3">
          <span>02. TOOLKIT</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
          Skills &amp; Technologies
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full mb-6"></div>
        <p className="text-zinc-400 max-w-2xl text-sm sm:text-base leading-relaxed">
          Structured across language foundations, frontend engineering, data storage, and developer tooling.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillCategories.map((cat, idx) => (
          <motion.div
            key={cat.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className={`p-6 sm:p-8 rounded-2xl bg-[#171717] border border-zinc-800 hover:border-zinc-700 transition-all duration-300 relative group overflow-hidden flex flex-col justify-between ${
              cat.colSpan || ""
            }`}
          >
            {/* Ambient background glow on hover */}
            <div
              className={`absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none ${
                cat.accentColor === "indigo" ? "bg-indigo-600/10" : "bg-cyan-600/10"
              }`}
            ></div>

            <div>
              {/* Header */}
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div
                    className={`p-2.5 rounded-xl border transition-colors ${
                      cat.accentColor === "indigo"
                        ? "bg-indigo-500/10 border-indigo-500/20 text-indigo-400 group-hover:border-indigo-500/40"
                        : "bg-cyan-500/10 border-cyan-500/20 text-cyan-400 group-hover:border-cyan-500/40"
                    }`}
                  >
                    {cat.icon}
                  </div>
                  <div>
                    <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider block">
                      {cat.category}
                    </span>
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {cat.title}
                    </h3>
                  </div>
                </div>
              </div>

              <p className="text-zinc-400 text-xs sm:text-sm mb-6 leading-relaxed">
                {cat.description}
              </p>
            </div>

            {/* Skill Pills */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-800/80">
              {cat.skills.map((skill) => (
                <div
                  key={skill}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-zinc-900 border border-zinc-800 text-zinc-200 group-hover:border-zinc-700 hover:text-white transition-all shadow-sm"
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      cat.accentColor === "indigo" ? "bg-indigo-400" : "bg-cyan-400"
                    }`}
                  ></span>
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
