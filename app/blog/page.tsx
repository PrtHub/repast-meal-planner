import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { articles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Blog & Essays — Repast",
  description:
    "Essays and technical analysis on dietary constraint solvers, why food logging fails, and the mathematics of meal planning.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog & Essays — Repast",
    description:
      "Essays on dietary constraint solvers, why food logging fails, and the mathematics of meal planning.",
    url: "https://repast.app/blog",
  },
};

export default function BlogIndexPage() {
  return (
    <div className="min-h-screen bg-[#f7f4ee] text-[#221d19]">
      <Navbar />

      <main className="max-w-5xl mx-auto px-6 py-16 sm:py-20">
        <div className="max-w-2xl mb-14">
          <span className="text-[11px] font-bold uppercase tracking-[1.4px] text-[#c05621] block mb-2">
            ESSAYS & INSIGHTS
          </span>
          <h1 className="text-[44px] sm:text-[56px] font-serif-display font-normal tracking-[-1px] leading-[1.05] text-[#221d19] mb-4">
            Repast Engineering & Philosophy
          </h1>
          <p className="text-[16px] sm:text-[17px] leading-[26px] text-[#6e655c]">
            Why we built an on-device constraint solver, why we refuse impossible profiles, and why
            traditional food diaries fail dieters.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group p-7 sm:p-8 rounded-[24px] bg-white border border-[#e6dfd5] shadow-sm hover:shadow-md hover:border-[#c05621]/40 transition-all flex flex-col justify-between block"
            >
              <div>
                <div className="flex items-center gap-3 text-[12px] text-[#6e655c] mb-3">
                  <span className="font-semibold text-[#c05621] uppercase tracking-[1.2px]">
                    {article.category}
                  </span>
                  <span>·</span>
                  <span>{article.readingTime}</span>
                  <span>·</span>
                  <span>{article.publishedDate}</span>
                </div>

                <h2 className="text-[22px] sm:text-[24px] font-serif-display font-normal text-[#221d19] mb-3 leading-snug group-hover:text-[#c05621] transition-colors">
                  {article.title}
                </h2>

                <p className="text-[14px] sm:text-[15px] leading-[23px] text-[#6e655c] mb-6">
                  {article.excerpt}
                </p>
              </div>

              <div className="pt-2">
                <span className="text-[13px] font-bold text-[#c05621] group-hover:text-[#98421a] transition-colors inline-flex items-center gap-1.5">
                  Read essay →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="p-8 rounded-[24px] bg-[#221d19] text-[#fff8ee] text-center">
          <span className="text-[10px] font-bold uppercase tracking-[1.4px] text-[#c05621] block mb-2">
            THE REPAST ENGINE
          </span>
          <h3 className="text-[24px] sm:text-[30px] font-serif-display font-normal mb-3">
            Stop deciding what to cook every day.
          </h3>
          <p className="text-[14px] text-[#c5bcb0] max-w-md mx-auto mb-6">
            Get your week decided under your carb ceiling in two minutes. On-device only.
          </p>
          <a
            href="https://apps.apple.com/app/id6470000000"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full btn-primary text-[14px]"
          >
            Download Repast for iPhone
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
