import React from "react";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Skills from "@/components/Skills";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      {/* 1. Hero Section — Giant Editorial Typography */}
      <Hero />

      {/* 2. Projects Showcase — Visual Card Banners */}
      <Projects />

      {/* 3. About Me Section — Bento Grid & Infinite Tech Marquee */}
      <About />

      {/* 4. Skills Section — Categorical Inventory */}
      <Skills />

      {/* 5. Contact Section — Minimalist Message Form */}
      <ContactForm />
    </div>
  );
}
