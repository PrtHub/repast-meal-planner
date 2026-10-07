import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Leftover & Cook Session Savings Calculator",
  description:
    "Calculate how counting whole cook sessions instead of individual servings cuts your grocery bill and eliminates refrigerator food waste on a keto meal plan. Free.",
  alternates: {
    canonical: "/tools/leftover-calculator",
  },
  openGraph: {
    title: "Free Leftover & Cook Session Savings Calculator — Repast",
    description:
      "See how batch cooking and leftover-aware planning cuts grocery spend in half and eliminates food waste.",
    url: "https://getrepast.app/tools/leftover-calculator",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Leftover & Cook Session Savings Calculator",
    description:
      "See how batch cooking and leftover-aware planning cuts grocery spend in half and eliminates food waste.",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://getrepast.app" },
    { "@type": "ListItem", position: 2, name: "Tools", item: "https://getrepast.app/tools" },
    { "@type": "ListItem", position: 3, name: "Leftover Calculator", item: "https://getrepast.app/tools/leftover-calculator" },
  ],
};

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Calculate Cook Session Savings from Leftover Planning",
  description:
    "Enter your weekly meal count, average recipe yield, and grocery spending to see how batch cooking with leftover-aware scheduling reduces costs.",
  step: [
    { "@type": "HowToStep", name: "Enter meals per week", text: "Input how many meals you plan to cook from scratch each week." },
    { "@type": "HowToStep", name: "Set average recipe yield", text: "Choose how many servings your typical recipe produces (2, 3, 4, or 6+)." },
    { "@type": "HowToStep", name: "Enter grocery spend", text: "Input your current average weekly grocery spending." },
    { "@type": "HowToStep", name: "View cook session reduction", text: "See how many unique cook sessions you actually need when leftovers are scheduled into future meals." },
    { "@type": "HowToStep", name: "Read savings projection", text: "View projected grocery savings, waste reduction, and weeknight time savings." },
  ],
};

export default function LeftoverCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
      {children}
    </>
  );
}
