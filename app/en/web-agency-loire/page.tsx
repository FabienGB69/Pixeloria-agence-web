import type { Metadata } from 'next';
import HeaderEn from '@/components/layout/HeaderEn';
import Footer from '@/components/layout/Footer';
import ClientEffects from '@/components/layout/ClientEffects';
import LocalAgencyPage from '@/components/sections/LocalAgencyPage';
import { LOCAL_SEO_PAGES_EN } from '@/lib/local-seo-en';
import { hreflangLanguages } from '@/lib/hreflang';

const data = LOCAL_SEO_PAGES_EN['web-agency-loire'];

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  openGraph: { type: 'website', url: 'https://pixeloria.fr/en/web-agency-loire', title: data.ogTitle, description: data.ogDescription, locale: 'en_GB', siteName: 'Pixeloria' },
  twitter: { card: 'summary_large_image', title: data.ogTitle, description: data.ogDescription },
  alternates: { canonical: 'https://pixeloria.fr/en/web-agency-loire', languages: hreflangLanguages('/en/web-agency-loire') },
};

export default function WebAgencyLoireEnPage() {
  return (
    <><ClientEffects /><HeaderEn /><main><LocalAgencyPage data={data} locale="en" /></main><Footer locale="en" /></>
  );
}
