# Active Context — Pixeloria

> Mis à jour à chaque session. Décrit la tâche en cours et les décisions récentes.

## Session actuelle

**Date :** 2026-04-17
**Branche active :** `feat/sales-funnel-refonte`
**Tâche en pause :** Création du tunnel de vente `refonte.html` (vanilla JS)

## Décisions prises

- Architecture skills dans `.claude/commands/` (slash commands Claude Code)
- Memory Bank inspiré de RooFlow dans `.claude/memory/`
- CLAUDE.md comme document racine de mémoire persistante
- Sélection de modèle par complexité : Haiku / Sonnet / Opus
- Ajout du CTO orchestrateur (`/cto`) : point d'entrée pour toutes les tâches complexes, décompose en sous-tâches et assigne agents + modèles

## Problèmes ouverts

- Aucun pour l'instant — session de setup

## Prochaines étapes (reprendre ici)

1. **URGENT — `refonte.html`** : créer le tunnel de vente vanilla JS complet (React → HTML/CSS/JS)
   - 4 steps : Diagnostic → Objectifs/ROI → Formule → Contact + écran succès
   - Données : PAIN_POINTS, OBJECTIVES, REFONTE_OFFERS déjà définies dans le plan
   - Fixer le bug ROI du React original (set non passé en prop)
2. Commit + push `feat/sales-funnel-refonte`
3. Batch 2 parallèle : SEO audit · vercel.json · Formspree · images · 404.html
4. Commit final + PR → validation utilisateur

## Contexte à retenir

- Le site est entièrement statique, pas de backend
- La langue de l'UI est le français
- Le formulaire de contact ne traite pas les données (action="#")
- Vercel Analytics génère une 404 en local — c'est normal
