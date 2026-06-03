

import type { Metadata, Viewport } from "next";
import SmoothScrollProvider from "@/components/providers/smooth-scroll";
import { Sora } from "next/font/google";
import "@/app/globals.css";
import Header from "@/components/bits/Header";
import SonnerProvider from "@/components/providers/sonner-provider";
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export const metadata: Metadata = {
  // ✅ Fixed typo: "Servies" → "Services"; added high-value keywords
  title: {
    default: "Shema Cleaning Services | Professional Cleaning in Manchester, UK",
    template: "%s | Shema Cleaning Services",
  },
  description:
    "Shema Cleaning Services delivers professional commercial cleaning, corporate office sanitization, post-construction deep cleans, and luxury residential maintenance across Manchester, UK. Eco-friendly, fully insured, background-checked teams.",
  keywords: [
    "cleaning services Manchester",
    "commercial cleaning Manchester",
    "office cleaning Manchester",
    "professional cleaning services UK",
    "post-construction cleaning",
    "luxury residential cleaning",
    "deep cleaning Manchester",
    "eco-friendly cleaning services",
    "corporate cleaning services",
    "domestic cleaning Manchester",
    "Shema Cleaning",
    "cleaning agency Manchester",
  ],
  authors: [{ name: "Shema Cleaning Services", url: "https://shemacleaning.com" }],
  creator: "Shema Cleaning Services",
  publisher: "Shema Cleaning Services",
  metadataBase: new URL("https://shemacleaning.com"),
  alternates: {
    canonical: "/",
  },
  // Open Graph
  openGraph: {
    title: "Shema Cleaning Services | Professional Cleaning Manchester",
    description:
      "Premium commercial, office, post-construction, and luxury residential cleaning services across Manchester, UK. Eco-friendly. Fully insured. Available 7 days.",
    url: "https://shemacleaning.com",
    siteName: "Shema Cleaning Services",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "https://shemacleaning.com/assets/og-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Shema Cleaning Services — Professional Cleaning Manchester",
      },
    ],
  },
  // Twitter / X Card
  twitter: {
    card: "summary_large_image",
    title: "Shema Cleaning Services | Manchester Cleaning Agency",
    description:
      "Professional commercial & residential cleaning services across Manchester. Eco-friendly products, background-checked staff, 100% satisfaction guaranteed.",
    images: ["https://shemacleaning.com/assets/og-hero.jpg"],
  },
  // Geo tags for local SEO
  other: {
    "geo.region": "GB-MAN",
    "geo.placename": "Manchester",
    "geo.position": "53.4808;-2.2426",
    ICBM: "53.4808, -2.2426",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // ✅ Fixed schema: unified URL to shemacleaning.com, corrected Manchester geo coords,
  //    added priceRange, added ServiceType array, added areaServed
  const schemaJson = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://shemacleaning.com/#business",
    "name": "Shema Cleaning Services",
    "image": "https://shemacleaning.com/assets/og-hero.jpg",
    "logo": "https://shemacleaning.com/assets/logo.png",
    "url": "https://shemacleaning.com",
    "telephone": "+447346459922",
    "email": "info@shemacleaning.com",
    "priceRange": "££",
    "description":
      "Professional commercial, office, post-construction, and luxury residential cleaning services in Manchester, UK. Eco-friendly products, background-checked staff.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Manchester",
      "addressRegion": "Greater Manchester",
      "addressCountry": "GB",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 53.4808,
      "longitude": -2.2426,
    },
    "areaServed": [
      { "@type": "City", "name": "Manchester" },
      { "@type": "City", "name": "Salford" },
      { "@type": "City", "name": "Stockport" },
      { "@type": "AdministrativeArea", "name": "Greater Manchester" },
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Cleaning Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial Office Cleaning",
            "description": "Professional sanitization and maintenance for corporate offices and business premises.",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Luxury Residential Cleaning",
            "description": "Premium deep cleaning and ongoing maintenance for high-end homes and luxury residences.",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Post-Construction Cleaning",
            "description": "Thorough post-build cleaning and handover preparation for newly completed properties.",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Corporate Workplace Sanitization",
            "description": "Scheduled corporate sanitization programs designed to maintain safe, healthy workplace environments.",
          },
        },
      ],
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday",
      ],
      "opens": "05:00",
      "closes": "23:59",
    },
    "sameAs": [
      "https://wa.me/447346459922",
    ],
  };

  // FAQ Schema — matches the FAQ component content, boosts rich results
  const faqSchemaJson = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What areas and locations does Shema Cleaning Agency service?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We provide comprehensive commercial, office, and luxury residential cleaning services across the entire metropolitan area and surrounding corporate business corridors. For major commercial or post-construction contracts, we are equipped to deploy teams to regional locations outside our standard boundary.",
        },
      },
      {
        "@type": "Question",
        "name": "Do you supply your own cleaning equipment and products?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our elite teams arrive fully equipped with advanced commercial-grade tools, including HEPA-filter vacuums and micro-fiber technologies. We utilise premium, non-toxic eco-friendly sanitisation solutions that protect your staff, family, and delicate surface assets.",
        },
      },
      {
        "@type": "Question",
        "name": "Can we schedule cleanings outside of standard business hours?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. We specialise in non-disruptive operations. Most corporate office and commercial cleaning contracts are scheduled overnight, early morning, or during weekends to ensure zero interference with your team's workflow.",
        },
      },
      {
        "@type": "Question",
        "name": "Are your cleaning specialists background-checked and insured?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, without exception. Every team member undergoes strict background screening, thorough safety vetting, and comprehensive training. Shema Cleaning Agency is fully bonded and insured.",
        },
      },
    ],
  };

  return (
    <html lang="en-GB" className={`${sora.variable} dark bg-obsidian antialiased overflow-x-hidden`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaJson) }}
        />
        {/* Preconnect to external image/font origins for performance */}
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>
      <body>
        <SmoothScrollProvider>
          <Header />
          {children}
        </SmoothScrollProvider>
         <SonnerProvider />
      </body>
    </html>
  );
}