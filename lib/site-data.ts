/**
 * Source unique pour le contenu du site CiMB.
 * Toute évolution éditoriale ou intégration CMS / Supabase doit passer par ce fichier.
 */

import type { LucideIcon } from "lucide-react";
import {
  Activity,
  ClipboardCheck,
  Cpu,
  FileBarChart2,
  GraduationCap,
  HeartPulse,
  LayoutDashboard,
  LineChart,
  Microscope,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Wrench,
} from "lucide-react";

export const site = {
  name: "CiMB",
  longName: "Centre d'Ingénierie et de Maintenance Biomédicale",
  parent: "HORNCARE",
  baseline: "L'expertise biomédicale au service de la continuité des soins.",
  url: "https://cimb-djibouti.com",
  locale: "fr-DJ",
  contact: {
    email: "contact@cimb-djibouti.com",
    phone: "+253 77 00 00 00",
    whatsapp: "+253 77 00 00 00",
    address: "Centre d'Ingénierie et de Maintenance Biomédicale — Djibouti",
    city: "Djibouti",
    country: "Djibouti",
  },
} as const;

export const navigation = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/a-propos" },
  { label: "Expertises", href: "/expertises" },
  { label: "Offres & contrats", href: "/offres" },
  { label: "Méthode", href: "/methode" },
  { label: "Références", href: "/references" },
  { label: "Portail client", href: "/portail-client" },
  { label: "Contact", href: "/contact" },
] as const;

export type NavItem = (typeof navigation)[number];

export const heroStats: ReadonlyArray<{
  value: string;
  suffix?: string;
  label: string;
  hint: string;
}> = [
  { value: "120", suffix: "+", label: "Audits techniques conduits", hint: "sur sites hospitaliers et plateaux techniques" },
  { value: "3 200", label: "Équipements suivis", hint: "imagerie, bloc, laboratoire, soins critiques" },
  { value: "18", label: "Contrats de maintenance actifs", hint: "structures publiques et privées" },
  { value: "98", suffix: " %", label: "Disponibilité moyenne du parc", hint: "sur les contrats CiMB en cours" },
];

export type Expertise = {
  slug: string;
  title: string;
  short: string;
  description: string;
  benefits: string[];
  icon: LucideIcon;
};

