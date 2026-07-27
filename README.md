# Pixeloria — Agence Web

Marketing site for Pixeloria (Next.js 14, App Router, TypeScript). French site
at the root, US contractor-market site under `/en/*`.

## Requirements

- Node.js 20+

## Local development

```bash
npm install
npm run dev        # http://localhost:3000
```

## Quality checks

```bash
npm run typecheck   # tsc --noEmit
npm run lint        # ESLint (next lint)
npm run lint:css    # Stylelint
npm run test:unit   # Vitest (lib/**)
npm run build       # next build
npm run ci          # typecheck + lint + build (what CI's core jobs run)
```

## End-to-end tests

Playwright tests live in `tests/e2e/` (smoke, contact form, funnel, pages,
skip link). Accessibility-specific axe-core tests live in `tests/a11y/`.

```bash
npm run test:e2e:install   # one-time: install browsers
npm run test:e2e
```

E2E tests run against a production build (`next build && next start`) in
CI — the dev server's webpack `eval()` runtime conflicts with this repo's
strict CSP (no `unsafe-eval`), which breaks client-side JS under `next dev`.

## Environment variables

See `.env.example`. Required for the contact/lead forms and CRM sync:
`NOTION_TOKEN`, `NOTION_DB_ID`, `RESEND_API_KEY`, `OWNER_EMAIL`. Optional:
Cloudflare Turnstile and Upstash Redis rate-limiting keys.

## CI

GitHub Actions (`.github/workflows/ci.yml`) runs on every push/PR to `main`:

- `typecheck` — `tsc --noEmit`
- `lint` — ESLint + Stylelint
- `unit-tests` — Vitest (`lib/**`)
- `build` — `next build`
- `e2e` — Playwright against the production build

## AI Team / AutoPilot

This repo is developed with a Claude Code multi-agent workflow (CEO AI,
Chief Architect, 6 intelligence pôles, ~36 specialized Guardians). See
`CLAUDE.md` for the full architecture, slash commands and working rules.
