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

export const SOLUTIONS: Solution[] = [
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

export function SolutionCard({ solution }: { solution: Solution }) {
  return (
    <details className="surface group overflow-hidden">
      <summary className="flex cursor-pointer list-none items-baseline gap-4 px-5 py-5 sm:px-7">
        <span
          className={`font-display text-sm font-bold ${solution.premium ? "text-teal" : "text-bronze"}`}
        >
          {solution.step}
        </span>
        <span className="flex-1">
          <span className="flex flex-wrap items-center gap-3">
            <span className="font-display text-lg font-bold text-navy">
              Yakini {solution.name}
            </span>
            {solution.premium && (
              <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-teal">
                Palier premium
              </span>
            )}
          </span>
          <span className="mt-1 block text-[15px] text-ink-soft">{solution.tagline}</span>
        </span>
        <span
          aria-hidden="true"
          className="mt-1 shrink-0 text-ink-soft transition-transform group-open:rotate-45"
        >
          +
        </span>
      </summary>

      <div className="border-t border-line px-5 py-6 sm:px-7">
        <p className="max-w-[70ch] text-[15px] text-ink-soft">{solution.objectif}</p>
        <div className="mt-6 grid gap-7 sm:grid-cols-3">
          <DetailList title="Pour qui" items={solution.pourQui} />
          <DetailList title="Ce que nous faisons" items={solution.actions} />
          <DetailList title="Livrables" items={solution.livrables} accent />
        </div>
      </div>
    </details>
  );
}

function DetailList({
  title,
  items,
  accent,
}: {
  title: string;
  items: string[];
  accent?: boolean;
}) {
  return (
    <div>
      <h4 className="eyebrow mb-3">{title}</h4>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="flex gap-2.5 text-[14.5px] leading-snug text-ink-soft">
            <span
              aria-hidden="true"
              className={`mt-[9px] h-[5px] w-[5px] shrink-0 rounded-full ${accent ? "bg-teal" : "bg-navy/35"}`}
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
