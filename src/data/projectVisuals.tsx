import React from "react";
import {
  ReactLogo,
  TypeScriptLogo,
  NextLogo,
  PythonLogo,
  TailwindLogo,
  DatabaseLogo,
  BrainCpuLogo,
  PostgresElephantLogo,
  CloudLogo,
  NuxtTriangleLogo,
  SupabaseLightningLogo,
  Pm2ToolingLogo,
  JavaCupLogo,
} from "@/components/TechLogos";
import { HtmlLogo, CssLogo, JsLogo } from "@/components/SkillMarqueeIcons";

export interface ProjectVisualConfig {
  icons: React.ReactNode;
  dateText: string;
  badgeStyle: string;
  gradient: string;
}

export function getProjectVisual(id: string): ProjectVisualConfig {
  switch (id) {
    case "ecotrack":
    case "ecopilot-ai":
      return {
        icons: (
          <>
            <BrainCpuLogo className="w-10 h-10 sm:w-12 sm:h-12 text-zinc-100" />
            <SupabaseLightningLogo className="w-10 h-10 sm:w-12 sm:h-12 text-zinc-100" />
            <PostgresElephantLogo className="w-10 h-10 sm:w-12 sm:h-12 text-zinc-100" />
          </>
        ),
        dateText: "August 2026",
        badgeStyle: "bg-[#052e16] border border-[#14532d]/60 text-[#22c55e] dark:text-[#4ade80]",
        gradient: "from-[#09090b] via-zinc-900 to-zinc-800/80",
      };
    case "currency-converter":
    case "kanflow":
      return {
        icons: (
          <>
            <HtmlLogo className="w-10 h-10 sm:w-12 sm:h-12 text-zinc-100" />
            <CssLogo className="w-10 h-10 sm:w-12 sm:h-12 text-zinc-100" />
            <JsLogo className="w-10 h-10 sm:w-12 sm:h-12 text-zinc-100" />
          </>
        ),
        dateText: "September 2026",
        badgeStyle: "bg-[#052e16] border border-[#14532d]/60 text-[#22c55e] dark:text-[#4ade80]",
        gradient: "from-[#09090b] via-zinc-900 to-zinc-800/80",
      };
    case "vision-raksha":
    case "sih-2026":
      return {
        icons: (
          <>
            <BrainCpuLogo className="w-10 h-10 sm:w-12 sm:h-12 text-zinc-100" />
            <PythonLogo className="w-10 h-10 sm:w-12 sm:h-12 text-zinc-100" />
            <ReactLogo className="w-10 h-10 sm:w-12 sm:h-12 text-zinc-100" />
          </>
        ),
        dateText: "September 2026",
        badgeStyle: "bg-[#052e16] border border-[#14532d]/60 text-[#22c55e] dark:text-[#4ade80]",
        gradient: "from-[#09090b] via-zinc-900 to-zinc-800/80",
      };
    case "vilp":
    case "internship-lifecycle-management-platform":
    case "sniptide":
      return {
        icons: (
          <>
            <JavaCupLogo className="w-10 h-10 sm:w-12 sm:h-12 text-zinc-100" />
            <ReactLogo className="w-10 h-10 sm:w-12 sm:h-12 text-zinc-100" />
            <SupabaseLightningLogo className="w-10 h-10 sm:w-12 sm:h-12 text-zinc-100" />
          </>
        ),
        dateText: "August 2026",
        badgeStyle: "bg-[#052e16] border border-[#14532d]/60 text-[#22c55e] dark:text-[#4ade80]",
        gradient: "from-[#09090b] via-zinc-900 to-zinc-800/80",
      };
    case "tourney":
      return {
        icons: (
          <>
            <NuxtTriangleLogo className="w-10 h-10 sm:w-12 sm:h-12 text-zinc-100" />
            <SupabaseLightningLogo className="w-10 h-10 sm:w-12 sm:h-12 text-zinc-100" />
            <Pm2ToolingLogo className="w-10 h-10 sm:w-12 sm:h-12 text-zinc-100" />
          </>
        ),
        dateText: "September 2024",
        badgeStyle: "bg-[#331407] border border-[#7c2d12]/60 text-[#ea580c] dark:text-[#fb923c]",
        gradient: "from-[#09090b] via-zinc-900 to-zinc-800/80",
      };
    case "blackrose":
    default:
      return {
        icons: (
          <>
            <PythonLogo className="w-10 h-10 sm:w-12 sm:h-12 text-zinc-100" />
            <TypeScriptLogo className="w-10 h-10 sm:w-12 sm:h-12 text-zinc-100" />
          </>
        ),
        dateText: "May 2024",
        badgeStyle: "bg-[#052e16] border border-[#14532d]/60 text-[#22c55e] dark:text-[#4ade80]",
        gradient: "from-[#09090b] via-zinc-900 to-zinc-800/80",
      };
  }
}
