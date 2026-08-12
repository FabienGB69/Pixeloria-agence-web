/**
 * Source de vérité unique du catalogue US (marché contractors, `/en/*`).
 * Pricing indépendant du catalogue FR (`lib/pricing.ts`) — $499 / $899 /
 * $79-mo, confirmé (voir `.claude/memory/activeContext.md`).
 *
 * Les pages `/en/*` qui affichent un prix ou construisent un schema.org
 * `Offer` doivent référencer ces valeurs plutôt que de dupliquer le
 * montant en dur (voir issue #146).
 */

export interface OfferUs {
  /** Identifiant stable. */
  id: string;
  /** Titre commercial affiché. */
  title: string;
  /** Montant numérique brut (sans symbole), pour schema.org `Offer.price`. */
  amount: number;
  /** Devise ISO 4217, pour schema.org `Offer.priceCurrency`. */
  currency: 'USD';
  /** Prix affiché tel quel (avec symbole et suffixe éventuel). */
  price: string;
  /** Suffixe court affiché séparément dans les cartes tarifaires. */
  suffix: string;
}

export const OFFERS_US = {
  starter: {
    id: 'starter',
    title: 'Starter Website',
    amount: 499,
    currency: 'USD',
    price: '$499',
    suffix: 'one-time',
  },
  growth: {
    id: 'growth',
    title: 'Growth Website',
    amount: 899,
    currency: 'USD',
    price: '$899',
    suffix: 'one-time',
  },
  care: {
    id: 'care',
    title: 'Website Care & Local Visibility',
    amount: 79,
    currency: 'USD',
    price: '$79',
    suffix: '/month',
  },
} as const satisfies Record<string, OfferUs>;

export type OfferIdUs = keyof typeof OFFERS_US;

/** Ordre canonique d'affichage. */
export const OFFER_ORDER_US: readonly OfferIdUs[] = ['starter', 'growth', 'care'];
