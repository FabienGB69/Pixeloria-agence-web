/**
 * middleware.ts — Next.js Edge Middleware for /api/* routes
 *
 * Responsibilities (in order):
 *  1. Block disallowed HTTP methods on /api/* → 405
 *  2. Handle CORS preflight (OPTIONS) → 200
 *  3. Attach CORS headers to every API response
 *  4. Attach security headers (defense-in-depth, redundant with next.config.mjs)
 *
 * Constraints:
 *  - No I/O, no DB calls — stays well under 50 ms
 *  - Rate limiting stays in individual route handlers (in-memory, per instance)
 */

import { NextRequest, NextResponse } from 'next/server';

const ALLOWED_METHODS = ['GET', 'POST', 'OPTIONS'];

/** Security headers added to every API response (defense-in-depth). */
const SECURITY_HEADERS: Record<string, string> = {
  'X-Frame-Options': 'DENY',
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
};

function getAllowedOrigin(): string {
  return process.env.ALLOWED_ORIGIN ?? '*';
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

export function middleware(req: NextRequest): NextResponse {
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
  matcher: ['/api/:path*'],
};
