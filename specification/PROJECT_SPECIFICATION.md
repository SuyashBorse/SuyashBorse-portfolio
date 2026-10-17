# Project Specification — Suyash Anil Borse Developer Portfolio

## 1. Project goal
Build a polished, responsive, production-minded personal developer portfolio that communicates the owner's identity, technical skills, projects, and contact options. The visual direction is a creative developer portfolio with bold typography, interactive visuals, and advanced but purposeful animation.

## 2. Required stack
- Framework: Astro, prioritizing static generation and minimal client-side JavaScript.
- UI library: React, using Astro islands only where interaction is needed.
- Styling: Tailwind CSS.
- Icons: Lucide React.
- Animation: Framer Motion, only within React islands.
- TypeScript is preferred for React components and project data where supported by the selected Astro setup.

Use current, compatible official Astro integrations and setup commands. Do not assume obsolete Tailwind integration steps. Inspect the installed versions and follow the appropriate official setup for those versions.

## 3. Required content — preserve exactly

### Hero
- Headline: `Hi, I'm Suyash Anil Borse.`
- Animated sub-headline: `Java Developer | Web Engineer | Algorithmic Problem Solver`
- Primary CTA: `View Projects`
- Secondary CTA: `Contact Me`

The animated sub-headline may reveal the exact supplied string using a typing/reveal effect. It must remain accessible to assistive technology and readable if animation is disabled.

### About Me
- Identify the owner as a **2nd-year B.Tech Information Technology engineering student at R. C. Patel Institute of Technology**.
- Emphasize daily competitive-programming practice on **CodeChef** and **LeetCode**, and a passion for **Data Structures & Algorithms**.
- Write concise supporting prose using only those facts. Do not invent grades, internships, awards, work history, or quantified achievements.

### Skills — bento-box grid
- Languages: Java, JavaScript, TypeScript, SQL
- Frontend: React, Tailwind CSS, Next.js
- Backend/Data: Node.js, Supabase, Firebase, MySQL, MongoDB
- Tools: Git, GitHub, VS Code, Power BI

### Projects — interactive cards
1. **EcoPilot AI**
   - Description: leave as a clear editable placeholder, e.g. `[Project description to be added by Suyash.]`
   - Do not invent its purpose or features.
2. **KanFlow**
   - Description: `A comprehensive Kanban board system.`
   - Do not invent unconfirmed features or usage metrics.
3. **SIH 2026 Submissions**
   - Description/context: `Architecture blueprints for deepfake audio forensics and medical image analysis pipelines.`
   - Present this as architecture/blueprint work, not as a completed deployed product unless the owner confirms that status.

Each project card must support tech-stack pills and GitHub / Live Demo icon links. Use placeholders that are visibly non-active or disabled until real URLs are provided. Do not link to `#`, fabricated URLs, or unrelated destinations. Make link labels accessible to screen readers.

### Contact and footer
- Clean contact form prepared for EmailJS integration.
- Social links: GitHub, LinkedIn, CodeChef, LeetCode.
- Use owner-provided URLs only. Until then, render a labelled placeholder or omit the outbound anchor while keeping a clear configuration TODO.
- Contact form must validate inputs, expose success/error/loading states, and not falsely claim a message was sent if EmailJS is not configured or the request fails.
- Include a visible email configuration state in development, not secret values.

## 4. Visual design
- Deep Space base background: `#0a0a0a`.
- Surface: `#171717`.
- Accent: Electric Indigo and Cyan gradients for hover/focus states.
- Typography: Inter for readable sans-serif text and Fira Code for technical labels/code-like metadata.
- Glassmorphism sticky navigation.
- Subtle glowing borders on interactive cards.
- Creative, expressive visual hierarchy with bold typography and interactive visuals.
- Keep contrast and readability ahead of decoration. Effects should be restrained and performant.
- Support reduced motion and keyboard interaction.

## 5. Required sections
1. Sticky navigation
2. Hero
3. About
4. Skills
5. Projects
6. Contact
7. Footer

Use semantic landmarks and a logical heading hierarchy. Provide a skip link.

## 6. Responsive and quality requirements
- Mobile-first; support narrow phones, tablets, laptops, and wide desktop layouts.
- Avoid horizontal overflow.
- Respect `prefers-reduced-motion`.
- Accessible keyboard focus, labels, button names, alt text where images exist, and meaningful link names.
- SEO title, description, canonical URL placeholder/configuration, Open Graph metadata, favicon placeholder, and sensible robots behavior.
- Do not add a fake testimonial section, fake analytics, invented project statistics, or unprovided biography details.
- Avoid unnecessary dependencies and avoid hydrating static sections without a real interaction need.

## 7. Required deliverables
- Working Astro application with React, Tailwind CSS, Lucide React, and Framer Motion.
- `Layout.astro`, `index.astro`, and modular components.
- Reusable components for navigation, hero, about, skills, projects, contact, and footer as appropriate.
- Centralized project/social/config data where practical.
- `.env.example` with placeholder variable names only, no real credentials.
- README with install, development, build, preview, configuration, and deployment instructions.
- Testing/acceptance checklist and phase reports.
- No unverified claim that the app is production-ready; final report must state what was actually tested.
