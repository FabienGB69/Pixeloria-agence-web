export type DemoImageItem = { src: string; alt: string };
export type DemoImageSet = { hero: DemoImageItem; gallery: DemoImageItem[] };

const fallback: DemoImageSet = {
  hero: { src: '/images/exemples/default/hero.svg', alt: 'Illustration métier pour la démo de site' },
  gallery: [
    { src: '/images/exemples/default/gallery-1.svg', alt: 'Illustration de prestation métier' },
    { src: '/images/exemples/default/gallery-2.svg', alt: 'Illustration de réalisation métier' },
    { src: '/images/exemples/default/gallery-3.svg', alt: 'Illustration de réassurance client' },
  ],
};

export const demoImages: Record<string, DemoImageSet> = {
  'artisan-batiment': {
    hero: { src: '/images/exemples/artisan-batiment/hero.svg', alt: 'Artisan du bâtiment sur un chantier de rénovation' },
    gallery: [
      { src: '/images/exemples/artisan-batiment/gallery-1.svg', alt: 'Travaux de maçonnerie et rénovation intérieure' },
      { src: '/images/exemples/artisan-batiment/gallery-2.svg', alt: 'Chantier propre avec finition carrelage' },
      { src: '/images/exemples/artisan-batiment/gallery-3.svg', alt: 'Résultat final de rénovation pour un particulier' },
    ],
  },
  'entreprise-renovation': {
    hero: { src: '/images/exemples/entreprise-renovation/hero.svg', alt: 'Entreprise de rénovation en intervention dans une maison' },
    gallery: [
      { src: '/images/exemples/entreprise-renovation/gallery-1.svg', alt: 'Rénovation complète de pièce de vie' },
      { src: '/images/exemples/entreprise-renovation/gallery-2.svg', alt: 'Travaux intérieurs avec finitions propres' },
      { src: '/images/exemples/entreprise-renovation/gallery-3.svg', alt: 'Aménagement rénové prêt à habiter' },
    ],
  },
  conciergerie: {
    hero: { src: '/images/exemples/conciergerie/hero.svg', alt: 'Appartement prêt à accueillir des voyageurs' },
    gallery: [
      { src: '/images/exemples/conciergerie/gallery-1.svg', alt: 'Logement propre et préparé pour la location' },
      { src: '/images/exemples/conciergerie/gallery-2.svg', alt: 'Mise en place du linge et des équipements' },
      { src: '/images/exemples/conciergerie/gallery-3.svg', alt: 'Accueil et préparation professionnelle des voyageurs' },
    ],
  },
  'agence-immobiliere': {
    hero: { src: '/images/exemples/agence-immobiliere/hero.svg', alt: 'Agent immobilier présentant un bien' },
    gallery: [
      { src: '/images/exemples/agence-immobiliere/gallery-1.svg', alt: 'Appartement en vente mis en valeur' },
      { src: '/images/exemples/agence-immobiliere/gallery-2.svg', alt: 'Visite immobilière avec acquéreurs' },
      { src: '/images/exemples/agence-immobiliere/gallery-3.svg', alt: 'Bien immobilier vendu dans la zone locale' },
    ],
  },
  'commerce-local': {
    hero: { src: '/images/exemples/commerce-local/hero.svg', alt: 'Commerce local avec produits de proximité' },
    gallery: [
      { src: '/images/exemples/commerce-local/gallery-1.svg', alt: 'Rayon de produits locaux en boutique' },
      { src: '/images/exemples/commerce-local/gallery-2.svg', alt: 'Service client en commerce de quartier' },
      { src: '/images/exemples/commerce-local/gallery-3.svg', alt: 'Sélection de produits prêts à emporter' },
    ],
  },
  independant: {
    hero: { src: '/images/exemples/independant/hero.svg', alt: 'Indépendant en rendez-vous avec un client' },
    gallery: [
      { src: '/images/exemples/independant/gallery-1.svg', alt: 'Session de travail et conseil personnalisé' },
      { src: '/images/exemples/independant/gallery-2.svg', alt: 'Accompagnement projet pour client local' },
      { src: '/images/exemples/independant/gallery-3.svg', alt: 'Résultats concrets d\'une mission indépendante' },
    ],
  },
  contractors: { hero: { src: '/images/exemples/contractors/hero.svg', alt: 'Building contractor on renovation site' }, gallery: fallback.gallery },
  'renovation-companies': { hero: { src: '/images/exemples/renovation-companies/hero.svg', alt: 'Renovation team working inside a house' }, gallery: fallback.gallery },
  'hospitality-concierge': { hero: { src: '/images/exemples/hospitality-concierge/hero.svg', alt: 'Holiday rental prepared for guest arrival' }, gallery: fallback.gallery },
  'real-estate': { hero: { src: '/images/exemples/real-estate/hero.svg', alt: 'Estate agent presenting a property' }, gallery: fallback.gallery },
  'local-shops': { hero: { src: '/images/exemples/local-shops/hero.svg', alt: 'Local shop with fresh products' }, gallery: fallback.gallery },
  'freelancers-consultants': { hero: { src: '/images/exemples/freelancers-consultants/hero.svg', alt: 'Freelance consultant working with client' }, gallery: fallback.gallery },
};

export function getDemoImages(slug: string): DemoImageSet {
  return demoImages[slug] ?? fallback;
}
