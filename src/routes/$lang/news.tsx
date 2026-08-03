import { useState } from "react";
import { createFileRoute, notFound } from "@tanstack/react-router";
import { SiteNav, SiteFooter, useReveal } from "@/components/site-chrome";
import { content, LOCALES, type Locale } from "@/lib/content";
import { newsContent } from "@/lib/news";

export const Route = createFileRoute("/$lang/news")({
  params: {
    parse: (raw) => {
      if (!LOCALES.includes(raw.lang as Locale)) throw notFound();
      return { lang: raw.lang as Locale };
    },
    stringify: (params) => ({ lang: params.lang }),
  },
  head: ({ params }) => {
    const lang = params.lang as Locale;
    const n = newsContent[lang];
    return {
      meta: [
        { title: n.meta.title },
        { name: "description", content: n.meta.description },
        { property: "og:title", content: n.meta.title },
        { property: "og:description", content: n.meta.description },
        { property: "og:type", content: "website" },
        { property: "og:image", content: "/og-image.png" },
      ],
      links: [
        { rel: "alternate", hrefLang: "fr", href: "/fr/news" },
        { rel: "alternate", hrefLang: "en", href: "/en/news" },
        { rel: "alternate", hrefLang: "x-default", href: "/fr/news" },
        { rel: "canonical", href: `/${lang}/news` },
      ],
    };
  },
  component: NewsPage,
});

function formatDate(iso: string, lang: Locale) {
  const d = new Date(iso);
  return d.toLocaleDateString(lang === "fr" ? "fr-FR" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function NewsPage() {
  useReveal();
  const { lang } = Route.useParams();
  const c = content[lang];
  const n = newsContent[lang];
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const visibleCurated = activeFilter ? n.curated.filter((item) => item.categories.includes(activeFilter)) : n.curated;

  return (
    <div id="top">
      <SiteNav lang={lang} nav={c.nav} basePath={`/${lang}`} />

      <section id="contenu" className="on-navy bg-navy py-20 text-on-navy sm:py-24">
        <div className="wrap">
          <span className="eyebrow">{n.eyebrow}</span>
          <h1 className="mt-4 max-w-[22ch] text-[clamp(32px,4.6vw,52px)] leading-[1.1] tracking-[-0.02em] text-white">
            {n.h1}
          </h1>
          <p className="mt-5 max-w-[75ch] text-[17px] text-on-navy-soft">{n.intro}</p>
        </div>
      </section>

      <section className="bg-cream py-20 sm:py-24">
        <div className="wrap">
          <span className="eyebrow">{n.analysesTitle}</span>
        </div>
        <div className="wrap mt-6 space-y-5">
          {n.articles.map((article) => (
            <details key={article.id} className="surface group overflow-hidden">
              <summary className="flex cursor-pointer list-none flex-col gap-2 px-6 py-6 transition-colors hover:bg-cream-alt sm:px-8 sm:py-7">
                <span className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-line bg-cream-alt px-3 py-1 text-[11.5px] font-semibold uppercase tracking-[0.04em] text-navy">
                    {article.category}
                  </span>
                  <span className="text-[13px] text-ink-soft">{formatDate(article.date, lang)}</span>
                </span>
                <span className="flex items-baseline justify-between gap-4">
                  <span className="font-display text-[19px] font-bold leading-snug text-navy sm:text-[21px]">
                    {article.title}
                  </span>
                  <span
                    aria-hidden="true"
                    className="shrink-0 text-[20px] text-bronze transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </span>
                <span className="max-w-[85ch] text-[14.5px] leading-relaxed text-ink-soft">{article.excerpt}</span>
              </summary>
              <div className="border-t border-line px-6 py-6 sm:px-8">
                {article.body.map((para, i) => (
                  <p key={i} className="mt-4 max-w-[85ch] text-[15.5px] leading-relaxed text-ink-soft first:mt-0">
                    {para}
                  </p>
                ))}
              </div>
            </details>
          ))}
        </div>
      </section>

      <section className="bg-cream-alt py-20 sm:py-24">
        <div className="wrap">
          <span className="eyebrow">{n.curatedTitle}</span>
          <p className="mt-3 max-w-[80ch] text-[15px] text-ink-soft">{n.curatedIntro}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setActiveFilter(null)}
              className={`rounded-full border px-4 py-2 text-[13px] font-semibold transition-colors ${
                activeFilter === null
                  ? "border-navy bg-navy text-white"
                  : "border-line bg-cream text-ink-soft hover:border-navy hover:text-navy"
              }`}
            >
              {n.filterAll}
            </button>
            {n.filters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setActiveFilter(f)}
                className={`rounded-full border px-4 py-2 text-[13px] font-semibold transition-colors ${
                  activeFilter === f
                    ? "border-navy bg-navy text-white"
                    : "border-line bg-cream text-ink-soft hover:border-navy hover:text-navy"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="wrap mt-8 space-y-5">
          {visibleCurated.map((item) => (
            <article key={item.id} className="surface p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-2">
                {item.categories.map((cat) => (
                  <span
                    key={cat}
                    className="rounded-full border border-line bg-cream px-3 py-1 text-[11.5px] font-semibold uppercase tracking-[0.04em] text-teal"
                  >
                    {cat}
                  </span>
                ))}
                <span className="text-[13px] text-ink-soft">{formatDate(item.date, lang)}</span>
              </div>
              <h3 className="mt-3 max-w-[70ch] font-display text-[18px] font-bold leading-snug text-navy sm:text-[20px]">
                {item.title}
              </h3>
              <p className="mt-3 max-w-[85ch] text-[14.5px] leading-relaxed text-ink-soft">{item.summary}</p>
              <a
                href={item.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-teal transition-colors hover:text-navy"
              >
                {n.readFullArticle} — {item.sourceName} ↗
              </a>
            </article>
          ))}
        </div>

        <div className="wrap mt-10">
          <a href={`/${lang}`} className="btn btn-ghost">
            {n.backHome}
          </a>
        </div>
      </section>

      <SiteFooter footer={c.footer} slogan={c.hero.slogan} />
    </div>
  );
}
