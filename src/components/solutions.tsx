import type { Solution } from "@/lib/content";

export type { Solution };

export function SolutionCard({
  solution,
  labels,
}: {
  solution: Solution;
  labels: { pourQui: string; actions: string; livrables: string; premium: string };
}) {
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
                {labels.premium}
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
          <DetailList title={labels.pourQui} items={solution.pourQui} />
          <DetailList title={labels.actions} items={solution.actions} />
          <DetailList title={labels.livrables} items={solution.livrables} accent />
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
