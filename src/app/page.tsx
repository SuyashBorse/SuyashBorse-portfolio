import React from "react";
import { ArrowDown, Code2, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero placeholder for Phase 2 shell */}
      <section
        id="hero"
        className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20 pb-12 max-w-4xl mx-auto"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono text-cyan-400 bg-cyan-950/40 border border-cyan-800/40 mb-6 shadow-glow-cyan/20">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>Suyash Anil Borse • Developer Portfolio</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6">
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-indigo-300 bg-clip-text text-transparent">
            Suyash Anil Borse.
          </span>
        </h1>

        <p className="text-lg sm:text-xl font-mono text-zinc-300 mb-8 max-w-2xl">
          Java Developer | Web Engineer | Algorithmic Problem Solver
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a
            href="#projects"
            className="w-full sm:w-auto px-6 py-3 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 shadow-glow-indigo/50 transition-all focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-6 py-3 rounded-full text-sm font-medium text-zinc-300 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 transition-all focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            Contact Me
          </a>
        </div>

        <div className="mt-16 animate-bounce text-zinc-600">
          <ArrowDown className="w-5 h-5" />
        </div>
      </section>

      {/* Target anchor sections to verify smooth navigation */}
      <section id="about" className="py-24 px-4 w-full max-w-5xl mx-auto border-t border-zinc-900">
        <h2 className="text-2xl font-bold text-white mb-4">About Section</h2>
        <p className="text-zinc-400 text-sm">Target anchor ready for Phase 3 implementation.</p>
      </section>

      <section id="skills" className="py-24 px-4 w-full max-w-5xl mx-auto border-t border-zinc-900">
        <h2 className="text-2xl font-bold text-white mb-4">Skills Section</h2>
        <p className="text-zinc-400 text-sm">Target anchor ready for Phase 3 Bento Grid implementation.</p>
      </section>

      <section id="projects" className="py-24 px-4 w-full max-w-5xl mx-auto border-t border-zinc-900">
        <h2 className="text-2xl font-bold text-white mb-4">Projects Section</h2>
        <p className="text-zinc-400 text-sm">Target anchor ready for Phase 3 Project Cards implementation.</p>
      </section>

      <section id="contact" className="py-24 px-4 w-full max-w-5xl mx-auto border-t border-zinc-900 mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Contact Section</h2>
        <p className="text-zinc-400 text-sm">Target anchor ready for Phase 4 Contact Form implementation.</p>
      </section>
    </div>
  );
}
