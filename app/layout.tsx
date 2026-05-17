import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEOJsonLd } from "@/components/SEOJsonLd";
import { buildMetadata, organizationJsonLd, professionalServiceJsonLd } from "@/lib/seo";
import { site } from "@/lib/site-data";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  ...buildMetadata({
    title: site.name,
    description:
      "CiMB — Centre d'Ingénierie et de Maintenance Biomédicale (HORNCARE). Audit, maintenance et ingénierie biomédicale au service de la continuité des soins à Djibouti et dans la région.",
    path: "/",
  }),
  applicationName: site.name,
  category: "Healthcare engineering",
};

export const viewport: Viewport = {
  themeColor: "#0B2545",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="min-h-screen flex flex-col antialiased bg-white">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-[color:var(--color-ink)] focus:px-4 focus:py-2 focus:text-white"
        >
          Aller au contenu
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <SEOJsonLd data={[organizationJsonLd(), professionalServiceJsonLd()]} />
      </body>
    </html>
  );
}
