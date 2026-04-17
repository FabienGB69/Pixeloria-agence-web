# Active Context — Pixeloria

> Mis à jour à chaque session. Décrit la tâche en cours et les décisions récentes.

## Session actuelle

**Date :** 2026-04-17
**Branche :** `claude/add-skills-personas-8Lww2`
**Tâche :** Setup initial — création des skills, personas, mémoire, configuration Claude Code

## Décisions prises

- Architecture skills dans `.claude/commands/` (slash commands Claude Code)
- Memory Bank inspiré de RooFlow dans `.claude/memory/`
- CLAUDE.md comme document racine de mémoire persistante
- Sélection de modèle par complexité : Haiku / Sonnet / Opus
- Ajout du CTO orchestrateur (`/cto`) : point d'entrée pour toutes les tâches complexes, décompose en sous-tâches et assigne agents + modèles

## Problèmes ouverts

- Aucun pour l'instant — session de setup

## Prochaines étapes possibles

1. Démarrer la session de travail sur le site
2. Audit SEO avec `/seo`
3. Audit UX avec `/ui-ux`
4. Amélioration marketing avec `/marketing`

## Contexte à retenir

- Le site est entièrement statique, pas de backend
- La langue de l'UI est le français
- Le formulaire de contact ne traite pas les données (action="#")
- Vercel Analytics génère une 404 en local — c'est normal
