# Antigravity Portfolio Package — START HERE

## Purpose
This package guides Antigravity through building a premium, creative developer portfolio for **Suyash Anil Borse** using strict phases and verification gates.

## How to use
1. Extract this ZIP into a new, dedicated Antigravity workspace.
2. Open the workspace folder in Antigravity.
3. Start with `prompts/00_MASTER_ORCHESTRATOR.md`.
4. Ask Antigravity to read `specification/PROJECT_SPECIFICATION.md`, `specification/ARCHITECTURE_AND_DESIGN_SYSTEM.md`, and the relevant checklists before making changes.
5. Execute one phase at a time, in order, using `prompts/01_PHASE_1_SETUP.md` through `prompts/05_PHASE_5_VERIFY_DEPLOY.md`.
6. Do not proceed to the next phase until the current phase passes its acceptance gate and its report is written to `reports/PHASE_N_REPORT.md`.
7. Fill in the placeholders in `specification/USER_CONFIG.md` before enabling real links or email delivery.

## Important rules
- Treat the supplied portfolio content in the specification as the source of truth.
- Do not invent social profile URLs, repository URLs, live-demo URLs, EmailJS credentials, project achievements, or the EcoPilot AI description.
- Use clearly labelled placeholders where information is missing.
- Never put secrets in source control or client-side code. EmailJS public configuration may be client-visible by design, but only use values supplied by the owner and follow EmailJS guidance.
- Build the site; do not stop after producing a plan or mockup.
- Do not claim a build, test, accessibility check, or deployment succeeded unless you actually ran and verified it.
- If an external dependency, API, credential, or decision is unavailable, implement a safe placeholder and document the blocker rather than fabricating values.

## Package map
- `specification/PROJECT_SPECIFICATION.md`: content, features, and acceptance criteria.
- `specification/ARCHITECTURE_AND_DESIGN_SYSTEM.md`: implementation architecture and visual direction.
- `specification/USER_CONFIG.md`: owner-editable links and service configuration placeholders.
- `prompts/00_MASTER_ORCHESTRATOR.md`: persistent execution rules.
- `prompts/01_PHASE_1_SETUP.md` … `prompts/05_PHASE_5_VERIFY_DEPLOY.md`: phase-specific instructions.
- `checklists/TESTING_AND_ACCEPTANCE.md`: required verification checklist.
- `checklists/CODING_RULES.md`: implementation constraints.
- `deployment/DEPLOYMENT_GUIDE.md`: build and hosting guidance.
- `reports/`: Antigravity must create phase reports here as work progresses.
