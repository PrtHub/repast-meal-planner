import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AppStoreBadge from "@/components/AppStoreBadge";
import AppIcon from "@/components/AppIcon";

export const metadata: Metadata = {
  title: "About Repast — Etymology, Philosophy & Architecture",
  description:
    "What is Repast? Discover the origin of the word, why we built an on-device constraint solver, and how we replaced post-hoc food logging with deterministic weekly meal planning.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Repast — Etymology, Philosophy & Architecture",
    description:
      "What is Repast? Discover the origin of the word, why we built an on-device constraint solver, and how we replaced food logging with deterministic weekly planning.",
    url: "https://repast.app/about",
    siteName: "Repast",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Repast — Etymology, Philosophy & Architecture",
    description:
      "What is Repast? The meaning of the word, our engineering philosophy, and why food logging after the fact is broken.",
  },
};

export default function AboutPage() {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Repast",
    url: "https://repast.app",
    description:
      "Repast is an on-device meal planning engine for iPhone. It solves your entire week of meals under an unyielding carbohydrate ceiling with zero accounts, zero trackers, and zero guesswork.",
    applicationCategory: "HealthApplication",
    foundingDate: "2026",
    contactPoint: {
      "@type": "ContactPoint",
      email: "support@repast.app",
      contactType: "customer support",
    },
  };

  const aboutPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Repast — Etymology, Philosophy & Architecture",
    url: "https://repast.app/about",
    mainEntity: {
      "@type": "Organization",
      name: "Repast",
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://repast.app" },
      { "@type": "ListItem", position: 2, name: "About", item: "https://repast.app/about" },
    ],
  };

  return (
    <div className="min-h-screen bg-[#f7f4ee] text-[#221d19]">
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <main className="max-w-4xl mx-auto px-6 py-16 sm:py-24">
        {/* Breadcrumb / Category */}
        <div className="mb-4">
          <span className="text-[11px] font-bold uppercase tracking-[1.4px] text-[#c05621]">
            ORIGIN & ARCHITECTURE
          </span>
        </div>

        {/* Title */}
        <h1 className="text-[44px] sm:text-[60px] font-serif-display font-normal tracking-[-1.5px] leading-[1.02] text-[#221d19] mb-6">
          What is Repast?
        </h1>

        <p className="text-[18px] sm:text-[20px] leading-[30px] text-[#6e655c] mb-14 max-w-2xl font-normal">
          Repast is an on-device meal planning engine for iPhone. It solves your entire week of meals
          under an unyielding carbohydrate ceiling in under two minutes, with zero accounts, zero
          trackers, and zero guesswork.
        </p>

        {/* Section 1: The Etymology of the Word */}
        <section className="mb-16">
          <div className="p-8 sm:p-10 rounded-[28px] bg-white border border-[#e6dfd5] shadow-[0_4px_20px_rgba(34,29,25,0.04)] mb-8">
            <div className="flex items-center gap-4 mb-4">
              <AppIcon className="w-12 h-12 rounded-[12px] shadow-sm shrink-0" />
              <div className="flex flex-wrap items-baseline gap-3">
                <span className="text-[28px] sm:text-[34px] font-serif-display font-normal text-[#221d19]">
                  repast
                </span>
                <span className="text-[14px] text-[#8a7f73] font-mono">/rɪˈpɑːst/ · /rɪˈpæst/</span>
                <span className="text-[12px] font-semibold uppercase tracking-[1px] text-[#c05621] px-2.5 py-0.5 rounded-full bg-[#fdf2ea]">
                  noun & archaic verb
                </span>
              </div>
            </div>

            <div className="space-y-4 text-[15px] leading-[26px] text-[#554d45] border-t border-[#f0ebe2] pt-6">
              <div>
                <span className="font-bold text-[#221d19]">1. </span>
                <span>A meal; the food served and eaten at a single sitting.</span>
              </div>
              <div>
                <span className="font-bold text-[#221d19]">2. </span>
                <span>The act or occasion of taking food; deliberate nourishment gathered and shared.</span>
              </div>

              <div className="p-5 rounded-[18px] bg-[#fbf9f5] border border-[#eee8df] mt-4">
                <span className="text-[11px] font-bold uppercase tracking-[1.2px] text-[#8a7f73] block mb-2">
                  ETYMOLOGY & HISTORICAL DERIVATION
                </span>
                <p className="text-[14px] leading-[23px] text-[#6e655c]">
                  From Middle English <em className="text-[#221d19]">repast</em>, borrowed from Anglo-French{" "}
                  <em className="text-[#221d19]">repast</em> (Modern French <em className="text-[#221d19]">repas</em>),
                  descending from Late Latin <em className="text-[#221d19]">repastus</em>, the past participle of{" "}
                  <em className="text-[#221d19]">repascere</em>: meaning <strong className="text-[#221d19]">“to feed again”</strong> or{" "}
                  <strong className="text-[#221d19]">“to nourish repeatedly”</strong> (from <em className="text-[#221d19]">re-</em> “again” +{" "}
                  <em className="text-[#221d19]">pascere</em> “to graze, feed, sustain”).
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-5 text-[16px] sm:text-[17px] leading-[28px] text-[#443d35]">
            <h2 className="text-[26px] sm:text-[30px] font-serif-display font-normal text-[#221d19] pt-4">
              Why the Name Matters
            </h2>
            <p>
              For centuries in the English language, a <em>repast</em> was never a thoughtless grazing session,
              a frantic snack pulled from a vending machine, or an anxious barcode scan entered into a phone
              at 11:30 PM. A repast implied intention: food gathered beforehand, prepared with purpose, and
              enjoyed without ambiguity.
            </p>
            <p>
              The modern diet industry did something tragic to the act of eating: it replaced the repast with
              guilt-driven bookkeeping. You are told to eat on impulse throughout the day, furiously log your
              grams after the damage is done, and discover—often too late—that you overshot your carbohydrate
              budget before dinner even began.
            </p>
            <p className="font-medium text-[#221d19]">
              We named the app <span className="text-[#c05621]">Repast</span> to return eating to its original
              definition: a solved, peaceful, intentional meal where the thinking has already been finished before
              you ever step up to the stove.
            </p>
          </div>
        </section>

        {/* Section 2: Why We Built Repast */}
        <section className="mb-16 pt-8 border-t border-[#e6dfd5]">
          <span className="text-[11px] font-bold uppercase tracking-[1.4px] text-[#c05621] block mb-2">
            THE CORE PROBLEM
          </span>
          <h2 className="text-[32px] sm:text-[38px] font-serif-display font-normal text-[#221d19] mb-6 leading-tight">
            Why Calorie Tracking Apps Fail Us
          </h2>

          <div className="space-y-5 text-[16px] sm:text-[17px] leading-[28px] text-[#443d35]">
            <p>
              Almost every popular nutrition app is designed around <strong>post-hoc tracking</strong>. You eat,
              search through an unverified crowd-sourced database filled with seven conflicting entries for a chicken
              breast, guess your portion size, and log the numbers into a diary.
            </p>
            <p>
              This is an <strong>autopsy</strong>, not a plan. By 6:30 PM on a Wednesday, your willpower is depleted
              from a day of work. You stare into the refrigerator, trying to calculate whether 85g of bell pepper will
              kick you out of ketosis, and whether you have enough protein remaining to justify cooking.
            </p>
            <div className="p-6 rounded-[22px] bg-[#fdf2ea] border-l-4 border-[#c05621] text-[#98421a] text-[15px] sm:text-[16px] leading-[25px]">
              <strong>The fundamental law of dietary adherence:</strong> People do not abandon keto because they
              crave sugar. They abandon keto because calculating macros at the end of an exhausting day is an
              insupportable cognitive burden.
            </div>
            <p>
              Repast replaces the food diary with a <strong>deterministic constraint solver</strong>. You do not log
              what you ate. Repast determines what you will eat for the next seven days, verifies that every single
              gram sits safely below your hard ceiling, consolidates the exact groceries required, and eliminates the
              daily question: <em>“What can I eat tonight?”</em>
            </p>
          </div>
        </section>

        {/* Section 3: The Engineering Philosophy */}
        <section className="mb-16 pt-8 border-t border-[#e6dfd5]">
          <span className="text-[11px] font-bold uppercase tracking-[1.4px] text-[#c05621] block mb-2">
            ENGINEERING PRINCIPLES
          </span>
          <h2 className="text-[32px] sm:text-[38px] font-serif-display font-normal text-[#221d19] mb-6 leading-tight">
            Deterministic Math, Not AI Hallucinations
          </h2>

          <div className="space-y-5 text-[16px] sm:text-[17px] leading-[28px] text-[#443d35] mb-10">
            <p>
              In an era where every product slaps a stochastic large language model onto food photos and guesses
              calories from a blurry snapshot of a sauce, Repast takes the opposite stance:
            </p>
            <p>
              Nutritional biochemistry is a mathematical system. Your net carb ceiling is a hard mathematical
              boundary. If your limit is 20g of net carbohydrates, a meal plan delivering 23g is a failure. You
              cannot hallucinate your way through ketosis.
            </p>
          </div>

          {/* 2-Column Architecture Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <div className="p-7 rounded-[24px] bg-white border border-[#e6dfd5] shadow-sm">
              <span className="text-[11px] font-bold uppercase tracking-[1.4px] text-[#c05621] block mb-2">
                AUDITED INGREDIENTS
              </span>
              <h3 className="text-[20px] font-serif-display text-[#221d19] mb-2">
                155 USDA Chemical Receipts
              </h3>
              <p className="text-[14px] leading-[22px] text-[#6e655c]">
                Every single ingredient in our 131-recipe library is mapped directly to authoritative USDA FoodData
                Central records. No user-uploaded junk data. No zero-carb lies.
              </p>
            </div>

            <div className="p-7 rounded-[24px] bg-white border border-[#e6dfd5] shadow-sm">
              <span className="text-[11px] font-bold uppercase tracking-[1.4px] text-[#c05621] block mb-2">
                ZERO OVERAGE
              </span>
              <h3 className="text-[20px] font-serif-display text-[#221d19] mb-2">
                16,933 Simulated Test Days
              </h3>
              <p className="text-[14px] leading-[22px] text-[#6e655c]">
                Our solver algorithm was stress-tested across 16,933 synthetic user profiles and edge-case diets.
                Every generated plan achieved exactly 0.0g carb overage.
              </p>
            </div>

            <div className="p-7 rounded-[24px] bg-white border border-[#e6dfd5] shadow-sm">
              <span className="text-[11px] font-bold uppercase tracking-[1.4px] text-[#c05621] block mb-2">
                INTELLIGENT REFUSAL
              </span>
              <h3 className="text-[20px] font-serif-display text-[#221d19] mb-2">
                Honesty Over Hallucination
              </h3>
              <p className="text-[14px] leading-[22px] text-[#6e655c]">
                If your parameters are mathematically impossible (e.g. 15g carbs, 190g protein, vegan, 15-minute prep),
                Repast refuses to produce a fake plan. It tells you exactly which variable must relax.
              </p>
            </div>

            <div className="p-7 rounded-[24px] bg-white border border-[#e6dfd5] shadow-sm">
              <span className="text-[11px] font-bold uppercase tracking-[1.4px] text-[#c05621] block mb-2">
                LEFTOVER ECONOMICS
              </span>
              <h3 className="text-[20px] font-serif-display text-[#221d19] mb-2">
                Cook Sessions, Not Single Plates
              </h3>
              <p className="text-[14px] leading-[22px] text-[#6e655c]">
                Cooking every meal from scratch is unsustainable. Repast schedules whole cooking sessions and links
                leftovers directly into lunches, cutting weeknight kitchen time by up to 50%.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Absolute Privacy Architecture */}
        <section className="mb-16 pt-8 border-t border-[#e6dfd5]">
          <span className="text-[11px] font-bold uppercase tracking-[1.4px] text-[#c05621] block mb-2">
            DATA ETHICS
          </span>
          <h2 className="text-[32px] sm:text-[38px] font-serif-display font-normal text-[#221d19] mb-6 leading-tight">
            Total On-Device Privacy: Zero Telemetry
          </h2>

          <div className="space-y-5 text-[16px] sm:text-[17px] leading-[28px] text-[#443d35] mb-8">
            <p>
              Your health data is not a commodity. We believe that what you eat, what you weigh, and your metabolic
              history should belong exclusively to you, stored physically inside your pocket.
            </p>
            <p>
              Repast has <strong>no cloud database</strong>, <strong>no user login</strong>, <strong>no analytics
              trackers</strong>, and <strong>no advertising SDKs</strong>. When you install Repast, it runs locally
              on your device using native Apple Swift and an encrypted local SQLite database.
            </p>
          </div>

          <div className="p-7 sm:p-8 rounded-[24px] bg-[#221d19] text-[#fff8ee]">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
              <div>
                <span className="text-[32px] font-serif-display text-[#c05621] block">0</span>
                <span className="text-[13px] font-bold uppercase tracking-[1px] text-[#e6dfd5] block mb-1">
                  User Accounts
                </span>
                <p className="text-[12px] text-[#c5bcb0] leading-[18px]">
                  No passwords, no email collection, no accounts to breach.
                </p>
              </div>

              <div>
                <span className="text-[32px] font-serif-display text-[#c05621] block">0</span>
                <span className="text-[13px] font-bold uppercase tracking-[1px] text-[#e6dfd5] block mb-1">
                  Analytics Trackers
                </span>
                <p className="text-[12px] text-[#c5bcb0] leading-[18px]">
                  No Meta Pixel, no Google Firebase, no behavioral tracking.
                </p>
              </div>

              <div>
                <span className="text-[32px] font-serif-display text-[#c05621] block">100%</span>
                <span className="text-[13px] font-bold uppercase tracking-[1px] text-[#e6dfd5] block mb-1">
                  On-Device Execution
                </span>
                <p className="text-[12px] text-[#c5bcb0] leading-[18px]">
                  Plans generate instantly offline in airplane mode.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Technical Specifications Table */}
        <section className="mb-16 pt-8 border-t border-[#e6dfd5]">
          <span className="text-[11px] font-bold uppercase tracking-[1.4px] text-[#c05621] block mb-2">
            PRODUCT SPECIFICATIONS
          </span>
          <h2 className="text-[28px] sm:text-[32px] font-serif-display font-normal text-[#221d19] mb-6">
            System & Nutrition Specifications
          </h2>

          <div className="overflow-hidden rounded-[20px] border border-[#e6dfd5] bg-white text-[14px]">
            <div className="divide-y divide-[#f0ebe2]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 px-6 gap-1">
                <span className="font-semibold text-[#221d19]">Platform</span>
                <span className="text-[#6e655c]">iOS 17.0 or later (iPhone exclusive)</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 px-6 gap-1">
                <span className="font-semibold text-[#221d19]">Architecture</span>
                <span className="text-[#6e655c]">100% Native Swift & SwiftUI</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 px-6 gap-1">
                <span className="font-semibold text-[#221d19]">Data Storage</span>
                <span className="text-[#6e655c]">Local SQLite with iOS Complete File Protection</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 px-6 gap-1">
                <span className="font-semibold text-[#221d19]">Nutritional Database</span>
                <span className="text-[#6e655c]">USDA FoodData Central SR Legacy & Foundation Foods</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 px-6 gap-1">
                <span className="font-semibold text-[#221d19]">Supported Diets</span>
                <span className="text-[#6e655c]">Strict Keto (20g), Low-Carb (75g), High-Protein, Paleo, Mediterranean</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 px-6 gap-1">
                <span className="font-semibold text-[#221d19]">Grocery Organization</span>
                <span className="text-[#6e655c]">7-Aisle Retail Store Routing</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 px-6 gap-1">
                <span className="font-semibold text-[#221d19]">Weight Tracking</span>
                <span className="text-[#6e655c]">Exponentially Weighted Moving Average (EWMA, α=0.10)</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: App Store Bridge Call To Action */}
        <section className="p-8 sm:p-12 rounded-[28px] bg-[#f0ebe2] border border-[#e6dfd5] text-center">
          <span className="text-[10px] font-bold uppercase tracking-[1.4px] text-[#c05621] block mb-2">
            START YOUR REPAST
          </span>
          <h2 className="text-[30px] sm:text-[40px] font-serif-display font-normal text-[#221d19] mb-3">
            A week of keto, decided in two minutes.
          </h2>
          <p className="text-[15px] sm:text-[16px] text-[#6e655c] max-w-lg mx-auto mb-8 leading-relaxed">
            No daily calculations. No evening food anxiety. Download Repast and experience meal planning
            the way it was meant to be.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <AppStoreBadge showPlatformNote={false} />
            <Link
              href="/tools"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-[#221d19] text-[#221d19] text-[13px] font-semibold hover:bg-white transition-colors"
            >
              Explore Free Planning Tools →
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
