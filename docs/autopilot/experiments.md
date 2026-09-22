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

---

## Migration Next.js 15.5.25 → 16.3.5 (clôture du HIGH `postcss` résiduel)

### Date
2026-09-22

### Hypothèse
Migrer `next` de 15.5.25 vers 16.3.5 élimine l'unique advisory HIGH restante à `npm audit` (`postcss <=8.5.22` embarqué dans la chaîne de build de Next — GHSA-qx2v-qp2m-jg93 + path traversal sourceMappingURL), sans casser le build prod, la CSP, les formulaires funnel ni le middleware i18n, et en conservant React 18 (Next 16 accepte toujours `react ^18.2.0`).

### Modification
- `package.json` : `next ^15.5.25 → ^16.3.5`. **React conservé en `^18.3.1`** (pas de migration React 19 forcée).
- `package.json` (script `lint`) : `next lint` → `eslint . --ext .js,.jsx,.ts,.tsx`. La commande `next lint` est **supprimée** dans Next 16. `eslint-config-next` conservé en `^15.5.25` et `eslint` en `^8` : passer à `eslint-config-next@16` imposerait ESLint 9 + flat config (migration orthogonale au correctif sécurité, volontairement hors périmètre).
- `.eslintignore` (nouveau) : exclut les artefacts générés (`.next/`, `playwright-report/`, `test-results/`, `blob-report/`, `next-env.d.ts`) que `eslint .` scanne mais que `next lint` ignorait par construction.
- `tsconfig.json` / `next-env.d.ts` : régénérés automatiquement par `next build` (Next 16 : `jsx: preserve → react-jsx`, ajout `.next/dev/types`, référence `root-params.d.ts`). Non édités à la main.

### KPI
`npm audit` (advisories HIGH) ; `npm run ci` (typecheck + lint + build) ; `lint:css` ; 58 tests unitaires ; smoke runtime (routes 200 + headers CSP + skip-link) ; E2E Playwright + a11y (CI).

### État initial
`next@15.5.25` + overrides #201 : `npm audit` = 5 vulnérabilités (4 moderate + 1 HIGH `postcss` build-time). Issue #202.

### Résultat attendu
0 HIGH restante, CI verte, aucun régression runtime.

### Résultat réel
- **HIGH `postcss` éliminée.** `npm audit` : **5 → 3 vulnérabilités**, toutes **moderate** et **dev/test-only** (trio `vitest`/`@vitest/mocker`/`@vitest/coverage-v8` ; patch in-range `4.1.11` toujours bloqué par le bug arborist npm 10.9 `edgesOut` null, cf. #199). **0 HIGH, 0 advisory exposée au visiteur en runtime.**
- `npm run ci` (typecheck + eslint + build) : **vert**. `lint:css` : vert. **58/58** tests unitaires : verts. `next build` : 89 pages statiques générées, exit 0.
- **Smoke runtime** (build prod + `next start`, Chromium pré-installé) : `/`, `/tarifs`, `/faq`, `/parrainage`, `/en`, `/en/parrainage`, `/realisations` → **200** ; skip-link WCAG 2.4.1 = premier focusable (`#main-content`) ; en-têtes sécurité + CSP complète servis à l'identique ; `<main>` + `<h1>` FR rendus.
- E2E/a11y **non exécutés localement** : mismatch de révision du binaire Playwright dans le sandbox (installé 1194, `@playwright/test@1.59.1` attend 1217) — limitation sandbox connue (déjà rencontrée à la migration Next 15, PR #194), non liée au code. CI les exécute avec ses propres navigateurs.

### Durée
Migration livrée en 1 jour.

### Conclusion
Migration réussie. Objectif sécurité de #202 atteint : plus aucune advisory HIGH ; le résiduel est limité à l'outillage de test (dev-only), non corrigeable tant que le bug arborist npm persiste. Next 16 conserve la compat React 18 → migration à faible risque.

### Décision
- **conserver** (Next 16.3.5 comme cible, React 18.3.1). Trio `vitest` à repasser quand l'outillage npm permettra le patch in-range. Passage à `eslint-config-next@16` / ESLint 9 flat config à traiter séparément si besoin (non requis par la sécurité).

### Enseignement
Une migration majeure Next peut supprimer des commandes CLI (`next lint`) : vérifier les `scripts` npm qui en dépendent. Élargir de `next lint` à `eslint .` impose d'ajouter un `.eslintignore` pour ne pas linter les artefacts générés (sinon faux positifs sur du JS minifié dans `playwright-report/`).
