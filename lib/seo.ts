import type { Metadata } from "next";
import { site } from "./site-data";

const DEFAULT_DESCRIPTION =
  "CiMB — Centre d'Ingénierie et de Maintenance Biomédicale. Audit, maintenance préventive et curative, GMAO hospitalière et accompagnement biomédical à Djibouti et dans la région.";

const DEFAULT_KEYWORDS = [
  "maintenance biomédicale Djibouti",
  "audit équipements médicaux",
  "ingénierie biomédicale hospitalière",
  "contrat de maintenance biomédicale",
  "gestion de parc biomédical",
  "GMAO hospitalière",
  "HORNCARE",
  "CiMB",
];

export type PageMetaInput = {
  title: string;
  description?: string;
  path?: string;
  keywords?: string[];
};

export function buildMetadata({
  title,
  description = DEFAULT_DESCRIPTION,
  path = "/",
  keywords = [],
}: PageMetaInput): Metadata {
  const url = new URL(path, site.url).toString();
  const fullTitle = title === site.name ? `${site.name} — ${site.longName}` : `${title} | ${site.name}`;

  return {
    title: fullTitle,
    description,
    keywords: Array.from(new Set([...DEFAULT_KEYWORDS, ...keywords])),
    metadataBase: new URL(site.url),
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: `${site.name} — ${site.longName}`,
      locale: site.locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large",
        "max-video-preview": -1,
      },
    },
    authors: [{ name: site.name }],
    creator: site.parent,
    publisher: site.parent,
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    legalName: `${site.name} — ${site.longName}`,
    url: site.url,
    parentOrganization: { "@type": "Organization", name: site.parent },
    description: DEFAULT_DESCRIPTION,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.contact.city,
      addressCountry: site.contact.country,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: site.contact.email,
        telephone: site.contact.phone,
        areaServed: ["DJ", "ET", "SO", "ER"],
        availableLanguage: ["fr", "en"],
      },
    ],
  };
}

export function professionalServiceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `${site.name} — ${site.longName}`,
    url: site.url,
    description: DEFAULT_DESCRIPTION,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.contact.city,
      addressCountry: site.contact.country,
    },
    areaServed: [
      { "@type": "Country", name: "Djibouti" },
      { "@type": "Country", name: "Éthiopie" },
      { "@type": "Country", name: "Somalie" },
    ],
    serviceType: [
      "Audit biomédical",
      "Maintenance préventive biomédicale",
      "Maintenance curative biomédicale",
      "Gestion de parc d'équipements médicaux",
      "Mise en place de GMAO hospitalière",
    ],
    priceRange: "Sur devis",
  };
}
