import { describe, it, expect } from 'vitest';
import { OFFERS, OFFER_ORDER, OFFRE_LABELS } from '@/lib/pricing';
import { industryPages } from '@/lib/industry-pages';

describe('lib/pricing — catalogue unique', () => {
  it('déclare exactement le catalogue publié (Site Artisan 199€ + Option Visibilité 49€/mois)', () => {
    expect(OFFERS['site-artisan'].price).toBe('199 € TTC');
    expect(OFFERS['option-visibilite'].price).toBe('49 € / mois');
  });

  it('OFFER_ORDER ne référence que des offres déclarées dans OFFERS', () => {
    for (const id of OFFER_ORDER) {
      expect(OFFERS[id]).toBeDefined();
    }
  });

  it('OFFRE_LABELS (labels Notion) pointe vers les libellés canoniques', () => {
    expect(OFFRE_LABELS['site-artisan']).toBe(OFFERS['site-artisan'].notionLabel);
    expect(OFFRE_LABELS['option-visibilite']).toBe(OFFERS['option-visibilite'].notionLabel);
    // Alias historiques (payloads/tests déjà en circulation)
    expect(OFFRE_LABELS.oneshot).toBe(OFFERS['site-artisan'].notionLabel);
    expect(OFFRE_LABELS.abo).toBe(OFFERS['option-visibilite'].notionLabel);
    expect(OFFRE_LABELS.maintenance).toBe(OFFERS['option-visibilite'].notionLabel);
  });

  it('aucun libellé Notion ne référence un pricing obsolète (490€, 89€/mois, 159€/mois)', () => {
    const labels = Object.values(OFFRE_LABELS);
    for (const label of labels) {
      expect(label).not.toMatch(/490\s*€/);
      expect(label).not.toMatch(/89\s*€/);
      expect(label).not.toMatch(/159\s*€/);
    }
  });

  it('lib/industry-pages.ts ne référence que des offres du catalogue publié', () => {
    const validOffers = new Set(OFFER_ORDER.map((id) => OFFERS[id].title));
    for (const page of industryPages) {
      expect(validOffers.has(page.recommendedOffer)).toBe(true);
    }
  });

  it('lib/industry-pages.ts ne contient aucun prix obsolète', () => {
    for (const page of industryPages) {
      expect(page.recommendedPrice).not.toMatch(/490\s*€/);
      expect(page.recommendedPrice).not.toMatch(/89\s*€/);
      expect(page.recommendedPrice).not.toMatch(/159\s*€/);
      expect(page.offerReason).not.toMatch(/Site (Essentiel|Sérénité|Croissance)/);
    }
  });
});
