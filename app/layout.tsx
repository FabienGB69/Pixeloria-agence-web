import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import '@/styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-inter',
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
    <html lang="fr" className={inter.variable}>
      <body>{children}<Analytics /></body>
    </html>
  );
}
