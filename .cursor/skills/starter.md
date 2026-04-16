# Pixeloria – Cloud Agent Starter Skill

> **Purpose:** Give Cloud agents everything they need to run, inspect, and test
> the Pixeloria codebase from a cold start with no prior context.

---

## Codebase at a glance

| File | Role |
|------|------|
| `index.html` | Single-page site (French copy). All sections live here. |
| `styles.css` | Layout, theme tokens, responsive rules, reveal animations. |
| `script.js` | Three behaviours: mobile nav toggle, scroll-reveal via `IntersectionObserver`, footer year stamp. |
| `README.md` | One-line description only – not a reliable source of run instructions. |

**Stack:** Pure HTML5 + CSS3 + vanilla JS. No build step, no package manager, no backend, no database.

**Deployment target:** Vercel (static). The Vercel Web Analytics stub in `index.html` (lines 18-24) loads `/_vercel/insights/script.js` at runtime – that path only resolves on Vercel infrastructure, not locally.

---

## 1. Environment setup

### Prerequisites

| Tool | Minimum | Notes |
|------|---------|-------|
| A modern browser | Any | Chrome/Firefox/Edge all work |
| A static file server | Optional | Only needed for accurate `fetch` / service-worker testing |
| Node.js + npx | Optional | Quickest way to get a local server |
| Python 3 | Optional | Zero-install alternative server |

No `.env` files, secrets, or credentials are required. There is no login flow.

---

## 2. Starting the app locally

### Option A – Open the file directly (fastest)

```bash
# From the repo root
open index.html          # macOS
xdg-open index.html      # Linux
start index.html         # Windows
```

Works for all visual and interaction checks. The Vercel Analytics script will produce a harmless 404 in the browser console – that is expected.

### Option B – Python static server (zero extra installs)

```bash
cd /workspace
python3 -m http.server 8080
# Open http://localhost:8080 in a browser
```

### Option C – Node/npx (one-liner)

```bash
cd /workspace
npx serve .
# Default port is 3000; follow the terminal output for the URL
```

### Stopping the server

`Ctrl+C` in the terminal where the server is running.

---

## 3. Feature flags

There are **no feature flags** in this codebase. If you need to add one:

1. Add a boolean constant at the top of `script.js`, e.g. `const FLAG_NEW_HERO = false;`.
2. Guard the code block with `if (FLAG_NEW_HERO) { … }`.
3. Document the flag name and default in this skill file (section 3).

---

## 4. Codebase areas and testing workflows

### 4.1 HTML structure (`index.html`)

**What to verify:**

- All navigation anchor links (`#services`, `#portfolio`, `#process`, `#contact`) resolve to existing section `id`s.
- Every `<article class="card reveal">` has visible text content.
- The contact form has `required` on all three inputs and a submit button.

**Manual check:**

```
1. Open the page in a browser.
2. Click each nav link – the page should scroll smoothly to the correct section.
3. Resize the window below 768 px – the Menu button should appear; desktop nav hides.
4. Submit the contact form empty – the browser's native validation should block submission.
```

**Automated HTML lint (no extra installs):**

```bash
# Requires Node; installs htmlhint globally once
npx htmlhint index.html
```

Expected output: zero errors against the default ruleset.

---

### 4.2 Styles (`styles.css`)

**What to verify:**

- Dark background with glow effects renders correctly.
- Cards have consistent padding and border-radius.
- `.reveal` elements start hidden (`opacity: 0; transform: translateY(…)`) and transition to `.is-visible`.
- Responsive breakpoints: nav collapses, hero switches from two-column to single-column, cards stack.

**Manual check:**

```
1. Open DevTools → Responsive mode.
2. Test at 375 px (mobile), 768 px (tablet), 1280 px (desktop).
3. Confirm no horizontal scroll at any width.
4. Confirm the glow divs (.background-glow-1, .background-glow-2) are behind content (z-index).
```

**CSS lint (optional):**

```bash
npx stylelint styles.css --config '{"rules":{"color-no-invalid-hex":true}}'
```

