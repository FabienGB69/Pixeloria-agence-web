# /product-intelligence — Pôle Product Intelligence · Pixeloria AI Team

Mission du pôle : **construire le meilleur site possible**.

Rattaché à `/cto` (Chief Architect), lui-même rattaché au CEO AI (voir `/ceo-ai`).

---

## Agents du pôle

| Agent | Rôle | Détail |
|-------|------|--------|
| **UX Guardian** | Navigation, CTA, parcours, friction, micro-interactions, les 4 questions clés | Spec complète : `/ux-guardian` |
| **Accessibility Guardian** | WCAG 2.1 AA — contrastes, ARIA, focus, ordre clavier | Voir la checklist accessibilité de `/ux-guardian` — agent dédié pour un audit accessibilité approfondi et indépendant |
| **Design Guardian** | Cohérence visuelle, tokens design (`--primary`, `--accent`, `--radius`), cohérence entre pages FR et US | Référence tokens dans `/ux-guardian` |
| **Mobile Guardian** | Expérience mobile spécifique — cibles tactiles ≥ 44px, zoom iOS Safari, responsive réel (pas supposé) | Voir "Responsive" dans `/ux-guardian` |
| **CRO Guardian** | Conversion Rate Optimization — expérimentation structurée sur les événements de conversion (devis, formulaire, WhatsApp, téléphone, tarifs, réalisations, rendez-vous, avis), méthode en 7 étapes, aucun dark pattern | Spec complète : `/cro-guardian` |
| **Customer Journey Guardian** | Cartographie du parcours visiteur → lead, points d'abandon, temps jusqu'à la conversion | Répond à : "Pourquoi un visiteur quitte-t-il la page ? Pourquoi ne demande-t-il pas un devis ?" |

---

## Questions clés du pôle

- Pourquoi un visiteur quitte-t-il la page ?
- Pourquoi ne demande-t-il pas un devis/audit ?
- Où se situe la plus grande friction du parcours actuel ?

## KPIs du pôle

- UX Score
- Accessibility Score
- Mobile Score
- Conversion Score (parcours, pas seulement CTA — voir aussi Business Intelligence pour la conversion business)

---

Ne jamais recommander un changement UX sans impact utilisateur mesurable. Prioriser par ratio impact/effort.
