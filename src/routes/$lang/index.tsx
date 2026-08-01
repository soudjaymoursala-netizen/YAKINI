import { createFileRoute, notFound } from "@tanstack/react-router";
import { SiteNav, SiteFooter, useReveal } from "@/components/site-chrome";
import { SolutionCard } from "@/components/solutions";
import { content, LOCALES, type Locale } from "@/lib/content";

export const Route = createFileRoute("/$lang/")({
  params: {
    parse: (raw) => {
      if (!LOCALES.includes(raw.lang as Locale)) throw notFound();
      return { lang: raw.lang as Locale };
    },
    stringify: (params) => ({ lang: params.lang }),
  },
  head: ({ params }) => {
    const lang = params.lang as Locale;
    const c = content[lang];
    return {
      meta: [
        { title: c.meta.title },
        { name: "description", content: c.meta.description },
        { property: "og:title", content: c.meta.title },
        { property: "og:description", content: c.meta.description },
        { property: "og:type", content: "website" },
        { property: "og:locale", content: c.meta.ogLocale },
        { property: "og:image", content: "/og-image.png" },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { property: "og:image:alt", content: "Yakini — Conseil, transformation digitale & IA" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: "/og-image.png" },
      ],
      links: [
        { rel: "alternate", hrefLang: "fr", href: "/fr" },
        { rel: "alternate", hrefLang: "en", href: "/en" },
        { rel: "alternate", hrefLang: "x-default", href: "/fr" },
        { rel: "canonical", href: `/${lang}` },
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Yakini",
            description: c.meta.description,
            areaServed: "KM",
            slogan: "L'excellence internationale adaptée aux réalités locales.",
            founder: { "@type": "Person", name: "Moursala Soudjay" },
            email: "contact@yakini.km",
          }),
        },
      ],
    };
  },
  component: Home,
});

