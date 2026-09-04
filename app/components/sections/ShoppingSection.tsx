export default function ShoppingSection() {
  return (
    <section className="py-16 px-6 bg-[#ffffff] border-t border-[#e6dfd5]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5">
            <span className="text-[11px] font-bold uppercase tracking-[1.4px] text-[#c05621] block mb-2">
              SHOPPING INTELLIGENCE
            </span>
            <h2 className="text-[34px] sm:text-[42px] font-serif-display font-normal leading-tight text-[#221d19] mb-4">
              The shopping list understands leftovers.
            </h2>
            <p className="text-[15px] leading-[24px] text-[#6e655c] mb-6">
              It counts whole cooks, not sittings. A 4-serving recipe eaten twice is one cook. For a
              household of four, accounting for cooks cut our benchmark test basket from 67.6kg to
              34.8kg.
            </p>
            <div className="p-4 rounded-[14px] bg-[#f7f4ee] border border-[#e6dfd5] text-[13px] text-[#221d19]">
              <span className="font-bold text-[#c05621] block mb-1">Aisle-grouped automatically</span>
              Grouped by supermarket sections so you walk through the store once without backtracking.
            </div>
          </div>

          <div className="lg:col-span-7">
            {/* Shopping List Mockup */}
            <div className="rounded-[24px] bg-[#f7f4ee] border border-[#e6dfd5] p-6 shadow-sm">
              <div className="flex items-center justify-between pb-3 border-b border-[#e6dfd5] mb-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[1.4px] text-[#6e655c]">
                    GROCERY LIST
                  </span>
                  <h3 className="text-[18px] font-bold text-[#221d19]">Next week’s provisions</h3>
                </div>
                <span className="text-[12px] font-medium text-[#2e6e7e] bg-[#f0f6f8] px-2.5 py-1 rounded-full">
                  Leftovers consolidated
                </span>
              </div>

              <div className="space-y-4 text-[13px]">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[1.2px] text-[#6e655c] block mb-2">
                    PRODUCE (AISLE 1)
                  </span>
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center bg-white p-2.5 rounded-[10px] border border-[#ede6dc]">
                      <span className="text-[#221d19]">Fresh Asparagus</span>
                      <span className="font-semibold text-[#6e655c] tabular-nums">500g (1 bundle)</span>
                    </div>
                    <div className="flex justify-between items-center bg-white p-2.5 rounded-[10px] border border-[#ede6dc]">
                      <span className="text-[#221d19]">Baby Spinach</span>
                      <span className="font-semibold text-[#6e655c] tabular-nums">300g (2 bags)</span>
                    </div>
                  </div>
                </div>

                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[1.2px] text-[#6e655c] block mb-2">
                    MEAT & SEAFOOD (AISLE 3)
                  </span>
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center bg-white p-2.5 rounded-[10px] border border-[#ede6dc]">
                      <div>
                        <span className="text-[#221d19]">Wild Atlantic Salmon Fillets</span>
                        <span className="block text-[11px] text-[#c05621]">Covers Mon Dinner + Wed Lunch</span>
                      </div>
                      <span className="font-semibold text-[#6e655c] tabular-nums">4 × 180g fillets</span>
                    </div>
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
