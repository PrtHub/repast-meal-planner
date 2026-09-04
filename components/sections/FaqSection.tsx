"use client";

import React, { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
  detail?: string;
}

const faqs: FaqItem[] = [
  {
    question: "How does Repast guarantee zero carb overage?",
    answer:
      "Most diet apps let you log whatever you eat and turn numbers red when you exceed your limit. Repast is a constraint solver: days are generated under your carb ceiling, not scored against it afterwards. Across 16,933 simulated test days, the carb overage is exactly 0g.",
    detail: "Supports both Net Carbs (deducting dietary fibre) and Total Carbs with an aligned dietary fibre allowance so the arithmetic never conflicts.",
  },
  {
    question: "What happens when my constraints cannot produce a plan?",
    answer:
      "Repast refuses rather than fudges. If your rules — such as under-15-minute prep, pescatarian, and no eggs — leave fewer valid recipes than the week requires, the app tells you up front. It identifies the exact bottleneck rule and calculates how many recipes loosening it would unlock, with a one-tap adjustment button.",
    detail: "An app that always returns a plan is either ignoring your rules or padding with foods you said no to.",
  },
  {
    question: "How does the shopping list calculate leftovers?",
    answer:
      "Repast calculates quantities by cook sessions rather than individual sittings. If a 4-serving recipe is eaten for Monday dinner and Wednesday lunch, the shopping list buys for one cook. In testing for a household of four, this cut benchmark basket weight from 67.6kg down to 34.8kg.",
    detail: "Ingredients are listed in purchasable units (e.g. '2 packs of 4' or '7 medium avocados' instead of '1400g of eggs') and grouped into seven supermarket aisles.",
  },
  {
    question: "How does adaptive calorie maintenance work?",
    answer:
      "After 21 days with at least 80% plan adherence, the app inverts your energy balance using an EWMA (Exponentially Weighted Moving Average) 10-day smoothed weight trend. It calculates your true maintenance calories and offers the adjustment as an option rather than silently changing your targets.",
    detail: "Confidence reaches full calibration at 42 days, and corrections are capped at ±20% so a single anomalous week cannot distort your plan.",
  },
  {
    question: "Can I swap meals or ingredients if I want variety?",
    answer:
      "Yes. Any meal can be swapped for a ranked list of alternatives that still fit your day's remaining carb budget. Furthermore, individual ingredient substitutions display their signed net carb delta (for example, swapping avocado for olive oil shows the exact carb difference before you commit).",
    detail: "You can also lock meals you want to preserve across plan rebuilds, or ban recipes you never want to see again.",
  },
  {
    question: "What does Repast deliberately NOT do?",
    answer:
      "We believe in honesty over feature creep. Repast has no barcode scanner, no open-ended food diary, no calorie tracking outside its plan, no social feeds, and no cloud sync. Everything stays 100% on your device, with no account required and no analytics collected.",
    detail: "Every ingredient's calories are verified against Atwater 4/4/9 standards, with 155 of 174 ingredients carrying direct USDA FoodData Central IDs.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-6 max-w-4xl mx-auto border-t border-[#e6dfd5]">
      <div className="mb-12">
        <span className="text-[11px] font-bold uppercase tracking-[1.4px] text-[#c05621] block mb-2">
          SPECIFICATION & FAQ
        </span>
        <h2 className="text-[36px] sm:text-[46px] font-serif-display font-normal tracking-[-0.8px] leading-tight text-[#221d19]">
          Questions people ask before installing.
        </h2>
        <p className="text-[15px] text-[#6e655c] mt-2">
          Exact details from the solver specification. No marketing vagueness.
        </p>
      </div>

      <div className="space-y-3">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={faq.question}
              className="rounded-[18px] bg-white border border-[#e6dfd5] transition-colors overflow-hidden"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c05621]"
                aria-expanded={isOpen}
              >
                <span className="text-[16px] sm:text-[17px] font-bold text-[#221d19]">
                  {faq.question}
                </span>
                <span
                  className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center bg-[#f0ebe2] text-[#6e655c] transition-transform duration-200 text-[16px] ${
                    isOpen ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>

              {isOpen && (
                <div className="px-5 sm:px-6 pb-6 pt-1 text-[14px] leading-[23px] text-[#6e655c] border-t border-[#ede6dc]">
                  <p className="mb-2.5 text-[#221d19]">{faq.answer}</p>
                  {faq.detail && (
                    <p className="text-[13px] bg-[#f7f4ee] p-3 rounded-[10px] border border-[#ede6dc] text-[#6e655c]">
                      {faq.detail}
                    </p>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
