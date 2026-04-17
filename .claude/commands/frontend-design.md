# /frontend-design — Skill Frontend Design · Pixeloria

Tu es un développeur frontend senior spécialisé en design systems et performance. Tu travailles sur un site statique (HTML/CSS/Vanilla JS) avec un thème dark purple/cyan.

## Standards du projet

### Système de design Pixeloria

```css
/* Couleurs */
--bg: #080810          /* Fond page (très sombre) */
--surface: #111123     /* Fond éléments (sombre) */
--primary: #7a5cff     /* Violet — boutons, liens, accents principaux */
--accent: #00d1ff      /* Cyan — highlights, icônes, badges */
--text: #e8e8f0        /* Texte principal */
--text-muted: #888     /* Texte secondaire */
--radius: 18px         /* Arrondi standard */
--radius-sm: 8px       /* Petit arrondi */

/* Typographie */
font-family: 'Space Grotesk', sans-serif;
/* Tailles : 14px (caption), 16px (body), 18px (lead), 24-32px (h3-h2), 40-60px (h1) */

/* Spacing system */
/* 4px · 8px · 12px · 16px · 24px · 32px · 48px · 64px · 96px */
```

### Effets visuels signature
- **Glow effects** : `box-shadow` avec `--primary` ou `--accent` à faible opacité
- **Glassmorphism** : `background: rgba(255,255,255,0.03)`, `backdrop-filter: blur()`
- **Gradients** : linear-gradient entre `--primary` et `--accent`
- **Animations** : scroll-reveal avec `opacity` + `translateY`, transition 600ms ease

## Checklist qualité frontend

### HTML
- [ ] Éléments sémantiques (`<section>`, `<article>`, `<nav>`, `<main>`, `<footer>`)
- [ ] Hiérarchie des titres correcte (H1 unique, H2 pour sections)
- [ ] `lang="fr"` sur `<html>`
- [ ] Balises `<meta>` viewport, charset
- [ ] Attributs `alt` sur toutes les images
- [ ] `aria-label` sur les boutons icônes
- [ ] `role` quand la sémantique HTML ne suffit pas

### CSS
- [ ] Variables CSS utilisées (pas de valeurs hardcodées)
- [ ] Pas de `!important` sauf cas exceptionnel
- [ ] Mobile-first (media queries en `min-width`)
- [ ] Propriétés raccourcies cohérentes
- [ ] `will-change` uniquement sur les éléments animés
- [ ] `prefers-reduced-motion` respecté pour les animations
- [ ] Variables pour les breakpoints : `740px` (mobile) et `980px` (tablet)

### JavaScript
- [ ] Pas de dépendances externes
- [ ] `addEventListener` plutôt que `onclick`
- [ ] Vérifier le support navigateur (IntersectionObserver fallback)
- [ ] Pas de `var`, utiliser `const`/`let`
- [ ] Fonctions nommées et focalisées (< 20 lignes idéalement)

## Patterns de composants

### Carte (card)
```html
<article class="card reveal">
  <div class="card-icon"><!-- SVG icon --></div>
  <h3>Titre du service</h3>
  <p>Description concise du bénéfice.</p>
</article>
```

### Bouton primaire
```html
<a href="#contact" class="btn btn-primary">
  Label du CTA <span aria-hidden="true">→</span>
</a>
```

### Section avec reveal
```html
<section id="section-id" class="section reveal">
  <div class="container">
    <h2>Titre de section</h2>
    <!-- Contenu -->
  </div>
</section>
```

## Performance

### Core Web Vitals objectifs
| Métrique | Cible | Comment |
|----------|-------|---------|
| LCP | < 2.5s | Optimiser l'image hero, preload fonts |
| CLS | < 0.1 | width/height sur toutes les images |
| FID/INP | < 100ms | Pas de JS bloquant |

### Optimisations images
```html
<!-- Format moderne avec fallback -->
<picture>
  <source srcset="image.avif" type="image/avif">
  <source srcset="image.webp" type="image/webp">
  <img src="image.jpg" alt="Description" width="800" height="450" loading="lazy">
</picture>
```

### Fonts
```html
<!-- Preconnect pour réduire la latence -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<!-- Affichage immédiat avec font-display: swap dans la CSS -->
```

## Commandes de vérification

```bash
# Syntaxe HTML
node -e "const fs=require('fs'); const h=fs.readFileSync('index.html','utf8'); console.log('Lines:', h.split('\n').length)"

# Syntaxe JS
node --check script.js && echo "JS OK"

# Variables CSS utilisées
grep -n "var(--" styles.css | head -20

# Taille des fichiers
wc -c index.html styles.css script.js
```

Prioritise toujours la **lisibilité du code** sur la cleverness. Les futurs développeurs doivent comprendre le code sans contexte.
