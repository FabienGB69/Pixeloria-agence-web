# CTO orchestration skill — Pixeloria sessions

## Objectif
Orchestrer des sessions de travail multi-agents sur ce repo statique (HTML/CSS/JS)
en minimisant les régressions et les conflits.

## Règles d'or
1. Toujours créer une branche dédiée avant tout merge ou gros chantier.
2. Découper en lots parallélisables (UI, logique JS, intégration).
3. Réserver l'intégration finale à un agent coordinateur.
4. Écrire un résumé de décision dans la mémoire persistante.

## Workflow recommandé
1. **Préparation**
   - `git fetch origin main`
   - créer une branche de session (`cursor/...-4fc6`)
2. **Plan**
   - classifier risques: simple / moyen / complexe
   - identifier tâches parallèles
3. **Exécution**
   - lancer sous-agents par domaine
   - intégrer et résoudre conflits côté coordinateur
4. **Validation**
   - smoke tests UI + interactions clés
   - revue copy/SEO
5. **Livraison**
   - commit clair
   - push
   - mise à jour PR
