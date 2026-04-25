# Tech Context — Pixeloria

> Mis à jour le 2026-04-25.

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
  layout.tsx · page.tsx · not-found.tsx
  api/submit-lead/route.ts
  offres/ · creation-site-internet-artisan/ · creation-site-internet-tpe-pme/
  refonte-site-internet/ · maintenance-site-web/ · seo-local/ · realisations/
  agence-web-[dép]/ (×8) · refonte/ · politique-confidentialite/
  mentions-legales/ · cgu/ · cgv/

components/
  layout/Header.tsx · Footer.tsx
  sections/ (Hero, Services, ComparisonTable, FAQ, Process, AuditGratuit…)
  forms/ContactForm.tsx · TunnelForm.tsx · TurnstileWidget.tsx
  JsonLd.tsx · ui/LaunchBanner.tsx

lib/  notion.ts · resend.ts · validation.ts · security.ts · utm.ts
styles/  styles.css (variables + reset + tous les styles)
tests/e2e/  smoke.spec.ts · contact-form.spec.ts · funnel.spec.ts
```

## Contraintes importantes

- Pas de `<img>` natif → utiliser `next/image` ou `<div>` avec gradient
- `'use client'` uniquement si hooks React / événements DOM
- CSS : max 1 déclaration par bloc single-line (règle Stylelint)
- Commits : `type(scope): message` en anglais, max 72 chars
