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
              19% of initial simulated profiles cannot be served without adjustment — almost all of
              them combining under-15-minute prep with a strict dietary rule. Repast stops and tells you
              up front.
            </p>
            <p>
              It diagnoses the exact bottleneck across <strong className="text-[#221d19]">five relaxation categories</strong>:
              drop an allergen exclusion, allow longer cooking, add equipment, allow harder recipes,
              or un-dislike an ingredient.
            </p>
            <p className="text-[#221d19] font-medium pt-1">
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
