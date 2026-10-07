"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AppleIcon from "./AppleIcon";
import AppIcon from "./AppIcon";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/for", label: "Who It's For" },
    { href: "/tools", label: "Tools", badge: "6" },
    { href: "/guides", label: "Guides" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About" },
    { href: "/#pricing", label: "Pricing" },
  ];

  const isLinkActive = (href: string) => {
    if (href === "/#pricing") return false;
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${scrolled
        ? "bg-[#f7f4ee]/95 backdrop-blur-md border-b border-[#e6dfd5] shadow-[0_4px_24px_rgba(34,29,25,0.05)]"
        : "bg-[#f7f4ee]/85 backdrop-blur-sm border-b border-[#e6dfd5]/60"
        }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 sm:h-17 flex items-center justify-between">
        {/* Brand Logo & Live Badge */}
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="flex items-center gap-2.5 text-[26px] font-serif-display font-normal tracking-tight text-[#221d19] hover:opacity-90 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c05621] rounded-lg"
            aria-label="Repast Home"
          >
            <AppIcon className="w-8 h-8 rounded-[8px] shrink-0" />
            <span>Repast</span>
          </Link>
        </div>

        {/* Desktop Navigation Pill Bar */}
        <nav className="hidden md:flex items-center gap-1 p-1 rounded-full bg-[#ede7dc]/80 border border-[#e2dacd] shadow-xs">
          {navLinks.map((item) => {
            const active = isLinkActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-3.5 py-1.5 rounded-full text-[13px] font-medium transition-all duration-150 flex items-center gap-1.5 ${active
                  ? "bg-white text-[#221d19] font-semibold shadow-[0_2px_8px_rgba(34,29,25,0.06)]"
                  : "text-[#6e655c] hover:text-[#221d19] hover:bg-white/50"
                  }`}
              >
                <span>{item.label}</span>
                {item.badge && (
                  <span
                    className={`text-[9px] font-bold px-1.5 py-0.2 rounded-full leading-none ${active
                      ? "bg-[#fdf2ea] text-[#c05621]"
                      : "bg-[#e2dacd] text-[#6e655c]"
                      }`}
                  >
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          {/* Apple App Store Button with Official Apple Logo */}
          <a
            href="https://apps.apple.com/app/id6807802664"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#221d19] text-[#fff8ee] text-[12px] font-semibold tracking-wide hover:bg-black active:scale-[0.98] shadow-xs hover:shadow transition-all"
          >
            <AppleIcon className="w-3.5 h-3.5 fill-current shrink-0" />
            <span>Get the app</span>
          </a>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-xl text-[#221d19] hover:bg-[#ede5d8] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c05621]"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#e6dfd5] bg-[#f7f4ee] px-6 py-5 shadow-lg animate-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col gap-1.5 mb-5">
            {navLinks.map((item) => {
              const active = isLinkActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-xl text-[14px] font-medium flex items-center justify-between transition-colors ${active
                    ? "bg-white text-[#c05621] font-semibold shadow-xs"
                    : "text-[#6e655c] hover:bg-[#ede6dc]/60 hover:text-[#221d19]"
                    }`}
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#fdf2ea] text-[#c05621]">
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </div>

          <a
            href="https://apps.apple.com/app/id6807802664"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#221d19] text-[#fff8ee] text-[14px] font-semibold hover:bg-black active:scale-[0.98] transition-all shadow-sm"
          >
            <AppleIcon className="w-4 h-4 fill-current shrink-0" />
            <span>Get Repast for iPhone</span>
          </a>
        </div>
      )}
    </header>
  );
}
