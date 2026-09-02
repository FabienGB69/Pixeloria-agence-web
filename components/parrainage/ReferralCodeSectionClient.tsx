'use client';

import dynamic from 'next/dynamic';

// Next.js 15 forbids `next/dynamic` with `ssr: false` in Server Components.
// The dynamic import lives here, in a Client Component, so the FR referral
// page (a Server Component) can render it inside its Suspense boundary.
const ReferralCodeSection = dynamic(
  () => import('./ReferralCodeSection'),
  { ssr: false },
);

export default function ReferralCodeSectionClient() {
  return <ReferralCodeSection />;
}
