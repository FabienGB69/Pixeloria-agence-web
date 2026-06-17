import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Website Design for Small Businesses, Contractors & Local Brands | Pixeloria',
  description:
    'Pixeloria helps tradespeople, micro-businesses and SMEs get a clear, effective website to receive more quote requests. Artisan Site at €199 inc. VAT, delivered in 72h. Visibility Option at €49/month.',
  metadataBase: new URL('https://pixeloria.fr'),
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://pixeloria.fr/en',
    siteName: 'Pixeloria',
    title: 'Website Design for Small Businesses, Contractors & Local Brands | Pixeloria',
    description:
      'Pixeloria helps tradespeople, micro-businesses and SMEs get a clear, effective website to receive more quote requests. Artisan Site at €199 inc. VAT, delivered in 72h. Visibility Option at €49/month.',
    images: [
      {
        url: '/og/pixeloria-og-image.png',
        width: 1200,
        height: 630,
        alt: 'Pixeloria — Professional website design for small businesses and local brands',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website Design for Small Businesses, Contractors & Local Brands | Pixeloria',
    description:
      'Pixeloria helps tradespeople, micro-businesses and SMEs get a clear, effective website to receive more quote requests. Artisan Site at €199 inc. VAT, delivered in 72h. Visibility Option at €49/month.',
    images: ['/og/pixeloria-og-image.png'],
  },
  alternates: {
    canonical: 'https://pixeloria.fr/en',
    languages: {
      fr: 'https://pixeloria.fr',
      en: 'https://pixeloria.fr/en',
      'x-default': 'https://pixeloria.fr',
    },
  },
  robots: { index: true, follow: true },
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
