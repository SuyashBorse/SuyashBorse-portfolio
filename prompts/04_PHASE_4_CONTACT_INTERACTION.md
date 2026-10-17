# Phase 4 — Contact Form, Social Links, and Interaction Polish

Complete Phase 4 only after Phase 3 has been approved.

## Tasks
1. Implement an accessible contact form with name, email, and message fields.
2. Add client-side validation and accessible inline error messages.
3. Add loading, success, failure, and configuration-missing states.
4. Integrate EmailJS only if valid owner-supplied configuration is available. Otherwise leave the form in an honest setup-needed state and document how to configure it.
5. Use the actual EmailJS template variable names only after verifying them from owner-supplied details. Do not guess them.
6. Guard against duplicate submissions and do not claim success before provider confirmation.
7. Render GitHub, LinkedIn, CodeChef, and LeetCode links only when valid configured URLs are present. Keep placeholders clearly labelled and non-clickable otherwise.
8. Finish motion and micro-interactions while respecting `prefers-reduced-motion`.
9. Add basic metadata and social preview defaults, avoiding invented canonical domains.

## Security and privacy
- Never commit real secrets.
- Public EmailJS values may be exposed in client bundles; only use values intended for public use.
- Do not log contact form message bodies.
- Do not collect extra personal data.

## Verification gate
Test empty fields, invalid email, valid submission flow (mocked only if clearly reported as mocked), missing configuration, provider failure, duplicate-submit prevention, and keyboard access. Never claim a live email was sent unless an actual configured submission confirms it.

Write `reports/PHASE_4_REPORT.md` and stop for approval.
