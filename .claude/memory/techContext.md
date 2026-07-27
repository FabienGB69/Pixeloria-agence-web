# Tech Context — Pixeloria

> Mis à jour le 2026-07-27.

## Stack

| Composant | Technologie |
|-----------|-------------|
| Framework | Next.js 14 App Router |
| Langage | TypeScript (strict) |
| Style | CSS global (`styles.css`) — pas de Tailwind |
| Rendu | SSG (pages statiques) + SSR pour API |
| API | Route Handlers Next.js (`app/api/submit-lead/route.ts`) |
| CRM | Notion API (`lib/notion.ts`) |
| Email | Resend (`lib/resend.ts`) |
| Validation | Zod (`lib/validation.ts`) |
| Anti-spam | Honeypot + Cloudflare Turnstile + Upstash Redis (rate limit) |
| Analytics | Vercel Analytics + Speed Insights |
| Tests E2E | Playwright (smoke + contact + funnel) |
| Tests unit | Vitest (20 tests API) |
| Déploiement | Vercel (auto sur push main) |
| CI | GitHub Actions |

## Variables d'environnement requises

```env
NOTION_TOKEN=
NOTION_DB_ID=
RESEND_API_KEY=
OWNER_EMAIL=contact@pixeloria.fr
NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY=   # optionnel
CLOUDFLARE_TURNSTILE_SECRET_KEY=              # optionnel
UPSTASH_REDIS_REST_URL=                       # optionnel
UPSTASH_REDIS_REST_TOKEN=                     # optionnel
```

## Structure des dossiers clés

```
app/
  layout.tsx (root, partagé FR+EN) · page.tsx · not-found.tsx · sitemap.ts
  api/submit-lead/ · api/submit-testimonial/ · api/stripe/webhook/
  offres/ · tarifs/ · faq/ · avis/ · comment-ca-marche/ · realisations/
  creation-site-internet-artisan/ · creation-site-internet-tpe-pme/
  refonte-site-internet/ · maintenance-site-web/ · seo-local/
  agence-web-[dép]/ (×8) · refonte/ · creation/ · parrainage/
  politique-confidentialite/ · mentions-legales/ · cgu/ · cgv/
  en/  — marché US contractors (repositionné Phase 1-4, PR #114-121)
    page.tsx · pricing/ · offers/ · contractor-websites/ (+ ×5 states)
    hvac-websites/ · plumber-websites/ · roofing-websites/ · etc. (×9 secteurs)
    resources/ · case-studies/ · web-agency-[dép]/ (×8, parité FR)
    legal-notice/ · privacy-policy/ · terms-of-use/ · terms-of-sale/

components/
  layout/Header.tsx · HeaderEn.tsx · Footer.tsx · SkipLink.tsx · HtmlLangSync.tsx
  sections/ (Hero, Services, ComparisonTable, FAQ, Process, GoogleReviews…)
  forms/ContactForm.tsx · TunnelForm.tsx · CreationForm.tsx · TurnstileWidget.tsx
  consent/ (CookieBanner, ConsentProvider, AnalyticsScripts)
  JsonLd.tsx · ui/LaunchBanner.tsx

lib/
  notion.ts · resend.ts · validation.ts · security.ts · html.ts (escapeHtml)
  pricing.ts (catalogue FR unique) · industry-pages.ts · utm.ts · gtm.ts

styles.css        — styles hérités (header, nav, sections, forms, .reveal)
styles/globals.css — design tokens actuels (Sober Theme), chargé après styles.css

tests/
  e2e/   smoke · contact-form · funnel · pages · skip-link (Playwright, seul dossier dans testDir)
  unit/  validation · security · pricing · resend (Vitest, scope lib/**)
  a11y/  accessibility (axe-core) — PAS dans testDir Playwright, ne tourne pas en CI
```

## Contraintes importantes

- Pas de `<img>` natif → utiliser `next/image` ou `<div>` avec gradient
- `'use client'` uniquement si hooks React / événements DOM
- CSS : max 1 déclaration par bloc single-line (règle Stylelint)
- Commits : `type(scope): message` en anglais, max 72 chars
