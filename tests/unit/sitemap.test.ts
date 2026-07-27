import { describe, it, expect } from 'vitest';
import sitemap from '@/app/sitemap';

describe('app/sitemap — noindex pages must not be listed', () => {
  it('does not include /en/testimonial (robots: { index: false })', () => {
    const urls = sitemap().map((entry) => entry.url);
    expect(urls).not.toContain('https://pixeloria.fr/en/testimonial');
  });

  it('does not include /temoignage (robots: noindex)', () => {
    const urls = sitemap().map((entry) => entry.url);
    expect(urls).not.toContain('https://pixeloria.fr/temoignage');
  });
});
