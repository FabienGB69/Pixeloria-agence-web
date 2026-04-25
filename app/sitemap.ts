import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://pixeloria.fr', lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: 'https://pixeloria.fr/offres', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://pixeloria.fr/creation-site-internet-artisan', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: 'https://pixeloria.fr/creation-site-internet-tpe-pme', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: 'https://pixeloria.fr/refonte-site-internet', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: 'https://pixeloria.fr/maintenance-site-web', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://pixeloria.fr/seo-local', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://pixeloria.fr/realisations', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://pixeloria.fr/refonte', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: 'https://pixeloria.fr/politique-confidentialite', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: 'https://pixeloria.fr/agence-web-drome', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://pixeloria.fr/agence-web-ardeche', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://pixeloria.fr/agence-web-isere', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://pixeloria.fr/agence-web-rhone', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://pixeloria.fr/agence-web-ain', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://pixeloria.fr/agence-web-loire', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://pixeloria.fr/agence-web-savoie', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://pixeloria.fr/agence-web-haute-savoie', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
  ];
}
