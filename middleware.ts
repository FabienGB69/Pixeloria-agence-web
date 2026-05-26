/**
 * middleware.ts — Next.js Edge Middleware
 *
 * Responsibilities (in order):
 *  1. Language detection on '/' — redirect to /en if browser prefers English
 *     and no lang-pref cookie is set. Handles ?setlang=fr to reset preference.
 *  2. Block disallowed HTTP methods on /api/* → 405
 *  3. Handle CORS preflight (OPTIONS) → 200
 *  4. Attach CORS headers to every API response
 *  5. Attach security headers (defense-in-depth, redundant with next.config.mjs)
 *
 * Constraints:
 *  - No I/O, no DB calls — stays well under 50 ms
 *  - Rate limiting stays in individual route handlers (in-memory, per instance)
 */

import { NextRequest, NextResponse } from 'next/server';

const ALLOWED_METHODS = ['GET', 'POST', 'OPTIONS'];
const LANG_COOKIE = 'lang-pref';
const COOKIE_MAX_AGE = 60 * 60 * 24 * 30; // 30 days

/** Security headers added to every API response (defense-in-depth). */
const SECURITY_HEADERS: Record<string, string> = {
  'X-Frame-Options': 'DENY',
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
};

function getAllowedOrigin(): string {
  return process.env.ALLOWED_ORIGIN ?? 'https://pixeloria.fr';
}

/**
 * Attach CORS + security headers to a response object in-place.
 * Returns the mutated response for chaining.
 */
function applyHeaders(response: NextResponse, origin: string): NextResponse {
  // CORS
  response.headers.set('Access-Control-Allow-Origin', origin);
  response.headers.set('Access-Control-Allow-Methods', ALLOWED_METHODS.join(', '));
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type');

  // Security (redundant with next.config.mjs — defense in depth)
  for (const [key, value] of Object.entries(SECURITY_HEADERS)) {
    response.headers.set(key, value);
  }

  return response;
}

/**
 * Extract the primary language tag from an Accept-Language header value.
 * e.g. "en-GB,en;q=0.9,fr;q=0.8" → "en"
 */
function getPrimaryLang(acceptLang: string): string {
  return acceptLang.split(',')[0].split('-')[0].toLowerCase().trim();
}

export function middleware(req: NextRequest): NextResponse {
  const { pathname } = req.nextUrl;

  // ─── Language detection — root route only ─────────────────────────────────
  if (pathname === '/') {
    const setlang = req.nextUrl.searchParams.get('setlang');

    // ?setlang=fr  → user clicked 🇫🇷 in EN header; memorise FR preference
    if (setlang === 'fr') {
      const url = new URL(req.url);
      url.searchParams.delete('setlang');
      const res = NextResponse.redirect(url);
      res.cookies.set(LANG_COOKIE, 'fr', { maxAge: COOKIE_MAX_AGE, path: '/' });
      return res;
    }

    // Auto-detect: redirect to /en when browser language is English
    // and the user has not already expressed a preference
    const langCookie = req.cookies.get(LANG_COOKIE)?.value;
    if (!langCookie) {
      const acceptLang = req.headers.get('accept-language') ?? '';
      if (getPrimaryLang(acceptLang) === 'en') {
        const res = NextResponse.redirect(new URL('/en', req.url));
        res.cookies.set(LANG_COOKIE, 'en', { maxAge: COOKIE_MAX_AGE, path: '/' });
        return res;
      }
    }

    return NextResponse.next();
  }

  // ─── API route handling ───────────────────────────────────────────────────
  const method = req.method.toUpperCase();
  const origin = getAllowedOrigin();

  // 1. Block methods that are not in the allowlist
  if (!ALLOWED_METHODS.includes(method)) {
    const res = new NextResponse(null, {
      status: 405,
      statusText: 'Method Not Allowed',
      headers: { Allow: ALLOWED_METHODS.join(', ') },
    });
    return applyHeaders(res, origin);
  }

  // 2. CORS preflight — respond immediately without hitting the route handler
  if (method === 'OPTIONS') {
    const res = new NextResponse(null, { status: 200 });
    return applyHeaders(res, origin);
  }

  // 3. Pass-through for GET / POST — attach headers and let the request continue
  const res = NextResponse.next();
  return applyHeaders(res, origin);
}

export const config = {
  matcher: ['/', '/api/:path*'],
};
