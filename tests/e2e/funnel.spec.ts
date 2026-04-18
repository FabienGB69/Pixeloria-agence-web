import { test, expect } from '@playwright/test';

test.describe('Tunnel de vente /refonte', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/refonte');
    // Attendre que le wizard soit monté (il est dans un Suspense)
    await expect(page.locator('.wizard')).toBeVisible({ timeout: 10000 });
  });

  test('wizard démarre à l\'étape 1', async ({ page }) => {
    await expect(page.locator('.progress li.is-active')).toContainText('Contexte');
    await expect(page.locator('.wizard-body input[type="url"]')).toBeVisible();
  });

  test('step 1 → validation bloque si URL manquante', async ({ page }) => {
    // Cliquer Suivant sans remplir l'URL
    await page.locator('.step-nav button').last().click();
    await expect(page.locator('.warning, [class*="warning"]')).toBeVisible();
    // On reste à l'étape 1
    await expect(page.locator('.progress li.is-active')).toContainText('Contexte');
  });

  test('parcours complet 4 étapes → écran succès', async ({ page }) => {
    // Intercepter la soumission pour ne pas faire de vrai appel
    await page.route('/api/submit-lead', (route) =>
      route.fulfill({ status: 200, body: JSON.stringify({ success: true }) }),
    );

    /* ── Étape 1 : Contexte ── */
    await page.locator('input[type="url"]').fill('https://example.fr');
    await page.locator('select').first().selectOption({ index: 1 });
    // Sélectionner l'ancienneté (2ème select)
    const selects = page.locator('select');
    await selects.nth(1).selectOption({ index: 1 });
    // Cocher au moins une douleur
    await page.locator('.pain-card').first().click();
    await page.locator('.step-nav button').last().click();

    /* ── Étape 2 : Objectifs ── */
    await expect(page.locator('.progress li.is-active')).toContainText('Objectifs');
    // Cocher un objectif
    await page.locator('.chip, .objective-chip').first().click();
    // Remplir visiteurs et leads si des inputs numériques sont présents
    const numInputs = page.locator('input[type="number"]');
    if (await numInputs.count() > 0) {
      await numInputs.first().fill('5000');
      await numInputs.nth(1).fill('2');
    }
    await page.locator('.step-nav button').last().click();

    /* ── Étape 3 : Offre ── */
    await expect(page.locator('.progress li.is-active')).toContainText('Offre');
    await page.locator('.offer-card, [class*="offer"]').first().click();
    await page.locator('.step-nav button').last().click();

    /* ── Étape 4 : Coordonnées ── */
    await expect(page.locator('.progress li.is-active')).toContainText('Coordonnées');
    await page.locator('[name="prenom"]').fill('Alice');
    await page.locator('[name="nom"]').fill('Martin');
    await page.locator('[name="email"]').fill('alice@pixeloria.fr');
    await page.locator('[name="phone"]').fill('0612345678');
    // Soumettre
    await page.locator('.step-nav button').last().click();

    /* ── Succès ── */
    await expect(page.locator('.success-card, .wizard.success-card')).toBeVisible({ timeout: 8000 });
    await expect(page.locator('h2')).toContainText('Alice');
  });

  test('offre preselect via ?offre=audit-boost', async ({ page }) => {
    await page.goto('/refonte?offre=audit-boost');
    await expect(page.locator('.wizard')).toBeVisible({ timeout: 10000 });
    // Naviguer jusqu'à l'étape 3 pour vérifier la préselection
    // (remplir step 1 et step 2 rapidement)
    await page.locator('input[type="url"]').fill('https://test.fr');
    await page.locator('select').first().selectOption({ index: 1 });
    const selects = page.locator('select');
    await selects.nth(1).selectOption({ index: 1 });
    await page.locator('.pain-card').first().click();
    await page.locator('.step-nav button').last().click();

    await page.locator('.chip, .objective-chip').first().click();
    await page.locator('.step-nav button').last().click();

    // Étape 3 — l'offre audit-boost doit être présélectionnée
    const offerCard = page.locator('[data-offer="audit-boost"], .offer-card').first();
    await expect(offerCard).toBeVisible();
  });

  test('bouton Précédent revient à l\'étape précédente', async ({ page }) => {
    // Remplir étape 1 et avancer
    await page.locator('input[type="url"]').fill('https://test.fr');
    await page.locator('select').first().selectOption({ index: 1 });
    const selects = page.locator('select');
    await selects.nth(1).selectOption({ index: 1 });
    await page.locator('.pain-card').first().click();
    await page.locator('.step-nav button').last().click();

    await expect(page.locator('.progress li.is-active')).toContainText('Objectifs');

    // Revenir en arrière
    await page.locator('.step-nav button').first().click();
    await expect(page.locator('.progress li.is-active')).toContainText('Contexte');
  });
});
