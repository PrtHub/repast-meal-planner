export default function ShoppingSection() {
  return (
    <section className="py-16 sm:py-20 px-6 bg-[#ffffff] border-t border-[#e6dfd5]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-5">
            <span className="text-[11px] font-bold uppercase tracking-[1.4px] text-[#c05621] block mb-2">
              SHOPPING INTELLIGENCE
            </span>
            <h2 className="text-[34px] sm:text-[42px] font-serif-display font-normal leading-tight text-[#221d19] mb-4">
              The shopping list understands leftovers.
            </h2>
            <p className="text-[15px] leading-[24px] text-[#6e655c] mb-6">
              It counts whole cooks, not sittings. A 4-serving recipe eaten twice is one cook. In
              testing for a household of four, cook-session quantities cut a test basket from 67.6kg
              down to 34.8kg.
            </p>

            <div className="space-y-3 text-[13px] text-[#221d19]">
              <div className="p-4 rounded-[16px] bg-[#f7f4ee] border border-[#e6dfd5]">
                <span className="font-bold text-[#c05621] block mb-1">Purchasable units, not raw grams</span>
                <p className="text-[#6e655c]">
                  Lists &ldquo;2 packs of 4&rdquo; and &ldquo;7 medium avocados&rdquo; instead of raw bulk weights like &ldquo;1400g of egg&rdquo;.
                </p>
              </div>

              <div className="p-4 rounded-[16px] bg-[#f7f4ee] border border-[#e6dfd5]">
                <span className="font-bold text-[#221d19] block mb-1">Grouped across 7 supermarket aisles</span>
                <p className="text-[#6e655c]">
                  Produce, meat, seafood, dairy, pantry, frozen, and spices — walk through once with no backtracking.
                </p>
              </div>

              <div className="p-4 rounded-[16px] bg-[#f7f4ee] border border-[#e6dfd5]">
                <span className="font-bold text-[#221d19] block mb-1">Pantry staples & plain-text sharing</span>
                <p className="text-[#6e655c]">
                  Exclude oils, salts and spices you already own permanently. Share the clean list to Notes or Messages in one tap.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            {/* Shopping List Mockup */}
            <div className="rounded-[24px] bg-[#f7f4ee] border border-[#e6dfd5] p-6 sm:p-7 shadow-sm">
              <div className="flex items-center justify-between pb-3.5 border-b border-[#e6dfd5] mb-5">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[1.4px] text-[#6e655c]">
                    AISLE-GROUPED LIST
                  </span>
                  <h3 className="text-[19px] font-bold text-[#221d19]">Week 1 Provisions</h3>
                </div>
                <div className="text-right">
                  <span className="text-[11px] font-semibold text-[#2e6e7e] bg-[#f0f6f8] px-2.5 py-1 rounded-full">
                    Leftover chains connected
                  </span>
                </div>
              </div>

              <div className="space-y-4 text-[13px]">
                {/* Produce Aisle */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-[1.2px] text-[#6e655c]">
                      AISLE 1 · FRESH PRODUCE
                    </span>
                    <span className="text-[11px] text-[#6e655c]">2 items</span>
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center bg-white p-3 rounded-[12px] border border-[#ede6dc]">
                      <div>
                        <span className="text-[#221d19] font-medium">Fresh Asparagus</span>
                        <span className="block text-[11px] text-[#6e655c]">USDA 169986</span>
                      </div>
                      <span className="font-semibold text-[#221d19] tabular-nums">500g (1 bundle)</span>
                    </div>
                    <div className="flex justify-between items-center bg-white p-3 rounded-[12px] border border-[#ede6dc]">
                      <div>
                        <span className="text-[#221d19] font-medium">Hass Avocados</span>
                        <span className="block text-[11px] text-[#6e655c]">USDA 171705</span>
                      </div>
                      <span className="font-semibold text-[#221d19] tabular-nums">4 medium</span>
                    </div>
                  </div>
                </div>

                {/* Meat & Seafood Aisle */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-[1.2px] text-[#6e655c]">
                      AISLE 3 · SEAFOOD & POULTRY
                    </span>
                    <span className="text-[11px] text-[#6e655c]">2 items (1 batch cook)</span>
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center bg-white p-3 rounded-[12px] border border-[#ede6dc]">
                      <div>
                        <span className="text-[#221d19] font-medium">Wild Atlantic Salmon Fillets</span>
                        <span className="block text-[11px] text-[#c05621] font-medium">
                          Single cook: covers Mon Dinner + Wed Lunch
                        </span>
                      </div>
                      <span className="font-semibold text-[#221d19] tabular-nums">4 × 180g fillets</span>
                    </div>
                    <div className="flex justify-between items-center bg-white p-3 rounded-[12px] border border-[#ede6dc]">
                      <div>
                        <span className="text-[#221d19] font-medium">Free-Range Chicken Thighs</span>
                        <span className="block text-[11px] text-[#6e655c]">Covers Thursday Dinner</span>
                      </div>
                      <span className="font-semibold text-[#221d19] tabular-nums">1 pack of 4 (650g)</span>
                    </div>
                  </div>
                </div>

                {/* Dairy & Pantry Aisle */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-[1.2px] text-[#6e655c]">
                      AISLE 4 · DAIRY & EGGS
                    </span>
                    <span className="text-[11px] text-[#6e655c]">1 item (staples excluded)</span>
                  </div>
                  <div className="flex justify-between items-center bg-white p-3 rounded-[12px] border border-[#ede6dc]">
                    <div>
                      <span className="text-[#221d19] font-medium">Large Pasture-Raised Eggs</span>
                      <span className="block text-[11px] text-[#6e655c]">Butter & Olive Oil marked as owned</span>
                    </div>
                    <span className="font-semibold text-[#221d19] tabular-nums">1 carton (12 eggs)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
