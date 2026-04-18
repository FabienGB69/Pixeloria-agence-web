import Link from 'next/link';

export default function NotFound() {
  return (
    <html lang="fr">
      <body style={{ background: '#050f1a', color: '#f0faf8', fontFamily: 'sans-serif', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', gap: '1.5rem' }}>
        <h1 style={{ fontSize: '7rem', fontWeight: 900, background: 'linear-gradient(135deg,#35e38f,#26d8be,#2ca7ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', margin: 0 }}>
          404
        </h1>
        <p style={{ fontSize: '1.5rem', fontWeight: 700 }}>Page introuvable</p>
        <p style={{ color: 'rgba(240,250,248,0.6)', textAlign: 'center', maxWidth: '400px' }}>
          Cette page n&apos;existe pas ou a été déplacée.
        </p>
        <Link href="/" style={{ padding: '12px 28px', background: 'linear-gradient(135deg,#35e38f,#26d8be)', color: '#030e28', borderRadius: '999px', fontWeight: 700, fontSize: '0.95rem' }}>
          Retour à l&apos;accueil
        </Link>
      </body>
    </html>
  );
}
