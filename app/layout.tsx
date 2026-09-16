import type { Metadata, Viewport } from "next";
import { Source_Sans_3 } from "next/font/google";
import { LocaleProvider } from "@/components/locale-provider";
import { BUSINESS_NAME, getSiteUrl, PHONE_E164 } from "@/lib/site";
import { copy } from "@/lib/copy";
import "./globals.css";

const sourceSans = Source_Sans_3({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-source-sans",
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: copy.fr.meta.title,
  description: copy.fr.meta.description,
  applicationName: BUSINESS_NAME,
  openGraph: {
    type: "website",
    locale: "fr_CA",
    alternateLocale: ["en_CA"],
    siteName: BUSINESS_NAME,
    title: copy.fr.meta.title,
    description: copy.fr.meta.description,
  },
  twitter: {
    card: "summary_large_image",
    title: copy.fr.meta.title,
    description: copy.fr.meta.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0B3D91",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Plumber",
  name: BUSINESS_NAME,
  telephone: PHONE_E164,
  url: siteUrl,
  image: `${siteUrl}/logo.png`,
  areaServed: [
    { "@type": "AdministrativeArea", name: "Maniwaki" },
    { "@type": "AdministrativeArea", name: "Outaouais" },
    { "@type": "AdministrativeArea", name: "Québec" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${sourceSans.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
