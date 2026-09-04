import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Repast collects no personal data. No user account, no backend server, and no analytics telemetry. Everything stays on your iPhone.",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: "Privacy Policy — Repast",
    description: "Repast collects nothing. No account, no server, no analytics.",
    url: "https://repast.app/privacy",
    siteName: "Repast",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy — Repast",
    description: "Repast collects nothing. No account, no server, no analytics.",
  },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#f7f4ee] text-[#221d19]">
      {/* Top Navigation */}
      <header className="border-b border-[#e6dfd5] bg-[#f7f4ee]/90 backdrop-blur sticky top-0 z-30">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="text-[24px] font-serif-display font-normal text-[#221d19] tracking-tight hover:opacity-80 transition-opacity"
          >
            Repast
          </Link>
          <Link
            href="/"
            className="text-[13px] font-semibold text-[#6e655c] hover:text-[#221d19] transition-colors"
          >
            ← Back to main
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-6 py-16 sm:py-20">
        <span className="text-[11px] font-bold uppercase tracking-[1.4px] text-[#c05621] block mb-2">
          LEGAL & PRIVACY
        </span>
        <h1 className="text-[44px] sm:text-[54px] font-serif-display font-normal tracking-[-1px] leading-[1.05] mb-4 text-[#221d19]">
          Privacy Policy
        </h1>
        <p className="text-[15px] text-[#6e655c] mb-12">
          Last updated: September 4, 2026 · Effective date: Immediate
        </p>

        <div className="space-y-10 text-[15px] leading-[24px] text-[#221d19]">
          <section className="p-6 rounded-[20px] bg-white border border-[#e6dfd5] shadow-[0_4px_12px_rgba(34,29,25,0.04)]">
            <h2 className="text-[18px] font-bold mb-2 text-[#221d19]">The summary</h2>
            <p className="text-[#6e655c]">
              Repast collects no personal information. There is no user account, no remote database,
              and no analytics transport. Everything you enter stays on your device.
            </p>
          </section>

          <section>
            <h2 className="text-[22px] font-serif-display font-normal mb-3 text-[#221d19]">
              1. Information Repast collects
            </h2>
            <p className="text-[#6e655c] mb-3">
              <strong className="text-[#221d19]">None.</strong> The app has no user accounts, no sign-in flow,
              and no cloud synchronisation. When you input your body metrics, goal carbs, dietary
              preferences, weight logs, or cook times, that data is stored solely in local storage on
              your iPhone.
            </p>
            <p className="text-[#6e655c]">
              The app cannot transmit your weight, diet, or food logs anywhere because there is no
              backend server to receive them.
            </p>
          </section>

          <section>
            <h2 className="text-[22px] font-serif-display font-normal mb-3 text-[#221d19]">
              2. Network traffic and analytics
            </h2>
            <p className="text-[#6e655c] mb-3">
              Repast makes no outbound network calls during regular operation.
            </p>
            <ul className="list-disc list-inside space-y-1 text-[#6e655c]">
              <li>No third-party advertising SDKs are installed.</li>
              <li>No behavioural analytics or telemetry packages are installed.</li>
              <li>No cookies, web beacons, or tracking identifiers are used on this site or in the app.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[22px] font-serif-display font-normal mb-3 text-[#221d19]">
              3. In-App Purchases and Apple StoreKit
            </h2>
            <p className="text-[#6e655c]">
              Subscriptions are processed entirely through Apple’s In-App Purchase system (StoreKit).
              Apple handles payment processing and billing information under Apple’s Privacy Policy.
              Repast receives only anonymous entitlement receipts confirming whether your subscription
              is currently active. Repast never sees your credit card number, billing address, or name.
            </p>
          </section>

          <section>
            <h2 className="text-[22px] font-serif-display font-normal mb-3 text-[#221d19]">
              4. Data retention and deletion
            </h2>
            <p className="text-[#6e655c]">
              Since all data is stored on your device, you maintain complete ownership and control:
            </p>
            <ul className="list-disc list-inside space-y-1 text-[#6e655c] mt-2">
              <li>You can reset your meal plan and recorded history inside the app settings at any time.</li>
              <li>Deleting the Repast app from your iPhone permanently deletes all stored data immediately.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[22px] font-serif-display font-normal mb-3 text-[#221d19]">
              5. Changes to this policy
            </h2>
            <p className="text-[#6e655c]">
              If we ever introduce optional network features (such as encrypted iCloud sync between your
              own devices), this policy will be updated prior to release and prominently disclosed.
            </p>
          </section>

          <section className="pt-6 border-t border-[#e6dfd5]">
            <h2 className="text-[18px] font-bold mb-2 text-[#221d19]">Contact</h2>
            <p className="text-[#6e655c]">
              For any questions regarding privacy or data handling, write directly to:{" "}
              <a
                href="mailto:support@repast.app"
                className="text-[#c05621] font-semibold underline underline-offset-2"
              >
                support@repast.app
              </a>
              .
            </p>
            <p className="text-[#6e655c] mt-4 text-[13px]">
              Terms of Use are governed by Apple&apos;s Standard EULA:{" "}
              <a
                href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c05621] underline underline-offset-2"
              >
                Apple Standard Licensed Application End User License Agreement
              </a>
              .
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#e6dfd5] py-8 text-center text-[13px] text-[#6e655c]">
        <p>© {new Date().getFullYear()} Repast. All rights reserved.</p>
      </footer>
    </div>
  );
}
