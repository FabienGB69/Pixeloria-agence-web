# Progress — Pixeloria

> Suivi de l'avancement du projet. Mis à jour le 2026-04-18.

## Fait ✅

### Infrastructure
- [x] Repo GitHub configuré, Vercel connecté
- [x] Pre-push hook : typecheck + lint + build avant chaque push
- [x] CI : typecheck → lint → unit-tests → build → e2e

### Next.js 14 App Router
- [x] Phase 0 — Bootstrap : create-next-app, tsconfig, next.config.mjs, vercel.json épuré
- [x] Phase 1 — API & sécurité : LeadSchema Zod, lib/notion.ts, lib/resend.ts, route.ts, middleware.ts, lib/security.ts (honeypot + Turnstile + Upstash Redis)
- [x] Phase 2 — Pages : Header, Footer, toutes les sections, TunnelForm 4 étapes + ROI, not-found
- [x] Phase 3 — SEO : Metadata API, JSON-LD, sitemap, robots.txt, redirects 301, Vercel Analytics, UTM, conversion events track()
- [x] Phase 3 — SEO local : 8 pages (Drôme, Ardèche, Isère, Rhône, Ain, Loire, Savoie, Haute-Savoie)
- [x] Phase 4 — Qualité : Playwright TS (smoke + contact + funnel + a11y), Vitest 20 tests, TypeScript strict ✓

### Design
- [x] Thème sobre : fond crème #FAF8F4, violet #5B3FD4, Playfair Display + Plus Jakarta Sans

### Légal
- [x] Mentions légales, CGV, CGU — GOMES FABIEN, SIREN 798 262 416, 61C Av. Gabriel Péri 26600 Tain-l'Hermitage

## PR ouverte 🔄

- PR #27 : branch claude/add-skills-personas-8Lww2 → main (draft)

## Plan de rollback (Phase 4.6)

### Stratégie de bascule sans downtime

1. **Déploiement sur branch feature** → Vercel Preview URL distincte
2. **Validation Preview** : tester manuellement la Preview URL avant de merger
3. **Merge vers main** → Vercel déploie automatiquement en production
4. **Si régression critique :** Vercel Dashboard → Deployments → "Promote to Production" sur le déploiement précédent (rollback instantané < 30s)
5. **En dernier recours :** `git revert HEAD && git push origin main`

### Tags de versions stables

```bash
# Tagger avant chaque merge important
git tag v2.0.0-stable && git push origin v2.0.0-stable
```

### Commandes Vercel CLI de rollback

```bash
vercel rollback [deployment-url]  # Rollback vers un déploiement précédent
vercel ls                         # Lister les déploiements récents
```
