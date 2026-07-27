'use client';

import { usePathname } from 'next/navigation';

/**
 * Most page.tsx files render exactly one <main> (with inconsistent or absent
 * ids), so the skip target is resolved at click-time against the first
 * <main> in the DOM rather than requiring a fixed #main-content id on 80+
 * page files. A few routes (/parrainage, /en/parrainage, /temoignage) render
 * no <main> at all — fall back to the first <h1>, which every page has.
 */
function focusMain(e: React.MouseEvent<HTMLAnchorElement>) {
  e.preventDefault();
  const target = document.querySelector('main') ?? document.querySelector('h1');
  if (!target) return;
  if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
  target.focus();
  target.scrollIntoView();
}

export default function SkipLink() {
  const pathname = usePathname();
  const isEn = pathname?.startsWith('/en') ?? false;

  return (
    <a href="#main-content" className="skip-link" onClick={focusMain}>
      {isEn ? 'Skip to main content' : 'Aller au contenu principal'}
    </a>
  );
}
