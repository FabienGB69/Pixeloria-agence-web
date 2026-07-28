import type { Metadata } from 'next';
import { hreflangLanguages } from '@/lib/hreflang';
import TestimonialForm from '@/components/forms/TestimonialForm';

export const metadata: Metadata = {
  title: 'Laissez votre avis — Pixeloria',
  description: 'Partagez votre expérience avec Pixeloria en 2 minutes.',
  alternates: {
    canonical: 'https://pixeloria.fr/temoignage',
    languages: hreflangLanguages('/temoignage'),
  },
  robots: 'noindex',
};

export default function TemoignagePage() {
  return (
    <div className="temoignage-page">
      <div className="temoignage-inner">
        <a href="https://pixeloria.fr/" className="temoignage-logo">Pixeloria</a>
        <div className="temoignage-card">
          <h1>Laissez votre avis 🙏</h1>
          <p className="subtitle">Ça prend 2 minutes et ça aide vraiment.</p>
          <TestimonialForm />
        </div>
      </div>
    </div>
  );
}
