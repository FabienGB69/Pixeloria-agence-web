# Cloud Agent Starter Skill — Pixeloria

> **When to use this skill:** whenever a Cloud Agent needs to run, test, or
> debug any part of this codebase for the first time.

---

## 1. Repository overview

| Item | Detail |
|------|--------|
| **Type** | Static single-page marketing site |
| **Language** | Vanilla HTML + CSS + JavaScript (no transpiler, no bundler) |
| **Font** | Space Grotesk via Google Fonts CDN |
| **Analytics** | Vercel Web Analytics (`/_vercel/insights/script.js`) |
| **UI language** | French (all visible copy) |
| **Deployment** | Vercel (implied by analytics snippet) |

### File map

```
index.html   — full page structure (header, hero, services, portfolio, process, contact form, footer)
styles.css   — design tokens (:root vars), layout, components, responsive breakpoints
script.js    — mobile hamburger menu, IntersectionObserver scroll-reveal, dynamic footer year
README.md    — one-line project description
```

There is **no** `package.json`, build step, CI config, `.env`, or backend.
All edits land in one of the three source files above.

---

## 2. Serving the site locally

Because there is no bundler, serve the project with any static file server.
The simplest option available in a Cloud Agent VM:

```bash
# from the repo root
python3 -m http.server 8080
```

Then open `http://localhost:8080` in a browser (or use `computerUse` to
interact with Chrome).

### Vercel analytics caveat

The `<script defer src="/_vercel/insights/script.js"></script>` tag will
**404** when served outside Vercel. This is harmless — the stub
`window.va` function in `index.html` prevents runtime errors. No action
is required to work around it.

---

## 3. Codebase areas and testing workflows

### 3a. HTML structure (`index.html`)

**What lives here:** semantic sections (hero, services, portfolio, process,
contact), navigation links, the contact form, the analytics snippet, and all
meta/SEO tags.

**How to test changes:**

1. Start the local server (`python3 -m http.server 8080`).
2. Open `http://localhost:8080` with the `computerUse` subagent.
3. Verify the page renders, all sections are visible when scrolled into view,
   nav anchor links (`#services`, `#portfolio`, `#process`, `#contact`) scroll
   to the correct section, and the footer shows the current year.
4. For accessibility/markup changes, validate with:
   ```bash
   npx html-validate index.html
   ```
   (install on first use: `npx html-validate` will auto-prompt.)

**Gotchas:**

- The contact form posts to `action="#"` with no backend — submitting it
  reloads the page. Do not treat the reload as a bug.
- All UI strings are French. Preserve the language unless explicitly asked to
  change it.

### 3b. Styles (`styles.css`)

**What lives here:** CSS custom properties (`:root` block), component styles,
layout grids, the `.reveal` animation class, and two responsive breakpoints
(980 px and 740 px).

**Key design tokens** (in `:root`):

| Token | Value | Purpose |
|-------|-------|---------|
| `--bg` | `#080810` | page background |
| `--surface` | `#111123` | card/section background |
| `--primary` | `#7a5cff` | primary accent (purple) |
| `--accent` | `#00d1ff` | secondary accent (cyan) |
| `--radius` | `18px` | default border radius |

**How to test changes:**

1. Start the local server and open the page in Chrome.
2. Use the `computerUse` subagent to screenshot or record:
   - **Desktop view** — default viewport.
   - **Tablet view** — resize to ≤ 980 px width. Cards and grids should
     collapse to a single column.
   - **Mobile view** — resize to ≤ 740 px width. The hamburger menu button
     should appear and the nav should toggle open/closed.
3. Compare before/after screenshots when modifying colours, spacing, or layout.

### 3c. JavaScript (`script.js`)

**What lives here:** three small features —
1. Hamburger menu toggle (adds/removes `.is-open` on `.site-nav`).
2. Scroll-reveal via `IntersectionObserver` (adds `.is-visible` to `.reveal`
   elements at 20 % visibility threshold).
3. Dynamic year injection into `#year`.

**How to test changes:**

1. Serve and open the page.
2. **Menu toggle:** resize to ≤ 740 px, click the "Menu" button, confirm the
   nav opens (`.is-open` class added, `aria-expanded="true"`).
3. **Scroll reveal:** scroll down the page; each `.reveal` section should
   fade in with a slight upward slide. Verify with a screen recording.
4. **Footer year:** confirm the footer reads the current year (e.g. "© 2026").
5. For logic changes, you can also test in a headless check:
   ```bash
   node -e "
     const fs = require('fs');
     const src = fs.readFileSync('script.js','utf8');
     // basic syntax check
     new Function(src);
     console.log('script.js parses OK');
   "
   ```

---

## 4. Authentication & feature flags

- **Auth:** none. The site is fully public with no login flow.
- **Feature flags:** none. There are no toggles or conditional code paths.
- **Environment variables:** none required.

If any of these are introduced in the future, document them here.

---

## 5. Common Cloud Agent recipes

### Open the site for manual testing

```bash
# terminal 1 — start server
python3 -m http.server 8080 &

# then use the computerUse subagent to open http://localhost:8080 in Chrome
```

### Quick syntax-check all source files

```bash
# HTML
npx html-validate index.html

# CSS (optional, install once)
npx stylelint styles.css

# JS
node --check script.js
```

### Take a before/after screenshot

Use the `computerUse` subagent to navigate to the relevant section, take a
screenshot, make the code change, reload the page, take a second screenshot,
and compare.

### Record a demo video

1. Navigate to the page in Chrome via `computerUse`.
2. Call `RecordScreen` with `START_RECORDING`.
3. Use `computerUse` to interact with the page (scroll, click menu, resize).
4. Call `RecordScreen` with `SAVE_RECORDING`.

---

## 6. Keeping this skill up to date

When you discover a new testing trick, workaround, or runbook step while
working in this repo:

1. **Edit this file** (`.cursor/skills/cloud-agent-starter.md`) directly.
2. Add the new information under the most relevant section, or create a new
   subsection if it doesn't fit.
3. Keep entries concrete and copy-pasteable — favour shell commands and exact
   file paths over prose.
4. If a build system, test framework, backend, or CI pipeline is added to the
   project, add a dedicated section with setup and run instructions.
5. Commit the skill update alongside the related code change so the two stay
   in sync.

**Guiding principle:** a Cloud Agent reading this file for the first time
should be able to serve, test, and demo the site within its first few tool
calls, with zero ambiguity.
