/**
 * Feature regression loop — runs after every new feature deployment.
 * Covers: all pages render, key UX interactions, API contracts, accessibility basics.
 */
import { test, expect, Page } from '@playwright/test';

// ─── Helper ──────────────────────────────────────────────────────────────────

async function expectPage200(page: Page, url: string) {
  const res = await page.goto(url);
  expect(res?.status(), `${url} doit retourner 200`).toBe(200);
  await page.waitForLoadState('domcontentloaded');
}

// ─── All pages render (200) ───────────────────────────────────────────────────

test.describe('Pages — statut HTTP 200', () => {
  const allPages = [
    '/',
    '/tarifs',
    '/faq',
    '/avis',
    '/comment-ca-marche',
    '/realisations',
    '/temoignage',
    '/a-propos',
    '/parrainage',
    '/refonte',
    '/en',
    '/en/pricing',
    '/en/how-it-works',
    '/en/reviews',
    '/en/faq',
    '/en/about',
    '/en/testimonial',
    '/en/parrainage',
    '/cgu',
    '/cgv',
    '/mentions-legales',
    '/politique-confidentialite',
  ];

  for (const url of allPages) {
    test(`${url} — 200 OK`, async ({ page }) => {
      await expectPage200(page, url);
    });
  }

  test('404 — page branded', async ({ page }) => {
    await page.goto('/page-qui-nexiste-vraiment-pas');
    await expect(page.getByRole('heading', { name: /404/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /accueil/i })).toBeVisible();
  });
});

// ─── Pages — contenu clé visible ─────────────────────────────────────────────

test.describe('Pages — contenu principal visible', () => {
  test('/ — H1 hero visible', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  });

  test('/tarifs — section services chargée', async ({ page }) => {
    await page.goto('/tarifs');
    // Services component uses h2
    await expect(page.getByRole('heading', { name: /artisan|professionnel|72h/i }).first()).toBeVisible();
  });

  test('/faq — section FAQ chargée', async ({ page }) => {
    await page.goto('/faq');
    await expect(page.getByRole('heading', { name: /question|FAQ/i })).toBeVisible();
  });

  test('/avis — section témoignages chargée', async ({ page }) => {
    await page.goto('/avis');
    // Testimonials component h2: "Ce que disent nos clients" — scope to h2 + a
    // substring unique to it, since the page's own <h1>Avis de nos clients</h1>
    // also matches a broader "clients|avis" regex (strict-mode violation).
    await expect(page.getByRole('heading', { level: 2, name: /disent/i })).toBeVisible();
  });

  test('/comment-ca-marche — section process chargée', async ({ page }) => {
    await page.goto('/comment-ca-marche');
    await expect(page.getByRole('heading', { name: /comment|projet|marche|déroule/i })).toBeVisible();
  });

  test('/realisations — H1 présent', async ({ page }) => {
    await page.goto('/realisations');
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  });

  test('/a-propos — H1 présent', async ({ page }) => {
    await page.goto('/a-propos');
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  });

  test('/parrainage — H1 présent', async ({ page }) => {
    await page.goto('/parrainage');
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  });

  test('/en/pricing — H1 visible', async ({ page }) => {
    await page.goto('/en/pricing');
    await expect(page.getByRole('heading', { name: /pricing|transparent/i })).toBeVisible();
  });

  test('/en/how-it-works — H1 visible', async ({ page }) => {
    await page.goto('/en/how-it-works');
    await expect(page.getByRole('heading', { name: /steps|website live/i })).toBeVisible();
  });

  test('/en/reviews — H1 visible', async ({ page }) => {
    await page.goto('/en/reviews');
    await expect(page.getByRole('heading', { name: /clients say/i })).toBeVisible();
  });

  test('/en/faq — H1 visible', async ({ page }) => {
    await page.goto('/en/faq');
    await expect(page.getByRole('heading', { name: /frequently asked/i })).toBeVisible();
  });

  test('/en/about — H1 visible', async ({ page }) => {
    await page.goto('/en/about');
    await expect(page.getByRole('heading', { name: /agency behind/i })).toBeVisible();
  });

  test('/en/parrainage — H1 visible', async ({ page }) => {
    await page.goto('/en/parrainage');
    await expect(page.getByRole('heading', { name: /recommend pixeloria|earn/i })).toBeVisible();
  });

  test('/en/testimonial — H1 visible', async ({ page }) => {
    await page.goto('/en/testimonial');
    await expect(page.getByRole('heading', { name: /share your review/i })).toBeVisible();
  });
});

