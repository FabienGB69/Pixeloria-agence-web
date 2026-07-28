import { test, expect } from '@playwright/test';
import { HREFLANG_PAIRS } from '@/lib/hreflang';

const BASE = 'https://pixeloria.fr';

test.describe('hreflang — alternates FR/EN sur toutes les paires (issue #131)', () => {
  for (const [fr, en] of Object.entries(HREFLANG_PAIRS)) {
    test(`${fr} ↔ ${en}`, async ({ page }) => {
      for (const path of [fr, en]) {
        await page.goto(path);
        const frLink = page.locator('link[rel="alternate"][hreflang="fr-FR"]');
        const enLink = page.locator('link[rel="alternate"][hreflang="en-US"]');
        const defaultLink = page.locator('link[rel="alternate"][hreflang="x-default"]');

        // Next.js normalizes away the trailing slash on the root URL when
        // rendering the <link> tag, even though the source declares '/'.
        await expect(frLink).toHaveAttribute('href', fr === '/' ? BASE : `${BASE}${fr}`);
        await expect(enLink).toHaveAttribute('href', `${BASE}${en}`);
        // x-default always points to the EN URL (existing convention).
        await expect(defaultLink).toHaveAttribute('href', `${BASE}${en}`);
      }
    });
  }
});
