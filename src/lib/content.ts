export type Locale = "fr" | "en";
export const LOCALES: Locale[] = ["fr", "en"];
export const DEFAULT_LOCALE: Locale = "fr";

export type Solution = {
  id: string;
  step: string;
  name: string;
  tagline: string;
  objectif: string;
  pourQui: string[];
  actions: string[];
  livrables: string[];
  premium?: boolean;
};

export type PageContent = {
  meta: { title: string; description: string; ogLocale: string };
  nav: {
    links: { href: string; label: string }[];
    contact: string;
    langLabel: string;
  };
  hero: {
    eyebrow: string;
    h1: string;
    lede: string;
    ctaPrimary: string;
    ctaSecondary: string;
    figcaption: string;
  };
  boussole: { eyebrow: string; quote: string; caption: string };
  apropos: { eyebrow: string; h2: string; p1: string; p2: string };
  methode: {
    eyebrow: string;
    h2: string;
    p: string;
    etapes: { n: string; t: string; d: string }[];
  };
  solutionsSection: {
    eyebrow: string;
    h2: string;
    p: string;
    hesitant: string;
    labels: { pourQui: string; actions: string; livrables: string; premium: string };
  };
  solutions: Solution[];
  difference: {
    eyebrow: string;
    h2: string;
    items: { t: string; d: string }[];
    closing: string;
  };
  expertise: {
    founderName: string;
    founderRole: string;
    terrainLabel: string;
    terrainValue: string;
    specialiteLabel: string;
    specialiteValue: string;
    attacheLabel: string;
    attacheValue: string;
    eyebrow: string;
    h2: string;
    p1: string;
    p2: string;
    certDoneTitle: string;
    certDoneItems: string[];
    certRoadmapTitle: string;
    certRoadmapItems: string[];
  };
  secteurs: {
    eyebrow: string;
    h2: string;
    p: string;
    public: { eyebrow: string; h3: string; p: string; chips: string[]; exemple: string };
    prive: { eyebrow: string; h3: string; p: string; chips: string[]; exemple: string };
  };
  faq: { eyebrow: string; h2: string; items: { q: string; r: string }[] };
  contact: {
    eyebrow: string;
    welcome: string;
    h2: string;
    p: string;
    ctaEmail: string;
    ctaBack: string;
  };
  footer: { tagline: string; brandNote: string };
  notFound: { title: string; body: string; cta: string };
};

