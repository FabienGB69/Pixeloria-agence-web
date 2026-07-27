# Pixeloria — Agence Web · CLAUDE.md

> Fichier de mémoire persistante et règles de travail pour Claude Code.
> Mis à jour à chaque session. Ne pas supprimer.

---

## 1. Projet

| Élément | Détail |
|---------|--------|
| **Nom** | Pixeloria – Agence Web |
| **Type** | Site marketing statique (HTML + CSS + Vanilla JS) |
| **Langue UI** | Français |
| **Déploiement** | Vercel |
| **Design** | Dark theme · Couleurs primaires : `#7a5cff` (violet), `#00d1ff` (cyan) |
| **Repo GitHub** | `fabiengb69/pixeloria-agence-web` |

### Structure des fichiers

```
index.html      — Page unique (hero, services, portfolio, process, contact, footer)
styles.css      — Tokens CSS, layout, responsive, animations .reveal
script.js       — Menu mobile, scroll-reveal, année footer
assets/         — Images et médias
.claude/        — Config Claude Code (skills, mémoire, settings)
autopilot/      — Config machine-readable AutoPilot marché FR (agents/kpis/permissions/thresholds/sources.yml)
autopilot-us/   — Config machine-readable AutoPilot marché US (/en/*), même structure
docs/autopilot/     — Mémoire des expériences et décisions AutoPilot FR
docs/autopilot-us/  — Mémoire des expériences et décisions AutoPilot US
```

---

## 2. Règles de branches (Git)

**Toujours travailler sur une branche feature, jamais directement sur `main`.**

| Type de changement | Préfixe de branche |
|--------------------|--------------------|
| Nouvelle fonctionnalité | `feat/` |
| Correction de bug | `fix/` |
| Design / UI | `design/` |
| SEO / contenu | `seo/` |
| Sécurité | `security/` |
| Documentation | `docs/` |
| Refactoring | `refactor/` |

**Workflow obligatoire :**
```bash
git checkout main && git pull origin main
git checkout -b feat/nom-de-la-feature
# ... développement ...
git push -u origin feat/nom-de-la-feature
# Créer une PR draft vers main
```

---

## 3. Sélection de modèle selon la tâche

| Complexité | Modèle | Exemples de tâches |
|------------|--------|--------------------|
| **Simple** | `claude-haiku-4-5` | Lire un fichier, répondre à une question, fix typo, snippet rapide |
| **Moyen** | `claude-sonnet-4-6` | Implémenter une feature, review code, refactoring, SEO basique |
| **Complexe** | `claude-opus-4-7` | Architecture, sécurité avancée, debugging complexe, stratégie globale |

> Règle de décision : commencer par Haiku. Passer à Sonnet si la tâche nécessite du raisonnement. Passer à Opus si la tâche est architecturale ou implique des décisions importantes.

---

## 4. Memory Bank (RooFlow-inspired)

Les fichiers de mémoire se trouvent dans `.claude/memory/`. Ils sont mis à jour à chaque session significative.

| Fichier | Contenu |
|---------|---------|
| `activeContext.md` | Tâche en cours, décisions récentes, problèmes ouverts |
| `progress.md` | Ce qui est fait / à faire / bloqué |
| `systemPatterns.md` | Patterns de code, conventions, décisions d'architecture |
| `techContext.md` | Stack, contraintes techniques, environnement |

**Règle :** lire `activeContext.md` et `progress.md` au début de chaque session.

---

## 5. Skills disponibles (slash commands)

