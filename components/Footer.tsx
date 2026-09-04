import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#e6dfd5] py-14 px-6 bg-[#f7f4ee]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Col 1: Brand */}
          <div className="col-span-2 md:col-span-1">
            <span className="text-[22px] font-serif-display text-[#221d19] block mb-2">
              Repast
            </span>
            <p className="text-[13px] leading-[20px] text-[#6e655c] mb-4">
              A week of keto, decided. Built on-device for iPhone with zero accounts and zero trackers.
            </p>
            <a
              href="https://apps.apple.com/app/id6470000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-[12px] font-bold text-[#c05621] hover:underline"
            >
              Get on App Store →
            </a>
          </div>

          {/* Col 2: Who It's For */}
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[1.4px] text-[#221d19] block mb-3">
              Who It&apos;s For
            </span>
            <ul className="space-y-2 text-[13px] text-[#6e655c]">
              <li>
                <Link href="/for/busy-professionals" className="hover:text-[#221d19] transition-colors">
                  Busy Professionals
                </Link>
              </li>
              <li>
                <Link href="/for/glp1-patients" className="hover:text-[#221d19] transition-colors">
                  GLP-1 Muscle Support
                </Link>
              </li>
              <li>
                <Link href="/for/type-2-diabetes-prediabetes" className="hover:text-[#221d19] transition-colors">
                  Blood Sugar Control
                </Link>
              </li>
              <li>
                <Link href="/for/couples-mixed-diet-households" className="hover:text-[#221d19] transition-colors">
                  Mixed-Diet Couples
                </Link>
              </li>
              <li>
                <Link href="/for" className="text-[#c05621] font-semibold hover:underline">
                  All 14 Use Cases →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Interactive Tools */}
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[1.4px] text-[#221d19] block mb-3">
              Interactive Tools
            </span>
            <ul className="space-y-2 text-[13px] text-[#6e655c]">
              <li>
                <Link href="/tools/carb-budget-calculator" className="hover:text-[#221d19] transition-colors">
                  Carb Ceiling Calculator
                </Link>
              </li>
              <li>
                <Link href="/tools/feasibility-checker" className="hover:text-[#221d19] transition-colors">
                  Feasibility Diagnostic
                </Link>
              </li>
              <li>
                <Link href="/tools/leftover-calculator" className="hover:text-[#221d19] transition-colors">
                  Leftover Savings Calculator
                </Link>
              </li>
              <li>
                <Link href="/tools" className="hover:text-[#221d19] transition-colors">
                  All Planning Tools →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Guides */}
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[1.4px] text-[#221d19] block mb-3">
              Planning Guides
            </span>
            <ul className="space-y-2 text-[13px] text-[#6e655c]">
              <li>
                <Link href="/guides/net-vs-total-carbs" className="hover:text-[#221d19] transition-colors">
                  Net vs. Total Carbs
                </Link>
              </li>
              <li>
                <Link href="/guides/the-hard-carb-ceiling" className="hover:text-[#221d19] transition-colors">
                  The Hard Carb Ceiling
                </Link>
              </li>
              <li>
                <Link href="/guides/ewma-weight-tracking" className="hover:text-[#221d19] transition-colors">
                  EWMA Weight Smoothing
                </Link>
              </li>
              <li>
                <Link href="/guides/cook-sessions-and-leftovers" className="hover:text-[#221d19] transition-colors">
                  Cook Sessions & Leftovers
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Blog & Legal */}
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[1.4px] text-[#221d19] block mb-3">
              Blog & Legal
            </span>
            <ul className="space-y-2 text-[13px] text-[#6e655c]">
              <li>
                <Link href="/about" className="hover:text-[#221d19] transition-colors">
                  About Repast
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#221d19] transition-colors">
                  Engineering Blog
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-[#221d19] transition-colors">
                  Privacy Policy (No Tracking)
                </Link>
              </li>
              <li>
                <a
                  href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#221d19] transition-colors"
                >
                  Terms of Use (Standard EULA)
                </a>
              </li>
              <li>
                <a href="mailto:support@repast.app" className="hover:text-[#221d19] transition-colors">
                  support@repast.app
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#ede6dc] flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-[#6e655c]">
          <p>© {new Date().getFullYear()} Repast. All rights reserved.</p>
          <p>iPhone is a registered trademark of Apple Inc. Nutrition data references USDA FoodData Central.</p>
        </div>
      </div>
    </footer>
  );
}
