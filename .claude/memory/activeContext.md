# Active Context — Pixeloria

> Mis à jour le 2026-08-12.

## Session actuelle

**Date :** 2026-08-12
**Branche active :** `claude/sleepy-wozniak-imypkq`
**Dernière tâche complétée :** clôture du backlog PIXELORIA WEEKLY REPORT 2026-08-09 sur 3 PR de reprise (#167, #168, #169, toutes mergées) — 15/18 issues fermées, 4 restent ouvertes bloquées par des décisions produit (voir "Problèmes ouverts")

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
- **Décision produit bloquante (#161)** : entité US formelle (adresse + GBP + LocalBusiness dédié) ou rester "remote-only Organization" pour le marché US. Le fix technique de surface (retirer le tel FR des 4 pages contractors US réellement ciblées marché US) est fait — les 16 pages géo `/en/web-agency-*` sont volontairement inchangées (ce sont des pages FR traduites, pas du contenu US).
- **Décision produit bloquante (#155)** : faut-il un vrai programme de parrainage en USD pour le catalogue contractors US ($499/$899/$79) ? Le programme actuel (`/parrainage`, `/en/parrainage`) est et reste EUR-only (Stripe payment links FR) — le fix déjà livré n'a corrigé que le vocabulaire et la mention "inc. VAT" trompeuse, pas la devise.
- **Décision produit bloquante (#162)** : `ContactForm`/`ContactFormEn` ont de vraies divergences (champ "Company" EN-only, tél requis FR/optionnel EN, a11y dynamique manquante en EN, comportement différent sur échec réseau — FR simule un faux succès en dev, EN affiche une vraie erreur). Fusion complète impossible sans trancher ces points. `TestimonialForm`/`TestimonialFormEn` déjà fusionnés (étaient structurellement identiques).
- **Chantier technique à part entière (#150)** : CSP nonces. `middleware.ts` ne tourne aujourd'hui que sur `/` et `/api/*` (volontairement, pour rester < 50ms) — passer en nonces demande de l'étendre à toutes les routes + ajouter `nonce={}` à 50+ scripts JSON-LD inline. Recommandation : déployer d'abord en `Content-Security-Policy-Report-Only` pour valider sans risque (GTM/Turnstile/Vercel Analytics) avant bascule en mode enforcé.
- `docs/autopilot/experiments.md` vide — la boucle observer→apprendre AutoPilot n'a pas encore capitalisé de premier cycle
- Coverage tests unitaires limitée à `lib/**` + `tests/unit/breadcrumb.test.ts` (vitest.config.ts) — aucun test composant React
- Image OG (1200×630) et env vars Vercel (NOTION_TOKEN, NOTION_DB_ID) : à reconfirmer, dernière mention 2026-06-20

## Prochaines étapes

1. Décisions produit en attente (voir "Problèmes ouverts") — nécessitent un arbitrage humain, aucun fix technique de plus n'est possible sans elles pour #155/#161/#162
2. #150 — CSP nonces, à déployer d'abord en `Content-Security-Policy-Report-Only` sur un vrai déploiement avant de coder les nonces
3. Brancher au moins une source analytics live (GSC ou Vercel Analytics API) à la chaîne AutoPilot — les rapports CEO AI marquent tout KPI trafic "non mesuré" faute de données
4. Next.js 14 → 15.5.21 (7 CVEs HIGH) — migration breaking à planifier avec tests E2E complets avant/après
