declare global {
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

export function trackAuditFormStarted(source?: string) {
  trackEvent('audit_form_started', { source });
}

export function trackAuditFormSubmitted(source?: string) {
  trackEvent('audit_form_submitted', { source });
}

export function trackPricingViewed(page?: string) {
  trackEvent('pricing_viewed', { page });
}

export function trackCallScheduled(source?: string) {
  trackEvent('call_scheduled', { source });
}

export function trackEmailClicked(source?: string) {
  trackEvent('email_clicked', { source });
}

export function trackPhoneClicked(source?: string) {
  trackEvent('phone_clicked', { source });
}
