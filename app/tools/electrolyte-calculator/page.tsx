"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AppleIcon from "@/components/AppleIcon";

type UnitSystem = "metric" | "imperial";

export default function ElectrolyteCalculatorPage() {
  const [unitSystem, setUnitSystem] = useState<UnitSystem>("metric");
  const [weightKg, setWeightKg] = useState<number>(78);
  const [netCarbTier, setNetCarbTier] = useState<number>(15); // 0, 15, 30, 75
  const [sweatMins, setSweatMins] = useState<number>(30); // 0 to 120
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([
    "headache",
  ]);

  const toggleSymptom = (id: string) => {
    if (selectedSymptoms.includes(id)) {
      setSelectedSymptoms(selectedSymptoms.filter((s) => s !== id));
    } else {
      setSelectedSymptoms([...selectedSymptoms, id]);
    }
  };

  // Convert weight for display
  const displayWeight =
    unitSystem === "metric" ? weightKg : Math.round(weightKg * 2.20462);

  const handleWeightChange = (val: number) => {
    if (unitSystem === "metric") {
      setWeightKg(val);
    } else {
      setWeightKg(Math.round(val / 2.20462));
    }
  };

  // Electrolyte Arithmetic (§ Clinical Renal Guidelines)
  // Baseline natriuresis of low insulin: 4,000mg base
  let sodiumTarget = 4000;
  if (netCarbTier === 0) {
    sodiumTarget += 1500; // Zero-carb natriuresis
  } else if (netCarbTier <= 20) {
    sodiumTarget += 1000; // Standard strict keto
  } else if (netCarbTier <= 50) {
    sodiumTarget += 500;
  }

  // Weight factor: +15mg per kg over 70kg
  if (weightKg > 70) {
    sodiumTarget += Math.round((weightKg - 70) * 15);
  }

  // Sweat rate: ~750mg sodium per 45 mins moderate-high sweat
  sodiumTarget += Math.round((sweatMins / 45) * 750);

  // Symptom escalations
  if (selectedSymptoms.includes("headache")) sodiumTarget += 600;
  if (selectedSymptoms.includes("fatigue")) sodiumTarget += 400;

  // Potassium targets
  let potassiumTarget = 2500;
  if (netCarbTier <= 20) potassiumTarget += 600;
  potassiumTarget += Math.round((sweatMins / 60) * 400);
  if (selectedSymptoms.includes("cramps")) potassiumTarget += 500;
  if (selectedSymptoms.includes("palpitations")) potassiumTarget += 400;

  // Magnesium targets
  let magnesiumTarget = 350;
  if (sweatMins >= 45) magnesiumTarget += 50;
  if (selectedSymptoms.includes("cramps")) magnesiumTarget += 100;
  if (selectedSymptoms.includes("constipation")) magnesiumTarget += 100;

  // Kitchen translations
  // 1 level tsp table/sea salt = 2,300mg elemental sodium
  const saltTeaspoons = (sodiumTarget / 2300).toFixed(1);
  // 1 cup standard salted chicken/beef bone broth = ~900mg sodium
  const boneBrothCups = (sodiumTarget * 0.4 / 900).toFixed(1);
  // Avocados needed for 50% potassium quota (1 medium avocado = 975mg)
  const avocadoEquivalent = (potassiumTarget * 0.4 / 975).toFixed(1);
  // Cooked spinach needed for 30% potassium quota (100g cooked spinach = ~558mg)
  const spinachGrams = Math.round((potassiumTarget * 0.3 / 558) * 100);

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
          <span className="text-[#221d19] font-medium">Keto Electrolyte Solver</span>
        </div>

        {/* Hero Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fdf2ea] text-[#c05621] text-[11px] font-bold uppercase tracking-[1.4px] mb-3">
            <span>CLINICAL RENAL MINERAL MODEL</span>
          </div>
          <h1 className="text-[38px] sm:text-[50px] font-serif-display font-normal tracking-[-1px] leading-[1.05] text-[#221d19] mb-4">
            Keto Electrolyte & Mineral Replenishment Solver
          </h1>
          <p className="text-[15px] sm:text-[17px] leading-[26px] text-[#6e655c]">
            Low baseline insulin causes your renal tubules to dump sodium and fluid. Calculate your exact elemental milligram requirements across sodium, potassium, and magnesium, translated into real whole foods and salt.
          </p>
        </div>

        {/* Interactive Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Controls Column */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-[24px] border border-[#e6dfd5] shadow-xs space-y-6">
            <div className="flex items-center justify-between border-b border-[#ede6dc] pb-4">
              <h2 className="text-[18px] font-bold text-[#221d19]">
                Your Metabolic Parameters
              </h2>
              {/* Unit Toggle */}
              <div className="inline-flex p-0.5 rounded-lg bg-[#f0eae0] text-[12px] font-semibold">
                <button
                  type="button"
                  onClick={() => setUnitSystem("metric")}
                  className={`px-3 py-1 rounded-md transition-all ${
                    unitSystem === "metric"
                      ? "bg-white text-[#221d19] shadow-xs"
                      : "text-[#6e655c]"
                  }`}
                >
                  Metric (kg)
                </button>
                <button
                  type="button"
                  onClick={() => setUnitSystem("imperial")}
                  className={`px-3 py-1 rounded-md transition-all ${
                    unitSystem === "imperial"
                      ? "bg-white text-[#221d19] shadow-xs"
                      : "text-[#6e655c]"
                  }`}
                >
                  Imperial (lbs)
                </button>
              </div>
            </div>

            {/* Daily Net Carbs Selection */}
            <div>
              <label className="block text-[13px] font-bold text-[#221d19] mb-2">
                Daily Carbohydrate Level
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[12px]">
                {[
                  { value: 0, label: "Zero-Carb", sub: "0g Carnivore" },
                  { value: 15, label: "Strict Keto", sub: "< 20g Net" },
                  { value: 30, label: "Moderate", sub: "25–40g Net" },
                  { value: 75, label: "Low-Carb", sub: "50–80g Net" },
                ].map((tier) => (
                  <button
                    key={tier.value}
                    type="button"
                    onClick={() => setNetCarbTier(tier.value)}
                    className={`p-2.5 rounded-xl border text-center transition-all ${
                      netCarbTier === tier.value
                        ? "bg-[#221d19] text-white border-[#221d19] shadow-xs"
                        : "bg-[#fbf9f5] text-[#6e655c] border-[#e6dfd5] hover:border-[#c05621]/40"
                    }`}
                  >
                    <div className="font-bold">{tier.label}</div>
                    <div className="text-[10px] opacity-75 mt-0.5">{tier.sub}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Body Weight Slider */}
            <div>
              <div className="flex justify-between text-[13px] font-semibold mb-2">
                <span className="text-[#221d19]">Body Weight</span>
                <span className="text-[#c05621] font-bold font-mono">
                  {displayWeight} {unitSystem === "metric" ? "kg" : "lbs"}
                </span>
              </div>
              <input
                type="range"
                min={unitSystem === "metric" ? 45 : 100}
                max={unitSystem === "metric" ? 140 : 310}
                value={displayWeight}
                onChange={(e) => handleWeightChange(Number(e.target.value))}
                className="w-full accent-[#c05621] cursor-pointer"
              />
            </div>

            {/* Sweat & Workout Duration */}
            <div>
              <div className="flex justify-between text-[13px] font-semibold mb-2">
                <span className="text-[#221d19]">Active Exercise & Sweat Duration</span>
                <span className="text-[#c05621] font-bold font-mono">
                  {sweatMins === 0 ? "Rest Day (0 min)" : `${sweatMins} mins`}
                </span>
              </div>
              <input
                type="range"
                min={0}
                max={120}
                step={15}
                value={sweatMins}
                onChange={(e) => setSweatMins(Number(e.target.value))}
                className="w-full accent-[#c05621] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-[#8a7f72] mt-1">
                <span>0 min</span>
                <span>30 min</span>
                <span>60 min</span>
                <span>90 min</span>
                <span>120+ min</span>
              </div>
            </div>

            {/* Current Symptoms Checklist */}
            <div>
              <label className="block text-[13px] font-bold text-[#221d19] mb-2">
                Active Symptoms (Escalates Target Dosages)
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[12px]">
                {[
                  { id: "headache", label: "Headache / Lightheadedness" },
                  { id: "cramps", label: "Muscle Twitches / Cramps" },
                  { id: "palpitations", label: "Heart Palpitations / Pounding" },
                  { id: "fatigue", label: "Heavy Legs / Lethargy" },
                  { id: "constipation", label: "Sluggish Bowel Motility" },
                ].map((symptom) => {
                  const active = selectedSymptoms.includes(symptom.id);
                  return (
                    <button
                      key={symptom.id}
                      type="button"
                      onClick={() => toggleSymptom(symptom.id)}
                      className={`px-3 py-2 rounded-xl border text-left flex items-center gap-2 transition-all ${
                        active
                          ? "bg-[#fdf2ea] border-[#c05621] text-[#221d19] font-medium"
                          : "bg-[#fbf9f5] border-[#e6dfd5] text-[#6e655c]"
                      }`}
                    >
                      <span className={`w-3.5 h-3.5 rounded-full flex items-center justify-center text-[10px] border shrink-0 ${
                        active ? "bg-[#c05621] border-[#c05621] text-white" : "border-[#ccc]"
                      }`}>
                        {active ? "✓" : ""}
                      </span>
                      <span className="text-[12px] leading-tight">{symptom.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Results Column */}
          <div className="lg:col-span-6 space-y-6">
            {/* The 3 Core Elemental Dosages */}
            <div className="p-6 sm:p-8 rounded-[24px] bg-[#221d19] text-[#fff8ee] shadow-md">
              <span className="text-[10px] font-bold uppercase tracking-[1.4px] text-[#c05621] block mb-2">
                DAILY ELEMENTAL QUOTA
              </span>
              <h3 className="text-[24px] sm:text-[28px] font-serif-display font-normal mb-6">
                Your Daily Mineral Blueprint
              </h3>

              <div className="grid grid-cols-3 gap-3 text-center border-b border-white/10 pb-6 mb-6">
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-[24px] sm:text-[30px] font-serif-display font-bold text-[#f7ad86]">
                    {sodiumTarget.toLocaleString()}
                  </div>
                  <div className="text-[11px] uppercase tracking-[1px] text-[#c5bcb0] mt-1 font-bold">
                    Sodium (mg)
                  </div>
                  <div className="text-[10px] text-[#8a7f72] mt-0.5">Elemental</div>
                </div>

                <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-[24px] sm:text-[30px] font-serif-display font-bold text-[#b4d3b2]">
                    {potassiumTarget.toLocaleString()}
                  </div>
                  <div className="text-[11px] uppercase tracking-[1px] text-[#c5bcb0] mt-1 font-bold">
                    Potassium (mg)
                  </div>
                  <div className="text-[10px] text-[#8a7f72] mt-0.5">Elemental</div>
                </div>

                <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-[24px] sm:text-[30px] font-serif-display font-bold text-[#b8d4e4]">
                    {magnesiumTarget}
                  </div>
                  <div className="text-[11px] uppercase tracking-[1px] text-[#c5bcb0] mt-1 font-bold">
                    Magnesium (mg)
                  </div>
                  <div className="text-[10px] text-[#8a7f72] mt-0.5">Chelated</div>
                </div>
              </div>

              {/* Kitchen Food Translations */}
              <div className="space-y-3 text-[13px] text-[#ddd5cb]">
                <div className="flex items-center justify-between py-1.5 border-b border-white/10">
                  <span className="flex items-center gap-2">
                    <span className="text-[#c05621] font-bold">🧂 Salt Translation:</span>
                    <span>Total Unrefined Salt</span>
                  </span>
                  <span className="font-mono font-bold text-white text-[14px]">
                    {saltTeaspoons} level tsp
                  </span>
                </div>

                <div className="flex items-center justify-between py-1.5 border-b border-white/10">
                  <span className="flex items-center gap-2">
                    <span className="text-[#c05621] font-bold">🍵 Broth Anchor:</span>
                    <span>Salted Bone Broth</span>
                  </span>
                  <span className="font-mono font-bold text-white text-[14px]">
                    {boneBrothCups} cups / day
                  </span>
                </div>

                <div className="flex items-center justify-between py-1.5 border-b border-white/10">
                  <span className="flex items-center gap-2">
                    <span className="text-[#c05621] font-bold">🥑 Whole-Food Potassium:</span>
                    <span>Hass Avocados</span>
                  </span>
                  <span className="font-mono font-bold text-white text-[14px]">
                    {avocadoEquivalent} avocados
                  </span>
                </div>

                <div className="flex items-center justify-between py-1.5">
                  <span className="flex items-center gap-2">
                    <span className="text-[#c05621] font-bold">🥬 Dark Greens Quota:</span>
                    <span>Steamed Spinach</span>
                  </span>
                  <span className="font-mono font-bold text-white text-[14px]">
                    {spinachGrams}g cooked
                  </span>
                </div>
              </div>
            </div>

            {/* Emergency Protocol Box */}
            <div className="p-6 rounded-[22px] bg-white border border-[#e6dfd5] shadow-xs">
              <span className="text-[10px] font-bold uppercase tracking-[1.4px] text-[#c05621] block mb-2">
                15-MINUTE EMERGENCY PROTOCOL
              </span>
              <h4 className="text-[16px] font-bold text-[#221d19] mb-2">
                Acute Dizziness or Throbbing Headache?
              </h4>
              <p className="text-[13px] leading-relaxed text-[#6e655c] mb-3">
                Dissolve 1/2 level teaspoon of unrefined sea salt (approx. 1,150mg elemental sodium) in 8 oz of warm water with a splash of fresh lemon juice, or drink 1 cup of hot salted broth.
              </p>
              <div className="text-[12px] font-medium text-[#221d19] bg-[#f9f6f0] p-3 rounded-xl border border-[#ece4d9]">
                ✓ In clinical trials, restoring circulating plasma volume resolves 85% of keto flu symptoms within 15–20 minutes.
              </div>
            </div>
          </div>
        </div>

        {/* Clinical Deep Dive Info Strip */}
        <div className="p-8 sm:p-10 rounded-[24px] bg-white border border-[#e6dfd5] shadow-xs mb-14 space-y-6">
          <h2 className="text-[24px] font-serif-display font-normal text-[#221d19]">
            The Physiology of Low-Carb Natriuresis
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-[14px] leading-relaxed text-[#6e655c]">
            <div>
              <h3 className="font-bold text-[#221d19] mb-2 text-[15px]">1. The Insulin-Renal Axis</h3>
              <p>
                Insulin stimulates epithelial sodium channels (ENaC) in the kidneys. Dropping carbs drops insulin, prompting your kidneys to dump up to 3,000mg of sodium and 4 lbs of extracellular fluid in 72 hours.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-[#221d19] mb-2 text-[15px]">2. Aldosterone Potassium Wasting</h3>
              <p>
                When blood sodium falls, adrenal aldosterone surges. To desperately reclaim sodium, the kidney is forced to trade and excrete potassium, triggering nighttime calf cramps and heart palpitations.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-[#221d19] mb-2 text-[15px]">3. Chemical Chelation</h3>
              <p>
                Never buy cheap Magnesium Oxide (4% absorption, severe laxation). Use chelated Magnesium Glycinate or Malate before bed for cellular uptake, actin-myosin relaxation, and deep sleep.
              </p>
            </div>
          </div>
        </div>

        {/* App Bridge Banner */}
        <div className="p-8 sm:p-10 rounded-[28px] bg-[#221d19] text-[#fff8ee] text-center shadow-lg">
          <span className="text-[10px] font-bold uppercase tracking-[1.4px] text-[#c05621] block mb-2">
            ON-DEVICE INTEGRATION
          </span>
          <h3 className="text-[26px] sm:text-[34px] font-serif-display font-normal mb-3 leading-snug">
            Automate your daily mineral targets with Repast.
          </h3>
          <p className="text-[14px] sm:text-[15px] text-[#c5bcb0] max-w-lg mx-auto mb-7 leading-relaxed">
            Repast automatically builds required sodium, potassium, and magnesium thresholds into your daily whole-food meal plans on your iPhone.
          </p>
          <a
            href="https://apps.apple.com/app/id6470000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full btn-primary text-[14px] font-medium"
          >
            <AppleIcon className="w-4 h-4 fill-current shrink-0" />
            <span>Plan Balanced Minerals on iPhone</span>
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
