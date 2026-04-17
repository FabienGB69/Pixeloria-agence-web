import { Suspense } from 'react';
import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import TunnelForm from '@/components/forms/TunnelForm';
import Footer from '@/components/layout/Footer';
import ClientEffects from '@/components/layout/ClientEffects';

export const metadata: Metadata = {
  title: 'Audit & Refonte de Site — Pixeloria',
  description:
    'Obtenez un audit gratuit de votre site et découvrez nos offres de refonte pour artisans et PME.',
};

export default function RefontePage() {
  return (
    <>
      <ClientEffects />
      <Header />
      <main className="shell" style={{ marginTop: '5rem' }}>
        <div className="topline">
          <a className="back-link" href="/">← Retour au site Pixeloria</a>
          <div className="brand">
            <span className="brand-dot"></span>
            Pixeloria
          </div>
        </div>
        <Suspense fallback={<div style={{ padding: '2rem' }}>Chargement…</div>}>
          <TunnelForm />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
