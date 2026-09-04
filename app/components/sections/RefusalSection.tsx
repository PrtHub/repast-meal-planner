import RefusalCard from "../RefusalCard";

export default function RefusalSection() {
  return (
    <section id="refusal" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6">
          <span className="text-[11px] font-bold uppercase tracking-[1.4px] text-[#c05621] block mb-2">
            HONEST CONSTRAINT SOLVING
          </span>
          <h2 className="text-[38px] sm:text-[50px] font-serif-display font-normal tracking-[-1px] leading-[1.05] text-[#221d19] mb-6">
            It tells you when it can&apos;t.
          </h2>
          <div className="space-y-4 text-[16px] leading-[26px] text-[#6e655c]">
            <p>
              An app that always returns a plan is either ignoring your constraints or padding with
              food you said no to.
            </p>
            <p>
              If your rules — say, under 15 minutes, pescatarian, and no eggs — leave fewer valid
              recipes than the week demands, Repast stops and tells you. It names the exact
              bottleneck and calculates how much loosening it unlocks.
            </p>
            <p className="text-[#221d19] font-medium">
              No secret substitutions. No breaking your rules behind your back.
            </p>
          </div>
        </div>

        <div className="lg:col-span-6">
          <RefusalCard />
        </div>
      </div>
    </section>
  );
}
