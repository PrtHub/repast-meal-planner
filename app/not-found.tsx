import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Page Not Found",
  description:
    "The page you're looking for doesn't exist or has been moved. Explore Repast's free keto planning tools, guides, and blog.",
};

export default function NotFoundPage() {
  const suggestions = [
    {
      href: "/tools",
      label: "Interactive Planning Tools",
      description: "6 free calculators for carb ceilings, electrolytes, net carbs, fasting windows, and more.",
    },
    {
      href: "/guides",
      label: "Keto & Low-Carb Guides",
      description: "14 reference guides on macro math, electrolyte targets, grocery logistics, and kitchen workflow.",
    },
    {
      href: "/blog",
      label: "Engineering Blog",
      description: "28 essays on constraint solvers, food logging failures, and the mathematics of meal planning.",
    },
    {
      href: "/for",
      label: "Who Repast Is For",
      description: "14 persona blueprints with verified meal plans for busy professionals, athletes, GLP-1 patients, and more.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f7f4ee] text-[#221d19]">
      <Navbar />

      <main className="max-w-3xl mx-auto px-6 py-20 sm:py-28">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-[11px] font-bold uppercase tracking-[1.4px] text-[#c05621] block mb-3">
            PAGE NOT FOUND
          </span>
          <h1 className="text-[48px] sm:text-[64px] font-serif-display font-normal tracking-[-1.5px] leading-[1.02] text-[#221d19] mb-4">
            404
          </h1>
          <p className="text-[17px] sm:text-[18px] leading-[28px] text-[#6e655c] max-w-lg mx-auto">
            The page you&apos;re looking for doesn&apos;t exist or has been moved. Here are some
            places you might find useful.
          </p>
        </div>

        {/* Suggestion Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-14">
          {suggestions.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group p-6 rounded-[20px] bg-white border border-[#e6dfd5] shadow-sm hover:shadow-md hover:border-[#c05621]/40 transition-all"
            >
              <h2 className="text-[18px] font-serif-display font-normal text-[#221d19] mb-2 group-hover:text-[#c05621] transition-colors">
                {item.label}
              </h2>
              <p className="text-[13px] leading-[20px] text-[#6e655c] mb-3">
                {item.description}
              </p>
              <span className="text-[12px] font-bold text-[#c05621] group-hover:text-[#98421a] transition-colors">
                Explore →
              </span>
            </Link>
          ))}
        </div>

        {/* Back Home CTA */}
        <div className="text-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#221d19] text-[#fff8ee] text-[14px] font-semibold hover:bg-black active:scale-[0.98] shadow-sm hover:shadow transition-all"
          >
            ← Back to Repast Home
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
