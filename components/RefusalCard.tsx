"use client";

import React, { useState } from "react";

export default function RefusalCard() {
  const [adjusted, setAdjusted] = useState(false);

  return (
    <div className="w-full max-w-lg mx-auto bg-white rounded-[24px] border border-[#e6dfd5] shadow-[0_16px_32px_rgba(34,29,25,0.08)] overflow-hidden">
      {/* Header bar */}
      <div className="bg-[#f0ebe2] px-6 py-3.5 border-b border-[#e6dfd5] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#c2402f]" />
          <span className="text-[11px] font-bold uppercase tracking-[1.4px] text-[#8f2a1e]">
            {adjusted ? "Constraints Resolved" : "Constraint Conflict"}
          </span>
        </div>
        <span className="text-[12px] text-[#6e655c] font-medium">Solver diagnostics</span>
      </div>

      <div className="p-6 sm:p-7">
        {!adjusted ? (
          <div>
            {/* The real app copy */}
            <div className="rounded-[16px] bg-[#fdf6f1] border border-[#f0e4d8] p-4 mb-5">
              <p className="text-[15px] font-bold text-[#98421a] leading-snug">
                Not enough lunch + dinner options: 4 available, 6 needed.
              </p>
              <p className="text-[13px] text-[#6e655c] mt-1.5 leading-relaxed">
                Your combination of <strong className="text-[#221d19]">under 15 minutes</strong> +{" "}
                <strong className="text-[#221d19]">pescatarian</strong> +{" "}
                <strong className="text-[#221d19]">no eggs</strong> restricts the library to 4 dishes.
                Repast will not silently insert meals that break your rules.
              </p>
            </div>

            {/* Diagnostic breakdown */}
            <div className="space-y-2.5 mb-6 text-[13px]">
              <div className="flex items-center justify-between pb-2 border-b border-[#ede6dc]">
                <span className="text-[#6e655c]">Diets & rules applied</span>
                <span className="font-semibold text-[#221d19]">Pescatarian, No eggs</span>
              </div>
              <div className="flex items-center justify-between pb-2 border-b border-[#ede6dc]">
                <span className="text-[#6e655c]">Max cooking time</span>
                <span className="font-semibold text-[#c2402f]">15 minutes</span>
              </div>
              <div className="flex items-center justify-between pb-2 border-b border-[#ede6dc]">
                <span className="text-[#6e655c]">Carb ceiling</span>
                <span className="font-semibold text-[#221d19]">20g daily (met)</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#6e655c]">Bottleneck rule</span>
                <span className="font-bold text-[#c05621]">15-minute prep limit</span>
              </div>
            </div>

            {/* Action button matching real app */}
            <button
              onClick={() => setAdjusted(true)}
              className="w-full py-3.5 px-4 rounded-[14px] bg-[#c05621] hover:bg-[#98421a] text-white font-bold text-[14px] transition-all flex items-center justify-center gap-2 shadow-[0_4px_14px_rgba(192,86,33,0.3)]"
            >
              <span>Adjust — allow 45-minute meals</span>
              <span className="text-white/80 font-normal text-[12px]">(+11 dishes)</span>
            </button>
          </div>
        ) : (
          <div>
            <div className="rounded-[16px] bg-[#f0f6f8] border border-[#d2e5ea] p-4 mb-5">
              <p className="text-[15px] font-bold text-[#2e6e7e] leading-snug">
                Week successfully generated.
              </p>
              <p className="text-[13px] text-[#6e655c] mt-1.5 leading-relaxed">
                Allowing up to 45-minute meals unlocked 11 eligible pescatarian recipes without eggs.
                All 7 days remain strictly under 20g net carbs.
              </p>
            </div>

            <div className="space-y-2.5 mb-6 text-[13px]">
              <div className="flex items-center justify-between pb-2 border-b border-[#ede6dc]">
                <span className="text-[#6e655c]">Eligible recipes</span>
                <span className="font-semibold text-[#2e6e7e]">15 available (6 needed)</span>
              </div>
              <div className="flex items-center justify-between pb-2 border-b border-[#ede6dc]">
                <span className="text-[#6e655c]">Daily carb range</span>
                <span className="font-semibold text-[#221d19]">16.4g – 19.8g</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#6e655c]">Shopping list status</span>
                <span className="font-semibold text-[#221d19]">Ready (grouped by aisle)</span>
              </div>
            </div>

            <button
              onClick={() => setAdjusted(false)}
              className="w-full py-3 px-4 rounded-[14px] bg-[#f0ebe2] hover:bg-[#e6dfd5] text-[#221d19] font-medium text-[13px] transition-colors"
            >
              Reset refusal demonstration
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
