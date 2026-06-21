/**
 * lib/security.ts — Couche sécurité API
 * Honeypot · Turnstile (Cloudflare) · Rate limiting (Upstash Redis avec fallback in-memory)
 */

import { Ratelimit } from '@upstash/ratelimit';
import { Redis }     from '@upstash/redis';

// ─── Honeypot ─────────────────────────────────────────────────────────────────
// Champ caché rempli uniquement par les bots. Si présent → rejeter silencieusement.

export function isHoneypot(body: Record<string, unknown>): boolean {
  const val = body['_hp'];
  return typeof val === 'string' && val.length > 0;
}

// ─── Cloudflare Turnstile ─────────────────────────────────────────────────────
// Vérification serveur du token Turnstile.
// Si CLOUDFLARE_TURNSTILE_SECRET_KEY absent → skip (dégradation gracieuse).

export async function verifyTurnstile(token: string | undefined): Promise<boolean> {
  const secret = process.env.CLOUDFLARE_TURNSTILE_SECRET_KEY;
  if (!secret) return true; // non configuré → pas de blocage

  if (!token) return false;

  try {
    const res = await fetch(
      'https://challenges.cloudflare.com/turnstile/v0/siteverify',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ secret, response: token }),
      }
    );
    const data = (await res.json()) as { success: boolean };
    return data.success === true;
  } catch {
    // En cas d'erreur réseau → ne pas bloquer
    return true;
  }
}

// ─── Rate limiting ────────────────────────────────────────────────────────────
// Upstash Redis si UPSTASH_REDIS_REST_URL configuré, sinon fallback in-memory.
// Limite : 5 requêtes / 10 minutes / IP.

interface RateEntry { count: number; start: number }
const RATE_MAP   = new Map<string, RateEntry>();
const RATE_LIMIT  = 5;
const RATE_WINDOW = 10 * 60 * 1000;

function inMemoryRateLimit(key: string): boolean {
  const now   = Date.now();
  const entry = RATE_MAP.get(key) ?? { count: 0, start: now };
  if (now - entry.start > RATE_WINDOW) {
    RATE_MAP.set(key, { count: 1, start: now });
    return false;
  }
  if (entry.count >= RATE_LIMIT) return true;
  entry.count += 1;
  RATE_MAP.set(key, entry);
  return false;
}

const upstashLimiters = new Map<string, Ratelimit>();

function getUpstashLimiter(prefix: string): Ratelimit | null {
  if (!process.env.UPSTASH_REDIS_REST_URL || !process.env.UPSTASH_REDIS_REST_TOKEN) {
    return null;
  }
  if (!upstashLimiters.has(prefix)) {
    upstashLimiters.set(prefix, new Ratelimit({
      redis:   Redis.fromEnv(),
      limiter: Ratelimit.slidingWindow(RATE_LIMIT, '10 m'),
      prefix,
    }));
  }
  return upstashLimiters.get(prefix)!;
}

/**
 * Check rate limit for a given IP and route identifier.
 * The `route` parameter prevents cross-route rate limit sharing
 * (e.g. submitting the lead form 5× should not lock the testimonial form).
 */
export async function checkRateLimit(ip: string, route = 'default'): Promise<boolean> {
  const key    = `${route}:${ip}`;
  const limiter = getUpstashLimiter(`pixeloria:rl:${route}`);
  if (limiter) {
    const { success } = await limiter.limit(ip);
    return !success; // true = limité
  }
  return inMemoryRateLimit(key);
}
