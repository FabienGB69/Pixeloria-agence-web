# /feature-test — Boucle de test fonctionnel · Pixeloria

Tu es l'agent de vérification fonctionnelle. Après chaque nouvelle feature, tu BOUCLES sur toutes les fonctionnalités du site et tu produis un rapport de couverture.

---

## Déclenchement

```
/feature-test                    → run complet (toutes les suites)
/feature-test [nom-feature]      → ciblé + régression complète
/feature-test --blind-spots      → rapport d'angles morts uniquement
```

---

## Phase 0 — Démarrer le serveur de dev

```bash
# Vérifier si déjà actif
curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/ 2>/dev/null || true

# Si pas actif, lancer en background
npm run dev &
sleep 5
# Trouver le port (Next.js utilise 3001 si 3000 est pris)
PORT=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/ 2>/dev/null | grep -q "200" && echo 3000 || echo 3001)
export BASE_URL="http://localhost:${PORT}"
```

Vérifier que le serveur est `up` avant de continuer.

---

## Phase 1 — Boucle de test : suite complète

Lancer dans cet ordre (chaque suite est indépendante) :

```bash
# 1. Smoke tests (homepage, nav, footer, 404)
npx playwright test tests/e2e/smoke.spec.ts --project=chromium

# 2. Formulaire contact
npx playwright test tests/e2e/contact-form.spec.ts --project=chromium

# 3. Tunnel de vente /refonte
npx playwright test tests/e2e/funnel.spec.ts --project=chromium

# 4. Boucle pages + features (toutes les pages + témoignage + OG + SEO + a11y)
npx playwright test tests/e2e/pages.spec.ts --project=chromium

# Ou en une seule commande :
npx playwright test --project=chromium 2>&1 | tee /tmp/feature-test-results.txt
```

---

## Phase 2 — Test ciblé sur la nouvelle feature

Si `[nom-feature]` est fourni, ajouter un test ciblé :

| Type de feature | Test à ajouter |
|----------------|----------------|
| Nouvelle page `/xxx` | `expectPageOk(page, '/xxx', /pattern H1/)` dans `pages.spec.ts` |
| Nouveau formulaire | Test submit success + erreur API + champs requis |
| Nouveau composant UI | Render visible + états hover/focus |
| Nouvelle API route | Test 200 (mock) + test 500 → error message |
| SEO (meta, schema) | Vérifier title/meta dans `pages.spec.ts` SEO section |

### Template test rapide (à insérer dans `pages.spec.ts`) :

```typescript
test.describe('[NOM-FEATURE]', () => {
  test('rendu de base OK', async ({ page }) => {
    await page.goto('/nouvelle-page');
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  });

  test('action principale fonctionne', async ({ page }) => {
    // describe le golden path de la feature
  });

  test('gestion d\'erreur visible', async ({ page }) => {
    // mock une erreur et vérifie le feedback user
  });
});
```

---

## Phase 3 — Rapport de couverture

Format de sortie obligatoire :

```
## Rapport feature-test — [DATE]

### Feature testée
[nom ou "run complet"]

### Résultats

| Suite | Tests | Passed | Failed | Skipped |
|-------|-------|--------|--------|---------|
| smoke.spec.ts | N | N | N | N |
| contact-form.spec.ts | N | N | N | N |
| funnel.spec.ts | N | N | N | N |
| pages.spec.ts | N | N | N | N |
| **TOTAL** | N | N | N | N |

### ✅ Features couvertes
- Homepage Hero + CTA
- Formulaire contact (succès, erreur, validation)
- Tunnel /refonte (4 étapes, retour, offre préselect)
- Toutes les pages principales (200 + H1)
- Formulaire témoignage (succès + erreur API)
- OG image (200 + content-type)
- SEO meta tags sur pages core
- Footer (année courante, liens légaux)
- Navigation (URLs, mobile menu)
- Accessibilité basique (main, alt, lang)

### ❌ Échecs
[liste des tests qui ont échoué + error message]

### ⚠️ Angles morts identifiés
[voir section ci-dessous]
```

---

## Angles morts permanents (à surveiller)

Ces scénarios ne sont PAS couverts par les tests automatisés. Les évaluer manuellement à chaque feature touchant leur périmètre.

### 🔴 Critiques (impact conversion direct)

1. **API avec vraies credentials** — Tous les tests API sont mockés. Un échec Notion ou Resend en production n'est pas détecté avant que le client reçoive un 500.
   → Mitigation : monitorer les logs Vercel après chaque deploy.

2. **Rate limiting Upstash** — Le happy path (utilisateur réellement bloqué après N requêtes) n'est pas testé. Seul le fail-open (Redis indisponible) est couvert.
   → Mitigation : test manuel `curl -X POST /api/submit-lead` × 10.

3. **Double soumission de formulaire** — Le bouton n'est pas testé pour sa désactivation pendant le loading. Un double-click peut déclencher deux appels API.
   → Mitigation : vérifier `disabled` sur le bouton après click dans les tests contact-form.

### 🟠 Élevés (UX/accessibilité)

4. **Responsive layout** — Seul le menu hamburger est testé. Les breakpoints (740px, 980px), les grilles CSS, les tailles de police sur mobile ne sont pas vérifiés.
   → Mitigation : Lighthouse mobile dans les DevTools après chaque feature UI.

5. **Cross-browser** — Uniquement Chromium. Firefox et WebKit (Safari) peuvent avoir des comportements différents sur les CSS custom properties, les grilles, les animations.
   → Mitigation : ajouter `--project=firefox` dans CI périodiquement.

6. **`/en` version anglaise** — Aucun test E2E sur la version anglaise hormis le rendu basique du H1.
   → Mitigation : dupliquer les tests contact-form pour `/en` quand la version EN est complète.

### 🟡 Moyens (SEO/performance)

7. **Schema.org JSON-LD** — La présence et la validité du schema structuré (`Organization`, `FAQPage`, etc.) ne sont pas vérifiées.
   → Mitigation : `page.locator('script[type="application/ld+json"]')` + `JSON.parse`.

8. **Core Web Vitals** — LCP, CLS, FID ne sont pas mesurés dans les tests.
   → Mitigation : Lighthouse CI dans le pipeline GitHub Actions.

9. **Images sans dimension** — Next.js Image force width/height mais les images CSS background ne sont pas vérifiées.
   → Mitigation : audit Lighthouse "Does not have explicit width and height".

10. **Pages SEO locales** — `/agence-web-rhone`, `/agence-web-isere`, etc. ne sont pas testées.
    → Mitigation : ajouter un loop dans `pages.spec.ts` sur le tableau des pages locales.

### 🔵 Faible impact mais risque de régression silencieuse

11. **LaunchBanner** — Render, contenu, fermeture (bouton X ou après délai) non testés.

12. **`/exemples/` démos artisans** — Pages de démonstration non couvertes.

13. **Navigation : liens active state** — Aucun test ne vérifie que la page courante reçoit la classe CSS `active` sur le lien nav.

14. **Footer — liens légaux cliquables** — Seule la présence est vérifiée, pas le fait qu'ils mènent vers des pages existantes (200).

---

## Règle d'or

> **Chaque nouvelle feature = 1 nouveau bloc `test.describe` dans `pages.spec.ts`.**
> Le bloc doit couvrir au minimum : rendu OK + golden path + gestion d'erreur.

Si la feature touche une API : toujours tester le cas erreur 500 et vérifier que le message d'erreur de l'API est surfacé à l'utilisateur (pas seulement un message générique).
