# Suyash Anil Borse — Developer Portfolio

A sleek, responsive, and performance-focused developer portfolio built for **Suyash Anil Borse** (Java Developer | Web Engineer | Algorithmic Problem Solver).

## Tech Stack
- **Framework:** Next.js (App Router, Static HTML Export)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (Deep Space Dark Theme)
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Contact:** EmailJS Client-side Integration

## Getting Started

### Prerequisites
- Node.js `v20+` or `v24+`
- npm (or pnpm/yarn)

### Installation
```bash
npm install
```

### Local Development
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
```bash
npm run build
```
This generates static production artifacts in the `out/` directory ready for deployment on Vercel, Netlify, or GitHub Pages.

### Configuration
1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
2. Populate your EmailJS credentials:
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
3. Update project and social links in `src/data/projects.ts` and `src/data/socialLinks.ts`.
