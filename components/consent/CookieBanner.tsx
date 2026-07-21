'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useConsent } from './ConsentProvider';

const COPY = {
  fr: {
    text: "Nous utilisons des cookies pour mesurer l'audience du site et afficher certains contenus (réseaux sociaux). Vous pouvez accepter, refuser ou personnaliser vos choix.",
    moreLink: 'en savoir plus',
    acceptAll: 'Tout accepter',
    rejectAll: 'Tout refuser',
    customize: 'Personnaliser',
    necessary: 'Nécessaires',
    necessaryHint: '(toujours actifs)',
    analytics: "Mesure d'audience",
    social: 'Réseaux sociaux',
    save: 'Enregistrer mes choix',
  },
  en: {
    text: 'We use cookies to measure site traffic and to display some content (social media). You can accept, reject or customize your choices.',
    moreLink: 'learn more',
    acceptAll: 'Accept all',
    rejectAll: 'Reject all',
    customize: 'Customize',
    necessary: 'Necessary',
    necessaryHint: '(always active)',
    analytics: 'Audience measurement',
    social: 'Social media',
    save: 'Save my choices',
  },
} as const;

export default function CookieBanner() {
  const pathname = usePathname();
  const locale = pathname?.startsWith('/en') ? 'en' : 'fr';
  const t = COPY[locale];
  const { bannerOpen, consent, acceptAll, rejectAll, savePreferences } = useConsent();

  const [expanded, setExpanded] = useState(false);
  const [analyticsChecked, setAnalyticsChecked] = useState(false);
  const [socialChecked, setSocialChecked] = useState(false);
  const innerRef = useRef<HTMLDivElement>(null);

  // Re-sync the panel's checkboxes with the current stored consent every time
  // the banner is (re)opened, so "manage cookies" reflects the real state.
  useEffect(() => {
    if (bannerOpen) {
      setAnalyticsChecked(consent?.analytics ?? false);
      setSocialChecked(consent?.social ?? false);
    }
  }, [bannerOpen, consent]);

  // The banner is fixed to the bottom of the viewport, and its visible card
  // has pointer-events:auto (needed for its own buttons). On short pages —
  // e.g. a form whose submit button sits near the bottom of the viewport —
  // it would otherwise physically overlap and block clicks on that content.
  // Reserve matching space at the bottom of the page while it's open/resizing
  // (its height changes when "Personnaliser" expands), so nothing underneath
  // is ever covered.
  useEffect(() => {
    if (!bannerOpen) {
      document.body.style.paddingBottom = '';
      return;
    }

    const el = innerRef.current;
    if (!el) return;

    const updatePadding = () => {
      document.body.style.paddingBottom = `${el.offsetHeight}px`;
    };
    updatePadding();

    const observer = new ResizeObserver(updatePadding);
    observer.observe(el);

    return () => {
      observer.disconnect();
      document.body.style.paddingBottom = '';
    };
  }, [bannerOpen, expanded]);

  if (!bannerOpen) return null;

  return (
    <div className="cookie-banner" role="region" aria-label={locale === 'en' ? 'Cookie consent' : 'Consentement aux cookies'}>
      <div className="cookie-banner-inner" ref={innerRef}>
        <p className="cookie-banner-text">
          {t.text}{' '}
          <Link href="/politique-confidentialite#cookies">{t.moreLink}</Link>
        </p>

        <div className="cookie-banner-actions">
          <button type="button" className="btn btn-secondary" onClick={() => setExpanded((v) => !v)}>
            {t.customize}
          </button>
          <button type="button" className="btn btn-secondary" onClick={rejectAll}>
            {t.rejectAll}
          </button>
          <button type="button" className="btn btn-primary" onClick={acceptAll}>
            {t.acceptAll}
          </button>
        </div>

        {expanded && (
          <div className="cookie-banner-panel">
            <label className="cookie-banner-option">
              <input type="checkbox" checked disabled readOnly />
              <span>
                {t.necessary} <em>{t.necessaryHint}</em>
              </span>
            </label>

            <label className="cookie-banner-option">
              <input
                type="checkbox"
                checked={analyticsChecked}
                onChange={(e) => setAnalyticsChecked(e.target.checked)}
              />
              <span>{t.analytics}</span>
            </label>

            <label className="cookie-banner-option">
              <input
                type="checkbox"
                checked={socialChecked}
                onChange={(e) => setSocialChecked(e.target.checked)}
              />
              <span>{t.social}</span>
            </label>

            <button
              type="button"
              className="btn btn-primary cookie-banner-save"
              onClick={() => savePreferences({ analytics: analyticsChecked, social: socialChecked })}
            >
              {t.save}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
