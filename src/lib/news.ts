import type { Locale } from "@/lib/content";

export type NewsArticle = {
  id: string;
  date: string;
  category: string;
  title: string;
  excerpt: string;
  body: string[];
};

export type CuratedNews = {
  id: string;
  date: string;
  category: string;
  title: string;
  summary: string;
  sourceName: string;
  sourceUrl: string;
};

export type NewsContent = {
  meta: { title: string; description: string };
  eyebrow: string;
  h1: string;
  intro: string;
  backHome: string;
  analysesTitle: string;
  articles: NewsArticle[];
  curatedTitle: string;
  curatedIntro: string;
  readFullArticle: string;
  curated: CuratedNews[];
};

export const newsContent: Record<Locale, NewsContent> = {
  fr: {
    meta: {
      title: "News — Méthode, technologie & actualités | Yakini",
      description:
        "Réflexions de Yakini sur les méthodes d'audit et de transformation, les usages réels de l'intelligence artificielle, et les évolutions du secteur de la qualité et de la conformité.",
    },
    eyebrow: "News",
    h1: "Méthode, technologie, et ce qui change vraiment sur le terrain.",
    intro:
      "Pas de veille technologique générique : des prises de position sur ce qui, dans notre pratique quotidienne du conseil, de l'audit et de la transformation digitale, mérite d'être discuté.",
    backHome: "Retour à l'accueil",
    analysesTitle: "Nos analyses",
    curatedTitle: "Actualité du secteur",
    curatedIntro:
      "Une sélection commentée, pas une revue de presse exhaustive — ce qui, dans l'actualité récente, touche directement à ce que nous faisons.",
    readFullArticle: "Lire l'article complet",
    curated: [
      {
        id: "ai-act-application",
        date: "2026-08-02",
        category: "Réglementation",
        title: "L'AI Act européen entre en application complète : ce que ça change pour la gouvernance",
        summary:
          "Depuis le 2 août 2026, le règlement européen sur l'intelligence artificielle s'applique pleinement dans les 27 États membres : obligations de transparence et régime de sanctions deviennent effectifs, tandis que le volet consacré aux systèmes à haut risque reste à venir. Pour toute organisation qui utilise l'IA — y compris hors Union européenne, dès qu'elle travaille avec des partenaires européens — la question centrale n'est plus de savoir si l'on peut utiliser l'IA, mais si l'on peut prouver comment on l'utilise : quelles données, quelles décisions, sous quelle supervision.",
        sourceName: "Solutions Numériques & Cybersécurité",
        sourceUrl:
          "https://www.solutions-numeriques.com/avis-juridique-2-aout-2026-les-dirigeants-deviennent-comptables-de-lintelligence-artificielle/",
      },
      {
        id: "iso-9001-2026",
        date: "2026-07-10",
        category: "Normes",
        title: "ISO 9001:2026 : la première révision complète de la norme depuis 2015 se prépare",
        summary:
          "L'ISO prépare la première révision complète de la norme ISO 9001 depuis 2015, avec une publication attendue à l'automne 2026 et une période de transition de plusieurs années pour les organisations déjà certifiées. La structure générale — approche processus, logique PDCA — reste inchangée, mais la révision intègre plus explicitement la gestion des données numériques, la cybersécurité, la durabilité et la maîtrise des processus externalisés : des sujets que la version 2015 laissait largement implicites.",
        sourceName: "Bureau Veritas France",
        sourceUrl:
          "https://www.bureauveritas.fr/newsroom/iso-90012026-tout-savoir-sur-la-revision-de-la-norme-qualite-et-sa-transition",
      },
      {
        id: "transformation-numerique-afrique",
        date: "2026-01-15",
        category: "Contexte régional",
        title: "Transformation numérique en Afrique : la connectivité reste l'obstacle, le pragmatisme la réponse",
        summary:
          "Les objectifs continentaux sont ambitieux — connectivité universelle d'ici 2030, engagement réaffirmé lors du sommet régional de Cotonou fin 2025 — mais la réalité du terrain reste contrastée : les centres urbains avancent vite, les zones rurales composent encore avec une alimentation électrique instable et un coût de la donnée élevé. Plusieurs analyses récentes convergent sur un point : ce qui définit la transformation numérique africaine en 2026 n'est pas la course aux dernières technologies, mais un pragmatisme assumé — résoudre des problèmes concrets avec les moyens réellement disponibles. Une lecture qui rejoint directement notre propre méthode.",
        sourceName: "Qualisys Consulting",
        sourceUrl: "https://qualisysconsulting.com/blog/publications-fr-6/transformation-digitale-en-afrique-en-2026-51",
      },
      {
        id: "comores-forum-ia",
        date: "2026-04-01",
        category: "Technologie · Comores",
        title: "Les Comores organisent leur premier forum sur l'intelligence artificielle",
        summary:
          "Début avril 2026, les Comores ont accueilli la première édition d'un forum consacré à l'intelligence artificielle, organisé par Zynbusiness avec le soutien du ministère des Postes, des Télécommunications et de l'Économie numérique. L'événement a réuni décideurs publics, experts technologiques et entrepreneurs autour des défis et opportunités liés à l'intégration de l'IA dans le pays — une première étape officielle pour positionner l'archipel dans la transition numérique régionale.",
        sourceName: "Al-Fajr Quotidien",
        sourceUrl: "https://www.al-fajrquotidien.com/technologie-numerique-les-comores-explorent-lintelligence-artificielle/",
      },
      {
        id: "comores-padec-bad",
        date: "2024-09-07",
        category: "Gouvernement · Comores",
        title: "Un nouveau financement de la Banque africaine de développement pour la digitalisation comorienne",
        summary:
          "Le gouvernement comorien bénéficie d'un nouveau soutien financier de la Banque africaine de développement, via le Fonds africain de développement et la Facilité d'appui à la transition, pour poursuivre le Projet d'appui à la digitalisation de l'économie comorienne (PADEC). Depuis 2018, le numérique figure parmi les priorités affichées de l'exécutif comorien — ce financement doit permettre de concrétiser une partie des chantiers de modernisation encore en attente de moyens.",
        sourceName: "We Are Tech Africa",
        sourceUrl:
          "https://www.wearetech.africa/fr/fils/tech-stars/numerique-les-comores-font-un-pas-de-plus-vers-un-financement-de-la-bad",
      },
      {
        id: "comores-contestation-hydrocarbures",
        date: "2026-05-09",
        category: "Contexte économique · Comores",
        title: "Contestation sociale autour de la révision des prix des hydrocarbures",
        summary:
          "Depuis le 9 mai 2026, l'archipel comorien connaît un mouvement de contestation contre la révision tarifaire des hydrocarbures décidée par les autorités, avec des répercussions sur les transports et le commerce dans les trois îles. La hausse du carburant pèse en particulier sur une population déjà affectée par l'inflation. Pour toute organisation opérant aux Comores, cet épisode rappelle combien les coûts logistiques et opérationnels peuvent évoluer rapidement — un facteur à intégrer dans toute planification, comme dans n'importe quel contexte insulaire dépendant des importations.",
        sourceName: "L'Info — Océan Indien",
        sourceUrl: "https://www.linfo.re/ocean-indien/les-comores",
      },
      {
        id: "comores-croissance-banque-mondiale",
        date: "2025-12-12",
        category: "Économie · Comores",
        title: "Croissance et recul de la pauvreté : ce que dit la Banque mondiale sur l'économie comorienne",
        summary:
          "Selon les données de la Banque mondiale, l'économie comorienne a gagné en dynamisme en 2025, avec une croissance du PIB réel estimée à 3,8%, portée notamment par le secteur industriel. Le taux de pauvreté a reculé de 25,9% de la population en 2020 à 18% en 2024. Les défis structurels restent réels — isolement géographique, marché intérieur restreint, capacités institutionnelles limitées — mais la tendance de fond, notamment portée par les transferts de la diaspora, va dans le bon sens.",
        sourceName: "Groupe de la Banque mondiale",
        sourceUrl: "https://www.banquemondiale.org/ext/fr/country/comoros",
      },
    ],
    articles: [
      {
        id: "audit-terrain-vs-ia",
        date: "2026-07-15",
        category: "Méthode",
        title: "Pourquoi l'audit terrain reste irremplaçable face à l'intelligence artificielle",
        excerpt:
          "L'IA peut analyser des données à grande échelle. Elle ne peut pas s'asseoir avec un agent d'accueil et comprendre pourquoi une procédure, pourtant parfaite sur le papier, ne survit jamais au contact du réel.",
        body: [
          "On nous demande de plus en plus souvent si l'intelligence artificielle peut remplacer l'audit terrain. La réponse honnête est non — et ce n'est pas une position de principe, c'est une observation méthodologique.",
          "Une IA peut croiser des indicateurs, repérer des anomalies statistiques, résumer des milliers de pages de documentation en quelques secondes. Ce qu'elle ne peut pas faire, c'est s'asseoir en salle d'attente à côté d'un agent d'accueil et comprendre, par l'observation directe, pourquoi une procédure pourtant validée sur le papier ne survit jamais au contact du réel — parce qu'elle suppose une connexion internet stable qui n'existe pas trois jours sur cinq, ou parce qu'elle a été conçue sans jamais consulter la personne qui l'applique chaque jour.",
          "C'est précisément la raison pour laquelle notre méthode reste construite autour de la concertation à deux niveaux — la direction d'un côté, les équipes opérationnelles de l'autre, recueillies séparément puis confrontées. L'IA devient utile ensuite, pour traiter le volume, prioriser, ou automatiser ce qui a déjà été validé sur le terrain. Jamais pour se substituer à ce terrain.",
          "Le risque, pour toute organisation qui digitalise vite, est de croire que la donnée remplace l'observation. Elle ne fait que l'accélérer, à condition que l'observation ait eu lieu en premier.",
        ],
      },
      {
        id: "ia-connectivite-limitee",
        date: "2026-06-02",
        category: "Technologie",
        title: "Intelligence artificielle en contexte de connectivité limitée : ce qui marche vraiment",
        excerpt:
          "La plupart des outils d'IA grand public supposent une connexion permanente et généreuse. Aux Comores comme dans beaucoup de contextes similaires, ce n'est pas la réalité de départ — voici ce qui fonctionne malgré tout.",
        body: [
          "La quasi-totalité des outils d'intelligence artificielle disponibles aujourd'hui ont été conçus pour un contexte occidental : connexion stable, bande passante généreuse, coût de la donnée marginal. Rien de tout cela ne correspond à la réalité de la majorité des organisations comoriennes.",
          "Ça ne signifie pas que l'IA n'a pas sa place — mais que le choix des cas d'usage doit être fait avec cette contrainte en tête, pas après coup. Les usages qui tiennent réellement la route dans ce contexte : l'automatisation de tâches ponctuelles qui ne nécessitent pas une connexion continue (génération de rapports, tri de documents, extraction d'informations à partir de scans), les tableaux de bord qui se synchronisent par intermittence plutôt qu'en temps réel, et les modèles légers qui peuvent tourner localement plutôt que d'interroger un serveur distant à chaque requête.",
          "À l'inverse, les usages qui échouent presque systématiquement : les assistants conversationnels en temps réel pour un usage critique, les outils qui exigent un flux vidéo ou audio continu, et plus généralement tout ce qui suppose que la connexion est acquise plutôt qu'un budget à gérer.",
          "Notre principe reste le même que pour le reste de notre méthode : le diagnostic vient avant l'outil. Un cas d'usage IA n'est retenu que s'il apporte une valeur démontrée compte tenu de la connectivité réellement disponible — jamais parce que c'est la tendance du moment.",
        ],
      },
      {
        id: "iso-31000-continu",
        date: "2026-04-20",
        category: "Normes",
        title: "ISO 31000 : pourquoi la gestion des risques ne devrait jamais être un exercice ponctuel",
        excerpt:
          "Beaucoup d'organisations traitent la gestion des risques comme un audit annuel qu'on coche puis qu'on oublie. La norme ISO 31000 dit précisément l'inverse — et l'expérience du terrain le confirme.",
        body: [
          "ISO 31000 ne définit pas une liste de risques à cocher une fois par an. Elle décrit un processus continu : identifier, analyser, hiérarchiser, traiter, puis revoir — indéfiniment, à mesure que le contexte de l'organisation change.",
          "Dans la pratique, beaucoup d'organisations — comoriennes ou non — traitent pourtant la gestion des risques comme un exercice ponctuel : une cartographie produite une fois, présentée en comité, puis rangée jusqu'à l'année suivante. Le problème n'est pas la cartographie elle-même, qui reste un exercice utile. Le problème est de la traiter comme un aboutissement plutôt que comme un point de départ.",
          "Un risque identifié en janvier et jamais revu perd sa valeur bien avant la fin de l'année — un nouveau fournisseur, un changement réglementaire, une évolution de l'équipe suffisent à rendre l'analyse obsolète. C'est pour cette raison que nous proposons la gestion des risques comme une discipline mobilisable seule ou intégrée à chaque mission, plutôt que comme une prestation isolée dans le temps.",
          "La bonne question à se poser n'est donc pas seulement « quels sont nos risques ? », mais « à quelle fréquence revoit-on notre réponse à cette question ? ».",
        ],
      },
    ],
  },
  en: {
    meta: {
      title: "News — Method, technology & insights | Yakini",
      description:
        "Yakini's perspective on audit and transformation methods, the real-world uses of artificial intelligence, and developments in quality and compliance.",
    },
    eyebrow: "News",
    h1: "Method, technology, and what's genuinely changing on the ground.",
    intro:
      "Not generic technology watch: positions on what, in our daily practice of consulting, audit and digital transformation, is worth discussing.",
    backHome: "Back to home",
    analysesTitle: "Our analysis",
    curatedTitle: "Industry news",
    curatedIntro:
      "A curated, commented selection — not an exhaustive press review — of what, in recent news, directly touches what we do.",
    readFullArticle: "Read the full article",
    curated: [
      {
        id: "ai-act-application",
        date: "2026-08-02",
        category: "Regulation",
        title: "The EU AI Act enters full application: what it changes for governance",
        summary:
          "As of 2 August 2026, the European Union's AI regulation applies in full across all 27 member states: transparency obligations and the sanctions regime become effective, while the section covering high-risk systems is still to come. For any organisation using AI — including outside the EU, as soon as it works with European partners — the central question is no longer whether AI can be used, but whether one can prove how it is used: what data, what decisions, under what supervision.",
        sourceName: "Solutions Numériques & Cybersécurité",
        sourceUrl:
          "https://www.solutions-numeriques.com/avis-juridique-2-aout-2026-les-dirigeants-deviennent-comptables-de-lintelligence-artificielle/",
      },
      {
        id: "iso-9001-2026",
        date: "2026-07-10",
        category: "Standards",
        title: "ISO 9001:2026: the standard's first full revision since 2015 is taking shape",
        summary:
          "ISO is preparing the first full revision of the ISO 9001 standard since 2015, with publication expected in autumn 2026 and a multi-year transition period for already-certified organisations. The overall structure — process approach, PDCA logic — remains unchanged, but the revision more explicitly addresses digital data management, cybersecurity, sustainability, and control of outsourced processes: topics the 2015 version left largely implicit.",
        sourceName: "Bureau Veritas France",
        sourceUrl:
          "https://www.bureauveritas.fr/newsroom/iso-90012026-tout-savoir-sur-la-revision-de-la-norme-qualite-et-sa-transition",
      },
      {
        id: "transformation-numerique-afrique",
        date: "2026-01-15",
        category: "Regional context",
        title: "Digital transformation in Africa: connectivity remains the obstacle, pragmatism the answer",
        summary:
          "Continental ambitions are high — universal connectivity by 2030, reaffirmed at the regional Cotonou summit in late 2025 — but the reality on the ground stays uneven: urban centres move fast, while rural areas still contend with unstable power supply and high data costs. Several recent analyses converge on one point: what defines Africa's digital transformation in 2026 isn't a race for the latest technology, but a deliberate pragmatism — solving concrete problems with the means genuinely available. A reading that lines up directly with our own method.",
        sourceName: "Qualisys Consulting",
        sourceUrl: "https://qualisysconsulting.com/blog/publications-fr-6/transformation-digitale-en-afrique-en-2026-51",
      },
      {
        id: "comores-forum-ia",
        date: "2026-04-01",
        category: "Technology · Comoros",
        title: "The Comoros hold their first artificial intelligence forum",
        summary:
          "In early April 2026, the Comoros hosted the first edition of a forum dedicated to artificial intelligence, organised by Zynbusiness with support from the Ministry of Posts, Telecommunications and the Digital Economy. The event brought together public decision-makers, technology experts and entrepreneurs to discuss the challenges and opportunities of integrating AI into the country — an official first step toward positioning the archipelago within the regional digital transition.",
        sourceName: "Al-Fajr Quotidien",
        sourceUrl: "https://www.al-fajrquotidien.com/technologie-numerique-les-comores-explorent-lintelligence-artificielle/",
      },
      {
        id: "comores-padec-bad",
        date: "2024-09-07",
        category: "Government · Comoros",
        title: "New African Development Bank financing for Comorian digitalisation",
        summary:
          "The Comorian government has secured new financial support from the African Development Bank, via the African Development Fund and the Transition Support Facility, to continue the Project to Support the Digitalisation of the Comorian Economy (PADEC). Since 2018, digital transformation has featured among the executive's stated priorities — this financing should help move forward modernisation projects still awaiting the necessary resources.",
        sourceName: "We Are Tech Africa",
        sourceUrl:
          "https://www.wearetech.africa/fr/fils/tech-stars/numerique-les-comores-font-un-pas-de-plus-vers-un-financement-de-la-bad",
      },
      {
        id: "comores-contestation-hydrocarbures",
        date: "2026-05-09",
        category: "Economic context · Comoros",
        title: "Social unrest over the revision of fuel prices",
        summary:
          "Since 9 May 2026, the Comorian archipelago has seen a protest movement against the authorities' revision of fuel prices, disrupting transport and trade across the three islands. The rise in fuel costs weighs particularly heavily on a population already affected by inflation. For any organisation operating in the Comoros, this episode is a reminder of how quickly logistical and operating costs can shift — a factor worth building into planning, as in any island context dependent on imports.",
        sourceName: "L'Info — Indian Ocean",
        sourceUrl: "https://www.linfo.re/ocean-indien/les-comores",
      },
      {
        id: "comores-croissance-banque-mondiale",
        date: "2025-12-12",
        category: "Economy · Comoros",
        title: "Growth and falling poverty: what the World Bank says about the Comorian economy",
        summary:
          "According to World Bank data, the Comorian economy gained momentum in 2025, with real GDP growth estimated at 3.8%, driven notably by the industrial sector. The poverty rate fell from 25.9% of the population in 2020 to 18% in 2024. Structural challenges remain real — geographic isolation, a narrow domestic market, limited institutional capacity — but the underlying trend, supported in particular by diaspora remittances, is a positive one.",
        sourceName: "World Bank Group",
        sourceUrl: "https://www.banquemondiale.org/ext/fr/country/comoros",
      },
    ],
    articles: [
      {
        id: "audit-terrain-vs-ia",
        date: "2026-07-15",
        category: "Method",
        title: "Why on-site audit remains irreplaceable in the face of artificial intelligence",
        excerpt:
          "AI can analyse data at scale. It cannot sit down with a front-desk officer and understand why a procedure, flawless on paper, never survives contact with reality.",
        body: [
          "We're increasingly asked whether artificial intelligence can replace on-site audit. The honest answer is no — and this isn't a matter of principle, it's a methodological observation.",
          "An AI can cross-reference indicators, spot statistical anomalies, and summarise thousands of pages of documentation in seconds. What it cannot do is sit in a waiting room next to a front-desk officer and understand, through direct observation, why a procedure validated on paper never survives contact with reality — because it assumes a stable internet connection that doesn't exist three days out of five, or because it was designed without ever consulting the person who applies it every day.",
          "This is precisely why our method remains built around two-level consultation — leadership on one side, operational teams on the other, gathered separately and then compared. AI becomes useful afterwards, to handle volume, prioritise, or automate what has already been validated on the ground. Never to substitute for that ground truth.",
          "The risk, for any organisation digitalising quickly, is believing that data replaces observation. It only accelerates it — provided the observation happened first.",
        ],
      },
      {
        id: "ia-connectivite-limitee",
        date: "2026-06-02",
        category: "Technology",
        title: "Artificial intelligence under limited connectivity: what actually works",
        excerpt:
          "Most consumer AI tools assume a constant, generous connection. In the Comoros, as in many similar contexts, that isn't the starting reality — here is what works regardless.",
        body: [
          "Nearly all AI tools available today were designed for a Western context: stable connectivity, generous bandwidth, marginal data cost. None of that matches the reality of most Comorian organisations.",
          "That doesn't mean AI has no place — it means use cases must be chosen with this constraint in mind, not as an afterthought. What genuinely holds up in this context: automating one-off tasks that don't require a continuous connection (report generation, document sorting, extracting information from scans), dashboards that sync intermittently rather than in real time, and lightweight models that can run locally rather than querying a remote server on every request.",
          "Conversely, what fails almost systematically: real-time conversational assistants for critical use, tools requiring a continuous video or audio stream, and more broadly anything that treats connectivity as a given rather than a budget to manage.",
          "Our principle stays the same as for the rest of our method: diagnosis comes before the tool. An AI use case is only retained if it delivers demonstrated value given the connectivity actually available — never because it's the trend of the moment.",
        ],
      },
      {
        id: "iso-31000-continu",
        date: "2026-04-20",
        category: "Standards",
        title: "ISO 31000: why risk management should never be a one-off exercise",
        excerpt:
          "Many organisations treat risk management as an annual audit to tick off and forget. ISO 31000 says precisely the opposite — and field experience confirms it.",
        body: [
          "ISO 31000 doesn't define a list of risks to check once a year. It describes a continuous process: identify, analyse, prioritise, treat, then review — indefinitely, as the organisation's context changes.",
          "In practice, though, many organisations — Comorian or otherwise — treat risk management as a one-off exercise: a map produced once, presented to a committee, then filed away until next year. The problem isn't the map itself, which remains a useful exercise. The problem is treating it as an endpoint rather than a starting point.",
          "A risk identified in January and never revisited loses its value well before the year is out — a new supplier, a regulatory change, a shift in the team is enough to make the analysis obsolete. This is why we offer risk management as a discipline that can be mobilised on its own or built into every engagement, rather than as an isolated, time-bound service.",
          "The right question, then, isn't only \"what are our risks?\" but \"how often do we revisit our answer to that question?\"",
        ],
      },
    ],
  },
};
