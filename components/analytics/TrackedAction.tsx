'use client';

import Link from 'next/link';
import type { ReactNode } from 'react';
import { trackOfferSelect, trackEmailClicked, trackCallScheduled } from '@/lib/gtm';

/**
 * Client-boundary wrappers for the handful of interactive elements on
 * otherwise-static marketing pages, so the page itself can stay a Server
 * Component instead of shipping its whole markup as client JS just to
 * attach a GTM onClick (see issue #157).
 */

interface TrackedOfferActionProps {
  href: string;
  className?: string;
  offerName: string;
  offerPrice: string;
  children: ReactNode;
  /** 'link' uses next/link (internal navigation), 'anchor' uses a plain <a> (e.g. #contact). */
  as?: 'link' | 'anchor';
}

export function TrackedOfferAction({ href, className, offerName, offerPrice, children, as = 'link' }: TrackedOfferActionProps) {
  const onClick = () => trackOfferSelect(offerName, offerPrice);
  if (as === 'anchor') {
    return (
      <a href={href} className={className} onClick={onClick}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}

interface TrackedContactChannelProps {
  href: string;
  className?: string;
  kind: 'email' | 'call';
  source: string;
  children: ReactNode;
}

export function TrackedContactChannel({ href, className, kind, source, children }: TrackedContactChannelProps) {
  const onClick = () => (kind === 'email' ? trackEmailClicked(source) : trackCallScheduled(source));
  return (
    <a href={href} className={className} onClick={onClick}>
      {children}
    </a>
  );
}
