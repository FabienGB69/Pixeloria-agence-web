import { normalizeReferralCode } from './referral-partners';

/**
 * Build Stripe payment URL with referral tracking parameters
 * @param baseUrl - Stripe payment link URL (e.g., https://buy.stripe.com/...)
 * @param referralCode - Optional referral code from URL query param
 * @returns URL with utm_* and client_reference_id parameters
 */
export function buildStripeReferralUrl(
  baseUrl: string,
  referralCode?: string | null
): string {
  const url = new URL(baseUrl);
  const normalizedCode = normalizeReferralCode(referralCode);

  // Add UTM parameters for analytics
  url.searchParams.set('utm_source', 'parrainage');
  url.searchParams.set('utm_medium', 'referral');
  url.searchParams.set('utm_campaign', 'pixeloria-parrainage');

  // Add referral code as UTM content if valid
  if (normalizedCode) {
    url.searchParams.set('utm_content', normalizedCode);
    url.searchParams.set('client_reference_id', normalizedCode);
  }

  return url.toString();
}
