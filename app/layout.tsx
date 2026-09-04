import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://repast.app";
const title = "Repast — a week of keto, decided";
const description =
  "Repast builds a week of keto meals and one shopping list from your own numbers, and won't hand you a day that breaks your carb ceiling. No account, nothing leaves your phone. iPhone.";

export const metadata: Metadata = {
  title: {
    default: title,
    template: "%s — Repast",
  },
  description,
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  keywords: [
    "keto meal planner",
    "low carb meal planner",
    "carb ceiling",
    "keto shopping list",
    "keto recipes",
    "on-device meal planner",
    "iOS keto app",
    "hard carb limit",
  ],
  authors: [{ name: "Repast", url: siteUrl }],
  creator: "Repast",
  publisher: "Repast",
  applicationName: "Repast",
  category: "Health & Fitness",
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
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Repast",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Repast — A week of keto, decided",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/twitter-image"],
  },
  appleWebApp: {
    capable: true,
    title: "Repast",
    statusBarStyle: "default",
  },
  other: {
    "apple-itunes-app": "app-id=YOUR_APP_ID, app-argument=repast://",
  },
};

export const viewport: Viewport = {
  themeColor: "#f7f4ee",
  width: "device-width",
  initialScale: 1,
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      "url": siteUrl,
      "name": "Repast",
      "description": description,
      "publisher": {
        "@type": "Organization",
        "name": "Repast",
        "url": siteUrl,
      },
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${siteUrl}/#software`,
      "name": "Repast",
      "operatingSystem": "iOS 16.0 or later",
      "applicationCategory": "HealthApplication",
      "applicationSubCategory": "Diet & Nutrition",
      "description": description,
      "softwareVersion": "1.0.0",
      "featureList": [
        "Hard daily carb ceiling constraint solver (0g overage)",
        "100% on-device local storage with zero network telemetry",
        "USDA FoodData Central verified ingredient nutrition",
        "Leftover-aware aisle-grouped grocery shopping list",
        "Adaptive maintenance calorie calibration from meal ticks and weight trend",
        "Honest constraint refusal diagnostics",
      ],
      "offers": [
        {
          "@type": "Offer",
          "price": "49.99",
          "priceCurrency": "USD",
          "name": "Yearly Subscription (3-day free trial)",
          "priceValidUntil": "2027-12-31",
          "availability": "https://schema.org/InStock",
        },
        {
          "@type": "Offer",
          "price": "12.99",
          "priceCurrency": "USD",
          "name": "Monthly Subscription",
          "priceValidUntil": "2027-12-31",
          "availability": "https://schema.org/InStock",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq`,
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How is Repast different from other keto meal planners?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Repast treats your carb cap as a strict mathematical constraint rather than a warning after the fact. Across 16,933 simulated days the carb overage is 0g. Furthermore, all data remains strictly on your iPhone with no account, server, or analytics.",
          },
        },
        {
          "@type": "Question",
          "name": "What happens if my dietary constraints cannot be met?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Repast refuses rather than fudges. If your constraints cannot be satisfied (such as 15-minute meals, pescatarian, and no eggs), the app names the exact bottleneck rule and calculates how much loosening it unlocks instead of quietly breaking your rules.",
          },
        },
        {
          "@type": "Question",
          "name": "Does Repast require an account or internet connection?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Repast operates entirely on your device. There is no account sign-up, no backend server, and no analytics tracking. Your weight, meals, and measurements stay on your iPhone.",
          },
        },
        {
          "@type": "Question",
          "name": "How does the shopping list handle leftovers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The shopping list counts whole cooks rather than individual sittings. Cooking a four-serving recipe eaten twice is counted as one cook session, cutting redundant grocery purchasing.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full bg-[#f7f4ee]">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#f7f4ee] text-[#221d19] selection:bg-[#f0e4d8] selection:text-[#98421a]">
        {children}
      </body>
    </html>
  );
}
