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
    date: "August 2026",
    role: "Creator & Full-Stack Developer",
    status: "Live in Production",
    githubUrl: "https://github.com/SuyashBorse/Intelligent-Sustainability-Assistant-and-Carbon-Tracker",
    liveDemoUrl: "https://ecotrack-app-peach.vercel.app/",
  },
  {
    id: "currency-converter",
    title: "Currency Converter",
    description: "Real-time foreign exchange rates web app built with vanilla JavaScript, HTML5, and CSS3 exploring DOM manipulation, Promises, and the Fetch API.",
    longDescription:
      "Currency Converter is a responsive financial conversion application built with vanilla JavaScript, HTML5, and CSS3. Created as a hands-on exploration of foundational and modern ECMAScript mechanics, the project demonstrates real-time currency calculation by consuming the Fawaz Ahmed Currency API. It showcases practical mastery over asynchronous JavaScript, Promise lifecycles, event-driven architectures, dynamic DOM tree manipulation, and flag image asset resolution.",
    keyFeatures: [
      "Asynchronous JavaScript & Promises: Implemented modern async/await workflows and the Fetch API to retrieve live exchange rates and handle JSON response streams.",
      "Dynamic DOM Manipulation & Traversal: Programmatically generated country selection options using document.createElement and dynamically updated exchange rate outputs.",
      "Event-Driven Architecture: Handled change and submit events with e.preventDefault() to update flags and compute rates without full-page reloads.",
      "Asset & State Binding: Dynamically bound currency country codes to external flag CDN assets, updating national flags on dropdown selection.",
      "Defensive Input Sanitization: Validated numeric currency amounts with automated fallback logic for empty, negative, or NaN inputs.",
    ],
    architecture:
      "Engineered as a clean, modular vanilla JavaScript web application without heavy framework dependencies. Employs async/await over ES6 Promises to query CDN-cached exchange rate endpoints, binding country codes through a dictionary lookup table and manipulating the DOM tree with minimal reflows.",
    techStack: ["JavaScript (ES6+)", "HTML5", "CSS3", "Fetch API", "REST API", "DOM API"],
    date: "September 2026",
    role: "Frontend Developer",
    status: "Completed Project",
    githubUrl: "https://github.com/SuyashBorse/Currency-Converter",
    liveDemoUrl: "https://currency-converter-orpin-eight.vercel.app",
  },
  {
    id: "vision-raksha",
    title: "RetinAI (VisionRaksha)",
    description: "Explainable AI telemedicine screening pipeline for Diabetic Retinopathy built for SIH 2026 (MathWorks PS SIH26038).",
    longDescription:
      "RetinAI (VisionRaksha) is a clinically validated, explainable dual-stack medical screening pipeline engineered for Smart India Hackathon 2026 under the MathWorks Problem Statement SIH26038. Designed to bridge India's rural ophthalmology deficit (~1 eye specialist per 100,000 citizens), the system empowers rural ASHA workers and Primary Health Centres (PHCs) with sub-pixel lesion segmentation, calibrated ordinal DR severity grading, 4-layer clinical explainability (Grad-CAM heatmaps & evidence chains), and discrete-event Simulink telemedicine logistics simulation. Developed collaboratively as a dedicated team project (Team PARSU), the application has officially cleared institutional internal screening rounds and is currently ongoing in national evaluation.",
    keyFeatures: [
      "Collaborative Team Project (Team PARSU): Built in a high-performing multidisciplinary team dividing specialized modules across AI modeling, Simulink validation, clinical workflows, and web development.",
      "Comprehensive Clinical Literature & Research: Led the in-depth research phase, gathering, analyzing, and synthesizing medical research papers on Diabetic Retinopathy, ICDRS grading criteria, and optical coherence tomography benchmarks.",
      "Discrete-Event Simulink Telemedicine Simulation: Modeled healthcare resource logistics in MATLAB & Simulink, simulating district-wide screening throughput, rural network bandwidth bottlenecks, and ophthalmologist review queues across 100,000+ patient runs.",
      "Rigorous Application Testing & QA: Conducted extensive end-to-end verification across 82+ automated unit and integration tests, stress-testing edge cases, image degradation artifacts, and latency thresholds.",
      "Sub-Pixel Morphological Lesion Segmentation: Detects microaneurysms, hard exudates, hemorrhages, and optic disc boundaries with 96% sensitivity and 97% specificity on referable DR.",
      "Clinical Explainability & Fast Doctor Review: Produces Grad-CAM visual heatmaps, quantified lesion evidence metrics, and ABDM/HL7 FHIR compliant diagnostic reports in under 30 seconds.",
      "Ongoing Project Progress: Successfully cleared college / internal qualification rounds of SIH 2026, currently advancing through subsequent hackathon stages.",
    ],
    architecture:
      "Dual-track architecture featuring: (1) A self-contained MATLAB & Simulink clinical validation engine executing image enhancement (CLAHE, Gamma correction), Frangi vessel filters, and discrete-event telemedicine logistics; (2) An offline-first production edge platform with a React 19 PWA, FastAPI asynchronous inference endpoints, and ONNX Runtime CPU acceleration delivering 1.2s screening turnaround.",
    techStack: ["MATLAB", "Simulink", "Python", "PyTorch", "React 19", "FastAPI", "Explainable AI"],
    date: "September 2026",
    role: "Research, Simulink Modeling & QA (Team PARSU)",
    status: "Ongoing · Cleared SIH Internal Rounds",
    githubUrl: "https://github.com/SuyashBorse/Vision_raksha-SIH26-",
    liveDemoUrl: "https://vision-raksha-sih-26.vercel.app",
    isBlueprint: false,
  },
  {
    id: "vilp",
    title: "VILP (Internship Lifecycle Management Platform)",
    description:
      "AICTE/NEP-2020 compliant full-stack institutional governance platform engineered for student KYC, corporate drives, automated NOCs, logbooks, and cryptographic SHA-256 certificates.",
    longDescription:
      "VILP (Verified Internship Lifecycle Platform) is an AICTE and NEP-2020 compliant institutional internship governance platform developed for a hackathon at G.H. Raisoni College of Engineering and Management, Jalgaon, by a collaborative 4-member team (Team PARSU). Engineered to replace fragmented spreadsheets and manual approvals across universities, the platform integrates multi-role role-based access control (Students, Corporate Recruiters, Faculty Mentors, and T&P Officers), deterministic ATS resume scoring, single-active offer mutex locks, automated 48-hour offer expiry schedulers, and tamper-proof SHA-256 cryptographic verification for institutional NOCs and degree completion certificates.",
    keyFeatures: [
      "Collaborative 4-Member Team Project: Built during the Hackathon at G H Raisoni College of Engineering and Management (GHRCEM), Jalgaon, by a dedicated 4-member team (Team PARSU) dividing duties across architecture, full-stack implementation, and testing.",
      "AICTE 240-Hour Degree Credit Accumulator: Weekly 40-hour capped student logbook submissions with automated faculty mentor auditing and PostgreSQL trigger-based degree credit recalculation.",
      "Single-Active Allocation Mutex: Enforces a strict one-offer limit per candidate, automatically withdrawing competing interview queues once a student accepts an offer.",
      "48-Hour Decision Window & Auto-Expiry Scheduler: Live tick-by-tick acceptance countdowns backed by Spring Boot background cron tasks that expire stalled offers and release applicant locks.",
      "AI ATS Resume Radar & Skill Gap Analyzer: Evaluates candidate resumes against job requisites, generating 0–100 ATS match scores and tailored learning roadmaps.",
      "Cryptographic SHA-256 Ledger & Public QR Verifiers: Issues tamper-proof digital AICTE NOC clearances and accredited completion certificates with verifiable SHA-256 public endpoints.",
      "Multi-Tier Full-Stack Architecture: Unified Spring Boot 3.3.5 microservice with Argon2/JWT security, React 18/Vite web application, Next.js 14 SSR portal, Flutter 3 mobile app, and Supabase PostgreSQL with 22 relational tables.",
    ],
    architecture:
      "Engineered with a high-concurrency Spring Boot 3.3.5 enterprise backend running Java 21, Spring Security (Argon2 + JWT), Flyway database migrations, and Bucket4j rate limiting. Cloud data is hosted on Supabase PostgreSQL (22 tables with Row Level Security and automated trigger routines). The user-facing ecosystem comprises a responsive React 18 / Vite SPA, an RSC-powered Next.js 14 SSR public verification engine, and a Flutter 3 cross-platform mobile client.",
    techStack: [
      "Java 21",
      "Spring Boot",
      "PostgreSQL",
      "Supabase",
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
    ],
    date: "August 2026",
    role: "Full-Stack Developer & Team Collaborator (4-Member Team · GHRCEM Jalgaon Hackathon)",
    status: "Hackathon Project · Team PARSU (GHRCEM Jalgaon)",
    githubUrl: "https://github.com/SuyashBorse/Internship-Lifecycle-Management-Platform",
    liveDemoUrl: "https://internship-lifecycle-management-pla.vercel.app",
    isBlueprint: false,
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
