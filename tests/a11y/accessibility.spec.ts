import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const pages = [
  { name: 'Accueil', path: '/' },
  { name: 'Refonte', path: '/refonte' },
  { name: 'Mentions légales', path: '/mentions-legales' },
  { name: 'CGV', path: '/cgv' },
  { name: 'CGU', path: '/cgu' },
  { name: '404', path: '/cette-page-n-existe-pas' },
];

for (const { name, path } of pages) {
  test(`${name} — WCAG 2.1 AA (axe-core)`, async ({ page }) => {
    await page.goto(path);
    await page.waitForLoadState('domcontentloaded');

    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
      .exclude('#cursor, #cursor-follower') // custom cursor — decorative
      .analyze();

    expect(results.violations).toEqual([]);
  });
}
