import { test, expect } from '@playwright/test';

test.describe('CookieBanner — accessibilité (WCAG 2.1.1 Keyboard, 2.4.3 Focus Order)', () => {
  test('la case "Nécessaires" reste focusable au clavier et ne peut pas être décochée', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: 'Personnaliser' }).click();

    const necessary = page.locator('.cookie-banner-option').first().locator('input[type="checkbox"]');
    await expect(necessary).toBeChecked();
    // The native `disabled` DOM property must stay false — that's what would
    // remove the checkbox from the tab order (aria-disabled does not).
    await expect.poll(() => necessary.evaluate((el: HTMLInputElement) => el.disabled)).toBe(false);
    await expect(necessary).toHaveAttribute('aria-disabled', 'true');

    await necessary.click({ force: true });
    await expect(necessary).toBeChecked();
  });

  test('le panneau "Personnaliser" piège le focus et Échap referme en rendant le focus au déclencheur', async ({ page }) => {
    await page.goto('/');
    const customizeBtn = page.getByRole('button', { name: 'Personnaliser' });
    await customizeBtn.click();

    await expect(page.locator('.cookie-banner')).toHaveAttribute('role', 'dialog');
    await expect(page.locator('.cookie-banner')).toHaveAttribute('aria-modal', 'true');

    await page.keyboard.press('Escape');
    await expect(page.locator('.cookie-banner-panel')).toBeHidden();
    await expect(customizeBtn).toBeFocused();
  });
});
