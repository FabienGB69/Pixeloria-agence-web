import { describe, it, expect } from 'vitest';
import { escapeHtml } from '@/lib/html';
import { buildConfirmationHtml } from '@/lib/resend';

describe('lib/html — escapeHtml', () => {
  it('échappe les caractères HTML sensibles', () => {
    expect(escapeHtml('<script>alert(1)</script>')).toBe(
      '&lt;script&gt;alert(1)&lt;/script&gt;'
    );
  });

  it('échappe guillemets et apostrophes', () => {
    expect(escapeHtml(`"quoted" & 'single'`)).toBe(
      '&quot;quoted&quot; &amp; &#39;single&#39;'
    );
  });

  it('laisse intact un texte sans caractère spécial', () => {
    expect(escapeHtml('Alice Martin')).toBe('Alice Martin');
  });
});

describe('lib/resend — buildConfirmationHtml', () => {
  it('échappe un prenom contenant du HTML malveillant', () => {
    const html = buildConfirmationHtml('<script>alert(1)</script>', 'Non précisé');
    expect(html).not.toContain('<script>alert(1)</script>');
    expect(html).toContain('&lt;script&gt;alert(1)&lt;/script&gt;');
  });

  it('échappe un offreLabel contenant du HTML malveillant', () => {
    const html = buildConfirmationHtml('Alice', '<img src=x onerror=alert(1)>');
    expect(html).not.toContain('<img src=x onerror=alert(1)>');
    expect(html).toContain('&lt;img src=x onerror=alert(1)&gt;');
  });

  it('rendu normal reste inchangé pour un payload sans caractère spécial', () => {
    const html = buildConfirmationHtml('Alice', 'Site Artisan 199 € TTC');
    expect(html).toContain('Bonjour Alice,');
    expect(html).toContain('Site Artisan 199 € TTC');
  });
});
