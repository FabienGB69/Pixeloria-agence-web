/**
 * Referral Partners Configuration
 * Manages referral codes, partner information, and reward calculations.
 */

/**
 * Referral partners database with their associated rewards.
 * Keys are partner codes (uppercase, prefixed with "PIXELORIA-").
 * Values contain partner metadata and reward amounts.
 */
export const referralPartners = {
  "PIXELORIA-FELIADA": {
    name: "Feliada",
    rewardSiteVitrine: 100,
    rewardOptionVisibilityMonthly: 25,
  },
  "PIXELORIA-MARILYN": {
    name: "Marilyn",
    rewardSiteVitrine: 100,
    rewardOptionVisibilityMonthly: 25,
  },
  "PIXELORIA-DENISE": {
    name: "Denise",
    rewardSiteVitrine: 100,
    rewardOptionVisibilityMonthly: 25,
  },
  "PIXELORIA-LESLYE": {
    name: "Leslye",
    rewardSiteVitrine: 100,
    rewardOptionVisibilityMonthly: 25,
  },
} as const;

/**
 * Type-safe referral code — extracted from referralPartners keys.
 * Ensures only valid codes are used throughout the application.
 */
export type ReferralCode = keyof typeof referralPartners;

/**
 * Partner information object — extracted from referralPartners values.
 * Contains partner name and reward amounts.
 */
export type ReferralPartner = typeof referralPartners[ReferralCode];

/**
 * Checks if a given string is a valid referral code.
 * Provides type guard for runtime validation before using in partner lookups.
 *
 * @param code - The string to validate
 * @returns True if code exists in referralPartners, false otherwise
 *
 * @example
 * ```ts
 * const userCode = "PIXELORIA-FELIADA";
 * if (isValidReferralCode(userCode)) {
 *   const partner = getPartnerInfo(userCode);
 * }
 * ```
 */
export function isValidReferralCode(code: string): code is ReferralCode {
  return code in referralPartners;
}

/**
 * Retrieves partner information by referral code.
 * Returns null if the code is invalid — safe for untrusted input.
 *
 * @param code - The referral code to look up
 * @returns Partner information object or null if not found
 *
 * @example
 * ```ts
 * const partner = getPartnerInfo("PIXELORIA-FELIADA");
 * console.log(partner?.name); // "Feliada"
 * ```
 */
export function getPartnerInfo(code: ReferralCode): ReferralPartner | null {
  return referralPartners[code] ?? null;
}

/**
 * Generates a referral URL with the given code as query parameter.
 * Suitable for sharing referral links to potential customers.
 *
 * @param code - The referral code to encode in the URL
 * @returns Relative URL path with referral code query parameter
 *
 * @example
 * ```ts
 * const url = getReferralUrl("PIXELORIA-FELIADA");
 * // Returns: "/parrainage?code=PIXELORIA-FELIADA"
 * ```
 */
export function getReferralUrl(code: ReferralCode): string {
  return `/parrainage?code=${code}`;
}
