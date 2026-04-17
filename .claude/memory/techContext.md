# Tech Context — Pixeloria

> Stack technique, contraintes et environnement. Mettre à jour si la stack change.

## Stack

| Couche | Technologie | Version |
|--------|-------------|---------|
| Markup | HTML5 | — |
| Style | CSS3 (Custom Properties, Grid, Flexbox) | — |
| Script | Vanilla JavaScript | ES6+ |
| Polices | Space Grotesk via Google Fonts CDN | — |
| Analytics | Vercel Web Analytics | — |
| Hébergement | Vercel | — |
| Versioning | Git + GitHub | — |

## Aucun outil de build

- Pas de `package.json`, `node_modules`, `webpack`, `vite`, `babel`
- Pas de préprocesseur CSS (pas de Sass, Less, PostCSS)
- Pas de TypeScript
- Édition directe des fichiers sources → déploiement direct

## Environnement de développement local

```bash
# Servir le site
python3 -m http.server 8080
# ou
npx serve .

# URL : http://localhost:8080
```

## Contraintes techniques

1. **Pas de backend** → formulaire de contact ne traite pas les soumissions (à connecter à Formspree/Netlify Forms)
2. **Vercel Analytics** → script 404 en local (attendu, inoffensif)
3. **Google Fonts** → requiert une connexion internet
4. **ES6+** → pas de support IE (acceptable en 2026)
5. **IntersectionObserver** → fallback requis (vieux navigateurs)

## Fichiers clés

```
index.html    — Point d'entrée unique, toute la structure
styles.css    — Tous les styles (pas de split par composant)
script.js     — Tous les comportements JS
assets/       — Images et médias statiques
vercel.json   — Config Vercel (à créer : headers, redirects)
```

## Variables d'environnement

Aucune variable d'environnement requise.
Si ajout futur d'un backend : documenter ici.

## Déploiement

- **Auto-deploy** : chaque push sur `main` déclenche un déploiement Vercel
- **Preview deploys** : chaque PR génère une URL de preview
- **URL de production** : à définir (domaine Vercel ou custom)

## Performance actuelle (estimée)

| Métrique | Objectif | Statut |
|----------|----------|--------|
| Lighthouse Performance | ≥ 90 | À mesurer |
| Lighthouse Accessibilité | ≥ 95 | À mesurer |
| LCP | < 2.5s | À mesurer |
| CLS | < 0.1 | À mesurer |
