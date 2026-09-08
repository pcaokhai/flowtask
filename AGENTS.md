# Project agent memory

This file is the project's committed home for project-intrinsic agent knowledge: build, test, release, architecture, and sharp-edge notes that should travel with the code.

- Add durable project-specific notes here as they are discovered through real work.

## Stack
- Vite + vanilla TypeScript, no framework, no backend. Single static Pricing page.
- Unit tests: Vitest (`npm test`). E2E: Playwright (`npm run test:e2e`), config auto-boots `npm run dev` on port 4321.
- Build: `npm run build` (runs `tsc` then `vite build`).

## Design system
- Persisted at `design-system/flowtask/MASTER.md` (generated via ui-ux-pro-max skill). CSS custom properties live in `src/styles/tokens.css` — always source colors/spacing/shadows from there, never hardcode hex values in component CSS.
- Pricing calculation logic lives in `src/lib/pricing.ts` (pure functions, unit-tested) — the DOM layer (`src/main.ts`) only reads from it.

## Maintaining this file

Keep this file for knowledge useful to almost every future agent session in this project.
Do not repeat what the codebase already shows; point to the authoritative file or command instead.
Prefer rewriting or pruning existing entries over appending new ones.
When updating this file, preserve this bar for all agents and keep entries concise.
