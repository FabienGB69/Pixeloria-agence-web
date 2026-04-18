import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://pixeloria.fr', lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: 'https://pixeloria.fr/refonte', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
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
