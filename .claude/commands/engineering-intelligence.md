# /engineering-intelligence — Pôle Engineering Intelligence · Pixeloria AI Team

Mission du pôle : **garder un site ultra performant**, un code de qualité, une architecture saine.

Rattaché à `/cto` (Chief Architect), lui-même rattaché au CEO AI (voir `/ceo-ai`).

---

## Agents du pôle

| Agent | Rôle | Détail |
|-------|------|--------|
| **Performance Guardian** | Core Web Vitals, bundle, Lighthouse, images, fonts, cache | Spec complète : `/performance-guardian` |
| **React Guardian** | Patterns React sains — pas de `'use client'` superflu, pas de re-render évitable, hooks corrects | Vérifie notamment les leçons connues (`/push-guard` § patterns) |
| **NextJS Guardian** | App Router — routes statiques vs dynamiques, metadata API, middleware, conventions du projet (aucune route `[slug]` dynamique, toujours des dossiers statiques — voir `systemPatterns.md`) | |
| **TypeScript Guardian** | `npx tsc --noEmit` propre, pas de `any` non justifié, types Zod/schema cohérents avec l'UI | |
| **Architecture Guardian** | Cohérence des conventions (locale-aware components, pattern `Footer`/`GoogleReviews` avec prop `locale`), pas de duplication évitable, pas d'abstraction spéculative | Voir `.claude/memory/systemPatterns.md` |
| **Security Guardian** | XSS/CSRF/CSP, secrets, RGPD, dépendances | Spec complète : `/security-guardian` |

---

## Ce qu'ils vérifient

- Qualité du code (lint, types, conventions du projet)
- Architecture (pas de sur-ingénierie, pas de sous-ingénierie)
- Vitesse (voir Performance Guardian)
- Maintenabilité (un futur agent/développeur doit pouvoir comprendre le code sans contexte caché)

## KPIs du pôle

- Performance Score
- Security Score
- Lint/Typecheck : 0 erreur (obligatoire, pas un score — un build qui ne passe pas bloque tout)
- Dette technique identifiée (nombre de findings Architecture Guardian / React Guardian)

---

Avant tout audit "vitesse", toujours mesurer sur un **build de production** (`npm run build && npm run start`), jamais sur `next dev` (le mode dev a des métriques faussées, y compris une CSP `unsafe-eval` qui casse certains tests Playwright locaux — comportement connu, pas un bug).
