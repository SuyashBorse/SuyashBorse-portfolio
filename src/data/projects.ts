export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  isBlueprint?: boolean;
}

export const projectsData: Project[] = [
  {
    id: "sniptide",
    title: "Sniptide",
    description: "Pastebin with expiring links, burn-after-read, passwords, and view counts.",
    techStack: ["Next.js", "PostgreSQL", "Cloudflare"],
    githubUrl: undefined,
    liveDemoUrl: undefined,
  },
  {
    id: "tourney",
    title: "Tourney",
    description: "Web application for managing school sports tournaments with real-time brackets.",
    techStack: ["Nuxt", "Supabase", "PM2"],
    githubUrl: undefined,
    liveDemoUrl: undefined,
  },
  {
    id: "blackrose",
    title: "Blackrose",
    description: "Open-source decision layer for LLM apps with typed safety checks and guardrails.",
    techStack: ["Python", "TypeScript"],
    githubUrl: undefined,
    liveDemoUrl: undefined,
  },
  {
    id: "ecopilot-ai",
    title: "EcoPilot AI",
    description: "Intelligent sustainability engine optimizing environmental telemetry and resource planning.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubUrl: undefined,
    liveDemoUrl: undefined,
  },
  {
    id: "kanflow",
    title: "KanFlow",
    description: "A comprehensive Kanban board system designed for modern agile team workflows.",
    techStack: ["React", "TypeScript", "Tailwind CSS"],
    githubUrl: undefined,
    liveDemoUrl: undefined,
  },
  {
    id: "sih-2026",
    title: "SIH 2026 Submissions",
    description: "Architecture blueprints for deepfake audio forensics and medical image analysis pipelines.",
    techStack: ["System Architecture", "Python", "Deep Learning Pipeline"],
    githubUrl: undefined,
    liveDemoUrl: undefined,
    isBlueprint: true,
  },
];
