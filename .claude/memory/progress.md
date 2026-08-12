# Progress — Pixeloria

> Suivi de l'avancement du projet. Mis à jour le 2026-08-12.

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

### Marché US — repositionnement `/en/*` (Phase 1-4, PR #114-121, mergées)
- [x] Phase 1 — repositionnement `/en` en site contractors US (pricing USD, FreeAuditForm, roofing-websites)
- [x] Phase 2 — hubs contractor, case studies, resources guides
- [x] Phase 3 — state landing pages TX/FL/NC/GA/CO
- [x] Phase 4 — 8 pages secteur (HVAC, plumber, electrician, gutter, landscaping, painting, remodeling, general contractor)
- [x] GTM conversion events sur tous les formulaires (creation/refonte/funnel)

### Pixeloria AI Team — CEO AI / Chief Architect / 6 pôles / AutoPilot Vision 4.0 (PR #122-129, mergées)
- [x] CEO AI, Chief Architect, 6 pôles (Growth/Product/Engineering/Marketing/Business/Operations)
- [x] 5 Guardians spec complète (GEO, UX, Performance, Business, Security) + ~15 Guardians promus FR+US
- [x] Config machine-readable `autopilot/` + `autopilot-us/` (agents/kpis/permissions/thresholds/sources.yml)
- [x] Premier PIXELORIA WEEKLY REPORT (2026-07-27) — audit 5 pôles, 9 issues P0 créées (#130-138)

### Corrections P0 issues du rapport hebdomadaire (2026-07-27)
- [x] #130 — Catalogue d'offres aligné (TunnelForm, industry-pages, Notion labels → `lib/pricing.ts` unique)
- [x] #132 — `/en/testimonial` ajouté au sitemap
- [x] #133 — `areaServed` corrigé en 'United States' sur 5 pages `/en/*` legacy
- [x] #134 — Escape HTML dans `buildConfirmationHtml`, factorisé dans `lib/html.ts`
- [x] #135 — Skip link sitewide (WCAG 2.4.1) via `components/layout/SkipLink.tsx`
- [x] #138 — README, CLAUDE.md, memory bank rafraîchis

### Audit quotidien 2026-08-03 (PR #152, mergée)
- [x] HSTS `preload` ajouté (`next.config.mjs`)
- [x] `.env.example` : liens Stripe live anonymisés
- [x] `llms.txt` : section programme de parrainage ajoutée (GEO)
- [x] `/en/testimonial` confirmée noindex (robots:{index:false}) — correctement absente du sitemap

### PIXELORIA WEEKLY REPORT 2026-08-09 — 6 pôles + résolution backlog
- [x] Audit complet 6 pôles (Growth/Product/Engineering/Marketing/Business/Operations), 11 nouvelles issues créées (#154-#164), toutes labellisées (taxonomie priority/dimension/market/agent/type)
- [x] #147 — Webhook Stripe : offerId aligné sur `lib/pricing.ts` (fallback safe au lieu de l'alias mort `site-vitrine`)
- [x] #154 — Parrainage FR : vocabulaire aligné (`Site Artisan`/`Option Visibilité`), rewards dérivées via `lib/referral-rewards.ts` (source unique)
- [x] #155 — `/en/parrainage` : vocabulaire aligné, mention "inc. VAT" retirée (reste EUR — c'est la devise réelle Stripe)
- [x] #156 — Taxonomie labels GitHub créée et appliquée aux 18 issues ouvertes
- [x] #157 — `app/en/page.tsx` repassé en Server Component (`TrackedAction` isole les 5 handlers GTM)
- [x] #158 — 14 pages `/en/*` : self-hreflang via `hreflangSelf()` (nouveau helper `lib/hreflang.ts`)
- [x] #159 — 4 études de cas FR : `alternates.canonical` ajouté
- [x] #160 — `<h1>` ajouté sur `/tarifs`, `/comment-ca-marche`, `/faq`
- [x] #161 — Téléphone FR retiré des 4 pages réellement ciblées marché US (les 16 pages géo `/en/web-agency-*` sont en fait des pages FR traduites — non modifiées, à raison)
- [x] #163 — `TunnelForm` : defaults `visiteurs`/`leads` à 0 au lieu de 5000/2
- [x] #164 — Pipeline testimonials Notion → site : `getPublishedTestimonials()` + `Testimonials.tsx` en Server Component async, fallback si Notion indisponible
- [x] #148 — Fermée : `LocalBusiness` JSON-LD déjà présent sur les 16 pages géo (audit initial obsolète), `sameAs` ajouté en bonus
- [x] #149 — `lib/breadcrumb.ts` créé, `BreadcrumbList` JSON-LD sur les 5 pages états + `/en/resources` (index + 3 articles) + `/en/contractor-websites` + `/realisations` (index + 4 études) + `/en/case-studies`. Test unitaire `tests/unit/breadcrumb.test.ts` ajouté.

### Clôture du backlog 2026-08-09 (PR #167, #168, #169, mergées 2026-08-12)
- [x] #145 — Fermée : Home FR complète (`Services` + `GoogleReviews` + `WhyPixeloria` + `Process` + `Testimonials` + `AuditGratuit` entre Hero et Contact). Bug a11y préexistant découvert et corrigé au passage (`Testimonials.tsx` : `aria-label` sans `role` sur les étoiles de notation).
- [x] #146 — Fermée : `lib/pricing-us.ts` câblé sur les ~25 fichiers `app/en/**` restants (sectorielles, states, offers, faq, local-seo, resources). Plus aucun `$499`/`$899`/`$79` en dur dans `app/en/**`.
- [x] #162 — Partielle, fermée avec état documenté : `TestimonialForm`/`TestimonialFormEn` fusionnés en un seul composant piloté par `locale` (`components/forms/TestimonialForm.tsx`, `TestimonialFormEn.tsx` supprimé). `useTurnstileToken.ts` extrait et partagé par `ContactForm`, `ContactFormEn`, `TunnelForm`. `ContactForm`/`ContactFormEn` **non fusionnés** — vraies divergences fonctionnelles (champ Company EN-only, tél requis FR/optionnel EN, a11y dynamique manquante EN, comportement différent sur échec réseau) nécessitant une décision produit.
- [ ] #150 — CSP nonces — réévalué avec chemin technique précis documenté (extension `middleware.ts` à toutes les routes + `nonce={}` sur 50+ scripts JSON-LD inline), toujours volontairement non traité : besoin d'un déploiement `Report-Only` pour valider sans risque.
- [ ] #155 — Partielle, reste ouverte : vocabulaire parrainage EN aligné, mention "inc. VAT" retirée. Reste EUR (c'est la devise réelle Stripe) — décision produit en attente sur un vrai programme parrainage USD.
- [ ] #161 — Partielle, reste ouverte : téléphone FR retiré des 4 pages réellement ciblées marché US. Décision produit en attente sur l'entité US formelle.

## En attente / À faire 🔲

- [ ] **P1 SÉCURITÉ** — Next.js ^14.2.29 → 15.5.21 (7 CVEs HIGH, dont SSRF CVSS 8.6)
- [ ] **P1 SÉCURITÉ** — sharp ^0.34.5 → 0.35.0 (GHSA-f88m-g3jw-g9cj, 4 CVE libvips)
- [ ] #150 — CSP nonces au lieu de `unsafe-inline` (déployer en `Report-Only` d'abord)
- [ ] #162 (suite) — Fusionner `ContactForm`/`ContactFormEn`, conditionné aux décisions produit ci-dessous
- [ ] Décision produit : entité US formelle (LocalBusiness/GBP) ou "remote-only Organization" (bloque #161)
- [ ] Décision produit : programme de parrainage en USD pour le catalogue contractors US, ou rester EUR-only (bloque #155)
- [ ] Décision produit : téléphone requis ou optionnel sur ContactForm FR, champ "Company" à ajouter en FR ? (bloque #162)
- [ ] Brancher une source analytics live (GSC/Vercel Analytics) à la chaîne AutoPilot
- [ ] Env vars Vercel (`NOTION_TOKEN`, `NOTION_DB_ID`) — à reconfirmer en prod
