import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AppleIcon from "@/components/AppleIcon";
import { useCases } from "@/lib/useCases";

export const metadata: Metadata = {
  title: "Who Repast Is For — Keto & Low-Carb Personas & Use Cases",
  description:
    "Explore how Repast's on-device constraint solver solves meal planning for busy professionals, GLP-1 patients, athletes, mixed-diet couples, and metabolic health.",
  alternates: {
    canonical: "/for",
  },
  openGraph: {
    title: "Who Repast Is For — Use Cases & Personas",
    description:
      "Explore how Repast solves meal planning for busy professionals, GLP-1 patients, athletes, mixed-diet couples, and metabolic health.",
    url: "https://getrepast.app/for",
  },
};

export default function ForIndexPage() {
  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Who Repast Is For — Keto & Low-Carb Personas & Use Cases",
    description:
      "Explore how Repast's on-device constraint solver solves meal planning for busy professionals, GLP-1 patients, athletes, mixed-diet couples, and metabolic health.",
    url: "https://getrepast.app/for",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: useCases.length,
      itemListElement: useCases.map((uc, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        url: `https://getrepast.app/for/${uc.slug}`,
        name: uc.title,
      })),
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://getrepast.app" },
      { "@type": "ListItem", position: 2, name: "Who It's For", item: "https://getrepast.app/for" },
    ],
  };

  return (
    <div className="min-h-screen bg-[#f7f4ee] text-[#221d19]">
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <main className="max-w-6xl mx-auto px-6 py-16 sm:py-20">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[12px] text-[#6e655c] mb-6">
          <Link href="/" className="hover:text-[#221d19]">Home</Link>
          <span>/</span>
          <span className="text-[#221d19] font-medium">Who It&apos;s For</span>
        </nav>

        {/* Header Section */}
        <div className="max-w-3xl mb-16">
          <span className="text-[11px] font-bold uppercase tracking-[1.4px] text-[#c05621] block mb-2">
            WHO IT&apos;S FOR
          </span>
          <h1 className="text-[44px] sm:text-[56px] font-serif-display font-normal tracking-[-1px] leading-[1.05] text-[#221d19] mb-4">
            Nutrition Engineered for Your Exact Life Constraints
          </h1>
          <p className="text-[16px] sm:text-[18px] leading-[28px] text-[#6e655c]">
            One generic diet formula cannot fit a night-shift nurse, an Ironman triathlete, a GLP-1 patient protecting muscle, and a busy parent cooking for a non-keto spouse. Repast solves your week around your real-world parameters.
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mb-18">
          {useCases.map((uc) => (
            <Link
              key={uc.slug}
              href={`/for/${uc.slug}`}
              className="group p-7 sm:p-8 rounded-[26px] bg-white border border-[#e6dfd5] shadow-xs hover:shadow-md hover:border-[#c05621]/40 transition-all flex flex-col justify-between block"
            >
              <div>
                {/* Meta Badge Bar */}
                <div className="flex items-center justify-between gap-3 text-[12px] text-[#6e655c] mb-3.5">
                  <span className="font-semibold text-[#c05621] uppercase tracking-[1.2px] text-[11px]">
                    {uc.category}
                  </span>
                  <span className="text-[11px] font-medium bg-[#f3eee5] text-[#6e655c] px-2.5 py-0.5 rounded-full">
                    {uc.readingTime}
                  </span>
                </div>

                {/* Target Persona Tagline */}
                <p className="text-[12px] font-medium text-[#8a7f72] uppercase tracking-[0.8px] mb-2">
                  For: {uc.targetAudience}
                </p>

                {/* Title */}
                <h2 className="text-[22px] sm:text-[25px] font-serif-display font-normal text-[#221d19] mb-3 leading-snug group-hover:text-[#c05621] transition-colors">
                  {uc.title}
                </h2>

                {/* Subtitle / Excerpt */}
                <p className="text-[14px] sm:text-[15px] leading-[23px] text-[#6e655c] mb-6">
                  {uc.subtitle}
                </p>

                {/* Hero Metrics Preview */}
                <div className="grid grid-cols-3 gap-2 p-3.5 rounded-[16px] bg-[#f9f7f2] border border-[#ece4d9] mb-6">
                  {uc.heroMetrics.map((metric, mIdx) => (
                    <div key={mIdx} className="text-center">
                      <div className="text-[13px] sm:text-[14px] font-bold text-[#221d19] font-serif-display">
                        {metric.value}
                      </div>
                      <div className="text-[10px] text-[#8a7f72] leading-tight mt-0.5">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="pt-2 border-t border-[#f0eae0] flex items-center justify-between">
                <span className="text-[13px] font-bold text-[#c05621] group-hover:text-[#98421a] transition-colors inline-flex items-center gap-1.5">
                  View persona blueprint →
                </span>
                <span className="text-[11px] text-[#8a7f72]">
                  {uc.sampleMealPlan.length} verified meals included
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="p-8 sm:p-12 rounded-[28px] bg-[#221d19] text-[#fff8ee] text-center shadow-lg">
          <span className="text-[10px] font-bold uppercase tracking-[1.4px] text-[#c05621] block mb-2">
            ON-DEVICE CONSTRAINT SATISFACTION
          </span>
          <h3 className="text-[28px] sm:text-[36px] font-serif-display font-normal mb-3 leading-tight">
            Stop forcing your life into generic diet apps.
          </h3>
          <p className="text-[15px] text-[#c5bcb0] max-w-lg mx-auto mb-7 leading-relaxed">
            Repast models whole-week diets as a mathematical system tailored to your schedule, family dynamics, and metabolic requirements on your iPhone.
          </p>
          <a
            href="https://apps.apple.com/app/id6470000000"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full btn-primary text-[14px] font-medium"
          >
            <AppleIcon className="w-4 h-4 fill-current shrink-0" />
            <span>Download Repast for iPhone</span>
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
