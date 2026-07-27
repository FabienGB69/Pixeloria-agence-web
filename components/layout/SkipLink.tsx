'use client';

import { usePathname } from 'next/navigation';

/**
 * Every page.tsx already renders exactly one <main> (with inconsistent or
 * absent ids), so the skip target is resolved at click-time against the
 * first <main> in the DOM rather than requiring a fixed #main-content id
 * on 80+ page files.
 */
function focusMain(e: React.MouseEvent<HTMLAnchorElement>) {
  e.preventDefault();
  const main = document.querySelector('main');
  if (!main) return;
  if (!main.hasAttribute('tabindex')) main.setAttribute('tabindex', '-1');
  main.focus();
  main.scrollIntoView();
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
