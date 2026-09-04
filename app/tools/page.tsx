import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AppleIcon from "@/components/AppleIcon";

export const metadata: Metadata = {
  title: "Interactive Planning Tools",
  description:
    "Free interactive planning utilities from Repast: Calculate your net carb ceiling, test diet constraint feasibility, and estimate cook-session grocery savings.",
  alternates: {
    canonical: "/tools",
  },
  openGraph: {
    title: "Interactive Planning Tools — Repast",
    description:
      "Calculate your net carb ceiling, test dietary feasibility, and estimate cook-session grocery savings.",
    url: "https://repast.app/tools",
  },
};

const tools = [
  {
    slug: "carb-budget-calculator",
    title: "Carb Ceiling & Macro Budget Calculator",
    description:
      "Calculate your Mifflin–St Jeor BMR, protein floor (1.4–2.2g/kg), and exact net carb limit across 5 diets (Keto 20g, Low-Carb 75g, High-Protein, Paleo, Mediterranean).",
    badge: "Interactive Calculator",
    linkText: "Calculate your ceiling →",
  },
  {
    slug: "feasibility-checker",
    title: "Constraint Feasibility Checker",
    description:
      "Test whether your weeknight prep time, diet type, and ingredient exclusions create an impossible mathematical clash or a fully servable 7-day plan.",
    badge: "Diagnostic Tool",
    linkText: "Check your constraints →",
  },
  {
    slug: "leftover-calculator",
    title: "Leftover & Cook Session Savings Calculator",
    description:
      "See how counting whole cooks instead of individual sittings cuts benchmark grocery basket weight and eliminates refrigerator food waste.",
    badge: "Savings Model",
    linkText: "Estimate grocery savings →",
  },
];

export default function ToolsIndexPage() {
  return (
    <div className="min-h-screen bg-[#f7f4ee] text-[#221d19]">
      <Navbar />

      <main className="max-w-5xl mx-auto px-6 py-16 sm:py-20">
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f0e4d8] text-[#98421a] text-[11px] font-bold uppercase tracking-[1.4px] mb-4">
            <span>PLANNING UTILITIES</span>
          </div>
          <h1 className="text-[44px] sm:text-[56px] font-serif-display font-normal tracking-[-1px] leading-[1.05] text-[#221d19] mb-4">
            Interactive Planning Tools
          </h1>
          <p className="text-[16px] sm:text-[17px] leading-[26px] text-[#6e655c]">
            Test your numbers, verify constraint feasibility, and see how our mathematical solver
            simplifies weeknight keto cooking.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {tools.map((tool) => (
            <Link
              key={tool.slug}
              href={`/tools/${tool.slug}`}
              className="group p-7 sm:p-8 rounded-[24px] bg-white border border-[#e6dfd5] shadow-sm flex flex-col justify-between hover:shadow-md hover:border-[#c05621]/40 transition-all block"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[1.4px] text-[#c05621] block mb-3">
                  {tool.badge}
                </span>
                <h2 className="text-[22px] sm:text-[24px] font-serif-display font-normal text-[#221d19] mb-3 leading-snug group-hover:text-[#c05621] transition-colors">
                  {tool.title}
                </h2>
                <p className="text-[14px] sm:text-[15px] leading-[23px] text-[#6e655c] mb-6">
                  {tool.description}
                </p>
              </div>

              <div className="pt-2">
                <span className="text-[13px] font-bold text-[#c05621] group-hover:text-[#98421a] transition-colors inline-flex items-center gap-1.5">
                  {tool.linkText}
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Bridge banner */}
        <div className="p-8 sm:p-10 rounded-[24px] bg-[#221d19] text-[#fff8ee] text-center max-w-3xl mx-auto">
          <span className="text-[10px] font-bold uppercase tracking-[1.4px] text-[#c05621] block mb-2">
            ON-DEVICE AUTOMATION
          </span>
          <h2 className="text-[28px] sm:text-[36px] font-serif-display font-normal mb-3">
            Your entire week, decided in two minutes.
          </h2>
          <p className="text-[15px] text-[#c5bcb0] max-w-xl mx-auto mb-6">
            Repast connects your biometrics, carb ceilings, leftover chains, and aisle-grouped
            groceries into a unified plan on your iPhone.
          </p>
          <a
            href="https://apps.apple.com/app/id6470000000"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full btn-primary text-[14px]"
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
