import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AppleIcon from "@/components/AppleIcon";
import { useCases, getUseCaseBySlug } from "@/lib/useCases";

interface UseCasePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return useCases.map((uc) => ({
    slug: uc.slug,
  }));
}

export async function generateMetadata({ params }: UseCasePageProps): Promise<Metadata> {
  const { slug } = await params;
  const uc = getUseCaseBySlug(slug);

  if (!uc) {
    return {
      title: "Use Case Not Found",
    };
  }

  return {
    title: `${uc.title} — Repast`,
    description: uc.subtitle,
    alternates: {
      canonical: `/for/${uc.slug}`,
    },
    openGraph: {
      title: uc.title,
      description: uc.subtitle,
      url: `https://getrepast.app/for/${uc.slug}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: uc.title,
      description: uc.subtitle,
    },
  };
}

export default async function SingleUseCasePage({ params }: UseCasePageProps) {
  const { slug } = await params;
  const uc = getUseCaseBySlug(slug);

  if (!uc) {
    notFound();
  }

  // Schema.org Article
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: uc.title,
    description: uc.subtitle,
    articleSection: uc.category,
    datePublished: "2026-09-04",
    dateModified: "2026-09-25",
    author: {
      "@type": "Organization",
      name: "Repast",
      url: "https://getrepast.app",
    },
    publisher: {
      "@type": "Organization",
      name: "Repast",
      url: "https://getrepast.app",
    },
  };

  // Schema.org FAQPage for Google Rich Snippets
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: uc.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://getrepast.app" },
      { "@type": "ListItem", position: 2, name: "Who It's For", item: "https://getrepast.app/for" },
      { "@type": "ListItem", position: 3, name: uc.title, item: `https://getrepast.app/for/${uc.slug}` },
    ],
  };

  return (
    <div className="min-h-screen bg-[#f7f4ee] text-[#221d19]">
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 py-14 sm:py-20">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[12px] text-[#6e655c] mb-6">
          <Link href="/" className="hover:text-[#221d19]">Home</Link>
          <span>/</span>
          <Link href="/for" className="hover:text-[#221d19]">Who It&apos;s For</Link>
          <span>/</span>
          <span className="text-[#221d19] font-medium truncate">{uc.title}</span>
        </nav>

        {/* Header */}
        <header className="mb-10">
          <div className="flex flex-wrap items-center gap-2 text-[12px] text-[#6e655c] mb-3">
            <span className="font-bold text-[#c05621] uppercase tracking-[1.4px]">
              {uc.category}
            </span>
            <span>·</span>
            <span>{uc.readingTime}</span>
            <span>·</span>
            <span className="bg-[#ede5d8] text-[#554c43] px-2.5 py-0.5 rounded-full font-medium text-[11px]">
              Target: {uc.targetAudience}
            </span>
          </div>

          <h1 className="text-[34px] sm:text-[46px] font-serif-display font-normal tracking-[-1px] leading-[1.1] text-[#221d19] mb-4">
            {uc.title}
          </h1>

          <p className="text-[17px] sm:text-[18px] leading-[28px] text-[#6e655c]">
            {uc.subtitle}
          </p>
        </header>

        {/* Hero Metrics Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-5 sm:p-6 rounded-[22px] bg-white border border-[#e6dfd5] shadow-xs mb-12">
          {uc.heroMetrics.map((metric, idx) => (
            <div key={idx} className="text-center sm:text-left sm:border-r last:border-r-0 border-[#f0eae0] sm:pr-4">
              <div className="text-[24px] sm:text-[28px] font-bold text-[#221d19] font-serif-display leading-tight">
                {metric.value}
              </div>
              <div className="text-[12px] font-medium text-[#8a7f72] uppercase tracking-[0.6px] mt-1">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />

        {/* Pain Points vs Repast Solution Matrix */}
        <div className="mb-14">
          <h2 className="text-[22px] sm:text-[26px] font-serif-display font-normal text-[#221d19] mb-6">
            The Friction vs. The Constraint Solver
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* The Old Problem */}
            <div className="p-6 rounded-[20px] bg-[#fbf8f3] border border-[#ecdacb]">
              <span className="text-[10px] font-bold uppercase tracking-[1.4px] text-[#b83b3b] block mb-3">
                THE TRADITIONAL FRICTION
              </span>
              <div className="space-y-4">
                {uc.painPoints.map((item, idx) => (
                  <div key={idx}>
                    <h3 className="text-[15px] font-bold text-[#221d19] mb-1">
                      {item.title}
                    </h3>
                    <p className="text-[13px] sm:text-[14px] leading-relaxed text-[#6e655c]">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Repast Solution */}
            <div className="p-6 rounded-[20px] bg-[#f4f7f2] border border-[#d2e0cf]">
              <span className="text-[10px] font-bold uppercase tracking-[1.4px] text-[#2d6a4f] block mb-3">
                HOW REPAST SOLVES IT
              </span>
              <div className="space-y-4">
                {uc.theRepastSolution.map((item, idx) => (
                  <div key={idx}>
                    <h3 className="text-[15px] font-bold text-[#221d19] mb-1">
                      {item.title}
                    </h3>
                    <p className="text-[13px] sm:text-[14px] leading-relaxed text-[#526456]">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Sample Day Meal Matrix */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-[22px] sm:text-[26px] font-serif-display font-normal text-[#221d19]">
              Verified Persona Meal Architecture
            </h2>
            <span className="text-[11px] font-bold uppercase tracking-[1px] text-[#c05621] bg-[#fdf2ea] px-3 py-1 rounded-full">
              USDA-Audited
            </span>
          </div>
          <p className="text-[14px] text-[#6e655c] mb-5">
            A concrete day generated by Repast for this exact metabolic profile, with guaranteed sub-20g net carbs and zero food logging required.
          </p>

          <div className="overflow-hidden rounded-[20px] bg-white border border-[#e6dfd5] shadow-xs divide-y divide-[#f0eae0]">
            {uc.sampleMealPlan.map((meal, mIdx) => (
              <div key={mIdx} className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[1.4px] text-[#c05621] block mb-1">
                    {meal.mealName}
                  </span>
                  <div className="text-[16px] font-medium text-[#221d19]">
                    {meal.dish}
                  </div>
                </div>
                <div className="flex items-center gap-4 text-[13px] shrink-0">
                  <span className="font-mono text-[#554c43] bg-[#f6f2ea] px-3 py-1 rounded-lg">
                    {meal.macros}
                  </span>
                  <span className="text-[#8a7f72] text-[12px]">
                    ⏱ {meal.prepTime}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-8 text-[16px] leading-[27px] text-[#221d19] mb-14">
          {uc.contentSections.map((section, idx) => (
            <section key={idx} className="space-y-3">
              <h2 className="text-[24px] font-serif-display font-normal text-[#221d19] pt-2">
                {section.heading}
              </h2>
              {section.body.map((paragraph, pIdx) => (
                <p key={pIdx} className="text-[#6e655c]">
                  {paragraph}
                </p>
              ))}
              {section.pullquote && (
                <blockquote className="my-5 p-5 rounded-[16px] bg-[#f0ebe2] border-l-4 border-[#c05621] text-[16px] font-serif-display italic text-[#221d19]">
                  &ldquo;{section.pullquote}&rdquo;
                </blockquote>
              )}
            </section>
          ))}
        </div>

        {/* Persona FAQs (FAQPage schema connected) */}
        <div className="mb-14">
          <h2 className="text-[22px] sm:text-[26px] font-serif-display font-normal text-[#221d19] mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {uc.faq.map((faqItem, fIdx) => (
              <div key={fIdx} className="p-6 rounded-[20px] bg-white border border-[#e6dfd5] shadow-xs">
                <h3 className="text-[16px] font-bold text-[#221d19] mb-2">
                  {faqItem.question}
                </h3>
                <p className="text-[14px] leading-relaxed text-[#6e655c]">
                  {faqItem.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Context-Tailored App Bridge CTA */}
        <div className="p-8 sm:p-10 rounded-[28px] bg-[#221d19] text-[#fff8ee] text-center shadow-lg">
          <span className="text-[10px] font-bold uppercase tracking-[1.4px] text-[#c05621] block mb-2">
            {uc.cta.eyebrow}
          </span>
          <h3 className="text-[26px] sm:text-[34px] font-serif-display font-normal mb-3 leading-snug">
            {uc.cta.title}
          </h3>
          <p className="text-[14px] sm:text-[15px] text-[#c5bcb0] max-w-lg mx-auto mb-7 leading-relaxed">
            {uc.cta.description}
          </p>
          <a
            href="https://apps.apple.com/app/id6470000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full btn-primary text-[14px] font-medium"
          >
            <AppleIcon className="w-4 h-4 fill-current shrink-0" />
            <span>{uc.cta.buttonText}</span>
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
