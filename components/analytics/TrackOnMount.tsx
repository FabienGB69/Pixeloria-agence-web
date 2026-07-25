'use client';

import { useEffect } from 'react';
import { trackPricingViewed } from '@/lib/gtm';

export default function TrackOnMount({ page }: { page: string }) {
  useEffect(() => {
    trackPricingViewed(page);
  }, [page]);

  return null;
}
