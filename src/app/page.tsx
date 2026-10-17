import React from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactForm from "@/components/ContactForm";

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

      {/* 5. Contact Section */}
      <ContactForm />
    </div>
  );
}
