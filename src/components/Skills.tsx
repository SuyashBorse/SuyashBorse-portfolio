"use client";

import React from "react";
import { Terminal, Layout, Database, Wrench } from "lucide-react";
import { motion } from "framer-motion";

interface SkillCategory {
  title: string;
  category: string;
  icon: React.ReactNode;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    category: "Core Foundations",
    icon: <Terminal className="w-4 h-4 text-zinc-300" />,
    skills: ["Java", "JavaScript", "TypeScript", "SQL"],
  },
  {
    title: "Frontend",
    category: "Interface Engineering",
    icon: <Layout className="w-4 h-4 text-zinc-300" />,
    skills: ["React", "Tailwind CSS", "Next.js"],
  },
  {
    title: "Backend & Data",
    category: "Services & Databases",
    icon: <Database className="w-4 h-4 text-zinc-300" />,
    skills: ["Node.js", "Supabase", "Firebase", "MySQL", "MongoDB"],
  },
  {
    title: "Developer Tools",
    category: "Workflow & Analytics",
    icon: <Wrench className="w-4 h-4 text-zinc-300" />,
    skills: ["Git", "GitHub", "VS Code", "Power BI"],
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
          Detailed technical inventory
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {skillCategories.map((cat, idx) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: idx * 0.08 }}
            className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-4 hover:border-zinc-700 transition-colors flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="p-1.5 rounded-md bg-zinc-900 border border-zinc-800">
                  {cat.icon}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white tracking-tight">
                    {cat.title}
                  </h4>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase block">
                    {cat.category}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-zinc-900 mt-2">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2 py-0.5 rounded text-[11px] font-mono bg-zinc-900 text-zinc-300 border border-zinc-800/80"
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
