/**
 * Reference USD reward amounts for the US contractors referral program
 * (issue #155). Unlike the FR program (Stripe checkout → webhook →
 * automatic Notion record), `/en/*` has no self-serve checkout — a
 * referred lead's actual offer isn't known until a human closes the deal
 * manually, so these amounts are NOT auto-applied. They're the figures
 * whoever closes the deal should use when finalizing the Notion referral
 * record's reward.
 */
import { type OfferIdUs } from './pricing-us';

export const REFERRAL_REWARDS_US: Record<OfferIdUs, number> = {
  starter: 250,
  growth: 450,
  care: 40,
};

export function getReferralRewardUs(offerId: OfferIdUs): number {
  return REFERRAL_REWARDS_US[offerId];
}
