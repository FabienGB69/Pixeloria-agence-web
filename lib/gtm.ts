declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function trackEvent(event: string, params?: Record<string, unknown>) {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
}

// ── Named event helpers ──────────────────────────────────────────────────────

export function trackOfferSelect(offerName: string, offerPrice: string) {
  trackEvent('offer_select', {
    offer_name: offerName,
    offer_price: offerPrice,
  });
}

export function trackCaseStudyClick(caseStudyName: string, projectType: string) {
  trackEvent('case_study_click', {
    case_study_name: caseStudyName,
    project_type: projectType,
  });
}

export function trackAuditRequest(source?: string) {
  trackEvent('audit_request', { source });
}
