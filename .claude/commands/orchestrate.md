# /orchestrate — Stratégie 3 Tiers · Agent Orchestration

Skill d'orchestration d'agents Claude Code avec routage intelligent par niveau de complexité.

> **Principe : chaque tâche au bon modèle. Ni sur-dimensionné, ni sous-dimensionné.**

---

## Les 3 Tiers

### 🟢 Tier 1 — Haiku · Tâches rapides
**Modèle :** `claude-haiku-4-5`
**Coût :** minimal · **Vitesse :** maximale

Utiliser quand :
- Lire un fichier ou explorer le codebase
- Répondre à une question factuelle sur le projet
- Fix de typo, renommage de variable, ajout d'un commentaire
- Génération de snippet < 20 lignes
- Vérification d'un résultat (format, syntaxe, lint)
- Grep / Glob / recherche ciblée
- Résumer un fichier ou une section

Ne **pas** utiliser pour :
- Écriture de logique métier
- Décisions d'architecture
- Debugging non trivial

---

### 🟡 Tier 2 — Sonnet · Coding standard
**Modèle :** `claude-sonnet-4-6`
**Coût :** moyen · **Vitesse :** bonne

Utiliser quand :
- Implémenter une feature complète (composant, page, API route)
- Refactoring ciblé (< 5 fichiers)
- Review de code avec suggestions
- Audit SEO, audit accessibilité
- Écriture de tests (unit, integration)
- Corrections de bugs dont la cause est identifiée
- Copywriting et contenu marketing
- Mise à jour de documentation

Ne **pas** utiliser pour :
- Décisions architecturales globales
- Debugging impliquant plusieurs systèmes
- Analyse de sécurité avancée

---

### 🔴 Tier 3 — Opus · Reasoning complexe / Architecture
**Modèle :** `claude-opus-4-7`
**Coût :** élevé · **Vitesse :** plus lente

Utiliser quand :
- Conception d'architecture (nouvelle structure, choix technologique)
- Debugging difficile (cause inconnue, comportement intermittent)
- Sécurité avancée (audit, vecteurs d'attaque, CSP)
- Décision stratégique avec compromis
- Analyse de performance systémique
- Refactoring impactant > 5 fichiers
- Orchestration de tâches interdépendantes complexes

Ne **pas** utiliser pour :
- Tâches répétitives ou mécaniques
- Lectures/recherches dans le codebase
- Modifications mineures

---

## Arbre de décision

```
NOUVELLE TÂCHE
│
├── Est-ce une lecture, recherche ou question simple ?
│   └── OUI → 🟢 Haiku
│
├── Est-ce une implémentation < 5 fichiers avec périmètre clair ?
│   └── OUI → 🟡 Sonnet
│
├── Est-ce décomposable en sous-tâches indépendantes ?
│   └── OUI → Décomposer, router chaque sous-tâche individuellement
│
├── Y a-t-il une décision d'architecture ou un risque élevé ?
│   └── OUI → 🔴 Opus
│
└── Incertain ? → Commencer par 🟢 Haiku pour explorer,
                  puis escalader au besoin
```

---

## Protocole d'escalade

Si une tâche démarrée sur un tier se révèle plus complexe :

1. **Haiku → Sonnet** : la tâche demande de la logique métier ou > 20 lignes
2. **Sonnet → Opus** : la tâche implique une décision d'architecture ou une cause inconnue
3. **Ne jamais descendre** un tier en cours de tâche — finir ou redémarrer

---

## Patterns d'orchestration parallèle

### Pattern Fan-out (audit)
```
Tâche principale → décomposer en N sous-tâches indépendantes
├── Sous-tâche A (Haiku) ─┐
├── Sous-tâche B (Sonnet) ─┤→ Collecte résultats → Sonnet synthèse
└── Sous-tâche C (Haiku) ─┘
```

### Pattern Pipeline (feature)
```
Opus (architecture) → Sonnet (implémentation) → Haiku (vérification) → Sonnet (review)
```

### Pattern Spike (debugging)
```
Haiku (lecture logs/code) → Opus (diagnostic) → Sonnet (fix) → Haiku (validation)
```

---

## Règles d'économie de tokens

1. **Toujours Haiku pour explorer** avant de confier à Sonnet/Opus
2. **Cibler les fichiers** : Grep/Glob avant Read, offset+limit avant lecture complète
3. **1 agent = 1 responsabilité** : ne pas cumuler exploration + implémentation + review
4. **Résumer avant de transmettre** : ne pas passer un dump brut d'un tier à l'autre
5. **Maximum 3 fichiers par sous-tâche** : au-delà, redécouper

---

## Format de plan obligatoire

Avant toute exécution multi-tâches, produire ce tableau :

```
| # | Tâche | Tier | Modèle | Fichier(s) | Dépend de |
|---|-------|------|--------|------------|-----------|
| 1 | Lire contexte actuel | 🟢 1 | Haiku | activeContext.md | — |
| 2 | Implémenter feature X | 🟡 2 | Sonnet | components/X.tsx | #1 |
| 3 | Valider cohérence CSS | 🟢 1 | Haiku | styles.css | #2 |
| 4 | Review qualité | 🟡 2 | Sonnet | components/X.tsx | #2 |
```

---

## Exemples concrets

### ❌ Anti-pattern — Over-engineering
```
Demande : "Corriger une typo dans le footer"
Mauvais : Opus pour analyser l'impact sur l'architecture du footer
Bon     : Haiku directement → Edit → done
```

### ❌ Anti-pattern — Under-engineering
```
Demande : "Pourquoi le déploiement plante en prod mais pas en local ?"
Mauvais : Haiku pour diagnostiquer un bug de build Next.js complexe
Bon     : Haiku lire les logs → Opus pour le diagnostic → Sonnet pour le fix
```

### ✅ Pattern optimal — Feature standard
```
Demande : "Ajouter une page /blog avec liste d'articles"
Plan :
  #1 Haiku  → lire app/layout.tsx + sitemap.ts (contexte)
  #2 Sonnet → créer app/blog/page.tsx
  #3 Sonnet → mettre à jour sitemap.ts
  #4 Haiku  → vérifier lint + cohérence des imports
```

### ✅ Pattern optimal — Debugging difficile
```
Demande : "Les emails de confirmation ne partent plus depuis hier"
Plan :
  #1 Haiku  → lire app/api/submit-lead/route.ts + lib/resend.ts
  #2 Haiku  → chercher logs d'erreur récents
  #3 Opus   → diagnostiquer la cause racine
  #4 Sonnet → appliquer le fix
  #5 Haiku  → valider la correction
```