export const expertises: Expertise[] = [
  {
    slug: "audit-technique",
    title: "Audit technique biomédical",
    short: "Diagnostic complet du parc d'équipements et de la conformité technique.",
    description:
      "Nous évaluons l'état réel de chaque dispositif médical : performance, sécurité, conformité aux normes IEC 60601 et IEC 62353, niveau de criticité OMS, et risques associés. Le livrable est un rapport priorisé, exploitable par la direction technique.",
    benefits: [
      "Cartographie objective du parc",
      "Hiérarchisation des risques patients",
      "Plan d'action chiffré",
      "Référentiel pour décisions d'investissement",
    ],
    icon: ClipboardCheck,
  },
  {
    slug: "inventaire-cartographie",
    title: "Inventaire et cartographie du parc",
    short: "Référentiel unique, traçable et exploitable de tous les équipements.",
    description:
      "Identification, étiquetage, classification fonctionnelle et localisation. Chaque équipement reçoit un identifiant unique, une fiche technique normalisée et un historique de maintenance ouvert.",
    benefits: [
      "Vision consolidée multi-sites",
      "Suppression des équipements fantômes",
      "Base structurée pour la GMAO",
      "Traçabilité réglementaire",
    ],
    icon: LayoutDashboard,
  },
  {
    slug: "maintenance-preventive",
    title: "Maintenance préventive",
    short: "Plans annuels structurés pour anticiper les pannes et fiabiliser le parc.",
    description:
      "Programmes de maintenance préventive systématique adaptés à la criticité, à l'usage et au contexte africain. Visites planifiées, contrôles fonctionnels, métrologie et conformité électrique selon IEC 62353.",
    benefits: [
      "Réduction des pannes critiques",
      "Augmentation de la durée de vie",
      "Sécurité renforcée pour les patients",
      "Calendrier prévisible pour les services",
    ],
    icon: ShieldCheck,
  },
  {
    slug: "maintenance-curative",
    title: "Maintenance curative",
    short: "Intervention rapide, qualifiée et tracée en cas de panne.",
    description:
      "Diagnostic terrain, remise en service, identification des pièces nécessaires, négociation et suivi auprès des fabricants. Chaque intervention est documentée et clôturée par un rapport technique.",
    benefits: [
      "Délai d'intervention maîtrisé",
      "Traçabilité de chaque action",
      "Coordination avec les fabricants",
      "Réduction des immobilisations",
    ],
    icon: Wrench,
  },
  {
    slug: "gestion-risques",
    title: "Gestion des risques équipements",
    short: "Cartographie et plan de maîtrise des risques techniques et patients.",
    description:
      "Identification des défaillances probables, évaluation de leur impact clinique et mise en place de mesures préventives. Approche dérivée des bonnes pratiques OMS et de la norme NF S99-170.",
    benefits: [
      "Priorisation par criticité OMS",
      "Plans de continuité réalistes",
      "Documentation conforme aux audits",
      "Aide à la décision stratégique",
    ],
    icon: HeartPulse,
  },
  {
    slug: "accompagnement-achat",
    title: "Accompagnement à l'achat et réception technique",
    short: "Spécifications, sourcing, vérification de conformité et mise en service.",
    description:
      "Aide à la rédaction des cahiers des charges, comparaison technique des offres, contrôle à réception, vérification métrologique, mise en service et formation initiale des utilisateurs.",
    benefits: [
      "Cahiers des charges robustes",
      "Sourcing argumenté et neutre",
      "Réception technique tracée",
      "Mise en service sécurisée",
    ],
    icon: FileBarChart2,
  },
  {
    slug: "formation-utilisateurs",
    title: "Formation des utilisateurs",
    short: "Sessions ciblées pour soignants, biomédicaux et équipes techniques.",
    description:
      "Modules pratiques sur la bonne utilisation, l'entretien de premier niveau, l'identification des dysfonctionnements et la traçabilité. Documents pédagogiques en français.",
    benefits: [
      "Réduction des mauvaises manipulations",
      "Autonomie des équipes de soin",
      "Premier niveau de maintenance assuré",
      "Capitalisation sur les bonnes pratiques",
    ],
    icon: GraduationCap,
  },
  {
    slug: "mise-en-place-gmao",
    title: "Mise en place de GMAO hospitalière",
    short: "Outil de pilotage, suivi des interventions et indicateurs.",
    description:
      "Déploiement d'une GMAO structurée : référentiel équipements, plans de maintenance, fiches d'intervention, indicateurs de performance, tableaux de bord direction.",
    benefits: [
      "Pilotage industrialisé du parc",
      "KPI consolidés (disponibilité, MTBF, MTTR)",
      "Décisions appuyées par la donnée",
      "Documentation conforme aux bailleurs",
    ],
    icon: Cpu,
  },
  {
    slug: "structuration-departement",
    title: "Structuration d'un département biomédical",
    short: "Création ou refonte du service biomédical interne d'un établissement.",
    description:
      "Définition de l'organisation, profils, processus, outils et indicateurs. Accompagnement au transfert de compétences et à la prise en main par les équipes locales.",
    benefits: [
      "Service biomédical pérenne",
      "Compétences locales renforcées",
      "Processus formalisés et auditables",
      "Lien direct avec la direction",
    ],
    icon: Microscope,
  },
];

export type Offer = {
  slug: string;
  name: string;
  tagline: string;
  duration: string;
  highlight?: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
};

export const offers: Offer[] = [
  {
    slug: "audit-simple",
    name: "Audit technique",
    tagline: "Comprendre objectivement l'état de votre parc biomédical.",
    duration: "Mission ponctuelle",
    features: [
      "Inventaire physique complet",
      "Contrôle visuel et fonctionnel",
      "Évaluation de l'état des équipements",
      "Rapport technique structuré",
      "Priorisation des urgences",
    ],
    ctaLabel: "Demander un devis",
    ctaHref: "/contact?offre=audit-simple",
  },
  {
    slug: "audit-curatif",
    name: "Audit + maintenance curative",
    tagline: "Auditer et remettre en service ce qui peut l'être immédiatement.",
    duration: "Mission étendue",
    highlight: "Le plus demandé",
    features: [
      "Audit complet du parc",
      "Identification précise des pannes",
      "Intervention corrective immédiate quand possible",
      "Liste argumentée des pièces nécessaires",
      "Rapport avec plan d'action et chiffrage",
    ],
    ctaLabel: "Planifier la mission",
    ctaHref: "/contact?offre=audit-curatif",
  },
  {
    slug: "contrat-3-ans",
    name: "Audit + contrat 3 ans",
    tagline: "Sécuriser durablement la disponibilité du parc.",
    duration: "Engagement 36 mois",
    features: [
      "Audit initial approfondi",
      "Plan préventif annuel structuré",
      "Maintenance curative encadrée",
      "Visites programmées sur site",
      "Reporting trimestriel",
      "Tableau de bord client en ligne",
      "Accompagnement budgétaire",
    ],
    ctaLabel: "Étudier le contrat",
    ctaHref: "/contact?offre=contrat-3-ans",
  },
];

