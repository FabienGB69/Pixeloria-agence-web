# Pixeloria AutoPilot — Mémoire des expériences (marché FR)

Chaque expérimentation lancée par AutoPilot est enregistrée ici avant d'être considérée comme acquise. À consulter avant de proposer une action similaire à une déjà testée.

## Format

```markdown
## <titre de l'expérience>

### Date
### Hypothèse
### Modification
### KPI
### État initial
### Résultat attendu
### Résultat réel
### Durée
### Conclusion
### Décision
- conserver / modifier / annuler / retester
### Enseignement
```

---

## Migration Next.js 14.2.35 → 15.5.25 (résolution advisories HIGH runtime)

### Date
2026-09-02 (migration) · 2026-09-06 (correctif CI) · 2026-09-07 (clôture)

### Hypothèse
Migrer `next` de 14.2.35 vers 15.5.25 élimine les 5 advisories HIGH runtime App Router / Server Actions (SSRF, DoS, cache poisoning, XSS, divulgation d'endpoints) remontées par `npm audit` depuis 2026-08-12, sans casser le build prod, la CSP, les formulaires funnel ni le middleware i18n.

### Modification
- `package.json` : `next ^14.2.35 → ^15.5.25` ; `eslint-config-next` déjà `^15.5.25`.
- `app/creation/page.tsx`, `app/refonte/page.tsx`, `components/layout/Header.tsx` : liens internes `<a href="/">` → `next/link` (règle `@next/next/no-html-link-for-pages` promue en erreur par Next 15).

### KPI
`npm audit` (nombre d'advisories HIGH runtime `next`) ; `npm run ci` (typecheck + lint + build) ; suite E2E Playwright + a11y.

### État initial
`next@14.2.35` : 6 vulnérabilités (1 low, 5 HIGH `next` + transitives `postcss`/`glob`). Issue #191.

### Résultat attendu
0 HIGH runtime `next`, CI verte, E2E/a11y verts.

### Résultat réel
- 5 advisories HIGH runtime `next` **éliminées** ; `glob` (command injection via `eslint-config-next`) éliminée.
- `npm audit` : **2 vulnérabilités restantes** (1 moderate + 1 high) = `postcss` transitif via `next` (path traversal sourceMappingURL, **build-time**, non exploitable par un visiteur du site déployé) ; seul correctif = `next@16` (breaking). Justifié comme risque résiduel faible, non bloquant.
- `npm ci` / typecheck / lint / stylelint / 58 tests unitaires / `next build` : **verts**. First Load JS partagé 87,4 kB → 103 kB (baseline Next 15).
- **Incident intermédiaire** : le merge de PR #194 (`b9c9132`) a laissé `package.json` en `^14.2.35` alors que le lockfile portait `15.5.25` → désync → `npm ci` échoue → `main` rouge 2026-09-02 → 09-06 (issue #195, corrigée par PR #196).

### Durée
Migration livrée en 1 jour ; régression CI non détectée 4 jours (surveillance post-merge à renforcer).

### Conclusion
Migration réussie et effective en prod. Objectif sécurité de #191 atteint. Enseignement process : un merge qui touche `package.json` doit être validé par un `npm ci` **required** avant intégration (sinon un désync package.json↔lock casse `main` sans bloquer le merge).

### Décision
- **conserver** (Next 15.5.25 comme cible). Résiduel `postcss`/`next@16` à retester lorsque `next@16` sera stable (nouvelle décision produit, breaking).

### Enseignement
Rendre `npm ci` (ou un check d'intégrité du lockfile) **required** sur `main` pour empêcher toute récidive de désync package.json↔lockfile.
