export interface LocalSeoData {
  slug: string;
  department: string;
  departmentNum: string;
  prefecture: string;
  mainCities: string[];
  region: string;
  heroTitle: string;
  heroSubtitle: string;
  contextParagraph: string;
  sectors: { title: string; detail: string }[];
  faq: { question: string; answer: string }[];
  metaTitle: string;
  metaDescription: string;
  ogTitle: string;
  ogDescription: string;
}

export const LOCAL_SEO_PAGES: Record<string, LocalSeoData> = {
  'agence-web-drome': {
    slug: 'agence-web-drome',
    department: 'Drôme',
    departmentNum: '26',
    prefecture: 'Valence',
    mainCities: ['Valence', 'Romans-sur-Isère', 'Montélimar', 'Bourg-lès-Valence', 'Pierrelatte'],
    region: 'Auvergne-Rhône-Alpes',
    heroTitle: 'Agence web Drôme',
    heroSubtitle: 'Des sites qui amènent des clients à Valence, Romans-sur-Isère et dans toute la Drôme.',
    contextParagraph:
      'Pixeloria accompagne les artisans, commerçants et PME de la Drôme (26) dans leur développement digital. De Valence à Montélimar, en passant par Romans-sur-Isère, nous créons des sites web performants, visibles sur Google et conçus pour convertir vos visiteurs en clients. Boulangeries, plombiers, vignerons, cabinets médicaux, TPE industrielles : nous connaissons les enjeux locaux de votre secteur.',
    sectors: [
      { title: 'Artisans & BTP', detail: 'Plombiers, électriciens, menuisiers, couvreurs — un site qui génère des demandes de devis locales.' },
      { title: 'Viticulteurs & Agroalimentaire', detail: 'Caves de la Drôme, producteurs de lavande, oléiculteurs — mise en valeur de votre terroir et vente en ligne.' },
      { title: 'Commerces & Services', detail: 'Restaurants, boutiques, instituts de beauté — attirer les clients du département sur Google Maps et en organique.' },
      { title: 'PME & Industrie', detail: 'Sous-traitants, prestataires B2B — site vitrine professionnel pour décrocher de nouveaux marchés régionaux.' },
    ],
    faq: [
      {
        question: 'Combien coûte un site web pour une PME dans la Drôme ?',
        answer: 'Nos offres démarrent à partir de 49 €/mois (formule abonnement) ou à partir de 1 900 € HT pour un audit + refonte one-shot. Le tarif dépend de vos objectifs et du nombre de pages.',
      },
      {
        question: 'Pixeloria se déplace-t-elle dans la Drôme pour des réunions ?',
        answer: 'Nos projets se pilotent à 100 % à distance (visio, Notion, email). Cela nous permet de travailler efficacement avec des clients de toute la Drôme sans surcoût de déplacement.',
      },
      {
        question: 'En combien de temps mon site sera-t-il en ligne ?',
        answer: 'Un site vitrine standard est livré en 3 à 6 semaines. Un projet de refonte avec tunnel de conversion prend 6 à 10 semaines selon la complexité.',
      },
    ],
    metaTitle: 'Agence Web Drôme (26) — Création de sites pour artisans et PME | Pixeloria',
    metaDescription:
      'Pixeloria crée des sites web visibles sur Google pour les artisans et PME de la Drôme. Valence, Romans-sur-Isère, Montélimar. Devis gratuit.',
    ogTitle: 'Agence Web Drôme — Sites qui amènent des clients | Pixeloria',
    ogDescription: 'Création et refonte de sites web pour artisans et PME de la Drôme (26). Design, SEO et conversion.',
  },

  'agence-web-ardeche': {
    slug: 'agence-web-ardeche',
    department: 'Ardèche',
    departmentNum: '07',
    prefecture: 'Privas',
    mainCities: ['Aubenas', 'Annonay', 'Privas', 'Tournon-sur-Rhône', 'Le Teil'],
    region: 'Auvergne-Rhône-Alpes',
    heroTitle: 'Agence web Ardèche',
    heroSubtitle: 'Des sites visibles sur Google pour les artisans et entrepreneurs d\'Ardèche.',
    contextParagraph:
      'Pixeloria accompagne les professionnels de l\'Ardèche (07) dans leur présence digitale. D\'Annonay à Aubenas, en passant par les Gorges de l\'Ardèche, nous créons des sites web sur-mesure, optimisés pour le référencement local et pensés pour générer des contacts qualifiés. Artisans, prestataires touristiques, vignerons et PME locales : votre site doit travailler pour vous, 24h/24.',
    sectors: [
      { title: 'Tourisme & Hébergement', detail: 'Gîtes, campings, prestataires outdoor des Gorges de l\'Ardèche — visibilité en ligne pour attirer les vacanciers et réserver directement.' },
      { title: 'Artisans & Services', detail: 'Plombiers, charpentiers, paysagistes d\'Ardèche — un site qui génère des devis de clients locaux sans passer par des annuaires payants.' },
      { title: 'Viticulteurs & Producteurs', detail: 'Vignerons de Saint-Péray, producteurs de châtaignes AOP — mise en valeur du terroir ardéchois et boutique en ligne.' },
      { title: 'Commerçants & Libéraux', detail: 'Boutiques, praticiens de santé, consultants — présence Google Maps optimisée et site vitrine professionnel.' },
    ],
    faq: [
      {
        question: 'Puis-je avoir un site en ligne rapidement depuis l\'Ardèche ?',
        answer: 'Oui, tout se fait à distance. Nos projets sont livrés en 3 à 6 semaines pour un site vitrine standard. Nous utilisons Notion et la visio pour travailler efficacement peu importe votre localisation en Ardèche.',
      },
      {
        question: 'Mon activité saisonnière a-t-elle besoin d\'un site à l\'année ?',
        answer: 'Absolument. Google indexe et valorise les sites permanents. Un site actif en intersaison capte les réservations à l\'avance et vous référence pour la saison suivante. Nos offres en abonnement incluent la maintenance continue.',
      },
      {
        question: 'Pixeloria référence-t-elle les sites sur Google Maps ?',
        answer: 'Oui. Notre offre inclut l\'optimisation de votre fiche Google Business Profile, le balisage schema.org LocalBusiness et les signaux de pertinence locale pour votre zone géographique en Ardèche.',
      },
    ],
    metaTitle: 'Agence Web Ardèche (07) — Création de sites pour artisans et PME | Pixeloria',
    metaDescription:
      'Pixeloria crée des sites web visibles sur Google pour les artisans et entrepreneurs d\'Ardèche. Aubenas, Annonay, Privas. Devis gratuit.',
    ogTitle: 'Agence Web Ardèche — Sites qui génèrent des clients | Pixeloria',
    ogDescription: 'Création et refonte de sites web pour artisans et PME de l\'Ardèche (07). SEO local, design et conversion.',
  },

  'agence-web-isere': {
    slug: 'agence-web-isere',
    department: 'Isère',
    departmentNum: '38',
    prefecture: 'Grenoble',
    mainCities: ['Grenoble', 'Vienne', 'Bourgoin-Jallieu', 'Voiron', 'Villefontaine'],
    region: 'Auvergne-Rhône-Alpes',
    heroTitle: 'Agence web Isère',
    heroSubtitle: 'Des sites haute performance pour les entreprises de Grenoble et de l\'Isère.',
    contextParagraph:
      'Pixeloria crée des sites web pour les entreprises de l\'Isère (38), de Grenoble à Vienne, en passant par Bourgoin-Jallieu et Voiron. Dans un territoire où l\'innovation et la compétitivité sont élevées — technopôle grenoblois, PME industrielles, secteur touristique alpin — votre présence digitale doit être à la hauteur de vos ambitions. Nous livrons des sites rapides, bien référencés et conçus pour convertir.',
    sectors: [
      { title: 'Startups & Scale-ups', detail: 'Grenoble est l\'une des premières métropoles technologiques françaises. Nous créons des sites SaaS, landing pages et tunnels de conversion pour les acteurs du numérique isérois.' },
      { title: 'Artisans & BTP', detail: 'Plombiers, maçons, menuisiers de l\'Isère — un site qui capte les demandes de devis locales et vous positionne face à la concurrence régionale.' },
      { title: 'Tourisme & Sports d\'hiver', detail: 'Stations de ski (Chamrousse, Alpe d\'Huez), hébergeurs, guides de montagne — visibilité en ligne pour capter les skieurs et randonneurs dès la planification.' },
      { title: 'PME industrielles', detail: 'Sous-traitants, fabricants, prestataires B2B de la métropole grenobloise — site vitrine professionnel pour décrocher de nouveaux marchés nationaux.' },
    ],
    faq: [
      {
        question: 'Pixeloria est-elle adaptée aux startups grenobloises ?',
        answer: 'Oui. Nous travaillons avec des startups en phase de lancement comme des PME établies. Nos offres incluent landing pages à fort taux de conversion, tunnels de vente et intégrations CRM. Tarifs adaptés aux budgets startup.',
      },
      {
        question: 'Comment Pixeloria se différencie des nombreuses agences de Grenoble ?',
        answer: 'Notre spécialisation sur la conversion (pas juste le design) et notre approche data-driven (ROI calculator, A/B testing, tracking UTM) nous distinguent des agences généralistes. Chaque euro investi est traçable.',
      },
      {
        question: 'Prenez-vous en charge le SEO local sur Grenoble ?',
        answer: 'Oui — optimisation Google Business Profile, schema.org LocalBusiness, balisage sémantique pour les requêtes locales ("agence web Grenoble", "création site PME Isère") et suivi de positionnement.',
      },
    ],
    metaTitle: 'Agence Web Isère (38) — Création de sites Grenoble et Isère | Pixeloria',
    metaDescription:
      'Pixeloria crée des sites web pour startups, artisans et PME de l\'Isère. Grenoble, Vienne, Bourgoin-Jallieu. SEO, design et conversion. Devis gratuit.',
    ogTitle: 'Agence Web Isère & Grenoble — Performance digitale | Pixeloria',
    ogDescription: 'Sites web haute performance pour les entreprises de l\'Isère (38). Grenoble, startups, artisans, PME industrielles.',
  },
};
