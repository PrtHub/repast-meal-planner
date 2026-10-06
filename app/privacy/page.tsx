import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Repast Privacy Policy — no account required, body measurements and meal plans stay on your phone, and we don't sell your data or show ads. Learn exactly what information leaves your device and why.",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: "Privacy Policy — Repast",
    description:
      "No account, no ads, no cross-app tracking. Your body measurements, meal plans and weight history stay on your iPhone.",
    url: "https://repast.app/privacy",
    siteName: "Repast",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy — Repast",
    description:
      "No account, no ads, no cross-app tracking. Your body measurements, meal plans and weight history stay on your iPhone.",
  },
};

export default function PrivacyPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://repast.app" },
      { "@type": "ListItem", position: 2, name: "Privacy Policy", item: "https://repast.app/privacy" },
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
          <span className="text-[#221d19] font-medium">Privacy Policy</span>
        </nav>

        {/* Header */}
        <header className="mb-10">
          <span className="text-[11px] font-bold uppercase tracking-[1.4px] text-[#c05621] block mb-2">
            LEGAL &amp; PRIVACY
          </span>
          <h1 className="text-[40px] sm:text-[52px] font-serif-display font-normal tracking-[-1px] leading-[1.05] mb-4 text-[#221d19]">
            Privacy Policy
          </h1>
          <p className="text-[15px] text-[#6e655c]">
            Effective date: October 6, 2026
          </p>
          <p className="text-[15px] text-[#6e655c] mt-2">
            Repast is a meal-planning app made by Pritam Ghosh (&ldquo;we&rdquo;, &ldquo;us&rdquo;).
            This policy explains what information the app uses, what leaves your phone, who
            receives it and why, and what you can do about it.
          </p>
        </header>

        <div className="space-y-10 text-[15px] leading-[25px] text-[#221d19]">
          {/* The Short Version — Summary Card */}
          <section className="p-6 rounded-[20px] bg-white border border-[#e6dfd5] shadow-[0_4px_12px_rgba(34,29,25,0.04)]">
            <h2 className="text-[18px] font-bold mb-3 text-[#221d19]">The short version</h2>
            <ul className="space-y-2 text-[#6e655c]">
              <li className="flex gap-2">
                <span className="text-[#2d6a4f] shrink-0 font-bold">✓</span>
                <span><strong className="text-[#221d19]">There is no account.</strong> We never ask for your name, email or phone number.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#2d6a4f] shrink-0 font-bold">✓</span>
                <span><strong className="text-[#221d19]">Your body measurements, meal plans, meal log and weight history stay on your phone.</strong> We can&apos;t see them.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#c05621] shrink-0 font-bold">→</span>
                <span><strong className="text-[#221d19]">A few things do leave your phone</strong>, each for a specific reason: buying a subscription (Apple and RevenueCat), anonymous usage analytics about onboarding (Mixpanel), questions you choose to ask the recipe assistant (our server, then an AI provider), and checking for app updates (Expo).</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#2d6a4f] shrink-0 font-bold">✓</span>
                <span><strong className="text-[#221d19]">We don&apos;t sell your data</strong>, show ads, or track you across other apps and websites.</span>
              </li>
            </ul>
          </section>

          {/* Information that stays on your phone */}
          <section>
            <h2 className="text-[22px] font-serif-display font-normal mb-3 text-[#221d19]">
              Information that stays on your phone
            </h2>
            <p className="text-[#6e655c] mb-3">
              Everything below is stored only on your device, in the app&apos;s own storage:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-[#6e655c]">
              <li>Your answers from setup: sex (used only for the calorie formula), age, height, weight, activity level, goal, diet, how you count carbs, whether you eat meat, allergies and foods you avoid, how long you like to cook, kitchen equipment, household size and meal structure.</li>
              <li>Your calorie and macro targets, your meal plans, the meals you tick off or skip, meals you log as eaten elsewhere, your grocery list and its ticks.</li>
              <li>Your weight entries and the trend calculated from them.</li>
              <li>Your settings, such as units and reminder times.</li>
            </ul>
            <p className="text-[#6e655c] mt-3">
              We don&apos;t receive any of it. If your phone backs up to iCloud (or another backup service), this data is included in that backup, under your control and your backup provider&apos;s terms. Deleting the app deletes it from the phone.
            </p>
            <div className="mt-4 p-4 rounded-[14px] bg-[#f0e4d8] border-l-4 border-[#c05621] text-[14px] font-medium text-[#98421a]">
              <strong>Notifications</strong> (meal reminders and cooking timers) are scheduled on your phone by the app itself. No notification server is involved and no push token is collected.
            </div>
          </section>

          {/* Information that leaves your phone */}
          <section>
            <h2 className="text-[22px] font-serif-display font-normal mb-3 text-[#221d19]">
              Information that leaves your phone
            </h2>

            {/* 1. Subscription */}
            <div className="mb-8">
              <h3 className="text-[17px] font-bold text-[#221d19] mb-2">1. Buying and managing a subscription</h3>
              <p className="text-[#6e655c] mb-2">
                <strong className="text-[#221d19]">Apple</strong> handles all payments. We never see your card or billing details.
              </p>
              <p className="text-[#6e655c]">
                <strong className="text-[#221d19]">RevenueCat</strong> (<a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#c05621] underline underline-offset-2">privacy policy</a>) manages subscriptions for us. The app gives each install a random, anonymous ID (for example <code className="text-[13px] bg-[#f0ebe2] px-1.5 py-0.5 rounded">$RCAnonymousID:3f2a…</code>), and RevenueCat receives that ID together with your purchase and subscription history from Apple, so the app knows whether you are subscribed. RevenueCat also receives basic technical information needed to process purchases, such as the app version, the device platform, and the country of your App Store account.
              </p>
            </div>

            {/* 2. Analytics */}
            <div className="mb-8">
              <h3 className="text-[17px] font-bold text-[#221d19] mb-2">2. Usage analytics (Mixpanel)</h3>
              <p className="text-[#6e655c] mb-2">
                We use <strong className="text-[#221d19]">Mixpanel</strong> (<a href="https://mixpanel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-[#c05621] underline underline-offset-2">privacy policy</a>) to understand how people move through setup and whether the subscription offer works, so we can improve them. Mixpanel receives:
              </p>
              <ul className="list-disc list-inside space-y-1.5 text-[#6e655c] mb-3">
                <li><strong className="text-[#221d19]">Which setup screens you view and complete</strong>, and how long each takes.</li>
                <li><strong className="text-[#221d19]">Plan events</strong>: that a plan was built and how long it took, or that one could not be built, with a short reason. The reason may mention a dietary restriction you chose, such as an allergy.</li>
                <li><strong className="text-[#221d19]">Subscription screen events</strong>: that it was shown, which plan you selected, and whether a purchase started, was cancelled, failed or was restored.</li>
                <li><strong className="text-[#221d19]">How you heard about Repast</strong>, if you answered that question, including anything you typed under &ldquo;Other&rdquo;.</li>
              </ul>
              <p className="text-[#6e655c] mb-2">
                Each install has a random analytics ID that is not linked to your name, email or Apple ID. Mixpanel also receives standard technical details such as the app version, operating system and device type, and uses your IP address to estimate an approximate location (country and city).
              </p>
              <div className="p-4 rounded-[14px] bg-[#f4f7f2] border-l-4 border-[#2d6a4f] text-[14px] font-medium text-[#2d6a4f]">
                Analytics <strong>never</strong> includes your body measurements, weight entries, calorie targets, meal plans, meal log, or anything you ask the recipe assistant.
              </div>
            </div>

            {/* 3. Recipe assistant */}
            <div className="mb-8">
              <h3 className="text-[17px] font-bold text-[#221d19] mb-2">3. The recipe assistant (only if you use it)</h3>
              <p className="text-[#6e655c] mb-2">
                The assistant answers questions about a recipe. It&apos;s optional, and nothing is sent unless you ask a question. When you do, the app sends:
              </p>
              <ul className="list-disc list-inside space-y-1.5 text-[#6e655c] mb-3">
                <li>your question and the last few messages of that conversation;</li>
                <li>the recipe you&apos;re looking at, with its ingredients, steps and nutrition;</li>
                <li>how you count carbs, your daily carb limit and how much of it is left today;</li>
                <li>whether you eat meat, and the allergies and foods you&apos;ve chosen to exclude, so the answer doesn&apos;t suggest them;</li>
                <li>your anonymous purchase ID (described above).</li>
              </ul>
              <p className="text-[#6e655c] mb-2">
                This goes first to <strong className="text-[#221d19]">our own server</strong>, which runs on <strong className="text-[#221d19]">Cloudflare</strong> (<a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer" className="text-[#c05621] underline underline-offset-2">privacy policy</a>). Our server uses the anonymous ID to ask RevenueCat whether you&apos;re subscribed, and to count how many questions you&apos;ve asked today. It then sends the conversation, <strong className="text-[#221d19]">without</strong> that ID, to <strong className="text-[#221d19]">OpenRouter</strong> (<a href="https://openrouter.ai/privacy" target="_blank" rel="noopener noreferrer" className="text-[#c05621] underline underline-offset-2">privacy policy</a>), which passes it to the AI model provider (currently Google&apos;s Gemini) to write the answer.
              </p>
              <p className="text-[#6e655c] mb-2">Our server doesn&apos;t store your questions or the answers. It keeps:</p>
              <ul className="list-disc list-inside space-y-1.5 text-[#6e655c] mb-3">
                <li>a daily question count for your anonymous ID, deleted after 2 days;</li>
                <li>a note of whether that ID is subscribed, kept for no more than 10 minutes;</li>
                <li>standard request logs kept by Cloudflare for a few days, such as the time and your IP address, used to keep the service working and to stop abuse.</li>
              </ul>
              <div className="p-4 rounded-[14px] bg-[#fdf2ea] border-l-4 border-[#c05621] text-[14px] font-medium text-[#98421a]">
                Please don&apos;t type personal information, such as your name or health conditions, into the assistant.
              </div>
            </div>

            {/* 4. App updates */}
            <div>
              <h3 className="text-[17px] font-bold text-[#221d19] mb-2">4. App updates (Expo)</h3>
              <p className="text-[#6e655c]">
                The app checks <strong className="text-[#221d19]">Expo</strong>&apos;s servers (<a href="https://expo.dev/privacy" target="_blank" rel="noopener noreferrer" className="text-[#c05621] underline underline-offset-2">privacy policy</a>) for updates to its content and fixes. Those requests include technical information such as the app version, platform and a random install ID, and, like any internet request, your IP address.
              </p>
            </div>
          </section>

          {/* What we don't do */}
          <section>
            <h2 className="text-[22px] font-serif-display font-normal mb-3 text-[#221d19]">
              What we don&apos;t do
            </h2>
            <ul className="list-disc list-inside space-y-1.5 text-[#6e655c]">
              <li>We don&apos;t create accounts or collect your name, email, phone number or address.</li>
              <li>We don&apos;t access your contacts, location, photos, camera, microphone or Apple Health.</li>
              <li>We don&apos;t use the advertising identifier, show ads, or track you across other companies&apos; apps and websites.</li>
              <li>We don&apos;t sell or rent your personal information, or share it for advertising.</li>
            </ul>
          </section>

          {/* How long information is kept */}
          <section>
            <h2 className="text-[22px] font-serif-display font-normal mb-3 text-[#221d19]">
              How long information is kept
            </h2>
            <ul className="list-disc list-inside space-y-1.5 text-[#6e655c]">
              <li><strong className="text-[#221d19]">On your phone:</strong> until you erase it (Profile → Start over) or delete the app.</li>
              <li><strong className="text-[#221d19]">Our server:</strong> as described above, at most 2 days, and nothing about the content of your questions.</li>
              <li><strong className="text-[#221d19]">Mixpanel:</strong> analytics events are kept for up to 24 months, then deleted.</li>
              <li><strong className="text-[#221d19]">RevenueCat and Apple:</strong> purchase records are kept as long as needed for your subscription and for legal, tax and accounting purposes.</li>
            </ul>
          </section>

          {/* Your choices and rights */}
          <section>
            <h2 className="text-[22px] font-serif-display font-normal mb-3 text-[#221d19]">
              Your choices and rights
            </h2>
            <ul className="list-disc list-inside space-y-1.5 text-[#6e655c] mb-3">
              <li><strong className="text-[#221d19]">Erase your data on the phone:</strong> Profile → Start over, or delete the app. Starting over doesn&apos;t cancel a subscription; that&apos;s managed by Apple.</li>
              <li><strong className="text-[#221d19]">Turn off reminders:</strong> Profile, or your phone&apos;s notification settings.</li>
              <li><strong className="text-[#221d19]">Don&apos;t use the recipe assistant:</strong> nothing is sent unless you ask a question.</li>
              <li><strong className="text-[#221d19]">Manage or cancel your subscription:</strong> Profile → Manage subscription, or your Apple ID settings.</li>
            </ul>
            <p className="text-[#6e655c] mb-2">
              Depending on where you live, including the EU, UK and California, you may have the right to access, correct or delete personal information about you, to object to or restrict how it is used, and to complain to your local data protection authority. Because we don&apos;t know who you are, we can only act on records we can link to you, so tell us which device and roughly when you used the app. To make a request, email <a href="mailto:pritamfinds@gmail.com" className="text-[#c05621] font-semibold underline underline-offset-2">pritamfinds@gmail.com</a>. We&apos;ll answer within 30 days.
            </p>
            <div className="p-4 rounded-[14px] bg-[#f0ebe2] text-[14px] text-[#6e655c]">
              <strong className="text-[#221d19]">California residents:</strong> we don&apos;t sell or share personal information as those terms are defined in the CCPA, and we don&apos;t use sensitive personal information to infer characteristics about you.
            </div>
          </section>

          {/* Legal bases (EU and UK) */}
          <section>
            <h2 className="text-[22px] font-serif-display font-normal mb-3 text-[#221d19]">
              Legal bases (EU and UK)
            </h2>
            <ul className="list-disc list-inside space-y-1.5 text-[#6e655c]">
              <li><strong className="text-[#221d19]">Providing the service you asked for</strong> (contract): purchases, the subscription check, and answering assistant questions you send.</li>
              <li><strong className="text-[#221d19]">Legitimate interests</strong>: anonymous usage analytics to improve setup and the app, keeping the service secure, and preventing abuse of the assistant.</li>
              <li><strong className="text-[#221d19]">Consent</strong>: notifications, which you turn on yourself.</li>
            </ul>
          </section>

          {/* Where information is processed */}
          <section>
            <h2 className="text-[22px] font-serif-display font-normal mb-3 text-[#221d19]">
              Where information is processed
            </h2>
            <p className="text-[#6e655c]">
              The services above are based in, or process data in, the United States and other countries. Where personal data is transferred out of the EU or UK, those providers rely on recognised safeguards such as the EU Standard Contractual Clauses or the EU–US Data Privacy Framework.
            </p>
          </section>

          {/* Children */}
          <section>
            <h2 className="text-[22px] font-serif-display font-normal mb-3 text-[#221d19]">
              Children
            </h2>
            <p className="text-[#6e655c]">
              Repast is for adults. It is not directed at children under 13 (16 in some countries), and we don&apos;t knowingly collect their information. If you believe a child has used the app and want data removed, contact us.
            </p>
          </section>

          {/* Security */}
          <section>
            <h2 className="text-[22px] font-serif-display font-normal mb-3 text-[#221d19]">
              Security
            </h2>
            <p className="text-[#6e655c]">
              The information that leaves your phone is sent over encrypted connections (HTTPS), and the keys our server uses to reach other services are stored as secrets, never in the app. No system is perfectly secure, but keeping your personal data on your own device is the main way we protect it.
            </p>
          </section>

          {/* Changes to this policy */}
          <section>
            <h2 className="text-[22px] font-serif-display font-normal mb-3 text-[#221d19]">
              Changes to this policy
            </h2>
            <p className="text-[#6e655c]">
              If we change what the app collects or who receives it, we&apos;ll update this page and the date at the top before the change reaches you, and for significant changes we&apos;ll tell you in the app.
            </p>
          </section>

          {/* Contact */}
          <section className="pt-6 border-t border-[#e6dfd5]">
            <h2 className="text-[18px] font-bold mb-2 text-[#221d19]">Contact</h2>
            <p className="text-[#6e655c]">
              Pritam Ghosh · Kolkata, India
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
                href="/terms"
                className="text-[#c05621] underline underline-offset-2"
              >
                Terms of Use
              </Link>
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
