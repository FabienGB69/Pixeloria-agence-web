'use client';

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { readConsent, writeConsent, type ConsentCategories } from '@/lib/cookie-consent';

interface ConsentContextValue {
  consent: ConsentCategories | null; // null = l'utilisateur n'a pas encore choisi
  hasChosen: boolean;
  bannerOpen: boolean; // si la bannière/panneau doit être visible actuellement
  acceptAll: () => void;
  rejectAll: () => void;
  savePreferences: (prefs: { analytics: boolean; social: boolean }) => void;
  openSettings: () => void;
}

const ConsentContext = createContext<ConsentContextValue | null>(null);

export function ConsentProvider({ children }: { children: ReactNode }) {
  const [consent, setConsent] = useState<ConsentCategories | null>(null);
  const [hasChosen, setHasChosen] = useState(false);
  // Defaults to open (shown during SSR / before hydration) so the banner's
  // static markup is always present in the server-rendered HTML — the mount
  // effect below closes it immediately if a prior choice is already stored.
  const [bannerOpen, setBannerOpen] = useState(true);

  useEffect(() => {
    const existing = readConsent();
    if (existing) {
      setConsent(existing);
      setHasChosen(true);
      setBannerOpen(false);
    } else {
      setBannerOpen(true);
    }
  }, []);

  const acceptAll = () => {
    const next: ConsentCategories = { necessary: true, analytics: true, social: true };
    writeConsent({ analytics: true, social: true });
    setConsent(next);
    setHasChosen(true);
    setBannerOpen(false);
  };

  const rejectAll = () => {
    const next: ConsentCategories = { necessary: true, analytics: false, social: false };
    writeConsent({ analytics: false, social: false });
    setConsent(next);
    setHasChosen(true);
    setBannerOpen(false);
  };

  const savePreferences = (prefs: { analytics: boolean; social: boolean }) => {
    const next: ConsentCategories = { necessary: true, analytics: prefs.analytics, social: prefs.social };
    writeConsent(prefs);
    setConsent(next);
    setHasChosen(true);
    setBannerOpen(false);
  };

  const openSettings = () => {
    setBannerOpen(true);
  };

  const value = useMemo<ConsentContextValue>(
    () => ({ consent, hasChosen, bannerOpen, acceptAll, rejectAll, savePreferences, openSettings }),
    [consent, hasChosen, bannerOpen]
  );

  return <ConsentContext.Provider value={value}>{children}</ConsentContext.Provider>;
}

export function useConsent(): ConsentContextValue {
  const ctx = useContext(ConsentContext);
  if (!ctx) {
    throw new Error('useConsent must be used within a ConsentProvider');
  }
  return ctx;
}
