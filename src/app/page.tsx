"use client";

import React from "react";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import AchievementsAndActivity from "@/components/AchievementsAndActivity";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      {/* 1. Home Section — Hero Typography */}
      <Hero />

      {/* 2. About Section — Bento Grid & Interactive Components */}
      <About />

      {/* 3. Skills Section — Categorical Inventory */}
      <Skills />

      {/* 4. Projects Showcase — Visual 2x2 Showcase */}
      <Projects />

      {/* 5. Experience & Leadership — Journey & Roles */}
      <Experience />

      {/* 6. Achievements & Activity — Key Milestones & Live GitHub Heatmap */}
      <AchievementsAndActivity />

      {/* 7. Contact Section — Message Form */}
      <ContactForm />
    </div>
  );
}
