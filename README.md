# Suyash Borse — Developer Portfolio

A responsive, production-ready developer portfolio built for **Suyash Borse** (Software Developer · Java & Full-Stack Web Engineer).

Designed with a sleek deep-space dark aesthetic, sticky glassmorphic navigation, accessible micro-interactions, an interactive 3D WebGL globe, dynamic project deep-dive pages, and a categorized skills inventory.

---

## Live Profiles

| Platform | Handle / Profile | Focus |
| :--- | :--- | :--- |
| **GitHub** | [@SuyashBorse](https://github.com/SuyashBorse) | 10+ Public repositories & collaborative open-source |
| **LinkedIn** | [in/suyashborse](https://www.linkedin.com/in/suyashborse/) | Professional networking & updates |
| **CodeChef** | [rcpit251109101](https://www.codechef.com/users/rcpit251109101) | 1,000+ Problems Solved (Arrays, Strings, Stacks, Queues) |
| **LeetCode** | [Suyashborse](https://leetcode.com/u/Suyashborse/) | Algorithmic problem solving in Java |
| **Email** | [suyash.a.borse@gmail.com](mailto:suyash.a.borse@gmail.com) | Direct communication & opportunities |

---

## Featured Projects

1. **[EcoTrack (Intelligent Carbon Tracker)](https://ecotrack-app-peach.vercel.app/)**
   - Personal greenhouse gas emissions tracker built strictly on IPCC/GHG Protocol coefficients.
   - Stack: Supabase PostgreSQL 17 with RLS, Google Gemini AI sustainability coach, Chart.js multi-period analytics, and canvas celebrations.
   - [GitHub Repository](https://github.com/SuyashBorse/Intelligent-Sustainability-Assistant-and-Carbon-Tracker)

2. **[Currency Converter](https://currency-converter-orpin-eight.vercel.app/)**
   - Real-time foreign exchange rates tool built with modern vanilla JavaScript (ES6+), HTML5, and CSS3.
   - Demonstrates async/await, Fetch API JSON response streams, dynamic DOM manipulation, and national flag CDN bindings.
   - [GitHub Repository](https://github.com/SuyashBorse/Currency-Converter)

3. **[RetinAI (VisionRaksha) — SIH '26](https://vision-raksha-sih-26.vercel.app/)**
   - Explainable AI telemedicine screening pipeline for Diabetic Retinopathy engineered for Smart India Hackathon 2026 (MathWorks PS SIH26038).
   - Qualified through college internal evaluation with Team PARSU.
   - Stack: MATLAB, Simulink logistics simulation, Python, PyTorch, React 19, FastAPI, Grad-CAM clinical explainability.
   - [GitHub Repository](https://github.com/SuyashBorse/Vision_raksha-SIH26-)

4. **VILP (Verified Internship Lifecycle Platform)**
   - AICTE & NEP-2020 compliant institutional internship governance platform developed for a hackathon by Team PARSU.
   - Stack: Java Spring Boot backend tasks, PostgreSQL relational data modeling, role-based access control, and SHA-256 certificate verification.
   - [GitHub Repository](https://github.com/SuyashBorse/VILP)

---

## Tech Stack

| Technology | Role |
| :--- | :--- |
| **Next.js 15 (App Router)** | Modern React framework, Turbopack dev server, and dynamic SSG routes |
| **TypeScript (Strict)** | End-to-end type safety, project schemas, and component prop definitions |
| **Tailwind CSS** | Design tokens, custom utilities, and deep-space dark theme |
| **Framer Motion** | Controlled scroll reveals, bento animations, and micro-interactions |
| **Three.js / Cobe** | Interactive 3D WebGL globe with India/Maharashtra focus |
| **Lucide React** | Modern accessible icons and developer monograms |
| **EmailJS** | Client-side email dispatch with field validation and graceful fallback |

---

## Project Structure

```text
├── public/
│   ├── favicon.svg             # Terminal prompt >_ vector favicon
│   ├── robots.txt              # Search engine crawler instructions
│   └── sitemap.xml             # Sitemap index
├── src/
│   ├── app/
│   │   ├── api/                # API routes (GitHub contributions helper)
│   │   ├── projects/[id]/      # Dynamic project deep-dive showcase pages
│   │   ├── globals.css         # Theme tokens, glassmorphic styling, keyframe animations
│   │   ├── icon.svg            # App Router auto-generated favicon
│   │   ├── layout.tsx          # Root layout shell, SEO, and OpenGraph metadata
│   │   ├── loading.tsx         # Lightweight route loading fallback
│   │   └── page.tsx            # Main single-page portfolio composition
│   ├── components/
│   │   ├── Navigation.tsx      # Sticky glass navbar with accessible mobile drawer
│   │   ├── Hero.tsx            # Editorial typography headline: "Suyash Borse — SOFTWARE DEVELOPER"
│   │   ├── About.tsx           # Bento grid: 3D Globe, dynamic age counter, and social links
│   │   ├── Globe.tsx           # Interactive WebGL 3D Globe with India focus
│   │   ├── Skills.tsx          # Dual-row animated marquee + Core CS inventory
│   │   ├── Projects.tsx        # 2x2 Dino Kupinic style cards with direct deep-dive links
│   │   ├── Experience.tsx      # Chronological journey, research, and DSA practice
│   │   ├── AchievementsAndActivity.tsx # CodeChef 1,000+ problems, GitHub repos, SIH qualifier
│   │   ├── ContactForm.tsx     # Validated contact form with realistic EmailJS states
│   │   ├── CustomCursor.tsx    # Interactive glowing custom cursor
│   │   ├── Footer.tsx          # Profile shortcuts, back-to-top button, and copyright
│   │   └── SocialIcons.tsx     # Custom SVG developer icons (GitHub, LinkedIn, CodeChef, LeetCode)
│   ├── data/
│   │   ├── projects.ts         # Full project schemas, key features, and deep-dive content
│   │   ├── projectVisuals.tsx  # Dynamic brand logos & badges for project visual cards
│   │   └── socialLinks.ts      # Structured developer profile metadata
│   └── utils/
│       ├── cn.ts               # Class merging helper (clsx + twMerge)
│       └── emailjs.ts          # EmailJS client helper with validation
├── .env.example                # Safe environment variable placeholders
├── next.config.mjs             # Next.js configuration
├── tailwind.config.ts          # Custom color tokens, animations, and glow utilities
└── tsconfig.json               # TypeScript strict configuration
```

---

## Getting Started

### Prerequisites
- **Node.js**: `v20+` or `v24+`
- **npm**: `v10+` or `v11+`

### Installation
```bash
npm install
```

### Local Development
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Type Check
```bash
npm run type-check
```

### Production Build
```bash
npm run build
```
Creates an optimized production build with static generation (`.next/`).

---

## EmailJS Setup (Contact Form)

1. Sign up for a free account at [EmailJS](https://www.emailjs.com/).
2. Create an Email Service connected to Gmail and copy your **Service ID**.
3. Create an Email Template with variables `{{from_name}}`, `{{reply_to}}`, and `{{message}}`, and copy your **Template ID**.
4. In your EmailJS Account Settings, copy your **Public Key**.
5. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
6. Add your credentials:
   ```env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
   ```

---

## Deployment (Vercel)

1. Push your latest code to GitHub:
   ```bash
   git push origin main
   ```
2. Log in to [vercel.com](https://vercel.com/) with GitHub.
3. Click **Add New Project** &rarr; select **`SuyashBorse-portfolio`**.
4. Framework Preset: **Next.js** (detected automatically).
5. Add your environment variables (`NEXT_PUBLIC_EMAILJS_*`) if configuring EmailJS.
6. Click **Deploy**. Vercel will automatically build and deploy your site on every push to `main`.

---

## License

© 2026 Suyash Borse. All rights reserved.
