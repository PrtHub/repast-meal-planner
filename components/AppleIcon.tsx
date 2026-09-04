interface AppleIconProps {
  className?: string;
}

export default function AppleIcon({
  className = "w-4 h-4 fill-current shrink-0",
}: AppleIconProps) {
  return (
    <svg
      className={className}
      viewBox="9 11 25 30"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Exact Apple logo paths from AppStoreBadge in HeroSection */}
      <path d="M29.56 26.54c-.03-3.66 2.99-5.43 3.12-5.52-1.7-2.48-4.35-2.82-5.29-2.86-2.25-.23-4.4 1.33-5.54 1.33-1.15 0-2.92-1.3-4.79-1.26-2.47.04-4.74 1.44-6.01 3.65-2.57 4.45-.66 11.04 1.85 14.65 1.22 1.76 2.68 3.73 4.59 3.66 1.84-.07 2.54-1.19 4.76-1.19 2.22 0 2.85 1.19 4.77 1.15 1.96-.03 3.2-1.78 4.41-3.55 1.4-2.04 1.97-4.02 2.01-4.13-.04-.02-3.85-1.48-3.88-5.93z" />
      <path d="M26.47 16.3c1.01-1.22 1.69-2.92 1.5-4.63-1.45.06-3.22.97-4.26 2.18-.93 1.07-1.74 2.8-1.52 4.47 1.63.13 3.29-.8 4.28-2.02z" />
    </svg>
  );
}
