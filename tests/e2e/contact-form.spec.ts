import { test, expect } from '@playwright/test';

test.describe('Formulaire contact', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/#contact');
  });

  test('validation bloque la soumission si champs vides', async ({ page }) => {
    const form = page.locator('form.contact-form');
    await form.locator('button[type="submit"]').click();
    // Le navigateur bloque via checkValidity(), aucun état success ne doit apparaître
    await expect(page.locator('.form-success')).not.toBeVisible();
  });

  test('soumission avec données valides affiche le message de succès', async ({ page }) => {
    const form = page.locator('form.contact-form');

    await form.locator('[name="nom"]').fill('Alice Martin');
    await form.locator('[name="email"]').fill('alice@test.com');
    await form.locator('[name="phone"]').fill('0600000000');
    await form.locator('[name="message"]').fill('Projet de refonte complète de notre site vitrine.');

    // Intercepter la requête API pour éviter un vrai appel réseau
    await page.route('/api/submit-lead', (route) =>
      route.fulfill({ status: 200, body: JSON.stringify({ success: true }) }),
    );

    await form.locator('button[type="submit"]').click();

    await expect(page.locator('.form-success')).toBeVisible({ timeout: 5000 });
    await expect(page.locator('.form-success h3')).toContainText('envoyé');
  });

  test('message d\'erreur si l\'API retourne 500', async ({ page }) => {
    const form = page.locator('form.contact-form');

    await form.locator('[name="nom"]').fill('Bob Dupont');
    await form.locator('[name="email"]').fill('bob@test.com');
    await form.locator('[name="phone"]').fill('0600000000');
    await form.locator('[name="message"]').fill('Test erreur serveur.');

    await page.route('/api/submit-lead', (route) =>
      route.fulfill({ status: 500, body: JSON.stringify({ error: 'Internal Server Error' }) }),
    );

    await form.locator('button[type="submit"]').click();

    await expect(page.locator('form.contact-form [role="alert"]')).toBeVisible({ timeout: 5000 });
  });

  test('email invalide déclenche aria-invalid', async ({ page }) => {
    const form = page.locator('form.contact-form');
    const emailField = form.locator('[name="email"]');

    await emailField.fill('pas-un-email');
    await emailField.blur();

    await expect(emailField).toHaveAttribute('aria-invalid', 'true');
  });
});
