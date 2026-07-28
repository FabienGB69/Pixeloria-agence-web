import { describe, it, expect } from 'vitest';
import { hreflangLanguages, HREFLANG_PAIRS } from '@/lib/hreflang';

describe('lib/hreflang', () => {
  it('resolves the same map from either side of a pair', () => {
    const fromFr = hreflangLanguages('/offres');
    const fromEn = hreflangLanguages('/en/offers');
    expect(fromFr).toEqual(fromEn);
  });

  it('x-default points to the EN URL, matching app/page.tsx and app/en/layout.tsx', () => {
    const langs = hreflangLanguages('/offres');
    expect(langs?.['x-default']).toBe(langs?.['en-US']);
    expect(langs?.['x-default']).toBe('https://pixeloria.fr/en/offers');
  });

  it('returns full absolute URLs for fr-FR and en-US', () => {
    const langs = hreflangLanguages('/tarifs');
    expect(langs?.['fr-FR']).toBe('https://pixeloria.fr/tarifs');
    expect(langs?.['en-US']).toBe('https://pixeloria.fr/en/pricing');
  });

  it('handles the root pair with a trailing slash on the FR side', () => {
    const langs = hreflangLanguages('/');
    expect(langs?.['fr-FR']).toBe('https://pixeloria.fr/');
    expect(langs?.['en-US']).toBe('https://pixeloria.fr/en');
  });

  it('returns undefined for a path with no known pair', () => {
    expect(hreflangLanguages('/en/roofing-websites')).toBeUndefined();
  });

  it('every FR/EN pair in HREFLANG_PAIRS resolves without collision', () => {
    const seenEn = new Set<string>();
    for (const [fr, en] of Object.entries(HREFLANG_PAIRS)) {
      expect(seenEn.has(en)).toBe(false);
      seenEn.add(en);
      expect(hreflangLanguages(fr)).toBeDefined();
      expect(hreflangLanguages(en)).toBeDefined();
    }
  });
});
