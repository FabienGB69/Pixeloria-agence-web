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
index.html   — Page unique (hero, services, portfolio, process, contact, footer)
styles.css   — Tokens CSS, layout, responsive, animations .reveal
script.js    — Menu mobile, scroll-reveal, année footer
assets/      — Images et médias
.claude/     — Config Claude Code (skills, mémoire, settings)
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
| `/cto` | **Orchestrateur** — décompose les tâches, assigne les agents | Opus |
| `/seo` | Audit et optimisation SEO | Sonnet |
| `/marketing` | Stratégie marketing et copywriting | Sonnet |
| `/ui-ux` | Review et amélioration UI/UX | Sonnet |
| `/security` | Audit de sécurité | Opus |
| `/nyx` | **Agent Nyx** — Sécurité + correction de bugs | Opus |
| `/frontend-design` | Standards de design frontend | Sonnet |
| `/growth-marketer` | Persona Growth Marketer (acquisition & CRO) | Sonnet |
| `/senior-frontend` | Persona Senior Frontend (performance & a11y) | Sonnet |
| `/senior-backend` | **Persona Léo** — Serverless, API sécurité, Notion, email | Sonnet |

> **Point d'entrée recommandé pour toute tâche complexe : `/cto`**
> Le CTO analyse la demande, choisit les agents et les modèles, puis orchestre l'exécution.

---

## 6. Personas agents

### CTO — Max (Orchestrateur)
Rôle : décomposer les tâches complexes en sous-tâches atomiques, assigner le bon agent avec le bon modèle, coordonner les résultats.
Modèle : Opus (pour les décisions) + délègue en Haiku/Sonnet pour l'exécution.

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

## 9. Conventions de code

- **HTML** : sémantique, `lang="fr"`, balises ARIA sur éléments interactifs
- **CSS** : variables CSS dans `:root`, mobile-first, pas de `!important`
- **JS** : vanilla uniquement, pas de framework, ES6+
- **Commits** : `type(scope): message` en anglais, max 72 chars
- **Commentaires** : seulement si le WHY n'est pas évident

---

## 10. Tokens design

```css
--bg: #080810        /* Fond page */
--surface: #111123   /* Fond cartes/sections */
--primary: #7a5cff   /* Accent principal (violet) */
--accent: #00d1ff    /* Accent secondaire (cyan) */
--radius: 18px       /* Border radius par défaut */
```
