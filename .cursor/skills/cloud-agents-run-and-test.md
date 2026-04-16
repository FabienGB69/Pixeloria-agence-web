# Cloud agents: run and test (Pixeloria static site)

Minimal runbook for autonomous agents working in this repository. This project is a **static marketing site** (HTML, CSS, vanilla JavaScript). There is **no package manager**, **no automated test suite**, and **no feature-flag system** in the codebase today.

---

## First steps (any change)

1. **Repository root**: `/workspace` (or clone root). All paths below are relative to the repo root.
2. **No install step**: open files or serve locally; nothing to `npm install`.
3. **No login required** for local preview. If you need a **Vercel** or **GitHub** authenticated flow, use the environment’s configured credentials or deployment tools; this repo does not define app-level “login.”
4. **Feature flags**: not used. If a future change introduces flags, document the env vars or mock points in this skill under “Updating this skill.”

---

## Serve the site locally

Pick one (from repo root):

```bash
python3 -m http.server 8080
```

Then open `http://127.0.0.1:8080/` (serves `index.html` as default).

Alternative if available:

```bash
npx --yes serve -l 3000
```

**Vercel Web Analytics**: `index.html` loads `/_vercel/insights/script.js`. That path exists on Vercel; a simple static server will **404** that script locally. That is expected and does not block manual QA of layout and interactions.

---

## By codebase area

### Static pages (`index.html`)

- **Run**: serve as above; load `/` or `/index.html`.
- **Test (manual)**:
  - Scroll through all sections (hero, services, portfolio, process, contact, footer).
  - Confirm anchors in the header match section `id`s and jump correctly.
  - Check `<title>` and meta description still read correctly after edits.
- **Quick non-browser check**: `curl -sSf http://127.0.0.1:8080/ | head` after starting the server (smoke: HTML returned).

### Styles (`styles.css`)

- **Run**: same server; hard-refresh the browser after CSS edits (`Ctrl+Shift+R` / equivalent).
- **Test (manual)**:
  - Resize viewport (mobile / tablet / desktop): header, grids, typography, spacing.
  - Toggle the mobile nav and confirm open/closed styles and overlay behavior.
  - Scan focus states if interactive elements or links were changed.

### Client script (`script.js`)

- **Run**: serve the site; open DevTools **Console** for errors.
- **Test (manual)**:
  - **Menu**: click “Menu”; `aria-expanded` toggles; `.is-open` on `.site-nav`; nav usable on small widths.
  - **Reveal animations**: scroll until `.reveal` blocks enter view; they should gain `.is-visible` (or be visible immediately if `IntersectionObserver` is unsupported).
  - **Footer year**: `#year` should show the current calendar year.
- **Automated tests**: none in repo. If you add a runner later, document the exact command here.

### Assets and root files

- **README.md**: human-oriented; not part of runtime.
- **No `package.json`, no CI config** in-repo: do not assume `npm test` or GitHub Actions unless they are added.

---

## Common agent workflows

| Goal | What to do |
|------|----------------|
| Verify a copy or markup change | Serve + browser or `curl` smoke |
| Verify layout/CSS | Serve + responsive manual pass |
| Verify JS behavior | Serve + Console + menu + scroll |
| “Production-like” analytics script | Deploy or use Vercel preview; local 404 on insights is OK |

---

## Updating this skill

When you discover new **commands**, **env vars**, **feature flags**, **mocks**, or **test** steps:

1. Edit this file: `.cursor/skills/cloud-agents-run-and-test.md`.
2. Add the fact **in the section for the area it belongs to** (pages / styles / script / deploy), or add a short **“Integrations”** subsection if it is cross-cutting.
3. Prefer **copy-pasteable commands** and **exact file paths** over vague instructions.
4. If something was wrong or outdated, **replace** the old line rather than appending contradictory bullets.

Keeping this file accurate saves the next agent from rediscovering the same setup.
