import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Diet Constraint Feasibility Checker",
  description:
    "Test whether your dietary constraints — prep time, ingredient exclusions, carb ceiling, and protein target — are mathematically achievable before wasting a week on an impossible meal plan. Free.",
  alternates: {
    canonical: "/tools/feasibility-checker",
  },
  openGraph: {
    title: "Free Diet Constraint Feasibility Checker — Repast",
    description:
      "Test whether your weeknight prep time, diet type, and exclusions create an impossible clash or a fully servable 7-day plan.",
    url: "https://repast.app/tools/feasibility-checker",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Diet Constraint Feasibility Checker",
    description:
      "Test whether your weeknight prep time, diet type, and exclusions create an impossible clash or a fully servable 7-day plan.",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://repast.app" },
    { "@type": "ListItem", position: 2, name: "Tools", item: "https://repast.app/tools" },
    { "@type": "ListItem", position: 3, name: "Feasibility Checker", item: "https://repast.app/tools/feasibility-checker" },
  ],
};

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Check If Your Keto Diet Constraints Are Feasible",
  description:
    "Input your dietary constraints to test whether a viable 7-day meal plan is mathematically possible.",
  step: [
    { "@type": "HowToStep", name: "Select your diet type", text: "Choose from Strict Keto, Low-Carb, High-Protein, Paleo, or Mediterranean." },
    { "@type": "HowToStep", name: "Set your prep time budget", text: "Choose your maximum weeknight cooking time: 10, 15, 20, 30, or 45+ minutes." },
    { "@type": "HowToStep", name: "Add ingredient exclusions", text: "Mark any ingredients you need to exclude: dairy, eggs, shellfish, nuts, red meat, pork, soy." },
    { "@type": "HowToStep", name: "Set macro floors", text: "Enter your minimum daily protein target and maximum net carb ceiling." },
    { "@type": "HowToStep", name: "Run the diagnostic", text: "View whether your constraints produce a viable plan or identify the exact bottleneck rule causing infeasibility." },
  ],
};

export default function FeasibilityCheckerLayout({
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