// ─── Navigation ──────────────────────────────────────────────────────────────

test.describe('Navigation principale', () => {
  test('tous les liens nav pointent vers les bonnes URLs', async ({ page }) => {
    await page.goto('/');
    const nav = page.getByRole('navigation', { name: 'Navigation principale' });

    const expectedLinks = [
      { label: 'Tarifs', href: '/tarifs' },
      { label: 'Portfolio', href: '/realisations' },
      { label: 'Comment ça marche', href: '/comment-ca-marche' },
      { label: 'Avis', href: '/avis' },
      { label: 'Devis gratuit', href: '/#contact' },
    ];

    for (const { label, href } of expectedLinks) {
      const link = nav.getByRole('link', { name: label });
      await expect(link).toBeVisible();
      await expect(link).toHaveAttribute('href', href);
    }
  });

  test('logo renvoie vers /', async ({ page }) => {
    await page.goto('/tarifs');
    await page.locator('.logo').click();
    await expect(page).toHaveURL('/');
  });

  test('menu mobile — ouverture/fermeture', async ({ page }) => {
    await page.setViewportSize({ width: 420, height: 800 });
    await page.goto('/');
    const toggle = page.locator('.menu-toggle');
    const nav = page.locator('.site-nav');

    await expect(toggle).toBeVisible({ timeout: 8000 });
    await expect(toggle).toHaveAttribute('aria-expanded', 'false');

    await toggle.click();
    await expect(toggle).toHaveAttribute('aria-expanded', 'true', { timeout: 5000 });
    await expect(nav).toHaveClass(/is-open/);

    await toggle.click();
    await expect(toggle).toHaveAttribute('aria-expanded', 'false', { timeout: 5000 });
    await expect(nav).not.toHaveClass(/is-open/);
  });
});

// ─── Contact form ─────────────────────────────────────────────────────────────

test.describe('Formulaire contact (homepage)', () => {
  test('champs obligatoires présents', async ({ page }) => {
    await page.goto('/');
    const form = page.locator('form.contact-form');
    await expect(form).toBeAttached();
    for (const name of ['nom', 'email', 'message']) {
      await expect(form.locator(`[name="${name}"]`)).toHaveAttribute('required', '');
    }
  });

  test('soumission réussie affiche le message de succès', async ({ page }) => {
    await page.goto('/');
    await page.route('/api/submit-lead', (r) =>
      r.fulfill({ status: 200, body: JSON.stringify({ success: true }) }),
    );
    const form = page.locator('form.contact-form');
    await form.locator('[name="nom"]').fill('Test User');
    await form.locator('[name="email"]').fill('test@pixeloria.fr');
    await form.locator('[name="phone"]').fill('0600000000');
    await form.locator('[name="message"]').fill('Message de test fonctionnel.');
    await form.locator('button[type="submit"]').click();
    await expect(page.locator('.form-success')).toBeVisible({ timeout: 6000 });
  });

  test('erreur API 500 → message d\'erreur visible', async ({ page }) => {
    await page.goto('/');
    await page.route('/api/submit-lead', (r) =>
      r.fulfill({ status: 500, body: JSON.stringify({ error: 'Erreur serveur' }) }),
    );
    const form = page.locator('form.contact-form');
    await form.locator('[name="nom"]').fill('Bob');
    await form.locator('[name="email"]').fill('bob@test.com');
    await form.locator('[name="phone"]').fill('0600000000');
    await form.locator('[name="message"]').fill('Erreur test');
    await form.locator('button[type="submit"]').click();
    await expect(form.locator('[role="alert"]')).toBeVisible({ timeout: 5000 });
  });
});

