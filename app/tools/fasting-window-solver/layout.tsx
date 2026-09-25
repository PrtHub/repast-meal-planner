import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Intermittent Fasting & Macro Window Solver",
  description:
    "Calculate your optimal 16:8, 18:6, 20:4, or OMAD fasting window with 40/60 asymmetric macro distribution. Visual circadian timeline, protein-per-meal targets, and zero-insulin fluid rules. Free.",
  alternates: {
    canonical: "/tools/fasting-window-solver",
  },
  openGraph: {
    title: "Free Intermittent Fasting & Macro Window Solver — Repast",
    description:
      "Calculate your fasting window, asymmetric 40/60 meal distribution, and circadian timeline for 16:8, 18:6, 20:4, or OMAD.",
    url: "https://repast.app/tools/fasting-window-solver",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Intermittent Fasting & Macro Window Solver",
    description:
      "Calculate your fasting window, asymmetric 40/60 meal distribution, and circadian timeline for 16:8, 18:6, 20:4, or OMAD.",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://repast.app" },
    { "@type": "ListItem", position: 2, name: "Tools", item: "https://repast.app/tools" },
    { "@type": "ListItem", position: 3, name: "Fasting Window Solver", item: "https://repast.app/tools/fasting-window-solver" },
  ],
};

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Calculate Your Intermittent Fasting Meal Window",
  description:
    "Choose your fasting protocol, set your first meal time, and get an optimized 40/60 macro distribution across your eating window.",
  step: [
    { "@type": "HowToStep", name: "Choose fasting protocol", text: "Select 16:8 (Standard), 18:6 (Compressed), 20:4 (Warrior), or 23:1 (OMAD)." },
    { "@type": "HowToStep", name: "Set first meal time", text: "Pick when you break your fast (e.g., 11:30 AM, 12:00 PM, 1:00 PM)." },
    { "@type": "HowToStep", name: "Enter macro targets", text: "Input your daily target protein (g) and total daily calories (kcal)." },
    { "@type": "HowToStep", name: "Set workout timing", text: "Choose Fasted Morning, Midday, or Post-Dinner for your training window." },
    { "@type": "HowToStep", name: "View your timeline", text: "Read the circadian visual timeline with 40/60 asymmetric macro allocation and fasting window fluid rules." },
  ],
};

export default function FastingWindowSolverLayout({
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
