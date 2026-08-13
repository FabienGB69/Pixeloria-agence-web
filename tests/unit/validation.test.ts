import { describe, it, expect } from 'vitest';
import { LeadSchema, safe } from '@/lib/validation';

describe('LeadSchema', () => {
  const validBase = {
    email: 'alice@test.com',
  };

  it('accepte un lead minimal (email seulement)', () => {
    const result = LeadSchema.safeParse(validBase);
    expect(result.success).toBe(true);
  });

  it('accepte un lead complet', () => {
    const result = LeadSchema.safeParse({
      prenom: 'Alice', nom: 'Martin', email: 'alice@test.com',
      company: 'Acme', offre: 'full', message: 'Test',
      phone: '0600000000', url: 'https://example.com',
      painPoints: ['slow-speed'], objectives: ['more-leads'],
      visiteurs: 5000, leads: 2,
    });
    expect(result.success).toBe(true);
  });

  it('rejette un email invalide', () => {
    const result = LeadSchema.safeParse({ email: 'pas-un-email' });
    expect(result.success).toBe(false);
    expect(result.error?.errors[0]?.message).toMatch(/email/i);
  });

  it('rejette un email vide', () => {
    const result = LeadSchema.safeParse({ email: '' });
    expect(result.success).toBe(false);
  });

  it('tronque les champs dépassant la longueur max', () => {
    const longString = 'a'.repeat(300);
    const result = LeadSchema.safeParse({ email: 'ok@test.com', prenom: longString });
    expect(result.success).toBe(false);
  });

  it('applique les valeurs par défaut', () => {
    const result = LeadSchema.safeParse({ email: 'ok@test.com' });
    if (!result.success) throw result.error;
    expect(result.data.prenom).toBe('');
    expect(result.data.painPoints).toEqual([]);
    expect(result.data.visiteurs).toBeNull();
    expect(result.data.referralCode).toBe('');
  });

  it('accepte un referralCode optionnel (issue #155)', () => {
    const result = LeadSchema.safeParse({ email: 'ok@test.com', referralCode: 'PIXELORIA-FELIADA' });
    if (!result.success) throw result.error;
    expect(result.data.referralCode).toBe('PIXELORIA-FELIADA');
  });

  it('coerce visiteurs et leads en nombre', () => {
    const result = LeadSchema.safeParse({ email: 'ok@test.com', visiteurs: '3000', leads: '5' });
    if (!result.success) throw result.error;
    expect(result.data.visiteurs).toBe(3000);
    expect(result.data.leads).toBe(5);
  });
});

describe('safe()', () => {
  it('retourne une string tronquée au max', () => {
    expect(safe('abc', 2)).toBe('ab');
  });

  it('gère undefined et null', () => {
    expect(safe(undefined, 10)).toBe('');
    expect(safe(null, 10)).toBe('');
  });

  it('trim les espaces', () => {
    expect(safe('  hello  ', 100)).toBe('hello');
  });

  it('convertit les nombres en string', () => {
    expect(safe(42, 100)).toBe('42');
  });
});
