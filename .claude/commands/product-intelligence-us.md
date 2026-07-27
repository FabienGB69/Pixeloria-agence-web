# /product-intelligence-us — Pôle Product Intelligence US · Pixeloria AI Team

Mission du pôle : **construire le meilleur site possible pour le visiteur US** (pages `/en/*`, audience contractor/home-service).

Instance marché US de `/product-intelligence` (voir ce fichier pour l'équivalent FR). Rattaché à `/cto-us` (Chief Architect US), lui-même rattaché au CEO AI US (voir `/ceo-ai-us`).

---

## Agents du pôle

| Agent | Rôle | Détail |
|-------|------|--------|
| **UX Guardian US** | Navigation, CTA, parcours, friction, micro-interactions — adapté aux attentes d'un visiteur US (contractor, propriétaire de petite entreprise home-service) | Spec complète : `/ux-guardian-us` |
| **Accessibility Guardian** | WCAG 2.1 AA — contrastes, ARIA, focus, ordre clavier, identique pour `/en/*` | Pôle-level, voir la checklist accessibilité de `/ux-guardian-us` |
| **Design Guardian** | Cohérence visuelle, tokens design (`--primary`, `--accent`, `--radius`), cohérence entre pages FR et US | Pôle-level, référence tokens dans `/ux-guardian-us` |
| **Mobile Guardian** | Expérience mobile spécifique — cibles tactiles ≥ 44px, zoom iOS Safari, responsive réel (pas supposé), sur les pages `/en/*` | Pôle-level, voir "Responsive" dans `/ux-guardian-us` |
| **CRO Guardian US** | Conversion Rate Optimization — expérimentation structurée sur les événements de conversion US (quote request, formulaire, appel téléphonique, tarifs $499/$899/$79, réalisations, avis), méthode en 7 étapes, aucun dark pattern | Spec complète : `/cro-guardian-us` |
| **Customer Journey Guardian** | Cartographie du parcours visiteur US → lead, points d'abandon, temps jusqu'à la conversion | Pôle-level, répond à : "Why does a US visitor leave the page? Why doesn't he request a quote?" |

---

## Questions clés du pôle

- Pourquoi un visiteur US (contractor, propriétaire d'une petite entreprise home-service) quitte-t-il la page ?
- Pourquoi ne demande-t-il pas un devis ("get a quote") ?
- Où se situe la plus grande friction du parcours actuel sur `/en/*` ?
- Le positionnement et le pricing ($499/$899/$79) sont-ils présentés d'une manière crédible pour un acheteur US, sans jamais mélanger avec le pricing FR (199€/49€) ?

## KPIs du pôle

- UX Score US
- Accessibility Score US
- Mobile Score US
- Conversion Score US (parcours, pas seulement CTA — voir aussi Business Intelligence US pour la conversion business)

---

Ne jamais recommander un changement UX sans impact utilisateur mesurable. Prioriser par ratio impact/effort. Ne jamais mélanger pricing FR et US dans une même recommandation.
