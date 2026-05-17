import type { Metadata } from "next";
import { Award, Compass, HeartPulse, Microscope, Target, Users } from "lucide-react";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { ImageFeature } from "@/components/ImageFeature";
import { LogoWall } from "@/components/LogoWall";
import { CTASection } from "@/components/CTASection";
import { AnimatedReveal } from "@/components/AnimatedReveal";
import { buildMetadata } from "@/lib/seo";
import { images } from "@/lib/images";
import { site } from "@/lib/site-data";

export const metadata: Metadata = buildMetadata({
  title: "À propos de CiMB",
  description:
    "CiMB est le centre d'ingénierie et de maintenance biomédicale porté par HORNCARE. Notre mission : professionnaliser la maintenance biomédicale à Djibouti et dans la sous-région.",
  path: "/a-propos",
  keywords: ["HORNCARE Djibouti", "centre biomédical Djibouti"],
});

const values = [
  {
    title: "Rigueur méthodologique",
    description:
      "Chaque livrable est traçable, vérifiable et opposable. Nous travaillons avec des référentiels clairs, pas à l'intuition.",
    icon: Compass,
  },
  {
    title: "Compétence locale",
    description:
      "Nous transférons les compétences vers les équipes locales. Notre objectif est l'autonomie de l'établissement, pas la dépendance.",
    icon: Users,
  },
  {
    title: "Sens du soin",
    description:
      "Un parc fiable, c'est un service clinique sécurisé. Nos décisions techniques sont toujours arbitrées au regard du patient.",
    icon: HeartPulse,
  },
  {
    title: "Précision technique",
    description:
      "Nous appliquons les normes IEC 60601, IEC 62353, NF S99-170 et les bonnes pratiques OMS sans compromis.",
    icon: Microscope,
  },
];

