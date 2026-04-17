# /security — Skill Sécurité · Pixeloria

Tu es un expert en sécurité web. Audite et sécurise le site Pixeloria contre les vulnérabilités courantes, en tenant compte de sa nature statique (HTML/CSS/JS).

## Contexte du projet

Site **statique** déployé sur Vercel :
- Pas de backend, pas de base de données
- Pas d'authentification
- Formulaire de contact (front-end only, pas de traitement serveur ici)
- Analytics Vercel (script tiers)

## Checklist de sécurité

### Headers HTTP (configurables via `vercel.json`)
- [ ] `Content-Security-Policy` (CSP) — limiter les sources de scripts/styles
- [ ] `X-Frame-Options: DENY` — protection contre le clickjacking
- [ ] `X-Content-Type-Options: nosniff` — éviter le MIME sniffing
- [ ] `Referrer-Policy: strict-origin-when-cross-origin`
- [ ] `Permissions-Policy` — désactiver les APIs non utilisées
- [ ] `Strict-Transport-Security` (HSTS) — forcer HTTPS

### Contenu inline (index.html)
- [ ] Pas de `javascript:` dans les `href`
- [ ] Pas d'`eval()` dans le JavaScript
- [ ] Pas de `innerHTML` avec des données utilisateur
- [ ] Scripts tiers depuis CDNs de confiance uniquement
- [ ] `integrity` + `crossorigin` sur les scripts externes (SRI)

### Formulaire de contact
- [ ] Validation HTML5 native (`required`, `type="email"`)
- [ ] Pas d'envoi vers un endpoint non sécurisé
- [ ] Protection CSRF si un backend est ajouté plus tard
- [ ] Rate limiting côté serveur si backend ajouté

### Scripts tiers
- [ ] Google Fonts : chargé depuis `fonts.googleapis.com` (acceptable)
- [ ] Vercel Analytics : script officiel uniquement
- [ ] Aucun tracker tiers non déclaré

### Dépendances
- [ ] Pas de `package.json` → pas de vulnérabilités npm pour l'instant
- [ ] Si des dépendances sont ajoutées : `npm audit` obligatoire

## Configuration Vercel recommandée

Créer `vercel.json` avec les headers de sécurité :

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" },
        { "key": "Permissions-Policy", "value": "camera=(), microphone=(), geolocation=()" },
        {
          "key": "Content-Security-Policy",
          "value": "default-src 'self'; script-src 'self' 'unsafe-inline' https://va.vercel-scripts.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data:; connect-src 'self' https://vitals.vercel-insights.com;"
        }
      ]
    }
  ]
}
```

## Subresource Integrity (SRI)

Pour les scripts Google Fonts ou autres CDNs, ajouter `integrity` :

```html
<!-- Exemple avec SRI -->
<link rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Space+Grotesk"
      integrity="sha384-[HASH]"
      crossorigin="anonymous">
```

Générer le hash : https://www.srihash.org/

## Audit rapide

```bash
# Chercher des pratiques dangereuses dans le JS
grep -n "eval\|innerHTML\|document.write\|javascript:" script.js index.html

# Vérifier les scripts externes
grep -n "<script" index.html

# Vérifier les liens externes
grep -n 'href="http' index.html
```

## Priorités

1. **P0** — Vérifier aucun `innerHTML` avec données non sanitisées
2. **P1** — Ajouter `vercel.json` avec headers sécurité
3. **P2** — SRI sur scripts tiers
4. **P3** — CSP stricte (une fois le site stable)

## Conformité RGPD

- [ ] Politique de confidentialité accessible depuis le footer
- [ ] Cookies analytics documentés (Vercel Web Analytics = sans cookies, OK)
- [ ] Formulaire de contact avec mention RGPD (données utilisées pour ?)
- [ ] Consentement si des cookies sont ajoutés

Rapporter les findings avec : **Severity** (Critical/High/Medium/Low) + **Description** + **Remediation**.
