import Link from "next/link";

type Variant = "default" | "light";

export function Logo({ variant = "default" }: { variant?: Variant }) {
  const inkColor = variant === "light" ? "#FFFFFF" : "var(--color-ink)";
  const subColor = variant === "light" ? "rgba(255,255,255,0.7)" : "var(--color-muted)";

  return (
    <Link href="/" aria-label="CiMB — Accueil" className="group inline-flex items-center gap-3">
      <span
        aria-hidden
        className="grid h-10 w-10 place-items-center rounded-xl bg-[color:var(--color-ink)] text-white shadow-[var(--shadow-soft)] transition-transform group-hover:-translate-y-0.5"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M5 12h3l2-5 4 10 2-5h3"
            stroke="var(--color-teal)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="flex flex-col leading-tight">
        <span className="text-[11px] uppercase tracking-[0.22em]" style={{ color: subColor }}>
          HORNCARE
        </span>
        <span className="font-semibold" style={{ color: inkColor, letterSpacing: "-0.02em" }}>
          CiMB<span className="text-[color:var(--color-teal)]">.</span>
        </span>
      </span>
    </Link>
  );
}