const solutionsFr: Solution[] = [
  {
    id: "discover",
    step: "01",
    name: "Diagnostic",
    tagline: "Objectiver votre situation réelle, préalablement à tout engagement.",
    objectif:
      "Nous conduisons un diagnostic sans complaisance : ce qui fonctionne, ce qui génère un surcoût, ce qui expose l'organisation à un risque. La direction est consultée, puis les équipes opérationnelles, hors présence hiérarchique — les deux lectures de la réalité sont ensuite confrontées.",
    pourQui: [
      "Bénéficier d'un regard externe et objectivé",
      "Préparer une transformation",
      "Structurer votre organisation",
    ],
    actions: [
      "Audit des processus sur site (Gemba)",
      "Audit qualité et documentaire",
      "Cartographie des processus",
      "Analyse des risques et diagnostic de maturité",
      "Entretiens confidentiels avec les utilisateurs, hors présence hiérarchique",
    ],
    livrables: [
      "Rapport d'audit",
      "Cartographie des processus",
      "Analyse des écarts entre la vision de la Direction et la réalité du terrain",
      "Analyse des causes racines",
      "Priorisation impact/effort et feuille de route",
    ],
  },
  {
    id: "improve",
    step: "02",
    name: "Optimisation",
    tagline: "Des processus robustes, y compris en conditions de charge élevée.",
    objectif:
      "Nous repensons vos modes opératoires afin d'éliminer les étapes à non-valeur ajoutée, les erreurs récurrentes et les temps d'attente. La réponse retenue — digitale ou non — est celle qui s'inscrit durablement dans votre réalité opérationnelle, non la plus démonstrative.",
    pourQui: [
      "Améliorer la qualité, réduire le taux d'erreur",
      "Réduire les délais et les gaspillages",
      "Standardiser les modes opératoires",
    ],
    actions: [
      "Optimisation des processus et standardisation",
      "Élaboration de procédures et modes opératoires",
      "Déploiement d'indicateurs clés de performance",
      "Gestion des risques opérationnels",
      "Arbitrage transparent : le digital retenu uniquement lorsqu'il constitue la réponse la plus pertinente",
    ],
    livrables: [
      "Nouveaux processus",
      "Procédures et modes opératoires",
      "Tableaux de bord",
      "Plan d'amélioration continue",
    ],
  },
  {
    id: "transform",
    step: "03",
    name: "Déploiement",
    tagline: "Du plan d'action à la pratique quotidienne — jusqu'à l'adoption effective.",
    objectif:
      "Nous accompagnons la mise en œuvre jusqu'à ce que le nouveau mode de fonctionnement soit pleinement intégré : pilotage de projet structuré, équipes formées, prototype validé sur site avant toute généralisation.",
    pourQui: [
      "Conduire un changement, déployer de nouveaux processus",
      "Digitaliser une activité ciblée",
      "Moderniser vos modes opératoires",
    ],
    actions: [
      "Gestion de projet et conduite du changement",
      "Formation des utilisateurs finaux et des équipes internes",
      "Briques applicatives : gestion des flux et de l'affluence, accueil orienté, facturation intégrée au paiement mobile local, prise de rendez-vous, tableau de bord de pilotage",
      "Automatisation et intelligence artificielle, sous réserve d'une valeur ajoutée démontrée et d'une connectivité compatible",
      "Prototype validé sur site avant généralisation",
    ],
    livrables: [
      "Processus déployés",
      "Documentation",
      "Équipes formées",
      "Outils configurés",
      "Plan de conduite du changement",
    ],
  },
  {
    id: "sustain",
    step: "04",
    name: "Pérennisation",
    tagline: "Ancrer durablement les résultats obtenus, au-delà du déploiement.",
    objectif:
      "Passé un premier semestre, le retour aux pratiques antérieures constitue un risque avéré. Nous procédons à une revue des indicateurs, mesurons l'usage réel, accompagnons vos équipes et réengageons la dynamique d'amélioration si nécessaire.",
    pourQui: [
      "Éviter le retour aux pratiques antérieures",
      "Assurer le suivi de vos indicateurs",
      "Maintenir votre niveau de qualité",
    ],
    actions: [
      "Audits de suivi et revues de performance",
      "Analyse des indicateurs clés de performance, dont le taux d'adoption réelle par les utilisateurs",
      "Coaching des équipes",
      "Plans d'amélioration continue",
    ],
    livrables: [
      "Rapports de suivi",
      "Tableaux de bord et indicateurs",
      "Plans d'action",
      "Recommandations",
    ],
  },
  {
    id: "excel",
    step: "★",
    name: "Excellence",
    tagline: "Une reconnaissance internationale, étayée par des preuves documentées.",
    premium: true,
    objectif:
      "Pour les organisations ayant déjà consolidé leurs fondamentaux : nous vous conduisons au niveau d'exigence attendu par les référentiels internationaux et les bailleurs de fonds, jusqu'à la préparation d'une certification.",
    pourQui: [
      "Préparer une certification (ISO 9001, par exemple)",
      "Structurer durablement votre système de management",
      "Renforcer votre crédibilité auprès des bailleurs internationaux (BAD, Banque mondiale, AFD)",
    ],
    actions: [
      "Préparation aux référentiels internationaux",
      "Évaluation de maturité",
      "Accompagnement stratégique",
      "Renforcement du système de management",
      "Développement d'une culture qualité",
    ],
    livrables: [
      "Feuille de route d'excellence",
      "Plan de transformation",
      "Indicateurs de maturité",
      "Programme d'amélioration continue",
    ],
  },
];

