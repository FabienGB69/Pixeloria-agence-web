# Active Context — Pixeloria

> Mis à jour le 2026-08-12.

## Session actuelle

**Date :** 2026-08-12
**Branche active :** `claude/sleepy-wozniak-imypkq`
**Dernière tâche complétée :** clôture du backlog PIXELORIA WEEKLY REPORT 2026-08-09 (PR #167-169, mergées), puis 3 PR de suivi sur les 4 issues restantes (#170 memory, #171 bugs ContactForm/EN sans fusion, #173 Turnstile submit-testimonial, toutes mergées) + sharp 0.34→0.35.3 et `npm audit fix` (nanoid/brace-expansion/glob/js-yaml/fast-uri). 4 issues restent ouvertes, toutes bloquées par des décisions produit (voir "Problèmes ouverts").

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

- **P1 SÉCURITÉ** : Next.js ^14.2.29 → 15/16.x requis (`npm audit` liste ~21 CVEs HIGH sur la plage `next` installée : SSRF WebSocket, DoS Server Components, SSRF rewrites/Server Actions, cache poisoning, XSS CSP nonces App Router, etc. — voir `npm audit`) — migration majeure breaking (14→15 ou 16), nécessite tests E2E complets avant/après. Entraîne aussi la mise à jour de `postcss` (vulnérable en dépendance de `next`) et `eslint-config-next`/`@next/eslint-plugin-next`.
- ~~sharp ^0.34.5 → 0.35.0~~ **Résolu 2026-08-12** : bump vers `^0.35.3` (dernière, corrige GHSA-f88m-g3jw-g9cj/libvips), `npm audit fix` a aussi réglé nanoid/brace-expansion/glob/js-yaml/fast-uri (transitifs, dans les ranges déjà déclarés). Build + e2e (113/113) + a11y (6/6) revérifiés après coup, aucune régression.
- **Décision produit bloquante (#161)** : entité US formelle (adresse + GBP + LocalBusiness dédié) ou rester "remote-only Organization" pour le marché US. Le fix technique de surface (retirer le tel FR des 4 pages contractors US réellement ciblées marché US) est fait — les 16 pages géo `/en/web-agency-*` sont volontairement inchangées (ce sont des pages FR traduites, pas du contenu US).
- **Décision produit bloquante (#155)** : faut-il un vrai programme de parrainage en USD pour le catalogue contractors US ($499/$899/$79) ? Le programme actuel (`/parrainage`, `/en/parrainage`) est et reste EUR-only (Stripe payment links FR) — le fix déjà livré n'a corrigé que le vocabulaire et la mention "inc. VAT" trompeuse, pas la devise.
- **Décision produit bloquante (#162)** : `ContactForm`/`ContactFormEn` gardent de vraies divergences fonctionnelles (champ "Company" EN-only, tél requis FR/optionnel EN) qui bloquent la fusion complète. Les deux bugs objectifs qui n'attendaient pas de décision sont corrigés (2026-08-12, PR #171) : FR ne simule plus un faux succès sur échec réseau (affichait un succès mensonger), EN a maintenant la même validation `aria-invalid` dynamique au blur/input que FR. `TestimonialForm`/`TestimonialFormEn` déjà fusionnés (étaient structurellement identiques) et protégés par Turnstile côté serveur depuis PR #173 (`submit-testimonial` n'avait aucune vérification bot, ni client ni serveur — trouvé en marge de #162, jamais filé comme issue séparée).
- **Chantier technique à part entière (#150)** : CSP nonces. Tentative concrète 2026-08-12 : le pattern nonce standard (middleware + `headers()` par page) force TOUTE route qui l'utilise en rendu dynamique (SSR à la requête) en Next.js App Router — or `npm run build` confirme que ~90 routes du site sont aujourd'hui statiques (`○`). Implémenter les nonces tel quel aurait été une régression Performance majeure et silencieuse. Chemin corrigé (documenté sur l'issue) : allowlist CSP par hash SHA-256 calculé au build (contenu JSON-LD déterministe, compatible rendu statique) — nécessite un script de build dédié, toujours non implémenté. Ne pas retenter l'approche nonce sans revalider ce point.
- `docs/autopilot/experiments.md` vide — la boucle observer→apprendre AutoPilot n'a pas encore capitalisé de premier cycle
- Coverage tests unitaires limitée à `lib/**` + `tests/unit/breadcrumb.test.ts` (vitest.config.ts) — aucun test composant React
- Image OG (1200×630) et env vars Vercel (NOTION_TOKEN, NOTION_DB_ID) : à reconfirmer, dernière mention 2026-06-20

## Prochaines étapes

1. Décisions produit en attente (voir "Problèmes ouverts") — nécessitent un arbitrage humain, aucun fix technique de plus n'est possible sans elles pour #155/#161/#162
2. #150 — script de build pour hash SHA-256 des blocs JSON-LD (pas de nonces — voir "Problèmes ouverts" pour pourquoi), puis déploiement en `Content-Security-Policy-Report-Only` avant bascule enforcée
3. Brancher au moins une source analytics live (GSC ou Vercel Analytics API) à la chaîne AutoPilot — les rapports CEO AI marquent tout KPI trafic "non mesuré" faute de données
4. Next.js 14 → 15/16.x — migration majeure breaking à planifier avec tests E2E complets avant/après (seule dépendance HIGH encore non résolue après le passage sharp/npm audit fix du 2026-08-12)
