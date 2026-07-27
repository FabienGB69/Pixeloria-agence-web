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
    recommendedOffer: 'Site Artisan',
    recommendedPrice: '199 € TTC',
    offerReason:
      "Pour un artisan, le Site Artisan à 199 € TTC couvre l'essentiel : site vitrine responsive, SEO local, formulaire de devis et bouton d'appel. L'Option Visibilité à 49 €/mois est recommandée si vous voulez faire vivre vos réalisations, garder Google Business Profile à jour et travailler le SEO local dans le temps.",
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
    recommendedOffer: 'Site Artisan',
    recommendedPrice: '199 € TTC',
    offerReason:
      "Le Site Artisan à 199 € TTC vous met en ligne rapidement avec vos garanties, réalisations et formulaire de devis. L'Option Visibilité à 49 €/mois est pertinente pour la rénovation : elle permet d'enrichir les réalisations, d'ajouter des pages prestation et de travailler le SEO local en continu.",
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
    recommendedOffer: 'Site Artisan',
    recommendedPrice: '199 € TTC',
    offerReason:
      "Le Site Artisan à 199 € TTC vous permet de lancer un site conciergerie professionnel avec formulaire de mandat et FAQ propriétaires. L'Option Visibilité à 49 €/mois est recommandée si vous ajoutez régulièrement des destinations ou secteurs d'intervention et voulez garder une visibilité locale forte.",
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
    recommendedOffer: 'Site Artisan',
    recommendedPrice: '199 € TTC',
    offerReason:
      "Le Site Artisan à 199 € TTC vous met en ligne avec un formulaire d'estimation gratuite et vos biens mis en avant. L'Option Visibilité à 49 €/mois est recommandée pour l'immobilier : elle permet d'entretenir des pages quartiers, publier des contenus et capter des vendeurs sur le long terme.",
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
    recommendedOffer: 'Site Artisan',
    recommendedPrice: '199 € TTC',
    offerReason:
      "Le Site Artisan à 199 € TTC couvre parfaitement le besoin d'un commerce local : horaires, adresse, Google Maps, galerie et bouton d'appel — livré en 72 h, sans engagement. L'Option Visibilité à 49 €/mois s'ajoute si vous souhaitez déléguer maintenance, mises à jour Google Business Profile et SEO local mensuel.",
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
    recommendedOffer: 'Site Artisan',
    recommendedPrice: '199 € TTC',
    offerReason:
      "Le Site Artisan à 199 € TTC vous permet de lancer une présence en ligne claire et professionnelle : positionnement, offres, témoignages, prise de rendez-vous. L'Option Visibilité à 49 €/mois devient pertinente si le site doit devenir un vrai canal d'acquisition (SEO régulier, contenus, GBP).",
    primaryCta: "Je veux un site d'indépendant comme celui-ci",
  },
];

export function getIndustryPage(slug: string): IndustryPage | undefined {
  return industryPages.find((p) => p.slug === slug);
}
