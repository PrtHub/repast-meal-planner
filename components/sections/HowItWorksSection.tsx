interface StepItem {
  number: string;
  title: string;
  description: string;
  badge: string;
}

const steps: StepItem[] = [
  {
    number: "1",
    title: "Answer 18 questions",
    description:
      "Diet, body metrics, daily carb ceiling, what you won’t eat, and how long you will cook on weeknights. Two minutes. (16 questions if maintaining weight).",
    badge: "Time: ~2 minutes",
  },
  {
    number: "2",
    title: "Get the week",
    description:
      "Seven days of meals, every day verified inside your carb ceiling, and exactly one shopping list grouped by supermarket aisle with leftover quantities adjusted.",
    badge: "Output: 7 days + 1 list",
  },
  {
    number: "3",
    title: "Tick meals off",
    description:
      "Tick off dishes as you eat them. The engine learns your actual maintenance calories from what you log and what the scale reads, refining the next week accordingly.",
    badge: "Feedback: Adaptive EWMA",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="max-w-2xl mb-14">
        <span className="text-[11px] font-bold uppercase tracking-[1.4px] text-[#c05621] block mb-2">
          THREE STEPS
        </span>
        <h2 className="text-[36px] sm:text-[46px] font-serif-display font-normal tracking-[-0.8px] leading-tight text-[#221d19]">
          How Repast works.
        </h2>
        <p className="text-[16px] text-[#6e655c] mt-3 leading-relaxed">
          No endless onboarding quiz designed to sell a subscription. Just your parameters, the
          solver, and your week.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step) => (
          <div key={step.number} className="relative flex flex-col">
            <div className="text-[44px] font-serif-display text-[#c05621] mb-4">
              {step.number}
            </div>
            <h3 className="text-[20px] font-serif-display text-[#221d19] mb-2">
              {step.title}
            </h3>
            <p className="text-[14px] leading-[22px] text-[#6e655c]">
              {step.description}
            </p>
            <div className="mt-4 text-[12px] font-medium text-[#6e655c] bg-[#f0ebe2] px-3 py-1.5 rounded-[8px] inline-block self-start">
              {step.badge}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
