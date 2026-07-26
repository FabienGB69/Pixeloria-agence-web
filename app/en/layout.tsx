import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contractor Websites That Generate More Leads | Pixeloria',
  description:
    'Pixeloria builds fast, conversion-focused websites for roofing contractors and local service businesses. Get more calls, estimate requests and qualified leads.',
  metadataBase: new URL('https://pixeloria.fr'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://pixeloria.fr/en',
    siteName: 'Pixeloria',
    title: 'Contractor Websites That Generate More Leads | Pixeloria',
    description:
      'Pixeloria builds fast, conversion-focused websites for roofing contractors and local service businesses. Get more calls, estimate requests and qualified leads.',
    images: [
      {
        url: '/og/pixeloria-og-image.png',
        width: 1200,
        height: 630,
        alt: 'Pixeloria — Websites for contractors and local service businesses',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contractor Websites That Generate More Leads | Pixeloria',
    description:
      'Pixeloria builds fast, conversion-focused websites for roofing contractors and local service businesses. Get more calls, estimate requests and qualified leads.',
    images: ['/og/pixeloria-og-image.png'],
  },
  alternates: {
    canonical: 'https://pixeloria.fr/en',
    languages: {
      'fr-FR': 'https://pixeloria.fr/',
      'en-US': 'https://pixeloria.fr/en',
      'x-default': 'https://pixeloria.fr/en',
    },
  },
  robots: { index: true, follow: true },
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
