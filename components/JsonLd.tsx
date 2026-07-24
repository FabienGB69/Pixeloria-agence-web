interface JsonLdProps {
  type?: 'home' | 'refonte' | 'creation';
}

export default function JsonLd({ type = 'home' }: JsonLdProps) {
  if (type === 'refonte' || type === 'creation') {
    const serviceSchema = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Audit & Refonte de Site Web',
      provider: {
        '@type': 'Organization',
        name: 'Pixeloria',
        url: 'https://pixeloria.fr',
      },
      description: 'Audit gratuit et refonte de site web pour artisans et TPE.',
    };

    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    );
  }

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Pixeloria',
    url: 'https://pixeloria.fr',
    logo: 'https://pixeloria.fr/assets/pixeloria-logo.svg',
    image: 'https://pixeloria.fr/assets/pixeloria-logo.svg',
    description: 'Création et refonte de sites internet pour artisans, TPE et entreprises locales.',
    telephone: '+33786125313',
    email: 'contact@pixeloria.fr',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '61 C Avenue Gabriel Péri',
      addressLocality: 'Tain-l\'Hermitage',
      postalCode: '26600',
      addressRegion: 'Auvergne-Rhône-Alpes',
      addressCountry: 'FR',
    },
    priceRange: '€€',
    areaServed: [
      'France',
      'Drôme',
      'Valence',
      'Montélimar',
      'Romans-sur-Isère',
    ],
    sameAs: [
      'https://x.com/pixeloriaaw',
      'https://www.instagram.com/pixeloria.fr',
      'https://www.linkedin.com/company/pixeloria',
      'https://www.facebook.com/pixeloria.fr',
    ],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Pixeloria',
    url: 'https://pixeloria.fr',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
