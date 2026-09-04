import Link from "next/link";
import AppleIcon from "../AppleIcon";

export default function PricingSection() {
  const appStoreUrl = "https://apps.apple.com/app/id6470000000";

  return (
    <section id="pricing" className="py-20 px-6 max-w-5xl mx-auto border-t border-[#e6dfd5]">
      <div className="max-w-xl mx-auto text-center mb-14">
        <span className="text-[11px] font-bold uppercase tracking-[1.4px] text-[#c05621] block mb-2">
          SUBSCRIPTION
        </span>
        <h2 className="text-[36px] sm:text-[46px] font-serif-display font-normal tracking-[-0.8px] leading-tight text-[#221d19]">
          Simple, honest pricing.
        </h2>
        <p className="text-[15px] text-[#6e655c] mt-2">
          No hidden tiers, no tokens, no sponsored ingredients.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-10">
        {/* Yearly Plan */}
        <div className="rounded-[24px] bg-white border-2 border-[#c05621] p-8 shadow-[0_8px_24px_rgba(192,86,33,0.1)] relative flex flex-col justify-between">
          <div className="absolute -top-3 right-6 bg-[#c05621] text-white text-[10px] font-bold uppercase tracking-[1.4px] px-3 py-1 rounded-full">
            3 DAYS FREE
          </div>

          <div>
            <span className="text-[12px] font-bold uppercase tracking-[1.4px] text-[#6e655c] block mb-1">
              YEARLY ACCESS
            </span>
            <div className="flex items-baseline gap-1 mb-2">
              <span className="text-[44px] font-serif-display text-[#221d19] leading-none">$49.99</span>
              <span className="text-[15px] text-[#6e655c]">/ year</span>
            </div>
            <p className="text-[13px] text-[#c05621] font-semibold mb-4">
              $4.17 per month · billed annually
            </p>
            <p className="text-[14px] text-[#6e655c] leading-relaxed mb-6">
              3 days free, then $49.99 per year. Cancel any time before the trial ends and you will
              not be charged.
            </p>
          </div>

          <div className="pt-4 border-t border-[#ede6dc]">
            <a
              href={appStoreUrl}
              className="w-full py-3 px-4 rounded-[12px] btn-primary flex items-center justify-center gap-2 text-center text-[15px]"
            >
              <AppleIcon className="w-4 h-4 fill-current shrink-0" />
              <span>Start 3-day free trial</span>
            </a>
          </div>
        </div>

        {/* Monthly Plan */}
        <div className="rounded-[24px] bg-white border border-[#e6dfd5] p-8 shadow-sm flex flex-col justify-between">
          <div>
            <span className="text-[12px] font-bold uppercase tracking-[1.4px] text-[#6e655c] block mb-1">
              MONTHLY ACCESS
            </span>
            <div className="flex items-baseline gap-1 mb-2">
              <span className="text-[44px] font-serif-display text-[#221d19] leading-none">$12.99</span>
              <span className="text-[15px] text-[#6e655c]">/ month</span>
            </div>
            <p className="text-[13px] text-[#6e655c] mb-4">
              Pay as you go · no trial period
            </p>
            <p className="text-[14px] text-[#6e655c] leading-relaxed mb-6">
              Billed monthly at $12.99. Renews automatically until cancelled in your Apple ID
              Subscriptions.
            </p>
          </div>

          <div className="pt-4 border-t border-[#ede6dc]">
            <a
              href={appStoreUrl}
              className="w-full py-3 px-4 rounded-[12px] bg-[#f0ebe2] hover:bg-[#e6dfd5] text-[#221d19] font-bold flex items-center justify-center gap-2 text-center text-[15px] transition-colors"
            >
              <AppleIcon className="w-4 h-4 fill-current shrink-0" />
              <span>Get monthly plan</span>
            </a>
          </div>
        </div>
      </div>

      {/* Legally required App Review disclosure next to pricing (§8, 3.1.2) */}
      <div className="max-w-2xl mx-auto text-center text-[12px] leading-[18px] text-[#6e655c]">
        <p className="mb-2">
          Payment will be charged to your Apple ID account at confirmation of purchase or at the end
          of the 3-day free trial. Subscriptions automatically renew unless cancelled at least 24
          hours before the end of the current billing period. Manage or cancel your subscription at
          any time in your iOS Account Settings.
        </p>
        <div className="flex items-center justify-center gap-4 text-[12px]">
          <Link href="/privacy" className="text-[#c05621] underline underline-offset-2">
            Privacy Policy
          </Link>
          <span>·</span>
          <a
            href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#c05621] underline underline-offset-2"
          >
            Terms of Use (Standard EULA)
          </a>
        </div>
      </div>
    </section>
  );
}
