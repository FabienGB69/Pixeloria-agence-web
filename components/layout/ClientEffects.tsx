'use client';

import { useEffect } from 'react';
import { useReveal } from '@/hooks/useReveal';
import { useCursor } from '@/hooks/useCursor';
import { captureUtm } from '@/lib/utm';

export default function ClientEffects() {
  useReveal();
  useCursor();

  useEffect(() => {
    captureUtm();
  }, []);

  return (
    <>
      {/* Custom cursor */}
      <div className="cursor" id="cursor" aria-hidden="true"></div>
      <div className="cursor-follower" id="cursor-follower" aria-hidden="true"></div>

      {/* Ambient background orbs */}
      <div className="orb orb-1" aria-hidden="true"></div>
      <div className="orb orb-2" aria-hidden="true"></div>
      <div className="orb orb-3" aria-hidden="true"></div>
    </>
  );
}
