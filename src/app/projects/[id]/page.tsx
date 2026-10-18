import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projectsData } from "@/data/projects";
import { getProjectVisual } from "@/data/projectVisuals";
import { ArrowLeft, ExternalLink, CheckCircle2, Terminal } from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return {
      title: "Project Not Found · Suyash Borse",
    };
  }

  return {
    title: `${project.title} · Suyash Borse`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  const visual = getProjectVisual(project.id);
  const otherProjects = projectsData.filter((p) => p.id !== project.id).slice(0, 3);

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-14 text-zinc-100">
      {/* Breadcrumb & Back Link */}
      <div className="flex items-center justify-between mb-8 text-xs sm:text-sm font-mono">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to Projects</span>
        </Link>

        <div className="flex items-center gap-2 text-zinc-500">
          <Link href="/#projects" className="hover:text-zinc-300 transition-colors">
            Projects
          </Link>
          <span>/</span>
          <span className="text-zinc-200 truncate max-w-[180px] sm:max-w-none">
            {project.title}
          </span>
        </div>
      </div>

      {/* Project Header Info */}
      <header className="mb-8">
        <div className="flex flex-wrap items-center gap-2.5 mb-3">
          <span
            className={`rounded px-2.5 py-0.5 text-xs font-mono font-normal ${visual.badgeStyle}`}
          >
            {visual.dateText}
          </span>
          {project.status && (
            <span className="rounded px-2.5 py-0.5 text-xs font-mono border border-zinc-700 bg-zinc-900/80 text-zinc-300">
              {project.status}
            </span>
          )}
          {project.role && (
            <span className="rounded px-2.5 py-0.5 text-xs font-mono border border-zinc-800 text-zinc-400">
              Role: {project.role}
            </span>
          )}
        </div>

        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
          {project.title}
        </h1>

        <p className="text-base sm:text-xl text-zinc-400 mt-3 font-normal leading-relaxed">
          {project.description}
        </p>

        {/* Action Links */}
        <div className="flex flex-wrap items-center gap-3 mt-5">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm bg-zinc-900 border border-zinc-700 hover:border-zinc-500 text-zinc-200 text-xs sm:text-sm font-mono transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Repository on GitHub</span>
            </a>
          )}
          {project.liveDemoUrl && (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm bg-white text-zinc-950 font-medium text-xs sm:text-sm transition-colors hover:bg-zinc-200"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </header>

      {/* Large Visual Card Header with Tech Logos matching homepage styling */}
      <div className="relative flex h-72 sm:h-80 md:h-[340px] w-full items-center justify-center bg-gradient-to-t from-[#09090b] via-zinc-900 to-zinc-800/80 border border-zinc-800 rounded-sm overflow-hidden mb-12 shadow-sm">
        <div className="flex items-center justify-center gap-5 select-none scale-110 sm:scale-125">
          {visual.icons}
        </div>
        <div
          className={`absolute right-3 bottom-3 rounded px-2.5 py-0.5 text-xs font-mono font-normal ${visual.badgeStyle}`}
        >
          {visual.dateText}
        </div>
      </div>

      {/* Project Body */}
      <div className="space-y-10 text-zinc-300">
        {/* Detailed Overview */}
        <section>
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-white mb-3">
            Description
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-zinc-300 font-normal">
            {project.longDescription || project.description}
          </p>
        </section>

        {/* Key Features */}
        {project.keyFeatures && project.keyFeatures.length > 0 && (
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-white mb-4">
              Key Highlights & Capabilities
            </h2>
            <ul className="space-y-2.5">
              {project.keyFeatures.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-sm sm:text-base leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-1 shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Architecture & Engineering */}
        {project.architecture && (
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-white mb-3">
              Architecture & Engineering
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-zinc-300 font-normal">
              {project.architecture}
            </p>
          </section>
        )}

        {/* Technologies Stack */}
        <section>
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-white mb-4">
            Technologies & Tools
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-sm bg-zinc-900 border border-zinc-800 text-xs sm:text-sm font-mono text-zinc-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Blueprint Notice if blueprint */}
        {project.isBlueprint && (
          <section className="p-4 rounded-sm border border-zinc-800 bg-zinc-900/50 flex items-start gap-3 text-xs sm:text-sm text-zinc-400 font-mono">
            <Terminal className="w-4 h-4 text-zinc-300 mt-0.5 shrink-0" />
            <div>
              <p className="text-zinc-200 font-semibold mb-1">Architecture Blueprint</p>
              <p>
                This project was prepared and structured as an engineering blueprint for the Smart India Hackathon. Full technical diagrams and reproducible inference benchmarks are available upon request.
              </p>
            </div>
          </section>
        )}
      </div>

      {/* More Projects Section */}
      <section className="mt-16 sm:mt-24 pt-10 border-t border-zinc-800">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-white">
            More Projects
          </h3>
          <Link
            href="/#projects"
            className="text-xs sm:text-sm font-mono text-zinc-400 hover:text-white transition-colors"
          >
            View all →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {otherProjects.map((other) => {
            const otherVisual = getProjectVisual(other.id);
            return (
              <Link
                key={other.id}
                href={`/projects/${other.id}`}
                className="flex flex-col border border-zinc-800 bg-[#09090b] rounded-sm overflow-hidden hover:border-zinc-700 transition-colors p-4 group shadow-sm"
              >
                <div className="flex items-center justify-center h-28 bg-gradient-to-t from-[#09090b] via-zinc-900 to-zinc-800/80 rounded-xs mb-3 border border-zinc-800/60">
                  <div className="flex items-center justify-center gap-2 scale-75 select-none">
                    {otherVisual.icons}
                  </div>
                </div>
                <h4 className="text-sm font-semibold text-white tracking-tight truncate group-hover:text-zinc-200 transition-colors">
                  {other.title}
                </h4>
                <p className="text-zinc-400 text-xs line-clamp-2 mt-1 leading-relaxed">
                  {other.description}
                </p>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
