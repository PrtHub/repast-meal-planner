interface CalloutCard {
  step: string;
  title: string;
  description: string;
  metricLabel: string;
  metricValue: string;
  metricColorClass: string;
}

const callouts: CalloutCard[] = [
  {
    step: "01 · CONSTRAINT, NOT A REPORT",
    title: "The carb ceiling holds",
    description:
      "Most apps let you log 60g of carbs and colour the number red at 10 PM. Repast will not generate a day that exceeds your ceiling. Across 16,933 simulated days the overage is 0g.",
    metricLabel: "Simulated overage:",
    metricValue: "0.0g",
    metricColorClass: "text-[#2e6e7e]",
  },
  {
    step: "02 · TICK-STATE ADAPTATION",
    title: "Only ticked meals count",
    description:
      "Skipped lunch or ate off-plan? Simply leave the box unticked. The engine learns your actual maintenance calories from what you mark eaten paired with your weight trend, not theoretical textbook formulas.",
    metricLabel: "Trend smoothing:",
    metricValue: "EWMA calculation",
    metricColorClass: "text-[#c05621]",
  },
  {
    step: "03 · LEFTOVER AWARENESS",
    title: "Cooks, not sittings",
    description:
      "Cooking four portions of salmon to eat twice across the week is recorded as one cook session with one leftover allocation. Your shopping list buys for one cook, never double-purchasing.",
    metricLabel: "Test basket reduction:",
    metricValue: "67.6kg → 34.8kg",
    metricColorClass: "text-[#2e6e7e]",
  },
];

export default function ProofSection() {
  return (
    <section className="py-20 px-6 border-t border-[#e6dfd5] bg-[#ffffff]">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-14">
          <span className="text-[11px] font-bold uppercase tracking-[1.4px] text-[#c05621] block mb-2">
            THE INTERFACE
          </span>
          <h2 className="text-[36px] sm:text-[46px] font-serif-display font-normal tracking-[-0.8px] leading-tight text-[#221d19]">
            The one screen that matters.
          </h2>
          <p className="text-[16px] text-[#6e655c] mt-3 leading-relaxed">
            No endless feeds, no barcode hunting, no logging three bites of lettuce. Three pieces
            of information keep you inside your targets.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {callouts.map((card) => (
            <div
              key={card.step}
              className="p-7 rounded-[20px] bg-[#f7f4ee] border border-[#e6dfd5] flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[1.4px] text-[#6e655c] block mb-3">
                  {card.step}
                </span>
                <h3 className="text-[20px] font-serif-display font-normal text-[#221d19] mb-2">
                  {card.title}
                </h3>
                <p className="text-[14px] leading-[22px] text-[#6e655c]">
                  {card.description}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#e6dfd5] flex items-center justify-between text-[12px] tabular-nums text-[#221d19]">
                <span className="text-[#6e655c]">{card.metricLabel}</span>
                <span className={`font-bold ${card.metricColorClass}`}>{card.metricValue}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
