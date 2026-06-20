import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Pixeloria — Création & refonte de sites internet pour artisans et TPE';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: 'linear-gradient(135deg, #080810 0%, #111123 60%, #0d0d1a 100%)',
          padding: '60px 72px',
          fontFamily: 'sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Accent orb top-right */}
        <div
          style={{
            position: 'absolute',
            top: '-80px',
            right: '-80px',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(122,92,255,0.25) 0%, transparent 70%)',
            display: 'flex',
          }}
        />
        {/* Accent orb bottom-left */}
        <div
          style={{
            position: 'absolute',
            bottom: '-60px',
            left: '-60px',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,209,255,0.15) 0%, transparent 70%)',
            display: 'flex',
          }}
        />

        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #7a5cff, #00d1ff)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <rect x="2" y="2" width="9" height="9" rx="2" fill="white" />
              <rect x="13" y="2" width="9" height="9" rx="2" fill="white" opacity="0.6" />
              <rect x="2" y="13" width="9" height="9" rx="2" fill="white" opacity="0.6" />
              <rect x="13" y="13" width="9" height="9" rx="2" fill="white" />
            </svg>
          </div>
          <span
            style={{
              fontSize: '32px',
              fontWeight: '800',
              color: 'white',
              letterSpacing: '-0.5px',
            }}
          >
            Pixeloria
          </span>
        </div>

        {/* Main content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div
            style={{
              fontSize: '52px',
              fontWeight: '800',
              color: 'white',
              lineHeight: '1.1',
              letterSpacing: '-1px',
              maxWidth: '900px',
            }}
          >
            Création &amp; refonte de sites internet
            <br />
            <span
              style={{
                background: 'linear-gradient(90deg, #7a5cff, #00d1ff)',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
              }}
            >
              pour artisans et TPE
            </span>
          </div>

          {/* Badge pricing */}
          <div style={{ display: 'flex', gap: '16px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                background: 'rgba(122,92,255,0.15)',
                border: '1px solid rgba(122,92,255,0.4)',
                borderRadius: '100px',
                padding: '12px 24px',
              }}
            >
              <span style={{ fontSize: '22px', fontWeight: '700', color: '#a78bfa' }}>
                Site Artisan — 199 € TTC
              </span>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                background: 'rgba(0,209,255,0.1)',
                border: '1px solid rgba(0,209,255,0.3)',
                borderRadius: '100px',
                padding: '12px 24px',
              }}
            >
              <span style={{ fontSize: '22px', fontWeight: '700', color: '#67e8f9' }}>
                Livré en 72h
              </span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <span style={{ fontSize: '20px', color: 'rgba(255,255,255,0.4)', fontWeight: '500' }}>
            pixeloria.fr
          </span>
          <span style={{ fontSize: '18px', color: 'rgba(255,255,255,0.3)' }}>
            Option Visibilité · 49 €/mois · SEO + maintenance inclus
          </span>
        </div>
      </div>
    ),
    { ...size },
  );
}
