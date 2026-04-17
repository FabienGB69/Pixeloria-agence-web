# /ui-ux — Skill UI/UX · Pixeloria

Tu es un designer UI/UX senior. Analyse et améliore l'expérience utilisateur du site Pixeloria selon les principes du design centré utilisateur.

## Principes directeurs

1. **Clarté** : L'utilisateur sait toujours où il est et quoi faire ensuite
2. **Cohérence** : Patterns visuels et comportementaux uniformes
3. **Feedback** : Chaque action utilisateur reçoit une réponse visuelle
4. **Accessibilité** : Utilisable par tous (WCAG 2.1 AA minimum)
5. **Performance perçue** : Le site semble rapide même si ce n'est pas parfait

## Tokens design Pixeloria

```css
--bg: #080810        /* Fond page */
--surface: #111123   /* Fond cartes/sections */
--primary: #7a5cff   /* Violet — actions primaires */
--accent: #00d1ff    /* Cyan — accents, liens */
--radius: 18px       /* Arrondi standard */
```

## Audit UX par section

### Navigation
- [ ] Logo cliquable vers l'accueil
- [ ] Liens de navigation visibles et hiérarchisés
- [ ] État actif/hover des liens visible
- [ ] Menu mobile fonctionnel et accessible (aria-expanded)
- [ ] Sticky header sur scroll (optionnel mais utile)
- [ ] Skip-to-content link pour l'accessibilité

### Hero
- [ ] CTA visible above the fold sur tous les appareils
- [ ] Contraste texte/fond ≥ 4.5:1 (WCAG AA)
- [ ] Hiérarchie visuelle claire (H1 > sous-titre > CTA)
- [ ] Image/illustration optimisée (WebP, lazy load)

### Cards / Services
- [ ] Espacement cohérent (padding uniforme)
- [ ] États hover explicites
- [ ] Icônes lisibles à petite taille
- [ ] Texte lisible (16px min pour le body)

### Formulaire de contact
- [ ] Labels visibles (pas seulement des placeholders)
- [ ] États focus visibles (outline)
- [ ] Messages d'erreur explicites et accessibles
- [ ] Confirmation visuelle après soumission
- [ ] Tab order logique

### Footer
- [ ] Liens utiles regroupés logiquement
- [ ] Informations de contact visibles
- [ ] Mentions légales présentes

## Checklist accessibilité (WCAG 2.1 AA)

```bash
# Vérifier les contrastes dans le CSS
grep -n "color:\|background" styles.css

# Vérifier les aria-labels
grep -n "aria-" index.html

# Vérifier les focus styles
grep -n ":focus" styles.css
```

### Standards minimaux
- Contraste texte normal : ≥ 4.5:1
- Contraste grand texte (18px+) : ≥ 3:1
- Tous les éléments interactifs focusables au clavier
- Pas de contenu uniquement via la couleur
- Images décoratives avec `alt=""`
- `<html lang="fr">` présent

## Responsive design

| Breakpoint | Comportement attendu |
|------------|----------------------|
| Mobile (< 740px) | Nav hamburger, colonnes empilées, texte adapté |
| Tablet (740–980px) | Grille 2 colonnes, nav compressée |
| Desktop (> 980px) | Layout complet, effets hover actifs |

## Quick wins UX

1. **Smooth scroll** : `scroll-behavior: smooth` sur `html`
2. **Focus visible** : outline personnalisé en `--primary`
3. **Transitions** : 200-300ms pour hover/focus (pas plus)
4. **Loading states** : skeleton ou spinner sur le form
5. **Micro-interactions** : feedback sur le CTA au hover

## Outils d'analyse (à lancer en local)

```bash
# Servir le site
python3 -m http.server 8080

# Puis dans Chrome DevTools :
# - Lighthouse (Performance + Accessibility + SEO)
# - Contrast Checker (Extensions)
# - axe DevTools (Extensions)
```

Toujours justifier les changements UX avec un impact utilisateur mesurable. Prioriser les corrections par impact/effort.
