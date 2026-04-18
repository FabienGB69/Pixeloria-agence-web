import type { Metadata } from 'next';
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import '../styles.css';        // composants hérités (header, nav, sections, forms…)
import '@/styles/globals.css'; // tokens sober theme — écrase les anciens `:root`

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-serif',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: {
    default: 'Pixeloria — Agence Web pour Artisans & PME',
    template: '%s | Pixeloria',
  },
  description:
    'Des sites qui amènent des clients. Création et refonte de sites web pour artisans et PME. Offres à partir de 49€/mois.',
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${playfair.variable} ${jakarta.variable}`}>
      <body>{children}<Analytics /></body>
    </html>
  );
}
