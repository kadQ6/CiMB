import { Container } from "./Container";
import { Breadcrumb, type Crumb } from "./Breadcrumb";
import { AnimatedReveal } from "./AnimatedReveal";

export function PageHero({
  eyebrow,
  title,
  description,
  crumbs,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  crumbs: Crumb[];
}) {
  return (
    <section className="relative overflow-hidden border-b border-[color:var(--color-line)] bg-[color:var(--color-soft)]">
      <div aria-hidden className="absolute inset-0 bg-grid opacity-50" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-0 h-[420px] w-[420px] rounded-full bg-[color:var(--color-teal)]/10 blur-3xl"
      />
      <Container className="relative pt-14 pb-20 md:pt-20 md:pb-28">
        <Breadcrumb items={crumbs} />
        <div className="mt-7 max-w-4xl">
          <AnimatedReveal>
            <p className="eyebrow">{eyebrow}</p>
          </AnimatedReveal>
          <AnimatedReveal delay={0.05}>
            <h1 className="display mt-4 text-balance text-4xl md:text-5xl lg:text-[58px]">{title}</h1>
          </AnimatedReveal>
          {description && (
            <AnimatedReveal delay={0.1}>
              <p className="mt-6 max-w-2xl text-pretty text-lg text-[color:var(--color-muted-strong)]">
                {description}
              </p>
            </AnimatedReveal>
          )}
        </div>
      </Container>
    </section>
  );
}
