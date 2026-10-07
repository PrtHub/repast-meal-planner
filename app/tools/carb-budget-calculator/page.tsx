"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AppleIcon from "@/components/AppleIcon";

type DietType = "keto" | "low_carb" | "high_protein" | "paleo" | "mediterranean";
type ActivityType = "sitting" | "light" | "active" | "very_active";

export default function CarbBudgetCalculatorPage() {
  const [weightKg, setWeightKg] = useState<number>(78);
  const [heightCm, setHeightCm] = useState<number>(175);
  const [age, setAge] = useState<number>(34);
  const [gender, setGender] = useState<"male" | "female">("male");
  const [activity, setActivity] = useState<ActivityType>("sitting");
  const [diet, setDiet] = useState<DietType>("keto");
  const [goal, setGoal] = useState<"lose" | "maintain" | "gain">("lose");

  // Mifflin-St Jeor Formula
  const bmr =
    gender === "male"
      ? 10 * weightKg + 6.25 * heightCm - 5 * age + 5
      : 10 * weightKg + 6.25 * heightCm - 5 * age - 161;

  const activityMultipliers = {
    sitting: 1.2,
    light: 1.375,
    active: 1.55,
    very_active: 1.725,
  };

  const tdee = Math.round(bmr * activityMultipliers[activity]);

  // Target calories based on goal
  let targetCalories = tdee;
  if (goal === "lose") {
    targetCalories = Math.round(tdee * 0.8); // 20% deficit
  } else if (goal === "gain") {
    targetCalories = Math.round(tdee * 1.1); // 10% surplus
  }

  // Protein floor per kg (1.6g/kg standard, 2.0g/kg for high protein)
  const proteinPerKg = diet === "high_protein" ? 2.0 : 1.6;
  const proteinGrams = Math.round(weightKg * proteinPerKg);
  const proteinCalories = proteinGrams * 4;

  // Carb Ceiling calculation (§5.2)
  let carbGrams = 20; // Default keto 20g net
  if (diet === "low_carb") {
    carbGrams = 75; // 75g net cap
  } else if (diet === "high_protein") {
    carbGrams = Math.round((targetCalories * 0.2) / 4);
  } else if (diet === "paleo" || diet === "mediterranean") {
    carbGrams = Math.round((targetCalories * 0.25) / 4);
  }
  const carbCalories = carbGrams * 4;

  // Remaining calories to Fat (9 kcal/g)
  const remainingCalories = Math.max(0, targetCalories - (proteinCalories + carbCalories));
  const fatGrams = Math.round(remainingCalories / 9);

  return (
    <div className="min-h-screen bg-[#f7f4ee] text-[#221d19]">
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 py-16">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-[12px] text-[#6e655c] mb-6">
          <Link href="/" className="hover:text-[#221d19]">Home</Link>
          <span>/</span>
          <Link href="/tools" className="hover:text-[#221d19]">Tools</Link>
          <span>/</span>
          <span className="text-[#221d19] font-medium">Carb Ceiling Calculator</span>
        </div>

        <div className="max-w-2xl mb-10">
          <span className="text-[11px] font-bold uppercase tracking-[1.4px] text-[#c05621] block mb-2">
            MATHEMATICAL MODEL
          </span>
          <h1 className="text-[38px] sm:text-[50px] font-serif-display font-normal tracking-[-1px] leading-[1.05] text-[#221d19] mb-4">
            Carb Ceiling & Macro Budget Calculator
          </h1>
          <p className="text-[15px] sm:text-[16px] leading-[25px] text-[#6e655c]">
            Calculates your basal metabolic rate using Mifflin–St Jeor, applies your protein floor,
            and establishes your hard daily net carb ceiling across 5 dietary models.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Controls */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-7 rounded-[22px] border border-[#e6dfd5] shadow-sm space-y-5">
            <h2 className="text-[18px] font-bold text-[#221d19] border-b border-[#ede6dc] pb-3">
              Your Parameters
            </h2>

            {/* Weight */}
            <div>
              <div className="flex justify-between text-[13px] font-semibold mb-1.5">
                <span>Bodyweight</span>
                <span className="tabular-nums text-[#c05621]">{weightKg} kg</span>
              </div>
              <input
                type="range"
                min="45"
                max="160"
                value={weightKg}
                onChange={(e) => setWeightKg(Number(e.target.value))}
                className="w-full accent-[#c05621]"
              />
            </div>

            {/* Height & Age */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[12px] font-medium text-[#6e655c] mb-1">Height (cm)</label>
                <input
                  type="number"
                  value={heightCm}
                  onChange={(e) => setHeightCm(Number(e.target.value))}
                  className="w-full p-2.5 rounded-[10px] border border-[#e6dfd5] text-[14px] bg-[#f7f4ee]"
                />
              </div>
              <div>
                <label className="block text-[12px] font-medium text-[#6e655c] mb-1">Age</label>
                <input
                  type="number"
                  value={age}
                  onChange={(e) => setAge(Number(e.target.value))}
                  className="w-full p-2.5 rounded-[10px] border border-[#e6dfd5] text-[14px] bg-[#f7f4ee]"
                />
              </div>
            </div>

            {/* Sex */}
            <div>
              <label className="block text-[12px] font-medium text-[#6e655c] mb-1.5">Biological Sex</label>
              <div className="grid grid-cols-2 gap-2 text-[13px]">
                <button
                  type="button"
                  onClick={() => setGender("male")}
                  className={`py-2 rounded-[10px] border font-semibold ${
                    gender === "male"
                      ? "bg-[#221d19] text-white border-[#221d19]"
                      : "bg-[#f7f4ee] text-[#6e655c] border-[#e6dfd5]"
                  }`}
                >
                  Male
                </button>
                <button
                  type="button"
                  onClick={() => setGender("female")}
                  className={`py-2 rounded-[10px] border font-semibold ${
                    gender === "female"
                      ? "bg-[#221d19] text-white border-[#221d19]"
                      : "bg-[#f7f4ee] text-[#6e655c] border-[#e6dfd5]"
                  }`}
                >
                  Female
                </button>
              </div>
            </div>

            {/* Diet Model */}
            <div>
              <label className="block text-[12px] font-medium text-[#6e655c] mb-1.5">Diet Protocol</label>
              <select
                value={diet}
                onChange={(e) => setDiet(e.target.value as DietType)}
                className="w-full p-2.5 rounded-[10px] border border-[#e6dfd5] text-[13px] bg-[#f7f4ee] font-medium"
              >
                <option value="keto">Keto (Hard 20g Net Carb Ceiling)</option>
                <option value="low_carb">Low-Carb (75g Net Carb Ceiling)</option>
                <option value="high_protein">High-Protein (30% Protein)</option>
                <option value="paleo">Paleo Whole Foods</option>
                <option value="mediterranean">Mediterranean Low-Carb</option>
              </select>
            </div>

            {/* Activity Level */}
            <div>
              <label className="block text-[12px] font-medium text-[#6e655c] mb-1.5">Activity Level</label>
              <select
                value={activity}
                onChange={(e) => setActivity(e.target.value as ActivityType)}
                className="w-full p-2.5 rounded-[10px] border border-[#e6dfd5] text-[13px] bg-[#f7f4ee] font-medium"
              >
                <option value="sitting">Sitting (Desk job, sedentary) · 1.2×</option>
                <option value="light">Light Activity (1-3 light sessions/wk) · 1.375×</option>
                <option value="active">Active (Daily training or active job) · 1.55×</option>
                <option value="very_active">Very Active (Heavy manual labour) · 1.725×</option>
              </select>
            </div>

            {/* Primary Goal */}
            <div>
              <label className="block text-[12px] font-medium text-[#6e655c] mb-1.5">Target Direction</label>
              <div className="grid grid-cols-3 gap-2 text-[12px]">
                {(["lose", "maintain", "gain"] as const).map((g) => (
                  <button
                    key={g}
                    type="button"
                    onClick={() => setGoal(g)}
                    className={`py-2 rounded-[10px] border font-semibold capitalize ${
                      goal === g
                        ? "bg-[#c05621] text-white border-[#c05621]"
                        : "bg-[#f7f4ee] text-[#6e655c] border-[#e6dfd5]"
                    }`}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Result Output */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div className="bg-white p-6 sm:p-7 rounded-[22px] border border-[#e6dfd5] shadow-sm mb-6">
              <span className="text-[10px] font-bold uppercase tracking-[1.4px] text-[#6e655c] block mb-2">
                DAILY CEILING CALIBRATION
              </span>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-[44px] font-serif-display text-[#221d19] leading-none tabular-nums">
                  {carbGrams}g
                </span>
                <span className="text-[15px] font-medium text-[#6e655c]">
                  {diet === "keto" || diet === "low_carb" ? "Hard Net Carb Ceiling" : "Target Carbs"}
                </span>
              </div>

              {/* Energy stats */}
              <div className="grid grid-cols-2 gap-3 py-3 border-y border-[#ede6dc] mb-5 text-[13px]">
                <div>
                  <span className="text-[#6e655c] block text-[11px]">Calculated TDEE:</span>
                  <span className="font-bold text-[#221d19] tabular-nums">{tdee} kcal</span>
                </div>
                <div>
                  <span className="text-[#6e655c] block text-[11px]">Target Calorie Budget:</span>
                  <span className="font-bold text-[#c05621] tabular-nums">{targetCalories} kcal</span>
                </div>
              </div>

              {/* Macro breakdown */}
              <div className="space-y-3 mb-6">
                <div>
                  <div className="flex justify-between text-[12px] font-semibold mb-1">
                    <span className="text-[#6e655c]">NET CARBS (CAP)</span>
                    <span className="text-[#221d19] tabular-nums">{carbGrams}g ({carbCalories} kcal)</span>
                  </div>
                  <div className="h-2 w-full bg-[#f0ebe2] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#6e655c] rounded-full"
                      style={{ width: `${Math.min(100, Math.round((carbCalories / targetCalories) * 100))}%` }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[12px] font-semibold mb-1">
                    <span className="text-[#2e6e7e]">PROTEIN FLOOR</span>
                    <span className="text-[#221d19] tabular-nums">{proteinGrams}g ({proteinCalories} kcal)</span>
                  </div>
                  <div className="h-2 w-full bg-[#f0ebe2] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#2e6e7e] rounded-full"
                      style={{ width: `${Math.min(100, Math.round((proteinCalories / targetCalories) * 100))}%` }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[12px] font-semibold mb-1">
                    <span className="text-[#c99a2e]">HEALTHY FATS</span>
                    <span className="text-[#221d19] tabular-nums">{fatGrams}g ({remainingCalories} kcal)</span>
                  </div>
                  <div className="h-2 w-full bg-[#f0ebe2] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#c99a2e] rounded-full"
                      style={{ width: `${Math.min(100, Math.round((remainingCalories / targetCalories) * 100))}%` }}
                    />
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-[14px] bg-[#fdf6f1] border border-[#f0e4d8] text-[13px] text-[#98421a] leading-relaxed">
                <strong>Why the carb cap is a ceiling:</strong> Repast will never generate a day
                that exceeds {carbGrams}g. In our 16,933 test simulations, overage is strictly 0g.
              </div>
            </div>

            {/* App Bridge Hook */}
            <div className="p-6 rounded-[22px] bg-[#221d19] text-[#fff8ee]">
              <span className="text-[10px] font-bold uppercase tracking-[1.4px] text-[#c05621] block mb-2">
                AUTOMATED SOLVER
              </span>
              <h3 className="text-[20px] font-serif-display font-normal mb-2">
                Turn these numbers into 7 days of real meals.
              </h3>
              <p className="text-[13px] text-[#c5bcb0] leading-[20px] mb-4">
                The Repast iOS app takes your exact {targetCalories} kcal budget and {carbGrams}g carb ceiling,
                building a full week and one aisle-grouped shopping list. On-device only.
              </p>
              <a
                href="https://apps.apple.com/app/id6807802664"
                className="w-full py-3 rounded-[12px] btn-primary flex items-center justify-center gap-2 text-center text-[14px]"
              >
                <AppleIcon className="w-4 h-4 fill-current shrink-0" />
                <span>Build your plan on iPhone</span>
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
