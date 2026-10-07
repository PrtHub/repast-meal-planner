"use client";

import { useSyncExternalStore } from "react";

interface AppStoreBadgeProps {
  className?: string;
  showPlatformNote?: boolean;
}

const emptySubscribe = () => () => {};

export default function AppStoreBadge({
  className = "",
  showPlatformNote = true,
}: AppStoreBadgeProps) {
  const isClient = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  const isAppleDevice = useSyncExternalStore(
    emptySubscribe,
    () => {
      const ua = typeof navigator !== "undefined" ? navigator.userAgent : "";
      const isIOS =
        /iPad|iPhone|iPod/.test(ua) ||
        (typeof navigator !== "undefined" &&
          navigator.platform === "MacIntel" &&
          navigator.maxTouchPoints > 1);
      const isMac = /Macintosh/.test(ua);
      return isIOS || isMac;
    },
    () => true
  );

  const appStoreUrl = "https://apps.apple.com/app/id6807802664"; // Production App Store link

  return (
    <div className={`flex flex-col items-start gap-2 ${className}`}>
      <a
        href={appStoreUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center transition-transform hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c05621] focus-visible:ring-offset-2 rounded-[13px]"
        aria-label="Download Repast on the Apple App Store"
      >
        <svg
          className="h-[46px] sm:h-[52px] w-auto drop-shadow-sm"
          viewBox="0 0 156 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Badge Background */}
          <rect
            width="156"
            height="52"
            rx="12"
            fill="#000000"
          />
          <rect
            x="0.5"
            y="0.5"
            width="155"
            height="51"
            rx="11.5"
            stroke="#A6A6A6"
            strokeWidth="0.8"
          />

          {/* Apple Logo */}
          <g fill="#FFFFFF">
            <path d="M29.56 26.54c-.03-3.66 2.99-5.43 3.12-5.52-1.7-2.48-4.35-2.82-5.29-2.86-2.25-.23-4.4 1.33-5.54 1.33-1.15 0-2.92-1.3-4.79-1.26-2.47.04-4.74 1.44-6.01 3.65-2.57 4.45-.66 11.04 1.85 14.65 1.22 1.76 2.68 3.73 4.59 3.66 1.84-.07 2.54-1.19 4.76-1.19 2.22 0 2.85 1.19 4.77 1.15 1.96-.03 3.2-1.78 4.41-3.55 1.4-2.04 1.97-4.02 2.01-4.13-.04-.02-3.85-1.48-3.88-5.93z" />
            <path d="M26.47 16.3c1.01-1.22 1.69-2.92 1.5-4.63-1.45.06-3.22.97-4.26 2.18-.93 1.07-1.74 2.8-1.52 4.47 1.63.13 3.29-.8 4.28-2.02z" />
          </g>

          {/* Text: Download on the */}
          <text
            x="48"
            y="20"
            fill="#FFFFFF"
            fontSize="10"
            fontFamily="-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Segoe UI', Roboto, sans-serif"
            fontWeight="400"
            letterSpacing="0.2"
          >
            Download on the
          </text>

          {/* Text: App Store */}
          <text
            x="48"
            y="37"
            fill="#FFFFFF"
            fontSize="19"
            fontFamily="-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', Roboto, sans-serif"
            fontWeight="600"
            letterSpacing="-0.3"
          >
            App Store
          </text>
        </svg>
      </a>

      {isClient && !isAppleDevice && showPlatformNote && (
        <p className="text-[13px] leading-[18px] text-[#6e655c] font-medium">
          iPhone only for now. iPad and Android are not planned.
        </p>
      )}
    </div>
  );
}
