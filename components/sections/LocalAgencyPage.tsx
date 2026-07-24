import Link from "next/link";
import type { LocalSeoData } from '@/lib/local-seo';
import ContactForm from '@/components/forms/ContactForm';

interface Props {
  data: LocalSeoData;
}

export default function LocalAgencyPage({ data }: Props) {
  const schemaOrg = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `https://pixeloria.fr/${data.slug}`,
    name: 'Pixeloria',
    description: data.metaDescription,
    url: `https://pixeloria.fr/${data.slug}`,
    logo: 'https://pixeloria.fr/assets/pixeloria-logo.svg',
    image: 'https://pixeloria.fr/assets/pixeloria-logo.svg',
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
    areaServed: {
      '@type': 'AdministrativeArea',
      name: data.department,
    },
    priceRange: '€€',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="section local-hero" style={{ paddingTop: '7rem', paddingBottom: '3rem' }}>
        <div className="container" style={{ maxWidth: '860px', textAlign: 'center' }}>
          <div className="section-eyebrow">Agence web · {data.department} ({data.departmentNum})</div>
          <h1 className="local-hero__title">
            {data.heroTitle.split(data.department)[0]}
            <span className="gradient-text">{data.department}</span>
          </h1>
          <p className="local-hero__sub">{data.heroSubtitle}</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
            <a href="#contact-local" className="btn btn-primary">Devis gratuit</a>
            <Link href="/refonte" className="btn btn-secondary">Voir nos offres</Link>
          </div>
          <p style={{ marginTop: '1.5rem', fontSize: '0.85rem', opacity: 0.5 }}>
            Villes desservies : {data.mainCities.join(' · ')}
          </p>
        </div>
      </section>

      {/* Contexte local */}
      <section className="section" style={{ paddingTop: '2rem' }}>
        <div className="container" style={{ maxWidth: '780px' }}>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', opacity: 0.85 }}>{data.contextParagraph}</p>
        </div>
      </section>

      {/* Secteurs */}
      <section className="section">
        <div className="container">
          <div className="section-eyebrow">Secteurs</div>
          <h2>Nous travaillons avec les professionnels de {data.department}</h2>
          <div className="services-grid" style={{ marginTop: '2rem' }}>
            {data.sectors.map((s) => (
              <div key={s.title} className="glass-card" style={{ padding: '1.75rem' }}>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{s.title}</h3>
                <p style={{ opacity: 0.75, fontSize: '0.95rem', lineHeight: '1.6' }}>{s.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chiffres */}
      <section className="section">
        <div className="container">
          <div className="glass-card" style={{ padding: '2.5rem', textAlign: 'center' }}>
            <div className="section-eyebrow">Pourquoi Pixeloria</div>
            <h2>La méthode qui fait la différence</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '2rem', marginTop: '2.5rem' }}>
              {[
                { stat: '< 2.5s', label: 'Temps de chargement cible' },
                { stat: '90+', label: 'Score Lighthouse minimum' },
                { stat: '3–6 sem.', label: 'Délai de livraison moyen' },
                { stat: '49 €/mois', label: 'À partir de (abonnement)' },
              ].map((item) => (
                <div key={item.stat}>
                  <div className="gradient-text" style={{ fontSize: '2rem', fontWeight: 800 }}>{item.stat}</div>
                  <div style={{ opacity: 0.65, fontSize: '0.9rem', marginTop: '0.25rem' }}>{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container" style={{ maxWidth: '780px' }}>
          <div className="section-eyebrow">FAQ</div>
          <h2>Questions fréquentes — {data.department}</h2>
          <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {data.faq.map((item) => (
              <div key={item.question} className="glass-card" style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>{item.question}</h3>
                <p style={{ opacity: 0.75, fontSize: '0.95rem', lineHeight: '1.65', margin: 0 }}>{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section" id="contact-local">
        <div className="container" style={{ maxWidth: '680px' }}>
          <div className="section-eyebrow">Contact</div>
          <h2>Un projet en {data.department} ?</h2>
          <p style={{ opacity: 0.75, marginBottom: '2rem' }}>
            Réponse sous 48&nbsp;h. Audit gratuit de votre site actuel inclus.
          </p>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
