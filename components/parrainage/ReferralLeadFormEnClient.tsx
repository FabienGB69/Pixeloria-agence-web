'use client';

import dynamic from 'next/dynamic';

// Next.js 15 forbids `next/dynamic` with `ssr: false` in Server Components.
// The dynamic import lives here, in a Client Component, so the US referral
// page (a Server Component) can render it inside its Suspense boundary.
const ReferralLeadFormEn = dynamic(
  () => import('./ReferralLeadFormEn'),
  { ssr: false },
);

export default function ReferralLeadFormEnClient() {
  return <ReferralLeadFormEn />;
}
