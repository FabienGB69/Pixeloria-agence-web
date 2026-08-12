import { describe, it, expect } from 'vitest';
import { breadcrumbList } from '@/lib/breadcrumb';

describe('lib/breadcrumb', () => {
  it('builds a valid schema.org BreadcrumbList', () => {
    const schema = breadcrumbList([
      { name: 'Home', url: 'https://pixeloria.fr/en' },
      { name: 'Resources', url: 'https://pixeloria.fr/en/resources' },
    ]);
    expect(schema['@context']).toBe('https://schema.org');
    expect(schema['@type']).toBe('BreadcrumbList');
    expect(schema.itemListElement).toHaveLength(2);
  });

  it('assigns a 1-indexed position to each item, in order', () => {
    const schema = breadcrumbList([
      { name: 'Home', url: 'https://pixeloria.fr/en' },
      { name: 'Resources', url: 'https://pixeloria.fr/en/resources' },
      { name: 'Contractor Website Cost', url: 'https://pixeloria.fr/en/resources/contractor-website-cost' },
    ]);
    expect(schema.itemListElement.map((i) => i.position)).toEqual([1, 2, 3]);
  });

  it('maps name/url onto each ListItem', () => {
    const schema = breadcrumbList([{ name: 'Home', url: 'https://pixeloria.fr/' }]);
    expect(schema.itemListElement[0]).toEqual({
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://pixeloria.fr/',
    });
  });

  it('returns an empty itemListElement for an empty input', () => {
    expect(breadcrumbList([]).itemListElement).toEqual([]);
  });
});
