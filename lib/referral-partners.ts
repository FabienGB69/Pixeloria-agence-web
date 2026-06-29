/**
 * Referral Partners Configuration
 * Manages referral codes, partner information, and reward calculations.
 */

export const validReferralCodes = [
  "PIXELORIA-FELIADA",
  "PIXELORIA-MARILYN",
  "PIXELORIA-DENISE",
  "PIXELORIA-LESLYE",
] as const

export type ReferralCode = (typeof validReferralCodes)[number]

export const referralPartners: Record<
  ReferralCode,
  {
    name: string
    rewardSiteVitrine: number
    rewardOptionVisibilityMonthly: number
  }
> = {
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
}

/**
 * Normalizes a referral code for validation and lookup.
 * Handles trimming, uppercase conversion, and sanitization of special characters.
 * Designed to be forgiving with user input while maintaining code integrity.
 *
 * @param code - The raw referral code to normalize (can be null/undefined)
 * @returns Normalized code string, or empty string if input is falsy
 *
 * @example
 * ```ts
 * normalizeReferralCode("  pixeloria-feliada  ") // "PIXELORIA-FELIADA"
 * normalizeReferralCode("pixeloria_feliada")    // "PIXELORIA-FELIADA" (underscores preserved)
 * normalizeReferralCode(null)                   // ""
 * ```
 */
export const normalizeReferralCode = (code?: string | null) => {
  if (!code) return ""

  return code
    .trim()
    .toUpperCase()
    .replace(/[^A-Z0-9-_]/g, "")
}

/**
 * Type guard for validating referral codes.
 * Normalizes input and checks against the valid codes list.
 * Ensures type safety throughout the application when using ReferralCode.
 *
 * @param code - The string to validate (can be null/undefined)
 * @returns True if code is valid after normalization, false otherwise
 *
 * @example
 * ```ts
 * if (isValidReferralCode("PIXELORIA-FELIADA")) {
 *   const partner = getReferralPartner("PIXELORIA-FELIADA");
 * }
 * ```
 */
export const isValidReferralCode = (
  code?: string | null
): code is ReferralCode => {
  const normalizedCode = normalizeReferralCode(code)
  return validReferralCodes.includes(normalizedCode as ReferralCode)
}

/**
 * Retrieves partner information by referral code.
 * Returns null if the code is invalid — safe for untrusted input.
 *
 * @param code - The referral code to look up (can be null/undefined)
 * @returns Partner information object or null if not found
 *
 * @example
 * ```ts
 * const partner = getReferralPartner("PIXELORIA-FELIADA");
 * console.log(partner?.name); // "Feliada"
 * ```
 */
export const getReferralPartner = (code?: string | null) => {
  const normalizedCode = normalizeReferralCode(code)

  if (!isValidReferralCode(normalizedCode)) {
    return null
  }

  return referralPartners[normalizedCode]
}
