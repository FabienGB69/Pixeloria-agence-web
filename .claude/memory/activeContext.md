# Active Context — Pixeloria

> Mis à jour le 2026-07-27.

## Session actuelle

**Date :** 2026-08-03
**Branche active :** `main` (PR #152 mergée)
**Dernière tâche complétée :** Audit quotidien 2026-08-03 (Max CTO / AutoPilot) — 3 corrections P2/P3 mergées (PR #152)

## Stack technique

- Next.js 14 App Router (TypeScript strict)
- CSS : `styles.css` (hérité) + `styles/globals.css` (design tokens actuels, Sober Theme — écrase l'ancien `:root` sombre)
- Déploiement : Vercel (auto sur push main)
- CI : GitHub Actions (typecheck → lint → unit-tests → build → e2e)

## Variables CSS principales (Sober Theme — styles/globals.css)

```css
--bg: #FAF8F4
--surface: #FFFFFF
--primary: #5B3FD4   /* violet */
--primary-light: #8B6FF0
--text: #1A1A18
--text-muted: #6B6660
--r-lg: 14px
```

> L'ancien thème sombre (`--bg:#080810`, `--primary:#7a5cff`, `--accent:#00d1ff`)
> vit toujours dans `styles.css` mais est écrasé par `globals.css` — ne pas s'y fier.

## Décisions d'architecture

- Server Components par défaut ; `'use client'` uniquement si interactivité (FAQ accordion, ContactForm, Header mobile, TunnelForm)
- 1 fichier = 1 section (components/sections/) ou 1 page (app/[slug]/page.tsx)
- CSS : classes utilitaires partagées dans styles.css, pas de modules CSS
- Les nouvelles pages standalone importent Header + Footer + JsonLd directement
- Catalogue d'offres FR centralisé dans `lib/pricing.ts` (Site Artisan 199 € TTC + Option Visibilité 49 €/mois) — toute vitrine, funnel, page sectorielle et label Notion doit y référer, jamais dupliquer un prix en dur (voir `tests/unit/pricing.test.ts`)
- `/en/*` repositionné marché US contractors (Phase 1-4, PR #114-121) — pricing indépendant en USD ($499/$899/$79-mo), voir `app/en/pricing`
- Échappement HTML des templates email centralisé dans `lib/html.ts` (`escapeHtml`) — ne jamais dupliquer de fonction `escape()` locale

## Problèmes ouverts

- **P1 SÉCURITÉ** : Next.js ^14.2.29 → 15.5.21 requis (7 CVEs HIGH dont SSRF WebSocket CVSS 8.6, DoS Server Components, SSRF rewrites/Server Actions) — migration breaking, nécessite tests E2E
- **P1 SÉCURITÉ** : sharp ^0.34.5 → 0.35.0 requis (GHSA-f88m-g3jw-g9cj, 4 CVE libvips) — upgrade mineur
- Décision produit en attente : entité US formelle (adresse + GBP + LocalBusiness dédié) ou rester "remote-only Organization" pour le marché US
- `docs/autopilot/experiments.md` vide — la boucle observer→apprendre AutoPilot n'a pas encore capitalisé de premier cycle
- `tests/a11y/` n'est pas dans le `testDir` Playwright (`./tests/e2e` uniquement) — ces tests ne tournent jamais en CI ; à recâbler ou déplacer
- Coverage tests unitaires limitée à `lib/**` (vitest.config.ts) — aucun test composant React
- Image OG (1200×630) et env vars Vercel (NOTION_TOKEN, NOTION_DB_ID) : à reconfirmer, dernière mention 2026-06-20

## Prochaines étapes

1. Brancher au moins une source analytics live (GSC ou Vercel Analytics API) à la chaîne AutoPilot — les rapports CEO AI marquent tout KPI trafic "non mesuré" faute de données
2. Étendre `lib/hreflang.ts` (à créer) : alternates FR/EN manquants sur ~80 pages en parité (issue #131)
3. Auditer les JSON-LD `areaServed` restants sur `/en/*` pour confirmer qu'aucune page US ne référence encore 'France' (issue #133 a corrigé 5 pages identifiées le 2026-07-27)
4. Trancher le pricing US officiel ($499/$899/$79 vs $199/$49 — actuellement $499/$899/$79 confirmé par le CEO)
