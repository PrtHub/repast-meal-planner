import React from "react";

interface FeatureCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const leadFeatures: FeatureCard[] = [
  {
    icon: <span className="font-bold text-[14px]">0g</span>,
    title: "Hard carb ceiling",
    description: "Days are generated under your cap, not scored against it afterwards.",
  },
  {
    icon: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
      </svg>
    ),
    title: "On-device only",
    description: "No account, no server, no analytics. There is nothing to leak.",
  },
  {
    icon: <span className="font-bold text-[13px]">USDA</span>,
    title: "Verified nutrition",
    description:
      "155 of 174 ingredients carry a USDA FoodData Central id you can look up yourself.",
  },
  {
    icon: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0 0 20 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
      </svg>
    ),
    title: "One shopping list",
    description: "Aisle-grouped, in the units you actually buy, leftovers already accounted for.",
  },
  {
    icon: <span className="font-bold text-[14px]">≠</span>,
    title: "Honest refusal",
    description: "When your constraints can't be met it names the single one to loosen.",
  },
  {
    icon: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6h-6z" />
      </svg>
    ),
    title: "Adaptive targets",
    description: "Learns your real maintenance calories from what you logged and what the scale did.",
  },
];

const systemPillars = [
  {
    tag: "PLANNING & SOLVER",
    title: "Seeded determinism & real portion scaling",
    points: [
      "Seeded generator: the same profile and week produce the exact same plan across launches.",
      "Net or Total carbs: under net counting, fibre is subtracted; total cap is derived to prevent conflicts.",
      "Portion scaling in 6 steps from 0.75× to 2.0× to hit calorie goals without artificial recipe sizes.",
      "Variety rules: no 3 chicken dinners in a row, no repeat inside a single day, signature ingredient recency penalty.",
    ],
  },
  {
    tag: "DAY-TO-DAY RIGOUR",
    title: "Immutable past & ranked meal swaps",
    points: [
      "A 3-hour undo window on a tick: late logging is normal, but un-ticking breakfast at 9 PM is rewriting history.",
      "Past is immutable: elapsed days and eaten meals are permanently pinned against accidental changes.",
      "Swap any meal for ranked alternatives filtered strictly to your day's remaining carb budget.",
      "Lock meals to survive plan rebuilds, or permanently ban recipes you never want to see again.",
    ],
  },
  {
    tag: "RECIPES & RECEIPT INTEGRITY",
    title: "Signed carb deltas & USDA receipts",
    points: [
      "155 of 174 ingredients carry verifiable USDA FoodData Central IDs (19 unverified carry written reasons).",
      "Substitutions with signed carb delta: swap avocado for olive oil and see the exact net carb delta before confirming.",
      "10 allergen exclusions and 13 divisive-ingredient opt-outs (mushrooms, coriander, blue cheese, anchovies...).",
      "Automatic dietary classification derived strictly from ingredient chemistry, never hand-tagged labels.",
    ],
  },
  {
    tag: "WEIGHT & PROGRESS",
    title: "EWMA trend smoothing & adaptive TDEE",
    points: [
      "10-day EWMA (Exponentially Weighted Moving Average) smoothing removes deceptive daily water-weight noise.",
      "Adaptive TDEE: inverts energy balance after 21 days at 80%+ adherence to calculate real maintenance calories.",
      "Safety limits scaling with BMI: maximum deficit prevents lean users from choosing harmful caloric cut rates.",
      "Weakest-slot detection: if you repeatedly skip breakfast, suggests fewer meals a day rather than forcing an unused slot.",
    ],
  },
];

const metrics = [
  {
    stat: "131",
    label: "recipes across 174 ingredients",
    colorClass: "text-[#221d19]",
  },
  {
    stat: "155",
    label: "ingredients with USDA IDs",
    colorClass: "text-[#2e6e7e]",
  },
  {
    stat: "0g",
    label: "carb overage over 16,933 test days",
    colorClass: "text-[#2e6e7e]",
  },
  {
    stat: "108/108",
    label: "coverage cells servable",
    colorClass: "text-[#221d19]",
  },
  {
    stat: "10",
    label: "allergen exclusions supported",
    colorClass: "text-[#221d19]",
  },
  {
    stat: "13",
    label: "divisive-ingredient opt-outs",
    colorClass: "text-[#221d19]",
  },
  {
    stat: "7",
    label: "supermarket aisles grouped",
    colorClass: "text-[#221d19]",
  },
  {
    stat: "5",
    label: "diets (keto, low-carb, paleo...)",
    colorClass: "text-[#221d19]",
  },
];

export default function FeatureGridSection() {
  return (
    <section className="py-20 px-6 bg-[#ffffff] border-t border-[#e6dfd5]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <span className="text-[11px] font-bold uppercase tracking-[1.4px] text-[#c05621] block mb-2">
            THE HONEST DIFFERENTIATORS
          </span>
          <h2 className="text-[36px] sm:text-[46px] font-serif-display font-normal tracking-[-0.8px] leading-tight text-[#221d19]">
            Built on constraints, not marketing.
          </h2>
          <p className="text-[16px] text-[#6e655c] mt-3 leading-relaxed">
            Every item below is audited against the engine code and 35 app screens. We only claim
            what exists.
          </p>
        </div>

        {/* Lead 6 Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {leadFeatures.map((card) => (
            <div
              key={card.title}
              className="p-6 rounded-[20px] bg-[#f7f4ee] border border-[#e6dfd5] flex flex-col justify-between"
            >
              <div>
                <div className="w-9 h-9 rounded-[10px] bg-[#f0e4d8] text-[#c05621] flex items-center justify-center mb-4">
                  {card.icon}
                </div>
                <h3 className="text-[18px] font-bold text-[#221d19] mb-2">
                  {card.title}
                </h3>
                <p className="text-[14px] leading-[22px] text-[#6e655c]">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Four Deep Systems (§5.2, §5.3, §5.4, §5.6) */}
        <div className="mb-16">
          <div className="mb-8">
            <span className="text-[10px] font-bold uppercase tracking-[1.4px] text-[#6e655c] block mb-1">
              UNDER THE HOOD
            </span>
            <h3 className="text-[28px] font-serif-display font-normal text-[#221d19]">
              Four systems designed for real life
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {systemPillars.map((pillar) => (
              <div
                key={pillar.tag}
                className="p-7 rounded-[22px] bg-[#f7f4ee] border border-[#e6dfd5]"
              >
                <span className="text-[10px] font-bold uppercase tracking-[1.4px] text-[#c05621] block mb-2">
                  {pillar.tag}
                </span>
                <h4 className="text-[19px] font-bold text-[#221d19] mb-4">
                  {pillar.title}
                </h4>
                <ul className="space-y-2.5 text-[13px] leading-[21px] text-[#6e655c]">
                  {pillar.points.map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#c05621] font-bold mt-0.5">·</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Complete Numbers Bar (§5.11) */}
        <div className="rounded-[24px] bg-[#f0ebe2] p-8 sm:p-10 border border-[#e6dfd5]">
          <span className="text-[10px] font-bold uppercase tracking-[1.4px] text-[#6e655c] block mb-6">
            AUDITED CODEBASE METRICS
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
            {metrics.map((item) => (
              <div key={item.label}>
                <span
                  className={`text-[36px] sm:text-[44px] font-serif-display block leading-none mb-1.5 tabular-nums ${item.colorClass}`}
                >
                  {item.stat}
                </span>
                <span className="text-[13px] text-[#6e655c] leading-snug block">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
