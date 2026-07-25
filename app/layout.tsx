import type { Metadata } from 'next';
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { ConsentProvider } from '@/components/consent/ConsentProvider';
import CookieBanner from '@/components/consent/CookieBanner';
import AnalyticsScripts from '@/components/consent/AnalyticsScripts';
import HtmlLangSync from '@/components/layout/HtmlLangSync';
import '../styles.css';        // composants hérités (header, nav, sections, forms…)
import '@/styles/globals.css'; // tokens sober theme — écrase les anciens `:root`

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['700'],
  display: 'swap',
  variable: '--font-serif',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  preload: true,
  variable: '--font-sans',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://pixeloria.fr'),
  title: 'Pixeloria — Création & refonte de sites internet pour artisans et TPE',
  description:
    'Pixeloria accompagne les artisans et TPE dans la création ou la refonte de sites internet professionnels, rapides, modernes et optimisés pour le SEO.',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://pixeloria.fr',
    siteName: 'Pixeloria',
    title: 'Pixeloria — Création & refonte de sites internet pour artisans et TPE',
    description:
      'Pixeloria crée des sites internet professionnels pour artisans et TPE. Site Artisan à 199 € TTC, livré sous 72h. Bouton téléphone, WhatsApp, formulaire de devis, SEO local inclus.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pixeloria — Création & refonte de sites internet pour artisans et TPE',
    description:
      'Sites internet professionnels pour artisans et TPE. Création, refonte, maintenance et SEO.',
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icon.png', sizes: '512x512', type: 'image/png' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
};

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID ?? 'GTM-KSBHH2Q7';
const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? 'G-2GWMB0T4FG';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${playfair.variable} ${jakarta.variable}`}>
      <body>
        <HtmlLangSync />
        <ConsentProvider>
          <AnalyticsScripts gtmId={GTM_ID} gaId={GA_ID} />
          {children}
          <CookieBanner />
        </ConsentProvider>
        <Analytics />
      </body>
    </html>
  );
}
