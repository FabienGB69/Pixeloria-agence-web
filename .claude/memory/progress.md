# Progress — Pixeloria

> Suivi de l'avancement du projet. Mis à jour le 2026-04-25.

## Fait ✅

### Infrastructure
- [x] Repo GitHub configuré, Vercel connecté
- [x] Pre-push hook : typecheck + lint + build avant chaque push
- [x] CI : typecheck → lint → unit-tests → build → e2e (Playwright + Vitest)

### Next.js 14 App Router (migration complète)
- [x] Phase 0 — Bootstrap : create-next-app, tsconfig, next.config.mjs, vercel.json
- [x] Phase 1 — API & sécurité : LeadSchema Zod, lib/notion.ts, lib/resend.ts, route.ts, middleware.ts, lib/security.ts (honeypot + Turnstile + Upstash Redis)
- [x] Phase 2 — Pages : Header, Footer, toutes les sections home, TunnelForm 4 étapes, not-found
- [x] Phase 3 — SEO : Metadata API, JSON-LD ProfessionalService, sitemap, robots.txt, redirects 301, Vercel Analytics, UTM, conversion events
- [x] Phase 3 — SEO local : 8 pages départements (Drôme, Ardèche, Isère, Rhône, Ain, Loire, Savoie, Haute-Savoie)
- [x] Phase 4 — Qualité : Playwright TS (smoke + contact + funnel), Vitest 20 tests, TypeScript strict ✓

### Repositionnement éditorial (2026-04-25)
- [x] Hero : titre TPE/PME/artisans, sous-titre, phrase de réassurance, 3 micro-bénéfices, CTAs "Demander un audit gratuit" / "Voir les offres"
- [x] Offres : Site Essentiel 490€ TTC · Site Sérénité 89€/mois · Site Croissance 159€/mois (badge "Le plus complet")
- [x] Sections ajoutées : WhyPixeloria, SiteWorks, ForWho, AuditGratuit, Intro, LaunchBanner, ComparisonTable
- [x] FAQ 7 questions (dont "pas de garantie position 1 Google")
- [x] Process 4 étapes
- [x] ContactForm : Nom, Email, Téléphone (optionnel), Type de besoin, Message
- [x] Footer mis à jour, JSON-LD ProfessionalService
- [x] /politique-confidentialite créée
- [x] Tests E2E mis à jour (H1, nav sections, champs form)

### Pages SEO créées (PR #38, mergée)
- [x] /offres — page complète offres + ComparisonTable + FAQ
- [x] /creation-site-internet-artisan — landing artisans (12 types)
- [x] /refonte-site-internet — landing refonte (8 signaux)

### Pages SEO supplémentaires (en cours — feat/seo-pages-supplementaires)
- [x] /creation-site-internet-tpe-pme
- [x] /maintenance-site-web
- [x] /seo-local
- [x] /realisations
- [x] sitemap.ts mis à jour (toutes les URLs dont /politique-confidentialite)

### Légal
- [x] /mentions-legales, /cgu, /cgv — GOMES FABIEN, SIREN 798 262 416
- [x] /politique-confidentialite — RGPD complet

### Restructuration homepage + pages dédiées (PR #94, mergée)
- [x] Homepage réduite à Hero + Contact uniquement
- [x] `/tarifs` — Services + ComparisonTable + ForWho + AuditGratuit
- [x] `/faq` — FAQ component
- [x] `/avis` — Testimonials + lien vers /temoignage
- [x] `/comment-ca-marche` — Process + SiteWorks + WhyPixeloria + Marketing
- [x] Navigation Header mise à jour (vraies URLs, plus d'ancres)
- [x] OG image dynamique `app/opengraph-image.tsx` (Edge runtime)

### Fixes API + TestimonialForm (PR #96, mergée 2026-06-20)
- [x] `app/api/submit-testimonial/route.ts` — fail open sur erreurs Redis
- [x] `app/api/submit-lead/route.ts` — idem pour cohérence
- [x] `TestimonialForm.tsx` — surfacer le message d'erreur de l'API

### Tests E2E — feature-test skill (PR #96, mergée 2026-06-20)
- [x] `tests/e2e/pages.spec.ts` — 43 tests (toutes les pages, formulaires, nav, SEO, a11y)
- [x] `.claude/commands/feature-test.md` — skill `/feature-test` + 14 angles morts documentés

### Version anglaise — 6 nouvelles pages (PR #97, mergée 2026-06-20)
- [x] `/en/pricing` — packages €199/€49, tableau comparatif, audit gratuit CTA
- [x] `/en/how-it-works` — process 4 étapes, timeline Jour 1-4, ContactFormEn
- [x] `/en/reviews` — 6 avis clients, CTA vers /en/testimonial, ContactFormEn
- [x] `/en/faq` — 12 questions, accordion, ContactFormEn
- [x] `/en/about` — English-speaking clients, 6 compétences, 3 valeurs, ContactFormEn
- [x] `/en/testimonial` + `TestimonialFormEn.tsx` — formulaire en anglais (mapping champs EN→API FR)
- [x] `HeaderEn.tsx` — nav mise à jour (ancres → vraies URLs de page)
- [x] `sitemap.ts` — 6 nouvelles URLs EN ajoutées
- [x] Vercel DEPLOYED ✅

## En attente / À faire 🔲

- [ ] `tests/e2e/pages.spec.ts` — ajouter les 6 pages EN dans `allPages` 200-check + content tests
- [ ] Env vars Vercel (`NOTION_TOKEN`, `NOTION_DB_ID`) — à configurer pour le formulaire de contact prod
