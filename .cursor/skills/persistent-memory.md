# Skill — Mémoire persistante (obligatoire)

## Objectif
Conserver les décisions clés d'implémentation pour éviter les régressions entre sessions.

## Fichier de mémoire
- Chemin: `memory/persistent-memory.md`

## Règles d'usage
1. Lire `memory/persistent-memory.md` avant toute implémentation majeure.
2. Ajouter une entrée en fin de fichier après chaque lot livré:
   - date/commit
   - décision technique
   - impact
   - risque restant
3. Ne jamais supprimer l'historique; append-only.

## Format d'entrée
```md
## YYYY-MM-DD — sujet
- Commit: <sha>
- Décision: ...
- Impact: ...
- Risque: ...
```

## Application sur cette session
- Le plan tunnel refonte doit être tracé dans la mémoire persistante.
