import { test, expect } from '@playwright/test';

test.describe('Pixeloria homepage — smoke tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('title et H1 hero corrects', async ({ page }) => {
    await expect(page).toHaveTitle(/Pixeloria/);
    await expect(
      page.getByRole('heading', { level: 1, name: /TPE|PME|artisans/i }),
    ).toBeVisible();
  });

  test('liens de navigation résolvent vers les sections', async ({ page }) => {
    const expectedNavLinks = [
      { label: 'Tarifs', href: '/tarifs' },
      { label: 'Portfolio', href: '/realisations' },
      { label: 'Comment ça marche', href: '/comment-ca-marche' },
      { label: 'Avis', href: '/avis' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Devis gratuit', href: '/#contact' },
    ];

    const nav = page.getByRole('navigation', { name: 'Navigation principale' });
    for (const { label, href } of expectedNavLinks) {
      const link = nav.getByRole('link', { name: label });
      await expect(link).toBeVisible();
      await expect(link).toHaveAttribute('href', href);
    }

    // Seule la section contact reste sur la homepage
    await expect(page.locator('#contact')).toBeAttached();
  });

  test('menu mobile — toggle ouvre/ferme la nav', async ({ page }) => {
    await page.setViewportSize({ width: 420, height: 800 });
    const toggle = page.locator('.menu-toggle');
    const nav = page.locator('.site-nav');

    await expect(toggle).toBeVisible();
    await expect(toggle).toHaveAttribute('aria-expanded', 'false');

    await toggle.click();
    await expect(toggle).toHaveAttribute('aria-expanded', 'true');
    await expect(nav).toHaveClass(/is-open/);

    await toggle.click();
    await expect(toggle).toHaveAttribute('aria-expanded', 'false');
    await expect(nav).not.toHaveClass(/is-open/);
  });

  test('footer affiche l\'année courante', async ({ page }) => {
    const year = String(new Date().getFullYear());
    await expect(page.locator('.footer-bottom p')).toContainText(year);
  });

  test('formulaire contact — champs obligatoires présents', async ({ page }) => {
    const form = page.locator('form.contact-form');
    await expect(form).toBeAttached();
    for (const name of ['nom', 'email', 'message']) {
      await expect(form.locator(`[name="${name}"]`)).toHaveAttribute('required', '');
    }
  });

  test('aucune erreur console au chargement', async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', (err) => errors.push(err.message));
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        const text = msg.text();
        // Filtres : ressources Vercel/Next.js attendues absentes en local
        if (/_vercel\/insights|Failed to load resource|ERR_CONNECTION_REFUSED|404/i.test(text)) return;
        // Avertissements Next.js sur le viewport (injected par Playwright)
        if (/viewport/i.test(text)) return;
        errors.push(text);
      }
    });
    await page.reload();
    await page.waitForLoadState('networkidle');
    expect(errors, `Erreurs console : ${errors.join(' | ')}`).toEqual([]);
  });

  test('page 404 branded', async ({ page }) => {
    await page.goto('/cette-page-n-existe-pas');
    await expect(page.getByRole('heading', { name: /404/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /accueil/i })).toBeVisible();
  });
});
