# System Patterns — Pixeloria

> Patterns de code, conventions et décisions d'architecture. Ne pas modifier sans raison valable.

## Conventions HTML

### Structure des sections
```html
<section id="section-name" class="section reveal">
  <div class="container">
    <h2>Titre</h2>
    <!-- contenu -->
  </div>
</section>
```

### Cartes
```html
<article class="card reveal">
  <!-- icône SVG ou emoji -->
  <h3>Titre</h3>
  <p>Description</p>
</article>
```

### Boutons CTA
```html
<a href="#contact" class="btn btn-primary">Label →</a>
```

## Conventions CSS

### Variables obligatoires (`:root`)
Toujours utiliser les variables plutôt que les valeurs hardcodées.

### Classe `.reveal` + `.is-visible`
Le système d'animation scroll utilise ces deux classes.
`.reveal` : état initial (caché), `.is-visible` : état final (visible).

### Breakpoints
- Mobile : `max-width: 740px`
- Tablet : `max-width: 980px`

## Conventions JavaScript

### Vérification d'existence avant manipulation DOM
```javascript
const el = document.querySelector('.selector');
if (el) { /* manipulation */ }
```

### Événements — toujours `addEventListener`
Jamais d'attributs inline (`onclick=""`).

### IntersectionObserver — toujours avec fallback
```javascript
if ('IntersectionObserver' in window) {
  // observer
} else {
  // rendre visible directement
}
```

## Conventions Git

### Messages de commit
```
type(scope): description courte en anglais

Types : feat, fix, design, seo, security, docs, refactor, chore
Scopes : html, css, js, assets, config
```

### Branches
Toujours depuis main, toujours en feature branch.
Format : `type/description-courte`

### Multi-agent push — règle anti-divergence
Quand ≥2 agents poussent sur la même branche, les pushs concurrents échouent ("Updates were rejected").
- **Fix court-terme** : `git pull --rebase origin <branch>` avant de repousser
- **Fix structurel** : `.githooks/pre-push` auto-fetch + auto-rebase (commit `5a1fa71`)
- **Règle** : toujours appeler `/push-guard` après un push pour surveiller les conflicts CI

### Post-push : workflow obligatoire
```
git push -u origin <branch>
→ /push-guard  (subscribe PR activity + surveiller CI)
```

## Leçons apprises (bugs résolus)

### CSS — sélecteur `~` et `display:contents`
Un wrapper `<span style={{display:'contents'}}>` en React **casse le sélecteur CSS `~`**.
Le flatten visuel `display:contents` ne flatten pas le DOM pour les sélecteurs CSS.
→ Toujours utiliser `<Fragment key={val}>` quand des siblings doivent être ciblés par `input ~ label`.

### Zod — contrat API vs contrat UI
Les champs "requis côté UI" restent **optionnels dans le schéma Zod** (`z.string().max(n).default('')`).
- L'UI enforce le `required` via HTML.
- L'API accepte des soumissions partielles (outils tiers, bots de test, etc.).
- Rendre un champ `min(1)` dans Zod casse les tests unitaires qui valident des payloads email-only.
- Avant tout changement de schema : vérifier `tests/unit/validation.test.ts`.

### HTML injection — toujours escaper dans les emails
Dans les templates email Resend, utiliser une fonction `escape()` sur **tous** les champs utilisateur :
```ts
const escape = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
```
Ne jamais interpoler `${rawUserInput}` directement dans du HTML.

## Décisions architecturales

| Décision | Raison | Alternative rejetée |
|----------|--------|---------------------|
| Vanilla JS | Pas de build step, performance, simplicité | React, Vue (trop lourds pour un site vitrine) |
| CSS custom properties | Maintenabilité, thème cohérent | Sass (pas de build step voulu) |
| Static site | Performance, sécurité, coût zéro | WordPress (overkill, sécurité complexe) |
| Vercel | Déploiement simple, CDN, HTTPS auto | GitHub Pages (moins de features) |