const solutionsEn: Solution[] = [
  {
    id: "discover",
    step: "01",
    name: "Discover",
    tagline: "Objectively establish your current position, prior to any commitment.",
    objectif:
      "We conduct an unvarnished diagnostic: what is functioning, what is generating excess cost, what exposes the organisation to risk. Leadership is consulted first, then operational teams, away from the hierarchy — the two accounts of reality are then set against one another.",
    pourQui: [
      "Obtain an objectivised, external perspective",
      "Prepare for a transformation",
      "Structure your organisation",
    ],
    actions: [
      "On-site process audit (Gemba)",
      "Quality and documentation audit",
      "Process mapping",
      "Risk analysis and maturity diagnostic",
      "Confidential interviews with users, away from the hierarchy",
    ],
    livrables: [
      "Audit report",
      "Process map",
      "Gap analysis between leadership's view and operational reality",
      "Root-cause analysis",
      "Impact/effort prioritisation and roadmap",
    ],
  },
  {
    id: "improve",
    step: "02",
    name: "Improve",
    tagline: "Robust processes, including under conditions of peak load.",
    objectif:
      "We redesign your operating methods to eliminate non-value-added steps, recurring errors and wait times. The response selected — digital or otherwise — is the one that holds durably within your operational reality, not the most demonstrative.",
    pourQui: [
      "Improve quality, reduce error rates",
      "Reduce lead times and waste",
      "Standardise operating methods",
    ],
    actions: [
      "Process optimisation and standardisation",
      "Development of procedures and standard operating instructions",
      "Deployment of key performance indicators (KPIs)",
      "Operational risk management",
      "Transparent arbitration: digital retained only where it constitutes the most relevant response",
    ],
    livrables: [
      "New processes",
      "Procedures and operating instructions",
      "Dashboards",
      "Continuous improvement plan",
    ],
  },
  {
    id: "transform",
    step: "03",
    name: "Transform",
    tagline: "From action plan to daily practice — through to effective adoption.",
    objectif:
      "We support implementation until the new operating model is fully embedded: structured project governance, trained teams, a prototype validated on site prior to any wider rollout.",
    pourQui: [
      "Deliver organisational change, roll out new processes",
      "Digitalise a targeted activity",
      "Modernise your operating methods",
    ],
    actions: [
      "Project management and change governance",
      "Training of end users and internal teams",
      "Application building blocks: queue and flow management, guided reception, billing integrated with local mobile payment, appointment scheduling, performance dashboard",
      "Automation and artificial intelligence, subject to demonstrated value and compatible connectivity",
      "Prototype validated on site prior to full-scale deployment",
    ],
    livrables: [
      "Processes deployed",
      "Documentation",
      "Trained teams",
      "Configured tools",
      "Change management plan",
    ],
  },
  {
    id: "sustain",
    step: "04",
    name: "Sustain",
    tagline: "Preventing a return to prior practice.",
    objectif:
      "Beyond an initial six-month period, reversion to former practice constitutes a proven risk. We conduct an indicator review, measure actual usage, support your teams and re-engage the improvement dynamic where required.",
    pourQui: [
      "Avoid reverting to prior practice",
      "Track your performance indicators",
      "Sustain your quality standards",
    ],
    actions: [
      "Follow-up audits and performance reviews",
      "KPI analysis, including actual user adoption rate",
      "Team coaching",
      "Continuous improvement plans",
    ],
    livrables: [
      "Follow-up reports",
      "Dashboards and indicators",
      "Action plans",
      "Recommendations",
    ],
  },
  {
    id: "excel",
    step: "★",
    name: "Excel",
    tagline: "International recognition, substantiated by documented evidence.",
    premium: true,
    objectif:
      "For organisations that have already consolidated their fundamentals: we bring you to the standard expected by international frameworks and funding institutions, through to certification readiness.",
    pourQui: [
      "Prepare for certification (ISO 9001, for instance)",
      "Establish a lasting management structure",
      "Strengthen your credibility with international funders (AfDB, World Bank, AFD)",
    ],
    actions: [
      "Preparation against international frameworks",
      "Maturity assessment",
      "Strategic advisory",
      "Strengthening of the management system",
      "Development of a quality culture",
    ],
    livrables: [
      "Excellence roadmap",
      "Transformation plan",
      "Maturity indicators",
      "Continuous improvement programme",
    ],
  },
];

