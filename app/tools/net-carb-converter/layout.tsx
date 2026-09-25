import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free True Net Carb & Sugar Alcohol Deception Converter",
  description:
    "Compare food label 'net carb' claims against real metabolic impact. Accounts for glycemic absorption of erythritol (0%), allulose (0%), maltitol (50–60%), xylitol (50%), and hidden starches like maltodextrin. Free.",
  alternates: {
    canonical: "/tools/net-carb-converter",
  },
  openGraph: {
    title: "Free True Net Carb & Sugar Alcohol Deception Converter — Repast",
    description:
      "Unmask deceptive keto food packaging. Compare claimed net carbs against true metabolic impact and polyol glycemic absorption.",
    url: "https://repast.app/tools/net-carb-converter",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free True Net Carb & Sugar Alcohol Deception Converter",
    description:
      "Unmask deceptive keto food packaging. Compare claimed net carbs against true metabolic impact and polyol glycemic absorption.",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://repast.app" },
    { "@type": "ListItem", position: 2, name: "Tools", item: "https://repast.app/tools" },
    { "@type": "ListItem", position: 3, name: "Net Carb Converter", item: "https://repast.app/tools/net-carb-converter" },
  ],
};

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Calculate True Net Carbs from a Food Label",
  description:
    "Enter the nutrition label values from any keto-branded product to see the real metabolic net carbs after accounting for sugar alcohol glycemic absorption.",
  step: [
    { "@type": "HowToStep", name: "Enter total carbohydrates", text: "Input the total carbohydrates and dietary fiber grams from the nutrition label." },
    { "@type": "HowToStep", name: "Enter sugar alcohols", text: "Input grams of allulose, erythritol, maltitol, xylitol, or isomalt listed on the label." },
    { "@type": "HowToStep", name: "Enter hidden starches", text: "Input any maltodextrin, tapioca starch, or dextrose grams if listed in ingredients." },
    { "@type": "HowToStep", name: "Compare label vs reality", text: "View the manufacturer's claimed net carbs side-by-side with the true physiological net carbs." },
    { "@type": "HowToStep", name: "Check glycemic impact", text: "Read the glycemic impact meter (Safe, Caution, or Ketosis Disruption) and digestive distress score." },
  ],
};

export default function NetCarbConverterLayout({
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
