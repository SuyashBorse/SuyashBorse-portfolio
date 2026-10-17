# Phase 1 — Project Setup and Architecture

Paste this prompt after the Master Orchestrator has been loaded.

Read the specification and architecture documents again before implementation. Complete Phase 1 only.

## Tasks
1. Inspect Node.js, npm/pnpm/yarn availability, current workspace contents, and repository state.
2. Initialize/configure an Astro project using the current supported CLI workflow.
3. Add React integration and Tailwind CSS using current version-compatible official guidance.
4. Install/configure `lucide-react` and `framer-motion`.
5. Configure TypeScript, Astro, Tailwind, and scripts cleanly.
6. Create the planned folder structure and minimal placeholder files only where needed to establish architecture.
7. Add `.env.example` containing empty EmailJS public configuration placeholders. Do not add real values.
8. Add a README with exact setup, development, build, and preview commands.
9. Confirm the app's initial scaffold runs and builds.

## Constraints
- Do not implement the full visual site in this phase.
- Do not use deprecated integration instructions.
- Avoid arbitrary dependency/version guesses; resolve compatible versions and report them.
- Do not overwrite existing user work without inspecting it first.
- Keep the initial page minimal but functional.

## Verification gate
Run and report:
- Dependency installation.
- Development server startup or an equivalent smoke check.
- Production build.
- Type check/lint if configured.

Fix errors before finishing. Write `reports/PHASE_1_REPORT.md` containing versions, files changed, exact commands actually run, results, and remaining issues. Then stop and wait for approval.
