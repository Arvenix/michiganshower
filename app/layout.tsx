import type { Metadata, Viewport } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import { site } from "@/site.config";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s | ${site.shortName}`,
  },
  description: site.description,
  keywords: [
    "walk-in shower Michigan",
    "walk-in tub Michigan",
    "bathroom remodel Michigan",
    "tub to shower conversion",
    "barrier free shower",
    "roll-in shower",
    "accessible bathroom remodel",
    "HISA grant contractor Michigan",
    "aging in place bathroom",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: [
      {
        url: "/brand/og.jpg",
        width: 1200,
        height: 630,
        alt: `${site.name} logo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: ["/brand/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: "#2e6a8f",
  width: "device-width",
  initialScale: 1,
};

/** LocalBusiness structured data — helps Google show you in local results. */
function StructuredData() {
  const hasStreet = site.address.street.length > 0;
  const data = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${site.url}/#business`,
    name: site.name,
    description: site.description,
    url: site.url,
    email: site.email,
    logo: `${site.url}/brand/logo-512.png`,
    image: `${site.url}/brand/og.jpg`,
    ...(site.showPhone ? { telephone: site.phoneHref } : {}),
    ...(hasStreet
      ? {
          address: {
            "@type": "PostalAddress",
            streetAddress: site.address.street,
            addressLocality: site.address.city,
            addressRegion: site.address.state,
            postalCode: site.address.zip,
            addressCountry: "US",
          },
        }
      : {
          address: {
            "@type": "PostalAddress",
            addressRegion: "MI",
            addressCountry: "US",
          },
        }),
    areaServed: {
      "@type": "State",
      name: "Michigan",
    },
    knowsAbout: [
      "Walk-in showers",
      "Walk-in tubs",
      "Tub-to-shower conversions",
      "Barrier-free and roll-in showers",
      "Accessible bathroom remodeling",
      "VA HISA grant bathroom modifications",
    ],
    slogan: "Quality. Precision. Built to last — with your vision.",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="flex min-h-screen flex-col antialiased">
        <StructuredData />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-brand-700 focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
