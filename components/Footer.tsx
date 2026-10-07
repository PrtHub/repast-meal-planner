import Link from "next/link";
import AppIcon from "./AppIcon";

export default function Footer() {
  return (
    <footer className="border-t border-[#e6dfd5] py-12 px-6 bg-[#f7f4ee]">
      <div className="max-w-6xl mx-auto flex flex-col gap-8">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
          <div className="max-w-md">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 text-[24px] font-serif-display text-[#221d19] mb-2 hover:opacity-80 transition-opacity"
            >
              <AppIcon className="w-7 h-7 rounded-[7px] shrink-0" />
              <span>Repast</span>
            </Link>
            <p className="text-[13px] leading-[20px] text-[#6e655c]">
              A week of keto, decided. Built on-device for iPhone with zero accounts and zero trackers.
            </p>
            <p className="text-[12px] text-[#a39a90] mt-1.5">
              Repast is a meal planning tool, not medical advice. Talk to your doctor before starting a keto or low-carb diet.
            </p>
          </div>

          <nav aria-label="Website navigation">
            <ul className="flex flex-wrap items-center gap-x-7 gap-y-2 text-[14px] font-medium text-[#6e655c] pt-1">
              <li>
                <Link href="/for" className="hover:text-[#c05621] transition-colors">
                  Who It&apos;s For
                </Link>
              </li>
              <li>
                <Link href="/tools" className="hover:text-[#c05621] transition-colors">
                  Tools
                </Link>
              </li>
              <li>
                <Link href="/guides" className="hover:text-[#c05621] transition-colors">
                  Guides
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#c05621] transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#c05621] transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-[#ede6dc] flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-[#6e655c]">
          <p>© {new Date().getFullYear()} Repast. All rights reserved. iPhone is a trademark of Apple Inc.</p>
          <ul className="flex items-center gap-5 font-medium">
            <li>
              <Link href="/privacy" className="hover:text-[#c05621] transition-colors">
                Privacy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-[#c05621] transition-colors">
                Terms
              </Link>
            </li>
            <li>
              <a href="mailto:support@repast.app" className="hover:text-[#c05621] transition-colors">
                Support
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
