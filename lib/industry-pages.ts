export interface IndustryPage {
  slug: string;
  badge: string;
  title: string;
  subtitle: string;
  seoTitle: string;
  seoDescription: string;
  objectiveTitle: string;
  objectiveText: string;
  sections: string[];
  features: string[];
  recommendedOffer: string;
  recommendedPrice: string;
  offerReason: string;
  primaryCta: string;
}

export const industryPages: IndustryPage[] = [
  {
    slug: 'artisan-batiment',
    badge: 'Exemple métier',
    title: 'Exemple de site web pour artisan du bâtiment',
    subtitle:
      'Un site clair, professionnel et pensé pour générer des demandes de devis locales.',
    seoTitle: 'Exemple de site web pour artisan du bâtiment | Pixeloria',
    seoDescription:
      'Découvrez un exemple de site web pensé pour les artisans du bâtiment : présentation des services, réalisations, demandes de devis et SEO local.',
    objectiveTitle: 'Un site qui rassure le prospect avant même le premier appel',
    objectiveText:
      "Pour un artisan, le site doit rassurer rapidement. Le prospect doit comprendre votre métier, votre zone d'intervention, vos garanties et pouvoir demander un devis en quelques secondes.",
    sections: [
      "Accueil — Spécialité et zone d'intervention clairement affichées",
      'Services — Détail de vos prestations avec tarifs indicatifs si souhaité',
      'Réalisations — Galerie avant / après de vos chantiers terminés',
      "Garanties — Assurance décennale, qualifications et éléments de réassurance",
      "Avis clients — Avis Google intégrés pour renforcer la confiance",
      'Formulaire de devis — Demande rapide en ligne',
      'Bouton appel — Visible et cliquable depuis mobile',
    ],
    features: [
      'Bouton téléphone sticky sur mobile',
      'Formulaire de demande de devis',
      'Galerie réalisations',
      "SEO local par ville ou zone d'intervention",
      'Connexion Google Business Profile',
      'Analytics et suivi des conversions',
    ],
    recommendedOffer: 'Site Croissance',
    recommendedPrice: '159 € TTC / mois',
    offerReason:
      "Les artisans ont besoin d'un site qui évolue avec leurs réalisations, leurs prestations et leur visibilité locale. L'offre Croissance est la plus pertinente car elle permet de travailler le SEO, les contenus, les mises à jour et l'amélioration continue du site.",
    primaryCta: "Je veux un site d'artisan comme celui-ci",
  },
  {
    slug: 'entreprise-renovation',
    badge: 'Exemple métier',
    title: 'Exemple de site web pour entreprise de rénovation',
    subtitle:
      'Un site pensé pour présenter vos savoir-faire, rassurer vos prospects et générer des demandes qualifiées.',
    seoTitle: 'Exemple de site web pour entreprise de rénovation | Pixeloria',
    seoDescription:
      "Découvrez un exemple de site web pour entreprise de rénovation : services, réalisations, avant/après, réassurance et demandes de devis.",
    objectiveTitle: 'Donner confiance avant le premier rendez-vous',
    objectiveText:
      "Une entreprise de rénovation doit montrer son sérieux, la qualité de ses réalisations et sa capacité à piloter des projets complets. Le site doit donner confiance avant le premier rendez-vous.",
    sections: [
      "Présentation — L'entreprise, ses valeurs et son positionnement",
      'Prestations — Détail par métier (carrelage, isolation, second œuvre...)',
      'Réalisations — Galerie avant / après de vos chantiers',
      'Process projet — Les étapes du chantier de A à Z',
      'Garanties — Assurance décennale, certifications, réassurance',
      "Zones d'intervention — Carte ou liste des secteurs couverts",
      'Demande de devis — Formulaire projet détaillé',
    ],
    features: [
      'Pages prestations optimisées SEO par spécialité',
      'Galerie chantier avec photos avant / après',
      'Formulaire projet détaillé (type de travaux, surface, budget)',
      'Mise en avant des garanties et certifications',
      'Photos avant / après intégrées aux réalisations',
      'Tracking des demandes de devis',
    ],
    recommendedOffer: 'Site Croissance',
    recommendedPrice: '159 € TTC / mois',
    offerReason:
      "La rénovation demande plus de contenu, plus de réassurance et plus de visibilité locale. L'offre Croissance permet d'améliorer progressivement le site, d'ajouter des réalisations et de travailler les pages SEO par prestation.",
    primaryCta: 'Je veux un site de rénovation comme celui-ci',
  },
  {
    slug: 'conciergerie',
    badge: 'Exemple anonymisé',
    title: 'Exemple de site web pour conciergerie',
    subtitle:
      'Un site professionnel pour décrocher des mandats propriétaires, présenter vos services et rassurer voyageurs comme propriétaires.',
    seoTitle: 'Exemple de site web pour conciergerie Airbnb et location courte durée | Pixeloria',
    seoDescription:
      "Exemple de site web pour une conciergerie Airbnb et location courte durée : services propriétaires, gestion voyageurs, automatisations et demande de mandat. Par Pixeloria.",
    objectiveTitle: 'Rassurez les propriétaires, impressionnez vos voyageurs',
    objectiveText:
      "Une conciergerie performante doit convaincre deux audiences : les propriétaires qui confient leur bien, et les voyageurs qui cherchent une expérience soignée. Votre site doit montrer votre sérieux, votre organisation et votre zone d'intervention — clairement, sans jargon. Pixeloria crée des sites sobres et professionnels qui génèrent des mandats qualifiés.",
    sections: [
      "Accueil — Votre promesse et zone d'intervention pour les propriétaires",
      'Nos services — Accueil voyageurs, ménage, gestion calendrier, urgences',
      'Gestion voyageurs — Arrivée autonome, livret numérique, support client',
      "Optimisation des annonces — Photos professionnelles, tarification dynamique",
      'Automatisation — Outils et process pour une gestion sans friction',
      'Process onboarding — Les étapes pour confier votre bien en 3 jours',
      'FAQ propriétaires — Réponses aux questions les plus fréquentes',
      "Formulaire de contact — Demande de mandat ou estimation de revenus",
      "Exemple anonymisé — Présentation d'un site de conciergerie type",
    ],
    features: [
      "Formulaire de demande de mandat ou d'estimation de revenus",
      'Bouton WhatsApp direct pour contact rapide',
      'FAQ propriétaires intégrée',
      'Présentation des automatisations et outils utilisés',
      'Tracking des leads propriétaires',
      'Page services détaillée avec tarifs indicatifs',
      "SEO local par destination ou secteur géographique",
    ],
    recommendedOffer: 'Site Croissance',
    recommendedPrice: '159 € TTC / mois',
    offerReason:
      "L'offre Croissance convient à une conciergerie qui veut développer sa visibilité locale, ajouter des destinations ou secteurs d'intervention et travailler son positionnement Google dans le temps.",
    primaryCta: 'Je veux un site conciergerie comme celui-ci',
  },
  {
    slug: 'agence-immobiliere',
    badge: 'Exemple métier',
    title: 'Exemple de site web pour agence immobilière',
    subtitle:
      'Un site pensé pour générer des contacts vendeurs, rassurer les acheteurs et renforcer votre image locale.',
    seoTitle: 'Exemple de site web pour agence immobilière | Pixeloria',
    seoDescription:
      "Découvrez un exemple de site web pour agence immobilière ou mandataire : estimation, biens, services, preuve locale et prise de contact.",
    objectiveTitle: 'Inspirez confiance avant le premier contact vendeur',
    objectiveText:
      "Une agence immobilière doit inspirer confiance rapidement. Le site doit valoriser l'expertise locale, les biens disponibles, les services d'estimation et la capacité à accompagner les vendeurs comme les acheteurs.",
    sections: [
      "Présentation de l'agence — Expertise, valeurs et secteur géographique",
      "Estimation immobilière — Formulaire de demande d'estimation gratuite",
      'Biens à vendre ou à louer — Sélection mise en avant avec photos',
      'Services vendeurs — Accompagnement, valorisation, délai de vente',
      "Expertise locale — Connaissance du marché, quartiers et communes",
      'Avis clients — Témoignages vendeurs et acheteurs satisfaits',
      'Contact rapide — Formulaire, téléphone, prise de rendez-vous',
    ],
    features: [
      "Formulaire d'estimation gratuite en ligne",
      'Pages quartiers ou villes pour le SEO local',
      'Mise en avant des biens disponibles',
      'Connexion CRM possible ultérieurement',
      'SEO local pour votre ville et votre spécialité',
      'Tracking des leads vendeurs',
    ],
    recommendedOffer: 'Site Croissance',
    recommendedPrice: '159 € TTC / mois',
    offerReason:
      "L'immobilier nécessite une présence locale forte et des contenus réguliers pour capter des vendeurs. L'offre Croissance est recommandée car elle permet de travailler les pages locales, les services, les contenus et les optimisations dans le temps.",
    primaryCta: 'Je veux un site immobilier comme celui-ci',
  },
  {
    slug: 'commerce-local',
    badge: 'Exemple métier',
    title: 'Exemple de site web pour commerce local',
    subtitle:
      'Un site simple, clair et efficace pour aider vos clients à vous trouver, vous comprendre et vous contacter.',
    seoTitle: 'Exemple de site web pour commerce local | Pixeloria',
    seoDescription:
      'Découvrez un exemple de site web pour commerce local : horaires, produits, services, Google Business, contact et visibilité locale.',
    objectiveTitle: 'Visible en 3 secondes, compris en 5',
    objectiveText:
      "Un commerce local a besoin d'être visible rapidement. Le site doit afficher les informations essentielles : activité, horaires, adresse, produits ou services, contact et lien Google Maps. Pixeloria crée des sites clairs et accessibles qui donnent envie de venir vous rendre visite.",
    sections: [
      "Présentation du commerce — Votre activité, votre histoire et vos valeurs",
      'Produits ou services — Mise en avant de vos spécialités ou gammes phares',
      'Horaires et adresse — Jours et heures visibles, accès facilité',
      'Galerie photos — Ambiance du commerce, produits, équipe',
      'Avis clients — Témoignages et avis Google intégrés',
      'Accès Google Maps — Localisation intégrée pour vous trouver facilement',
      'Contact rapide — Formulaire + bouton appel mobile',
    ],
    features: [
      'Bouton appel cliquable sur mobile',
      'Intégration Google Maps',
      "Affichage des horaires d'ouverture",
      'Galerie photos de la boutique',
      'SEO local pour votre ville',
      'Connexion Google Business Profile',
    ],
    recommendedOffer: 'Site Sérénité',
    recommendedPrice: '89 € TTC / mois',
    offerReason:
      "Un commerce local a souvent besoin d'un site simple, rapide et rassurant. L'offre Sérénité est adaptée si vous voulez éviter un gros paiement initial et garder maintenance + SEO de base inclus. L'offre Essentiel à 490 € convient si vous préférez un site simple sans abonnement.",
    primaryCta: 'Je veux un site de commerce local comme celui-ci',
  },
  {
    slug: 'independant',
    badge: 'Exemple métier',
    title: 'Exemple de site web pour indépendant',
    subtitle:
      'Un site professionnel pour présenter votre expertise, vos offres et transformer vos visiteurs en prospects.',
    seoTitle: 'Exemple de site web pour indépendant, consultant ou coach | Pixeloria',
    seoDescription:
      'Découvrez un exemple de site web pour indépendant : personal branding, offres, prise de contact, crédibilité et conversion.',
    objectiveTitle: 'Clarifiez votre offre, captez vos premiers prospects',
    objectiveText:
      "Un indépendant doit rapidement expliquer qui il aide, comment il travaille et pourquoi lui faire confiance. Le site doit clarifier l'offre et faciliter la prise de rendez-vous. Pixeloria crée des sites clairs et professionnels qui transforment vos visiteurs en contacts qualifiés.",
    sections: [
      'Positionnement clair — Qui vous êtes, qui vous aidez et comment',
      "Présentation de l'expertise — Parcours, formations, approche et valeurs",
      'Offres ou accompagnements — Ce que vous proposez, pour qui et à quel prix',
      'Preuves de compétence — Témoignages, cas clients, certifications',
      'FAQ — Réponses aux questions les plus fréquentes',
      'Prise de rendez-vous ou contact — Formulaire ou lien vers votre calendrier',
    ],
    features: [
      'Bouton prise de rendez-vous (Calendly ou formulaire)',
      'Formulaire de contact optimisé conversion',
      'Pages offres ou accompagnements',
      'Témoignages clients mis en avant',
      'Blog ou ressources si besoin',
      'SEO personnel ou métier',
    ],
    recommendedOffer: 'Site Sérénité',
    recommendedPrice: '89 € TTC / mois',
    offerReason:
      "Un indépendant a souvent besoin d'un site clair, professionnel et simple à maintenir. L'offre Sérénité est adaptée pour lancer une présence solide. L'offre Croissance devient pertinente si le site doit devenir un canal d'acquisition régulier.",
    primaryCta: "Je veux un site d'indépendant comme celui-ci",
  },
];

export function getIndustryPage(slug: string): IndustryPage | undefined {
  return industryPages.find((p) => p.slug === slug);
}
