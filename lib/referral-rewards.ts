/**
 * Source de vérité unique des récompenses du programme de parrainage FR,
 * dérivées des ids canoniques de `lib/pricing.ts`. Ne jamais dupliquer ces
 * montants en dur ailleurs (webhook Stripe, Notion, UI) — voir issue #154.
 */
import { type OfferId } from './pricing';

export const REFERRAL_REWARDS: Record<OfferId, number> = {
  'site-artisan': 100,
  'option-visibilite': 25,
};

export function getReferralReward(offerId: OfferId): number {
  return REFERRAL_REWARDS[offerId];
}
