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
      description: 'Audit gratuit et refonte de site web pour artisans et PME.',
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
    '@type': 'Organization',
    name: 'Pixeloria',
    url: 'https://pixeloria.fr',
    logo: 'https://pixeloria.fr/assets/pixeloria-logo.svg',
    description: 'Agence web pour artisans et PME.',
    sameAs: [],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Pixeloria',
    url: 'https://pixeloria.fr',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://pixeloria.fr/?s={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
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
