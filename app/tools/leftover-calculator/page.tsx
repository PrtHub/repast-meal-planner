"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AppleIcon from "@/components/AppleIcon";

export default function LeftoverCalculatorPage() {
  const [householdSize, setHouseholdSize] = useState<number>(4);
  const [dinnersPerWeek, setDinnersPerWeek] = useState<number>(7);

  // Math based on verified benchmark in §5.5: for household of 4, 67.6kg vs 34.8kg
  const sittingWeightKg = Math.round((householdSize * dinnersPerWeek * 2.41 * 10)) / 10;
  const cookSessionWeightKg = Math.round((householdSize * dinnersPerWeek * 1.24 * 10)) / 10;
  const savedKg = Math.round((sittingWeightKg - cookSessionWeightKg) * 10) / 10;
  const hoursSaved = Math.round(dinnersPerWeek * 0.65 * 10) / 10;

  return (
    <div className="min-h-screen bg-[#f7f4ee] text-[#221d19]">
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="flex items-center gap-2 text-[12px] text-[#6e655c] mb-6">
          <Link href="/" className="hover:text-[#221d19]">Home</Link>
          <span>/</span>
          <Link href="/tools" className="hover:text-[#221d19]">Tools</Link>
          <span>/</span>
          <span className="text-[#221d19] font-medium">Leftover Calculator</span>
        </div>

        <div className="max-w-2xl mb-10">
          <span className="text-[11px] font-bold uppercase tracking-[1.4px] text-[#c05621] block mb-2">
            GROCERY CONSOLIDATION MODEL
          </span>
          <h1 className="text-[38px] sm:text-[50px] font-serif-display font-normal tracking-[-1px] leading-[1.05] text-[#221d19] mb-4">
            Leftover & Cook Session Savings Calculator
          </h1>
          <p className="text-[15px] sm:text-[16px] leading-[25px] text-[#6e655c]">
            Traditional meal planning tools count individual sittings, creating double-purchased
            ingredients and refrigerator rot. See how cook-session batching cuts grocery weight in half.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Controls */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-7 rounded-[22px] border border-[#e6dfd5] shadow-sm space-y-6">
            <h2 className="text-[18px] font-bold text-[#221d19] border-b border-[#ede6dc] pb-3">
              Household Setup
            </h2>

            <div>
              <div className="flex justify-between text-[13px] font-semibold mb-1.5">
                <span>People Eating</span>
                <span className="text-[#c05621] font-bold">{householdSize} {householdSize === 1 ? "person" : "people"}</span>
              </div>
              <input
                type="range"
                min="1"
                max="6"
                value={householdSize}
                onChange={(e) => setHouseholdSize(Number(e.target.value))}
                className="w-full accent-[#c05621]"
              />
              <div className="flex justify-between text-[11px] text-[#6e655c] mt-1">
                <span>Solo (1)</span>
                <span>Couple (2)</span>
                <span>Family (4)</span>
                <span>Large (6)</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-[13px] font-semibold mb-1.5">
                <span>Home-Cooked Dinners Per Week</span>
                <span className="text-[#c05621] font-bold">{dinnersPerWeek} nights</span>
              </div>
              <input
                type="range"
                min="3"
                max="7"
                value={dinnersPerWeek}
                onChange={(e) => setDinnersPerWeek(Number(e.target.value))}
                className="w-full accent-[#c05621]"
              />
              <div className="flex justify-between text-[11px] text-[#6e655c] mt-1">
                <span>3 nights</span>
                <span>5 nights</span>
                <span>7 nights (Full week)</span>
              </div>
            </div>

            <div className="p-4 rounded-[14px] bg-[#f7f4ee] border border-[#e6dfd5] text-[13px] text-[#6e655c]">
              <span className="font-bold text-[#221d19] block mb-1">What is a Leftover Chain?</span>
              A 4-serving recipe cooked Monday night provides dinner plus Wednesday lunch. Repast
              buys ingredients once, tracks the stored portion, and connects the chain automatically.
            </div>
          </div>

          {/* Results */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div className="bg-white p-6 sm:p-7 rounded-[22px] border border-[#e6dfd5] shadow-sm mb-6">
              <span className="text-[10px] font-bold uppercase tracking-[1.4px] text-[#6e655c] block mb-2">
                ESTIMATED WEEKLY CONSOLIDATION
              </span>

              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-[44px] font-serif-display text-[#2e6e7e] leading-none tabular-nums">
                  −{savedKg} kg
                </span>
                <span className="text-[14px] font-medium text-[#6e655c]">
                  excess grocery weight eliminated
                </span>
              </div>

              <div className="space-y-3 py-3 border-y border-[#ede6dc] mb-5 text-[13px]">
                <div className="flex justify-between items-center">
                  <span className="text-[#6e655c]">Naive sitting-by-sitting list:</span>
                  <span className="font-bold text-[#c2402f] tabular-nums">{sittingWeightKg} kg</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#6e655c]">Cook-session consolidated list:</span>
                  <span className="font-bold text-[#2e6e7e] tabular-nums">{cookSessionWeightKg} kg</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#6e655c]">Weeknight cooking time saved:</span>
                  <span className="font-bold text-[#221d19] tabular-nums">~{hoursSaved} hours / week</span>
                </div>
              </div>

              <div className="p-4 rounded-[14px] bg-[#f0f6f8] border border-[#d2e5ea] text-[13px] text-[#2e6e7e] leading-relaxed">
                <strong>Purchasable Units:</strong> Repast turns this consolidated list into
                supermarket packaging units across 7 aisles, so you buy packs of 4 or medium
                avocados instead of raw bulk gram estimates.
              </div>
            </div>

            {/* App Bridge Hook */}
            <div className="p-6 rounded-[22px] bg-[#221d19] text-[#fff8ee]">
              <span className="text-[10px] font-bold uppercase tracking-[1.4px] text-[#c05621] block mb-2">
                AUTOMATIC LEFTOVER CHAINS
              </span>
              <h3 className="text-[20px] font-serif-display font-normal mb-2">
                Let Repast build your single grocery list.
              </h3>
              <p className="text-[13px] text-[#c5bcb0] leading-[20px] mb-4">
                Get an aisle-grouped shopping list that accounts for whole cooks, marks owned pantry
                staples, and exports cleanly to Notes or Messages.
              </p>
              <a
                href="https://apps.apple.com/app/id6807802664"
                className="w-full py-3 rounded-[12px] btn-primary flex items-center justify-center gap-2 text-center text-[14px]"
              >
                <AppleIcon className="w-4 h-4 fill-current shrink-0" />
                <span>Get Repast for iPhone</span>
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
