"use client";

import React from "react";
import { motion } from "framer-motion";
import { projectsData } from "@/data/projects";
import {
  ReactLogo,
  TypeScriptLogo,
  NextLogo,
  PythonLogo,
  TailwindLogo,
  DatabaseLogo,
  BrainCpuLogo,
} from "@/components/TechLogos";

export default function Projects() {
  const getProjectConfig = (id: string) => {
    switch (id) {
      case "ecopilot-ai":
        return {
          icons: (
            <>
              <PythonLogo className="w-8 h-8 sm:w-9 sm:h-9 text-zinc-100" />
              <TypeScriptLogo className="w-8 h-8 sm:w-9 sm:h-9 text-zinc-100" />
              <ReactLogo className="w-8 h-8 sm:w-9 sm:h-9 text-zinc-100" />
            </>
          ),
          dateText: "September 2026",
          badgeStyle: "bg-[#331407] border border-[#7c2d12]/60 text-[#ea580c] dark:text-[#fb923c]",
        };
      case "kanflow":
        return {
          icons: (
            <>
              <NextLogo className="w-8 h-8 sm:w-9 sm:h-9 text-zinc-100" />
              <TailwindLogo className="w-8 h-8 sm:w-9 sm:h-9 text-zinc-100" />
              <DatabaseLogo className="w-8 h-8 sm:w-9 sm:h-9 text-zinc-100" />
            </>
          ),
          dateText: "October 2025",
          badgeStyle: "bg-[#331407] border border-[#7c2d12]/60 text-[#ea580c] dark:text-[#fb923c]",
        };
      case "sih-2026":
      default:
        return {
          icons: (
            <>
              <NextLogo className="w-8 h-8 sm:w-9 sm:h-9 text-zinc-100" />
              <BrainCpuLogo className="w-8 h-8 sm:w-9 sm:h-9 text-zinc-100" />
              <DatabaseLogo className="w-8 h-8 sm:w-9 sm:h-9 text-zinc-100" />
            </>
          ),
          dateText: "May 2025",
          badgeStyle: "bg-[#052e16] border border-[#14532d]/60 text-[#22c55e] dark:text-[#4ade80]",
        };
    }
  };

  return (
    <section
      id="projects"
      className="mt-16 sm:mt-28 max-w-5xl mx-auto px-4 scroll-mt-20 w-full"
      aria-label="Projects Showcase"
    >
      {/* Section Title */}
      <h3 className="font-semibold tracking-tighter text-2xl sm:text-3xl text-white mb-5 sm:mb-6">
        Projects
      </h3>

      {/* Grid of Dino Kupinic Exact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {projectsData.map((project, idx) => {
          const config = getProjectConfig(project.id);

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              className="flex flex-col border border-zinc-800 bg-[#09090b] rounded-sm overflow-hidden hover:border-zinc-700 transition-colors shadow-sm group"
            >
              {/* Upper Visual Container */}
              <div className="relative flex h-56 sm:h-64 w-full items-center justify-center bg-gradient-to-t from-[#09090b] via-zinc-900 to-zinc-800/80 border-b border-zinc-800 overflow-hidden">
                {/* Big White Centered Tech Logos */}
                <div className="flex items-center justify-center gap-3.5 select-none transition-transform duration-200 motion-safe:group-hover:scale-105">
                  {config.icons}
                </div>

                {/* Date / Status Pill at Bottom Right */}
                <div className={`absolute right-2.5 bottom-2.5 rounded px-2 py-0.5 text-xs font-mono font-normal ${config.badgeStyle}`}>
                  {config.dateText}
                </div>
              </div>

              {/* Lower Content */}
              <div className="p-3.5 sm:p-4 flex flex-col justify-between flex-1">
                <div>
                  <h4 className="text-base font-semibold text-white tracking-tight truncate group-hover:text-zinc-200 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-zinc-400 text-xs sm:text-sm line-clamp-2 mt-1 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* All Projects Button */}
      <div className="mt-6">
        <a
          href="#projects"
          className="inline-flex items-center justify-center rounded-sm bg-white text-zinc-950 font-medium text-xs sm:text-sm px-4 py-2 hover:bg-zinc-200 transition-colors shadow-xs"
        >
          All Projects
        </a>
      </div>
    </section>
  );
}
