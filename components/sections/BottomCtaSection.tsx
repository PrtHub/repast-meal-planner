import AppStoreBadge from "../AppStoreBadge";

export default function BottomCtaSection() {
  return (
    <section className="py-16 px-6 bg-[#f0ebe2] border-t border-[#e6dfd5] text-center">
      <div className="max-w-xl mx-auto">
        <h2 className="text-[32px] sm:text-[40px] font-serif-display font-normal text-[#221d19] mb-3">
          Stop deciding what to cook every day.
        </h2>
        <p className="text-[15px] text-[#6e655c] mb-6">
          Get your week decided under your carb ceiling in two minutes.
        </p>
        <div className="flex justify-center">
          <AppStoreBadge showPlatformNote={false} />
        </div>
      </div>
    </section>
  );
}
