# Pixeloria-agence-web

Static marketing site for Pixeloria (HTML / CSS / vanilla JS).

## Requirements

- Node.js 20+

## Local development

```bash
npm install
npm start          # serves the site on http://127.0.0.1:8080
```

## Quality checks

```bash
npm run lint       # HTMLHint + Stylelint + ESLint
npm run linkcheck  # linkinator on index.html
npm run ci         # lint + linkcheck (what CI runs)
```

## End-to-end tests

Playwright smoke tests live in `tests/e2e/`.

```bash
npm run test:e2e:install   # one-time: install browsers
npm run test:e2e
```

## CI

GitHub Actions (`.github/workflows/ci.yml`) runs three jobs on every push/PR
to `main`:

- `lint` — HTMLHint, Stylelint, ESLint
- `linkcheck` — linkinator
- `e2e` — Playwright smoke tests against the built static site
