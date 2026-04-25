'use client';

import { useEffect, useRef, useCallback } from 'react';

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    turnstile?: {
      render: (_el: HTMLElement, _opts: {
        sitekey: string;
        callback: (_token: string) => void;
        'expired-callback': () => void;
        theme: 'light' | 'dark' | 'auto';
        size: 'normal' | 'compact';
      }) => string;
      reset: (_widgetId: string) => void;
    };
  }
}

interface Props {
  onVerify: (_token: string) => void;
  onExpire?: () => void;
}

export default function TurnstileWidget({ onVerify, onExpire }: Props) {
  const siteKey = process.env.NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY;
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef  = useRef<string | null>(null);

  const stableOnVerify = useCallback(onVerify, []); // eslint-disable-line react-hooks/exhaustive-deps
  const stableOnExpire = useCallback(() => onExpire?.(), []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!siteKey || !containerRef.current) return;

    const renderWidget = () => {
      if (!containerRef.current || !window.turnstile) return;
      widgetIdRef.current = window.turnstile.render(containerRef.current, {
        sitekey: siteKey,
        callback: stableOnVerify,
        'expired-callback': stableOnExpire,
        theme: 'light',
        size: 'normal',
      });
    };

    if (window.turnstile) {
      renderWidget();
      return;
    }

    const existing = document.querySelector('script[data-turnstile]');
    if (!existing) {
      const script = document.createElement('script');
      script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
      script.async = true;
      script.setAttribute('data-turnstile', '1');
      script.onload = renderWidget;
      document.head.appendChild(script);
    } else {
      existing.addEventListener('load', renderWidget);
    }
  }, [siteKey, stableOnVerify, stableOnExpire]);

  if (!siteKey) return null;

  return (
    <div
      ref={containerRef}
      style={{ marginTop: '0.75rem' }}
      aria-label="Vérification de sécurité"
    />
  );
}
