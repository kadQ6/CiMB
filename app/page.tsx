import { ArrowRight, ShieldCheck } from "lucide-react";
import { HeroSection } from "@/components/HeroSection";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { StatsGrid } from "@/components/StatsGrid";
import { ServiceCard } from "@/components/ServiceCard";
import { MethodTimeline } from "@/components/MethodTimeline";
import { ReferenceCard } from "@/components/ReferenceCard";
import { ClientPortalPreview } from "@/components/ClientPortalPreview";
import { CTASection } from "@/components/CTASection";
import { AnimatedReveal } from "@/components/AnimatedReveal";
import { ButtonLink } from "@/components/Button";
import { references, sectors, serviceModels, whyCimb } from "@/lib/site-data";

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* Introduction + chiffres clés */}
      <section className="relative">
        <Container className="py-20 md:py-28">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="eyebrow">Le centre</p>
              <h2 className="display mt-4 text-3xl md:text-[40px] leading-[1.05]">
                Un centre dédié à la performance technique des établissements de santé.
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-lg leading-relaxed text-[color:var(--color-muted-strong)] text-pretty">
                CiMB est un centre d'ingénierie et de maintenance biomédicale, porté par HORNCARE.
                Nous accompagnons les directions techniques et les responsables biomédicaux dans la
                durée — pour transformer un parc d'équipements souvent vieillissant en un actif
                fiable, conforme et piloté par la donnée.
              </p>
              <p className="mt-5 text-[15.5px] leading-relaxed text-[color:var(--color-muted)]">
                Notre approche combine ingénierie biomédicale, maintenance terrain et structuration
                d'outils de pilotage. Elle s'aligne sur les bonnes pratiques de l'OMS et sur les
                normes IEC 60601, IEC 62353 et NF S99-170.
              </p>
            </div>
          </div>

          <div className="mt-16">
            <AnimatedReveal>
              <StatsGrid />
            </AnimatedReveal>
          </div>
        </Container>
      </section>

      {/* Modèles de service */}
      <section className="relative bg-[color:var(--color-soft)]">
        <Container className="py-24 md:py-28">
          <SectionHeading
            eyebrow="Nos modèles de service"
            title="Quatre façons d'engager CiMB selon votre niveau de besoin."
            description="De l'audit ponctuel au contrat pluriannuel, nous adaptons l'intensité de notre intervention à votre maturité technique et à votre programme d'investissement."
          />
          <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {serviceModels.map((s, i) => (
              <AnimatedReveal key={s.title} delay={i * 0.05}>
                <ServiceCard
                  title={s.title}
                  description={s.description}
                  Icon={s.icon}
                  href="/expertises"
                />
              </AnimatedReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Pourquoi CiMB */}
      <section className="relative">
        <Container className="py-24 md:py-32">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Pourquoi CiMB"
                title="Une exigence d'ingénieur. Un sens du terrain."
                description="Nous ne livrons pas des recommandations théoriques. Chaque mission s'achève par un parc plus fiable, des décisions argumentées et une traçabilité opposable aux audits internes et aux bailleurs."
              >
                <div className="mt-8">
                  <ButtonLink href="/methode" variant="ghost" size="md">
                    Voir notre méthode
                    <ArrowRight className="h-4 w-4" />
                  </ButtonLink>
                </div>
              </SectionHeading>
            </div>

            <div className="lg:col-span-7">
              <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {whyCimb.map((w, i) => (
                  <AnimatedReveal key={w.title} delay={i * 0.04}>
                    <li className="group h-full rounded-2xl border border-[color:var(--color-line)] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]">
                      <span
                        aria-hidden
                        className="grid h-10 w-10 place-items-center rounded-xl bg-[color:var(--color-soft)] text-[color:var(--color-ink)] transition-colors group-hover:bg-[color:var(--color-ink)] group-hover:text-white"
                      >
                        <w.icon className="h-4 w-4" />
                      </span>
                      <h3 className="mt-5 text-base font-semibold text-[color:var(--color-ink)]">
                        {w.title}
                      </h3>
                      <p className="mt-2 text-[14px] leading-relaxed text-[color:var(--color-muted-strong)]">
                        {w.description}
                      </p>
                    </li>
                  </AnimatedReveal>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Méthode */}
      <section id="methode" className="relative bg-[color:var(--color-soft)]">
        <Container className="py-24 md:py-32">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Méthode"
              title="Cinq étapes structurées, du diagnostic au pilotage continu."
              description="Une démarche reproductible, traçable et lisible par toutes les parties prenantes — direction, soignants, fournisseurs, bailleurs."
            />
            <ButtonLink href="/methode" variant="ghost" size="md" className="self-start md:self-auto">
              Méthode détaillée
              <ArrowRight className="h-4 w-4" />
            </ButtonLink>
          </div>
          <div className="mt-14">
            <MethodTimeline />
          </div>
        </Container>
      </section>

      {/* Références / secteurs */}
      <section className="relative">
        <Container className="py-24 md:py-32">
          <SectionHeading
            eyebrow="Secteurs accompagnés"
            title="Des hôpitaux publics aux blocs opératoires : un seul niveau d'exigence."
            description="Nous opérons dans des contextes hétérogènes — public, privé, terrain régional — avec la même rigueur méthodologique."
          />
          <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-7">
            {sectors.map((s, i) => (
              <AnimatedReveal key={s.title} delay={i * 0.03}>
                <div className="group flex h-full flex-col items-center gap-3 rounded-2xl border border-[color:var(--color-line)] bg-white px-3 py-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]">
                  <span
                    aria-hidden
                    className="grid h-10 w-10 place-items-center rounded-xl bg-[color:var(--color-teal-100)] text-[color:var(--color-teal-700)] transition-colors group-hover:bg-[color:var(--color-teal)] group-hover:text-white"
                  >
                    <s.icon className="h-4 w-4" />
                  </span>
                  <p className="text-sm font-medium leading-tight text-[color:var(--color-ink)]">
                    {s.title}
                  </p>
                </div>
              </AnimatedReveal>
            ))}
          </div>

          <div className="mt-20 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {references.slice(0, 3).map((r, i) => (
              <AnimatedReveal key={r.type} delay={i * 0.05}>
                <ReferenceCard reference={r} />
              </AnimatedReveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <ButtonLink href="/references" variant="ghost" size="md">
              Voir toutes les missions
              <ArrowRight className="h-4 w-4" />
            </ButtonLink>
          </div>
        </Container>
      </section>

      {/* Portail client */}
      <section className="relative bg-[color:var(--color-soft)]">
        <Container className="py-24 md:py-32">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-10 items-center">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Portail client"
                title="Vos équipements, vos rapports, vos indicateurs — au même endroit."
                description="Chaque client CiMB dispose d'un espace dédié pour suivre l'état de son parc, déclarer un incident, consulter les rapports techniques et exporter les indicateurs nécessaires aux audits internes ou aux bailleurs."
              >
                <ul className="mt-8 space-y-2.5">
                  {[
                    "Accès sécurisé par profil utilisateur",
                    "Historique complet par équipement",
                    "Tickets d'intervention horodatés",
                    "Indicateurs de disponibilité en temps réel",
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-2.5 text-[14.5px] text-[color:var(--color-muted-strong)]">
                      <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--color-teal-700)]" />
                      {t}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <ButtonLink href="/portail-client" variant="primary" size="md">
                    Découvrir le portail
                    <ArrowRight className="h-4 w-4" />
                  </ButtonLink>
                </div>
              </SectionHeading>
            </div>
            <div className="lg:col-span-7">
              <ClientPortalPreview />
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        eyebrow="Premier échange"
        title="Vous souhaitez connaître l'état réel de votre parc biomédical ?"
        description="Un échange de 30 minutes avec un ingénieur CiMB suffit pour cadrer la démarche, identifier les priorités et définir le format de mission adapté."
        primaryHref="/contact"
        primaryLabel="Planifier un premier échange"
        secondaryHref="/offres"
        secondaryLabel="Voir nos offres"
      />
    </>
  );
}