export type ServiceModel = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const serviceModels: ServiceModel[] = [
  {
    title: "Audit technique du parc biomédical",
    description:
      "Un état des lieux factuel, traçable et chiffré, conçu pour servir de base aux décisions d'investissement et de mise en conformité.",
    icon: ClipboardCheck,
  },
  {
    title: "Maintenance curative",
    description:
      "Intervention de remise en service, gestion des pièces détachées et coordination avec les fabricants pour réduire les immobilisations.",
    icon: Wrench,
  },
  {
    title: "Contrat de maintenance préventive",
    description:
      "Plan annuel structuré, visites programmées et reporting régulier pour fiabiliser durablement la disponibilité du parc.",
    icon: ShieldCheck,
  },
  {
    title: "Accompagnement ingénierie biomédicale",
    description:
      "Conseil stratégique : structuration du département, GMAO, achats, formation et continuité des soins.",
    icon: Stethoscope,
  },
];

export type WhyPoint = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const whyCimb: WhyPoint[] = [
  {
    title: "Réduction des pannes",
    description:
      "Une politique de prévention rigoureuse, dérivée des standards internationaux, pour limiter les arrêts non planifiés.",
    icon: Activity,
  },
  {
    title: "Priorisation budgétaire",
    description:
      "Des arbitrages éclairés grâce à une vision factuelle de la criticité et de l'état réel des équipements.",
    icon: LineChart,
  },
  {
    title: "Conformité technique",
    description:
      "Référentiels IEC 60601, IEC 62353, NF S99-170 et bonnes pratiques OMS appliqués sur le terrain.",
    icon: ShieldCheck,
  },
  {
    title: "Continuité des soins",
    description:
      "Un parc fiable, c'est un service clinique sécurisé. Notre engagement premier reste le patient.",
    icon: HeartPulse,
  },
  {
    title: "Traçabilité des interventions",
    description:
      "Chaque action est documentée, datée et exploitable pour les audits internes et externes.",
    icon: FileBarChart2,
  },
  {
    title: "Pilotage par la donnée",
    description:
      "KPI consolidés : disponibilité, MTBF, MTTR, taux de pannes critiques, coût de possession.",
    icon: Cpu,
  },
];

export type MethodStep = {
  number: string;
  title: string;
  description: string;
  details: string[];
};

export const methodSteps: MethodStep[] = [
  {
    number: "01",
    title: "Diagnostic initial",
    description:
      "Cadrage de la mission avec la direction technique : périmètre, contraintes, objectifs cliniques et budgétaires.",
    details: [
      "Entretiens avec la direction et les chefs de service",
      "Lecture des contrats fournisseurs en cours",
      "Identification des points de vigilance",
    ],
  },
  {
    number: "02",
    title: "Inventaire et classification",
    description:
      "Identification physique, étiquetage et fiche technique normalisée pour chaque équipement.",
    details: [
      "Identifiant unique par dispositif",
      "Classification fonctionnelle et criticité OMS",
      "Localisation par service / salle",
    ],
  },
  {
    number: "03",
    title: "Analyse des risques",
    description:
      "Évaluation de la criticité technique, clinique et patrimoniale de chaque équipement.",
    details: [
      "Risque clinique direct",
      "Risque de continuité de service",
      "Risque réglementaire et patrimonial",
    ],
  },
  {
    number: "04",
    title: "Plan d'action priorisé",
    description:
      "Recommandations classées par urgence, criticité et impact, avec estimation budgétaire.",
    details: [
      "Actions immédiates (sécurité)",
      "Actions à moyen terme (fiabilité)",
      "Plan d'investissement pluriannuel",
    ],
  },
  {
    number: "05",
    title: "Suivi, maintenance et reporting",
    description:
      "Mise en œuvre des actions, plan préventif, indicateurs partagés et points réguliers avec la direction.",
    details: [
      "Reporting trimestriel structuré",
      "Tableau de bord en ligne",
      "Réunions de pilotage avec la direction",
    ],
  },
];

export type Sector = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const sectors: Sector[] = [
  { title: "Hôpitaux publics", description: "CHU, hôpitaux régionaux, hôpitaux de district.", icon: HeartPulse },
  { title: "Cliniques privées", description: "Polycliniques, cliniques spécialisées et groupes santé.", icon: Stethoscope },
  { title: "Centres de santé", description: "Centres médicaux, dispensaires et structures de proximité.", icon: ShieldCheck },
  { title: "Plateaux techniques", description: "Imagerie, dialyse, soins critiques, urgences.", icon: Activity },
  { title: "Blocs opératoires", description: "Tables, scialytiques, anesthésie, monitoring, fluides médicaux.", icon: Sparkles },
  { title: "Imagerie médicale", description: "Radiographie, échographie, scanner et radioprotection.", icon: Microscope },
  { title: "Laboratoires", description: "Hématologie, biochimie, microbiologie, métrologie.", icon: Cpu },
];

