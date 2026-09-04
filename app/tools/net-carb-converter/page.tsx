"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AppleIcon from "@/components/AppleIcon";

export default function NetCarbConverterPage() {
  const [totalCarbs, setTotalCarbs] = useState<number>(24);
  const [dietaryFiber, setDietaryFiber] = useState<number>(6);
  const [allulose, setAllulose] = useState<number>(0);
  const [erythritol, setErythritol] = useState<number>(4);
  const [maltitol, setMaltitol] = useState<number>(10);
  const [xylitol, setXylitol] = useState<number>(0);
  const [hiddenStarches, setHiddenStarches] = useState<number>(2);

  // 1. Manufacturer Claimed Net Carbs (Naïve Subtraction)
  // Food companies subtract ALL polyols and allulose 100%
  const totalPolyolsAndAllulose = allulose + erythritol + maltitol + xylitol;
  const claimedNetCarbs = Math.max(
    0,
    Math.round((totalCarbs - dietaryFiber - totalPolyolsAndAllulose) * 10) / 10
  );

  // 2. True Metabolic Net Carbs (§ Clinical Glycemic Modeling)
  // - Dietary fiber: -100%
  // - Allulose: -100% (GI: 0, excreted in urine)
  // - Erythritol: -100% (GI: 0, absorbed in small intestine & excreted)
  // - Maltitol & Sorbitol: ONLY ~45% subtracted! (55% is digested as glucose, GI: 35-52)
  // - Xylitol & Isomalt: ONLY ~50% subtracted! (50% absorbed, GI: 12)
  // - Hidden starches (maltodextrin, dextrose): Add directly (GI: 110–185!)
  const effectiveFiber = Math.min(dietaryFiber, totalCarbs);
  const unabsorbedMaltitol = maltitol * 0.45;
  const unabsorbedXylitol = xylitol * 0.50;

  const trueMetabolicNetCarbs = Math.max(
    0,
    Math.round(
      (totalCarbs -
        effectiveFiber -
        allulose -
        erythritol -
        unabsorbedMaltitol -
        unabsorbedXylitol +
        hiddenStarches) *
        10
    ) / 10
  );

  const hiddenCarbSurplus = Math.max(
    0,
    Math.round((trueMetabolicNetCarbs - claimedNetCarbs) * 10) / 10
  );

  // Glycemic Impact Status
  let statusColor = "text-[#2d6a4f] bg-[#eef7ee] border-[#bfe2be]";
  let statusTitle = "Optimal for Strict Ketosis";
  let statusDescription =
    "Minimal glycemic challenge. Hepatic ketogenesis proceeds unhindered.";

  if (trueMetabolicNetCarbs > 12) {
    statusColor = "text-[#a22a2a] bg-[#faebeb] border-[#e8b6b6]";
    statusTitle = "Severe Glycemic Spike (Breaks Ketosis)";
    statusDescription =
      "Portal glucose spike will trigger acute insulin surge, halting hormone-sensitive lipase (HSL) and suppressing fat burning.";
  } else if (trueMetabolicNetCarbs > 5) {
    statusColor = "text-[#98421a] bg-[#fdf2ea] border-[#f2cdb8]";
    statusTitle = "Moderate Impact (Consume with Caution)";
    statusDescription =
      "May elevate postprandial glucose by 15–30 mg/dL and temporarily blunt blood ketone concentrations.";
  }

  // GI Distress Risk
  const totalOsmoticPolyols = maltitol + xylitol;
  const highDistressRisk = totalOsmoticPolyols >= 12;

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
          <span className="text-[#221d19] font-medium">True Net Carb Converter</span>
        </div>

        {/* Hero Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fdf2ea] text-[#c05621] text-[11px] font-bold uppercase tracking-[1.4px] mb-3">
            <span>LABEL DECEPTION AUDIT</span>
          </div>
          <h1 className="text-[38px] sm:text-[50px] font-serif-display font-normal tracking-[-1px] leading-[1.05] text-[#221d19] mb-4">
            True Net Carb & Sugar Alcohol Converter
          </h1>
          <p className="text-[15px] sm:text-[17px] leading-[26px] text-[#6e655c]">
            Commercial &apos;keto-friendly&apos; packaged foods routinely deduct 100% of high-glycemic sugar alcohols like maltitol to advertise fake 2g net carbs. Unmask the true metabolic impact on your blood sugar.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Controls Column */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-[24px] border border-[#e6dfd5] shadow-xs space-y-5">
            <h2 className="text-[18px] font-bold text-[#221d19] border-b border-[#ede6dc] pb-3">
              Enter Food Packaging Values (g)
            </h2>

            {/* Total Carbs */}
            <div className="flex items-center justify-between gap-4">
              <div>
                <label className="text-[13px] font-bold text-[#221d19] block">
                  Total Carbohydrates
                </label>
                <span className="text-[11px] text-[#8a7f72]">From nutrition facts panel</span>
              </div>
              <input
                type="number"
                min={0}
                max={200}
                value={totalCarbs}
                onChange={(e) => setTotalCarbs(Math.max(0, Number(e.target.value)))}
                className="w-20 px-3 py-1.5 rounded-lg border border-[#e6dfd5] font-mono text-right font-bold text-[#221d19]"
              />
            </div>

            {/* Dietary Fiber */}
            <div className="flex items-center justify-between gap-4">
              <div>
                <label className="text-[13px] font-bold text-[#221d19] block">
                  Dietary Fiber
                </label>
                <span className="text-[11px] text-[#8a7f72]">Non-digestible plant polymers (-100%)</span>
              </div>
              <input
                type="number"
                min={0}
                max={totalCarbs}
                value={dietaryFiber}
                onChange={(e) => setDietaryFiber(Math.max(0, Number(e.target.value)))}
                className="w-20 px-3 py-1.5 rounded-lg border border-[#e6dfd5] font-mono text-right font-bold text-[#221d19]"
              />
            </div>

            {/* Erythritol */}
            <div className="flex items-center justify-between gap-4">
              <div>
                <label className="text-[13px] font-bold text-[#221d19] block">
                  Erythritol
                </label>
                <span className="text-[11px] text-[#2d6a4f]">GI: 0 · Safe (-100%)</span>
              </div>
              <input
                type="number"
                min={0}
                max={50}
                value={erythritol}
                onChange={(e) => setErythritol(Math.max(0, Number(e.target.value)))}
                className="w-20 px-3 py-1.5 rounded-lg border border-[#e6dfd5] font-mono text-right font-bold text-[#221d19]"
              />
            </div>

            {/* Allulose */}
            <div className="flex items-center justify-between gap-4">
              <div>
                <label className="text-[13px] font-bold text-[#221d19] block">
                  Allulose (D-Psicose)
                </label>
                <span className="text-[11px] text-[#2d6a4f]">GI: 0 · Safe (-100%)</span>
              </div>
              <input
                type="number"
                min={0}
                max={50}
                value={allulose}
                onChange={(e) => setAllulose(Math.max(0, Number(e.target.value)))}
                className="w-20 px-3 py-1.5 rounded-lg border border-[#e6dfd5] font-mono text-right font-bold text-[#221d19]"
              />
            </div>

            {/* Maltitol & Sorbitol */}
            <div className="flex items-center justify-between gap-4 p-3 rounded-xl bg-[#fdf8f5] border border-[#f5ded0]">
              <div>
                <label className="text-[13px] font-bold text-[#c05621] block">
                  Maltitol / Sorbitol / Syrup
                </label>
                <span className="text-[11px] text-[#98421a]">
                  GI: 35–52 · Deceptive (Only ~45% unabsorbed)
                </span>
              </div>
              <input
                type="number"
                min={0}
                max={50}
                value={maltitol}
                onChange={(e) => setMaltitol(Math.max(0, Number(e.target.value)))}
                className="w-20 px-3 py-1.5 rounded-lg border border-[#e6dfd5] font-mono text-right font-bold text-[#221d19]"
              />
            </div>

            {/* Xylitol */}
            <div className="flex items-center justify-between gap-4">
              <div>
                <label className="text-[13px] font-bold text-[#221d19] block">
                  Xylitol / Isomalt
                </label>
                <span className="text-[11px] text-[#8a7f72]">GI: 12 · 50% Absorbed</span>
              </div>
              <input
                type="number"
                min={0}
                max={50}
                value={xylitol}
                onChange={(e) => setXylitol(Math.max(0, Number(e.target.value)))}
                className="w-20 px-3 py-1.5 rounded-lg border border-[#e6dfd5] font-mono text-right font-bold text-[#221d19]"
              />
            </div>

            {/* Hidden Starches */}
            <div className="flex items-center justify-between gap-4">
              <div>
                <label className="text-[13px] font-bold text-[#221d19] block">
                  Maltodextrin / Tapioca Starch
                </label>
                <span className="text-[11px] text-[#a22a2a]">GI: 110–185! (Spikes glucose higher than sugar)</span>
              </div>
              <input
                type="number"
                min={0}
                max={30}
                value={hiddenStarches}
                onChange={(e) => setHiddenStarches(Math.max(0, Number(e.target.value)))}
                className="w-20 px-3 py-1.5 rounded-lg border border-[#e6dfd5] font-mono text-right font-bold text-[#221d19]"
              />
            </div>
          </div>

          {/* Results Column */}
          <div className="lg:col-span-6 space-y-6">
            {/* The Head-to-Head Comparison Card */}
            <div className="p-6 sm:p-8 rounded-[24px] bg-[#221d19] text-[#fff8ee] shadow-md">
              <span className="text-[10px] font-bold uppercase tracking-[1.4px] text-[#c05621] block mb-2">
                VERDICT & METABOLIC TRUTH
              </span>
              <h3 className="text-[22px] sm:text-[26px] font-serif-display font-normal mb-6">
                Label Claim vs. Biological Reality
              </h3>

              <div className="grid grid-cols-2 gap-4 pb-6 border-b border-white/10 mb-6">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
                  <div className="text-[11px] uppercase tracking-[1px] text-[#c5bcb0] mb-1">
                    Front Label Claims
                  </div>
                  <div className="text-[34px] sm:text-[40px] font-serif-display font-bold text-white">
                    {claimedNetCarbs}g
                  </div>
                  <div className="text-[11px] text-[#8a7f72] mt-1">Claimed Net Carbs</div>
                </div>

                <div className="p-4 rounded-2xl bg-[#c05621]/20 border border-[#c05621]/40 text-center">
                  <div className="text-[11px] uppercase tracking-[1px] text-[#f7ad86] mb-1 font-bold">
                    True Metabolic Reality
                  </div>
                  <div className="text-[34px] sm:text-[40px] font-serif-display font-bold text-[#f7ad86]">
                    {trueMetabolicNetCarbs}g
                  </div>
                  <div className="text-[11px] text-[#f7ad86] mt-1 font-medium">
                    Actual Glycemic Net Carbs
                  </div>
                </div>
              </div>

              {hiddenCarbSurplus > 0 ? (
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-[13px] text-[#ddd5cb] leading-relaxed">
                  ⚠️ <strong className="text-white">Deception Discrepancy:</strong> This product delivers{" "}
                  <span className="font-bold text-[#f7ad86]">+{hiddenCarbSurplus}g</span> more glycemic carbohydrates into your portal vein than the front packaging claims, largely due to partially absorbed polyols.
                </div>
              ) : (
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-[13px] text-[#b4d3b2]">
                  ✓ This product utilizes clean, true zero-glycemic sweeteners (Allulose / Erythritol). Label math matches metabolic reality.
                </div>
              )}
            </div>

            {/* Glycemic Impact Assessment Box */}
            <div className={`p-6 rounded-[22px] border ${statusColor}`}>
              <div className="text-[11px] font-bold uppercase tracking-[1.4px] mb-1.5">
                GLYCEMIC IMPACT STATUS
              </div>
              <h4 className="text-[18px] font-bold mb-2">
                {statusTitle}
              </h4>
              <p className="text-[13px] leading-relaxed opacity-90">
                {statusDescription}
              </p>
            </div>

            {/* Osmotic Laxation Warning */}
            {highDistressRisk && (
              <div className="p-5 rounded-[20px] bg-[#fff8f0] border border-[#f3cca8] text-[#843e14]">
                <div className="text-[11px] font-bold uppercase tracking-[1.2px] mb-1">
                  DIGESTIVE DISTRESS WARNING
                </div>
                <p className="text-[12px] leading-relaxed">
                  Contains <strong>{totalOsmoticPolyols}g</strong> of high-osmotic polyols (Maltitol/Xylitol). Unabsorbed molecules pull fluid into the large intestine, causing rapid gas, abdominal cramping, and osmotic laxation in over 65% of adults.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Scientific Educational Strip */}
        <div className="p-8 sm:p-10 rounded-[24px] bg-white border border-[#e6dfd5] shadow-xs mb-14 space-y-6">
          <h2 className="text-[24px] font-serif-display font-normal text-[#221d19]">
            The Sweetener Glycemic Index Hierarchy
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-[13px]">
            <div className="p-4 rounded-xl bg-[#f7f9f6] border border-[#d5e6d3]">
              <div className="font-bold text-[#2d6a4f] text-[15px] mb-1">Allulose & Monk Fruit</div>
              <div className="text-[#526456]">GI: 0 · 0% Digested</div>
              <div className="text-[11px] text-[#6e655c] mt-2">Passes unchanged or excreted in urine. Zero insulin challenge.</div>
            </div>
            <div className="p-4 rounded-xl bg-[#f7f9f6] border border-[#d5e6d3]">
              <div className="font-bold text-[#2d6a4f] text-[15px] mb-1">Erythritol & Stevia</div>
              <div className="text-[#526456]">GI: 0 · Clean Excretion</div>
              <div className="text-[11px] text-[#6e655c] mt-2">Absorbed in small intestine and excreted in urine without fermenting.</div>
            </div>
            <div className="p-4 rounded-xl bg-[#fdf7f4] border border-[#f5ded0]">
              <div className="font-bold text-[#c05621] text-[15px] mb-1">Maltitol & Sorbitol</div>
              <div className="text-[#98421a]">GI: 35–52 · 55% Digested</div>
              <div className="text-[11px] text-[#6e655c] mt-2">Spikes blood sugar like wheat bread while causing severe gut distress.</div>
            </div>
            <div className="p-4 rounded-xl bg-[#faebeb] border border-[#e8b6b6]">
              <div className="font-bold text-[#a22a2a] text-[15px] mb-1">Maltodextrin / Dextrose</div>
              <div className="text-[#a22a2a]">GI: 110–185! · Pure Sugar</div>
              <div className="text-[11px] text-[#6e655c] mt-2">Industrial starch carriers that spike insulin faster than pure glucose.</div>
            </div>
          </div>
        </div>

        {/* App Bridge Banner */}
        <div className="p-8 sm:p-10 rounded-[28px] bg-[#221d19] text-[#fff8ee] text-center shadow-lg">
          <span className="text-[10px] font-bold uppercase tracking-[1.4px] text-[#c05621] block mb-2">
            ZERO-DECEPTION NUTRITION
          </span>
          <h3 className="text-[26px] sm:text-[34px] font-serif-display font-normal mb-3 leading-snug">
            Eat meals with USDA-audited biological receipts.
          </h3>
          <p className="text-[14px] sm:text-[15px] text-[#c5bcb0] max-w-lg mx-auto mb-7 leading-relaxed">
            Repast builds weekly plans using real whole foods and verified single ingredients. No deceptive maltitol bars, no hidden starches, and no fake net carb math.
          </p>
          <a
            href="https://apps.apple.com/app/id6470000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full btn-primary text-[14px] font-medium"
          >
            <AppleIcon className="w-4 h-4 fill-current shrink-0" />
            <span>Plan Clean Keto on iPhone</span>
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
