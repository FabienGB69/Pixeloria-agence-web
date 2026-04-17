# Session memory — Pixeloria

## Current objective
- Build and integrate a 4-step sales funnel in `refonte.html`.
- Add teaser + CTA link from `index.html`.
- Keep static architecture (no build tool).

## User preferences captured
- Prefer French copy.
- Business value statement to keep:
  - "Création de sites web, refonte et visibilité digitale"
- Keep practical links in contact/footer (phone, mail, WhatsApp, social).

## Working agreements
- Create a dedicated branch before merging into main.
- Use subagents in parallel for implementation tasks.
- Persist memory updates in this file after major milestones.

## 2026-04-17 — Tunnel de vente + skills de session
- Branch active: `cursor/tunnel-refonte-session-4fc6`.
- Sous-agents utilisés en parallèle:
  - Agent 1: création complète de `refonte.html` (tunnel 4 étapes vanilla JS).
  - Agent 2: mise à jour `index.html` (CTA + teaser audit) et `styles.css` (`.audit-card`).
- Skills ajoutés:
  - SEO, Marketing, UI/UX, Security, Frontend-design,
  - personas `growth-marketer` / `senior-frontend`,
  - règle "branch before merge",
  - optimisation tokens,
  - orchestration CTO,
  - mémoire persistante.
- RooFlow:
  - `npm install rooflow` a échoué (404 sur postinstall).
  - Installation manuelle effectuée depuis le repo source:
    - `.roo/`
    - `.roomodes`
    - `generate_mcp_yaml.py`
  - Risque restant: l'installeur npm officiel reste instable dans cet environnement.
