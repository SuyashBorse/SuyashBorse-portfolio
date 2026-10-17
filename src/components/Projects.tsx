"use client";

import React from "react";
import { ExternalLink, Layers, FolderGit2, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { projectsData, Project } from "@/data/projects";
import { GithubIcon } from "@/components/SocialIcons";

export default function Projects() {
  // Map project tech icons for the visual banner
  const getBannerIcons = (project: Project) => {
    switch (project.id) {
      case "ecopilot-ai":
        return ["Next.js", "TypeScript", "Tailwind"];
      case "kanflow":
        return ["React", "TypeScript", "Tailwind"];
      case "sih-2026":
        return ["Architecture", "Python", "Deep Learning"];
      default:
        return project.techStack;
    }
  };

  const getStatusBadge = (project: Project) => {
    if (project.isBlueprint) {
      return { text: "Architecture Blueprint", color: "bg-amber-950/50 text-amber-300 border-amber-800/60" };
    }
    return { text: "Active Project", color: "bg-zinc-800/80 text-zinc-300 border-zinc-700/60" };
  };

  return (
    <section
      id="projects"
      className="mt-20 sm:mt-32 max-w-5xl mx-auto px-4 scroll-mt-20 w-full"
      aria-label="Projects Showcase"
    >
      <div className="flex items-center justify-between mb-6 sm:mb-8">
        <div>
          <h3 className="font-semibold tracking-tighter text-2xl sm:text-3xl text-white">
            Projects
          </h3>
          <p className="text-zinc-500 font-mono text-xs sm:text-sm mt-1">
            Featured applications &amp; system architecture blueprints
          </p>
        </div>
      </div>

      {/* Grid of Dino Kupinic Styled Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {projectsData.map((project: Project, idx: number) => {
          const badge = getStatusBadge(project);
          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="flex flex-col rounded-lg border border-zinc-800 bg-zinc-950/60 hover:border-zinc-700 transition-all duration-200 shadow-sm overflow-hidden group"
            >
              {/* Visual Banner Container */}
              <div className="relative flex h-36 sm:h-44 w-full items-center justify-center bg-gradient-to-t from-zinc-900 to-zinc-950 border-b border-zinc-800/80 overflow-hidden group-hover:from-zinc-900/80 transition-colors">
                {/* Tech Badges Centered in Banner */}
                <div className="flex items-center justify-center gap-2 px-3">
                  {getBannerIcons(project).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded bg-zinc-900/90 border border-zinc-800 text-xs font-mono font-medium text-zinc-300 shadow-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Status / Date Pill at Bottom-Right */}
                <div className={`absolute right-2.5 bottom-2.5 rounded border px-2 py-0.5 text-[11px] font-mono ${badge.color}`}>
                  {badge.text}
                </div>
              </div>

              {/* Content Body */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-zinc-400 text-xs sm:text-sm line-clamp-2 mt-1.5 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Footer Link Affordances */}
                <div className="flex items-center gap-2 pt-4 mt-3 border-t border-zinc-900 text-xs font-mono">
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-zinc-300 hover:text-white transition-colors"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>Code</span>
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-zinc-600 select-none cursor-not-allowed">
                      <GithubIcon className="w-3.5 h-3.5 opacity-50" />
                      <span>Code Pending</span>
                    </span>
                  )}

                  <span className="text-zinc-700">•</span>

                  {project.liveDemoUrl ? (
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-zinc-300 hover:text-white transition-colors"
                      aria-label={`Open demo for ${project.title}`}
                    >
                      <span>Live Demo</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  ) : (
                    <span className="text-zinc-600 select-none cursor-not-allowed">
                      {project.isBlueprint ? "Blueprint Only" : "Demo Pending"}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
