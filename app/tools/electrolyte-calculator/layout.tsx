import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Keto Electrolyte & Mineral Replenishment Calculator",
  description:
    "Calculate your exact daily Sodium (4,500–7,000 mg), Potassium (2,500–3,500 mg), and Magnesium (350–450 mg) targets adjusted for your carb ceiling, body weight, climate, and workout intensity. Kitchen translations included. Free.",
  alternates: {
    canonical: "/tools/electrolyte-calculator",
  },
  openGraph: {
    title: "Free Keto Electrolyte & Mineral Replenishment Calculator — Repast",
    description:
      "Calculate exact elemental milligrams of Sodium, Potassium, and Magnesium for your keto diet with whole-food kitchen translations.",
    url: "https://getrepast.app/tools/electrolyte-calculator",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Keto Electrolyte & Mineral Replenishment Calculator",
    description:
      "Calculate exact elemental milligrams of Sodium, Potassium, and Magnesium for your keto diet with whole-food kitchen translations.",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://getrepast.app" },
    { "@type": "ListItem", position: 2, name: "Tools", item: "https://getrepast.app/tools" },
    { "@type": "ListItem", position: 3, name: "Electrolyte Calculator", item: "https://getrepast.app/tools/electrolyte-calculator" },
  ],
};

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Calculate Your Keto Electrolyte Requirements",
  description:
    "Find your daily Sodium, Potassium, and Magnesium targets based on carb intake, body weight, climate exposure, and workout duration.",
  step: [
    { "@type": "HowToStep", name: "Set your carb level", text: "Slide to your daily net carbs: 0 g Carnivore, 15 g Strict Keto, 30 g Moderate Keto, or 75 g Low-Carb." },
    { "@type": "HowToStep", name: "Enter body weight", text: "Input your weight in kilograms or pounds and toggle climate/heat exposure." },
    { "@type": "HowToStep", name: "Set workout duration", text: "Adjust the sweat duration slider from 0 to 90+ minutes." },
    { "@type": "HowToStep", name: "Check symptoms", text: "Mark any current symptoms: headaches, muscle cramps, restless legs, or fatigue." },
    { "@type": "HowToStep", name: "Read your targets", text: "View elemental milligram targets for Sodium, Potassium, and Magnesium with kitchen translations (tsp salt, bone broth oz, whole foods)." },
  ],
};

export default function ElectrolyteCalculatorLayout({
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