// ─── Formulaire témoignage ────────────────────────────────────────────────────

test.describe('Formulaire témoignage (/temoignage)', () => {
  test('tous les champs requis sont présents', async ({ page }) => {
    await page.goto('/temoignage');
    const form = page.locator('form');
    await expect(form.locator('[name="prenom"]')).toBeVisible();
    await expect(form.locator('[name="activite"]')).toBeVisible();
    await expect(form.locator('[name="ville"]')).toBeVisible();
    await expect(form.locator('[name="avis"]')).toBeVisible();
    await expect(form.locator('[name="accord"]')).toBeVisible();
  });

  test('soumission complète → message de succès', async ({ page }) => {
    await page.goto('/temoignage');
    await page.route('/api/submit-testimonial', (r) =>
      r.fulfill({ status: 200, body: JSON.stringify({ success: true }) }),
    );
    await page.fill('[name="prenom"]', 'Marie');
    await page.fill('[name="activite"]', 'Peintre');
    await page.fill('[name="ville"]', 'Lyon');
    await page.fill('[name="avis"]', 'Excellent service, livraison rapide et site professionnel.');
    await page.check('#note-5');
    await page.check('[name="accord"]');
    await page.click('button[type="submit"]');
    await expect(page.locator('.temoignage-success')).toBeVisible({ timeout: 6000 });
  });

  test('erreur API → message d\'erreur spécifique affiché', async ({ page }) => {
    await page.goto('/temoignage');
    await page.route('/api/submit-testimonial', (r) =>
      r.fulfill({ status: 429, body: JSON.stringify({ error: 'Trop de tentatives' }) }),
    );
    await page.fill('[name="prenom"]', 'Test');
    await page.fill('[name="activite"]', 'Plombier');
    await page.fill('[name="ville"]', 'Paris');
    await page.fill('[name="avis"]', 'Super service pour les tests.');
    await page.check('#note-5');
    await page.check('[name="accord"]');
    await page.click('button[type="submit"]');

    // Use first() to avoid strict-mode violation with Next.js route-announcer
    const alert = page.locator('p[role="alert"]').first();
    await expect(alert).toBeVisible({ timeout: 5000 });
    await expect(alert).toContainText('Trop de tentatives');
  });
});

// ─── English testimonial form ─────────────────────────────────────────────────

test.describe('English testimonial form (/en/testimonial)', () => {
  test('all required fields are present', async ({ page }) => {
    await page.goto('/en/testimonial');
    const form = page.locator('form');
    await expect(form.locator('[name="firstName"]')).toBeVisible();
    await expect(form.locator('[name="trade"]')).toBeVisible();
    await expect(form.locator('[name="city"]')).toBeVisible();
    await expect(form.locator('[name="review"]')).toBeVisible();
    await expect(form.locator('[name="consent"]')).toBeVisible();
  });

  test('successful submission shows success message in English', async ({ page }) => {
    await page.goto('/en/testimonial');
    await page.route('/api/submit-testimonial', (r) =>
      r.fulfill({ status: 200, body: JSON.stringify({ success: true }) }),
    );
    await page.fill('[name="firstName"]', 'John');
    await page.fill('[name="trade"]', 'Plumber');
    await page.fill('[name="city"]', 'Lyon');
    await page.fill('[name="review"]', 'Excellent service, fast delivery and professional website.');
    await page.check('#note-5');
    await page.check('[name="consent"]');
    await page.click('button[type="submit"]');
    const success = page.locator('.temoignage-success');
    await expect(success).toBeVisible({ timeout: 6000 });
    await expect(success).toContainText('Thank you');
  });

  test('API error → English error message shown', async ({ page }) => {
    await page.goto('/en/testimonial');
    await page.route('/api/submit-testimonial', (r) =>
      r.fulfill({ status: 429, body: JSON.stringify({ error: 'Too many attempts' }) }),
    );
    await page.fill('[name="firstName"]', 'Test');
    await page.fill('[name="trade"]', 'Electrician');
    await page.fill('[name="city"]', 'Paris');
    await page.fill('[name="review"]', 'Testing the error path here.');
    await page.check('#note-5');
    await page.check('[name="consent"]');
    await page.click('button[type="submit"]');
    const alert = page.locator('p[role="alert"]').first();
    await expect(alert).toBeVisible({ timeout: 5000 });
    await expect(alert).toContainText('Too many attempts');
  });
});

