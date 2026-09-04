"use client";

import React, { useState } from "react";

interface TodayScreenMockupProps {
  interactive?: boolean;
}

export default function TodayScreenMockup({ interactive = true }: TodayScreenMockupProps) {
  const [breakfastTicked, setBreakfastTicked] = useState(true);
  const [lunchTicked, setLunchTicked] = useState(true);
  const [dinnerTicked, setDinnerTicked] = useState(false);

  return (
    <div className="flex flex-col h-full text-[#221d19] font-sans">
      {/* App Header */}
      <div className="flex items-center justify-between border-b border-[#e6dfd5] pb-2.5 mb-3">
        <div>
          <span className="block text-[10px] uppercase font-bold tracking-[1.4px] text-[#6e655c]">
            WEEK 1 · DAY 1
          </span>
          <p className="text-[20px] font-serif font-normal leading-tight text-[#221d19]">
            Monday, Oct 14
          </p>
        </div>
        <div className="text-right">
          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold bg-[#f0e4d8] text-[#98421a]">
            Keto · 20g
          </span>
        </div>
      </div>

      {/* Carb Ceiling Gauge Card */}
      <div className="rounded-[18px] bg-white p-3.5 shadow-[0_4px_12px_rgba(34,29,25,0.05)] border border-[#ede6dc] mb-3">
        <div className="flex items-baseline justify-between mb-1.5">
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] uppercase font-bold tracking-[1.4px] text-[#6e655c]">
              CARB CEILING
            </span>
            <span className="text-[10px] font-medium text-[#6e655c] bg-[#f0ebe2] px-1.5 py-0.2 rounded">
              HARD CAP
            </span>
          </div>
          <div className="text-right">
            <span className="text-[17px] font-bold tabular-nums text-[#221d19]">18g</span>
            <span className="text-[13px] text-[#6e655c]"> / 20g max</span>
          </div>
        </div>

        {/* Progress bar: 90% full, calm state */}
        <div className="h-2 w-full bg-[#f0ebe2] rounded-full overflow-hidden mb-2.5">
          <div
            className="h-full rounded-full bg-[#6e655c] transition-all duration-300"
            style={{ width: "90%" }}
          />
        </div>

        {/* Secondary macro breakdown */}
        <div className="grid grid-cols-3 gap-2 pt-1 border-t border-[#f0ebe2] text-[11px]">
          <div>
            <span className="text-[#6e655c] block text-[9px] uppercase font-bold tracking-[1.2px]">PROTEIN</span>
            <span className="font-semibold text-[#2e6e7e] tabular-nums">115g</span>
          </div>
          <div>
            <span className="text-[#6e655c] block text-[9px] uppercase font-bold tracking-[1.2px]">FAT</span>
            <span className="font-semibold text-[#c99a2e] tabular-nums">138g</span>
          </div>
          <div>
            <span className="text-[#6e655c] block text-[9px] uppercase font-bold tracking-[1.2px]">ENERGY</span>
            <span className="font-semibold text-[#221d19] tabular-nums">1,780 kcal</span>
          </div>
        </div>
      </div>

      {/* Next Up Hero Card */}
      <div className="rounded-[18px] bg-white p-3 shadow-[0_6px_16px_rgba(34,29,25,0.06)] border border-[#ede6dc] mb-3">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] uppercase font-bold tracking-[1.4px] text-[#c05621]">
            NEXT UP · DINNER
          </span>
          <span className="text-[11px] font-medium text-[#6e655c]">
            25 min · 1 cook, 2 sittings
          </span>
        </div>

        <div className="flex gap-3 items-center">
          {/* Salmon radial gradient artwork (§7) */}
          <div className="w-[68px] h-[68px] rounded-[14px] dish-gradient-salmon flex-shrink-0 shadow-inner ring-1 ring-black/10 flex items-end p-1.5">
            <span className="text-[9px] font-bold text-white/95 drop-shadow bg-black/40 px-1 py-0.5 rounded">
              USDA 173688
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[15px] font-bold leading-snug text-[#221d19] truncate">
              Pan-seared Salmon with Asparagus
            </p>
            <p className="text-[12px] text-[#6e655c] mt-0.5">
              Butter, garlic, sea salt · 3g net carbs
            </p>
            <div className="flex items-center gap-2 mt-1.5">
              <span className="inline-block text-[10px] font-semibold text-[#2e6e7e] bg-[#f0f6f8] px-1.5 py-0.5 rounded">
                42g protein
              </span>
              <span className="inline-block text-[10px] font-semibold text-[#6e655c] bg-[#f0ebe2] px-1.5 py-0.5 rounded">
                Cooks 2 portions
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Meal List with Tick States */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-1.5 px-0.5">
            <span className="text-[10px] uppercase font-bold tracking-[1.4px] text-[#6e655c]">
              TODAY&apos;S SCHEDULE
            </span>
            <span className="text-[10px] font-medium text-[#6e655c]">
              Only ticked meals count
            </span>
          </div>

          <div className="space-y-1.5">
            {/* Breakfast Item */}
            <div
              onClick={() => interactive && setBreakfastTicked(!breakfastTicked)}
              className={`flex items-center justify-between p-2 rounded-[12px] border transition-colors ${
                interactive ? "cursor-pointer" : ""
              } ${
                breakfastTicked
                  ? "bg-[#fdf6f1] border-[#f0e4d8]"
                  : "bg-white border-[#ede6dc]"
              }`}
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <div
                  className={`w-4 h-4 rounded-[5px] flex items-center justify-center transition-colors ${
                    breakfastTicked
                      ? "bg-[#c05621] text-white"
                      : "border border-[#c5bcb0] bg-white"
                  }`}
                >
                  {breakfastTicked && (
                    <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 20 20">
                      <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                    </svg>
                  )}
                </div>
                <div className="truncate">
                  <p
                    className={`text-[13px] font-medium truncate ${
                      breakfastTicked ? "text-[#221d19] line-through opacity-75" : "text-[#221d19]"
                    }`}
                  >
                    Eggs with Avocado & Spinach
                  </p>
                  <p className="text-[11px] text-[#6e655c]">Breakfast · 2g carbs</p>
                </div>
              </div>
              <span className="text-[11px] font-semibold text-[#6e655c] tabular-nums">
                Eaten
              </span>
            </div>

            {/* Lunch Item */}
            <div
              onClick={() => interactive && setLunchTicked(!lunchTicked)}
              className={`flex items-center justify-between p-2 rounded-[12px] border transition-colors ${
                interactive ? "cursor-pointer" : ""
              } ${
                lunchTicked
                  ? "bg-[#fdf6f1] border-[#f0e4d8]"
                  : "bg-white border-[#ede6dc]"
              }`}
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <div
                  className={`w-4 h-4 rounded-[5px] flex items-center justify-center transition-colors ${
                    lunchTicked
                      ? "bg-[#c05621] text-white"
                      : "border border-[#c5bcb0] bg-white"
                  }`}
                >
                  {lunchTicked && (
                    <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 20 20">
                      <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                    </svg>
                  )}
                </div>
                <div className="truncate">
                  <p
                    className={`text-[13px] font-medium truncate ${
                      lunchTicked ? "text-[#221d19] line-through opacity-75" : "text-[#221d19]"
                    }`}
                  >
                    Cobb Salad with Bacon & Blue Cheese
                  </p>
                  <p className="text-[11px] text-[#6e655c]">Lunch · 5g carbs</p>
                </div>
              </div>
              <span className="text-[11px] font-semibold text-[#6e655c] tabular-nums">
                Eaten
              </span>
            </div>

            {/* Dinner Item */}
            <div
              onClick={() => interactive && setDinnerTicked(!dinnerTicked)}
              className={`flex items-center justify-between p-2 rounded-[12px] border transition-colors ${
                interactive ? "cursor-pointer" : ""
              } ${
                dinnerTicked
                  ? "bg-[#fdf6f1] border-[#f0e4d8]"
                  : "bg-white border-[#ede6dc]"
              }`}
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <div
                  className={`w-4 h-4 rounded-[5px] flex items-center justify-center transition-colors ${
                    dinnerTicked
                      ? "bg-[#c05621] text-white"
                      : "border border-[#c5bcb0] bg-white"
                  }`}
                >
                  {dinnerTicked && (
                    <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 20 20">
                      <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                    </svg>
                  )}
                </div>
                <div className="truncate">
                  <p
                    className={`text-[13px] font-semibold truncate ${
                      dinnerTicked ? "text-[#221d19] line-through opacity-75" : "text-[#221d19]"
                    }`}
                  >
                    Pan-seared Salmon with Asparagus
                  </p>
                  <p className="text-[11px] text-[#6e655c]">Dinner · 3g carbs</p>
                </div>
              </div>
              <span className="text-[11px] font-medium text-[#c05621] tabular-nums">
                {dinnerTicked ? "Eaten" : "Next"}
              </span>
            </div>
          </div>
        </div>

        {/* Footer Note from App Copy */}
        <p className="text-[11px] text-[#6e655c] text-center mt-2 pt-1.5 border-t border-[#ede6dc]">
          Your plan ends Sunday. The next week starts from Saturday’s shop.
        </p>
      </div>
    </div>
  );
}
