import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AppIcon from "@/components/AppIcon";

export const metadata: Metadata = {
  title: "Support & Help Center",
  description:
    "Get help with Repast for iPhone. Quick answers for subscriptions, offline meal planning, hard carb limits, and direct contact with our support team.",
  alternates: {
    canonical: "/support",
  },
  openGraph: {
    title: "Support & Help Center — Repast",
    description:
      "Get help with Repast for iPhone. Quick answers for subscriptions, offline meal planning, and direct contact with our support team.",
    url: "https://getrepast.app/support",
    siteName: "Repast",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Support & Help Center — Repast",
    description:
      "Get help with Repast for iPhone. Quick answers for subscriptions, offline meal planning, and direct contact with our support team.",
  },
};

export default function SupportPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://getrepast.app" },
      { "@type": "ListItem", position: 2, name: "Support", item: "https://getrepast.app/support" },
    ],
  };

  const contactPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Repast Customer Support",
    url: "https://getrepast.app/support",
    description: "Support and help documentation for the Repast iOS meal planning application.",
    mainEntity: {
      "@type": "Organization",
      name: "Repast",
      url: "https://getrepast.app",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: "pritamfinds@gmail.com",
        availableLanguage: ["English"],
      },
    },
  };

  const faqItems = [
    {
      category: "Subscription & Billing",
      questions: [
        {
          q: "How do I cancel or manage my subscription?",
          a: "All payments and subscriptions are processed directly through Apple. You can cancel or change your plan at any time in your iPhone Settings: tap your Apple ID (top profile icon) → Subscriptions → Repast. If you cancel at least 24 hours before your trial or billing period ends, you will not be charged again.",
        },
        {
          q: "How does the 3-day free trial work?",
          a: "The yearly subscription comes with a full 3-day free trial. You get unrestricted access to every recipe, weekly meal plan, grocery list, and cook mode timer. If you decide Repast isn't for you, cancel in your Apple ID settings before the 3 days end.",
        },
        {
          q: "How do I restore my purchase on a new or second iPhone?",
          a: "Repast uses your Apple ID to verify purchases with Apple and RevenueCat. On your new device, open Repast, head to Settings / Profile, and tap 'Restore Purchases'. It will immediately unlock without charging you again.",
        },
      ],
    },
    {
      category: "Meal Planning & Features",
      questions: [
        {
          q: "How does Repast prevent carb creep?",
          a: "Most calorie trackers let you eat first, add up the numbers after the fact, and turn red when you exceed your limit. Repast works the other way around: each week is solved upfront with a mathematical constraint engine so that every single day stops strictly short of your carb cap (0g overage).",
        },
        {
          q: "Can I customize allergies, food dislikes, or cooking times?",
          a: "Yes. In onboarding or Settings, you can specify dietary restrictions (vegetarian, pescatarian, no red meat), exclude allergens (dairy, eggs, tree nuts, peanuts, gluten, soy, fish, pork), and set your maximum cooking time (under 15, 25, 40, or 60 minutes).",
        },
        {
          q: "How does the grocery shopping list handle leftovers?",
          a: "The planner groups recipes into whole cooking sessions. If you cook a 4-serving dish eaten across two days, the shopping list buys the exact pack quantities once rather than double-purchasing ingredients.",
        },
      ],
    },
    {
      category: "Privacy & Data",
      questions: [
        {
          q: "Where is my personal health and meal data stored?",
          a: "100% on your device. Repast does not use accounts or remote profile databases. Your weight history, biometric metrics, and meal logs remain strictly in your iPhone's local storage.",
        },
        {
          q: "Does Repast work without an internet connection?",
          a: "Yes! All 153 recipes, weekly plan generators, grocery lists, and step-by-step cook timers work completely offline.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#f7f4ee] text-[#221d19]">
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageJsonLd) }}
      />

      <main className="max-w-4xl mx-auto px-6 py-14 sm:py-20">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[12px] text-[#6e655c] mb-6">
          <Link href="/" className="hover:text-[#221d19]">Home</Link>
          <span>/</span>
          <span className="text-[#221d19] font-medium">Support</span>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <AppIcon className="w-10 h-10 rounded-[10px] shadow-sm shrink-0" />
            <span className="text-[11px] font-bold uppercase tracking-[1.4px] text-[#c05621]">
              HELP &amp; SUPPORT
            </span>
          </div>
          <h1 className="text-[40px] sm:text-[54px] font-serif-display font-normal tracking-[-1px] leading-[1.05] mb-4 text-[#221d19]">
            How can we help?
          </h1>
          <p className="text-[16px] sm:text-[18px] leading-[28px] text-[#6e655c] max-w-2xl">
            Find quick answers to common questions about managing your subscription, planning
            rules, or write directly to our team.
          </p>
        </header>

        {/* Direct Contact Highlight Card */}
        <section className="mb-16 p-8 sm:p-10 rounded-[28px] bg-white border border-[#e6dfd5] shadow-[0_4px_24px_rgba(34,29,25,0.04)]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[1.3px] text-[#c05621] block mb-1">
                DIRECT ASSISTANCE
              </span>
              <h2 className="text-[24px] sm:text-[28px] font-serif-display text-[#221d19] mb-2">
                Email Customer Support
              </h2>
              <p className="text-[14px] sm:text-[15px] text-[#6e655c] max-w-md">
                Have an inquiry or experiencing a technical issue? Write directly to our support inbox.
                We typically respond within 24 hours on business days.
              </p>
            </div>
            <a
              href="mailto:pritamfinds@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#221d19] text-[#fff8ee] text-[14px] font-semibold hover:bg-[#c05621] active:scale-[0.98] transition-all shrink-0 shadow-sm"
            >
              <span>pritamfinds@gmail.com</span>
              <span>→</span>
            </a>
          </div>

          <div className="mt-6 pt-6 border-t border-[#f0ebe2] flex flex-wrap items-center gap-4 text-[12px] text-[#8a7f73]">
            <span>💡 <strong>Tip:</strong> Mention your iPhone model and iOS version for faster diagnostics.</span>
          </div>
        </section>

        {/* FAQ Categories */}
        <div className="space-y-12">
          {faqItems.map((category) => (
            <section key={category.category} className="space-y-5">
              <h2 className="text-[20px] font-bold tracking-tight text-[#221d19] border-b border-[#e6dfd5] pb-2.5">
                {category.category}
              </h2>
              <div className="grid grid-cols-1 gap-4">
                {category.questions.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-[20px] bg-white border border-[#e6dfd5] shadow-xs"
                  >
                    <h3 className="text-[16px] font-semibold text-[#221d19] mb-2">
                      {item.q}
                    </h3>
                    <p className="text-[14px] leading-[24px] text-[#6e655c]">
                      {item.a}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Explore More Helpful Resources */}
        <section className="mt-16 pt-10 border-t border-[#e6dfd5]">
          <h2 className="text-[20px] font-bold text-[#221d19] mb-4">
            Additional Resources
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-[14px]">
            <Link
              href="/guides"
              className="p-4 rounded-[16px] bg-white border border-[#e6dfd5] hover:border-[#c05621] transition-colors font-medium text-[#221d19] block"
            >
              Planning Guides →
            </Link>
            <Link
              href="/tools"
              className="p-4 rounded-[16px] bg-white border border-[#e6dfd5] hover:border-[#c05621] transition-colors font-medium text-[#221d19] block"
            >
              Interactive Tools →
            </Link>
            <Link
              href="/privacy"
              className="p-4 rounded-[16px] bg-white border border-[#e6dfd5] hover:border-[#c05621] transition-colors font-medium text-[#221d19] block"
            >
              Privacy Policy →
            </Link>
            <Link
              href="/terms"
              className="p-4 rounded-[16px] bg-white border border-[#e6dfd5] hover:border-[#c05621] transition-colors font-medium text-[#221d19] block"
            >
              Terms of Use →
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
