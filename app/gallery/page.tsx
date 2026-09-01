import type { Metadata } from "next";
import { site } from "@/site.config";
import { Section } from "@/components/ui";
import Gallery from "@/components/Gallery";
import { ClosingCta, PageHero } from "@/components/blocks";

export const metadata: Metadata = {
  title: "Gallery: Past Jobs",
  description:
    "Photos of completed Michigan Shower projects: walk-in showers, walk-in tubs, tub-to-shower conversions, roll-in bases and accessible bathroom remodels across Michigan.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Past jobs."
        intro={`Bathrooms we've finished for homeowners around ${site.serviceArea}: walk-in tubs, barrier-free showers, conversions and full remodels. Click any photo to see it larger.`}
      />

      <Section tone="cream">
        <Gallery />
      </Section>

      <ClosingCta
        title="Want something like one of these?"
        body="Send us a photo of your bathroom as it stands today. We'll tell you what's realistic in that footprint and what it would take to get there."
      />
    </>
  );
}
