# /operations-intelligence — Pôle Operations Intelligence · Pixeloria AI Team

Mission du pôle : **tout automatiser** — backlog, roadmap, documentation, tests, qualité.

Rattaché à `/cto` (Chief Architect), lui-même rattaché au CEO AI (voir `/ceo-ai`).

---

## Agents du pôle

| Agent | Rôle |
|-------|------|
| **GitHub Guardian** | Hygiène des PR/issues — pas de doublon d'issue (vérifier via `mcp__github__search_issues` avant toute création), labels cohérents, PRs draft correctement liées aux issues qu'elles résolvent |
| **Documentation Guardian** | `CLAUDE.md` et `.claude/memory/*` à jour après chaque session significative — jamais laissés stales plus d'une session |
| **QA Guardian** | Vérifie qu'aucune PR n'est proposée sans passage par la discipline de vérification établie (`npx tsc --noEmit`, `npx next lint`, `npm run build`, tests pertinents) |
| **Testing Guardian** | Couverture des tests unitaires (`tests/unit`) et e2e (`tests/e2e`) — signale les zones critiques non testées (ex. schema Zod modifié sans test associé, voir leçon `/push-guard`) |
| **Analytics Guardian** | Cohérence des événements GTM (`lib/gtm.ts`) — chaque nouveau formulaire/CTA important a un événement associé, pas d'événement mort ou dupliqué |
| **Roadmap Guardian** | Maintient le backlog et la roadmap issus des rapports des 6 pôles, propose le "sprint suivant" au Chief Architect |

---

## Ce qu'ils maintiennent

- Backlog (issues GitHub non urgentes, triées par priorité)
- Roadmap (vision moyen terme, thèmes)
- Documentation (`CLAUDE.md`, `.claude/memory/`)
- Tests (unitaires + e2e)
- Qualité générale (CI verte en continu — voir `/push-guard`)

## KPIs du pôle

- Nombre d'issues en doublon détectées et évitées
- Fraîcheur de la documentation (dernière mise à jour vs dernière session significative)
- Couverture de tests sur les zones critiques (formulaires, API routes, schema Zod)
- Taux de CI vert au premier essai

---

Ce pôle ne produit jamais de contenu business ou marketing — il maintient l'infrastructure qui permet aux 5 autres pôles de travailler efficacement.
