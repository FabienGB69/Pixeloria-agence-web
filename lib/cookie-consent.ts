export type ConsentCategories = {
  necessary: true; // toujours actif, non configurable par l'utilisateur
  analytics: boolean; // conditionne GTM + GA4
  social: boolean; // conditionne le widget X/Twitter
};

export const CONSENT_COOKIE_NAME = 'pixeloria_consent';
export const CONSENT_COOKIE_MAX_AGE_DAYS = 180; // 6 mois, bien en dessous du max CNIL de 13 mois

export function readConsent(): ConsentCategories | null {
  if (typeof document === 'undefined') return null;

  const match = document.cookie
    .split('; ')
    .find((row) => row.startsWith(`${CONSENT_COOKIE_NAME}=`));

  if (!match) return null;

  const raw = match.slice(CONSENT_COOKIE_NAME.length + 1);

  try {
    const parsed = JSON.parse(decodeURIComponent(raw));
    if (
      parsed &&
      typeof parsed === 'object' &&
      typeof parsed.analytics === 'boolean' &&
      typeof parsed.social === 'boolean'
    ) {
      return { necessary: true, analytics: parsed.analytics, social: parsed.social };
    }
    return null;
  } catch {
    return null;
  }
}

export function writeConsent(categories: Omit<ConsentCategories, 'necessary'>): void {
  if (typeof document === 'undefined') return;

  const value = encodeURIComponent(JSON.stringify(categories));
  const maxAge = CONSENT_COOKIE_MAX_AGE_DAYS * 24 * 60 * 60;

  document.cookie = `${CONSENT_COOKIE_NAME}=${value}; path=/; max-age=${maxAge}; SameSite=Lax`;
}
