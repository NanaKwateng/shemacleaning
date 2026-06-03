// app/services/page.tsx
// ⚠️  CHANGES: Page-level metadata + aria-label on main element only.
//    ServicesPage component (the visual grid) is unchanged.

import { Metadata } from "next";
import ServicesPage from "@/components/layout/ServicesPage";

export const metadata: Metadata = {
  title: "Cleaning Services | Commercial, Office & Residential | Shema Manchester",
  description:
    "Explore Shema Cleaning Services' full range: luxury estate preservation, corporate office cleaning, and post-construction deep cleans across Manchester, UK. Eco-friendly, fully insured teams.",
  keywords: [
    "commercial cleaning services Manchester",
    "office cleaning services Manchester",
    "post-construction cleaning UK",
    "luxury home cleaning Manchester",
    "deep cleaning services Manchester",
    "professional cleaning company Manchester",
  ],
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Cleaning Services | Shema Cleaning Manchester",
    description:
      "Professional estate preservation, corporate curation, and post-construction handover cleaning in Manchester.",
    url: "https://shemacleaning.com/services",
  },
};

export default function ServicesRoutePage() {
  return (
    <main aria-label="Shema Cleaning Services — service catalogue">
      <ServicesPage />
    </main>
  );
}