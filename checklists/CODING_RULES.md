# Coding Rules for Antigravity

## Architecture
- Astro owns routing, layout, metadata, and static content.
- React islands are for interactions that need client-side behavior.
- Framer Motion is allowed only inside React islands.
- Do not hydrate every section by default.
- Prefer small, focused components and centralized data.

## Quality
- TypeScript for React components/data where practical.
- Semantic HTML landmarks and correct heading order.
- Mobile-first CSS and no horizontal overflow.
- Visible focus styles and keyboard-operable interactions.
- Respect `prefers-reduced-motion`.
- Accessible form labels, error messages, and live status updates.
- Do not rely on color or animation alone to convey state.
- Avoid `any` unless justified and documented.
- Avoid unnecessary dependencies, heavy effects, and layout shifts.

## Content integrity
- Preserve exact required text.
- Do not invent biography facts, awards, metrics, project capabilities, tech stacks, or links.
- Use the provided placeholders for unknown values.
- No fake `href="#"` links.
- Do not imply SIH submissions are deployed products; describe them as architecture blueprints.

## Security
- No secrets in source control.
- Never put private keys in `PUBLIC_*` variables.
- Do not log contact form message contents.
- Do not claim email success without provider confirmation.
- Validate and sanitize data appropriately for its use.

## Delivery discipline
- One phase at a time.
- Run relevant checks after each phase.
- Fix failures before proceeding.
- Write a phase report with real command results.
- Do not fabricate screenshots, test results, deployment URLs, or completed tasks.
