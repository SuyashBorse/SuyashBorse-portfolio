# Suyash Anil Borse — Developer Portfolio

A responsive, and production-ready personal developer portfolio built for **Suyash Anil Borse** (Java Developer | Web Engineer | Algorithmic Problem Solver).

Designed with a deep-space theme, sticky glassmorphic navigation, accessible micro-interactions, responsive Bento-box skills grid, and interactive project cards.

---

## Tech Stack

| Technology | Role |
| :--- | :--- |
| **Next.js 15 (App Router)** | Static export framework and page composition |
| **TypeScript** | Type-safe project schemas, interfaces, and component props |
| **Tailwind CSS** | Design tokens, utility classes, and deep-space dark theme |
| **Framer Motion** | Controlled animations, scroll reveals, and micro-interactions |
| **Lucide React** | Modern accessible icons and developer monograms |
| **EmailJS** | Client-side email dispatch with validation and honest fallback |

---

## Project Structure

```text
├── public/
│   ├── favicon.svg             # Monogram developer favicon
│   ├── robots.txt              # Search engine crawler instructions
│   └── sitemap.xml             # Sitemap index
├── src/
│   ├── app/
│   │   ├── globals.css         # Theme tokens, glassmorphism, reduced-motion rules
│   │   ├── layout.tsx          # Root document shell, SEO & OpenGraph metadata
│   │   └── page.tsx            # Composition of all portfolio sections
│   ├── components/
│   │   ├── Navigation.tsx      # Sticky glass navbar with accessible mobile drawer
│   │   ├── Hero.tsx            # Headline, animated typing sub-headline, and CTAs
│   │   ├── About.tsx           # Academic & competitive programming background
│   │   ├── Skills.tsx          # Responsive Bento-box skills grid
│   │   ├── Projects.tsx        # Project showcase with safe URL placeholders
│   │   ├── ContactForm.tsx     # Validated contact form with realistic EmailJS states
│   │   ├── Footer.tsx          # Social links, back-to-top button, and copyright
│   │   └── SocialIcons.tsx     # Custom SVG developer icons (GitHub, LinkedIn, etc.)
│   ├── data/
│   │   ├── projects.ts         # Typed project data records
│   │   └── socialLinks.ts      # Typed social profiles data
│   └── utils/
│       ├── cn.ts               # Class merging helper (clsx + twMerge)
│       └── emailjs.ts          # EmailJS client helper with validation
├── .env.example                # Safe environment variable placeholders
├── next.config.mjs             # Next.js configuration (static export configured)
├── tailwind.config.ts          # Custom color tokens and glow utilities
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

### Production Build & Static Export
```bash
npm run build
```
Generates pure static HTML, CSS, and JavaScript assets in the `out/` directory.

### Local Preview of Production Build
```bash
npm run preview
```

---

## Owner Configuration Guide

### 1. EmailJS Setup (Contact Form)
1. Sign up at [EmailJS](https://www.emailjs.com/).
2. Create an Email Service (e.g., Gmail) and note your **Service ID**.
3. Create an Email Template with variables `{{from_name}}`, `{{reply_to}}`, and `{{message}}`, and note your **Template ID**.
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

### 2. Updating Profile & Project Links
- **Social Profiles:** Open `src/data/socialLinks.ts` and replace the placeholder URLs for LinkedIn, CodeChef, and LeetCode when ready.
- **Projects:** Open `src/data/projects.ts` to add repository URLs, live demo URLs, or update the description for **EcoPilot AI**.

---

## Deployment Options

### Option 1: Vercel (Recommended & Easiest)
1. Go to [vercel.com](https://vercel.com/) and sign in with GitHub.
2. Click **Add New Project** and select `SuyashBorse-portfolio`.
3. Framework Preset: **Next.js** (detected automatically).
4. Add your environment variables (`NEXT_PUBLIC_EMAILJS_*`) in the Vercel dashboard.
5. Click **Deploy**. Vercel will build and deploy your site on every push to `main`.

### Option 2: GitHub Pages
Since the project outputs static files to `out/`, you can deploy to GitHub Pages:
1. In repository **Settings > Pages**, set Source to **GitHub Actions**.
2. Push your code to GitHub.

### Option 3: Netlify
1. Connect your GitHub repository to Netlify.
2. Build command: `npm run build`.
3. Publish directory: `out`.
4. Add environment variables under Site configuration.