export type PortalFeature = {
  title: string;
  description: string;
};

export const portalFeatures: PortalFeature[] = [
  { title: "Connexion sécurisée", description: "Accès dédié pour la direction technique et les référents biomédicaux." },
  { title: "Suivi des équipements", description: "État, localisation et statut de maintenance en temps réel." },
  { title: "Tickets d'intervention", description: "Création, suivi et clôture des demandes avec horodatage." },
  { title: "Rapports techniques", description: "Téléchargement des rapports d'audit et d'intervention en PDF." },
  { title: "Contrats et documents", description: "Référentiel documentaire centralisé et versionné." },
  { title: "Indicateurs de performance", description: "Disponibilité, MTBF, MTTR, taux de pannes critiques." },
  { title: "Historique de maintenance", description: "Toutes les interventions par équipement, date et technicien." },
  { title: "Export Excel et PDF", description: "Données exploitables pour les audits internes et les bailleurs." },
];

export type Reference = {
  type: string;
  description: string;
  metrics: { label: string; value: string }[];
};

export const references: Reference[] = [
  {
    type: "Hôpital régional public",
    description:
      "Audit technique du parc biomédical et plan de maintenance préventive sur l'ensemble des services critiques.",
    metrics: [
      { label: "Équipements audités", value: "420" },
      { label: "Services couverts", value: "12" },
      { label: "Durée mission", value: "6 semaines" },
    ],
  },
  {
    type: "Polyclinique privée",
    description:
      "Inventaire complet, mise en place GMAO et structuration du département biomédical interne.",
    metrics: [
      { label: "Équipements référencés", value: "180" },
      { label: "Plans de maintenance", value: "60" },
      { label: "Techniciens formés", value: "4" },
    ],
  },
  {
    type: "Centre de dialyse",
    description:
      "Audit de conformité, maintenance curative et accompagnement à l'investissement de renouvellement.",
    metrics: [
      { label: "Générateurs suivis", value: "24" },
      { label: "Disponibilité atteinte", value: "97 %" },
      { label: "Contrat", value: "3 ans" },
    ],
  },
  {
    type: "Bloc opératoire — clinique",
    description:
      "Vérification des fluides médicaux, contrôle des équipements de bloc et plan de fiabilisation.",
    metrics: [
      { label: "Salles couvertes", value: "5" },
      { label: "Tables d'opération", value: "5" },
      { label: "Contrôles fluides", value: "100 %" },
    ],
  },
  {
    type: "Plateau d'imagerie",
    description:
      "Audit radioprotection, maintenance curative urgente et mise en place du plan préventif annuel.",
    metrics: [
      { label: "Modalités", value: "6" },
      { label: "Délai intervention", value: "< 72 h" },
      { label: "Conformité", value: "Complète" },
    ],
  },
  {
    type: "Laboratoire d'analyses",
    description:
      "Métrologie, vérification fonctionnelle et plan de maintenance préventive sur l'ensemble du parc.",
    metrics: [
      { label: "Automates", value: "18" },
      { label: "Vérifications", value: "Annuelles" },
      { label: "Statut", value: "Conforme" },
    ],
  },
];

export const testimonials: ReadonlyArray<{
  quote: string;
  author: string;
  role: string;
  note: string;
}> = [
  {
    quote:
      "L'audit conduit par CiMB nous a permis pour la première fois de disposer d'une vision objective du parc et d'arbitrer nos priorités d'investissement avec sérénité.",
    author: "[À remplacer]",
    role: "Direction technique — hôpital régional",
    note: "Témoignage fictif d'illustration — à remplacer par un retour client réel.",
  },
  {
    quote:
      "La rigueur méthodologique et la traçabilité des interventions ont changé notre dialogue avec la direction générale et avec nos bailleurs.",
    author: "[À remplacer]",
    role: "Responsable biomédical — clinique privée",
    note: "Témoignage fictif d'illustration — à remplacer par un retour client réel.",
  },
];

export type FooterLink = { label: string; href: string };

export const footerColumns: ReadonlyArray<{
  title: string;
  links: FooterLink[];
}> = [
  {
    title: "Le centre",
    links: [
      { label: "À propos", href: "/a-propos" },
      { label: "Méthode", href: "/methode" },
      { label: "Références", href: "/references" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Expertises", href: "/expertises" },
      { label: "Offres & contrats", href: "/offres" },
      { label: "Portail client", href: "/portail-client" },
    ],
  },
  {
    title: "Ressources",
    links: [
      { label: "Contact", href: "/contact" },
      { label: "Demander un audit", href: "/contact?offre=audit-simple" },
    ],
  },
];
