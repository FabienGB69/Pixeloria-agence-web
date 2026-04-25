# Active Context — Pixeloria

> Mis à jour le 2026-04-25.

## Session actuelle

**Date :** 2026-04-25
**Branche active :** `feat/seo-pages-supplementaires`
**Tâche en cours :** Ajout 4 pages SEO supplémentaires + refonte section AuditGratuit

## Stack technique

- Next.js 14 App Router (TypeScript)
- CSS global `styles.css` (pas de Tailwind) — variables CSS dans `:root`
- Déploiement : Vercel (auto sur push main)
- CI : GitHub Actions (typecheck → lint → unit-tests → build → e2e)

## Variables CSS principales

```css
--bg: #080810
--surface: #111123
--primary: #7a5cff   /* violet */
--accent: #00d1ff    /* cyan */
--radius: 18px
--text: #f0f0f8
--text-muted: #9898b8
--text-subtle: #5a5a7a
--border: rgba(255,255,255,0.08)
--primary-faint: rgba(122,92,255,0.08)
```

## Décisions d'architecture

- Server Components par défaut ; `'use client'` uniquement si interactivité (FAQ accordion, ContactForm, Header mobile, TunnelForm)
- 1 fichier = 1 section (components/sections/) ou 1 page (app/[slug]/page.tsx)
- CSS : classes utilitaires partagées dans styles.css, pas de modules CSS
- Les nouvelles pages standalone importent Header + Footer + JsonLd directement

## Problèmes ouverts

- Image OG (1200×630) : utilisateur en cours de création
- Env vars Vercel (NOTION_TOKEN, NOTION_DB_ID) : utilisateur en cours d'ajout

## Prochaines étapes

1. ~~Build check + commit + push `feat/seo-pages-supplementaires`~~  (en cours)
2. Refonte section AuditGratuit (demande utilisateur reçue)
3. Vérifier formulaire contact en prod une fois env vars Vercel actives
