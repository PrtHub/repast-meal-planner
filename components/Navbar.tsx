import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full border-b border-[#e6dfd5] bg-[#f7f4ee]/90 backdrop-blur sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="text-[26px] font-serif-display tracking-tight text-[#221d19] hover:opacity-90 transition-opacity"
          >
            Repast
          </Link>
        </div>

        <nav className="flex items-center gap-4 sm:gap-6 text-[13px] font-medium text-[#6e655c]">
          <Link href="/tools" className="hover:text-[#221d19] transition-colors">
            Tools
          </Link>
          <Link href="/guides" className="hover:text-[#221d19] transition-colors">
            Guides
          </Link>
          <Link href="/blog" className="hover:text-[#221d19] transition-colors">
            Blog
          </Link>
          <Link href="/about" className="hover:text-[#221d19] transition-colors">
            About
          </Link>
          <Link href="/#pricing" className="hover:text-[#221d19] transition-colors">
            Pricing
          </Link>
          <a
            href="https://apps.apple.com/app/id6470000000"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center px-4 py-1.5 rounded-full bg-[#221d19] text-[#fff8ee] text-[12px] font-semibold tracking-wide hover:bg-black transition-colors"
          >
            Get for iPhone
          </a>
        </nav>
      </div>
    </header>
  );
}
