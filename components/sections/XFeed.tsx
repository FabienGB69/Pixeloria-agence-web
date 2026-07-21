'use client';

import { useEffect, useRef, useState } from 'react';
import Script from 'next/script';
import { useConsent } from '@/components/consent/ConsentProvider';

const X_PROFILE_URL = 'https://x.com/pixeloriaaw';
// widgets.js's legacy profile-URL parser is unreliable with x.com hrefs — use
// the twitter.com domain (still valid, redirects to the same account) only
// for the embed anchor itself so the script reliably recognizes the handle.
const X_TIMELINE_EMBED_URL = 'https://twitter.com/pixeloriaaw';
const WIDGET_LOAD_TIMEOUT_MS = 4000;

declare global {
  interface Window {
    twttr?: {
      widgets?: {
        load?: (el?: HTMLElement) => void;
      };
    };
  }
}

const COPY = {
  fr: {
    eyebrow: 'Nos actualités',
    title: 'Suivez Pixeloria sur X',
    body: 'Retrouvez nos dernières réalisations, nos conseils et nos actualités autour de la création et de la refonte de sites internet.',
    fallback: 'Découvrez les dernières actualités de Pixeloria directement sur X.',
    button: 'Voir le profil X',
    timelineAriaLabel: 'Dernières publications de Pixeloria sur X',
    timelineLinkText: 'Publications de Pixeloria sur X',
    consentPending: 'Ce contenu nécessite votre consentement pour les cookies « Réseaux sociaux ».',
    allowButton: 'Autoriser et afficher',
  },
  en: {
    eyebrow: 'Latest news',
    title: 'Follow Pixeloria on X',
    body: 'Find our latest projects, tips and news about website creation and redesign.',
    fallback: "Discover Pixeloria's latest news directly on X.",
    button: 'View X profile',
    timelineAriaLabel: 'Latest posts from Pixeloria on X',
    timelineLinkText: 'Posts from Pixeloria on X',
    consentPending: 'This content requires your consent for "Social media" cookies.',
    allowButton: 'Allow and show',
  },
} as const;

export default function XFeed({ locale = 'fr' }: { locale?: 'fr' | 'en' }) {
  const t = COPY[locale];
  const { consent, savePreferences } = useConsent();
  const socialGranted = consent?.social === true;
  const currentAnalyticsConsent = consent?.analytics ?? false;
  const [mounted, setMounted] = useState(false);
  const [scriptReady, setScriptReady] = useState(false);
  const [widgetLoaded, setWidgetLoaded] = useState(false);
  const widgetRef = useRef<HTMLDivElement | null>(null);

  // Mount flag: lets the twitter-timeline anchor render client-side only,
  // so it never exists during SSR (no server/client markup mismatch).
  useEffect(() => {
    setMounted(true);
  }, []);

  // If social consent is revoked after the widget already loaded, drop back
  // to the fallback card instead of leaving a stale "loaded" state.
  useEffect(() => {
    if (!socialGranted) {
      setScriptReady(false);
      setWidgetLoaded(false);
    }
  }, [socialGranted]);

  // Once the anchor is in the DOM and widgets.js has confirmed it's ready,
  // ask it to scan the DOM and convert the anchor into an iframe. Watch the
  // widget container for that iframe to appear; if it never does within a
  // few seconds (ad blocker, network/script failure), keep the fallback card.
  useEffect(() => {
    if (!mounted || !scriptReady || !socialGranted) return;

    window.twttr?.widgets?.load?.();

    const container = widgetRef.current;
    if (!container) return;

    const hasIframe = () => Boolean(container.querySelector('iframe'));

    if (hasIframe()) {
      setWidgetLoaded(true);
      return;
    }

    const observer = new MutationObserver(() => {
      if (hasIframe()) {
        setWidgetLoaded(true);
        observer.disconnect();
      }
    });
    observer.observe(container, { childList: true, subtree: true });

    const timeout = setTimeout(() => {
      observer.disconnect();
    }, WIDGET_LOAD_TIMEOUT_MS);

    return () => {
      observer.disconnect();
      clearTimeout(timeout);
    };
  }, [mounted, scriptReady, socialGranted]);

  const handleScriptLoad = () => {
    if (window.twttr?.widgets?.load) {
      setScriptReady(true);
    }
  };

  return (
    <section id="actualites-x" className="section x-feed-section">
      <div className="container">
        <div className="x-feed-header">
          <span className="section-eyebrow">{t.eyebrow}</span>
          <h2>{t.title}</h2>
          <p className="x-feed-sub">{t.body}</p>
        </div>

        <div className="x-feed-widget" id="x-feed-widget" ref={widgetRef}>
          {mounted && socialGranted && (
            <a
              className="twitter-timeline"
              href={X_TIMELINE_EMBED_URL}
              data-height="550"
              data-dnt="true"
              data-chrome="noheader nofooter noborders transparent"
              aria-label={t.timelineAriaLabel}
            >
              {t.timelineLinkText}
            </a>
          )}

          <div className={`x-feed-fallback${widgetLoaded ? ' x-feed-fallback--hidden' : ''}`} aria-hidden={widgetLoaded}>
            {consent === null ? (
              <>
                <p>{t.consentPending}</p>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => savePreferences({ analytics: currentAnalyticsConsent, social: true })}
                >
                  {t.allowButton}
                </button>
              </>
            ) : (
              <p>{t.fallback}</p>
            )}
          </div>
        </div>

        <div className="x-feed-actions">
          <a
            href={X_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
            aria-label={t.button}
          >
            {t.button}
          </a>
        </div>
      </div>

      {socialGranted && (
        <Script
          id="twitter-widgets"
          src="https://platform.twitter.com/widgets.js"
          strategy="lazyOnload"
          onLoad={handleScriptLoad}
          onError={() => setWidgetLoaded(false)}
        />
      )}
    </section>
  );
}
