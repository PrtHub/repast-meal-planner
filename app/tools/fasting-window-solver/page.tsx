"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AppleIcon from "@/components/AppleIcon";

type FastingProtocol = "16_8" | "18_6" | "20_4" | "omad";

export default function FastingWindowSolverPage() {
  const [protocol, setProtocol] = useState<FastingProtocol>("16_8");
  const [firstMealHour, setFirstMealHour] = useState<number>(12); // 12:00 PM
  const [dailyCalories, setDailyCalories] = useState<number>(1800);
  const [dailyProtein, setDailyProtein] = useState<number>(130);
  const [workoutTiming, setWorkoutTiming] = useState<string>("fasted_morning");

  // Determine window length
  let windowHours = 8;
  if (protocol === "18_6") windowHours = 6;
  if (protocol === "20_4") windowHours = 4;
  if (protocol === "omad") windowHours = 1;

  const lastMealHour = (firstMealHour + windowHours) % 24;

  const formatHour = (h: number) => {
    const period = h >= 12 ? "PM" : "AM";
    const displayHour = h % 12 === 0 ? 12 : h % 12;
    return `${displayHour}:00 ${period}`;
  };

  // 40/60 Asymmetric Biphasic Macro Split
  const meal1Ratio = protocol === "omad" ? 1.0 : 0.4;
  const meal2Ratio = protocol === "omad" ? 0.0 : 0.6;

  const meal1Cals = Math.round(dailyCalories * meal1Ratio);
  const meal1Protein = Math.round(dailyProtein * meal1Ratio);
  const meal1Fat = Math.round((meal1Cals - meal1Protein * 4 - 20) / 9); // assume ~5g net carbs (20 kcal)

  const meal2Cals = Math.round(dailyCalories * meal2Ratio);
  const meal2Protein = Math.round(dailyProtein * meal2Ratio);
  const meal2Fat = Math.round((meal2Cals - meal2Protein * 4 - 30) / 9); // assume ~7.5g net carbs (30 kcal)

  return (
    <div className="min-h-screen bg-[#f7f4ee] text-[#221d19]">
      <Navbar />

      <main className="max-w-5xl mx-auto px-6 py-16">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-[12px] text-[#6e655c] mb-6">
          <Link href="/" className="hover:text-[#221d19]">Home</Link>
          <span>/</span>
          <Link href="/tools" className="hover:text-[#221d19]">Tools</Link>
          <span>/</span>
          <span className="text-[#221d19] font-medium">Fasting & Keto Window Solver</span>
        </div>

        {/* Hero Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fdf2ea] text-[#c05621] text-[11px] font-bold uppercase tracking-[1.4px] mb-3">
            <span>CIRCADIAN CHRONO-NUTRITION</span>
          </div>
          <h1 className="text-[38px] sm:text-[50px] font-serif-display font-normal tracking-[-1px] leading-[1.05] text-[#221d19] mb-4">
            Intermittent Fasting & Macro Window Solver
          </h1>
          <p className="text-[15px] sm:text-[17px] leading-[26px] text-[#6e655c]">
            Compressing your macros into a 6 or 8-hour feeding window requires surgical nutrient density. Calculate your 40/60 asymmetric meal allocation to prevent midday brain fog and hit your protein floor without stomach bloat.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Controls Column */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-[24px] border border-[#e6dfd5] shadow-xs space-y-6">
            <h2 className="text-[18px] font-bold text-[#221d19] border-b border-[#ede6dc] pb-3">
              Fasting Protocol Setup
            </h2>

            {/* Protocol Selector */}
            <div>
              <label className="block text-[13px] font-bold text-[#221d19] mb-2">
                Fasting Protocol
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[12px]">
                {[
                  { id: "16_8", label: "16:8", sub: "8h Window" },
                  { id: "18_6", label: "18:6", sub: "6h Window" },
                  { id: "20_4", label: "20:4", sub: "Warrior (4h)" },
                  { id: "omad", label: "23:1", sub: "OMAD (1h)" },
                ].map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setProtocol(p.id as FastingProtocol)}
                    className={`p-2.5 rounded-xl border text-center transition-all ${
                      protocol === p.id
                        ? "bg-[#221d19] text-white border-[#221d19] shadow-xs"
                        : "bg-[#fbf9f5] text-[#6e655c] border-[#e6dfd5] hover:border-[#c05621]/40"
                    }`}
                  >
                    <div className="font-bold">{p.label}</div>
                    <div className="text-[10px] opacity-75 mt-0.5">{p.sub}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Fast-Breaker Time */}
            <div>
              <div className="flex justify-between text-[13px] font-semibold mb-2">
                <span className="text-[#221d19]">Fast-Breaker (First Meal)</span>
                <span className="text-[#c05621] font-bold font-mono">
                  {formatHour(firstMealHour)}
                </span>
              </div>
              <input
                type="range"
                min={10}
                max={16}
                step={1}
                value={firstMealHour}
                onChange={(e) => setFirstMealHour(Number(e.target.value))}
                className="w-full accent-[#c05621] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-[#8a7f72] mt-1">
                <span>10:00 AM</span>
                <span>12:00 PM</span>
                <span>2:00 PM</span>
                <span>4:00 PM</span>
              </div>
            </div>

            {/* Daily Caloric Ceiling */}
            <div>
              <div className="flex justify-between text-[13px] font-semibold mb-2">
                <span className="text-[#221d19]">Daily Calorie Target</span>
                <span className="text-[#c05621] font-bold font-mono">
                  {dailyCalories.toLocaleString()} kcal
                </span>
              </div>
              <input
                type="range"
                min={1200}
                max={2800}
                step={50}
                value={dailyCalories}
                onChange={(e) => setDailyCalories(Number(e.target.value))}
                className="w-full accent-[#c05621] cursor-pointer"
              />
            </div>

            {/* Daily Protein Floor */}
            <div>
              <div className="flex justify-between text-[13px] font-semibold mb-2">
                <span className="text-[#221d19]">Daily Protein Floor</span>
                <span className="text-[#c05621] font-bold font-mono">
                  {dailyProtein}g
                </span>
              </div>
              <input
                type="range"
                min={80}
                max={220}
                step={5}
                value={dailyProtein}
                onChange={(e) => setDailyProtein(Number(e.target.value))}
                className="w-full accent-[#c05621] cursor-pointer"
              />
            </div>

            {/* Workout Timing */}
            <div>
              <label className="block text-[13px] font-bold text-[#221d19] mb-2">
                Daily Workout Timing
              </label>
              <div className="grid grid-cols-2 gap-2 text-[12px]">
                {[
                  { id: "fasted_morning", label: "Fasted Morning (7–9 AM)" },
                  { id: "midday_pre_meal", label: "Pre-Meal Midday (11 AM)" },
                  { id: "late_afternoon", label: "Mid-Window (4–6 PM)" },
                  { id: "rest_day", label: "Rest Day (No Training)" },
                ].map((w) => (
                  <button
                    key={w.id}
                    type="button"
                    onClick={() => setWorkoutTiming(w.id)}
                    className={`px-3 py-2 rounded-xl border text-left text-[12px] font-medium transition-all ${
                      workoutTiming === w.id
                        ? "bg-[#fdf2ea] border-[#c05621] text-[#221d19]"
                        : "bg-[#fbf9f5] border-[#e6dfd5] text-[#6e655c]"
                    }`}
                  >
                    {w.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Column */}
          <div className="lg:col-span-6 space-y-6">
            {/* 24-Hour Timeline Visual Card */}
            <div className="p-6 sm:p-8 rounded-[24px] bg-[#221d19] text-[#fff8ee] shadow-md">
              <span className="text-[10px] font-bold uppercase tracking-[1.4px] text-[#c05621] block mb-2">
                CIRCADIAN FASTING MATRIX
              </span>
              <h3 className="text-[22px] sm:text-[26px] font-serif-display font-normal mb-4">
                Your Feeding & Fasting Schedule
              </h3>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 mb-6 space-y-3">
                <div className="flex items-center justify-between text-[13px]">
                  <span className="text-[#c5bcb0]">⚡ Fasting Duration:</span>
                  <span className="font-bold text-white font-mono">
                    {24 - windowHours} Hours Fasted
                  </span>
                </div>
                <div className="flex items-center justify-between text-[13px]">
                  <span className="text-[#c5bcb0]">🍽️ Feeding Window:</span>
                  <span className="font-bold text-[#f7ad86] font-mono">
                    {formatHour(firstMealHour)} – {formatHour(lastMealHour)} ({windowHours}h)
                  </span>
                </div>
                <div className="flex items-center justify-between text-[13px]">
                  <span className="text-[#c5bcb0]">🌙 Autophagy Window:</span>
                  <span className="font-bold text-[#b4d3b2] font-mono">
                    Deep Fasting from Hour 12+
                  </span>
                </div>
              </div>

              {/* Asymmetric Biphasic Allocation */}
              <div className="space-y-4">
                <div className="text-[11px] font-bold uppercase tracking-[1px] text-[#c5bcb0]">
                  Asymmetric Meal Distribution (40/60 Split)
                </div>

                {/* Meal 1 */}
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white text-[14px]">
                      Meal 1: Fast-Breaker ({formatHour(firstMealHour)})
                    </span>
                    <span className="text-[11px] text-[#c05621] bg-[#c05621]/20 px-2.5 py-0.5 rounded-full font-bold">
                      {protocol === "omad" ? "100%" : "40% Target"}
                    </span>
                  </div>
                  <div className="text-[13px] font-mono text-[#f7ad86]">
                    {meal1Protein}g Protein · {meal1Fat}g Fat · &lt;5g Net Carbs · ({meal1Cals} kcal)
                  </div>
                  <p className="text-[11px] text-[#c5bcb0] leading-relaxed pt-1">
                    Light, moderate-fat protein anchor. Prevents reactive hypoglycemia and eliminates postprandial 2 PM somnolence.
                  </p>
                </div>

                {/* Meal 2 */}
                {protocol !== "omad" && (
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-white text-[14px]">
                        Meal 2: Dinner Anchor ({formatHour(lastMealHour)})
                      </span>
                      <span className="text-[11px] text-[#b4d3b2] bg-[#b4d3b2]/20 px-2.5 py-0.5 rounded-full font-bold">
                        60% Target
                      </span>
                    </div>
                    <div className="text-[13px] font-mono text-[#b4d3b2]">
                      {meal2Protein}g Protein · {meal2Fat}g Fat · &lt;8g Net Carbs · ({meal2Cals} kcal)
                    </div>
                    <p className="text-[11px] text-[#c5bcb0] leading-relaxed pt-1">
                      Substantial caloric and mineral anchor. Reaches leucine threshold, promotes deep sleep, and maintains satiety throughout the night.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Fasting Hydration Protocols */}
            <div className="p-6 rounded-[22px] bg-white border border-[#e6dfd5] shadow-xs">
              <span className="text-[10px] font-bold uppercase tracking-[1.4px] text-[#c05621] block mb-2">
                ZERO-INSULIN FASTING PROTOCOL
              </span>
              <h4 className="text-[16px] font-bold text-[#221d19] mb-2">
                What Can You Drink During Fasting Hours?
              </h4>
              <ul className="text-[13px] space-y-1.5 text-[#6e655c]">
                <li>✓ <strong>Water & Sparkling Mineral Water:</strong> Unlimited. Essential for blood volume.</li>
                <li>✓ <strong>Black Coffee & Plain Green Tea:</strong> Enhances hepatic autophagy and AMPK.</li>
                <li>✓ <strong>Pure Unrefined Salt & Electrolytes:</strong> Take 500mg sodium in water at 9:00 AM to blunt morning lightheadedness.</li>
                <li>⚠️ <strong>Bone Broth & Heavy Cream:</strong> Contains amino acids and fats that trigger mTOR and halt autophagy. Save for feeding window.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* App Bridge Banner */}
        <div className="p-8 sm:p-10 rounded-[28px] bg-[#221d19] text-[#fff8ee] text-center shadow-lg">
          <span className="text-[10px] font-bold uppercase tracking-[1.4px] text-[#c05621] block mb-2">
            ON-DEVICE FASTING INTEGRATION
          </span>
          <h3 className="text-[26px] sm:text-[34px] font-serif-display font-normal mb-3 leading-snug">
            Sync your keto meal plans with your fasting timer.
          </h3>
          <p className="text-[14px] sm:text-[15px] text-[#c5bcb0] max-w-lg mx-auto mb-7 leading-relaxed">
            Repast automatically models 16:8 or 18:6 meal compression, allocating dense protein into two verified meals on your iPhone.
          </p>
          <a
            href="https://apps.apple.com/app/id6807802664"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full btn-primary text-[14px] font-medium"
          >
            <AppleIcon className="w-4 h-4 fill-current shrink-0" />
            <span>Plan Fasting Keto on iPhone</span>
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
