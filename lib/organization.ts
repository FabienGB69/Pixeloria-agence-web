/**
 * Schema.org `provider` block for the 4 pages genuinely targeting the US
 * market (areaServed: United States, USD pricing). Decision (2026-08-12,
 * issue #161): Pixeloria stays a remote-only Organization for the US market
 * — no formal US entity, no US address/phone. Email-only contact point is
 * accurate and intentional, not a placeholder.
 */
export const PROVIDER_US = {
  '@type': 'ProfessionalService',
  name: 'Pixeloria',
  url: 'https://pixeloria.fr',
  email: 'contact@pixeloria.fr',
} as const;
