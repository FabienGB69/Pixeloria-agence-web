import { Suspense } from 'react';
import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import CreationForm from '@/components/forms/CreationForm';
import Footer from '@/components/layout/Footer';
import ClientEffects from '@/components/layout/ClientEffects';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Créer mon site web — Pixeloria',
  description:
    'Lancez votre projet de création de site web avec Pixeloria. Site vitrine, portfolio, e-commerce : répondez à 3 questions, on s\'occupe du reste.',
};

export default function CreationPage() {
  return (
    <>
      <ClientEffects />
      <JsonLd type="creation" />
      <Header />
      <main className="shell" style={{ marginTop: '5rem' }}>
        <div className="topline">
          <a className="back-link" href="/">← Retour au site Pixeloria</a>
          <div className="brand">
            <span className="brand-dot"></span>
            Pixeloria
          </div>
        </div>

        <div className="creation-page-header">
          <h1>Créons votre site ensemble</h1>
          <p>
            Dites-nous ce que vous imaginez en 3 étapes rapides.
            On revient vers vous sous <strong>48 h</strong> avec une proposition adaptée.
          </p>
        </div>

        <Suspense fallback={<div style={{ padding: '2rem' }}>Chargement…</div>}>
          <CreationForm />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
