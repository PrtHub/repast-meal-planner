import Link from "next/link";

export default function PrivacySection() {
  return (
    <section className="py-20 px-6 max-w-4xl mx-auto text-center">
      <div className="p-8 sm:p-12 rounded-[28px] bg-[#221d19] text-[#fff8ee] shadow-[0_20px_40px_rgba(34,29,25,0.18)]">
        <span className="text-[11px] font-bold uppercase tracking-[1.6px] text-[#c05621] block mb-3">
          ON-DEVICE ARCHITECTURE
        </span>
        <h2 className="text-[36px] sm:text-[48px] font-serif-display font-normal tracking-[-0.8px] leading-tight mb-5">
          Nothing leaves the phone.
        </h2>
        <p className="text-[16px] sm:text-[17px] leading-[26px] text-[#c5bcb0] max-w-xl mx-auto mb-8">
          No account. No server. No analytics. Your weight, your meals and your measurements are on
          your phone and nowhere else.
        </p>
        <div className="flex justify-center">
          <Link
            href="/privacy"
            className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#fff8ee] underline underline-offset-4 hover:text-[#c05621] transition-colors"
          >
            Read the complete privacy commitment →
          </Link>
        </div>
      </div>
    </section>
  );
}
