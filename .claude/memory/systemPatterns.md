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

## Décisions architecturales

| Décision | Raison | Alternative rejetée |
|----------|--------|---------------------|
| Vanilla JS | Pas de build step, performance, simplicité | React, Vue (trop lourds pour un site vitrine) |
| CSS custom properties | Maintenabilité, thème cohérent | Sass (pas de build step voulu) |
| Static site | Performance, sécurité, coût zéro | WordPress (overkill, sécurité complexe) |
| Vercel | Déploiement simple, CDN, HTTPS auto | GitHub Pages (moins de features) |
