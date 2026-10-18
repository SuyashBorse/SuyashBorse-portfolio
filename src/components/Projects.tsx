"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projectsData } from "@/data/projects";
import {
  ReactLogo,
  TypeScriptLogo,
  NextLogo,
  PythonLogo,
  TailwindLogo,
  DatabaseLogo,
  BrainCpuLogo,
  PostgresElephantLogo,
  CloudLogo,
  NuxtTriangleLogo,
  SupabaseLightningLogo,
  Pm2ToolingLogo,
} from "@/components/TechLogos";

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  const getProjectConfig = (id: string) => {
    switch (id) {
      case "sniptide":
        return {
          icons: (
            <>
              <NextLogo className="w-10 h-10 sm:w-12 sm:h-12 text-zinc-100" />
              <PostgresElephantLogo className="w-10 h-10 sm:w-12 sm:h-12 text-zinc-100" />
              <CloudLogo className="w-10 h-10 sm:w-12 sm:h-12 text-zinc-100" />
            </>
          ),
          dateText: "May 2025",
          badgeStyle: "bg-[#052e16] border border-[#14532d]/60 text-[#22c55e] dark:text-[#4ade80]",
        };
      case "tourney":
        return {
          icons: (
            <>
              <NuxtTriangleLogo className="w-10 h-10 sm:w-12 sm:h-12 text-zinc-100" />
              <SupabaseLightningLogo className="w-10 h-10 sm:w-12 sm:h-12 text-zinc-100" />
              <Pm2ToolingLogo className="w-10 h-10 sm:w-12 sm:h-12 text-zinc-100" />
            </>
          ),
          dateText: "September 2024",
          badgeStyle: "bg-[#331407] border border-[#7c2d12]/60 text-[#ea580c] dark:text-[#fb923c]",
        };
      case "blackrose":
        return {
          icons: (
            <>
              <PythonLogo className="w-10 h-10 sm:w-12 sm:h-12 text-zinc-100" />
              <TypeScriptLogo className="w-10 h-10 sm:w-12 sm:h-12 text-zinc-100" />
            </>
          ),
          dateText: "May 2024",
          badgeStyle: "bg-[#052e16] border border-[#14532d]/60 text-[#22c55e] dark:text-[#4ade80]",
        };
      case "ecopilot-ai":
        return {
          icons: (
            <>
              <PythonLogo className="w-10 h-10 sm:w-12 sm:h-12 text-zinc-100" />
              <TypeScriptLogo className="w-10 h-10 sm:w-12 sm:h-12 text-zinc-100" />
              <ReactLogo className="w-10 h-10 sm:w-12 sm:h-12 text-zinc-100" />
            </>
          ),
          dateText: "September 2026",
          badgeStyle: "bg-[#331407] border border-[#7c2d12]/60 text-[#ea580c] dark:text-[#fb923c]",
        };
      case "kanflow":
        return {
          icons: (
            <>
              <NextLogo className="w-10 h-10 sm:w-12 sm:h-12 text-zinc-100" />
              <TailwindLogo className="w-10 h-10 sm:w-12 sm:h-12 text-zinc-100" />
              <DatabaseLogo className="w-10 h-10 sm:w-12 sm:h-12 text-zinc-100" />
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
              <NextLogo className="w-10 h-10 sm:w-12 sm:h-12 text-zinc-100" />
              <BrainCpuLogo className="w-10 h-10 sm:w-12 sm:h-12 text-zinc-100" />
              <DatabaseLogo className="w-10 h-10 sm:w-12 sm:h-12 text-zinc-100" />
            </>
          ),
          dateText: "May 2025",
          badgeStyle: "bg-[#052e16] border border-[#14532d]/60 text-[#22c55e] dark:text-[#4ade80]",
        };
    }
  };

  const displayedProjects = showAll ? projectsData : projectsData.slice(0, 3);

  return (
    <section
      id="projects"
      className="mt-16 sm:mt-24 max-w-5xl mx-auto px-4 scroll-mt-20 w-full"
      aria-label="Projects Showcase"
    >
      {/* Section Title */}
      <h3 className="font-semibold tracking-tighter text-2xl sm:text-3xl text-white mb-5 sm:mb-6">
        Projects
      </h3>

      {/* Grid of Dino Kupinic Exact Large Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <AnimatePresence>
          {displayedProjects.map((project, idx) => {
            const config = getProjectConfig(project.id);

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, delay: idx * 0.06 }}
                className="flex flex-col border border-zinc-800 bg-[#09090b] rounded-sm overflow-hidden hover:border-zinc-700 transition-colors shadow-sm group"
              >
                {/* Upper Large Visual Container (sm:h-80 md:h-[340px]) */}
                <div className="relative flex h-72 sm:h-80 md:h-[340px] w-full items-center justify-center bg-gradient-to-t from-[#09090b] via-zinc-900 to-zinc-800/80 border-b border-zinc-800 overflow-hidden">
                  {/* Big White Centered Tech Logos */}
                  <div className="flex items-center justify-center gap-4 sm:gap-5 select-none transition-transform duration-200 motion-safe:group-hover:scale-105">
                    {config.icons}
                  </div>

                  {/* Date / Status Pill at Bottom Right */}
                  <div className={`absolute right-3 bottom-3 rounded px-2.5 py-0.5 text-xs font-mono font-normal ${config.badgeStyle}`}>
                    {config.dateText}
                  </div>
                </div>

                {/* Lower Content */}
                <div className="p-4 sm:p-5 flex flex-col justify-between flex-1">
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-white tracking-tight truncate group-hover:text-zinc-200 transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-zinc-400 text-xs sm:text-sm line-clamp-2 mt-1.5 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* All Projects Expand / Toggle Button */}
      <div className="mt-6 sm:mt-8">
        <button
          type="button"
          onClick={() => setShowAll(!showAll)}
          className="inline-flex items-center justify-center rounded-sm bg-white text-zinc-950 font-medium text-xs sm:text-sm px-4 py-2 hover:bg-zinc-200 transition-colors shadow-xs cursor-pointer select-none"
        >
          {showAll ? "Show Less" : "All Projects"}
        </button>
      </div>
    </section>
  );
}
