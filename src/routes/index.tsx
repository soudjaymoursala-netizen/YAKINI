import { createFileRoute } from "@tanstack/react-router";
import { SiteNav, SiteFooter, useReveal } from "@/components/site-chrome";
import { SOLUTIONS, SolutionCard } from "@/components/solutions";

const TITLE = "Yakini — Conseil, qualité & transformation digitale aux Comores";
const DESCRIPTION =
  "Yakini aide les organisations comoriennes à travailler mieux : processus plus fiables, délais plus courts, outils réellement utilisés. Le digital seulement quand il est la bonne réponse.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "fr_FR" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Yakini",
          description: DESCRIPTION,
          areaServed: "KM",
          slogan: "L'excellence internationale adaptée aux réalités locales.",
          founder: { "@type": "Person", name: "Moursala Soudjay" },
          email: "contact@yakini.km",
        }),
      },
    ],
  }),
  component: Home,
});

const ETAPES = [
  {
    n: "1",
    t: "Écouter",
    d: "Votre direction, puis vos équipes — séparément. Les deux versions du réel comptent.",
  },
  {
    n: "2",
    t: "Mesurer",
    d: "Ce qui se passe vraiment : les délais, les erreurs, les étapes qui coûtent cher.",
  },
  {
    n: "3",
    t: "Proposer",
    d: "Une réponse à votre taille et à votre budget. Parfois du digital, souvent d'abord de l'organisation.",
  },
  {
    n: "4",
    t: "Mettre en place",
    d: "Avec vos équipes, testé sur un périmètre réduit avant d'être généralisé.",
  },
  {
    n: "5",
    t: "Vérifier",
    d: "Six mois plus tard : est-ce utilisé, et qu'est-ce que cela vous a fait gagner ?",
  },
];

const DIFFERENCES = [
  {
    t: "Nous écoutons ceux qui font le travail",
    d: "Une solution décidée sans les utilisateurs finit dans un tiroir. Nous les rencontrons, sans hiérarchie dans la pièce, et nous confrontons leur vécu à la vision de la direction.",
  },
  {
    t: "Nous vous déconseillons ce qui est inutile",
    d: "Si un problème se règle par une meilleure organisation, nous vous le disons — même si un logiciel se vendrait mieux.",
  },
  {
    t: "Nous annonçons nos limites",
    d: "Ce que nous maîtrisons, nous le faisons. Ce que nous ne maîtrisons pas, nous le confions à des partenaires choisis, et vous le savez dès le départ.",
  },
  {
    t: "Nous formons avant de partir",
    d: "Vos équipes doivent pouvoir se passer de nous. La formation des utilisateurs fait partie de la mission, pas d'une option facturée à part.",
  },
  {
    t: "Nous restons joignables après",
    d: "La livraison n'est pas la fin. Suivi, ajustements, réponses à vos questions : nous restons responsables de ce que nous avons installé.",
  },
];

const FAQ = [
  {
    q: "Nous ne vous connaissons pas encore — par où commencer ?",
    r: "Par un simple échange, sans engagement ni facture. Vous exposez votre situation, nous vous disons franchement ce que nous en pensons et quelle serait la première action utile — même si ce n'est pas une mission pour nous.",
  },
  {
    q: "Faut-il tout engager d'un coup ?",
    r: "Non. Vous pouvez commencer par un audit seul, ou par un seul processus. Chaque étape se tient toute seule et vous décidez de la suite à chaque fois.",
  },
  {
    q: "Combien cela coûte-t-il ?",
    r: "Le prix dépend du périmètre, pas d'un tarif catalogue. Après le premier échange, vous recevez une offre écrite : objectifs, livrables, calendrier et budget — construite à partir de ce que votre organisation peut réellement engager.",
  },
  {
    q: "Notre connexion internet est mauvaise. Est-ce bloquant ?",
    r: "Non, c'est une donnée de départ. Nous concevons en tenant compte de votre connectivité réelle et de vos coupures de courant. Une solution qui exige une connexion permanente ne vous sera pas proposée si le terrain ne peut pas la supporter.",
  },
  {
    q: "Nos équipes vont-elles suivre ?",
    r: "C'est précisément le risque que nous traitons en priorité : elles sont associées dès le diagnostic, formées avant le déploiement, et nous mesurons l'usage réel après coup.",
  },
];

