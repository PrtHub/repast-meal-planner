import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AppleIcon from "@/components/AppleIcon";
import { guides } from "@/lib/guides";

export const metadata: Metadata = {
  title: "Keto & Low-Carb Planning Guides",
  description:
    "Definitive reference guides on net carbs vs total carbs, protein floors, renal electrolyte targets, grocery logistics, allergen constraints, and culinary science.",
  alternates: {
    canonical: "/guides",
  },
  openGraph: {
    title: "Keto & Low-Carb Planning Guides — Repast",
    description:
      "Definitive reference guides on macro mathematics, electrolyte targets, grocery logistics, and constraint-based planning.",
    url: "https://getrepast.app/guides",
  },
};

export default function GuidesIndexPage() {
  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Keto & Low-Carb Planning Guides — Repast",
    description:
      "Definitive reference guides on net carbs vs total carbs, protein floors, renal electrolyte targets, grocery logistics, allergen constraints, and culinary science.",
    url: "https://getrepast.app/guides",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: guides.length,
      itemListElement: guides.map((guide, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        url: `https://getrepast.app/guides/${guide.slug}`,
        name: guide.title,
      })),
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://getrepast.app" },
      { "@type": "ListItem", position: 2, name: "Guides", item: "https://getrepast.app/guides" },
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

      <main className="max-w-5xl mx-auto px-6 py-16 sm:py-20">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[12px] text-[#6e655c] mb-6">
          <Link href="/" className="hover:text-[#221d19]">Home</Link>
          <span>/</span>
          <span className="text-[#221d19] font-medium">Guides</span>
        </nav>

        <div className="max-w-2xl mb-14">
          <span className="text-[11px] font-bold uppercase tracking-[1.4px] text-[#c05621] block mb-2">
            REFERENCE GUIDES
          </span>
          <h1 className="text-[44px] sm:text-[56px] font-serif-display font-normal tracking-[-1px] leading-[1.05] text-[#221d19] mb-4">
            Keto & Low-Carb Planning Guides
          </h1>
          <p className="text-[16px] sm:text-[17px] leading-[26px] text-[#6e655c]">
            Definitive technical reference manuals covering macro mathematics, renal electrolyte targets,
            7-aisle grocery logistics, allergen exclusions, and weeknight kitchen workflow engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {guides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className="group p-7 sm:p-8 rounded-[24px] bg-white border border-[#e6dfd5] shadow-sm hover:shadow-md hover:border-[#c05621]/40 transition-all flex flex-col justify-between block"
            >
              <div>
                <div className="flex items-center gap-3 text-[12px] text-[#6e655c] mb-3">
                  <span className="font-semibold text-[#c05621] uppercase tracking-[1.2px]">
                    {guide.category}
                  </span>
                  <span>·</span>
                  <span>{guide.readingTime}</span>
                </div>

                <h2 className="text-[22px] sm:text-[24px] font-serif-display font-normal text-[#221d19] mb-3 leading-snug group-hover:text-[#c05621] transition-colors">
                  {guide.title}
                </h2>

                <p className="text-[14px] sm:text-[15px] leading-[23px] text-[#6e655c] mb-6">
                  {guide.description}
                </p>
              </div>

              <div className="pt-2">
                <span className="text-[13px] font-bold text-[#c05621] group-hover:text-[#98421a] transition-colors inline-flex items-center gap-1.5">
                  Read complete guide →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom App Bridge */}
        <div className="p-8 rounded-[24px] bg-[#f0ebe2] border border-[#e6dfd5] text-center">
          <h3 className="text-[22px] font-serif-display font-normal text-[#221d19] mb-2">
            Prefer the math done for you?
          </h3>
          <p className="text-[14px] text-[#6e655c] max-w-lg mx-auto mb-5">
            Repast incorporates all these principles into an automated constraint solver on your
            iPhone. Zero manual arithmetic, zero accounts.
          </p>
          <a
            href="https://apps.apple.com/app/id6807802664"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full btn-primary text-[13px]"
          >
            <AppleIcon className="w-4 h-4 fill-current shrink-0" />
            <span>Get Repast for iPhone</span>
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
