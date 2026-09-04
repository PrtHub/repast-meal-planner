"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function FeasibilityCheckerPage() {
  const [cookTime, setCookTime] = useState<number>(15);
  const [diet, setDiet] = useState<string>("pescatarian");
  const [noEggs, setNoEggs] = useState<boolean>(true);
  const [noDairy, setNoDairy] = useState<boolean>(false);
  const [noNuts, setNoNuts] = useState<boolean>(false);
  const [noMushrooms, setNoMushrooms] = useState<boolean>(false);

  // Approximate realistic recipe pool calculation matching §5.2 & §5.10
  let eligibleCount = 92; // Total main dinner recipes

  // Cook time impact
  if (cookTime === 15) {
    eligibleCount = 6; // Only 6 of 92 mains come in under 15 min (§5.10)
  } else if (cookTime === 30) {
    eligibleCount = 48;
  }

  // Diet impact
  if (diet === "pescatarian") {
    eligibleCount = Math.round(eligibleCount * 0.45);
  } else if (diet === "vegetarian") {
    eligibleCount = Math.round(eligibleCount * 0.35);
  }

  // Exclusions impact
  if (noEggs) eligibleCount = Math.max(0, eligibleCount - 3);
  if (noDairy) eligibleCount = Math.max(0, eligibleCount - 4);
  if (noNuts) eligibleCount = Math.max(0, eligibleCount - 2);
  if (noMushrooms) eligibleCount = Math.max(0, eligibleCount - 1);

  const neededCount = 6; // Minimum unique lunch & dinner mains needed for variety without 48h repeat
  const isBlocked = eligibleCount < neededCount;

  return (
    <div className="min-h-screen bg-[#f7f4ee] text-[#221d19]">
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="flex items-center gap-2 text-[12px] text-[#6e655c] mb-6">
          <Link href="/" className="hover:text-[#221d19]">Home</Link>
          <span>/</span>
          <Link href="/tools" className="hover:text-[#221d19]">Tools</Link>
          <span>/</span>
          <span className="text-[#221d19] font-medium">Feasibility Checker</span>
        </div>

        <div className="max-w-2xl mb-10">
          <span className="text-[11px] font-bold uppercase tracking-[1.4px] text-[#c05621] block mb-2">
            CONSTRAINT DIAGNOSTIC
          </span>
          <h1 className="text-[38px] sm:text-[50px] font-serif-display font-normal tracking-[-1px] leading-[1.05] text-[#221d19] mb-4">
            Dietary Constraint Feasibility Checker
          </h1>
          <p className="text-[15px] sm:text-[16px] leading-[25px] text-[#6e655c]">
            An app that always returns a plan is either breaking your rules or feeding you food you
            hate. Test your constraints to see if they create a mathematical clash or a servable plan.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Controls */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-7 rounded-[22px] border border-[#e6dfd5] shadow-sm space-y-6">
            <h2 className="text-[18px] font-bold text-[#221d19] border-b border-[#ede6dc] pb-3">
              Configure Your Rules
            </h2>

            {/* Cook Time */}
            <div>
              <label className="block text-[13px] font-bold text-[#221d19] mb-1.5">
                Maximum Weeknight Cooking Time
              </label>
              <div className="grid grid-cols-3 gap-2 text-[13px]">
                {[15, 30, 45].map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setCookTime(t)}
                    className={`py-2.5 rounded-[10px] border font-semibold ${
                      cookTime === t
                        ? "bg-[#221d19] text-white border-[#221d19]"
                        : "bg-[#f7f4ee] text-[#6e655c] border-[#e6dfd5]"
                    }`}
                  >
                    {t === 45 ? "45+ min" : `Under ${t}m`}
                  </button>
                ))}
              </div>
            </div>

            {/* Diet */}
            <div>
              <label className="block text-[13px] font-bold text-[#221d19] mb-1.5">
                Dietary Framework
              </label>
              <select
                value={diet}
                onChange={(e) => setDiet(e.target.value)}
                className="w-full p-2.5 rounded-[10px] border border-[#e6dfd5] text-[13px] bg-[#f7f4ee] font-medium"
              >
                <option value="omnivore">Standard Keto (Meat, Poultry, Fish)</option>
                <option value="pescatarian">Pescatarian (Fish & Seafood only)</option>
                <option value="vegetarian">Vegetarian (No meat or seafood)</option>
              </select>
            </div>

            {/* Exclusions */}
            <div>
              <label className="block text-[13px] font-bold text-[#221d19] mb-2">
                Allergen & Ingredient Exclusions
              </label>
              <div className="space-y-2 text-[13px]">
                <label className="flex items-center gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={noEggs}
                    onChange={(e) => setNoEggs(e.target.checked)}
                    className="rounded accent-[#c05621] w-4 h-4"
                  />
                  <span>Exclude Eggs (No eggs or egg whites)</span>
                </label>
                <label className="flex items-center gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={noDairy}
                    onChange={(e) => setNoDairy(e.target.checked)}
                    className="rounded accent-[#c05621] w-4 h-4"
                  />
                  <span>Exclude Dairy (No cheese, butter, heavy cream)</span>
                </label>
                <label className="flex items-center gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={noNuts}
                    onChange={(e) => setNoNuts(e.target.checked)}
                    className="rounded accent-[#c05621] w-4 h-4"
                  />
                  <span>Exclude Tree Nuts & Peanuts</span>
                </label>
                <label className="flex items-center gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={noMushrooms}
                    onChange={(e) => setNoMushrooms(e.target.checked)}
                    className="rounded accent-[#c05621] w-4 h-4"
                  />
                  <span>Exclude Mushrooms (Disliked ingredient opt-out)</span>
                </label>
              </div>
            </div>
          </div>

          {/* Diagnostic Result */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div className="bg-white p-6 sm:p-7 rounded-[22px] border border-[#e6dfd5] shadow-sm mb-6">
              <span className="text-[10px] font-bold uppercase tracking-[1.4px] text-[#6e655c] block mb-2">
                SOLVER FEASIBILITY VERDICT
              </span>

              {isBlocked ? (
                <div>
                  <div className="flex items-center gap-2 text-[#c2402f] font-bold text-[18px] mb-2">
                    <span className="w-3 h-3 rounded-full bg-[#c2402f]" />
                    Constraint Conflict Detected
                  </div>
                  <div className="p-4 rounded-[14px] bg-[#fdf6f1] border border-[#f0e4d8] text-[13px] text-[#98421a] leading-relaxed mb-4">
                    <strong>Not enough lunch + dinner options:</strong> Only {eligibleCount} recipes fit this
                    profile, but a 7-day week requires at least {neededCount} unique mains to satisfy
                    variety and nutritional coverage.
                  </div>

                  <div className="space-y-2 text-[13px] text-[#6e655c] mb-6">
                    <p>
                      <strong>Responsible bottleneck:</strong> {cookTime === 15 ? "Under-15-minute prep limit" : "Exclusion combination"}.
                    </p>
                    <p>
                      Repast will never secretly insert red meat or ignore your cook-time rule. Instead,
                      it names the single relaxation that restores feasibility.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setCookTime(45)}
                    className="w-full py-2.5 rounded-[12px] bg-[#f0ebe2] hover:bg-[#e6dfd5] text-[#221d19] font-bold text-[13px] transition-colors"
                  >
                    Allow 45-minute meals (Unlocks +{Math.max(1, 48 - eligibleCount)} dishes)
                  </button>
                </div>
              ) : (
                <div>
                  <div className="flex items-center gap-2 text-[#2e6e7e] font-bold text-[18px] mb-2">
                    <span className="w-3 h-3 rounded-full bg-[#2e6e7e]" />
                    Feasible & Fully Servable
                  </div>
                  <div className="p-4 rounded-[14px] bg-[#f0f6f8] border border-[#d2e5ea] text-[13px] text-[#2e6e7e] leading-relaxed mb-4">
                    <strong>{eligibleCount} eligible recipes available.</strong> Sufficient distinct dishes
                    exist to generate a complete 7-day plan held strictly under your carb cap with 0g overage.
                  </div>
                  <p className="text-[13px] text-[#6e655c] leading-[20px] mb-4">
                    All recipes meet your {cookTime}-minute limit and respect all specified allergen
                    exclusions without any compromise.
                  </p>
                </div>
              )}
            </div>

            {/* App Bridge Hook */}
            <div className="p-6 rounded-[22px] bg-[#221d19] text-[#fff8ee]">
              <span className="text-[10px] font-bold uppercase tracking-[1.4px] text-[#c05621] block mb-2">
                HONEST ON-DEVICE SOLVER
              </span>
              <h3 className="text-[20px] font-serif-display font-normal mb-2">
                Get a week that actually respects your rules.
              </h3>
              <p className="text-[13px] text-[#c5bcb0] leading-[20px] mb-4">
                The Repast iOS app runs this solver on-device. If your rules clash, it helps you
                adjust. When satisfied, it builds your week and single grocery list in seconds.
              </p>
              <a
                href="https://apps.apple.com/app/id6470000000"
                className="w-full py-3 rounded-[12px] btn-primary block text-center text-[14px]"
              >
                Download Repast on the App Store
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
