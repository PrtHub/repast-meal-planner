import AppStoreBadge from "../AppStoreBadge";
import PhoneMockup from "../PhoneMockup";
import TodayScreenMockup from "../TodayScreenMockup";

export default function HeroSection() {
  return (
    <section className="pt-12 sm:pt-20 pb-16 px-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Hero Copy */}
        <div className="lg:col-span-7 flex flex-col items-start">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f0e4d8] text-[#98421a] text-[11px] font-bold uppercase tracking-[1.4px] mb-6">
            <span>IOS MEAL PLANNER</span>
            <span className="text-[#c05621]">·</span>
            <span>KETO & LOW-CARB</span>
          </div>

          <h1 className="text-[48px] sm:text-[68px] lg:text-[76px] font-serif-display font-normal leading-[0.98] tracking-[-1.5px] text-[#221d19] mb-6">
            A week of keto, decided.
          </h1>

          <p className="text-[17px] sm:text-[18px] leading-[26px] sm:leading-[28px] text-[#6e655c] max-w-xl mb-8">
            Repast builds your week from your own numbers and refuses to hand you a day that breaks
            your carb ceiling. No account. Nothing leaves your phone.
          </p>

          <div className="w-full sm:w-auto mb-6">
            <AppStoreBadge />
          </div>

          <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-[13px] text-[#6e655c]">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2e6e7e]" />
              Zero carb overage across 16,933 days
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c05621]" />
              On-device only
            </span>
          </div>
        </div>

        {/* Hero Visual: Phone Mockup */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[340px] sm:max-w-[360px]">
            {/* Subtle background elevation glow */}
            <div className="absolute -inset-4 bg-[#f0e4d8]/40 rounded-[56px] filter blur-xl -z-10" />
            <PhoneMockup>
              <TodayScreenMockup interactive={true} />
            </PhoneMockup>
          </div>
        </div>
      </div>
    </section>
  );
}