export const content: Record<Locale, PageContent> = {
  fr: {
    meta: {
      title: "Yakini — Conseil en excellence opérationnelle, qualité & transformation digitale aux Comores",
      description:
        "Yakini accompagne les organisations comoriennes dans la maîtrise de leurs processus, la fiabilisation de leurs opérations et leur transformation digitale — une approche méthodique, fondée sur des référentiels reconnus.",
      ogLocale: "fr_FR",
    },
    nav: {
      links: [
        { href: "#secteurs", label: "Secteurs" },
        { href: "#origine", label: "Origine" },
        { href: "#methode", label: "Méthodologie" },
        { href: "#solutions", label: "Solutions" },
        { href: "#difference", label: "Différenciation" },
        { href: "#expertise", label: "Expertise" },
      ],
      contact: "Nous contacter",
      langLabel: "EN",
    },
    hero: {
      eyebrow: "Conseil en excellence opérationnelle, qualité & transformation digitale — Union des Comores",
      h1: "Fiabiliser ce qui doit l'être. Simplifier ce qui peut l'être.",
      lede:
        "Files d'attente non maîtrisées, documentation lacunaire, délais de traitement en dérive, données dispersées : nous conduisons un diagnostic rigoureux pour en identifier la cause racine, puis nous la traitons — par le digital lorsqu'il constitue la réponse adaptée, par d'autres leviers lorsque ce n'est pas le cas.",
      ctaPrimary: "Solliciter un premier échange",
      ctaSecondary: "Découvrir notre méthodologie ↓",
      figcaption: "Vision de la Direction, réalité opérationnelle du terrain — une même solution.",
    },
    boussole: {
      eyebrow: "Notre boussole",
      quote:
        "« Est-ce que ça répond vraiment au besoin de l'organisation — assez pour que ça dure ? »",
      caption:
        "Si cette exigence n'est pas satisfaite, nous ne livrons pas — quelle que soit la sophistication technique de la solution.",
    },
    apropos: {
      eyebrow: "Notre origine",
      h2: "Une conviction transposée, une ambition qui grandit avec chaque mission.",
      p1: "Yakini est né d'un constat simple : les méthodes qui garantissent la fiabilité des organisations les plus exigeantes — audit rigoureux, systèmes de gestion de la qualité, amélioration continue — n'ont pas d'équivalent structuré aux Comores. Pourtant, les organisations comoriennes affrontent des enjeux de fiabilité opérationnelle tout aussi réels. Ce constat est devenu une conviction, puis une mission : transposer cette exigence méthodologique aux réalités comoriennes, sans jamais perdre de vue les contraintes concrètes de connectivité, de budget et de gouvernance qui définissent le terrain.",
      p2: "Cette mission porte une trajectoire. À mesure que l'activité se structure, l'ambition de Yakini est de recruter et de former des équipes basées aux Comores, et de s'ouvrir à des partenariats avec des entrepreneurs comoriens — pour que l'expertise développée reste et grandisse sur place, au service d'une transformation durable plutôt que ponctuelle.",
    },
    methode: {
      eyebrow: "Notre méthodologie",
      h2: "Cinq phases. Aucune décision imposée sans concertation préalable.",
      p: "La direction et les équipes opérationnelles sont consultées séparément, en amont de toute recommandation. C'est ce qui distingue une solution durablement adoptée d'un outil abandonné après quelques semaines.",
      etapes: [
        { n: "1", t: "Recueillir", d: "La vision de la direction, puis celle des équipes opérationnelles — recueillies de façon indépendante. Chaque lecture du réel fait foi." },
        { n: "2", t: "Objectiver", d: "Les délais, les taux d'erreur, les étapes à faible valeur ajoutée : nous quantifions ce qui, jusque-là, relevait de l'impression." },
        { n: "3", t: "Recommander", d: "Une réponse proportionnée à votre organisation et à votre budget — digitale lorsque pertinent, organisationnelle en premier lieu la plupart du temps." },
        { n: "4", t: "Déployer", d: "Avec vos équipes, sur un périmètre pilote, avant toute généralisation." },
        { n: "5", t: "Pérenniser", d: "Six mois après le déploiement : taux d'adoption réel, gains mesurés, ajustements si nécessaire." },
      ],
    },
    solutionsSection: {
      eyebrow: "Notre offre",
      h2: "Mobilisez la phase dont vous avez besoin — pas l'intégralité du dispositif.",
      p: "Cinq niveaux d'intervention, du diagnostic initial à la préparation d'une certification internationale. Chaque niveau constitue une prestation autonome. Consultez celui qui correspond à votre besoin pour en connaître le périmètre exact.",
      hesitant: "Une hésitation sur le point d'entrée ? Le module Conseils propose un avis motivé, sans engagement contractuel.",
      labels: { pourQui: "Pour qui", actions: "Prestations réalisées", livrables: "Livrables", premium: "Niveau premium" },
    },
    solutions: solutionsFr,
    difference: {
      eyebrow: "Notre différenciation",
      h2: "Notre discipline : refuser une mission plutôt que vendre au-delà du nécessaire.",
      items: [
        { t: "L'écoute des équipes opérationnelles", d: "Une solution conçue sans ses utilisateurs finaux est, par construction, vouée à l'abandon. Nous les rencontrons hors présence hiérarchique et confrontons leur expérience à la vision de la direction." },
        { t: "L'arbitrage sans conflit d'intérêt", d: "Lorsqu'un enjeu relève de l'organisation plutôt que de la technologie, nous le signalons explicitement — y compris lorsqu'une solution logicielle serait commercialement plus favorable pour nous." },
        { t: "La transparence sur notre périmètre de compétence", d: "Ce que nous maîtrisons, nous le réalisons en interne. Ce qui excède notre périmètre est confié à des partenaires sélectionnés, identifiés dès le cadrage de la mission." },
        { t: "Le transfert de compétences comme condition de sortie", d: "Vos équipes doivent pouvoir opérer en autonomie. La formation des utilisateurs finaux fait partie intégrante de la mission, non d'une prestation facturée séparément." },
        { t: "La responsabilité au-delà de la livraison", d: "La mise en production ne marque pas la fin de notre engagement. Suivi, ajustements, disponibilité : nous demeurons responsables de la solution déployée." },
      ],
      closing: "Nous ne promettons pas de solution miracle. Nous engageons notre responsabilité dans la durée : la solution doit continuer de fonctionner dans un an.",
    },
    expertise: {
      founderName: "Moursala Soudjay",
      founderRole: "Fondateur",
      terrainLabel: "Secteur",
      terrainValue: "Industrie pharmaceutique — France, Suisse",
      specialiteLabel: "Spécialité",
      specialiteValue: "Qualification & validation des équipements et systèmes informatisés (CQV/CSV)",
      attacheLabel: "Ancrage",
      attacheValue: "Franco-comorien, né aux Comores",
      eyebrow: "Notre expertise",
      h2: "Une exigence méthodologique héritée d'un secteur où l'approximation n'a pas sa place.",
      p1: "Yakini est né du parcours professionnel de Moursala Soudjay, formé à l'Université Claude Bernard Lyon 1 et consultant depuis plusieurs années en qualification et validation des équipements et systèmes informatisés (CQV/CSV) au sein de l'industrie pharmaceutique, en France puis en Suisse. Dans cet environnement réglementé, aucun système n'est présumé fonctionnel tant que sa performance n'a pas été démontrée, documentée et vérifiée selon un protocole formel.",
      p2: "Cette exigence méthodologique se double d'une pratique concrète et continue du digital et de l'intelligence artificielle — conception d'outils d'automatisation et d'applications propriétaires. C'est ce double socle, réglementaire et opérationnel, que Yakini transpose aujourd'hui aux organisations comoriennes.",
      certDoneTitle: "Certifications acquises",
      certDoneItems: ["Certification Lean Management", "Analyse de données & Power BI", "Pratique des environnements réglementés (CQV/CSV)"],
      certRoadmapTitle: "Feuille de route",
      certRoadmapItems: ["ISO 9001 Lead Auditor", "ISO 19011 Auditeur", "Lean Six Sigma Green Belt"],
    },
    secteurs: {
      eyebrow: "Pour qui",
      h2: "Les dysfonctionnements se ressemblent — nos réponses, jamais.",
      p: "Chaque mission part d'un diagnostic propre à votre organisation, votre budget et votre niveau de maturité — jamais d'un modèle standard appliqué tel quel.",
      public: {
        eyebrow: "Secteur public",
        h3: "Institutions & administrations de l'État comorien",
        p: "Réduction des files d'attente, dématérialisation ciblée, délais de traitement maîtrisés et communicables aux usagers.",
        chips: ["Ministères", "Santé publique", "Éducation", "Douanes & finances publiques", "Collectivités locales"],
        exemple: "Exemple type : accueil hospitalier saturé, aucun tri à l'arrivée — un point d'enregistrement et d'orientation des patients.",
      },
      prive: {
        eyebrow: "Secteur privé",
        h3: "Entreprises privées, de la PME au grand groupe",
        p: "Réduction du taux d'erreur, gain de temps opérationnel, données fiabilisées au service de la prise de décision.",
        chips: ["Santé", "Commerce", "Tourisme", "Industrie", "Finance", "Transport", "Éducation"],
        exemple: "Exemple type : facturation manuelle, source d'erreurs et de retards — une facturation automatisée, intégrée au paiement mobile local.",
      },
    },
    faq: {
      eyebrow: "Questions fréquentes",
      h2: "Ce que l'on nous demande avant de s'engager.",
      items: [
        { q: "Comment engager une première prise de contact ?", r: "Par un premier échange, sans engagement contractuel ni facturation. Vous exposez votre contexte ; nous formulons un avis motivé sur la première action pertinente à engager — y compris lorsque celle-ci ne relève pas d'une mission pour Yakini." },
        { q: "L'accompagnement doit-il être engagé dans son intégralité ?", r: "Non. Chaque phase constitue une prestation autonome — un audit isolé ou un périmètre limité à un processus unique sont des points d'entrée valides. La poursuite de l'accompagnement se décide à l'issue de chaque étape." },
        { q: "Quel est le modèle tarifaire ?", r: "Le tarif est fonction du périmètre de la mission, non d'une grille catalogue. À l'issue du premier échange, une proposition écrite est transmise : objectifs, livrables, calendrier et budget — calibrée sur la capacité d'engagement réelle de votre organisation." },
        { q: "Notre connexion internet est mauvaise. Est-ce bloquant ?", r: "Non — il s'agit d'une contrainte de conception intégrée dès le cadrage. Nos recommandations tiennent compte de votre connectivité réelle et de la fréquence des coupures d'alimentation. Une solution nécessitant une connexion permanente ne sera pas proposée si le contexte opérationnel ne permet pas de la soutenir." },
        { q: "L'adhésion de nos équipes est-elle garantie ?", r: "Il s'agit précisément du risque que notre méthodologie adresse en priorité : les équipes sont associées dès la phase de diagnostic, formées préalablement au déploiement, et le taux d'adoption réel fait l'objet d'une mesure post-déploiement." },
      ],
    },
    contact: {
      eyebrow: "Premier échange",
      welcome: "Karibu.",
      h2: "Faites-nous part de votre contexte. Vous recevrez une analyse motivée, sans détour.",
      p: "Quelques lignes suffisent : ce qui vous freine aujourd'hui, et le résultat recherché. Vous recevrez un avis motivé sur la première action à engager — sans engagement contractuel, y compris si celle-ci ne relève pas d'une mission pour Yakini.",
      ctaEmail: "Contacter Yakini — contact@yakini.km",
      ctaBack: "Revenir en haut",
    },
    footer: {
      tagline: "YAKINI — Conseil en excellence opérationnelle & transformation digitale · Union des Comores",
      brandNote: "Yakini, du shikomori : la certitude, la preuve — l'exigence qui porte chacune de nos missions.",
    },
    notFound: {
      title: "Page introuvable",
      body: "La page que vous cherchez n'existe pas ou a été déplacée.",
      cta: "Retour à l'accueil",
    },
  },
  en: {
    meta: {
      title: "Yakini — Operational excellence consulting, quality & digital transformation in the Comoros",
      description:
        "Yakini supports Comorian organisations in mastering their processes, strengthening operational reliability and delivering digital transformation — a methodical approach, grounded in recognised standards.",
      ogLocale: "en_US",
    },
    nav: {
      links: [
        { href: "#secteurs", label: "Sectors" },
        { href: "#origine", label: "Origin" },
        { href: "#methode", label: "Methodology" },
        { href: "#solutions", label: "Solutions" },
        { href: "#difference", label: "Differentiation" },
        { href: "#expertise", label: "Expertise" },
      ],
      contact: "Contact us",
      langLabel: "FR",
    },
    hero: {
      eyebrow: "Operational excellence consulting, quality & digital transformation — Union of the Comoros",
      h1: "Reliability, restored. Complexity, removed.",
      lede:
        "Unmanaged queues, patchy documentation, lead times in drift, dispersed data: we conduct a rigorous diagnostic to identify the root cause, then address it — through digital means where they constitute the appropriate response, through other levers where they do not.",
      ctaPrimary: "Request a diagnostic conversation",
      ctaSecondary: "Discover our methodology ↓",
      figcaption: "Leadership's perspective, operational reality on the ground — one solution.",
    },
    boussole: {
      eyebrow: "Our compass",
      quote:
        "\u201cDoes it genuinely meet the organisation's need — enough for it to last?\u201d",
      caption:
        "Where this standard is not met, we do not deliver — irrespective of the solution's technical sophistication.",
    },
    apropos: {
      eyebrow: "Our origin",
      h2: "A conviction transposed, an ambition that grows with every mission.",
      p1: "Yakini was born from a simple observation: the methods that guarantee reliability within the most demanding organisations — rigorous audit, quality management systems, continuous improvement — have no structured equivalent in the Comoros. Yet Comorian organisations face operational reliability challenges that are just as real. That observation became a conviction, then a mission: to transpose this methodological rigour to Comorian realities, without ever losing sight of the concrete constraints of connectivity, budget and governance that define the ground.",
      p2: "This mission carries a trajectory. As the practice grows, Yakini's ambition is to recruit and train teams based in the Comoros, and to open the structure to partnerships with Comorian entrepreneurs — so that the expertise developed remains and grows locally, in service of durable transformation rather than a one-off intervention.",
    },
    methode: {
      eyebrow: "Our methodology",
      h2: "Five phases. No decision imposed without prior consultation.",
      p: "Leadership and operational teams are consulted independently, ahead of any recommendation. This is what distinguishes a solution that is durably adopted from a tool abandoned within weeks.",
      etapes: [
        { n: "1", t: "Gather", d: "Leadership's perspective, then that of operational teams — gathered independently. Both readings of reality are given full weight." },
        { n: "2", t: "Quantify", d: "Lead times, error rates, low-value-added steps: we quantify what had, until then, remained a matter of impression." },
        { n: "3", t: "Recommend", d: "A response proportionate to your organisation and your budget — digital where relevant, organisational in the first instance in most cases." },
        { n: "4", t: "Deploy", d: "With your teams, on a pilot scope, prior to any wider rollout." },
        { n: "5", t: "Sustain", d: "Six months post-deployment: actual adoption rate, measured gains, adjustments where required." },
      ],
    },
    solutionsSection: {
      eyebrow: "Our offering",
      h2: "Engage the phase you require — not the entire programme.",
      p: "Five levels of intervention, from initial diagnostic to preparation for international certification. Each level constitutes an autonomous engagement. Consult the one relevant to your needs for its precise scope.",
      hesitant: "Uncertain where to begin? Conseils provides a substantiated opinion, without contractual commitment.",
      labels: { pourQui: "Who it serves", actions: "Services delivered", livrables: "Deliverables", premium: "Premium tier" },
    },
    solutions: solutionsEn,
    difference: {
      eyebrow: "Our differentiation",
      h2: "Our discipline: declining an engagement rather than overselling.",
      items: [
        { t: "Engagement with operational teams", d: "A solution designed without its end users is, by construction, destined for abandonment. We meet them away from the hierarchy and set their experience against leadership's perspective." },
        { t: "Arbitration free of conflict of interest", d: "Where an issue is organisational rather than technological in nature, we state it explicitly — including where a software solution would be commercially more favourable to us." },
        { t: "Transparency on the boundaries of our competence", d: "What we master, we deliver in-house. What exceeds our scope is entrusted to selected partners, identified from the mission's outset." },
        { t: "Knowledge transfer as a condition of exit", d: "Your teams must be able to operate autonomously. Training end users is integral to the mission, not a separately billed service." },
        { t: "Accountability beyond delivery", d: "Go-live does not mark the end of our engagement. Follow-up, adjustments, availability: we remain accountable for the solution deployed." },
      ],
      closing: "We do not promise a miracle solution. We commit to accountability over time: the solution must still be working a year on.",
    },
    expertise: {
      founderName: "Moursala Soudjay",
      founderRole: "Founder",
      terrainLabel: "Sector",
      terrainValue: "Pharmaceutical industry — France, Switzerland",
      specialiteLabel: "Specialty",
      specialiteValue: "Equipment & Computer System Qualification/Validation (CQV/CSV)",
      attacheLabel: "Roots",
      attacheValue: "Franco-Comorian, born in the Comoros",
      eyebrow: "Our expertise",
      h2: "A methodological rigour inherited from a sector where approximation has no place.",
      p1: "Yakini originates in Moursala Soudjay's professional trajectory: trained at Université Claude Bernard Lyon 1, and for several years a consultant in Equipment and Computer System Qualification and Validation (CQV/CSV) within the pharmaceutical industry, in France and Switzerland. Within that regulated environment, no system is presumed functional until its performance has been demonstrated, documented and verified against a formal protocol.",
      p2: "This methodological rigour is complemented by a sustained, hands-on practice of digital tools and artificial intelligence — the design of proprietary automation tools and applications. It is this dual foundation, regulatory and operational, that Yakini now applies to Comorian organisations.",
      certDoneTitle: "Credentials held",
      certDoneItems: ["Lean Management certification", "Data analysis & Power BI", "Practical experience in regulated environments (CQV/CSV)"],
      certRoadmapTitle: "Development roadmap",
      certRoadmapItems: ["ISO 9001 Lead Auditor", "ISO 19011 Auditor", "Lean Six Sigma Green Belt"],
    },
    secteurs: {
      eyebrow: "Who it serves",
      h2: "The friction looks familiar. Our response never does.",
      p: "Every engagement starts from a diagnostic specific to your organisation, your budget and your level of maturity — never a standard template applied as-is.",
      public: {
        eyebrow: "Public sector",
        h3: "Institutions & administrations of the Comorian State",
        p: "Reduced queuing times, targeted digitalisation, and processing times that are controlled and can be communicated to the public with confidence.",
        chips: ["Ministries", "Public health", "Education", "Customs & public finance", "Local government"],
        exemple: "Typical example: an overcrowded hospital reception with no arrival triage — a structured check-in and routing point.",
      },
      prive: {
        eyebrow: "Private sector",
        h3: "Private businesses, from SME to large enterprise",
        p: "Reduced error rates, operational time returned to your teams, and reliable data to support decision-making.",
        chips: ["Healthcare", "Retail", "Tourism", "Industry", "Finance", "Transport", "Education"],
        exemple: "Typical example: manual invoicing causing errors and delays — automated billing, integrated with local mobile payment.",
      },
    },
    faq: {
      eyebrow: "Frequently asked questions",
      h2: "What people ask before they commit.",
      items: [
        { q: "How is an initial engagement structured?", r: "Through an initial conversation, without contractual commitment or invoicing. You describe your context; we provide a substantiated opinion on the first relevant action — including where that action does not constitute a mission for Yakini." },
        { q: "Must the full programme be commissioned at once?", r: "No. Each phase constitutes an autonomous engagement — a standalone audit or a scope limited to a single process are valid entry points. Continuation is determined at the close of each phase." },
        { q: "What is the pricing model?", r: "Pricing is determined by mission scope, not a catalogue rate. Following the initial conversation, a written proposal is issued: objectives, deliverables, timeline and budget — calibrated to your organisation's actual capacity to commit." },
        { q: "Our internet connectivity is poor. Is this a constraint?", r: "No — it is a design constraint incorporated from the outset. Our recommendations account for your actual connectivity and the frequency of power outages. A solution requiring permanent connectivity will not be proposed where the operational context cannot sustain it." },
        { q: "Is team adoption assured?", r: "This is precisely the risk our methodology addresses as a priority: teams are engaged from the diagnostic phase, trained ahead of deployment, and actual adoption rate is measured post-deployment." },
      ],
    },
    contact: {
      eyebrow: "Initial conversation",
      welcome: "Karibu.",
      h2: "Describe your context. Our opinion will be communicated directly.",
      p: "A few lines suffice: what's holding you back today, and the outcome you're after. You will receive a substantiated opinion on the first action to undertake — without contractual commitment, including where the response does not constitute a mission for Yakini.",
      ctaEmail: "Contact Yakini — contact@yakini.km",
      ctaBack: "Back to top",
    },
    footer: {
      tagline: "YAKINI — Operational excellence consulting & digital transformation · Union of the Comoros",
      brandNote: "Yakini, from Shikomori: certainty, proof — the standard behind every mission we take on.",
    },
    notFound: {
      title: "Page not found",
      body: "The page you're looking for doesn't exist or has been moved.",
      cta: "Go home",
    },
  },
};
