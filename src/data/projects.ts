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
    id: "ecopilot-ai",
    title: "EcoPilot AI",
    description: "[Project description to be added by Suyash.]",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubUrl: undefined,
    liveDemoUrl: undefined,
  },
  {
    id: "kanflow",
    title: "KanFlow",
    description: "A comprehensive Kanban board system.",
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
