# Pixeloria AutoPilot US — Mémoire des décisions (marché US, pages /en/*)

Chaque décision stratégique ou d'arbitrage est enregistrée ici.

## Format

```markdown
## <sujet>

### Date
### Contexte
### Options étudiées
### Décision retenue
### Justification
### Risques acceptés
### Date de réévaluation
```

---

## Deux hiérarchies complètes (FR/US) sauf pour les agents techniques repo-wide

### Date
2026-07-27

### Contexte
Demande explicite : dupliquer entièrement l'architecture Pixeloria AutoPilot pour le marché US (`/en/*`). Question posée à l'utilisateur : hiérarchie unique "market-aware" vs deux hiérarchies complètes séparées — réponse : deux hiérarchies complètes séparées.

### Options étudiées
- Dupliquer strictement tous les agents, y compris Security/Performance/Architecture/Testing/GitHub Guardian
- Dupliquer les agents orientés marché (Growth/Product/Marketing/Business Intelligence) et partager les agents techniques repo-wide (Engineering/Operations Intelligence, sauf ce qui reste spécifique au marché)

### Décision retenue
Deux hiérarchies complètes séparées pour les pôles orientés marché (CEO AI US, Chief Architect US, Growth/Product/Marketing/Business Intelligence US et leurs Guardians détaillés). Security Guardian, Performance Guardian, Architecture/Code Quality/Testing Guardian et GitHub Guardian restent partagés avec le FR (`/security-guardian`, `/performance-guardian`, `/github-guardian`) — un seul repo, une seule CI, une seule CSP : les dupliquer créerait deux sources de vérité concurrentes sur des fichiers techniques partagés (`next.config.mjs`, `vercel.json`, `tests/`).

### Justification
Duplication complète sur les axes qui varient réellement selon le marché (audience, concurrents, pricing, requêtes de citation IA en anglais) ; partage sur les axes qui ne dépendent pas du marché (sécurité du code, performance du build, CI).

### Risques acceptés
Si un problème technique n'affecte que `/en/*` (ex. LCP dégradé uniquement sur une page US), il doit être signalé à la fois dans le rapport FR et le rapport US par l'agent partagé — ce lien croisé n'est pas encore automatisé, à surveiller lors des premiers audits réels.

### Date de réévaluation
À revoir après le premier rapport hebdomadaire US complet, une fois qu'on aura une vraie donnée sur la fréquence des problèmes propres à `/en/*`.
