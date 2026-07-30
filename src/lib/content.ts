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
    public: { eyebrow: string; h3: string; p: string };
    prive: { eyebrow: string; h3: string; p: string; chips: string[] };
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
    name: "Discover",
    tagline: "Savoir où vous en êtes vraiment, avant d'investir.",
    objectif:
      "Nous établissons un état des lieux sans complaisance : ce qui fonctionne, ce qui coûte cher, ce qui fait courir un risque. Nous écoutons votre direction, puis vos équipes hors présence hiérarchique, et nous mettons les deux récits face à face.",
    pourQui: [
      "Disposer d'un regard externe et objectif",
      "Préparer une transformation",
      "Structurer son organisation",
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
      "Écarts entre vision Direction et vécu Terrain",
      "Analyse des causes racines",
      "Priorisation impact/effort et feuille de route",
    ],
  },
  {
    id: "improve",
    step: "02",
    name: "Improve",
    tagline: "Des processus qui tiennent, même les jours de forte charge.",
    objectif:
      "Nous reconstruisons votre façon de travailler pour supprimer les étapes inutiles, les erreurs récurrentes et les attentes. Digitales ou non : nous choisissons la réponse qui tient dans votre réalité, pas la plus moderne.",
    pourQui: [
      "Améliorer la qualité, réduire les erreurs",
      "Réduire les délais et les gaspillages",
      "Standardiser les méthodes de travail",
    ],
    actions: [
      "Optimisation des processus et standardisation",
      "Création de procédures et modes opératoires",
      "Mise en place de KPI",
      "Gestion des risques opérationnels",
      "Recommandation honnête : le digital uniquement quand c'est la meilleure réponse",
    ],
    livrables: [
      "Nouveaux processus",
      "Procédures et modes opératoires",
      "Tableaux de bord",
      "Plan d'amélioration",
    ],
  },
  {
    id: "transform",
    step: "03",
    name: "Transform",
    tagline: "Passer du plan au quotidien — et faire adopter le changement.",
    objectif:
      "Nous restons à vos côtés jusqu'à ce que le nouveau fonctionnement devienne l'habitude : projet piloté, équipes formées, prototype testé sur site avant toute généralisation.",
    pourQui: [
      "Réussir un changement, déployer de nouveaux processus",
      "Digitaliser une activité ciblée",
      "Moderniser ses méthodes de travail",
    ],
    actions: [
      "Gestion de projet et conduite du changement",
      "Formation des utilisateurs finaux et des équipes internes",
      "Briques digitales : ticketing/affluence, accueil orienté, facturation intégrée au paiement mobile local, prise de rendez-vous, tableau de bord",
      "Automatisation et IA lorsqu'elles apportent une valeur réelle, connectivité disponible comprise",
      "Prototype testé sur site avant tout déploiement complet",
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
    name: "Sustain",
    tagline: "Éviter que tout revienne comme avant.",
    objectif:
      "Six mois plus tard, les anciennes habitudes reviennent souvent. Nous revenons vérifier les indicateurs, mesurer l'usage réel, accompagner vos équipes et relancer la dynamique.",
    pourQui: [
      "Éviter le retour aux anciennes pratiques",
      "Suivre ses indicateurs",
      "Maintenir son niveau de qualité",
    ],
    actions: [
      "Audits de suivi et revues de performance",
      "Analyse des KPI, dont le taux d'adoption réelle par les utilisateurs",
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
    name: "Excel",
    tagline: "Être reconnu au niveau international, preuves à l'appui.",
    premium: true,
    objectif:
      "Pour les organisations déjà solides : nous vous amenons au niveau exigé par les référentiels internationaux et les bailleurs, jusqu'à la préparation d'une certification.",
    pourQui: [
      "Préparer une certification (ISO 9001 par exemple)",
      "Structurer durablement son management",
      "Renforcer sa crédibilité auprès des bailleurs internationaux (BAD, Banque mondiale, AFD)",
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
    tagline: "Know where you truly stand, before you invest.",
    objectif:
      "We produce an unvarnished assessment: what works, what is costly, what carries risk. We listen to your leadership, then to your teams away from the hierarchy, and set the two accounts side by side.",
    pourQui: [
      "Get an objective, external perspective",
      "Prepare for a transformation",
      "Structure the organisation",
    ],
    actions: [
      "On-site process audit (Gemba)",
      "Quality and document audit",
      "Process mapping",
      "Risk analysis and maturity diagnosis",
      "Confidential interviews with users, away from the hierarchy",
    ],
    livrables: [
      "Audit report",
      "Process map",
      "Gaps between Leadership's view and the reality on the ground",
      "Root-cause analysis",
      "Impact/effort prioritisation and roadmap",
    ],
  },
  {
    id: "improve",
    step: "02",
    name: "Improve",
    tagline: "Processes that hold up, even under heavy load.",
    objectif:
      "We rebuild how you work to remove unnecessary steps, recurring errors and wait times. Digital or not: we choose the answer that fits your reality, not the most fashionable one.",
    pourQui: [
      "Improve quality, reduce errors",
      "Cut delays and waste",
      "Standardise working methods",
    ],
    actions: [
      "Process optimisation and standardisation",
      "Creation of procedures and standard operating instructions",
      "KPI implementation",
      "Operational risk management",
      "Honest recommendation: digital only when it is genuinely the best answer",
    ],
    livrables: [
      "New processes",
      "Procedures and operating instructions",
      "Dashboards",
      "Improvement plan",
    ],
  },
  {
    id: "transform",
    step: "03",
    name: "Transform",
    tagline: "From plan to daily practice — and getting the change adopted.",
    objectif:
      "We stay by your side until the new way of working becomes habit: a steered project, trained teams, a prototype tested on site before any wider rollout.",
    pourQui: [
      "Deliver a change, roll out new processes",
      "Digitalise a specific activity",
      "Modernise working methods",
    ],
    actions: [
      "Project management and change management",
      "Training for end users and internal teams",
      "Digital building blocks: queue/ticketing, guided reception, billing integrated with local mobile payment, appointment booking, dashboard",
      "Automation and AI where they add real value, connectivity constraints included",
      "Prototype tested on site before any full rollout",
    ],
    livrables: [
      "Processes deployed",
      "Documentation",
      "Trained teams",
      "Tools configured",
      "Change management plan",
    ],
  },
  {
    id: "sustain",
    step: "04",
    name: "Sustain",
    tagline: "Stopping everything from drifting back to how it was.",
    objectif:
      "Six months on, old habits often creep back. We return to check the indicators, measure real usage, support your teams and re-energise the effort.",
    pourQui: [
      "Avoid reverting to old practices",
      "Track your indicators",
      "Maintain your quality level",
    ],
    actions: [
      "Follow-up audits and performance reviews",
      "KPI analysis, including real user adoption rate",
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
    tagline: "Recognised internationally, evidence in hand.",
    premium: true,
    objectif:
      "For already-solid organisations: we bring you to the standard required by international frameworks and funders, through to certification readiness.",
    pourQui: [
      "Prepare for a certification (ISO 9001, for instance)",
      "Build a lasting management structure",
      "Strengthen credibility with international funders (AfDB, World Bank, AFD)",
    ],
    actions: [
      "Preparation for international frameworks",
      "Maturity assessment",
      "Strategic advisory",
      "Strengthening the management system",
      "Building a quality culture",
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
      title: "Yakini — Conseil, qualité & transformation digitale aux Comores",
      description:
        "Yakini aide les organisations comoriennes à travailler mieux : processus plus fiables, délais plus courts, outils réellement utilisés. Le digital seulement quand il est la bonne réponse.",
      ogLocale: "fr_FR",
    },
    nav: {
      links: [
        { href: "#methode", label: "Méthode" },
        { href: "#solutions", label: "Solutions" },
        { href: "#difference", label: "Différence" },
        { href: "#expertise", label: "Expertise" },
        { href: "#secteurs", label: "Secteurs" },
      ],
      contact: "Nous contacter",
      langLabel: "EN",
    },
    hero: {
      eyebrow: "Conseil, transformation digitale & IA — Union des Comores",
      h1: "Rendre simple ce qui vous complique la vie.",
      lede:
        "Files d'attente, dossiers papier, délais qui s'allongent, informations introuvables : nous cherchons d'où vient réellement le blocage, puis nous le levons. Avec un logiciel si c'est la bonne réponse — sans, quand ce n'en est pas une.",
      ctaPrimary: "Parlons de votre situation",
      ctaSecondary: "Voir comment nous travaillons ↓",
      figcaption: "Ce que dit la direction + ce que vit le terrain",
    },
    boussole: {
      eyebrow: "La question que nous posons à chaque décision",
      quote:
        "« Est-ce que cela facilite vraiment la vie de celui qui va s'en servir — et sera-t-il encore en train de s'en servir dans six mois ? »",
      caption:
        "Si nous ne pouvons pas répondre oui, nous ne vous le livrons pas — aussi impressionnant soit-il sur le papier.",
    },
    methode: {
      eyebrow: "Notre méthode",
      h2: "Cinq étapes, et personne n'est mis devant le fait accompli.",
      p: "Nous parlons à la direction et à ceux qui exécutent, séparément, avant de proposer quoi que ce soit. C'est ce qui fait la différence entre un outil adopté et un outil abandonné.",
      etapes: [
        { n: "1", t: "Écouter", d: "Votre direction, puis vos équipes — séparément. Les deux versions du réel comptent." },
        { n: "2", t: "Mesurer", d: "Ce qui se passe vraiment : les délais, les erreurs, les étapes qui coûtent cher." },
        { n: "3", t: "Proposer", d: "Une réponse à votre taille et à votre budget. Parfois du digital, souvent d'abord de l'organisation." },
        { n: "4", t: "Mettre en place", d: "Avec vos équipes, testé sur un périmètre réduit avant d'être généralisé." },
        { n: "5", t: "Vérifier", d: "Six mois plus tard : est-ce utilisé, et qu'est-ce que cela vous a fait gagner ?" },
      ],
    },
    solutionsSection: {
      eyebrow: "Nos solutions",
      h2: "Prenez l'étape dont vous avez besoin, pas le programme entier.",
      p: "Cinq niveaux d'accompagnement, du diagnostic à la certification. Chacun se tient seul. Dépliez celui qui vous concerne pour voir précisément ce que vous recevez.",
      hesitant: "Vous hésitez ? Commencez par Conseils : un avis franc, avant tout engagement.",
      labels: { pourQui: "Pour qui", actions: "Ce que nous faisons", livrables: "Livrables", premium: "Palier premium" },
    },
    solutions: solutionsFr,
    difference: {
      eyebrow: "Ce qui nous différencie",
      h2: "Nous préférons vous dire non plutôt que vous vendre trop.",
      items: [
        { t: "Nous écoutons ceux qui font le travail", d: "Une solution décidée sans les utilisateurs finit dans un tiroir. Nous les rencontrons, sans hiérarchie dans la pièce, et nous confrontons leur vécu à la vision de la direction." },
        { t: "Nous vous déconseillons ce qui est inutile", d: "Si un problème se règle par une meilleure organisation, nous vous le disons — même si un logiciel se vendrait mieux." },
        { t: "Nous annonçons nos limites", d: "Ce que nous maîtrisons, nous le faisons. Ce que nous ne maîtrisons pas, nous le confions à des partenaires choisis, et vous le savez dès le départ." },
        { t: "Nous formons avant de partir", d: "Vos équipes doivent pouvoir se passer de nous. La formation des utilisateurs fait partie de la mission, pas d'une option facturée à part." },
        { t: "Nous restons joignables après", d: "La livraison n'est pas la fin. Suivi, ajustements, réponses à vos questions : nous restons responsables de ce que nous avons installé." },
      ],
      closing: "Nous ne promettons pas de miracle. Nous promettons d'être là, et que ça marche encore dans un an.",
    },
    expertise: {
      founderName: "Moursala Soudjay",
      founderRole: "Fondateur",
      terrainLabel: "Terrain",
      terrainValue: "Industrie pharmaceutique — France, Suisse",
      specialiteLabel: "Spécialité",
      specialiteValue: "Qualification & validation des systèmes (CQV/CSV)",
      attacheLabel: "Attache",
      attacheValue: "Franco-comorien, né aux Comores",
      eyebrow: "Qui vous accompagne",
      h2: "Une rigueur venue d'un secteur où l'erreur n'est pas permise.",
      p1: "Yakini est né de l'expérience de Moursala Soudjay, formé à l'Université Claude Bernard Lyon 1 et consultant depuis plusieurs années en qualification et validation des systèmes dans l'industrie pharmaceutique, en France et en Suisse. Dans ce métier, rien n'est réputé fonctionner tant que ce n'est pas prouvé, documenté et vérifié.",
      p2: "À cette exigence s'ajoute une pratique quotidienne du digital et de l'IA — outils d'automatisation et applications conçus de ses propres mains. C'est cette méthode que Yakini applique aujourd'hui aux organisations comoriennes, sans jamais oublier d'où elle vient.",
      certDoneTitle: "Déjà acquis",
      certDoneItems: ["Certification Lean", "Analyse de données & Power BI", "Environnements réglementés (CQV/CSV)"],
      certRoadmapTitle: "Feuille de route",
      certRoadmapItems: ["ISO 9001 Lead Auditor", "ISO 19011 Auditeur", "Lean Six Sigma Green Belt"],
    },
    secteurs: {
      eyebrow: "Pour qui",
      h2: "Une administration, une PME, un cabinet : les blocages se ressemblent.",
      public: {
        eyebrow: "Secteur public",
        h3: "Institutions & administrations de l'État comorien",
        p: "Moins de files d'attente, moins de papier, des délais de traitement que vous pouvez enfin annoncer aux usagers.",
      },
      prive: {
        eyebrow: "Secteur privé",
        h3: "Entreprises de toutes tailles",
        p: "Moins d'erreurs à rattraper, du temps rendu à vos équipes, et des chiffres fiables pour décider.",
        chips: ["Santé", "Commerce", "Tourisme", "Industrie", "Finance", "Transport", "Éducation"],
      },
    },
    faq: {
      eyebrow: "Questions fréquentes",
      h2: "Les questions que l'on nous pose avant de commencer.",
      items: [
        { q: "Nous ne vous connaissons pas encore — par où commencer ?", r: "Par un simple échange, sans engagement ni facture. Vous exposez votre situation, nous vous disons franchement ce que nous en pensons et quelle serait la première action utile — même si ce n'est pas une mission pour nous." },
        { q: "Faut-il tout engager d'un coup ?", r: "Non. Vous pouvez commencer par un audit seul, ou par un seul processus. Chaque étape se tient toute seule et vous décidez de la suite à chaque fois." },
        { q: "Combien cela coûte-t-il ?", r: "Le prix dépend du périmètre, pas d'un tarif catalogue. Après le premier échange, vous recevez une offre écrite : objectifs, livrables, calendrier et budget — construite à partir de ce que votre organisation peut réellement engager." },
        { q: "Notre connexion internet est mauvaise. Est-ce bloquant ?", r: "Non, c'est une donnée de départ. Nous concevons en tenant compte de votre connectivité réelle et de vos coupures de courant. Une solution qui exige une connexion permanente ne vous sera pas proposée si le terrain ne peut pas la supporter." },
        { q: "Nos équipes vont-elles suivre ?", r: "C'est précisément le risque que nous traitons en priorité : elles sont associées dès le diagnostic, formées avant le déploiement, et nous mesurons l'usage réel après coup." },
      ],
    },
    contact: {
      eyebrow: "Premier échange",
      welcome: "Karibu.",
      h2: "Dites-nous ce qui bloque. On vous répond franchement.",
      p: "Quelques lignes suffisent : ce qui vous ralentit aujourd'hui, et ce que vous aimeriez voir changer. Vous recevrez un avis honnête sur la première chose à faire — sans engagement, et même si la réponse n'est pas une mission pour nous.",
      ctaEmail: "Écrire à contact@yakini.km",
      ctaBack: "Revenir en haut",
    },
    footer: {
      tagline: "YAKINI — Rendre simple ce qui complique la vie · Union des Comores",
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
      title: "Yakini — Consulting, quality & digital transformation in the Comoros",
      description:
        "Yakini helps Comorian organisations work better: more reliable processes, shorter turnaround times, tools that are actually used. Digital only when it's the right answer.",
      ogLocale: "en_US",
    },
    nav: {
      links: [
        { href: "#methode", label: "Method" },
        { href: "#solutions", label: "Solutions" },
        { href: "#difference", label: "Difference" },
        { href: "#expertise", label: "Expertise" },
        { href: "#secteurs", label: "Sectors" },
      ],
      contact: "Get in touch",
      langLabel: "FR",
    },
    hero: {
      eyebrow: "Consulting, digital transformation & AI — Union of the Comoros",
      h1: "Making simple what complicates your life.",
      lede:
        "Queues, paper files, lengthening delays, information nobody can find: we trace where the bottleneck actually is, then remove it. With software when that's the right answer — without it, when it isn't.",
      ctaPrimary: "Tell us about your situation",
      ctaSecondary: "See how we work ↓",
      figcaption: "What leadership says + what the ground experiences",
    },
    boussole: {
      eyebrow: "The question we ask before every decision",
      quote:
        "\u201cWill this genuinely make life easier for the person who has to use it — and will they still be using it in six months?\u201d",
      caption:
        "If we cannot answer yes, we do not deliver it — however impressive it looks on paper.",
    },
    methode: {
      eyebrow: "Our method",
      h2: "Five steps, and nobody is presented with a fait accompli.",
      p: "We speak to leadership and to the people doing the work, separately, before proposing anything at all. That is what separates a tool that gets adopted from one that gets abandoned.",
      etapes: [
        { n: "1", t: "Listen", d: "Your leadership, then your teams — separately. Both versions of reality matter." },
        { n: "2", t: "Measure", d: "What actually happens: the delays, the errors, the steps that cost the most." },
        { n: "3", t: "Propose", d: "An answer sized to you and your budget. Sometimes digital, more often organisation first." },
        { n: "4", t: "Implement", d: "With your teams, tested on a limited scope before being rolled out fully." },
        { n: "5", t: "Verify", d: "Six months later: is it being used, and what has it actually gained you?" },
      ],
    },
    solutionsSection: {
      eyebrow: "Our solutions",
      h2: "Take the step you need, not the entire programme.",
      p: "Five levels of support, from diagnosis to certification. Each one stands on its own. Open the one that concerns you to see exactly what you get.",
      hesitant: "Not sure where to start? Begin with Conseils: a frank opinion, no commitment.",
      labels: { pourQui: "Who it's for", actions: "What we do", livrables: "Deliverables", premium: "Premium tier" },
    },
    solutions: solutionsEn,
    difference: {
      eyebrow: "What sets us apart",
      h2: "We'd rather tell you no than sell you too much.",
      items: [
        { t: "We listen to the people doing the work", d: "A solution decided without its users ends up in a drawer. We meet them, with no hierarchy in the room, and set what they experience against leadership's view." },
        { t: "We talk you out of what's unnecessary", d: "If a problem is solved by better organisation, we tell you — even when software would sell better." },
        { t: "We state our limits upfront", d: "What we master, we do ourselves. What we don't, we hand to chosen partners, and you know it from day one." },
        { t: "We train before we leave", d: "Your teams should be able to do without us. Training end users is part of the mission, not a separately billed extra." },
        { t: "We stay reachable afterwards", d: "Delivery isn't the end. Follow-up, adjustments, answers to your questions: we remain responsible for what we've put in place." },
      ],
      closing: "We don't promise a miracle. We promise to be there, and that it will still work a year on.",
    },
    expertise: {
      founderName: "Moursala Soudjay",
      founderRole: "Founder",
      terrainLabel: "Field",
      terrainValue: "Pharmaceutical industry — France, Switzerland",
      specialiteLabel: "Specialty",
      specialiteValue: "Equipment & Computer System Qualification/Validation (CQV/CSV)",
      attacheLabel: "Roots",
      attacheValue: "Franco-Comorian, born in the Comoros",
      eyebrow: "Who's behind Yakini",
      h2: "A rigour drawn from a sector where error isn't an option.",
      p1: "Yakini grew out of Moursala Soudjay's experience: trained at Université Claude Bernard Lyon 1, and for several years a consultant in system qualification and validation within the pharmaceutical industry, in France and Switzerland. In that field, nothing is deemed to work until it has been proven, documented and verified.",
      p2: "Alongside that rigour sits a daily, hands-on practice of digital tools and AI — automation tools and applications built with his own hands. This is the method Yakini now applies to Comorian organisations, without ever forgetting where it comes from.",
      certDoneTitle: "Already earned",
      certDoneItems: ["Lean certification", "Data analysis & Power BI", "Regulated environments (CQV/CSV)"],
      certRoadmapTitle: "On the roadmap",
      certRoadmapItems: ["ISO 9001 Lead Auditor", "ISO 19011 Auditor", "Lean Six Sigma Green Belt"],
    },
    secteurs: {
      eyebrow: "Who it's for",
      h2: "A government office, an SME, a private practice: the bottlenecks look alike.",
      public: {
        eyebrow: "Public sector",
        h3: "Institutions & administrations of the Comorian State",
        p: "Shorter queues, less paper, and processing times you can finally state with confidence to the public.",
      },
      prive: {
        eyebrow: "Private sector",
        h3: "Businesses of every size",
        p: "Fewer errors to fix after the fact, time given back to your teams, and reliable numbers to decide with.",
        chips: ["Healthcare", "Retail", "Tourism", "Industry", "Finance", "Transport", "Education"],
      },
    },
    faq: {
      eyebrow: "Frequently asked questions",
      h2: "What people ask us before getting started.",
      items: [
        { q: "We don't know you yet — where do we start?", r: "With a simple, no-commitment, no-invoice conversation. You describe your situation, we tell you frankly what we think and what the first useful action would be — even if that action isn't a mission for us." },
        { q: "Do we have to commit to everything at once?", r: "No. You can start with an audit alone, or with a single process. Each step stands on its own, and you decide what comes next each time." },
        { q: "How much does it cost?", r: "Price depends on scope, not a catalogue rate. After the first conversation, you receive a written proposal: objectives, deliverables, timeline and budget — built from what your organisation can realistically commit." },
        { q: "Our internet connection is poor. Is that a blocker?", r: "No, it's a starting condition. We design with your real connectivity and power outages in mind. A solution requiring a permanent connection won't be proposed if the ground can't support it." },
        { q: "Will our teams actually follow through?", r: "That's precisely the risk we treat as a priority: they're involved from the diagnosis stage, trained before rollout, and we measure real usage afterwards." },
      ],
    },
    contact: {
      eyebrow: "First conversation",
      welcome: "Karibu.",
      h2: "Tell us what's holding you back. We'll answer you honestly.",
      p: "A few lines are enough: what's slowing you down today, and what you'd like to see change. You'll get an honest opinion on the first useful step — no commitment, even if the answer isn't a mission for us.",
      ctaEmail: "Email contact@yakini.km",
      ctaBack: "Back to top",
    },
    footer: {
      tagline: "YAKINI — Making simple what complicates life · Union of the Comoros",
      brandNote: "Yakini, from Shikomori: certainty, proof — the standard behind every mission we take on.",
    },
    notFound: {
      title: "Page not found",
      body: "The page you're looking for doesn't exist or has been moved.",
      cta: "Go home",
    },
  },
};
