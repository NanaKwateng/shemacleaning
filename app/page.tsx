// app/page.tsx
// ⚠️  CHANGES: Semantic HTML + aria-label attributes only.
//    No layout, animation, content, or component changes.

import { Metadata } from "next";
import LandingPage from "@/components/layout/LandingPage";
import ServiceOverview from "@/components/bits/ServiceOverview";
import CompareGroup from "@/components/bits/CompareGroup";
import Process from "@/components/bits/Process";
import CounterBits from "@/components/bits/CounterBit";
import Testimonials from "@/components/layout/Testimonials";
import FAQ from "@/components/bits/FAQ";
import CTA from "@/components/layout/CTA";
import Footer from "@/components/layout/Footer";
import AboutGrid from "@/components/layout/AboutGrid";

export const metadata: Metadata = {
  title: "Professional Cleaning Services Manchester | Shema Cleaning Agency",
  description:
    "Shema Cleaning Services — Manchester's premier commercial cleaning, office sanitization, post-construction deep cleans, and luxury residential maintenance. Eco-friendly, fully insured, available 7 days a week.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <main
      id="main-content"
      className="w-full relative z-10 bg-obsidian selection:bg-white selection:text-black"
      aria-label="Shema Cleaning Services homepage"
    >
      {/* Skip-to-content link for screen readers / keyboard users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:font-mono focus:text-xs focus:rounded"
      >
        Skip to main content
      </a>

      {/* SECTION 1: HERO */}
      <section aria-label="Hero — Clean Spaces, Happy Environments">
        <LandingPage />
      </section>

      {/* SECTION 2: ABOUT */}
      <section aria-label="About Shema Cleaning Services">
        <AboutGrid />
      </section>

      {/* SECTION 3: BEFORE / AFTER COMPARE */}
      <section aria-label="Before and after cleaning comparison">
        <CompareGroup />
      </section>

      {/* SECTION 4: SERVICE OVERVIEW */}
      <section aria-label="Cleaning services we offer">
        <ServiceOverview />
      </section>

      {/* SECTION 5: PROCESS STEPS */}
      <section aria-label="Our cleaning process">
        <Process />
      </section>

      {/* SECTION 6: STATISTICS */}
      <section aria-label="Performance statistics and achievements">
        <CounterBits />
      </section>

      {/* SECTION 7: TESTIMONIALS */}
      <section aria-label="Client testimonials">
        <Testimonials />
      </section>

      {/* SECTION 8: FAQ */}
      <section aria-label="Frequently asked questions">
        <FAQ />
      </section>

      {/* SECTION 9: CALL TO ACTION */}
      <section aria-label="Book a cleaning consultation">
        <CTA />
      </section>

      {/* SECTION 10: FOOTER */}
      <Footer />
    </main>
  );
}