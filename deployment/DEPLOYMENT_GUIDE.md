# Deployment Guide

## Before deployment
1. Complete all five phases and review `reports/PHASE_5_REPORT.md`.
2. Run a clean dependency install and production build.
3. Fill in the production site URL and social/project links in the owner configuration.
4. Configure EmailJS only if the owner has created the service and template and supplied the public configuration values.
5. Confirm the build has no errors and the preview behaves correctly.

## Local verification
Use the package manager selected by the project README. Typical npm commands are:
```bash
npm install
npm run build
npm run preview
```
Use the actual scripts in `package.json`; do not assume they are identical if the project uses another package manager or script names.

## Static hosting options
Astro static output can commonly be hosted on static-site platforms such as Netlify, Vercel, Cloudflare Pages, or GitHub Pages. Select one based on the owner's preference and the project's configuration. Do not deploy without explicit authorization and account access.

### Generic static deployment steps
1. Push the project to a repository chosen by the owner.
2. In the hosting provider, import the repository.
3. Set the build command to the verified production build command (commonly `npm run build`).
4. Set the output directory to Astro's configured static output directory (commonly `dist`).
5. Add only the required public EmailJS configuration values in the hosting environment settings if using EmailJS.
6. Deploy a preview first.
7. Verify the deployed preview on mobile and desktop.
8. Attach the real production domain only when supplied by the owner.

## GitHub Pages note
If using a project-site path rather than a root domain, configure Astro's `site` and `base` settings correctly and test all asset paths. Do not guess the repository name or deployment URL.

## EmailJS
- Confirm service ID, template ID, public key, and template variable names in the owner's EmailJS account.
- Only use the public key intended for browser use.
- Add public variables in the hosting provider's environment configuration.
- Rebuild/redeploy after configuration changes if required by the provider.
- Test a real submission and confirm receipt before claiming success.
- Never put private API keys in client-side environment variables.

## Rollback
Keep a known-good deployment or previous commit available. If the new deployment fails, revert to the last verified version and record the issue.
