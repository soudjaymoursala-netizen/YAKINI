import { useEffect, useState } from "react";
import type { Locale, PageContent } from "@/lib/content";

export function SiteNav({ lang, nav }: { lang: Locale; nav: PageContent["nav"] }) {
  const [open, setOpen] = useState(false);
  const otherLang: Locale = lang === "fr" ? "en" : "fr";

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-cream/85 backdrop-blur-md">
      <div className="wrap flex h-[74px] items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <BrandMark className="h-[22px] w-[22px] shrink-0" />
          <span className="font-display text-[17px] font-extrabold tracking-[0.14em] text-navy">
            YAKINI
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-soft transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href={`/${otherLang}`}
            hrefLang={otherLang}
            aria-label={otherLang === "en" ? "Switch to English" : "Passer en français"}
            className="text-sm font-semibold text-ink-soft transition-colors hover:text-navy"
          >
            {nav.langLabel}
          </a>
          <a href="#contact" className="btn btn-navy">
            {nav.contact}
          </a>
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
            {nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-ink"
              >
                {link.label}
              </a>
            ))}
            <a
              href={`/${otherLang}`}
              hrefLang={otherLang}
              className="text-base font-medium text-ink"
              onClick={() => setOpen(false)}
            >
              {otherLang === "en" ? "English" : "Français"}
            </a>
            <a href="#contact" className="btn btn-navy" onClick={() => setOpen(false)}>
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

export function SiteFooter({ footer }: { footer: PageContent["footer"] }) {
  return (
    <footer className="bg-navy-deep py-8 text-[13px] text-on-navy-soft">
      <div className="wrap flex flex-col gap-2">
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
