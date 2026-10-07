import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AppleIcon from "@/components/AppleIcon";
import { guides, getGuideBySlug } from "@/lib/guides";

interface GuidePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return guides.map((guide) => ({
    slug: guide.slug,
  }));
}

export async function generateMetadata({ params }: GuidePageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    return {
      title: "Guide Not Found",
    };
  }

  return {
    title: guide.title,
    description: guide.description,
    alternates: {
      canonical: `/guides/${guide.slug}`,
    },
    openGraph: {
      title: guide.title,
      description: guide.description,
      url: `https://getrepast.app/guides/${guide.slug}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: guide.title,
      description: guide.description,
    },
  };
}

export default async function SingleGuidePage({ params }: GuidePageProps) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": guide.title,
    "description": guide.description,
    "articleSection": guide.category,
    "datePublished": "2026-09-01",
    "dateModified": "2026-09-25",
    "author": {
      "@type": "Organization",
      "name": "Repast",
      "url": "https://getrepast.app",
    },
    "publisher": {
      "@type": "Organization",
      "name": "Repast",
      "url": "https://getrepast.app",
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://getrepast.app" },
      { "@type": "ListItem", "position": 2, "name": "Guides", "item": "https://getrepast.app/guides" },
      { "@type": "ListItem", "position": 3, "name": guide.title, "item": `https://getrepast.app/guides/${guide.slug}` },
    ],
  };

  return (
    <div className="min-h-screen bg-[#f7f4ee] text-[#221d19]">
      <Navbar />

      <main className="max-w-3xl mx-auto px-6 py-14 sm:py-20">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[12px] text-[#6e655c] mb-6">
          <Link href="/" className="hover:text-[#221d19]">Home</Link>
          <span>/</span>
          <Link href="/guides" className="hover:text-[#221d19]">Guides</Link>
          <span>/</span>
          <span className="text-[#221d19] font-medium truncate">{guide.title}</span>
        </nav>

        {/* Header */}
        <header className="mb-10">
          <div className="flex items-center gap-2 text-[12px] text-[#6e655c] mb-3">
            <span className="font-bold text-[#c05621] uppercase tracking-[1.4px]">
              {guide.category}
            </span>
            <span>·</span>
            <span>{guide.readingTime}</span>
            <span>·</span>
            <span>{guide.publishedDate}</span>
          </div>

          <h1 className="text-[38px] sm:text-[50px] font-serif-display font-normal tracking-[-1px] leading-[1.06] text-[#221d19] mb-4">
            {guide.title}
          </h1>

          <p className="text-[17px] sm:text-[18px] leading-[28px] text-[#6e655c]">
            {guide.subtitle}
          </p>
        </header>

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />

        {/* Content */}
        <div className="space-y-8 text-[16px] leading-[26px] text-[#221d19]">
          <p className="text-[17px] leading-[27px] font-medium text-[#221d19] pb-2 border-b border-[#e6dfd5]">
            {guide.content.intro}
          </p>

          {guide.content.sections.map((section, idx) => (
            <section key={idx} className="space-y-3">
              <h2 className="text-[24px] font-serif-display font-normal text-[#221d19] pt-2">
                {section.heading}
              </h2>
              {section.body.map((paragraph, pIdx) => (
                <p key={pIdx} className="text-[#6e655c]">
                  {paragraph}
                </p>
              ))}
              {section.highlight && (
                <div className="my-4 p-4 rounded-[14px] bg-[#f0e4d8] border-l-4 border-[#c05621] text-[14px] font-medium text-[#98421a]">
                  {section.highlight}
                </div>
              )}
            </section>
          ))}

          {/* Key Takeaway Box */}
          <div className="p-6 rounded-[20px] bg-white border border-[#e6dfd5] shadow-sm mt-8">
            <span className="text-[10px] font-bold uppercase tracking-[1.4px] text-[#c05621] block mb-2">
              KEY TAKEAWAY
            </span>
            <p className="text-[15px] font-bold text-[#221d19] leading-snug">
              {guide.content.takeaway}
            </p>
          </div>

          {/* App Bridge Hook - Natural & Contextual per Guide */}
          <div className="p-8 sm:p-10 rounded-[28px] bg-[#221d19] text-[#fff8ee] text-center mt-14 shadow-lg">
            <span className="text-[10px] font-bold uppercase tracking-[1.4px] text-[#c05621] block mb-2">
              {guide.cta?.eyebrow ?? "AUTOMATE YOUR PLANNING"}
            </span>
            <h3 className="text-[26px] sm:text-[34px] font-serif-display font-normal mb-3 leading-snug">
              {guide.cta?.title ?? "Put these principles on autopilot."}
            </h3>
            <p className="text-[14px] sm:text-[15px] text-[#c5bcb0] max-w-lg mx-auto mb-7 leading-relaxed">
              {guide.cta?.description ??
                "Repast solves the carb ceiling, leftover chains, and grocery aisle grouping on your iPhone. No account, no tracking."}
            </p>
            <a
              href={guide.cta?.buttonLink ?? "https://apps.apple.com/app/id6807802664"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full btn-primary text-[14px] font-medium"
            >
              <AppleIcon className="w-4 h-4 fill-current shrink-0" />
              <span>{guide.cta?.buttonText ?? "Download Repast for iPhone"}</span>
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
