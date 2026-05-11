import type { Metadata } from 'next';
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/react';
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
  title: {
    default: 'Pixeloria — Agence Web pour Artisans & PME',
    template: '%s | Pixeloria',
  },
  description:
    'Des sites qui amènent des clients. Création et refonte de sites web pour artisans et PME. Offres à partir de 89€/mois.',
  metadataBase: new URL('https://pixeloria.fr'),
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://pixeloria.fr',
    siteName: 'Pixeloria',
    title: 'Pixeloria — Agence Web pour Artisans & PME',
    description: 'Des sites qui amènent des clients. Création et refonte de sites web pour artisans et PME.',
    images: [{ url: '/assets/pixeloria-logo.svg', width: 1200, height: 630, alt: 'Pixeloria' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pixeloria — Agence Web pour Artisans & PME',
    description: 'Des sites qui amènent des clients. Création et refonte de sites web pour artisans et PME.',
  },
  robots: { index: true, follow: true },
};

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${playfair.variable} ${jakarta.variable}`}>
      <head>
        {GTM_ID && (
          <Script id="gtm-head" strategy="afterInteractive">{`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `}</Script>
        )}
      </head>
      <body>
        {GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        )}
        {children}
        <Analytics />
      </body>
    </html>
  );
}