// ─── English navigation ───────────────────────────────────────────────────────

test.describe('English navigation (HeaderEn)', () => {
  test('EN nav links point to correct page URLs', async ({ page }) => {
    await page.goto('/en');
    const nav = page.locator('nav');
    const expectedLinks = [
      { label: 'Pricing', href: '/en/pricing' },
      { label: 'How it works', href: '/en/how-it-works' },
      { label: 'Reviews', href: '/en/reviews' },
      { label: 'About', href: '/en/about' },
    ];
    for (const { label, href } of expectedLinks) {
      const link = nav.getByRole('link', { name: label });
      await expect(link).toBeVisible();
      await expect(link).toHaveAttribute('href', href);
    }
  });
});

// ─── Footer ──────────────────────────────────────────────────────────────────

test.describe('Footer', () => {
  test('affiche l\'année courante', async ({ page }) => {
    await page.goto('/');
    const year = String(new Date().getFullYear());
    await expect(page.locator('.footer-bottom p')).toContainText(year);
  });

  test('lien mentions légales présent dans le footer', async ({ page }) => {
    await page.goto('/');
    // Use first() in case the link appears twice in footer columns
    await expect(page.locator('footer').getByRole('link', { name: /mentions légales/i }).first()).toBeVisible();
  });
});

// ─── OG image ────────────────────────────────────────────────────────────────
// L'Edge runtime next/og retourne ERR_EMPTY_RESPONSE dans next dev ET next start.
// Elle fonctionne uniquement sur Vercel (Edge network réel).
// Vérification manuelle : inspecter la preview Vercel après chaque deploy.

test.describe('Open Graph image', () => {
  test.skip(true, 'Edge runtime OG image non testable avec next start — vérifier sur Vercel preview');

  test('opengraph-image répond en 200 et content-type image/png', async ({ page }) => {
    const res = await page.goto('/opengraph-image');
    expect(res?.status()).toBe(200);
    const ct = res?.headers()['content-type'] ?? '';
    expect(ct).toMatch(/image\/png/);
  });
});

// ─── SEO méta tags ────────────────────────────────────────────────────────────

test.describe('SEO — title et meta description', () => {
  const pages = ['/', '/tarifs', '/faq', '/avis', '/comment-ca-marche', '/en/pricing', '/en/faq', '/en/about'];

  for (const url of pages) {
    test(`${url} — title contient "Pixeloria"`, async ({ page }) => {
      await page.goto(url);
      const title = await page.title();
      expect(title).toMatch(/Pixeloria/);
    });
  }
});

// ─── Accessibilité basique ────────────────────────────────────────────────────

test.describe('Accessibilité — landmarks et attributs', () => {
  test('homepage — landmark main présent', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('main')).toBeVisible();
  });

  test('homepage — pas d\'images sans alt', async ({ page }) => {
    await page.goto('/');
    const imgsWithoutAlt = await page.locator('img:not([alt])').count();
    expect(imgsWithoutAlt, 'Toutes les images doivent avoir un attribut alt').toBe(0);
  });

  test('homepage — lang="fr" sur html', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('html')).toHaveAttribute('lang', 'fr');
  });
});
