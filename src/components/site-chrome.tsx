import { useEffect, useState } from "react";
import type { Locale, PageContent } from "@/lib/content";

/** Détecte quelle section est actuellement visible sous la nav sticky, pour surligner le lien correspondant. */
function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string | null>(null);
  const key = ids.join(",");

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      // Bande de détection fine, juste sous la nav sticky (~74px)
      { rootMargin: "-90px 0px -70% 0px", threshold: 0 },
    );
    sections.forEach((el) => io.observe(el));
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  return active;
}

export function SiteNav({
  lang,
  nav,
  basePath = "",
}: {
  lang: Locale;
  nav: PageContent["nav"];
  /** Préfixe des ancres quand la nav est utilisée hors de la page d'accueil (ex: "/fr" depuis /fr/news). */
  basePath?: string;
}) {
  const [open, setOpen] = useState(false);
  const otherLang: Locale = lang === "fr" ? "en" : "fr";
  const sectionIds = nav.links.map((l) => l.href.replace("#", ""));
  const detectedSection = useActiveSection(sectionIds);
  const activeSection = basePath ? null : detectedSection;
  const homeHref = basePath ? `${basePath}#top` : "#top";
  const contactHref = basePath ? `${basePath}#contact` : "#contact";
  const linkHref = (href: string) => (basePath ? `${basePath}${href}` : href);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-cream/85 backdrop-blur-md">
      <div className="wrap flex h-[74px] items-center justify-between">
        <a href={homeHref} className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <BrandMark className="h-[22px] w-[22px] shrink-0" />
          <span className="font-display text-[17px] font-extrabold tracking-[0.14em] text-navy">
            YAKINI
          </span>
        </a>

        <div className="hidden items-center gap-10 md:flex">
          <nav className="flex items-center gap-8">
            {nav.links.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.href}
                  href={linkHref(link.href)}
                  aria-current={isActive ? "true" : undefined}
                  className={`border-b-2 pb-0.5 text-sm font-medium transition-colors ${
                    isActive
                      ? "border-teal text-navy"
                      : "border-transparent text-ink-soft hover:text-ink"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
            <a
              href={`/${lang}/news`}
              className="border-b-2 border-transparent pb-0.5 text-sm font-medium text-ink-soft transition-colors hover:text-ink"
            >
              {nav.newsLabel}
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href={`/${otherLang}`}
              hrefLang={otherLang}
              aria-label={otherLang === "en" ? "Switch to English" : "Passer en français"}
              className="rounded px-2 py-2 text-sm font-semibold text-ink-soft transition-colors hover:text-navy"
            >
              {nav.langLabel}
            </a>
            <a href={contactHref} className="btn btn-navy">
              {nav.contact}
            </a>
          </div>
        </div>

        <button
          type="button"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] md:hidden"
        >
          <span className="block h-px w-5 bg-navy" />
          <span className="block h-px w-5 bg-navy" />
          <span className="block h-px w-5 bg-navy" />
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-cream md:hidden">
          <div className="wrap flex flex-col gap-4 py-5">
            {nav.links.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.href}
                  href={linkHref(link.href)}
                  onClick={() => setOpen(false)}
                  aria-current={isActive ? "true" : undefined}
                  className={`flex items-center gap-2 text-base font-medium ${
                    isActive ? "text-navy" : "text-ink"
                  }`}
                >
                  {isActive && <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-teal" aria-hidden="true" />}
                  {link.label}
                </a>
              );
            })}
            <a
              href={`/${lang}/news`}
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 text-base font-medium text-ink"
            >
              {nav.newsLabel}
            </a>
            <a
              href={`/${otherLang}`}
              hrefLang={otherLang}
              className="text-base font-medium text-ink"
              onClick={() => setOpen(false)}
            >
              {otherLang === "en" ? "English" : "Français"}
            </a>
            <a href={contactHref} className="btn btn-navy" onClick={() => setOpen(false)}>
              {nav.contact}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export function BrandMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 3 L12 12 L12 21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        className="text-navy"
      />
      <path
        d="M20 3 L12 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        className="text-bronze"
      />
    </svg>
  );
}

export function SiteFooter({ footer, slogan }: { footer: PageContent["footer"]; slogan: string }) {
  return (
    <footer className="bg-navy-deep py-8 text-[13px] text-on-navy-soft">
      <div className="wrap flex flex-col gap-2">
        <p className="font-display text-[15px] font-semibold text-bronze-soft">{slogan}</p>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span>{footer.tagline}</span>
          <span>© {new Date().getFullYear()}</span>
        </div>
        <p className="text-[12px] italic text-on-navy-soft/80">{footer.brandNote}</p>
        <details className="mt-1 text-[12px] text-on-navy-soft/80">
          <summary className="cursor-pointer select-none underline-offset-2 hover:text-on-navy hover:underline">
            {footer.legalSummary}
          </summary>
          <p className="mt-2 max-w-[70ch] leading-relaxed">{footer.legalBody}</p>
        </details>
      </div>
    </footer>
  );
}

/** Révélation au scroll, désactivée si l'utilisateur préfère moins d'animation. */
export function useReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}