function Home() {
  useReveal();

  return (
    <div id="top">
      <SiteNav />

      <main>
        {/* HERO */}
        <section className="on-navy bg-navy py-20 text-on-navy sm:py-28">
          <div className="wrap grid items-center gap-14 md:grid-cols-[1.15fr_0.85fr]">
            <div>
              <span className="eyebrow">
                Conseil, transformation digitale &amp; IA — Union des Comores
              </span>
              <h1 className="mt-4 text-[clamp(34px,5vw,56px)] leading-[1.06] text-white">
                Rendre simple ce qui vous complique la vie.
              </h1>
              <p className="mt-6 max-w-[56ch] text-[17px] text-on-navy-soft">
                Files d'attente, dossiers papier, délais qui s'allongent, informations introuvables :
                nous cherchons d'où vient réellement le blocage, puis nous le levons. Avec un
                logiciel si c'est la bonne réponse — sans, quand ce n'en est pas une.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-5">
                <a href="#contact" className="btn btn-bronze">
                  Parlons de votre situation
                </a>
                <a
                  href="#methode"
                  className="text-sm font-medium text-on-navy-soft transition-colors hover:text-bronze-soft"
                >
                  Voir comment nous travaillons ↓
                </a>
              </div>
            </div>

            <figure className="mx-auto w-full max-w-[300px]">
              <svg viewBox="0 0 300 260" fill="none" aria-hidden="true" className="w-full">
                <path d="M40 20 C 90 70, 120 100, 150 130" stroke="white" strokeWidth="1.5" />
                <path d="M260 20 C 210 70, 180 100, 150 130" stroke="#C89A5E" strokeWidth="1.5" />
                <path d="M150 130 L150 235" stroke="#C89A5E" strokeWidth="1.5" />
                <circle cx="150" cy="235" r="4.5" fill="#C89A5E" />
              </svg>
              <figcaption className="mt-4 text-center text-[11.5px] font-medium uppercase tracking-[0.18em] text-on-navy-soft">
                Ce que dit la direction + ce que vit le terrain
              </figcaption>
            </figure>
          </div>
        </section>

        {/* BOUSSOLE */}
        <section className="reveal bg-cream py-20">
          <div className="wrap text-center">
            <span className="eyebrow">La question que nous posons à chaque décision</span>
            <blockquote className="mx-auto mt-5 max-w-[24ch] font-display text-[clamp(24px,3.4vw,38px)] leading-[1.2] text-navy sm:max-w-[30ch]">
              « Est-ce que cela facilite vraiment la vie de celui qui va s'en servir — et sera-t-il
              encore en train de s'en servir dans six mois ? »
            </blockquote>
            <p className="mx-auto mt-6 max-w-[56ch] text-[15px] text-ink-soft">
              Si nous ne pouvons pas répondre oui, nous ne vous le livrons pas — aussi
              impressionnant soit-il sur le papier.
            </p>
          </div>
        </section>

        {/* MÉTHODE */}
        <section id="methode" className="bg-cream-alt py-20 sm:py-24">
          <div className="wrap">
            <div className="reveal max-w-[60ch]">
              <span className="eyebrow">Notre méthode</span>
              <h2 className="mt-3 text-[clamp(26px,3.4vw,40px)] text-navy">
                Cinq étapes, et personne n'est mis devant le fait accompli.
              </h2>
              <p className="mt-4 text-[16px] text-ink-soft">
                Nous parlons à la direction et à ceux qui exécutent, séparément, avant de proposer
                quoi que ce soit. C'est ce qui fait la différence entre un outil adopté et un outil
                abandonné.
              </p>
            </div>

            <ol className="reveal mt-12 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
              {ETAPES.map((e) => (
                <li key={e.n} className="bg-cream-alt p-6">
                  <span className="font-display text-sm font-bold text-teal">{e.n}</span>
                  <h3 className="mt-2 text-[17px] text-navy">{e.t}</h3>
                  <p className="mt-2 text-[14.5px] leading-snug text-ink-soft">{e.d}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* SOLUTIONS */}
        <section id="solutions" className="bg-cream py-20 sm:py-24">
          <div className="wrap">
            <div className="reveal max-w-[60ch]">
              <span className="eyebrow">Nos solutions</span>
              <h2 className="mt-3 text-[clamp(26px,3.4vw,40px)] text-navy">
                Prenez l'étape dont vous avez besoin, pas le programme entier.
              </h2>
              <p className="mt-4 text-[16px] text-ink-soft">
                Cinq niveaux d'accompagnement, du diagnostic à la certification. Chacun se tient
                seul. Dépliez celui qui vous concerne pour voir précisément ce que vous recevez.
              </p>
            </div>

            <p className="reveal mt-8 inline-flex items-center gap-2.5 rounded-full border border-line bg-white px-5 py-2.5 text-[14.5px] text-ink">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-bronze" />
              Vous hésitez ? Commencez par Conseils : un avis franc, avant tout engagement.
            </p>

            <div className="reveal mt-6 space-y-3">
              {SOLUTIONS.map((s) => (
                <SolutionCard key={s.id} solution={s} />
              ))}
            </div>
          </div>
        </section>

        {/* DIFFÉRENCE */}
        <section id="difference" className="bg-cream-alt py-20 sm:py-24">
          <div className="wrap">
            <div className="reveal max-w-[60ch]">
              <span className="eyebrow">Ce qui nous différencie</span>
              <h2 className="mt-3 text-[clamp(26px,3.4vw,40px)] text-navy">
                Nous préférons vous dire non plutôt que vous vendre trop.
              </h2>
            </div>

            <div className="reveal mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {DIFFERENCES.map((d) => (
                <article key={d.t} className="surface p-6">
                  <h3 className="text-[17px] text-navy">{d.t}</h3>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-ink-soft">{d.d}</p>
                </article>
              ))}
              <article className="flex items-center bg-navy p-6">
                <p className="font-display text-[17px] font-bold leading-snug text-white">
                  Nous ne promettons pas de miracle. Nous promettons d'être là, et que ça marche
                  encore dans un an.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* EXPERTISE */}
        <section id="expertise" className="on-navy bg-navy-deep py-20 text-on-navy sm:py-24">
          <div className="wrap grid gap-12 md:grid-cols-[0.85fr_1.15fr]">
            <div className="reveal">
              <div className="border border-line-on-navy p-8">
                <span
                  aria-hidden="true"
                  className="block font-display text-[64px] font-extrabold leading-none tracking-[0.05em] text-transparent"
                  style={{ WebkitTextStroke: "1px #C89A5E" }}
                >
                  MS
                </span>
                <p className="mt-6 font-display text-[18px] font-bold text-white">
                  Moursala Soudjay
                </p>
                <p className="text-[14px] text-on-navy-soft">Fondateur</p>
                <dl className="mt-8 space-y-4 border-t border-line-on-navy pt-6 text-[14px]">
                  <div>
                    <dt className="text-on-navy-soft">Terrain</dt>
                    <dd className="text-white">Industrie pharmaceutique — France, Suisse</dd>
                  </div>
                  <div>
                    <dt className="text-on-navy-soft">Spécialité</dt>
                    <dd className="text-white">
                      Qualification &amp; validation des systèmes (CQV/CSV)
                    </dd>
                  </div>
                  <div>
                    <dt className="text-on-navy-soft">Attache</dt>
                    <dd className="text-white">Franco-comorien, né aux Comores</dd>
                  </div>
                </dl>
              </div>
            </div>

            <div className="reveal">
              <span className="eyebrow">Qui vous accompagne</span>
              <h2 className="mt-3 text-[clamp(24px,3vw,36px)] text-white">
                Une rigueur venue d'un secteur où l'erreur n'est pas permise.
              </h2>
              <p className="mt-5 max-w-[62ch] text-[15.5px] text-on-navy-soft">
                Yakini est né de l'expérience de Moursala Soudjay, formé à l'Université Claude
                Bernard Lyon 1 et consultant depuis plusieurs années en qualification et validation
                des systèmes dans l'industrie pharmaceutique, en France et en Suisse. Dans ce
                métier, rien n'est réputé fonctionner tant que ce n'est pas prouvé, documenté et
                vérifié.
              </p>
              <p className="mt-4 max-w-[62ch] text-[15.5px] text-on-navy-soft">
                À cette exigence s'ajoute une pratique quotidienne du digital et de l'IA — outils
                d'automatisation et applications conçus de ses propres mains. C'est cette méthode
                que Yakini applique aujourd'hui aux organisations comoriennes, sans jamais oublier
                d'où elle vient.
              </p>

              <div className="mt-10 grid gap-8 sm:grid-cols-2">
                <CertList
                  title="Déjà acquis"
                  items={[
                    "Certification Lean",
                    "Analyse de données & Power BI",
                    "Environnements réglementés (CQV/CSV)",
                  ]}
                  done
                />
                <CertList
                  title="Feuille de route"
                  items={[
                    "ISO 9001 Lead Auditor",
                    "ISO 19011 Auditeur",
                    "Lean Six Sigma Green Belt",
                  ]}
                />
              </div>
            </div>
          </div>
        </section>

        {/* SECTEURS */}
        <section id="secteurs" className="bg-cream py-20 sm:py-24">
          <div className="wrap">
            <div className="reveal max-w-[60ch]">
              <span className="eyebrow">Pour qui</span>
              <h2 className="mt-3 text-[clamp(26px,3.4vw,40px)] text-navy">
                Une administration, une PME, un cabinet : les blocages se ressemblent.
              </h2>
            </div>

            <div className="reveal mt-10 grid gap-5 md:grid-cols-2">
              <article className="surface p-7">
                <span className="eyebrow">Secteur public</span>
                <h3 className="mt-3 text-[19px] text-navy">
                  Institutions &amp; administrations de l'État comorien
                </h3>
                <p className="mt-3 text-[14.5px] text-ink-soft">
                  Moins de files d'attente, moins de papier, des délais de traitement que vous
                  pouvez enfin annoncer aux usagers.
                </p>
              </article>
              <article className="surface p-7">
                <span className="eyebrow">Secteur privé</span>
                <h3 className="mt-3 text-[19px] text-navy">Entreprises de toutes tailles</h3>
                <p className="mt-3 text-[14.5px] text-ink-soft">
                  Moins d'erreurs à rattraper, du temps rendu à vos équipes, et des chiffres fiables
                  pour décider.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {["Santé", "Commerce", "Tourisme", "Industrie", "Finance", "Transport", "Éducation"].map(
                    (c) => (
                      <span key={c} className="chip">
                        {c}
                      </span>
                    ),
                  )}
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="questions" className="bg-cream-alt py-20 sm:py-24">
          <div className="wrap">
            <div className="reveal max-w-[60ch]">
              <span className="eyebrow">Questions fréquentes</span>
              <h2 className="mt-3 text-[clamp(26px,3.4vw,40px)] text-navy">
                Les questions que l'on nous pose avant de commencer.
              </h2>
            </div>
            <div className="reveal mt-9 max-w-[80ch] divide-y divide-line border-y border-line">
              {FAQ.map((item) => (
                <details key={item.q} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6 font-display text-[16.5px] font-bold text-navy">
                    {item.q}
                    <span
                      aria-hidden="true"
                      className="shrink-0 text-ink-soft transition-transform group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-3 max-w-[70ch] text-[15px] text-ink-soft">{item.r}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="on-navy bg-navy py-20 text-center text-on-navy sm:py-24">
          <div className="wrap">
            <span className="eyebrow">Premier échange</span>
            <h2 className="mt-3 text-[clamp(28px,4vw,44px)] text-white">
              Dites-nous ce qui bloque. On vous répond franchement.
            </h2>
            <p className="mx-auto mt-4 max-w-[56ch] text-[16px] text-on-navy-soft">
              Quelques lignes suffisent : ce qui vous ralentit aujourd'hui, et ce que vous aimeriez
              voir changer. Vous recevrez un avis honnête sur la première chose à faire — sans
              engagement, et même si la réponse n'est pas une mission pour nous.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <a href="mailto:contact@yakini.km" className="btn btn-bronze">
                Écrire à contact@yakini.km
              </a>
              <a href="#top" className="btn btn-ghost">
                Revenir en haut
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

function CertList({ title, items, done }: { title: string; items: string[]; done?: boolean }) {
  return (
    <div>
      <h3 className="eyebrow">{title}</h3>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li
            key={item}
            className="flex gap-3 border-b border-line-on-navy pb-3 text-[14.5px] text-on-navy"
          >
            <span
              aria-hidden="true"
              className={`mt-[7px] h-[7px] w-[7px] shrink-0 rounded-full ${
                done ? "bg-teal-light" : "border border-on-navy-soft"
              }`}
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
