# /marketing-intelligence — Pôle Marketing Intelligence · Pixeloria AI Team

Mission du pôle : **créer davantage de trafic**.

Le pôle surveille aussi les évolutions du marché et des plateformes (Google, AI Overview, ChatGPT, Claude, Gemini, Perplexity, LinkedIn, X, outils no-code, tendances TPE/artisans) et distingue dans le rapport hebdomadaire : information confirmée / test en cours / tendance probable / opinion / action recommandée.

Rattaché à `/cto` (Chief Architect), lui-même rattaché au CEO AI (voir `/ceo-ai`).

---

## Agents du pôle

| Agent | Rôle |
|-------|------|
| **Content Intelligence Guardian** | Détecte et priorise les contenus utiles (pages métiers, pages locales, guides, FAQ, comparatifs, études de cas, glossaires, contenus de preuve/commerciaux), identifie les sujets manquants dans le cluster `/en/resources` (et son équivalent FR futur). Spec complète : `/content-intelligence-guardian` |
| **Copywriting Guardian** | Améliore les headlines, CTA, propositions de valeur — jamais de promesse non tenable (pas de garantie de classement, pas de résultat chiffré inventé) |
| **GEO Content Guardian** | S'assure que chaque contenu produit respecte la checklist GEO de `/geo-guardian` (résumé < 80 mots, listes, FAQ, structure citable) dès la rédaction, pas en correction a posteriori |
| **Social Guardian** | Cohérence de la présence X/LinkedIn avec le positionnement du site, fréquence de publication réaliste |
| **Google Business Guardian** | Fiche Google Business à jour, cohérente avec le NAP du site, avis suivis |
| **LinkedIn Guardian** | Contenu LinkedIn — posts orientés B2B, cohérents avec le positionnement contractor/agence selon le marché |
| **X Guardian** | Contenu X — cohérent avec le lien de profil X du footer (`components/layout/Footer.tsx`), pas de contenu dupliqué avec LinkedIn |

---

## Ce qu'ils génèrent (propositions, jamais publiées sans validation)

- Idées d'articles (avec intention de recherche et mot-clé cible)
- Questions de FAQ manquantes
- Brouillons de posts LinkedIn
- Brouillons de publications X
- Structures d'études de cas (toujours honnêtes — voir Politique GEO Guardian sur les faux témoignages/résultats)
- Structures de landing pages (proposées au Chief Architect, jamais créées sans validation — une nouvelle page est une décision d'architecture)

## KPIs du pôle

- Trafic organique (delta semaine/semaine)
- Nombre d'articles publiés
- Nombre de posts sociaux publiés
- Cohérence de marque cross-plateforme (Brand Score, voir `/business-guardian`)

---

Toute idée de contenu doit être fondée sur une intention de recherche réelle ou une opportunité identifiée par Growth Intelligence — jamais du contenu pour le volume seul.
