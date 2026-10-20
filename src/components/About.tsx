"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { animate, useInView } from "framer-motion";
import { MapPin, Cake, Link2, Code2, User } from "lucide-react";
import Globe, { type GlobeHandle } from "@/components/Globe";
import GitHubActivityCard from "@/components/GitHubActivityCard";
import {
  GithubIcon,
  LinkedinIcon,
  InstagramIcon,
} from "@/components/SocialIcons";
import {
  HtmlLogo,
  CssLogo,
  TsLogo,
  JsLogo,
  CLogo,
  JavaLogo,
  TailwindSkillLogo,
  FigmaLogo,
  ViteLogo,
  GitLogo,
  GithubSkillLogo,
  VsCodeLogo,
  MavenLogo,
  GradleLogo,
  PostmanLogo,
  SpringLogo,
  MySqlLogo,
  PostgresLogo,
  SupabaseLogo,
  FirebaseLogo,
  FirestoreLogo,
  GoogleCloudLogo,
} from "@/components/SkillMarqueeIcons";

function AnimatedAgeCard() {
  const [age, setAge] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: false, amount: 0.4 });
  const controlsRef = useRef<{ stop: () => void } | null>(null);

  const startAnimation = useCallback(() => {
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setAge(19);
      return;
    }
    controlsRef.current?.stop();
    setAge(0);
    const controls = animate(0, 19, {
      duration: 2.3,
      ease: [0.25, 0.1, 0.25, 1], // smooth, balanced medium ease
      onUpdate: (latest) => {
        setAge(Math.round(latest));
      },
    });
    controlsRef.current = controls;
  }, []);

  useEffect(() => {
    if (isInView) {
      startAnimation();
    }
  }, [isInView, startAnimation]);

  useEffect(() => {
    const handleHash = () => {
      if (typeof window !== "undefined" && window.location.hash === "#about") {
        startAnimation();
      }
    };
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, [startAnimation]);

  return (
    <div
      ref={cardRef}
      onClick={startAnimation}
      className="border border-zinc-800 bg-[#09090b] rounded-lg p-3.5 sm:p-4 drop-shadow-sm flex flex-col justify-between hover:border-zinc-700 transition-colors cursor-pointer group select-none active:scale-[0.98]"
      title="Click to replay age counter (0 to 19)"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          startAnimation();
        }
      }}
    >
      <div className="flex items-center justify-between text-sm font-medium text-zinc-300">
        <div className="flex items-center space-x-2">
          <Cake className="w-4 h-4 text-zinc-400 group-hover:text-pink-400 transition-colors" />
          <h4 className="truncate font-medium text-white">Age</h4>
        </div>
        <span className="text-[10px] font-mono text-zinc-600 group-hover:text-zinc-400 transition-colors opacity-0 group-hover:opacity-100">
          replay ↻
        </span>
      </div>
      <div className="grow flex items-center justify-center py-4 sm:py-6">
        <span className="text-8xl sm:text-9xl font-bold tracking-tighter text-white select-none leading-none tabular-nums font-mono sm:font-sans transition-transform group-hover:scale-105 duration-200">
          {age}
        </span>
      </div>
    </div>
  );
}

