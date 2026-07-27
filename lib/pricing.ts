/**
 * Source de vérité unique du catalogue d'offres FR (marché France).
 *
 * Toute vitrine (Hero, /offres, /tarifs, ComparisonTable), tout funnel
 * (/refonte TunnelForm), toute page sectorielle (`lib/industry-pages.ts`)
 * et le CRM (`lib/notion.ts`) doivent référencer ces valeurs — jamais de
 * duplication en dur du prix ou du titre.
 *
 * Marché US : voir `lib/pricing-us.ts` (à créer si nécessaire), pricing
 * indépendant $499 / $899 / $79-mo.
 */

export interface Offer {
  /** Identifiant stable — utilisé dans les URLs et payloads API. */
  id: string;
  /** Titre commercial affiché. */
  title: string;
  /** Prix affiché tel quel (incluant la devise et le suffixe éventuel). */
  price: string;
  /** Résumé court, 1 ligne. */
  summary: string;
  /** Bénéfices concrets, ordre d'importance. */
  features: readonly string[];
  /** Libellé exact enregistré dans Notion (Select). */
  notionLabel: string;
}

export const OFFERS = {
  'site-artisan': {
    id: 'site-artisan',
    title: 'Site Artisan',
    price: '199 € TTC',
    summary: 'Site vitrine professionnel livré en 72 h, sans engagement.',
    features: [
      'Site vitrine responsive (mobile + desktop)',
      'SEO local optimisé pour votre ville',
      "Formulaire de contact et bouton d'appel",
      'Livraison en 72 h',
      'Sans engagement, hébergement 1 an offert',
    ],
    notionLabel: 'Site Artisan 199 € TTC',
  },
  'option-visibilite': {
    id: 'option-visibilite',
    title: 'Option Visibilité',
    price: '49 € / mois',
    summary: 'Suivi et croissance : SEO local, Google Business Profile et maintenance.',
    features: [
      'Maintenance technique et sécurité mensuelle',
      'Suivi et optimisation Google Business Profile',
      'SEO local mensuel',
      'Rapport analytics simplifié',
      'Résiliable à tout moment',
    ],
    notionLabel: 'Option Visibilité 49 €/mois',
  },
} as const satisfies Record<string, Offer>;

export type OfferId = keyof typeof OFFERS;

/** Ordre canonique d'affichage. */
export const OFFER_ORDER: readonly OfferId[] = ['site-artisan', 'option-visibilite'];

/**
 * Libellés passés à Notion pour le champ Select `Offre`.
 * Inclut les alias historiques pour compatibilité des payloads déjà
 * en circulation (formulaires cachés, liens externes, tests).
 */
export const OFFRE_LABELS: Record<string, string> = {
  // Canoniques
  'site-artisan':      OFFERS['site-artisan'].notionLabel,
  'option-visibilite': OFFERS['option-visibilite'].notionLabel,
  // Alias historiques
  oneshot:     OFFERS['site-artisan'].notionLabel,
  abo:         OFFERS['option-visibilite'].notionLabel,
  maintenance: OFFERS['option-visibilite'].notionLabel,
  // Autres contextes (formulaires dédiés hors tunnel refonte)
  branding:    'Branding digital',
  'ui-ux':     'UI / UX design',
  integration: 'Intégration web',
  full:        'Projet complet',
  creation:    'Création de site',
  audit:       'Free website audit',
};