---

### 4.3 JavaScript (`script.js`)

**What to verify:**

Three independent behaviours – test each in isolation:

#### Mobile nav toggle

```
1. Set viewport to < 768 px.
2. Click "Menu" – <nav id="site-nav"> should gain class "is-open".
3. Click again – class should be removed.
4. Check aria-expanded attribute toggles between "true" and "false".
```

#### Scroll-reveal (`IntersectionObserver`)

```
1. Open the page; hero content is immediately visible (top of page).
2. Scroll down slowly – each .reveal element should fade/slide in as it crosses
   20 % of the viewport (threshold: 0.2 in the observer config).
3. Scroll back up – elements stay visible (observer calls unobserve after first
   intersection, so they do not hide again).
```

**Fallback path** – to test the non-`IntersectionObserver` branch:

```js
// Paste in DevTools console before page load (use about:blank first, then navigate)
// OR temporarily delete the IntersectionObserver block from script.js
// All .reveal elements should immediately have class "is-visible"
```

#### Footer year stamp

```
1. Open DevTools → Console.
2. Run: document.querySelector('#year').textContent
3. Expected output: current four-digit year (e.g. "2026").
```

**Unit test without a framework** – paste into DevTools console:

```js
// Quick smoke tests
const assertions = [];
assertions.push(['nav toggle: aria-expanded starts false',
  document.querySelector('.menu-toggle').getAttribute('aria-expanded') === 'false']);
assertions.push(['year is current',
  document.querySelector('#year').textContent === String(new Date().getFullYear())]);
assertions.forEach(([label, pass]) =>
  console[pass ? 'log' : 'error']((pass ? '✓' : '✗') + ' ' + label));
```

---

### 4.4 Vercel Analytics stub

The stub in `index.html` (lines 18-24) queues calls via `window.va`. On a local
server the external script 404s silently. Verify it does not break the page:

```
1. Open the browser network tab.
2. Reload the page on a local server.
3. The request to /_vercel/insights/script.js will show 404 – this is expected and harmless.
4. Confirm window.va is defined: run `typeof window.va` in the console → "function".
```

---

### 4.5 Deployment to Vercel

```bash
# Prerequisite: Vercel CLI installed and authenticated
npm i -g vercel
vercel login          # follow OAuth or email flow

# Preview deploy (does not replace production)
cd /workspace
vercel

# Production deploy
vercel --prod
```

After deploy:

- Visit the printed URL.
- Confirm `/_vercel/insights/script.js` now loads (no 404).
- Confirm `window.va` is still a function.

---

## 5. Common issues and fixes

| Symptom | Cause | Fix |
|---------|-------|-----|
| `/_vercel/insights/script.js` 404 in console | Running locally, not on Vercel | Expected; ignore or remove the `<script defer>` tag for local-only work |
| Font not loading | No internet / Google Fonts blocked | Add `font-display: swap` fallback in CSS or self-host the font |
| Scroll animations do not fire | `IntersectionObserver` unavailable (old browser) or page loaded without scrolling | The fallback adds `is-visible` immediately; check browser support |
| Contact form submits to `#` | No backend handler exists | Form is front-end only; wire up a service (Formspree, Netlify Forms, etc.) to handle submissions |
| Mobile nav does not open | JS error on page load | Check DevTools Console for errors in `script.js` |

---

## 6. Keeping this skill up to date

Whenever a Cloud agent (or human contributor) discovers a new testing trick,
working command, environment quirk, or useful shortcut:

1. Open `.cursor/skills/starter.md`.
2. Add the finding to the most relevant section (or create a new sub-section under
   section 4 if it is a new codebase area).
3. If adding a new runbook fact, also add a row to the "Common issues" table in
   section 5.
4. Commit with message: `docs: update starter skill – <one-line summary>`.

**Criteria for a good skill update:**
- Concrete: includes the exact command or browser step.
- Scoped: belongs to a specific file or behaviour, not the project in general.
- Reproducible: another agent can follow it cold without extra context.
