"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { projectsData } from "@/data/projects";
import { getProjectVisual } from "@/data/projectVisuals";

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  // Suyash's real projects (EcoTrack, Currency Converter, VisionRaksha, VILP) are first 4 in projectsData
  const displayedProjects = showAll ? projectsData : projectsData.slice(0, 4);

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

      {/* Grid of Dino Kupinic Large Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        <AnimatePresence>
          {displayedProjects.map((project, idx) => {
            const visual = getProjectVisual(project.id);

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, delay: idx * 0.06 }}
                className="h-full"
              >
                <div className="relative flex flex-col h-full border border-zinc-800 bg-[#09090b] rounded-sm overflow-hidden hover:border-zinc-700 transition-[border-color,transform] shadow-sm group">
                  {/* Live App Direct Link Button if project is live */}
                  {project.liveDemoUrl && (
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-3 left-3 z-20 inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-white hover:bg-zinc-200 text-zinc-950 font-medium text-xs shadow-md transition-all active:scale-95"
                      title={`Open ${project.title} live application`}
                      aria-label={`Open ${project.title} live app`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
                      <span>Open Live App</span>
                      <ExternalLink className="w-3 h-3 text-zinc-700" />
                    </a>
                  )}

                  {/* Upper Large Visual Container (sm:h-80 md:h-[340px]) */}
                  <Link
                    href={`/projects/${project.id}`}
                    className="relative flex h-72 sm:h-80 md:h-[340px] w-full items-center justify-center bg-gradient-to-t from-[#09090b] via-zinc-900 to-zinc-800/80 border-b border-zinc-800 overflow-hidden cursor-pointer"
                    aria-label={`View details for ${project.title}`}
                  >
                    {/* Big White Centered Tech Logos */}
                    <div className="flex items-center justify-center gap-4 sm:gap-5 select-none transition-transform duration-200 motion-safe:group-hover:scale-105">
                      {visual.icons}
                    </div>

                    {/* Date / Status Pill at Bottom Right */}
                    <div
                      className={`absolute right-3 bottom-3 rounded px-2.5 py-0.5 text-xs font-mono font-normal ${visual.badgeStyle}`}
                    >
                      {visual.dateText}
                    </div>
                  </Link>

                  {/* Lower Content */}
                  <Link
                    href={`/projects/${project.id}`}
                    className="p-4 sm:p-5 flex flex-col justify-between flex-1 cursor-pointer"
                    aria-label={`Read more about ${project.title}`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2 min-w-0">
                          <h4 className="text-base sm:text-lg font-semibold text-white tracking-tight truncate group-hover:text-zinc-200 transition-colors">
                            {project.title}
                          </h4>
                          {project.liveDemoUrl && (
                            <span className="inline-flex items-center gap-1 rounded bg-emerald-950/80 border border-emerald-800/60 px-1.5 py-0.5 text-[10px] font-mono text-emerald-400">
                              <span className="w-1 h-1 rounded-full bg-emerald-400"></span>
                              Live
                            </span>
                          )}
                        </div>
                        <span
                          className="text-xs font-mono text-zinc-500 opacity-0 group-hover:opacity-100 transition-opacity shrink-0"
                          aria-hidden="true"
                        >
                          →
                        </span>
                      </div>
                      <p className="text-zinc-400 text-xs sm:text-sm line-clamp-2 mt-1.5 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </Link>
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
