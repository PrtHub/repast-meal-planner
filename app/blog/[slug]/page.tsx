import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AppleIcon from "@/components/AppleIcon";
import { articles, getArticleBySlug } from "@/lib/articles";

interface ArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: article.title,
    description: article.excerpt,
    alternates: {
      canonical: `/blog/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: `https://getrepast.app/blog/${article.slug}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
    },
  };
}

export default async function SingleArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const isoDate = new Date(article.publishedDate).toISOString().split("T")[0];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.excerpt,
    "articleSection": article.category,
    "datePublished": isoDate,
    "dateModified": isoDate,
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
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://getrepast.app/blog" },
      { "@type": "ListItem", "position": 3, "name": article.title, "item": `https://getrepast.app/blog/${article.slug}` },
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
          <Link href="/blog" className="hover:text-[#221d19]">Blog</Link>
          <span>/</span>
          <span className="text-[#221d19] font-medium truncate">{article.title}</span>
        </nav>

        {/* Header */}
        <header className="mb-10">
          <div className="flex items-center gap-2 text-[12px] text-[#6e655c] mb-3">
            <span className="font-bold text-[#c05621] uppercase tracking-[1.4px]">
              {article.category}
            </span>
            <span>·</span>
            <span>{article.readingTime}</span>
            <span>·</span>
            <span>{article.publishedDate}</span>
          </div>

          <h1 className="text-[36px] sm:text-[48px] font-serif-display font-normal tracking-[-1px] leading-[1.08] text-[#221d19] mb-4">
            {article.title}
          </h1>

          <p className="text-[17px] leading-[27px] text-[#6e655c]">
            {article.excerpt}
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
            {article.content.intro}
          </p>

          {article.content.sections.map((section, idx) => (
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

          {/* Conclusion */}
          <div className="p-6 rounded-[20px] bg-white border border-[#e6dfd5] shadow-sm mt-8">
            <span className="text-[10px] font-bold uppercase tracking-[1.4px] text-[#c05621] block mb-2">
              THE BOTTOM LINE
            </span>
            <p className="text-[15px] font-bold text-[#221d19] leading-snug">
              {article.content.conclusion}
            </p>
          </div>

          {/* App Bridge Hook - Natural & Contextual per Article */}
          <div className="p-8 sm:p-10 rounded-[28px] bg-[#221d19] text-[#fff8ee] text-center mt-14 shadow-lg">
            <span className="text-[10px] font-bold uppercase tracking-[1.4px] text-[#c05621] block mb-2">
              {article.cta?.eyebrow ?? "ON-DEVICE REPAST APP"}
            </span>
            <h3 className="text-[26px] sm:text-[34px] font-serif-display font-normal mb-3 leading-snug">
              {article.cta?.title ?? "Built on constraints, not autopsies."}
            </h3>
            <p className="text-[14px] sm:text-[15px] text-[#c5bcb0] max-w-lg mx-auto mb-7 leading-relaxed">
              {article.cta?.description ??
                "Experience meal planning that refuses rather than fudges, holds you to a hard carb cap, and stores everything on your iPhone."}
            </p>
            <a
              href={article.cta?.buttonLink ?? "https://apps.apple.com/app/id6470000000"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full btn-primary text-[14px] font-medium"
            >
              <AppleIcon className="w-4 h-4 fill-current shrink-0" />
              <span>{article.cta?.buttonText ?? "Download Repast for iPhone"}</span>
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