export default function About() {
  const row1Skills = [
    { name: "Java", icon: <JavaLogo className="w-9 h-9 sm:w-10 sm:h-10 text-zinc-100" /> },
    { name: "JavaScript", icon: <JsLogo className="w-9 h-9 sm:w-10 sm:h-10 text-zinc-100" /> },
    { name: "TypeScript", icon: <TsLogo className="w-9 h-9 sm:w-10 sm:h-10 text-zinc-100" /> },
    { name: "HTML5", icon: <HtmlLogo className="w-9 h-9 sm:w-10 sm:h-10 text-zinc-100" /> },
    { name: "CSS3", icon: <CssLogo className="w-9 h-9 sm:w-10 sm:h-10 text-zinc-100" /> },
    { name: "C", icon: <CLogo className="w-9 h-9 sm:w-10 sm:h-10 text-zinc-100" /> },
    { name: "Tailwind CSS", icon: <TailwindSkillLogo className="w-9 h-9 sm:w-10 sm:h-10 text-zinc-100" /> },
    { name: "Figma", icon: <FigmaLogo className="w-9 h-9 sm:w-10 sm:h-10 text-zinc-100" /> },
    { name: "Vite", icon: <ViteLogo className="w-9 h-9 sm:w-10 sm:h-10 text-zinc-100" /> },
    { name: "Git", icon: <GitLogo className="w-9 h-9 sm:w-10 sm:h-10 text-zinc-100" /> },
    { name: "GitHub", icon: <GithubSkillLogo className="w-9 h-9 sm:w-10 sm:h-10 text-zinc-100" /> },
  ];

  const row2Skills = [
    { name: "VS Code", icon: <VsCodeLogo className="w-9 h-9 sm:w-10 sm:h-10 text-zinc-100" /> },
    { name: "Maven", icon: <MavenLogo className="w-9 h-9 sm:w-10 sm:h-10 text-zinc-100" /> },
    { name: "Gradle", icon: <GradleLogo className="w-9 h-9 sm:w-10 sm:h-10 text-zinc-100" /> },
    { name: "Postman", icon: <PostmanLogo className="w-9 h-9 sm:w-10 sm:h-10 text-zinc-100" /> },
    { name: "Spring", icon: <SpringLogo className="w-9 h-9 sm:w-10 sm:h-10 text-zinc-100" /> },
    { name: "MySQL", icon: <MySqlLogo className="w-9 h-9 sm:w-10 sm:h-10 text-zinc-100" /> },
    { name: "PostgreSQL", icon: <PostgresLogo className="w-9 h-9 sm:w-10 sm:h-10 text-zinc-100" /> },
    { name: "Supabase", icon: <SupabaseLogo className="w-9 h-9 sm:w-10 sm:h-10 text-zinc-100" /> },
    { name: "Firebase", icon: <FirebaseLogo className="w-9 h-9 sm:w-10 sm:h-10 text-zinc-100" /> },
    { name: "Cloud Firestore", icon: <FirestoreLogo className="w-9 h-9 sm:w-10 sm:h-10 text-zinc-100" /> },
    { name: "Google Cloud Console", icon: <GoogleCloudLogo className="w-9 h-9 sm:w-10 sm:h-10 text-zinc-100" /> },
  ];

  const globeRef = React.useRef<GlobeHandle>(null);

  return (
    <section
      id="about"
      className="mt-4 sm:mt-5 max-w-5xl mx-auto px-4 scroll-mt-20 w-full"
      aria-label="About Suyash Anil Borse"
    >
      {/* Section Header */}
      <h3 className="font-semibold tracking-tighter text-2xl sm:text-3xl text-white mb-3 sm:mb-4">
        About me
      </h3>

      {/* 0. Small Description / Bio Box */}
      <div className="border border-zinc-800 bg-[#09090b] rounded-lg p-4 sm:p-5 drop-shadow-sm hover:border-zinc-700 transition-colors mb-5 w-full">
        <div className="flex items-center space-x-2 text-sm font-medium text-zinc-300 mb-2.5">
          <User className="w-4 h-4 text-zinc-400" />
          <h4 className="truncate font-medium text-white">Biography</h4>
        </div>
        <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
          I&apos;m <span className="text-white font-medium">Suyash Borse</span>, a B.Tech Information Technology student at <span className="text-zinc-100 font-medium">R. C. Patel Institute of Technology, Shirpur</span>. I am deeply passionate about engineering responsive full-stack applications, designing scalable backend architectures, and mastering <span className="text-zinc-100 font-medium">Data Structures &amp; Algorithms in Java</span>.
        </p>
        <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mt-2.5">
          With practical experience across modern JavaScript, Java, cloud databases, and backend engineering, I thrive in collaborative hackathon environments where fast-paced teamwork turns ambitious concepts into software that delivers tangible, real-world value.
        </p>
        <div className="flex flex-wrap items-center gap-2 mt-4 pt-3.5 border-t border-zinc-800/80">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            Current Focus: Problem Solving · DSA in Java · Spring Boot
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-400">
            🎓 B.Tech IT · RCPIT Shirpur
          </span>
        </div>
      </div>

      {/* Main 2-Column Bento Container matching Dino Kupinic reference */}
      <div className="flex flex-col md:flex-row gap-5 items-stretch w-full">
        {/* LEFT COLUMN: Globe, Age + Socials, Skills */}
        <div className="flex flex-col gap-5 w-full md:w-1/2">
          {/* 1. Location Card with Rotating 3D Globe & Red Dot on Maharashtra */}
          <div className="border border-zinc-800 bg-[#09090b] rounded-lg p-3 sm:p-4 drop-shadow-sm flex flex-col justify-between overflow-hidden hover:border-zinc-700 transition-colors">
            <div className="flex items-center justify-between text-sm font-medium text-zinc-300">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-red-500 animate-pulse" />
                <h4 className="truncate font-medium text-white">Maharashtra, India</h4>
              </div>
              <button
                type="button"
                onClick={() => globeRef.current?.focusIndia()}
                className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-800/80 hover:bg-zinc-700 text-zinc-300 hover:text-white border border-zinc-700/60 transition-colors cursor-pointer select-none flex items-center gap-1"
                title="Center globe on Maharashtra, India"
              >
                <span>Focus India</span>
                <span>📍</span>
              </button>
            </div>

            {/* Rotating 3D Globe */}
            <div className="grow mt-2">
              <Globe ref={globeRef} />
            </div>
          </div>

          {/* 2. Middle Row: Age & Socials */}
          <div className="grid grid-cols-2 gap-5 w-full">
            {/* Age Card with 0 to 19 count animation */}
            <AnimatedAgeCard />

            {/* Socials Card */}
            <div className="border border-zinc-800 bg-[#09090b] rounded-lg p-3.5 sm:p-4 drop-shadow-sm flex flex-col justify-between hover:border-zinc-700 transition-colors">
              <div className="flex items-center space-x-2 text-sm font-medium text-zinc-300">
                <Link2 className="w-4 h-4 text-zinc-400" />
                <h4 className="truncate font-medium text-white">Socials</h4>
              </div>
              <div className="grow flex items-center justify-center py-2 sm:py-3">
                <div className="flex flex-col gap-3 w-full max-w-[130px]">
                  <a
                    href="https://github.com/SuyashBorse"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2.5 text-zinc-300 hover:text-white hover:underline decoration-dotted transition-colors text-xs sm:text-sm"
                  >
                    <GithubIcon className="w-4 h-4 shrink-0" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/suyash-borse"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2.5 text-zinc-300 hover:text-white hover:underline decoration-dotted transition-colors text-xs sm:text-sm"
                  >
                    <LinkedinIcon className="w-4 h-4 shrink-0" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2.5 text-zinc-300 hover:text-white hover:underline decoration-dotted transition-colors text-xs sm:text-sm"
                  >
                    <InstagramIcon className="w-4 h-4 shrink-0" />
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Skills Card with 2-Row Rotating Marquee */}
          <div className="border border-zinc-800 bg-[#09090b] rounded-lg p-3 sm:p-4 drop-shadow-sm flex flex-col justify-between overflow-hidden hover:border-zinc-700 transition-colors">
            <div className="flex items-center space-x-2 text-sm font-medium text-zinc-300 mb-2">
              <Code2 className="w-4 h-4 text-zinc-400" />
              <h4 className="truncate font-medium text-white">Skills</h4>
            </div>

            <div className="mask-gradient-x overflow-hidden pt-8 sm:pt-9 pb-2.5 space-y-6 sm:space-y-7">
              {/* Row 1: Leftward continuous rotating marquee */}
              <div className="animate-marquee gap-5 sm:gap-6 items-center">
                {[...row1Skills, ...row1Skills].map((skill, idx) => (
                  <div
                    key={`row1-${skill.name}-${idx}`}
                    className="relative group/skill flex flex-col items-center justify-center p-1 cursor-pointer select-none z-10 hover:z-40"
                  >
                    {/* Hover Popup Tooltip matching screenshot */}
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 scale-90 group-hover/skill:opacity-100 group-hover/skill:scale-100 transition-all duration-150 ease-out pointer-events-none flex flex-col items-center">
                      <div className="bg-white text-zinc-950 font-sans font-medium text-[11px] sm:text-xs px-2.5 py-0.5 rounded shadow-md whitespace-nowrap leading-tight">
                        {skill.name}
                      </div>
                      <div className="w-0 h-0 border-x-[5px] border-x-transparent border-t-[5px] border-t-white -mt-[0.5px]" />
                    </div>

                    {/* Logo Icon */}
                    <div className="text-zinc-100 transition-transform duration-150 group-hover/skill:scale-110">
                      {skill.icon}
                    </div>
                  </div>
                ))}
              </div>

              {/* Row 2: Rightward reverse continuous rotating marquee */}
              <div className="animate-marquee-reverse gap-5 sm:gap-6 items-center">
                {[...row2Skills, ...row2Skills].map((skill, idx) => (
                  <div
                    key={`row2-${skill.name}-${idx}`}
                    className="relative group/skill flex flex-col items-center justify-center p-1 cursor-pointer select-none z-10 hover:z-40"
                  >
                    {/* Hover Popup Tooltip matching screenshot */}
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 scale-90 group-hover/skill:opacity-100 group-hover/skill:scale-100 transition-all duration-150 ease-out pointer-events-none flex flex-col items-center">
                      <div className="bg-white text-zinc-950 font-sans font-medium text-[11px] sm:text-xs px-2.5 py-0.5 rounded shadow-md whitespace-nowrap leading-tight">
                        {skill.name}
                      </div>
                      <div className="w-0 h-0 border-x-[5px] border-x-transparent border-t-[5px] border-t-white -mt-[0.5px]" />
                    </div>

                    {/* Logo Icon */}
                    <div className="text-zinc-100 transition-transform duration-150 group-hover/skill:scale-110">
                      {skill.icon}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Live GitHub Heatmap & Activity Card (Spanning Full Height) */}
        <div className="w-full md:w-1/2 flex">
          <GitHubActivityCard />
        </div>
      </div>
    </section>
  );
}
