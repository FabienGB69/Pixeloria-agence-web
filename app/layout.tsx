import type { Metadata } from 'next';
import '@/styles/globals.css';

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
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
