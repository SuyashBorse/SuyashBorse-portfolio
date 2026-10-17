# Implementation Plan — Suyash Anil Borse Developer Portfolio

## 1. Project Overview & Architectural Decision
- **Owner**: Suyash Anil Borse (2nd-year B.Tech IT student, R. C. Patel Institute of Technology).
- **Core Focus**: Showcase skills as Java Developer, Web Engineer, and Algorithmic Problem Solver (DSA on CodeChef & LeetCode).
- **Stack Decision**: Next.js (App Router, static export target) + TypeScript + Tailwind CSS + Framer Motion + Lucide React.
  - *Rationale*: Directly showcases Next.js (a stated core skill on the resume), enables smooth layout and micro-interactions via Framer Motion without hydration boundary friction, and supports static export (`output: 'export'`) for zero-cost static hosting.

## 2. Directory Structure (Next.js Adaptation)
```text
portfolio/ (workspace root)
├── public/
│   ├── favicon.svg
│   └── og-image-placeholder.png
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Document shell, fonts, SEO & OpenGraph metadata
│   │   ├── page.tsx           # Main single-page portfolio layout
│   │   └── globals.css        # Tailwind baseline, theme tokens, custom utilities
│   ├── components/
│   │   ├── Navigation.tsx     # Sticky glassmorphic navbar with mobile drawer
│   │   ├── Hero.tsx           # Headline, animated typing subheadline, CTAs
│   │   ├── About.tsx          # Educational context, DSA & competitive programming
│   │   ├── Skills.tsx         # Responsive Bento-box skills grid
│   │   ├── Projects.tsx       # Interactive project cards with glowing borders
│   │   ├── ContactForm.tsx    # Validated contact form with realistic EmailJS states
│   │   └── Footer.tsx         # Social links and copyright
│   ├── data/
│   │   ├── projects.ts        # Typed project records (strict adherence to facts)
│   │   └── socialLinks.ts     # Typed social profile links
│   └── utils/
│       └── emailjs.ts         # Safe EmailJS client helper with validation
├── .env.example               # Safe public client placeholders
├── next.config.mjs            # Next.js configuration (static export configured)
├── tailwind.config.ts         # Tailwind design tokens (#0a0a0a, #171717, indigo/cyan)
├── tsconfig.json              # Strict TypeScript configuration
└── package.json
```

## 3. Strict Phase Plan & Acceptance Gates

### Phase 1: Setup & Architecture (Current Phase)
- Initialize Next.js project with App Router, TypeScript, and Tailwind CSS.
- Install `lucide-react` and `framer-motion`.
- Set up project structure (`src/components/`, `src/data/`, `src/utils/`).
- Create `.env.example` with public client placeholders.
- Create initial placeholder page and verify build (`npm run build`).
- Output: `reports/PHASE_1_REPORT.md` and stop for user review.

### Phase 2: Design System & Core Layout
- Configure Tailwind with design tokens:
  - Deep Space background: `#0a0a0a`
  - Elevated surfaces: `#171717`
  - Accent gradients: Electric Indigo (`#6366f1`) and Cyan (`#06b6d4`)
  - Typography: Inter & Fira Code (with fallbacks)
- Implement `Navigation.tsx` (glassmorphic sticky nav with mobile menu and skip-to-content link).
- Implement `Footer.tsx` with social links.
- Implement responsive layout wrapper and verify visually.
- Output: `reports/PHASE_2_REPORT.md` and stop for user review.

### Phase 3: Content Sections & Data Layer
- Populate `src/data/projects.ts` and `src/data/socialLinks.ts` strictly adhering to specification facts.
- Implement `Hero.tsx`: Headline, accessible typing sub-headline, primary and secondary CTAs.
- Implement `About.tsx`: Verified background (2nd-year B.Tech IT, R. C. Patel Institute of Technology, CodeChef/LeetCode DSA focus).
- Implement `Skills.tsx`: Bento-box grid containing all required categories and technical items.
- Implement `Projects.tsx`: Interactive cards for EcoPilot AI (placeholder description), KanFlow, and SIH 2026 Submissions (architectural blueprints). Non-active link handling for missing URLs.
- Output: `reports/PHASE_3_REPORT.md` and stop for user review.

### Phase 4: Contact Form & Dynamic Interactions
- Implement `ContactForm.tsx`: Input validation, accessible `aria-live` region, loading/error/success states.
- Wire `src/utils/emailjs.ts` with honest fallback when credentials are not yet supplied.
- Polish Framer Motion micro-interactions: Card glow on hover, smooth section entry, respecting `prefers-reduced-motion`.
- Ensure keyboard focus visibility across all interactive elements.
- Output: `reports/PHASE_4_REPORT.md` and stop for user review.

### Phase 5: Verification, Accessibility & Deployment Readiness
- Run full production build (`npm run build`).
- Verify zero runtime console errors and valid HTML semantics.
- Audit responsive behavior on mobile, tablet, and desktop breakpoints.
- Add SEO metadata, Open Graph tags, robots, and sitemap/canonical settings.
- Document deployment steps (Vercel, Netlify, GitHub Pages) in `README.md`.
- Output: `reports/PHASE_5_REPORT.md`.

## 4. Risks & Mitigations
- **Over-animation & Performance**: All Framer Motion animations will be short, purposeful, and fully disabled if `prefers-reduced-motion: reduce` is detected.
- **Fabricated Information**: Strictly maintain placeholders for missing URLs, credentials, and project descriptions.
- **Secret Leaks**: Ensure no private keys are committed or used; only `NEXT_PUBLIC_*` placeholders in `.env.example`.
