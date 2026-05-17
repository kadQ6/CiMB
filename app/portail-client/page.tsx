import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { ClientPortalPreview } from "@/components/ClientPortalPreview";
import { CTASection } from "@/components/CTASection";
import { AnimatedReveal } from "@/components/AnimatedReveal";
import { buildMetadata } from "@/lib/seo";
import { portalFeatures } from "@/lib/site-data";
import { images } from "@/lib/images";

export const metadata: Metadata = buildMetadata({
  title: "Portail client",
  description:
    "Espace client CiMB : suivi des équipements, tickets d'intervention, rapports, contrats et indicateurs de performance — accessibles 24h/24 par les directions techniques.",
  path: "/portail-client",
});

export default function PortailClientPage() {
  return (
    <>
      <PageHero
        eyebrow="Portail client"
        title="Votre parc biomédical, piloté par la donnée."
        description="Un espace dédié pour les directions techniques et les responsables biomédicaux : équipements, interventions, indicateurs et rapports — au même endroit, en continu."
        crumbs={[{ label: "Accueil", href: "/" }, { label: "Portail client" }]}
        image={images.equipmentClose.src}
        imageAlt={images.equipmentClose.alt}
      />

      <section>
        <Container className="py-20 md:py-28">
          <ClientPortalPreview />
        </Container>
      </section>

      <section className="bg-[color:var(--color-soft)]">
        <Container className="py-24 md:py-28">
          <SectionHeading
            eyebrow="Fonctionnalités"
            title="Ce que vous pouvez faire depuis votre portail CiMB."
            description="L'espace client est conçu pour être utile au quotidien aux équipes techniques et lisible par les directions générales."
          />
          <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {portalFeatures.map((f, i) => (
              <AnimatedReveal key={f.title} delay={(i % 4) * 0.04}>
                <article className="h-full rounded-2xl border border-[color:var(--color-line)] bg-white p-6">
                  <CheckCircle2 className="h-5 w-5 text-[color:var(--color-teal-700)]" />
                  <h3 className="mt-4 text-[15.5px] font-semibold text-[color:var(--color-ink)]">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-[color:var(--color-muted-strong)]">
                    {f.description}
                  </p>
                </article>
              </AnimatedReveal>
            ))}
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-24 md:py-28">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Sécurité"
                title="Une architecture conçue pour la confidentialité hospitalière."
                description="Authentification renforcée, chiffrement des échanges, journalisation des accès et hébergement adapté aux contextes africains."
              />
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                { title: "Profils utilisateurs", description: "Direction, biomédical, technicien : chacun voit l'information dont il a besoin." },
                { title: "Authentification renforcée", description: "Mot de passe et second facteur sur les comptes administrateurs." },
                { title: "Traçabilité des accès", description: "Tous les accès et modifications sont journalisés et exploitables en audit." },
                { title: "Exports normés", description: "Excel et PDF : format adapté aux audits internes et aux bailleurs." },
              ].map((s) => (
                <article
                  key={s.title}
                  className="rounded-2xl border border-[color:var(--color-line)] bg-white p-6"
                >
                  <h3 className="text-base font-semibold text-[color:var(--color-ink)]">{s.title}</h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-[color:var(--color-muted-strong)]">
                    {s.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        eyebrow="Démonstration"
        title="Souhaitez-vous une démonstration personnalisée du portail ?"
        description="Nous présentons l'environnement client avec des cas concrets et nous adaptons les indicateurs à votre établissement."
        primaryHref="/contact?objet=demo-portail"
        primaryLabel="Programmer une démonstration"
      />
    </>
  );
}
