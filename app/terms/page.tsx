import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Repast Terms of Use — covers subscriptions, the recipe assistant, medical disclaimers, allergies, food safety, and your rights. Supplements Apple's Standard EULA.",
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    title: "Terms of Use — Repast",
    description:
      "Repast Terms of Use — subscriptions, the recipe assistant, medical disclaimers, and your rights.",
    url: "https://repast.app/terms",
    siteName: "Repast",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Terms of Use — Repast",
    description:
      "Repast Terms of Use — subscriptions, the recipe assistant, medical disclaimers, and your rights.",
  },
};

export default function TermsPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://repast.app" },
      { "@type": "ListItem", position: 2, name: "Terms of Use", item: "https://repast.app/terms" },
    ],
  };

  return (
    <div className="min-h-screen bg-[#f7f4ee] text-[#221d19]">
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <main className="max-w-3xl mx-auto px-6 py-14 sm:py-20">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[12px] text-[#6e655c] mb-6">
          <Link href="/" className="hover:text-[#221d19]">Home</Link>
          <span>/</span>
          <span className="text-[#221d19] font-medium">Terms of Use</span>
        </nav>

        {/* Header */}
        <header className="mb-10">
          <span className="text-[11px] font-bold uppercase tracking-[1.4px] text-[#c05621] block mb-2">
            LEGAL
          </span>
          <h1 className="text-[40px] sm:text-[52px] font-serif-display font-normal tracking-[-1px] leading-[1.05] mb-4 text-[#221d19]">
            Terms of Use
          </h1>
          <p className="text-[15px] text-[#6e655c]">
            Effective date: October 6, 2026
          </p>
          <p className="text-[15px] text-[#6e655c] mt-2">
            These terms are an agreement between you and Pritam Ghosh (&ldquo;we&rdquo;, &ldquo;us&rdquo;) for the Repast app. By using Repast, you agree to them. Please read section 3 before following any plan.
          </p>
        </header>

        <div className="space-y-10 text-[15px] leading-[25px] text-[#221d19]">
          {/* 1. These terms and Apple's */}
          <section>
            <h2 className="text-[22px] font-serif-display font-normal mb-3 text-[#221d19]">
              1. These terms and Apple&apos;s
            </h2>
            <p className="text-[#6e655c] mb-2">
              You get Repast from Apple&apos;s App Store, so <strong className="text-[#221d19]">Apple&apos;s Licensed Application End User License Agreement</strong> (<a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" target="_blank" rel="noopener noreferrer" className="text-[#c05621] underline underline-offset-2">apple.com/legal</a>) also applies. These terms add to it. Where they conflict, Apple&apos;s agreement wins on the licence to use the app, and these terms govern everything specific to Repast.
            </p>
            <p className="text-[#6e655c]">
              The <Link href="/privacy" className="text-[#c05621] underline underline-offset-2">Privacy Policy</Link> explains what information the app uses and shares.
            </p>
          </section>

          {/* 2. Who can use Repast */}
          <section>
            <h2 className="text-[22px] font-serif-display font-normal mb-3 text-[#221d19]">
              2. Who can use Repast
            </h2>
            <p className="text-[#6e655c]">
              You must be <strong className="text-[#221d19]">at least 18</strong> (or the age of majority where you live) to use Repast. It plans meals around calorie targets and carbohydrate limits, which is not appropriate for children.
            </p>
          </section>

          {/* 3. Repast is not medical advice — highlighted */}
          <section className="p-6 rounded-[20px] bg-[#fdf2ea] border border-[#ecdacb]">
            <h2 className="text-[22px] font-serif-display font-normal mb-3 text-[#221d19]">
              3. Repast is not medical advice
            </h2>
            <p className="text-[#6e655c] mb-3">
              Repast is a planning tool. <strong className="text-[#221d19]">It is not a doctor, dietitian or medical service, and nothing in it is medical advice.</strong>
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-[#6e655c] mb-3">
              <li>Calorie, protein and carbohydrate targets are <strong className="text-[#221d19]">estimates</strong> from standard formulas and the information you enter. Your real needs may differ.</li>
              <li><strong className="text-[#221d19]">Talk to a doctor before starting a ketogenic or low-carbohydrate diet</strong>, especially if you:
                <ul className="list-disc list-inside ml-5 mt-1 space-y-1">
                  <li>are pregnant or breastfeeding;</li>
                  <li>have diabetes, or take insulin or medicines that lower blood sugar (including SGLT2 inhibitors);</li>
                  <li>have kidney, liver, pancreatic, gallbladder or heart disease;</li>
                  <li>take medicine for blood pressure;</li>
                  <li>have or have had an eating disorder;</li>
                  <li>have any other medical condition.</li>
                </ul>
              </li>
              <li>If you feel unwell on any diet, stop and get medical advice. Repast&apos;s electrolyte notes are general information, not treatment.</li>
            </ul>
          </section>

          {/* 4. Allergies and food safety */}
          <section>
            <h2 className="text-[22px] font-serif-display font-normal mb-3 text-[#221d19]">
              4. Allergies and food safety
            </h2>
            <p className="text-[#6e655c] mb-2">
              Repast leaves recipes out of your plan based on the allergies and foods you choose to exclude, using its own ingredient data. <strong className="text-[#221d19]">It can&apos;t guarantee a dish is free of an allergen.</strong> Products vary by brand and country, labels change, and kitchens cross-contaminate. Always read the labels of what you buy, and if you have a serious allergy, check every ingredient yourself.
            </p>
            <p className="text-[#6e655c]">
              Cook food to safe temperatures. Poultry and minced meat should reach 74°C (165°F) in the middle. Follow the doneness cues in each recipe, and use your own judgement about food that looks, smells or tastes wrong.
            </p>
          </section>

          {/* 5. Nutrition information */}
          <section>
            <h2 className="text-[22px] font-serif-display font-normal mb-3 text-[#221d19]">
              5. Nutrition information
            </h2>
            <p className="text-[#6e655c]">
              Nutrition figures are calculated from ingredient data, mostly the U.S. Department of Agriculture&apos;s FoodData Central, and the quantities in each recipe. Real values change with the brands you buy, ripeness, portioning and cooking, so treat every figure as a close estimate, not a measurement.
            </p>
          </section>

          {/* 6. The recipe assistant */}
          <section>
            <h2 className="text-[22px] font-serif-display font-normal mb-3 text-[#221d19]">
              6. The recipe assistant
            </h2>
            <p className="text-[#6e655c] mb-2">
              Repast Pro includes an AI assistant that answers questions about a recipe.
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-[#6e655c]">
              <li><strong className="text-[#221d19]">Its answers can be wrong.</strong> They&apos;re generated by an AI model and aren&apos;t checked by a person. Don&apos;t rely on them for medical, allergy or food-safety decisions.</li>
              <li>It answers questions about the recipe in front of you and may decline other topics.</li>
              <li>Use is limited, currently to a set number of questions a day. We may change the limits, the model or the feature, or pause it.</li>
              <li>Don&apos;t try to get around its limits, use it for anything other than your own cooking, or access the service it runs on except through the app.</li>
            </ul>
          </section>

          {/* 7. Subscriptions */}
          <section>
            <h2 className="text-[22px] font-serif-display font-normal mb-3 text-[#221d19]">
              7. Subscriptions
            </h2>
            <p className="text-[#6e655c] mb-3">
              Most of Repast requires a <strong className="text-[#221d19]">Repast Pro</strong> subscription.
            </p>
            <ul className="list-disc list-inside space-y-2 text-[#6e655c]">
              <li><strong className="text-[#221d19]">Plans and prices</strong> are shown in the app before you buy, in your local currency. They are set through the App Store and may differ by country.</li>
              <li><strong className="text-[#221d19]">Payment</strong> is charged to your Apple ID when you confirm the purchase. We don&apos;t receive your payment details.</li>
              <li><strong className="text-[#221d19]">Free trial:</strong> where a trial is offered, it is shown before you buy. If you don&apos;t cancel at least 24 hours before it ends, it becomes a paid subscription and you are charged. A trial is offered once per person per subscription group, as Apple decides.</li>
              <li><strong className="text-[#221d19]">Renewal:</strong> subscriptions <strong className="text-[#221d19]">renew automatically</strong> at the end of each period, at the then-current price, unless you turn off auto-renewal at least 24 hours before the period ends. Your account is charged within 24 hours before renewal.</li>
              <li><strong className="text-[#221d19]">Cancelling:</strong> manage or cancel any time in <strong className="text-[#221d19]">Settings → [your name] → Subscriptions</strong>, or in Repast under <strong className="text-[#221d19]">Profile → Manage subscription</strong>. You keep access until the end of the period you&apos;ve paid for. Deleting the app does not cancel a subscription.</li>
              <li><strong className="text-[#221d19]">Refunds</strong> are handled by Apple under its policies. Request one at <a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer" className="text-[#c05621] underline underline-offset-2">reportaproblem.apple.com</a>.</li>
              <li><strong className="text-[#221d19]">Price changes</strong> follow Apple&apos;s rules, including telling you in advance and, where required, asking for your consent.</li>
              <li><strong className="text-[#221d19]">Restoring:</strong> a subscription belongs to your Apple ID. Use <strong className="text-[#221d19]">Restore</strong> on the subscription screen on a new phone or after reinstalling.</li>
              <li><strong className="text-[#221d19]">What&apos;s included</strong> may change over time, for example as recipes are added. We won&apos;t remove the meal planner itself from an active subscription.</li>
            </ul>
          </section>

          {/* 8. Using Repast */}
          <section>
            <h2 className="text-[22px] font-serif-display font-normal mb-3 text-[#221d19]">
              8. Using Repast
            </h2>
            <p className="text-[#6e655c] mb-2">
              We give you a personal, non-transferable licence to use Repast for your own, non-commercial meal planning. You agree not to:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-[#6e655c]">
              <li>copy, scrape or republish Repast&apos;s recipes, photos, text or data;</li>
              <li>reverse-engineer the app or its services, except where the law lets you;</li>
              <li>interfere with or overload our services, or get around subscription checks, usage limits or security;</li>
              <li>use Repast in any unlawful way.</li>
            </ul>
          </section>

          {/* 9. Ownership */}
          <section>
            <h2 className="text-[22px] font-serif-display font-normal mb-3 text-[#221d19]">
              9. Ownership
            </h2>
            <p className="text-[#6e655c]">
              Repast&apos;s recipes, photographs, text, design and software belong to us or our licensors and are protected by copyright and other laws. The information you enter stays yours, and stays on your phone as described in the Privacy Policy.
            </p>
          </section>

          {/* 10. Changes and availability */}
          <section>
            <h2 className="text-[22px] font-serif-display font-normal mb-3 text-[#221d19]">
              10. Changes and availability
            </h2>
            <p className="text-[#6e655c]">
              We may update, change or stop parts of Repast, including recipes, features and the recipe assistant. Repast is designed to work offline, but some features (the assistant, purchases and restoring them) need an internet connection and depend on third-party services that may sometimes be unavailable.
            </p>
          </section>

          {/* 11. Disclaimers */}
          <section>
            <h2 className="text-[22px] font-serif-display font-normal mb-3 text-[#221d19]">
              11. Disclaimers
            </h2>
            <p className="text-[#6e655c]">
              Repast is provided <strong className="text-[#221d19]">&ldquo;as is&rdquo; and &ldquo;as available&rdquo;</strong>. To the extent the law allows, we make no promises that it will meet your goals, be uninterrupted or be free of errors, or that its estimates are accurate, and we disclaim implied warranties of merchantability, fitness for a particular purpose and non-infringement. Nothing in these terms limits rights you have under consumer law that can&apos;t be waived.
            </p>
          </section>

          {/* 12. Limitation of liability */}
          <section>
            <h2 className="text-[22px] font-serif-display font-normal mb-3 text-[#221d19]">
              12. Limitation of liability
            </h2>
            <p className="text-[#6e655c] mb-2">
              To the extent the law allows, we aren&apos;t liable for any indirect, incidental, special or consequential losses, or for loss of data, arising from your use of Repast. Our total liability for any claim relating to Repast is limited to the amount you paid for Repast in the 12 months before the claim.
            </p>
            <p className="text-[#6e655c]">
              Nothing in these terms excludes or limits liability for death or personal injury caused by negligence, fraud, or anything else that can&apos;t be excluded by law.
            </p>
          </section>

          {/* 13. Ending these terms */}
          <section>
            <h2 className="text-[22px] font-serif-display font-normal mb-3 text-[#221d19]">
              13. Ending these terms
            </h2>
            <p className="text-[#6e655c]">
              You can stop using Repast at any time by deleting it; cancel any subscription separately with Apple. We may suspend or end your access if you seriously or repeatedly break these terms. Sections 3, 4, 5, 9, 11, 12 and 14 continue to apply after that.
            </p>
          </section>

          {/* 14. Governing law */}
          <section>
            <h2 className="text-[22px] font-serif-display font-normal mb-3 text-[#221d19]">
              14. Governing law
            </h2>
            <p className="text-[#6e655c]">
              These terms are governed by the laws of India, without regard to its conflict-of-law rules. If you are a consumer, you also keep the protection of the mandatory laws of the country where you live, and you can bring a claim in your local courts.
            </p>
          </section>

          {/* 15. Changes to these terms */}
          <section>
            <h2 className="text-[22px] font-serif-display font-normal mb-3 text-[#221d19]">
              15. Changes to these terms
            </h2>
            <p className="text-[#6e655c]">
              We may update these terms. If a change is significant, we&apos;ll tell you in the app before it takes effect. Continuing to use Repast after that means you accept the updated terms.
            </p>
          </section>

          {/* 16. Contact */}
          <section className="pt-6 border-t border-[#e6dfd5]">
            <h2 className="text-[18px] font-bold mb-2 text-[#221d19]">Contact</h2>
            <p className="text-[#6e655c]">
              Pritam Ghosh
            </p>
            <p className="text-[#6e655c] mt-1">
              <a
                href="mailto:pritamfinds@gmail.com"
                className="text-[#c05621] font-semibold underline underline-offset-2"
              >
                pritamfinds@gmail.com
              </a>
            </p>
            <p className="text-[#6e655c] mt-4 text-[13px]">
              See also:{" "}
              <Link
                href="/privacy"
                className="text-[#c05621] underline underline-offset-2"
              >
                Privacy Policy
              </Link>
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
