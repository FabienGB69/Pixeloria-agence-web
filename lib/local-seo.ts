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

  'agence-web-rhone': {
    slug: 'agence-web-rhone',
    department: 'Rhône',
    departmentNum: '69',
    prefecture: 'Lyon',
    mainCities: ['Lyon', 'Villeurbanne', 'Vénissieux', 'Caluire-et-Cuire', 'Bron'],
    region: 'Auvergne-Rhône-Alpes',
    heroTitle: 'Agence web Lyon & Rhône',
    heroSubtitle: 'Création et refonte de sites web pour les entreprises de la métropole lyonnaise.',
    contextParagraph:
      'Pixeloria est basée à Lyon et accompagne les artisans, TPE et PME du Rhône (69) dans leur développement digital. Dans la deuxième métropole économique de France, la concurrence en ligne est intense : un site performant et bien référencé est indispensable pour sortir du lot. Restaurants, cabinets, boutiques, artisans, startups lyonnaises — nous créons des sites qui génèrent de vrais clients, pas juste du trafic.',
    sectors: [
      { title: 'Startups & Tech lyonnaises', detail: 'Lyon est le 2ème hub tech français. Sites SaaS, landing pages à fort taux de conversion, tunnels de vente pour les startups de La Part-Dieu et Confluence.' },
      { title: 'Artisans & BTP', detail: 'Plombiers, électriciens, peintres de la métropole — génération de devis en ligne et positionnement local sur Google Maps.' },
      { title: 'Restauration & Hôtellerie', detail: 'Restaurants lyonnais, bouchons, hôtels — site vitrine professionnel, réservation en ligne et optimisation Google My Business.' },
      { title: 'Professions libérales & PME', detail: 'Avocats, médecins, consultants, PME industrielles de la métropole — présence digitale professionnelle et génération de leads qualifiés.' },
    ],
    faq: [
      {
        question: 'Pixeloria est-elle basée à Lyon ?',
        answer: 'Oui, Pixeloria est immatriculée au RCS de Lyon. Nous travaillons avec des clients de toute la métropole lyonnaise et du Rhône, en 100 % distanciel via visio et Notion.',
      },
      {
        question: 'Quelle est la différence entre une agence web lyonnaise classique et Pixeloria ?',
        answer: 'Notre différence : une obsession pour la conversion. Chaque site est conçu pour transformer vos visiteurs en clients. Pas juste un beau design — un outil de croissance mesurable avec tracking UTM, A/B testing et ROI traçable.',
      },
      {
        question: 'Intervenez-vous sur Lyon 1, Lyon 2, Lyon 3 et les autres arrondissements ?',
        answer: 'Absolument. Nous intervenons sur toute la métropole lyonnaise : Lyon 1 à Lyon 9, Villeurbanne, Caluire, Bron, Vénissieux, et l\'ensemble du département du Rhône.',
      },
    ],
    metaTitle: 'Agence Web Lyon & Rhône (69) — Création de sites pour artisans et PME | Pixeloria',
    metaDescription:
      'Pixeloria, agence web lyonnaise, crée des sites performants pour artisans, startups et PME du Rhône. Lyon, Villeurbanne. SEO, design, conversion. Devis gratuit.',
    ogTitle: 'Agence Web Lyon — Sites qui convertissent | Pixeloria',
    ogDescription: 'Création et refonte de sites web pour les entreprises de la métropole lyonnaise et du Rhône (69).',
  },

  'agence-web-ain': {
    slug: 'agence-web-ain',
    department: 'Ain',
    departmentNum: '01',
    prefecture: 'Bourg-en-Bresse',
    mainCities: ['Bourg-en-Bresse', 'Oyonnax', 'Ambérieu-en-Bugey', 'Bellegarde-sur-Valserine', 'Gex'],
    region: 'Auvergne-Rhône-Alpes',
    heroTitle: 'Agence web Ain',
    heroSubtitle: 'Sites web visibles sur Google pour les artisans et PME de l\'Ain.',
    contextParagraph:
      'Pixeloria accompagne les professionnels de l\'Ain (01) dans leur développement digital. De Bourg-en-Bresse à Oyonnax, en passant par le Pays de Gex, nous créons des sites web sur-mesure optimisés pour le référencement local. L\'Ain est un département dynamique — plasturgie à Oyonnax, agriculture, tourisme de la Dombes, industrie — et votre site doit refléter ce dynamisme pour capter les clients en ligne.',
    sectors: [
      { title: 'Industrie & Plasturgie', detail: 'Sous-traitants et PME industrielles d\'Oyonnax et de la Plastics Vallée — site vitrine B2B professionnel pour décrocher de nouveaux marchés nationaux et européens.' },
      { title: 'Agriculture & Agroalimentaire', detail: 'Éleveurs, producteurs de volaille de Bresse AOP, exploitations agricoles — présence en ligne pour la vente directe et la valorisation du terroir bressan.' },
      { title: 'Artisans & Services', detail: 'Plombiers, électriciens, charpentiers de l\'Ain — génération de demandes de devis locales et positionnement Google Maps sur votre zone d\'intervention.' },
      { title: 'Pays de Gex & Frontaliers', detail: 'Prestataires du bassin genevois — site bilingue, image premium pour capter la clientèle frontalière à fort pouvoir d\'achat.' },
    ],
    faq: [
      {
        question: 'Pouvez-vous créer un site bilingue français-anglais pour le marché genevois ?',
        answer: 'Oui, nous réalisons des sites bilingues ou multilingues pour les professionnels du Pays de Gex souhaitant attirer la clientèle frontalière suisse et internationale.',
      },
      {
        question: 'Mon activité dans l\'Ain est très locale — un site web est-il vraiment utile ?',
        answer: 'Plus que jamais. 76 % des recherches locales aboutissent à une visite en boutique ou un contact dans les 24h (source : Google). Sans site, vous n\'existez pas pour ces clients.',
      },
      {
        question: 'Combien coûte un site web pour un artisan dans l\'Ain ?',
        answer: 'Nos offres démarrent à 49 €/mois en abonnement ou à partir de 1 900 € HT one-shot. Devis gratuit en 48h après analyse de votre situation.',
      },
    ],
    metaTitle: 'Agence Web Ain (01) — Création de sites pour artisans et PME | Pixeloria',
    metaDescription:
      'Pixeloria crée des sites web visibles sur Google pour artisans et PME de l\'Ain. Bourg-en-Bresse, Oyonnax, Gex. SEO local et conversion. Devis gratuit.',
    ogTitle: 'Agence Web Ain — Sites qui génèrent des clients | Pixeloria',
    ogDescription: 'Création et refonte de sites web pour les professionnels de l\'Ain (01). Bourg-en-Bresse, Oyonnax, Pays de Gex.',
  },

  'agence-web-loire': {
    slug: 'agence-web-loire',
    department: 'Loire',
    departmentNum: '42',
    prefecture: 'Saint-Étienne',
    mainCities: ['Saint-Étienne', 'Roanne', 'Firminy', 'Andrézieux-Bouthéon', 'Montbrison'],
    region: 'Auvergne-Rhône-Alpes',
    heroTitle: 'Agence web Loire',
    heroSubtitle: 'Des sites performants pour les entreprises de Saint-Étienne et de la Loire.',
    contextParagraph:
      'Pixeloria crée des sites web pour les artisans, commerçants et PME de la Loire (42). De Saint-Étienne à Roanne, le territoire ligérien est en pleine mutation économique — design industriel, textile haut de gamme, industries de précision, tourisme du Pilat. Votre site web doit incarner cette transformation et vous positionner comme un acteur sérieux sur votre marché, en ligne comme en local.',
    sectors: [
      { title: 'Design & Industries créatives', detail: 'Saint-Étienne, ville UNESCO du Design — agences créatives, designers, studios : site vitrine portfolio haut de gamme pour valoriser votre savoir-faire.' },
      { title: 'Artisans & BTP', detail: 'Plombiers, menuisiers, couvreurs de la Loire — un site qui génère des demandes de devis qualifiées sur votre zone d\'intervention.' },
      { title: 'Commerce & Textile', detail: 'Commerces stéphanois, acteurs du textile roannais — présence en ligne soignée et boutique e-commerce pour étendre votre clientèle au-delà du local.' },
      { title: 'PME industrielles', detail: 'Sous-traitants et fabricants de la Loire — site B2B professionnel pour décrocher des appels d\'offres et renforcer votre crédibilité auprès des donneurs d\'ordre.' },
    ],
    faq: [
      {
        question: 'Pixeloria connaît-elle le tissu économique stéphanois ?',
        answer: 'Oui. Nous intervenons auprès d\'entreprises de la Loire et connaissons les spécificités locales : design industriel, tissu de PME familiales, dynamique de reconversion économique. Votre contexte est intégré dès le brief.',
      },
      {
        question: 'Un site web peut-il vraiment aider une PME ligérienne à se développer ?',
        answer: 'Absolument. Un site optimisé pour le SEO local génère des leads qualifiés sans budget publicitaire. Nos clients artisans récupèrent en moyenne 3 à 7 nouvelles demandes de devis par mois après la mise en ligne.',
      },
      {
        question: 'Proposez-vous des sites e-commerce dans la Loire ?',
        answer: 'Oui, nous créons des boutiques en ligne performantes pour les commerces et artisans-créateurs de la Loire. Intégration Stripe, gestion des stocks, SEO e-commerce inclus dans nos offres.',
      },
    ],
    metaTitle: 'Agence Web Loire (42) — Création de sites pour artisans et PME | Pixeloria',
    metaDescription:
      'Pixeloria crée des sites web pour artisans, PME et commerces de la Loire. Saint-Étienne, Roanne. SEO local, design et conversion. Devis gratuit.',
    ogTitle: 'Agence Web Loire & Saint-Étienne — Sites qui convertissent | Pixeloria',
    ogDescription: 'Création et refonte de sites web pour les professionnels de la Loire (42). Saint-Étienne, Roanne, design industriel.',
  },

  'agence-web-savoie': {
    slug: 'agence-web-savoie',
    department: 'Savoie',
    departmentNum: '73',
    prefecture: 'Chambéry',
    mainCities: ['Chambéry', 'Aix-les-Bains', 'Albertville', 'Moûtiers', 'Saint-Jean-de-Maurienne'],
    region: 'Auvergne-Rhône-Alpes',
    heroTitle: 'Agence web Savoie',
    heroSubtitle: 'Des sites visibles sur Google pour les professionnels de Savoie.',
    contextParagraph:
      'Pixeloria accompagne les professionnels de la Savoie (73) dans leur développement digital. De Chambéry à Albertville, en passant par les stations des Alpes, nous créons des sites web sur-mesure, optimisés pour le référencement local et pensés pour convertir. Tourisme, hôtellerie, sports d\'hiver, artisans de montagne, PME de la vallée : votre site doit travailler pour vous toute l\'année.',
    sectors: [
      { title: 'Tourisme & Stations de ski', detail: 'Hôtels, chalets, moniteurs de ski, agences outdoor des Trois Vallées, Tarentaise — site premium pour capter les réservations en direct et réduire les commissions OTA.' },
      { title: 'Artisans & BTP montagne', detail: 'Charpentiers, couvreurs, chauffagistes savoyards — présence Google Maps et site vitrine pour les chantiers en altitude et en vallée.' },
      { title: 'Agroalimentaire & Terroir', detail: 'Producteurs de fromages AOP (Beaufort, Reblochon), vignerons de la Combe de Savoie — valorisation du terroir et vente en ligne.' },
      { title: 'Commerce & Services', detail: 'Boutiques de Chambéry et Aix-les-Bains, praticiens, consultants — référencement local optimisé pour attirer la clientèle de la vallée et des stations.' },
    ],
    faq: [
      {
        question: 'Comment gérez-vous la saisonnalité pour les professionnels du tourisme savoyard ?',
        answer: 'Nous concevons des sites avec une stratégie de contenu annuelle : pages saison hiver, saison été, intersaison. Le SEO saisonnier et les campagnes de réservation anticipée sont intégrés dès la conception.',
      },
      {
        question: 'Pouvez-vous intégrer un système de réservation en ligne pour un hébergeur savoyard ?',
        answer: 'Oui — intégration de modules de réservation (Lodgify, Beds24, ou custom), connexion aux plateformes (Airbnb, Booking) et système de prise de réservation directe pour éviter les commissions.',
      },
      {
        question: 'Quel budget pour un site de chalet ou d\'hôtel en Savoie ?',
        answer: 'Un site vitrine + réservation basique démarre à partir de 2 500 € HT. Un site hôtelier complet avec moteur de réservation et galerie premium se situe entre 4 000 et 8 000 € HT selon le nombre de chambres.',
      },
    ],
    metaTitle: 'Agence Web Savoie (73) — Création de sites pour tourisme et artisans | Pixeloria',
    metaDescription:
      'Pixeloria crée des sites web pour les professionnels de Savoie. Chambéry, Albertville, stations de ski. Tourisme, artisans, PME. Devis gratuit.',
    ogTitle: 'Agence Web Savoie — Sites qui remplissent vos calendriers | Pixeloria',
    ogDescription: 'Sites web pour tourisme, hôtellerie et artisans de Savoie (73). Chambéry, Albertville, Trois Vallées.',
  },

  'agence-web-haute-savoie': {
    slug: 'agence-web-haute-savoie',
    department: 'Haute-Savoie',
    departmentNum: '74',
    prefecture: 'Annecy',
    mainCities: ['Annecy', 'Thonon-les-Bains', 'Annemasse', 'Chamonix-Mont-Blanc', 'Cluses'],
    region: 'Auvergne-Rhône-Alpes',
    heroTitle: 'Agence web Haute-Savoie',
    heroSubtitle: 'Des sites premium pour les entreprises d\'Annecy, Chamonix et de Haute-Savoie.',
    contextParagraph:
      'Pixeloria crée des sites web pour les professionnels de la Haute-Savoie (74). D\'Annecy à Chamonix, en passant par le bassin annécien et le Pays de Savoie, nous accompagnons artisans, hôteliers, prestataires touristiques et PME dans leur développement digital. En Haute-Savoie, où le niveau de vie et les attentes sont élevés, votre site web doit refléter une image premium et générer des contacts qualifiés.',
    sectors: [
      { title: 'Tourisme premium & Chamonix', detail: 'Guides de haute montagne, hôtels 4★ et 5★, chalets de luxe à Chamonix, Megève, Les Gets — site vitrine haut de gamme pour une clientèle internationale exigeante.' },
      { title: 'Startups & Scale-ups Annecy', detail: 'Annecy est l\'une des villes les plus dynamiques de France. Landing pages, sites SaaS et tunnels de conversion pour les startups du bassin annécien.' },
      { title: 'Horlogerie & Décolletage', detail: 'Sous-traitants de la Vallée de l\'Arve, horlogers, décolleteurs — site B2B premium pour l\'export et les marchés suisse et international.' },
      { title: 'Commerce & Bien-être', detail: 'Boutiques d\'Annecy, instituts spa, praticiens bien-être — présence Google Maps optimisée et site vitrine élégant pour une clientèle à fort pouvoir d\'achat.' },
    ],
    faq: [
      {
        question: 'Pouvez-vous créer un site multilingue pour attirer des clients étrangers ?',
        answer: 'Oui — sites en français, anglais, allemand ou russe pour les professionnels du tourisme de Chamonix, Megève ou Annecy souhaitant capter la clientèle internationale et les frontaliers suisses.',
      },
      {
        question: 'Quels sont vos tarifs pour un site hôtelier ou de chalet de luxe ?',
        answer: 'Un site hôtelier premium avec galerie, moteur de réservation et SEO démarre à 5 000 € HT. Chaque projet fait l\'objet d\'un devis personnalisé selon le nombre de pages et les fonctionnalités requises.',
      },
      {
        question: 'Travaillez-vous avec des entreprises du décolletage et de l\'industrie de précision ?',
        answer: 'Oui. Nous créons des sites B2B pour les sous-traitants de la Vallée de l\'Arve — présentation du parc machine, certifications, marchés cibles — optimisés pour les acheteurs industriels français et suisses.',
      },
    ],
    metaTitle: 'Agence Web Haute-Savoie (74) — Création de sites Annecy et Chamonix | Pixeloria',
    metaDescription:
      'Pixeloria crée des sites web premium pour les entreprises de Haute-Savoie. Annecy, Chamonix, Megève. Tourisme, startups, industrie. Devis gratuit.',
    ogTitle: 'Agence Web Haute-Savoie & Annecy — Sites premium | Pixeloria',
    ogDescription: 'Sites web haut de gamme pour les professionnels de Haute-Savoie (74). Annecy, Chamonix, industrie de précision.',
  },
};
