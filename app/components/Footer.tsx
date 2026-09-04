import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#e6dfd5] py-12 px-6 bg-[#f7f4ee]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="text-[20px] font-serif-display text-[#221d19]">Repast</span>
          <span className="text-[13px] text-[#6e655c]">
            · A week of keto, decided
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-[13px] text-[#6e655c]">
          <Link
            href="/privacy"
            className="hover:text-[#221d19] transition-colors underline-offset-2 hover:underline"
          >
            Privacy Policy
          </Link>
          <a
            href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#221d19] transition-colors underline-offset-2 hover:underline"
          >
            Terms of Use
          </a>
          <a
            href="mailto:support@repast.app"
            className="hover:text-[#221d19] transition-colors underline-offset-2 hover:underline"
          >
            support@repast.app
          </a>
        </div>

        <p className="text-[12px] text-[#6e655c]">
          © {new Date().getFullYear()} Repast. iPhone is a trademark of Apple Inc.
        </p>
      </div>
    </footer>
  );
}
