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
      'Un site clair, professionnel et pensé pour générer des demandes de devis locales — adapté aux plombiers, électriciens, maçons, peintres et couvreurs.',
    seoTitle: 'Exemple de site web pour artisan du bâtiment | Pixeloria',
    seoDescription:
      'Découvrez un exemple de site web pensé pour les artisans du bâtiment : présentation des services, réalisations, demandes de devis et SEO local.',
    objectiveTitle: 'Un site qui inspire confiance avant même le premier appel',
    objectiveText:
      "Pour un artisan, la majorité des prospects cherchent d'abord en ligne avant de décrocher le téléphone. Votre site doit répondre à trois questions en moins de 5 secondes : qui êtes-vous, que faites-vous, et comment vous contacter. Pixeloria conçoit des sites sobres, rapides et orientés devis — avec vos zones d'intervention, vos prestations et vos réalisations en photo.",
    sections: [
      "Accueil — Présentation, zone d'intervention et bouton d'appel immédiat",
      'Services — Détail de vos prestations par spécialité (plomberie, électricité...)',
      'Réalisations — Galerie photo de vos chantiers terminés',
      "Avis clients — Intégration de vos avis Google pour rassurer les prospects",
      'Contact — Formulaire de devis + téléphone + WhatsApp',
    ],
    features: [
      'Bouton téléphone cliquable directement depuis mobile',
      'Formulaire de demande de devis en ligne',
      'Galerie réalisations avec photos de chantiers',
      'SEO local optimisé pour votre ville et votre métier',
      'Intégration de vos avis Google',
      'Bouton WhatsApp optionnel',
    ],
    recommendedOffer: 'Site Sérénité',
    recommendedPrice: '89 € TTC / mois',
    offerReason:
      "L'offre Sérénité est idéale pour un artisan qui veut un site pro, maintenu dans le temps, avec le SEO local de base inclus — sans gérer l'hébergement ni les mises à jour.",
    primaryCta: 'Je veux un site comme celui-ci',
  },
  {
    slug: 'entreprise-renovation',
    badge: 'Exemple métier',
    title: 'Exemple de site web pour entreprise de rénovation',
    subtitle:
      "Un site pensé pour convaincre dès le premier regard — avec vos spécialités, vos réalisations avant/après et un formulaire de devis efficace.",
    seoTitle: "Exemple de site web pour entreprise de rénovation | Pixeloria",
    seoDescription:
      "Exemple de site web pour une entreprise de rénovation : travaux, réalisations avant/après, formulaire de devis et SEO local. Créé par Pixeloria.",
    objectiveTitle: 'Montrez votre expertise avant même la première visite',
    objectiveText:
      "Une entreprise de rénovation se choisit souvent sur images. Vos réalisations — avant/après, chantiers en cours, finitions — sont votre meilleur argument commercial. Votre site doit les mettre en valeur, présenter vos spécialités et faciliter la demande de devis. Pixeloria structure votre site pour que chaque visiteur reparte avec l'envie de vous appeler.",
    sections: [
      "Accueil — Spécialités, zone d'intervention et CTA devis",
      "Nos travaux — Présentation par type (carrelage, isolation, second œuvre...)",
      'Réalisations — Photos avant/après de vos chantiers',
      "Labels & certifications — RGE, Qualibat, assurance décennale",
      'Devis gratuit — Formulaire ciblé pour recevoir des demandes qualifiées',
    ],
    features: [
      'Section réalisations avec photos avant/après',
      'Affichage de vos certifications et labels (RGE, Qualibat)',
      'Formulaire de devis avec détail du projet',
      'SEO local renforcé pour votre spécialité et votre ville',
      "Carte de votre zone d'intervention",
      'Bouton d\'appel direct et WhatsApp',
    ],
    recommendedOffer: 'Site Croissance',
    recommendedPrice: '159 € TTC / mois',
    offerReason:
      "L'offre Croissance est recommandée pour une entreprise de rénovation qui veut développer sa visibilité locale avec un contenu régulier, un suivi SEO mensuel et un reporting simple.",
    primaryCta: 'Je veux un site comme celui-ci',
  },
  {
    slug: 'conciergerie',
    badge: 'Exemple anonymisé',
    title: 'Exemple de site web pour conciergerie',
    subtitle:
      'Un site sobre et professionnel pour présenter vos services de gestion locative, rassurer les propriétaires et recevoir des mandats.',
    seoTitle: 'Exemple de site web pour conciergerie | Pixeloria',
    seoDescription:
      "Exemple de site web pour une conciergerie de location saisonnière : présentation des services, zone d'intervention, contact propriétaires. Par Pixeloria.",
    objectiveTitle: 'Rassurez les propriétaires avant même le premier échange',
    objectiveText:
      "Un propriétaire qui confie son bien à une conciergerie cherche avant tout la confiance et la transparence. Votre site doit expliquer clairement vos services, votre fonctionnement et votre zone d'intervention — sans jargon, sans sur-vente. Pixeloria crée des sites sobres et lisibles qui convertissent les propriétaires hésitants en contacts qualifiés.",
    sections: [
      "Accueil — Votre promesse et zone d'intervention",
      'Nos services — Accueil voyageurs, ménage, gestion calendrier, urgences',
      'Comment ça marche — Processus en 3 étapes simples',
      "Zone couverte — Carte ou liste des secteurs d'intervention",
      "Contact propriétaires — Formulaire de prise de contact ou d'estimation",
    ],
    features: [
      'Présentation claire des services inclus',
      "Carte ou liste de votre zone d'intervention",
      'Formulaire de demande de mandat ou d\'estimation',
      'Témoignages propriétaires (anonymisés si souhaité)',
      'Bouton téléphone et email direct',
      'Design sobre et professionnel adapté au secteur',
    ],
    recommendedOffer: 'Site Sérénité',
    recommendedPrice: '89 € TTC / mois',
    offerReason:
      "L'offre Sérénité convient à une conciergerie qui veut un site maintenu, sécurisé et visible localement — avec les petites modifications mensuelles incluses pour mettre à jour vos infos.",
    primaryCta: 'Je veux un site comme celui-ci',
  },
  {
    slug: 'agence-immobiliere',
    badge: 'Exemple métier',
    title: 'Exemple de site web pour agence immobilière',
    subtitle:
      'Un site qui présente votre agence, vos biens et génère des prises de contact qualifiées — agents immobiliers, mandataires et promoteurs locaux.',
    seoTitle: 'Exemple de site web pour agence immobilière | Pixeloria',
    seoDescription:
      'Exemple de site web pour une agence immobilière locale : présentation de l\'agence, biens à vendre, estimation gratuite, SEO local. Par Pixeloria.',
    objectiveTitle: 'Un site qui travaille pour vous entre deux rendez-vous',
    objectiveText:
      "Vos clients vous cherchent sur Google avant de vous appeler. Votre site doit leur donner envie de vous contacter : présenter votre équipe, vos biens disponibles, vos avis clients et un formulaire d'estimation simple. Pixeloria structure votre présence en ligne pour capter des vendeurs et des acheteurs en local.",
    sections: [
      "Accueil — L'agence, ses valeurs et son secteur d'expertise",
      'Biens à vendre — Sélection de biens mis en avant',
      'Biens en location — Sélection locative si applicable',
      "Notre équipe — Photos, présentations et zones d'expertise",
      'Estimation gratuite — Formulaire de demande en ligne',
    ],
    features: [
      'Section biens à vendre et à louer',
      "Présentation de l'équipe avec photos",
      "Formulaire d'estimation gratuite en ligne",
      'Intégration de vos avis Google',
      'SEO local pour votre ville et votre spécialité',
      'Bouton d\'appel direct et prise de rendez-vous',
    ],
    recommendedOffer: 'Site Croissance',
    recommendedPrice: '159 € TTC / mois',
    offerReason:
      "L'offre Croissance est recommandée pour une agence immobilière qui veut développer sa visibilité locale, créer du contenu régulier (conseils acheteurs/vendeurs) et suivre son positionnement Google.",
    primaryCta: 'Je veux un site comme celui-ci',
  },
  {
    slug: 'commerce-local',
    badge: 'Exemple métier',
    title: 'Exemple de site web pour commerce local',
    subtitle:
      'Un site simple et professionnel pour votre boutique de quartier — fleuriste, librairie, épicerie fine ou tout commerce de proximité.',
    seoTitle: 'Exemple de site web pour commerce local | Pixeloria',
    seoDescription:
      'Exemple de site web pour un commerce local : présentation de la boutique, horaires, produits phares, localisation. Créé par Pixeloria.',
    objectiveTitle: 'Votre boutique visible en ligne, dès demain',
    objectiveText:
      "Un client qui cherche un fleuriste, une librairie ou un commerce de quartier commence par Google. Votre site doit répondre à ses questions en quelques secondes : qui vous êtes, où vous êtes, quand vous ouvrez et ce que vous proposez. Pixeloria crée des sites accessibles et clairs qui donnent envie de venir vous rendre visite.",
    sections: [
      "Accueil — Votre boutique en image et votre accroche",
      'Nos produits — Mise en avant de vos spécialités ou gammes phares',
      'Horaires & accès — Jours d\'ouverture et adresse visible',
      'Actualités — Promotions, événements ou nouveautés',
      'Contact & plan — Formulaire + intégration Google Maps',
    ],
    features: [
      "Affichage des horaires d'ouverture",
      'Intégration Google Maps pour localiser la boutique',
      'Section produits ou spécialités avec photos',
      'Bouton téléphone cliquable sur mobile',
      "Page d'actualités pour promotions et événements",
      'Formulaire de contact simple',
    ],
    recommendedOffer: 'Site Essentiel',
    recommendedPrice: '490 € TTC',
    offerReason:
      "L'offre Essentiel est idéale pour un commerce local qui veut une présence en ligne simple et professionnelle, sans abonnement mensuel. Un investissement unique pour une visibilité durable.",
    primaryCta: 'Je veux un site comme celui-ci',
  },
  {
    slug: 'independant',
    badge: 'Exemple métier',
    title: 'Exemple de site web pour indépendant',
    subtitle:
      'Un espace professionnel qui vous représente, présente vos offres et transforme vos visiteurs en clients — consultant, coach, formateur ou freelance.',
    seoTitle: 'Exemple de site web pour indépendant | Pixeloria',
    seoDescription:
      'Exemple de site web pour un indépendant, consultant ou freelance : présentation des services, bio, témoignages, prise de contact. Par Pixeloria.',
    objectiveTitle: 'Votre crédibilité en ligne, sans effort technique',
    objectiveText:
      "Pour un indépendant, le site personnel est souvent le premier filtre : vos prospects le consultent avant de vous répondre. Il doit être clair, professionnel et refléter votre positionnement. Pixeloria crée des sites qui présentent vos offres, votre parcours et vos témoignages clients — pour que chaque visiteur sache immédiatement si vous pouvez les aider.",
    sections: [
      'Accueil — Qui vous êtes et ce que vous apportez',
      "Services / Offres — Ce que vous proposez, pour qui, et comment",
      'Parcours / Bio — Votre expérience, vos formations, votre approche',
      'Témoignages — Avis de clients passés pour renforcer la confiance',
      'Contact / Rendez-vous — Formulaire ou lien vers votre calendrier',
    ],
    features: [
      'Section offres claire avec tarifs indicatifs si souhaité',
      'Bio professionnelle avec photo',
      "Témoignages clients mis en avant",
      'Formulaire de contact ou lien vers Calendly',
      'Bouton d\'appel direct sur mobile',
      'Optimisation technique de base pour Google',
    ],
    recommendedOffer: 'Site Essentiel',
    recommendedPrice: '490 € TTC',
    offerReason:
      "L'offre Essentiel est idéale pour un indépendant qui veut un site vitrine professionnel en paiement unique. Simple, lisible et livré clé en main — sans abonnement ni gestion technique.",
    primaryCta: 'Je veux un site comme celui-ci',
  },
];

export function getIndustryPage(slug: string): IndustryPage | undefined {
  return industryPages.find((p) => p.slug === slug);
}
