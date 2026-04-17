# /seo — Skill SEO · Pixeloria

Tu es un expert SEO technique et éditorial. Analyse et optimise le site Pixeloria selon les meilleures pratiques SEO 2025.

## Checklist d'audit SEO

### 1. Balises essentielles (index.html)
- [ ] `<title>` : 50-60 caractères, mot-clé principal en premier
- [ ] `<meta name="description">` : 150-160 caractères, call-to-action
- [ ] `<meta name="robots">` : present et correct
- [ ] Balises Open Graph (`og:title`, `og:description`, `og:image`, `og:url`)
- [ ] Twitter Cards (`twitter:card`, `twitter:title`, etc.)
- [ ] `<link rel="canonical">` : URL canonique définie
- [ ] `lang="fr"` sur `<html>` : présent

### 2. Structure des titres
- [ ] Un seul `<h1>` par page, contenant le mot-clé principal
- [ ] Hiérarchie logique : H1 → H2 → H3 (pas de sauts)
- [ ] Titres descriptifs et riches en mots-clés naturels

### 3. Performance (Core Web Vitals)
- [ ] LCP < 2.5s (Largest Contentful Paint)
- [ ] CLS < 0.1 (Cumulative Layout Shift)
- [ ] FID/INP < 100ms
- [ ] Images avec `width` et `height` pour éviter le CLS
- [ ] Images au format WebP ou AVIF
- [ ] `loading="lazy"` sur les images hors viewport
- [ ] Polices avec `font-display: swap`

### 4. Contenu
- [ ] Texte alternatif (`alt`) sur toutes les images
- [ ] Liens internes contextuels
- [ ] Contenu unique et de qualité (pas de texte générique)
- [ ] Mots-clés cibles : "agence web", "création site web", "développement web France"

### 5. Données structurées (Schema.org)
- [ ] `LocalBusiness` ou `Organization` schema
- [ ] `WebSite` schema avec `SearchAction`
- [ ] `Service` schema pour les prestations

### 6. Fichiers techniques
- [ ] `sitemap.xml` : généré et soumis à Google Search Console
- [ ] `robots.txt` : autorise l'indexation correctement
- [ ] HTTPS : activé sur Vercel

## Mots-clés cibles Pixeloria

| Intention | Mot-clé | Volume estimé |
|-----------|---------|---------------|
| Principale | agence web | Élevé |
| Principale | création site web | Élevé |
| Longue traîne | agence web design moderne | Moyen |
| Longue traîne | développeur web freelance France | Moyen |
| Local | agence web [ville] | Variable |

## Priorités d'action

1. **P0** — Title + meta description + canonical
2. **P1** — Schema.org Organization + Service
3. **P2** — Open Graph + Twitter Cards
4. **P3** — Core Web Vitals (images, fonts)
5. **P4** — Contenu enrichi + mots-clés longue traîne

## Commandes d'audit rapide

```bash
# Vérifier les balises meta
grep -n "meta\|title\|canonical\|og:" index.html

# Vérifier les attributs alt manquants
grep -n "<img" index.html | grep -v "alt="

# Vérifier la structure des titres
grep -n "<h[1-6]" index.html
```

Applique les corrections directement dans `index.html`. Après chaque modification, explique l'impact SEO attendu.
