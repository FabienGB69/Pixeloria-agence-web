import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ClientEffects from '@/components/layout/ClientEffects';
import LocalAgencyPage from '@/components/sections/LocalAgencyPage';
import { LOCAL_SEO_PAGES } from '@/lib/local-seo';
import { hreflangLanguages } from '@/lib/hreflang';

const data = LOCAL_SEO_PAGES['agence-web-loire'];

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  openGraph: { type: 'website', url: 'https://pixeloria.fr/agence-web-loire', title: data.ogTitle, description: data.ogDescription, locale: 'fr_FR', siteName: 'Pixeloria' },
  twitter: { card: 'summary_large_image', title: data.ogTitle, description: data.ogDescription },
  alternates: { canonical: 'https://pixeloria.fr/agence-web-loire', languages: hreflangLanguages('/agence-web-loire') },
};

export default function AgenceWebLoirePage() {
  return (
    <><ClientEffects /><Header /><main><LocalAgencyPage data={data} /></main><Footer /></>
  );
}