const positioning = [
  {
    title: "Centré sur Djibouti",
    description:
      "Une présence opérationnelle dans la Corne de l'Afrique pour des temps de réponse maîtrisés et un accompagnement de proximité.",
  },
  {
    title: "Ouvert à la région",
    description:
      "Interventions en Éthiopie, Somalie, Érythrée et au-delà, en partenariat avec des bailleurs et des opérateurs hospitaliers.",
  },
  {
    title: "Adossé à HORNCARE",
    description:
      "L'expertise globale d'HORNCARE en santé, l'agilité d'un centre dédié à l'ingénierie biomédicale terrain.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="À propos"
        title="Le centre de référence en ingénierie biomédicale, à Djibouti."
        description="CiMB conjugue ingénierie, maintenance et pédagogie pour rendre les parcs biomédicaux des établissements de santé fiables, conformes et pilotables dans la durée."
        crumbs={[{ label: "Accueil", href: "/" }, { label: "À propos" }]}
        image={images.about.src}
        imageAlt={images.about.alt}
      />

      <section>
        <Container className="py-24 md:py-32">
          <ImageFeature
            eyebrow="Notre raison d'être"
            title="Professionnaliser la maintenance biomédicale, structure par structure."
            image={images.team.src}
            imageAlt={images.team.alt}
            description={
              <>
                <p>
                  Dans la plupart des établissements que nous accompagnons, la maintenance biomédicale
                  souffre des mêmes contraintes : équipements vieillissants, parcs incomplets,
                  interventions non documentées, dépendance forte aux fabricants, absence d'indicateurs
                  consolidés.
                </p>
                <p>
                  {site.name} a été conçu pour répondre concrètement à cette réalité, en apportant
                  aux directions techniques une démarche structurée, des outils éprouvés et un
                  accompagnement humain. Nous considérons la maintenance biomédicale comme un levier
                  stratégique de qualité des soins.
                </p>
                <p>
                  {site.name} est porté par {site.parent}. Nos équipes interviennent à Djibouti et dans
                  la sous-région, en partenariat avec des hôpitaux publics, des cliniques privées, des
                  centres spécialisés et des bailleurs internationaux.
                </p>
              </>
            }
          />
        </Container>
      </section>

      <section className="bg-[color:var(--color-soft)]">
        <Container className="py-24 md:py-28">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <AnimatedReveal>
              <article className="h-full rounded-3xl border border-[color:var(--color-line)] bg-white p-8">
                <Target className="h-6 w-6 text-[color:var(--color-teal-700)]" />
                <h3 className="mt-5 text-xl font-semibold text-[color:var(--color-ink)]">Mission</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[color:var(--color-muted-strong)]">
                  Garantir la disponibilité, la sécurité et la conformité des équipements médicaux
                  pour soutenir la continuité des soins.
                </p>
              </article>
            </AnimatedReveal>
            <AnimatedReveal delay={0.05}>
              <article className="h-full rounded-3xl border border-[color:var(--color-line)] bg-white p-8">
                <Compass className="h-6 w-6 text-[color:var(--color-teal-700)]" />
                <h3 className="mt-5 text-xl font-semibold text-[color:var(--color-ink)]">Vision</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[color:var(--color-muted-strong)]">
                  Faire émerger un standard régional d'ingénierie biomédicale, ancré dans les
                  réalités africaines et aligné sur les meilleures pratiques internationales.
                </p>
              </article>
            </AnimatedReveal>
            <AnimatedReveal delay={0.1}>
              <article className="h-full rounded-3xl border border-[color:var(--color-line)] bg-white p-8">
                <Award className="h-6 w-6 text-[color:var(--color-teal-700)]" />
                <h3 className="mt-5 text-xl font-semibold text-[color:var(--color-ink)]">Engagement</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[color:var(--color-muted-strong)]">
                  Une qualité de livrable constante, une transparence sans réserve sur les actions
                  et un transfert de compétence vers les équipes locales.
                </p>
              </article>
            </AnimatedReveal>
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-24 md:py-28">
          <SectionHeading
            eyebrow="Valeurs"
            title="Quatre valeurs qui structurent notre exigence quotidienne."
          />
          <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <AnimatedReveal key={v.title} delay={i * 0.05}>
                <article className="h-full rounded-3xl border border-[color:var(--color-line)] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]">
                  <span
                    aria-hidden
                    className="grid h-12 w-12 place-items-center rounded-2xl bg-[color:var(--color-teal-100)] text-[color:var(--color-teal-700)]"
                  >
                    <v.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-6 text-lg font-semibold text-[color:var(--color-ink)]">{v.title}</h3>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-[color:var(--color-muted-strong)]">
                    {v.description}
                  </p>
                </article>
              </AnimatedReveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[color:var(--color-ink)] text-white">
        <Container className="py-24 md:py-28">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--color-teal-100)]">
                Positionnement
              </p>
              <h2 className="display mt-4 text-3xl md:text-[40px] text-white">
                Un ancrage local, une exigence internationale.
              </h2>
              <p className="mt-5 max-w-md text-[15.5px] text-white/75 leading-relaxed">
                CiMB intervient depuis Djibouti, à proximité immédiate des établissements. Nos
                missions s'étendent à l'ensemble de la Corne de l'Afrique selon les besoins de
                bailleurs et d'opérateurs partenaires.
              </p>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 gap-4 md:grid-cols-3">
              {positioning.map((p) => (
                <article key={p.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                  <h3 className="text-base font-semibold">{p.title}</h3>
                  <p className="mt-3 text-[14px] text-white/75 leading-relaxed">{p.description}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-24 md:py-28">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="L'équipe"
                title="Une équipe pluridisciplinaire au service de votre direction technique."
                description="Ingénieurs biomédicaux, techniciens spécialisés, métrologues et formateurs : nous mobilisons les compétences nécessaires en fonction de la mission."
              />
            </div>
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {[
                  { role: "Ingénierie biomédicale", description: "Conduite de mission, audit, structuration de département biomédical, expertise normative." },
                  { role: "Techniciens biomédicaux", description: "Maintenance préventive et curative, métrologie, contrôles fonctionnels et électriques." },
                  { role: "Pôle GMAO & Data", description: "Mise en place de GMAO, indicateurs, tableaux de bord, exports vers les bailleurs." },
                  { role: "Pôle formation & qualité", description: "Sessions utilisateurs, documentation, conformité aux normes IEC et OMS." },
                ].map((t) => (
                  <article
                    key={t.role}
                    className="rounded-2xl border border-[color:var(--color-line)] bg-white p-6"
                  >
                    <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--color-teal-700)]">
                      Pôle
                    </p>
                    <h3 className="mt-2 text-lg font-semibold text-[color:var(--color-ink)]">{t.role}</h3>
                    <p className="mt-3 text-[14px] leading-relaxed text-[color:var(--color-muted-strong)]">
                      {t.description}
                    </p>
                  </article>
                ))}
              </div>
              <p className="mt-5 text-[12.5px] text-[color:var(--color-muted)]">
                Les noms et photographies des collaborateurs ne sont pas affichés par défaut. Nous
                pouvons les communiquer dans le cadre d'une réponse à appel d'offres ou d'un
                processus de sélection.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <LogoWall />

      <CTASection
        eyebrow="Travailler avec nous"
        title="Discuter d'un audit, d'un contrat ou d'un partenariat avec CiMB."
        primaryHref="/contact"
        primaryLabel="Nous contacter"
      />
    </>
  );
}
