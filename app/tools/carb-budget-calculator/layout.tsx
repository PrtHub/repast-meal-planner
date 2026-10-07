import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Keto Carb Ceiling & Macro Budget Calculator",
  description:
    "Calculate your personal daily net carb ceiling, protein floor (1.4–2.2 g/kg), and fat budget using the Mifflin–St Jeor formula across Keto, Low-Carb, High-Protein, Paleo, and Mediterranean diets. Free, no account required.",
  alternates: {
    canonical: "/tools/carb-budget-calculator",
  },
  openGraph: {
    title: "Free Keto Carb Ceiling & Macro Budget Calculator — Repast",
    description:
      "Calculate your BMR, protein floor, and exact net carb ceiling across 5 diet types. Free interactive planning tool.",
    url: "https://getrepast.app/tools/carb-budget-calculator",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Keto Carb Ceiling & Macro Budget Calculator",
    description:
      "Calculate your BMR, protein floor, and exact net carb ceiling across 5 diet types. Free interactive planning tool.",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://getrepast.app" },
    { "@type": "ListItem", position: 2, name: "Tools", item: "https://getrepast.app/tools" },
    { "@type": "ListItem", position: 3, name: "Carb Ceiling Calculator", item: "https://getrepast.app/tools/carb-budget-calculator" },
  ],
};

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Calculate Your Keto Carb Ceiling and Macro Budget",
  description:
    "Use the Mifflin–St Jeor formula with your biometrics to find your daily net carb ceiling, protein floor, and fat budget for keto or low-carb diets.",
  step: [
    { "@type": "HowToStep", name: "Enter your biometrics", text: "Input your weight (kg or lbs), height (cm or in), age, and biological sex." },
    { "@type": "HowToStep", name: "Select activity level", text: "Choose from Sedentary, Lightly Active, Active, or Very Active based on weekly exercise." },
    { "@type": "HowToStep", name: "Choose your diet type", text: "Select Keto (20 g), Low-Carb (75 g), High-Protein, Paleo, or Mediterranean." },
    { "@type": "HowToStep", name: "Set your goal", text: "Pick Fat Loss (−20%), Maintenance, or Lean Gain (+10%) to adjust target calories." },
    { "@type": "HowToStep", name: "Read your personalized budget", text: "View your daily BMR, TDEE, target calories, net carb ceiling, protein floor, and fat budget." },
  ],
};

export default function CarbBudgetCalculatorLayout({
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
