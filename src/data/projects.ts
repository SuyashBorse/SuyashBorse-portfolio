export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  keyFeatures?: string[];
  architecture?: string;
  techStack: string[];
  date?: string;
  role?: string;
  status?: string;
  githubUrl?: string;
  liveDemoUrl?: string;
  isBlueprint?: boolean;
}

export const projectsData: Project[] = [
  {
    id: "ecotrack",
    title: "EcoTrack",
    description: "Personal carbon footprint tracker with GHG emission calculators, Chart.js analytics, and Google Gemini AI sustainability coaching.",
    longDescription:
      "EcoTrack is an intelligent, full-featured personal carbon footprint tracking web application. Built strictly upon validated IPCC and GHG Protocol emission factor coefficients, it empowers users to calculate and monitor greenhouse gas emissions across Transportation, Energy, Food, Water, and Shopping. The platform features dynamic multi-period Chart.js visualizations, a gamification streak engine with canvas confetti celebrations, and a personalized Google Gemini AI sustainability coach that provides non-judgmental decarbonization strategies with estimated monthly kg CO2e savings.",
    keyFeatures: [
      "Multi-Category Carbon Calculator: Tracks Transportation, Energy, Food, Water, and Shopping based on validated IPCC and GHG Protocol coefficients.",
      "Google Gemini AI Sustainability Coach: Personalized, structured AI recommendations with difficulty tiers and estimated monthly CO2e savings.",
      "Dynamic Chart.js Visualizations: Interactive Doughnut category breakdowns, Polar Area distributions, and multi-period trend tracking (7/30/90 days, 1 year).",
      "Gamification & Habit Building Engine: Strict 24-hour streak recalculation, eco-points, milestones, and interactive HTML5 canvas confetti badge celebrations.",
      "Hybrid Cloud & Local Storage: Instant client-side persistence with 1-click rich demo plus Supabase PostgreSQL 17 with Row Level Security (RLS) and Google OAuth.",
      "100% Mobile-First Responsive Design: Modular CSS tokens, adaptive sidebar, and touch-optimized activity logging drawers.",
    ],
    architecture:
      "Architected with modular modern JavaScript and CSS design tokens bundled via Vite 5.4. Backend services leverage Supabase PostgreSQL 17 with Row Level Security (RLS) policies and serverless Edge Functions to proxy Google Gemini API calls without exposing keys to the client. Visualizations are rendered via high-performance Chart.js 4.4 canvas layers.",
    techStack: ["Google Gemini AI", "Supabase", "PostgreSQL 17", "Chart.js", "Vite", "Vercel"],
    date: "March 2025",
    role: "Creator & Full-Stack Developer",
    status: "Live in Production",
    githubUrl: "https://github.com/SuyashBorse/Intelligent-Sustainability-Assistant-and-Carbon-Tracker",
    liveDemoUrl: "https://ecotrack-app-peach.vercel.app/",
  },
  {
    id: "kanflow",
    title: "KanFlow",
    description: "A comprehensive Kanban board system designed for modern agile team workflows.",
    longDescription:
      "KanFlow is an ultra-fast, responsive task management and workflow orchestration application built for high-performing engineering teams. Featuring intuitive drag-and-drop column pipelines, custom tag filtering, real-time activity audit trails, and keyboard-first shortcut navigation, KanFlow streamlines sprint planning and minimizes context switching.",
    keyFeatures: [
      "Smooth drag-and-drop column and card reordering with optimistic UI updates.",
      "Keyboard-driven command palette for rapid task creation, assignee lookup, and priority tagging.",
      "Real-time persistence with offline state caching and sync resolution.",
      "Granular column WIP (Work In Progress) limits with visual bottleneck warnings.",
      "Markdown-supported task descriptions with checklists and attachment previews.",
    ],
    architecture:
      "Built with React and TypeScript, leveraging a state-driven architecture for instantaneous user feedback. Incorporates Tailwind CSS for design consistency and optimistic local state synchronizing with a resilient PostgreSQL backend.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
    date: "October 2025",
    role: "Frontend Architect",
    status: "Production Ready",
    githubUrl: "https://github.com/SuyashBorse",
    liveDemoUrl: undefined,
  },
  {
    id: "sih-2026",
    title: "SIH 2026 Submissions",
    description: "Architecture blueprints for deepfake audio forensics and medical image analysis pipelines.",
    longDescription:
      "Designed and architected for the Smart India Hackathon (SIH 2026), this project delivers end-to-end technical blueprints and reference implementations for high-stakes deep learning pipelines. The system targets two vital national challenges: real-time synthetic voice and deepfake audio forensic authentication, alongside high-accuracy medical diagnostic image anomaly segmentation.",
    keyFeatures: [
      "Multi-spectral acoustic feature extraction (MFCCs, Constant-Q spectrograms) for synthetic voice detection.",
      "Deepfake audio classification model using dual-branch convolutional-recurrent architectures.",
      "Automated DICOM medical image pre-processing pipeline with adaptive contrast enhancement.",
      "Secure, audited inference microservice with low-latency REST and gRPC endpoints.",
      "Scalable cloud-native deployment specification with containerized Docker orchestration.",
    ],
    architecture:
      "Multi-tier deep learning architecture employing PyTorch inference backends, orchestrated via Docker containers. Includes high-throughput audio signal processing pipelines and tensor optimization for edge deployment.",
    techStack: ["Python", "PyTorch", "Deep Learning Pipeline", "System Architecture", "Docker"],
    date: "May 2025",
    role: "Lead Systems & AI Architect",
    status: "Research Blueprint",
    githubUrl: "https://github.com/SuyashBorse",
    liveDemoUrl: undefined,
    isBlueprint: true,
  },
  {
    id: "sniptide",
    title: "Sniptide",
    description: "Pastebin with expiring links, burn-after-read, passwords, and view counts.",
    longDescription:
      "Sniptide is an ephemeral, privacy-focused code and text sharing platform with granular access controls. Engineered with Next.js, PostgreSQL, and Cloudflare edge workers, it allows developers to quickly publish secrets, configs, or logs with auto-destruct timers and encryption.",
    keyFeatures: [
      "Configurable paste expiration (1 hour, 1 day, 1 week, or custom time-to-live).",
      "Burn-after-read functionality: immediate deletion from the database upon first viewing.",
      "Client-side passkey protection and zero-knowledge encryption headers.",
      "Real-time view analytics and granular access logs.",
      "Raw plain-text endpoint optimized for direct curl pipe ingestion in terminals.",
    ],
    architecture:
      "Serverless architecture utilizing Next.js API routes with Cloudflare edge caching, backed by PostgreSQL for transactional paste management and automated TTL cleanup workers.",
    techStack: ["Next.js", "PostgreSQL", "Cloudflare"],
    date: "May 2025",
    role: "Full-Stack Engineer",
    status: "Completed",
    githubUrl: undefined,
    liveDemoUrl: undefined,
  },
  {
    id: "tourney",
    title: "Tourney",
    description: "Web application for managing school sports tournaments with real-time brackets.",
    longDescription:
      "Tourney is an automated sports tournament management system designed to eliminate manual spreadsheet coordination. Built with Nuxt, Supabase, and PM2, it provides live scoring, dynamic single/double-elimination bracket generation, and an organizer dashboard for referees and teams.",
    keyFeatures: [
      "Multi-sport tournament creation supporting football, basketball, and volleyball formats.",
      "Automated bracket seeding with live interactive bracket tree visualization.",
      "Real-time score submission with instant standings and tiebreaker calculations.",
      "Mobile-friendly referee scoreboard interface for pitch-side updates.",
      "Public spectator portal with live match notifications and schedules.",
    ],
    architecture:
      "Constructed on a Nuxt monorepo with Vue.js, TypeScript, and Tailwind CSS. The backend leverages Supabase with custom SQL functions and triggers specifically designed for bracket tree logic.",
    techStack: ["Nuxt", "Supabase", "PM2"],
    date: "September 2024",
    role: "Web Application Engineer",
    status: "Completed",
    githubUrl: undefined,
    liveDemoUrl: undefined,
  },
  {
    id: "blackrose",
    title: "Blackrose",
    description: "Open-source decision layer for LLM apps with typed safety checks and guardrails.",
    longDescription:
      "Blackrose is a high-performance orchestration and policy-enforcement layer designed to prevent hallucination, prompt injection, and PII leakage in production Large Language Model applications. It enforces strict type contracts and deterministic safety policies around generative AI pipelines.",
    keyFeatures: [
      "Deterministic runtime schema validation for LLM structured output.",
      "Real-time prompt sanitization and adversarial injection detection filter.",
      "Automated PII and confidential token redaction before model inference.",
      "Fallback routing and automatic retry logic for malformed JSON responses.",
      "Comprehensive tracing and observability logger compatible with OpenTelemetry.",
    ],
    architecture:
      "Dual Python and TypeScript SDK core implementing asynchronous middleware interceptors for popular LLM APIs, providing zero-overhead validation and strict typing.",
    techStack: ["Python", "TypeScript"],
    date: "May 2024",
    role: "Core Contributor",
    status: "Active Library",
    githubUrl: undefined,
    liveDemoUrl: undefined,
  },
];
