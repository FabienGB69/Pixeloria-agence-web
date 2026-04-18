import { describe, it, expect, vi, beforeEach } from 'vitest';
import { isHoneypot, verifyTurnstile } from '@/lib/security';

describe('isHoneypot()', () => {
  it('retourne false si _hp est vide', () => {
    expect(isHoneypot({ _hp: '' })).toBe(false);
  });

  it('retourne false si _hp est absent', () => {
    expect(isHoneypot({})).toBe(false);
  });

  it('retourne true si _hp contient du texte (bot)', () => {
    expect(isHoneypot({ _hp: 'je-suis-un-bot' })).toBe(true);
  });

  it('retourne false si _hp est un nombre', () => {
    expect(isHoneypot({ _hp: 0 })).toBe(false);
  });
});

describe('verifyTurnstile()', () => {
  beforeEach(() => {
    delete process.env.CLOUDFLARE_TURNSTILE_SECRET_KEY;
    vi.restoreAllMocks();
  });

  it('retourne true si la clé secrète n\'est pas configurée', async () => {
    const ok = await verifyTurnstile('some-token');
    expect(ok).toBe(true);
  });

  it('retourne false si token absent et clé configurée', async () => {
    process.env.CLOUDFLARE_TURNSTILE_SECRET_KEY = 'test-secret';
    const ok = await verifyTurnstile(undefined);
    expect(ok).toBe(false);
  });

  it('retourne true si Cloudflare valide le token', async () => {
    process.env.CLOUDFLARE_TURNSTILE_SECRET_KEY = 'test-secret';
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
      json: async () => ({ success: true }),
    }));
    const ok = await verifyTurnstile('valid-token');
    expect(ok).toBe(true);
  });

  it('retourne false si Cloudflare rejette le token', async () => {
    process.env.CLOUDFLARE_TURNSTILE_SECRET_KEY = 'test-secret';
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
      json: async () => ({ success: false }),
    }));
    const ok = await verifyTurnstile('bad-token');
    expect(ok).toBe(false);
  });

  it('retourne true si le fetch échoue (fail-open)', async () => {
    process.env.CLOUDFLARE_TURNSTILE_SECRET_KEY = 'test-secret';
    vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new Error('Network error')));
    const ok = await verifyTurnstile('token');
    expect(ok).toBe(true);
  });
});
