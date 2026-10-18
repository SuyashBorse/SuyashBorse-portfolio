"use client";

import React from "react";
import { MapPin, Cake, Link2, Code2, Quote } from "lucide-react";
import Globe, { type GlobeHandle } from "@/components/Globe";
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
  CppLogo,
  JavaLogo,
  PhpLogo,
  PythonSkillLogo,
  DockerLogo,
  GitLogo,
  FigmaLogo,
  AwsLogo,
  CloudflareLogo,
  TerminalBashLogo,
  MarkdownLogo,
  SwiftLogo,
} from "@/components/SkillMarqueeIcons";
import {
  ReactLogo,
  NextLogo,
  TailwindLogo,
  DatabaseLogo,
  BrainCpuLogo,
} from "@/components/TechLogos";

export default function About() {
  const row1Skills = [
    { name: "HTML5", icon: <HtmlLogo className="w-9 h-9 sm:w-11 sm:h-11 text-zinc-100" /> },
    { name: "CSS3", icon: <CssLogo className="w-9 h-9 sm:w-11 sm:h-11 text-zinc-100" /> },
    { name: "TypeScript", icon: <TsLogo className="w-9 h-9 sm:w-11 sm:h-11 text-zinc-100" /> },
    { name: "JavaScript", icon: <JsLogo className="w-9 h-9 sm:w-11 sm:h-11 text-zinc-100" /> },
    { name: "C++", icon: <CppLogo className="w-9 h-9 sm:w-11 sm:h-11 text-zinc-100" /> },
    { name: "Java", icon: <JavaLogo className="w-9 h-9 sm:w-11 sm:h-11 text-zinc-100" /> },
    { name: "PHP", icon: <PhpLogo className="w-9 h-9 sm:w-11 sm:h-11 text-zinc-100" /> },
    { name: "Python", icon: <PythonSkillLogo className="w-9 h-9 sm:w-11 sm:h-11 text-zinc-100" /> },
    { name: "Swift", icon: <SwiftLogo className="w-9 h-9 sm:w-11 sm:h-11 text-zinc-100" /> },
    { name: "Bash", icon: <TerminalBashLogo className="w-9 h-9 sm:w-11 sm:h-11 text-zinc-100" /> },
    { name: "Markdown", icon: <MarkdownLogo className="w-9 h-9 sm:w-11 sm:h-11 text-zinc-100" /> },
  ];

  const row2Skills = [
    { name: "React", icon: <ReactLogo className="w-9 h-9 sm:w-11 sm:h-11 text-zinc-100" /> },
    { name: "Next.js", icon: <NextLogo className="w-9 h-9 sm:w-11 sm:h-11 text-zinc-100" /> },
    { name: "Tailwind CSS", icon: <TailwindLogo className="w-9 h-9 sm:w-11 sm:h-11 text-zinc-100" /> },
    { name: "Docker", icon: <DockerLogo className="w-9 h-9 sm:w-11 sm:h-11 text-zinc-100" /> },
    { name: "Git", icon: <GitLogo className="w-9 h-9 sm:w-11 sm:h-11 text-zinc-100" /> },
    { name: "Figma", icon: <FigmaLogo className="w-9 h-9 sm:w-11 sm:h-11 text-zinc-100" /> },
    { name: "AWS", icon: <AwsLogo className="w-9 h-9 sm:w-11 sm:h-11 text-zinc-100" /> },
    { name: "Cloudflare", icon: <CloudflareLogo className="w-9 h-9 sm:w-11 sm:h-11 text-zinc-100" /> },
    { name: "Database", icon: <DatabaseLogo className="w-9 h-9 sm:w-11 sm:h-11 text-zinc-100" /> },
    { name: "AI & ML", icon: <BrainCpuLogo className="w-9 h-9 sm:w-11 sm:h-11 text-zinc-100" /> },
  ];

  const globeRef = React.useRef<GlobeHandle>(null);

  return (
    <section
      id="about"
      className="mt-16 sm:mt-28 max-w-5xl mx-auto px-4 scroll-mt-20 w-full"
      aria-label="About Suyash Anil Borse"
    >
      {/* Section Header */}
      <h3 className="font-semibold tracking-tighter text-2xl sm:text-3xl text-white mb-5 sm:mb-6">
        About me
      </h3>

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
            {/* Age Card */}
            <div className="border border-zinc-800 bg-[#09090b] rounded-lg p-3.5 sm:p-4 drop-shadow-sm flex flex-col justify-between hover:border-zinc-700 transition-colors">
              <div className="flex items-center space-x-2 text-sm font-medium text-zinc-300">
                <Cake className="w-4 h-4 text-zinc-400" />
                <h4 className="truncate font-medium text-white">Age</h4>
              </div>
              <div className="grow flex items-center justify-center py-4 sm:py-6">
                <span className="text-8xl sm:text-9xl font-bold tracking-tighter text-white select-none leading-none">
                  19
                </span>
              </div>
            </div>

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

            <div className="mask-gradient-x overflow-hidden py-1.5 space-y-3">
              {/* Row 1: Leftward continuous rotating marquee */}
              <div className="animate-marquee gap-3 sm:gap-4 items-center">
                {[...row1Skills, ...row1Skills, ...row1Skills].map((skill, idx) => (
                  <div
                    key={`row1-${skill.name}-${idx}`}
                    title={skill.name}
                    className="p-1 hover:scale-110 transition-transform duration-150 select-none cursor-pointer"
                  >
                    {skill.icon}
                  </div>
                ))}
              </div>

              {/* Row 2: Rightward reverse continuous rotating marquee */}
              <div className="animate-marquee-reverse gap-3 sm:gap-4 items-center">
                {[...row2Skills, ...row2Skills, ...row2Skills].map((skill, idx) => (
                  <div
                    key={`row2-${skill.name}-${idx}`}
                    title={skill.name}
                    className="p-1 hover:scale-110 transition-transform duration-150 select-none cursor-pointer"
                  >
                    {skill.icon}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Favorite Quotes (Spanning Full Height) */}
        <div className="w-full md:w-1/2 flex">
          <div className="border border-zinc-800 bg-[#09090b] rounded-lg p-4 sm:p-5 drop-shadow-sm flex flex-col justify-between w-full hover:border-zinc-700 transition-colors">
            <div className="flex items-center space-x-2 text-sm font-medium text-zinc-300 mb-2">
              <Quote className="w-4 h-4 text-zinc-400" />
              <h4 className="truncate font-medium text-white">Favorite Quotes</h4>
            </div>

            <div className="grow flex flex-col justify-between divide-y divide-zinc-800/80 my-2">
              {/* Quote 1 */}
              <figure className="flex flex-1 flex-col justify-center gap-3 px-3 py-6 sm:py-8 text-center first:pt-2">
                <blockquote className="font-serif text-lg sm:text-xl md:text-2xl text-zinc-100 leading-snug tracking-normal">
                  “If you can&#39;t explain it simply, you don&#39;t understand it well enough.”
                </blockquote>
                <figcaption className="text-zinc-400 text-xs sm:text-sm font-sans tracking-tight">
                  — Albert Einstein
                </figcaption>
              </figure>

              {/* Quote 2 */}
              <figure className="flex flex-1 flex-col justify-center gap-3 px-3 py-6 sm:py-8 text-center">
                <blockquote className="font-serif text-lg sm:text-xl md:text-2xl text-zinc-100 leading-snug tracking-normal">
                  “It&#39;s not about how hard you row, it&#39;s about what boat you&#39;re in.”
                </blockquote>
                <figcaption className="text-zinc-400 text-xs sm:text-sm font-sans tracking-tight">
                  — Warren Buffet
                </figcaption>
              </figure>

              {/* Quote 3 */}
              <figure className="flex flex-1 flex-col justify-center gap-3 px-3 py-6 sm:py-8 text-center last:pb-2">
                <blockquote className="font-serif text-lg sm:text-xl md:text-2xl text-zinc-100 leading-snug tracking-normal">
                  “Be yourself; everyone else is already taken.”
                </blockquote>
                <figcaption className="text-zinc-400 text-xs sm:text-sm font-sans tracking-tight">
                  — Oscar Wilde
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
