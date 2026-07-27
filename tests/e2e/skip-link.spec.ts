import { test, expect } from '@playwright/test';

test.describe('Skip link — WCAG 2.4.1 Bypass Blocks', () => {
  test('FR — le skip link est le premier élément focusable et déplace le focus vers <main>', async ({ page }) => {
    await page.goto('/');
    await page.keyboard.press('Tab');

    const skipLink = page.locator('.skip-link');
    await expect(skipLink).toBeFocused();
    await expect(skipLink).toHaveText('Aller au contenu principal');

    await page.keyboard.press('Enter');
    await expect(page.locator('main')).toBeFocused();
  });

  test('EN — le skip link affiche le libellé anglais sur /en', async ({ page }) => {
    await page.goto('/en');
    await page.keyboard.press('Tab');

    const skipLink = page.locator('.skip-link');
    await expect(skipLink).toBeFocused();
    await expect(skipLink).toHaveText('Skip to main content');
  });

  test('/parrainage — pas de <main> : le skip link retombe sur le <h1>', async ({ page }) => {
    await page.goto('/parrainage');
    await page.keyboard.press('Tab');
    await expect(page.locator('.skip-link')).toBeFocused();

    await page.keyboard.press('Enter');
    await expect(page.locator('h1')).toBeFocused();
  });
});
