import { Building2 } from "lucide-react";
import type { Reference } from "@/lib/site-data";

export function ReferenceCard({ reference }: { reference: Reference }) {
  return (
    <article className="group relative h-full overflow-hidden rounded-3xl border border-[color:var(--color-line)] bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-elev)]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(380px 200px at 100% 0%, rgba(15,181,166,0.10), transparent 60%)",
        }}
      />
      <div className="relative">
        <div className="flex items-center gap-3">
          <span
            aria-hidden
            className="grid h-10 w-10 place-items-center rounded-xl bg-[color:var(--color-soft)] text-[color:var(--color-ink)]"
          >
            <Building2 className="h-4 w-4" />
          </span>
          <p className="eyebrow">Mission anonymisée</p>
        </div>

        <h3 className="mt-5 text-xl font-semibold text-[color:var(--color-ink)]">{reference.type}</h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[color:var(--color-muted-strong)]">
          {reference.description}
        </p>

        <dl className="mt-7 grid grid-cols-3 gap-3 border-t border-[color:var(--color-line)] pt-5">
          {reference.metrics.map((m) => (
            <div key={m.label}>
              <dt className="text-[11px] uppercase tracking-[0.16em] text-[color:var(--color-muted)]">
                {m.label}
              </dt>
              <dd className="num-tabular mt-1 text-base font-semibold text-[color:var(--color-ink)]">
                {m.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </article>
  );
}
