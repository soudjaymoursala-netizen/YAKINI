import type { Locale } from "@/lib/content";

export type NewsArticle = {
  id: string;
  date: string;
  category: string;
  title: string;
  excerpt: string;
  body: string[];
};

export type NewsContent = {
  meta: { title: string; description: string };
  eyebrow: string;
  h1: string;
  intro: string;
  backHome: string;
  articles: NewsArticle[];
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
