import React from "react";

interface FeatureCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: FeatureCard[] = [
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
    description: "No account, no server, no analytics. Nothing to leak.",
  },
  {
    icon: <span className="font-bold text-[13px]">USDA</span>,
    title: "Verified nutrition",
    description: "155 of 174 ingredients carry a USDA FoodData Central id you can look up.",
  },
  {
    icon: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0 0 20 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
      </svg>
    ),
    title: "One shopping list",
    description: "Aisle-grouped, quantities in what you actually buy, leftovers accounted for.",
  },
  {
    icon: <span className="font-bold text-[14px]">≠</span>,
    title: "Honest refusal",
    description: "When your constraints can't be met it names the one to loosen.",
  },
  {
    icon: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6h-6z" />
      </svg>
    ),
    title: "Adaptive targets",
    description: "Learns your real maintenance calories from logged meals and weight trend.",
  },
];

const metrics = [
  {
    stat: "131",
    label: "recipes across 174 ingredients",
    colorClass: "text-[#221d19]",
  },
  {
    stat: "108/108",
    label: "coverage cells servable",
    colorClass: "text-[#221d19]",
  },
  {
    stat: "0g",
    label: "carb overage in 16,933 test days",
    colorClass: "text-[#2e6e7e]",
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
        <div className="max-w-2xl mb-14">
          <span className="text-[11px] font-bold uppercase tracking-[1.4px] text-[#c05621] block mb-2">
            THE HONEST DIFFERENTIATORS
          </span>
          <h2 className="text-[36px] sm:text-[46px] font-serif-display font-normal tracking-[-0.8px] leading-tight text-[#221d19]">
            Built on constraints, not marketing.
          </h2>
          <p className="text-[16px] text-[#6e655c] mt-3 leading-relaxed">
            Every item below is verifiable in code. We do not claim features we do not have.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {features.map((card) => (
            <div
              key={card.title}
              className="p-6 rounded-[20px] bg-[#f7f4ee] border border-[#e6dfd5]"
            >
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
          ))}
        </div>

        {/* Numbers Bar (§5 Numbers you may quote) */}
        <div className="rounded-[20px] bg-[#f0ebe2] p-8 border border-[#e6dfd5]">
          <span className="text-[10px] font-bold uppercase tracking-[1.4px] text-[#6e655c] block mb-6">
            THE HARD NUMBERS
          </span>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((item) => (
              <div key={item.label}>
                <span
                  className={`text-[38px] sm:text-[48px] font-serif-display block leading-none mb-1 tabular-nums ${item.colorClass}`}
                >
                  {item.stat}
                </span>
                <span className="text-[13px] text-[#6e655c]">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