| Commande | Rôle | Modèle |
|----------|------|--------|
| `/orchestrate` | **Routage 3 tiers** — Haiku / Sonnet / Opus selon complexité | Auto |
| `/autopilot` | **Pixeloria AutoPilot (marché FR)** — boucle d'optimisation continue complète (observer → apprendre), point d'entrée unique de la Pixeloria AI Team FR | Opus |
| `/autopilot-us` | **Pixeloria AutoPilot US (marché US, pages `/en/*`)** — hiérarchie séparée (CEO AI/Chief Architect/pôles marché dupliqués, agents techniques partagés avec le FR) | Opus |
| `/ceo-ai` | **CEO AI** — orchestre toute la Pixeloria AI Team FR, produit les rapports (quotidien/hebdomadaire/mensuel) | Opus |
| `/ceo-ai-us` | **CEO AI US** — équivalent `/ceo-ai` pour le marché US | Opus |
| `/cto` | **Chief Architect (Max)** — orchestre les 6 pôles FR, arbitre les conflits, décompose les tâches | Opus |
| `/cto-us` | **Chief Architect US (Max)** — équivalent `/cto` pour le marché US (pôles Growth/Product/Marketing/Business Intelligence dupliqués ; Engineering/Operations Intelligence partagés avec le FR) | Opus |
| `/growth-intelligence` | **Pôle Growth** — GEO/SEO/Local SEO/AI Citation/Competitor/Trend Guardian | Sonnet |
| `/product-intelligence` | **Pôle Product** — UX/Accessibility/Design/Mobile/CRO/Customer Journey Guardian | Sonnet |
| `/engineering-intelligence` | **Pôle Engineering** — Performance/React/NextJS/TypeScript/Architecture/Security Guardian | Sonnet |
| `/marketing-intelligence` | **Pôle Marketing** — Content/Copywriting/GEO Content/Social/Google Business/LinkedIn/X Guardian | Sonnet |
| `/business-intelligence` | **Pôle Business** — Pixeloria Business/Pricing/Sales/CRM/Funnel/Offer Guardian | Sonnet |
| `/operations-intelligence` | **Pôle Operations** — GitHub/Documentation/QA/Testing/Analytics/Roadmap Guardian | Sonnet |
| `/geo-guardian` | **GEO Guardian** (spec complète, pôle Growth) — SEO technique, GEO, AI Overview readiness, schema.org, llms.txt, E-E-A-T | Sonnet/Opus |
| `/ux-guardian` | **UX Guardian** (spec complète, pôle Product) — navigation, CTA, friction, accessibilité, parcours utilisateur | Sonnet |
| `/performance-guardian` | **Performance Guardian** (spec complète, pôle Engineering) — Core Web Vitals, bundle, Lighthouse | Sonnet |
| `/business-guardian` | **Pixeloria Business Guardian** (spec complète, pôle Business) — conversion, preuves sociales, funnel, analyse concurrentielle | Sonnet |
| `/security-guardian` | **Security Guardian** (spec complète, pôle Engineering) — XSS/CSRF/CSP, secrets, RGPD, dépendances | Opus |
| `/seo` | Audit et optimisation SEO (checklist ponctuelle — voir aussi `/geo-guardian` pour l'audit récurrent complet) | Sonnet |
| `/marketing` | Stratégie marketing et copywriting | Sonnet |
| `/ui-ux` | Review et amélioration UI/UX (voir aussi `/ux-guardian`) | Sonnet |
| `/security` | Audit de sécurité ponctuel (voir aussi `/security-guardian`) | Opus |
| `/nyx` | **Agent Nyx** — Sécurité + correction de bugs (voir aussi `/security-guardian`) | Opus |
| `/frontend-design` | Standards de design frontend | Sonnet |
| `/growth-marketer` | Persona Growth Marketer — Alex (voir aussi `/business-guardian`) | Sonnet |
| `/senior-frontend` | Persona Senior Frontend (performance & a11y) | Sonnet |
| `/senior-backend` | **Persona Léo** — Serverless, API sécurité, Notion, email | Sonnet |
| `/svg-orchestrator` | **Orchestrateur SVG** — génère les illustrations des sites démo par batch | Sonnet |
| `/push-guard` | **Boucle CI** — s'abonne aux événements PR, surveille le CI, auto-corrige les échecs connus | Haiku/Sonnet |

> **Point d'entrée recommandé pour toute tâche complexe : `/cto` ou `/orchestrate`**
> `/orchestrate` choisit automatiquement le bon tier (Haiku/Sonnet/Opus) et produit un plan avant d'agir.
> **Pour toute nouvelle feature ou changement non trivial : `/cto` lance les pôles concernés en parallèle** (pipeline détaillé dans `/cto`), fusionne les rapports, arbitre, puis crée les tâches GitHub nécessaires.
> **Rapport hebdomadaire complet (PIXELORIA WEEKLY REPORT) : `/ceo-ai rapport`** — voir section 13.
> **Après tout push : `/push-guard`** démarre la boucle de vérification automatique CI.

---

## 6. Personas agents

### Pixeloria AI Team — architecture complète

```
CEO AI                                   → /ceo-ai
   │
Chief Architect (Max)                    → /cto
   │
   ├── Pôle 1 — Growth Intelligence      → /growth-intelligence
   │     GEO Guardian · SEO Guardian · Local SEO Guardian ·
   │     AI Citation Guardian · Competitor Guardian · Trend Guardian
   │
   ├── Pôle 2 — Product Intelligence     → /product-intelligence
   │     UX Guardian · Accessibility Guardian · Design Guardian ·
   │     Mobile Guardian · CRO Guardian · Customer Journey Guardian
   │
   ├── Pôle 3 — Engineering Intelligence → /engineering-intelligence
   │     Performance Guardian · React Guardian · NextJS Guardian ·
   │     TypeScript Guardian · Architecture Guardian · Security Guardian
   │
   ├── Pôle 4 — Marketing Intelligence   → /marketing-intelligence
   │     Content Guardian · Copywriting Guardian · GEO Content Guardian ·
   │     Social Guardian · Google Business Guardian · LinkedIn Guardian · X Guardian
   │
   ├── Pôle 5 — Business Intelligence    → /business-intelligence
   │     Pixeloria Business Guardian · Pricing Guardian · Sales Guardian ·
   │     CRM Guardian · Funnel Guardian · Offer Guardian
   │
   └── Pôle 6 — Operations Intelligence  → /operations-intelligence
         GitHub Guardian · Documentation Guardian · QA Guardian ·
         Testing Guardian · Analytics Guardian · Roadmap Guardian
```

5 agents ont une spec complète et détaillée (checklist, KPIs, format de rapport) : GEO Guardian, UX Guardian, Performance Guardian, Security Guardian, Pixeloria Business Guardian. Les ~30 autres sont définis au niveau de leur pôle (mission + rôle résumé dans `.claude/commands/<pôle>.md`) — approfondir leur spec seulement quand un besoin réel se présente, jamais par anticipation.

Pipeline pour toute nouvelle feature : Chief Architect → analyse parallèle des 5 Guardians → fusion des rapports → décision/arbitrage → création des tâches GitHub → validation → commit → PR. Ordre de priorité en cas d'arbitrage : Performance > Conversion > SEO > GEO > Accessibilité > Maintenabilité. Détails complets dans `/cto`.

### CTO — Max (Chief Architect)
Rôle : décomposer les tâches complexes en sous-tâches atomiques, orchestrer les 5 Guardians, arbitrer leurs conflits, produire roadmap/backlog/priorités/sprint suivant.
Modèle : Opus (pour les décisions) + délègue en Haiku/Sonnet pour l'exécution.

### GEO Guardian
Rôle : visibilité Pixeloria dans Google Search, Google AI Overview, ChatGPT, Claude, Gemini, Perplexity, Bing Copilot. SEO technique, GEO, schema.org, llms.txt, E-E-A-T.
KPIs : SEO Score, GEO Score, AI Citation Score, Rich Result Score.
Appel : `/geo-guardian audit complet` · `/geo-guardian pre-commit` · `/geo-guardian llms.txt`

### UX Guardian
Rôle : navigation, CTA, parcours utilisateur, friction, micro-interactions, accessibilité.
KPIs : UX Score, Conversion Score, Accessibility Score, Mobile Score.
Appel : `/ux-guardian audit complet` · `/ux-guardian audit accessibilité`

### Performance Guardian
Rôle : Core Web Vitals, bundle JS/CSS, images, fonts, cache, SSR/hydration Next.js. Objectifs Lighthouse : Performance/Accessibility/Best Practices > 95, SEO = 100.
KPIs : Performance Score, CWV Score, Bundle Score.
Appel : `/performance-guardian audit complet` · `/performance-guardian audit bundle`

### Business Guardian
Rôle : penser comme un directeur commercial — preuves sociales, tarifs/offres, funnel, analyse concurrentielle. Étend Alex (Growth Marketer).
KPIs : Business Score, Trust Score, Conversion Score, Lead Score, Brand Score.
Appel : `/business-guardian audit complet` · `/business-guardian audit funnel`

### Security Guardian
Rôle : XSS/CSRF/CSP, headers, secrets, validation API, dépendances, RGPD/cookies. Étend Nyx.
KPIs : Security Score, Privacy Score, Compliance Score.
Appel : `/security-guardian audit complet` · `/security-guardian audit rgpd`

---

### Personas historiques (toujours utilisables pour un audit ponctuel ciblé)

### Sécurité & Bugs — Nyx
Rôle : auditer le code (HTML/CSS/JS/vercel.json) pour détecter vulnérabilités et bugs, puis corriger avec un rapport priorisé (P0 → P3).
Modèle : Opus pour les décisions de sécurité, Sonnet pour les corrections.
Appel : `/nyx audit complet` · `/nyx fix bugs CSS` · `/nyx rapport sécurité`

### Growth Marketer — Alex
Priorités : conversion, SEO, A/B testing, copywriting orienté résultats.
Métriques clés : taux de conversion, CTR, positionnement Google, leads générés.

### Senior Frontend Developer — Sam
Priorités : performance, accessibilité, clean code, responsive design.
Standards : Web Vitals (LCP < 2.5s, CLS < 0.1, FID < 100ms), WCAG 2.1 AA.

### Senior Backend Developer — Léo
Rôle : sécuriser et étendre les Vercel serverless functions, intégrations Notion/email.
Stack : Node.js ESM, Vercel Functions, Notion SDK, Resend (email), rate limiting.
Appel : `/senior-backend audit api` · `/senior-backend créer endpoint email` · `/senior-backend sécuriser submit-lead`

---

## 7. Économie de tokens

- Lire uniquement les fichiers nécessaires à la tâche
- Utiliser Grep/Glob avant Read pour cibler précisément
- Ne pas re-lire les fichiers déjà lus dans la session
- Préférer les edits ciblés aux rewrites complets
- Utiliser des agents spécialisés pour les recherches exploratoires

---

## 8. Lancer le site localement

```bash
python3 -m http.server 8080
# Ouvrir http://localhost:8080
```

> Note : `/_vercel/insights/script.js` retourne 404 en local — c'est normal.

---

## 9. Principes de travail (Karpathy)

Ces 4 règles s'appliquent à chaque tâche, sans exception.

### Penser avant de coder
Rendre les hypothèses explicites. Si incertain, poser la question — ne jamais décider en silence.
> "State your assumptions explicitly. If uncertain, ask."

### Simplicité d'abord
Code minimal qui résout le problème. Rien de spéculatif.
> "Minimum code that solves the problem. Nothing speculative."
Pas d'abstractions non demandées, pas de flexibilité anticipée, pas de gestion d'erreurs pour des cas improbables.

### Changements chirurgicaux
Toucher uniquement ce que la tâche requiert. Ne pas "améliorer" le code adjacent, les commentaires ou le formatage.
> "Don't 'improve' adjacent code, comments, or formatting."
Supprimer uniquement le code rendu obsolète par ses propres modifications.

### Exécution orientée objectifs
Convertir chaque tâche en objectif vérifiable avec critères de succès clairs avant de commencer.
Transformer les demandes vagues en résultats testables.

---

## 10. Conventions de code

- **HTML** : sémantique, `lang="fr"`, balises ARIA sur éléments interactifs
- **CSS** : variables CSS dans `:root`, mobile-first, pas de `!important`
- **JS** : vanilla uniquement, pas de framework, ES6+
- **Commits** : `type(scope): message` en anglais, max 72 chars
- **Commentaires** : seulement si le WHY n'est pas évident

---

## 12. Stratégie de tâches larges (Large Task Strategy)

### Règle de découpe pro-active

Avant de lancer des agents background sur des tâches avec de nombreux fichiers :
- **Maximum 2 sites / 8 fichiers par agent background** (les agents meurent après ~5 fichiers)
- Lancer les agents **séquentiellement** par batch, vérifier la completion avant de passer au suivant
- Utiliser `/svg-orchestrator` comme point d'entrée pour la génération SVG

### Scanner les placeholders SVG

```bash
for site in public/images/exemples/*/; do
  count=$(ls "$site"*.svg 2>/dev/null | wc -l)
  lines=$(wc -l "$site"*.svg 2>/dev/null | tail -1 | awk '{print $1}')
  echo "$site: $count files, ~$lines total lines"
done
```

Fichier placeholder = < 20 lignes. Régénérer si détecté.

---

## 13. Revue hebdomadaire — Pixeloria AI Team

**Chaque dimanche**, `/ceo-ai rapport` produit le PIXELORIA WEEKLY REPORT : scores (Business, SEO, GEO, Performance, Conversion, Brand, Accessibilité, Sécurité), statistiques de la semaine (pages indexées, backlinks, avis Google, réalisations, articles publiés, temps de chargement moyen), opportunités priorisées (avec impact estimé) et top 10 priorités. Le CEO AI synthétise les rapports fusionnés du Chief Architect (`/cto`), lui-même nourri par les 6 pôles.

`/geo-guardian audit complet` reste utilisable seul pour un audit SEO/GEO/AI Overview ciblé (schema.org, llms.txt, E-E-A-T, performance, accessibilité, conversion, local SEO), sans passer par toute la chaîne CEO AI → Chief Architect.

Chaque problème Critique/Important détecté par un agent devient une issue GitHub (format détaillé dans `/geo-guardian`) — jamais de doublon (vérifier via `mcp__github__search_issues` avant création).

Règle : ne jamais modifier contenu ou design sans justification mesurable. Ordre de priorité en cas d'arbitrage : Performance > Conversion > SEO > GEO > Accessibilité > Maintenabilité (arbitré par le Chief Architect, en dernier ressort par le CEO AI). Aucun chiffre du rapport ne doit être inventé — préférer "non mesuré" à une statistique hallucinée.

### Hook anti-curly-quotes (actif dans `.claude/settings.json`)

Le PostToolUse hook appelle `.claude/fix-curly-quotes.py` après chaque Write/Edit.
Corrige automatiquement les guillemets typographiques U+2018/U+2019 dans les `.ts`/`.tsx`.

---

## 11. Tokens design

```css
--bg: #080810        /* Fond page */
--surface: #111123   /* Fond cartes/sections */
--primary: #7a5cff   /* Accent principal (violet) */
--accent: #00d1ff    /* Accent secondaire (cyan) */
--radius: 18px       /* Border radius par défaut */
```
