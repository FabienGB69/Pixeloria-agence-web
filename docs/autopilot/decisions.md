# Pixeloria AutoPilot — Mémoire des décisions (marché FR)

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

## Ordre de priorité d'arbitrage passe de 6 à 10 niveaux

### Date
2026-07-27

### Contexte
Le Chief Architect (`/cto`) utilisait un ordre à 6 niveaux (Performance > Conversion > SEO > GEO > Accessibilité > Maintenabilité). La spécification Pixeloria AutoPilot Vision 4.0 introduit un ordre à 10 niveaux, plus fin sur la sécurité et l'intégrité des données.

### Options étudiées
- Garder les deux ordres en parallèle (risque d'incohérence entre agents)
- Remplacer entièrement l'ancien ordre par le nouveau

### Décision retenue
Remplacer l'ordre à 6 niveaux par l'ordre à 10 niveaux dans `/cto` : Sécurité > Intégrité des données > Conversion > UX > SEO > GEO > Performance > Accessibilité > Maintenabilité > Esthétique.

### Justification
Un seul ordre d'arbitrage évite les décisions contradictoires entre agents créés à des moments différents de la spécification.

### Risques acceptés
Aucun — l'ordre précédent était un sous-ensemble compatible du nouveau (Performance/Conversion/SEO/GEO/Accessibilité/Maintenabilité restent tous présents, juste réordonnés et complétés).

### Date de réévaluation
Non planifiée — à revoir si un conflit d'arbitrage réel expose une lacune dans l'ordre.

---

## Pas de duplication `.claude/commands/*.md` vers `/autopilot/prompts/`

### Date
2026-07-27

### Contexte
La spec Vision 4.0 (§35) prévoit un dossier `/autopilot/prompts/*.md` pour les prompts d'agents (ceo-ai.md, chief-architect.md, seo-guardian.md, etc.), qui se recouvre avec les fichiers `.claude/commands/*.md` déjà en place et affinés au fil de la session.

### Options étudiées
- Créer `/autopilot/prompts/` en dupliquant le contenu de `.claude/commands/*.md`
- Traiter `.claude/commands/*.md` comme la couche "prompts" déjà existante, sans dossier parallèle

### Décision retenue
Ne pas créer `/autopilot/prompts/`. `.claude/commands/*.md` reste l'unique source de vérité pour les prompts d'agents ; `/autopilot/config/*.yml` reste la seule couche de configuration machine-readable ajoutée.

### Justification
Deux copies du même prompt divergent inévitablement au premier edit oublié dans l'une des deux. Le principe "rien de spéculatif" de `CLAUDE.md` s'applique directement ici.

### Risques acceptés
Aucun changement de comportement — uniquement une décision d'organisation de fichiers.

### Date de réévaluation
Non planifiée.
