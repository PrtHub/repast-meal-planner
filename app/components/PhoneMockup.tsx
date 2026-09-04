import React from "react";

interface PhoneMockupProps {
  children: React.ReactNode;
  className?: string;
}

export default function PhoneMockup({ children, className = "" }: PhoneMockupProps) {
  return (
    <div
      className={`relative mx-auto w-full max-w-[340px] sm:max-w-[370px] rounded-[48px] p-[10px] bg-[#221d19] shadow-[0_22px_45px_rgba(34,29,25,0.22)] ring-1 ring-black/20 ${className}`}
    >
      {/* Outer rim subtle specular reflection */}
      <div className="absolute inset-0 rounded-[48px] pointer-events-none ring-1 ring-white/15" />

      {/* Screen area */}
      <div className="relative w-full overflow-hidden rounded-[38px] bg-[#f7f4ee] text-[#221d19] flex flex-col min-h-[580px] sm:min-h-[620px] select-none border border-[#e6dfd5]/60">
        {/* iOS Status Bar */}
        <div className="relative z-20 flex items-center justify-between px-7 pt-3 pb-2 text-[13px] font-semibold tracking-tight text-[#221d19]">
          <span className="tabular-nums">9:41</span>

          {/* Dynamic Island */}
          <div className="absolute left-1/2 -translate-x-1/2 top-2 h-[26px] w-[96px] rounded-full bg-black flex items-center justify-end px-2.5">
            <div className="h-2.5 w-2.5 rounded-full bg-[#151515] ring-1 ring-white/10 mr-0.5" />
          </div>

          {/* Battery, Wifi, Cellular icons */}
          <div className="flex items-center gap-1.5 opacity-90">
            {/* Cellular */}
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M2 17h3v4H2v-4zm5-4h3v8H7v-8zm5-4h3v12h-3V9zm5-4h3v16h-3V5z" />
            </svg>
            {/* Wifi */}
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M12 4C7.31 4 3.07 5.9 0 8.98L12 21 24 8.98C20.93 5.9 16.69 4 12 4zm0 3.5c3.78 0 7.21 1.48 9.77 3.91L12 19.14 2.23 11.41C4.79 8.98 8.22 7.5 12 7.5z" />
            </svg>
            {/* Battery */}
            <div className="flex items-center">
              <div className="w-5 h-2.5 rounded-[3px] border border-current p-[1px] flex items-center">
                <div className="h-full w-full bg-current rounded-[1.5px]" />
              </div>
              <div className="w-0.5 h-1 bg-current rounded-r-sm ml-[1px]" />
            </div>
          </div>
        </div>

        {/* Inner Phone Screen Content */}
        <div className="relative flex-1 flex flex-col p-4 pb-7 overflow-hidden">
          {children}
        </div>

        {/* Home Bar Indicator */}
        <div className="relative pb-2 pt-1 flex justify-center pointer-events-none">
          <div className="h-[4px] w-[120px] rounded-full bg-[#221d19]/80" />
        </div>
      </div>
    </div>
  );
}
