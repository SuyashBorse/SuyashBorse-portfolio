"use client";

import React from "react";
import { FolderGit2, ExternalLink, FileText, Layers, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";
import { projectsData, Project } from "@/data/projects";
import { GithubIcon } from "@/components/SocialIcons";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-4 max-w-6xl mx-auto scroll-mt-20"
      aria-label="Projects Showcase"
    >
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-indigo-400 bg-indigo-950/30 border border-indigo-800/40 mb-3">
          <span>03. SELECTED WORK</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
          Featured Projects
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full mb-6"></div>
        <p className="text-zinc-400 max-w-2xl text-sm sm:text-base leading-relaxed">
          Showcasing systems, applications, and forensic architecture pipelines.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projectsData.map((project: Project, idx: number) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-[#171717] border border-zinc-800 hover:border-zinc-700 hover:shadow-card-hover transition-all duration-300 relative group overflow-hidden"
          >
            {/* Top gradient accent line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500/40 to-cyan-500/40 opacity-0 group-hover:opacity-100 transition-opacity"></div>

            <div>
              {/* Card Header & Badge */}
              <div className="flex items-start justify-between gap-3 mb-5">
                <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-indigo-400 group-hover:text-cyan-400 group-hover:border-cyan-500/30 transition-colors">
                  {project.isBlueprint ? (
                    <Layers className="w-5 h-5" />
                  ) : (
                    <FolderGit2 className="w-5 h-5" />
                  )}
                </div>

                {project.isBlueprint ? (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-mono text-amber-400 bg-amber-950/30 border border-amber-800/40">
                    <span>Architecture Blueprint</span>
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-mono text-cyan-400 bg-cyan-950/30 border border-cyan-800/40">
                    <span>Active Project</span>
                  </span>
                )}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-cyan-300 transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                {project.description.startsWith("[") ? (
                  <span className="italic text-zinc-500 font-mono text-xs block p-3 rounded-lg bg-zinc-900/60 border border-zinc-800/60">
                    {project.description}
                  </span>
                ) : (
                  project.description
                )}
              </p>
            </div>

            <div>
              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-zinc-800/70">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-zinc-900/90 text-zinc-300 border border-zinc-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons / Placeholders */}
              <div className="flex items-center gap-2 pt-2" aria-label={`Links for ${project.title}`}>
                {/* GitHub Link / Placeholder */}
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-xs font-medium text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 transition-colors focus-visible:ring-2 focus-visible:ring-cyan-400"
                    aria-label={`View ${project.title} source on GitHub (opens in new tab)`}
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>Code</span>
                  </a>
                ) : (
                  <span
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-mono text-zinc-500 bg-zinc-900/40 border border-zinc-900 cursor-not-allowed select-none"
                    title="Repository URL pending"
                    aria-label={`${project.title} repository URL pending configuration`}
                  >
                    <GithubIcon className="w-3.5 h-3.5 opacity-50" />
                    <span>Code Pending</span>
                  </span>
                )}

                {/* Live Demo Link / Placeholder */}
                {project.liveDemoUrl ? (
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-xs font-medium text-white bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 transition-colors focus-visible:ring-2 focus-visible:ring-cyan-400"
                    aria-label={`Open live demo for ${project.title} (opens in new tab)`}
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Demo</span>
                  </a>
                ) : (
                  <span
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-mono text-zinc-500 bg-zinc-900/40 border border-zinc-900 cursor-not-allowed select-none"
                    title={project.isBlueprint ? "Blueprint Architecture document pending" : "Live demo link pending"}
                    aria-label={`${project.title} demo link pending configuration`}
                  >
                    <ExternalLink className="w-3.5 h-3.5 opacity-50" />
                    <span>{project.isBlueprint ? "Blueprint Doc" : "Demo Pending"}</span>
                  </span>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