function Home() {
  useReveal();
  const { lang } = Route.useParams();
  const c = content[lang];

  return (
    <div id="top">
      <a
        href="#contenu"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-bronze-button focus:px-4 focus:py-2 focus:text-white"
      >
        {lang === "en" ? "Skip to content" : "Aller au contenu"}
      </a>
      <SiteNav lang={lang} nav={c.nav} />

      <main>
        {/* HERO */}
        <section id="contenu" className="on-navy bg-navy py-20 text-on-navy sm:py-28">
          <div className="wrap grid items-center gap-14 md:grid-cols-[1.15fr_0.85fr]">
            <div>
              <span className="eyebrow">{c.hero.eyebrow}</span>
              <p className="mt-3 font-display text-[17px] font-semibold tracking-[0.01em] text-bronze-soft">
                {c.hero.slogan}
              </p>
              <h1 className="mt-4 text-[clamp(34px,5vw,56px)] leading-[1.06] text-white">
                {c.hero.h1}
              </h1>
              <p className="mt-6 max-w-[56ch] text-[17px] text-on-navy-soft">{c.hero.lede}</p>
              <div className="mt-9 flex flex-wrap items-center gap-5">
                <a href="#contact" className="btn btn-bronze">
                  {c.hero.ctaPrimary}
                </a>
                <a
                  href="#solutions"
                  className="text-sm font-medium text-on-navy-soft transition-colors hover:text-bronze-soft"
                >
                  {c.hero.ctaSecondary}
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
                {c.hero.figcaption}
              </figcaption>
            </figure>
          </div>
        </section>

        {/* BOUSSOLE */}
        <section className="reveal bg-cream py-20">
          <div className="wrap text-center">
            <span className="eyebrow">{c.boussole.eyebrow}</span>
            <h2 className="sr-only">{c.boussole.eyebrow}</h2>
            <blockquote className="mx-auto mt-5 max-w-[24ch] font-display text-[clamp(24px,3.4vw,38px)] leading-[1.2] text-navy sm:max-w-[30ch]">
              {c.boussole.quote}
            </blockquote>
            <p className="mx-auto mt-6 max-w-[56ch] text-[15px] text-ink-soft">
              {c.boussole.caption}
            </p>
          </div>
        </section>

        {/* SECTEURS */}
        <section id="secteurs" className="bg-cream-alt py-20 sm:py-24">
          <div className="wrap">
            <div className="reveal">
              <span className="eyebrow">{c.secteurs.eyebrow}</span>
              <h2 className="mt-3 text-[clamp(28px,3.8vw,46px)] text-navy">{c.secteurs.h2}</h2>
              <p className="mt-4 text-[16px] text-ink-soft">{c.secteurs.p}</p>
            </div>

            <div className="reveal mt-10 grid gap-5 md:grid-cols-2">
              <article className="surface p-7">
                <span className="eyebrow">{c.secteurs.public.eyebrow}</span>
                <h3 className="mt-3 text-[19px] text-navy">{c.secteurs.public.h3}</h3>
                <p className="mt-3 text-[14.5px] text-ink-soft">{c.secteurs.public.p}</p>
                <p className="mt-5 text-[13px] font-medium uppercase tracking-[0.03em] text-bronze">
                  {c.secteurs.public.chips.join(" · ")}
                </p>
                <p className="mt-5 border-l-2 border-bronze py-1 pl-4 text-[13.5px] leading-relaxed text-ink-soft">
                  {c.secteurs.public.exemple}
                </p>
              </article>
              <article className="surface p-7">
                <span className="eyebrow">{c.secteurs.prive.eyebrow}</span>
                <h3 className="mt-3 text-[19px] text-navy">{c.secteurs.prive.h3}</h3>
                <p className="mt-3 text-[14.5px] text-ink-soft">{c.secteurs.prive.p}</p>
                <p className="mt-5 text-[13px] font-medium uppercase tracking-[0.03em] text-bronze">
                  {c.secteurs.prive.chips.join(" · ")}
                </p>
                <p className="mt-5 border-l-2 border-bronze py-1 pl-4 text-[13.5px] leading-relaxed text-ink-soft">
                  {c.secteurs.prive.exemple}
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* ORIGINE */}
        <section id="origine" className="reveal bg-cream py-20 sm:py-24">
          <div className="wrap">
            <span className="eyebrow">{c.apropos.eyebrow}</span>
            <h2 className="mt-3 text-[clamp(28px,3.8vw,46px)] text-navy">{c.apropos.h2}</h2>
            <p className="mt-5 max-w-[75ch] text-[16px] leading-relaxed text-ink-soft">{c.apropos.p1}</p>
            <p className="mt-4 max-w-[75ch] text-[16px] leading-relaxed text-ink-soft">{c.apropos.p2}</p>
            <p className="mt-4 max-w-[75ch] text-[16px] leading-relaxed text-ink-soft">{c.apropos.p3}</p>
          </div>
        </section>

        {/* SOLUTIONS */}
        <section id="solutions" className="bg-cream-alt py-20 sm:py-24">
          <div className="wrap">
            <div className="reveal">
              <span className="eyebrow">{c.solutionsSection.eyebrow}</span>
              <h2 className="mt-3 text-[clamp(28px,3.8vw,46px)] text-navy">
                {c.solutionsSection.h2}
              </h2>
              <p className="mt-4 text-[16px] text-ink-soft">{c.solutionsSection.p}</p>
            </div>

            <p className="reveal mt-8 inline-flex items-center gap-2.5 rounded-full border border-line bg-white px-5 py-2.5 text-[14.5px] text-ink">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-bronze" />
              {c.solutionsSection.hesitant}
            </p>

            <div className="reveal mt-6 space-y-3">
              {c.solutions.map((s) => (
                <SolutionCard key={s.id} solution={s} labels={c.solutionsSection.labels} />
              ))}
            </div>
          </div>
        </section>

        {/* DIFFÉRENCE */}
        <section id="difference" className="bg-cream py-20 sm:py-24">
          <div className="wrap">
            <div className="reveal">
              <span className="eyebrow">{c.difference.eyebrow}</span>
              <h2 className="mt-3 text-[clamp(28px,3.8vw,46px)] text-navy">{c.difference.h2}</h2>
            </div>

            <div className="reveal mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {c.difference.items.map((d) => (
                <article key={d.t} className="surface p-6">
                  <h3 className="text-[17px] text-navy">{d.t}</h3>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-ink-soft">{d.d}</p>
                </article>
              ))}
              <article className="flex items-center bg-navy p-6">
                <p className="font-display text-[17px] font-bold leading-snug text-white">
                  {c.difference.closing}
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* EXPERTISE */}
        <section id="expertise" className="on-navy bg-navy-deep py-20 text-on-navy sm:py-24">
          <div className="wrap grid gap-12 md:grid-cols-[0.85fr_1.15fr]">
            <div className="reveal">
              <div className="border border-line-on-navy bg-navy p-8">
                <div className="flex items-center gap-4">
                  <div
                    aria-hidden="true"
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-bronze font-display text-[16px] font-bold tracking-[0.01em] text-navy-deep"
                  >
                    MS
                  </div>
                  <div>
                    <p className="font-display text-[18px] font-bold text-white">
                      {c.expertise.founderName}
                    </p>
                    <p className="text-[14px] text-on-navy-soft">{c.expertise.founderRole}</p>
                  </div>
                </div>
                <dl className="mt-8 space-y-4 border-t border-line-on-navy pt-6 text-[14px]">
                  <div>
                    <dt className="text-on-navy-soft">{c.expertise.terrainLabel}</dt>
                    <dd className="text-white">{c.expertise.terrainValue}</dd>
                  </div>
                  <div>
                    <dt className="text-on-navy-soft">{c.expertise.specialiteLabel}</dt>
                    <dd className="text-white">{c.expertise.specialiteValue}</dd>
                  </div>
                  <div>
                    <dt className="text-on-navy-soft">{c.expertise.attacheLabel}</dt>
                    <dd className="text-white">{c.expertise.attacheValue}</dd>
                  </div>
                </dl>
              </div>
            </div>

            <div className="reveal">
              <span className="eyebrow">{c.expertise.eyebrow}</span>
              <h2 className="mt-3 text-[clamp(24px,3vw,36px)] text-white">{c.expertise.h2}</h2>
              <p className="mt-5 max-w-[62ch] text-[15.5px] text-on-navy-soft">{c.expertise.p1}</p>
              <p className="mt-4 max-w-[62ch] text-[15.5px] text-on-navy-soft">{c.expertise.p2}</p>
              <p className="mt-4 max-w-[62ch] text-[15.5px] text-on-navy-soft">{c.expertise.p3}</p>

              <div className="mt-6 max-w-[62ch] border-l-2 border-bronze-soft py-1 pl-4">
                <p className="text-[12px] font-medium uppercase tracking-[0.06em] text-on-navy-soft">
                  {c.expertise.pharmaIntro}
                </p>
                <p className="mt-1.5 text-[14px] leading-relaxed text-white">{c.expertise.pharmaList}</p>
              </div>

              <div className="mt-4 max-w-[62ch] border-l-2 border-bronze-soft py-1 pl-4">
                <p className="text-[12px] font-medium uppercase tracking-[0.06em] text-on-navy-soft">
                  {c.expertise.clientsIntro}
                </p>
                <p className="mt-1.5 text-[14px] leading-relaxed text-white">{c.expertise.clientsList}</p>
              </div>

              <div className="mt-10 grid gap-8 sm:grid-cols-2">
                <CertList title={c.expertise.certDoneTitle} items={c.expertise.certDoneItems} done />
                <CertList title={c.expertise.certRoadmapTitle} items={c.expertise.certRoadmapItems} />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="questions" className="bg-cream py-20 sm:py-24">
          <div className="wrap">
            <div className="reveal">
              <span className="eyebrow">{c.faq.eyebrow}</span>
              <h2 className="mt-3 text-[clamp(28px,3.8vw,46px)] text-navy">{c.faq.h2}</h2>
            </div>
            <div className="reveal mt-9 max-w-[95ch] divide-y divide-line border-y border-line">
              {c.faq.items.map((item) => (
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
                  <p className="mt-3 max-w-[85ch] text-[15px] text-ink-soft">{item.r}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="on-navy bg-navy py-20 text-center text-on-navy sm:py-24">
          <div className="wrap">
            <span className="eyebrow">
              {c.contact.eyebrow} · {c.contact.welcome}
            </span>
            <h2 className="mt-3 text-[clamp(28px,4vw,44px)] text-white">{c.contact.h2}</h2>
            <p className="mx-auto mt-4 max-w-[56ch] text-[16px] text-on-navy-soft">{c.contact.p}</p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <a href="mailto:contact@yakini.km" className="btn btn-bronze">
                {c.contact.ctaEmail}
              </a>
              <a href="#top" className="btn btn-ghost">
                {c.contact.ctaBack}
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter footer={c.footer} slogan={c.hero.slogan} />
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
