import React from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. About Me Section */}
      <About />

      {/* 3. Skills Bento Section */}
      <Skills />

      {/* 4. Projects Showcase Section */}
      <Projects />

      {/* 5. Contact Section Target Anchor (To be implemented in Phase 4) */}
      <section
        id="contact"
        className="py-24 px-4 w-full max-w-4xl mx-auto text-center scroll-mt-20"
        aria-label="Contact Section"
      >
        <div className="p-8 sm:p-12 rounded-2xl bg-[#171717] border border-zinc-800 shadow-glow-indigo/20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-cyan-400 bg-cyan-950/30 border border-cyan-800/40 mb-4">
            <span>04. GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Let&apos;s Connect</h2>
          <p className="text-zinc-400 max-w-lg mx-auto text-sm sm:text-base mb-8">
            Interested in discussing algorithmic problem solving, web engineering projects, or internship opportunities?
          </p>
          <a
            href="mailto:suyash.a.borse@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 transition-all shadow-glow-indigo/50"
          >
            Send Email Directly
          </a>
        </div>
      </section>
    </div>
  );
}
