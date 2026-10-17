# Architecture and Design System

## 1. Recommended architecture

### Astro/static by default
Use `.astro` files for layout and sections that do not require client-side state. Astro should own page composition, metadata, and static content.

### React islands only when useful
Use React components for interactive behavior such as:
- Typing/reveal effect if a CSS-only animation is insufficient.
- Animated project-card interactions if they require state.
- Contact form behavior.
- Any explicitly interactive visual element.

Use the smallest practical hydration directive (`client:load`, `client:visible`, or `client:idle`) based on when interaction is needed. Do not hydrate every component by default. Framer Motion must be used only inside React components/islands.

### Suggested structure
```text
portfolio/
├── public/
│   ├── favicon.svg
│   └── og-image-placeholder.png
├── src/
│   ├── components/
│   │   ├── Navigation.astro
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── Skills.astro
│   │   ├── Projects.astro
│   │   ├── ContactForm.tsx
│   │   ├── AnimatedHeadline.tsx
│   │   └── Footer.astro
│   ├── data/
│   │   ├── projects.ts
│   │   └── socialLinks.ts
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   ├── styles/
│   │   └── global.css
│   └── utils/
│       └── emailjs.ts
├── .env.example
├── astro.config.mjs
├── package.json
├── tsconfig.json
├── README.md
└── ...
```
The implementer may adapt names if the architecture remains modular and all required behavior is met.

## 2. Setup strategy
Use the current Astro CLI to create an Astro project, then add the React integration and Tailwind using current supported instructions for the installed Astro version. Add `lucide-react` and `framer-motion`. Verify dependency compatibility rather than pinning arbitrary versions. Record exact commands in the README.

Do not use an outdated Tailwind integration just because it appears in old tutorials. If the chosen current setup uses Tailwind's Vite plugin, configure it correctly for the installed versions.

## 3. Design tokens
- `--color-bg: #0a0a0a`
- `--color-surface: #171717`
- Add accessible text, muted text, border, indigo, and cyan tokens.
- Use an indigo-to-cyan gradient as a focused accent, not as a background for every element.
- Define spacing, radius, shadows, and container widths consistently.
- Prefer fluid typography using `clamp()` where appropriate.
- Use Inter and Fira Code with sensible system fallbacks. If using a remote font provider, keep a robust fallback and avoid blocking rendering.

## 4. Motion and interaction
- Short, purposeful transitions for hover/focus.
- Respect `prefers-reduced-motion`; disable or simplify non-essential motion.
- Never rely on animation to convey essential information.
- Avoid continuous expensive effects, large particle fields, scroll-jacking, and layout-shifting animation.
- Ensure keyboard users can access every interactive feature.
- Keep focus indicators visible against the dark theme.

## 5. Component contracts
- `Layout.astro`: document shell, global styles, SEO metadata, font strategy, theme baseline.
- `index.astro`: composes page sections in the required order.
- `Navigation.astro`: responsive sticky navigation, accessible mobile menu if needed, glass effect.
- `Hero.astro`: exact headline and CTA text; animated headline can be a React island.
- `About.astro`: supplied student context and DSA/competitive-programming focus.
- `Skills.astro`: responsive bento grid, all specified skills.
- `Projects.astro`: data-driven cards, tech pills, disabled/unconfigured outbound links.
- `ContactForm.tsx`: validation and realistic EmailJS states; no false success.
- `Footer.astro`: social links from configuration; placeholders must not be fake links.

## 6. Project data
Keep cards in a typed data array if useful. Tech-stack tags may be reasonable suggestions only if clearly marked as editable and not stated as confirmed project facts. Prefer an empty/`TODO` tech-stack list over inventing technologies. Do not manufacture repository or live demo links.

## 7. Contact integration
Use an `.env.example` with variables such as:
- `PUBLIC_EMAILJS_SERVICE_ID=`
- `PUBLIC_EMAILJS_TEMPLATE_ID=`
- `PUBLIC_EMAILJS_PUBLIC_KEY=`

Explain that public-prefixed client variables are visible in the browser and must only contain values intended to be public. Never put a private key or server secret in a public variable. The form must:
- Validate name, email, and message.
- Provide an accessible live status region.
- Disable or guard duplicate submissions while sending.
- Show success only after the provider confirms success.
- Show an honest setup-needed state if values are absent.
- Never log message contents or credentials unnecessarily.

## 8. Performance and SEO
- Prefer static HTML for text and cards.
- Avoid unnecessary client JavaScript and oversized dependencies.
- Add title, description, canonical URL configuration, Open Graph metadata, and social preview placeholder.
- Avoid layout shift; set dimensions/aspect ratios for visual assets.
- Confirm production build output before declaring completion.
