'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * app/layout.tsx defines a single <html> tag shared by every route (French
 * and English), so its `lang` attribute can't vary per-page at the server-render
 * level in Next.js App Router without a larger route-group restructuring.
 * This corrects it client-side on mount and on every navigation instead —
 * cheap, matches the pathname-based locale detection already used by
 * CookieBanner/XFeed, and fixes the attribute for screen readers and any
 * crawler that executes JS (which includes Googlebot).
 */
export default function HtmlLangSync() {
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.lang = pathname?.startsWith('/en') ? 'en' : 'fr';
  }, [pathname]);

  return null;
}
