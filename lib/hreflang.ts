const BASE_URL = 'https://pixeloria.fr';

/**
 * Single source of truth for FR ↔ EN page parity. Keys are FR paths
 * (root-relative, no trailing slash except '/' itself), values are the
 * paired /en/* path. Add a pair here — never hardcode a languages block in
 * a page.tsx — so FR/EN drift can't happen again (see issue #131).
 */
export const HREFLANG_PAIRS: Record<string, string> = {
  '/': '/en',
  '/offres': '/en/offers',
  '/tarifs': '/en/pricing',
  '/faq': '/en/faq',
  '/avis': '/en/reviews',
  '/comment-ca-marche': '/en/how-it-works',
  '/temoignage': '/en/testimonial',
  '/refonte-site-internet': '/en/website-redesign',
  '/maintenance-site-web': '/en/website-maintenance',
  '/seo-local': '/en/local-seo',
  '/creation-site-internet-artisan': '/en/website-creation-tradespeople',
  '/creation-site-internet-tpe-pme': '/en/website-creation-small-business',
  '/agence-web-ain': '/en/web-agency-ain',
  '/agence-web-ardeche': '/en/web-agency-ardeche',
  '/agence-web-drome': '/en/web-agency-drome',
  '/agence-web-haute-savoie': '/en/web-agency-haute-savoie',
  '/agence-web-isere': '/en/web-agency-isere',
  '/agence-web-loire': '/en/web-agency-loire',
  '/agence-web-rhone': '/en/web-agency-rhone',
  '/agence-web-savoie': '/en/web-agency-savoie',
  '/mentions-legales': '/en/legal-notice',
  '/cgu': '/en/terms-of-use',
  '/cgv': '/en/terms-of-sale',
  '/politique-confidentialite': '/en/privacy-policy',
  '/parrainage': '/en/parrainage',
  '/a-propos': '/en/about',
};

/**
 * Returns the `metadata.alternates.languages` block for a FR or EN path
 * that's part of a known pair. Pass either side of the pair — '/offres' or
 * '/en/offers' both resolve to the same map. x-default points to the EN URL,
 * matching the convention already set by app/page.tsx and app/en/layout.tsx.
 *
 * Returns a plain Record<string, string> (rather than a named interface)
 * because Next's Metadata.alternates.languages type requires an index
 * signature to structurally match.
 */
export function hreflangLanguages(path: string): Record<string, string> | undefined {
  let frPath: string | undefined;
  let enPath: string | undefined;

  if (path in HREFLANG_PAIRS) {
    frPath = path;
    enPath = HREFLANG_PAIRS[path];
  } else {
    const match = Object.entries(HREFLANG_PAIRS).find(([, en]) => en === path);
    if (match) [frPath, enPath] = match;
  }

  if (!frPath || !enPath) return undefined;

  const frUrl = frPath === '/' ? `${BASE_URL}/` : `${BASE_URL}${frPath}`;
  const enUrl = `${BASE_URL}${enPath}`;

  return { 'fr-FR': frUrl, 'en-US': enUrl, 'x-default': enUrl };
}

/**
 * Returns a self-referencing `languages` block for a US-only `/en/*` page
 * that has no FR counterpart (no entry in HREFLANG_PAIRS). Declaring
 * `alternates.canonical` alone on such a page silently drops the layout's
 * `en-US`/`x-default` declaration, because Next.js replaces the whole
 * `alternates` object rather than merging it (see issue #158).
 */
export function hreflangSelf(url: string): Record<string, string> {
  return { 'en-US': url, 'x-default': url };
}
