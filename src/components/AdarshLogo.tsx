import React from 'react';

interface AdarshLogoProps {
  className?: string;
  light?: boolean;
  showTagline?: boolean;
  emblemOnly?: boolean;
}

export const AdarshLogo: React.FC<AdarshLogoProps> = ({
  className = 'h-11',
  light = false,
  showTagline = true,
  emblemOnly = false
}) => {
  const idPrefix = light ? 'logo-light-' : 'logo-dark-';

  return (
    <div className={`inline-flex items-center gap-2.5 sm:gap-3.5 select-none ${className}`}>
      
      {/* ========================================================= */}
      {/* 1. HIGH PRECISION EMBLEM (Organic Leaf "A")               */}
      {/* ========================================================= */}
      <svg
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto aspect-square shrink-0 drop-shadow-xs"
        aria-label="Adarsh Leaf Monogram Emblem"
      >
        <defs>
          {/* Outer Left Leaf Blade - Bright Sunlit Spring Green */}
          <linearGradient id={`${idPrefix}outerLeaf`} x1="10%" y1="10%" x2="80%" y2="90%">
            <stop offset="0%" stopColor="#84cc16" />
            <stop offset="40%" stopColor="#65a30d" />
            <stop offset="100%" stopColor="#15803d" />
          </linearGradient>

          {/* Inner Left Arch - Deep Forest Green */}
          <linearGradient id={`${idPrefix}innerLeaf`} x1="60%" y1="20%" x2="30%" y2="85%">
            <stop offset="0%" stopColor="#166534" />
            <stop offset="60%" stopColor="#14532d" />
            <stop offset="100%" stopColor="#052e16" />
          </linearGradient>

          {/* Dynamic Horizontal Crossbar Swoosh Leaf */}
          <linearGradient id={`${idPrefix}crossSwoosh`} x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#15803d" />
            <stop offset="35%" stopColor="#4ade80" />
            <stop offset="70%" stopColor="#86efac" />
            <stop offset="100%" stopColor="#22c55e" />
          </linearGradient>

          {/* Right Leg Serif Stem */}
          <linearGradient id={`${idPrefix}rightStem`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={light ? "#ffffff" : "#14532d"} />
            <stop offset="100%" stopColor={light ? "#dcfce7" : "#052e16"} />
          </linearGradient>
        </defs>

        {/* 1. Left Blade Body (Deep green inner body) */}
        <path
          d="M 82 14
             C 74 36, 62 62, 52 92
             C 44 116, 42 134, 54 146
             C 38 128, 42 100, 58 68
             C 70 44, 78 26, 82 14 Z"
          fill={light ? "#22c55e" : `url(#${idPrefix}innerLeaf)`}
        />

        {/* 2. Left Blade Crest (Lush lime-to-emerald gradient) */}
        <path
          d="M 82 14
             C 62 38, 36 74, 32 106
             C 28 128, 38 142, 54 146
             C 44 130, 48 110, 58 84
             C 68 58, 76 34, 82 14 Z"
          fill={`url(#${idPrefix}outerLeaf)`}
        />

        {/* 3. Right Serif Leg of the 'A' */}
        <path
          d="M 82 14
             L 122 130
             C 126 138, 132 142, 140 144
             L 140 146
             L 102 146
             L 102 144
             C 110 142, 114 138, 114 130
             L 95 72
             L 82 14 Z"
          fill={light ? "#ffffff" : `url(#${idPrefix}rightStem)`}
        />

        {/* 3b. Soft Shadow under crossbar on right leg */}
        {!light && (
          <path
            d="M 100 86 L 115 84 L 118 98 L 102 99 Z"
            fill="#052e16"
            opacity="0.35"
          />
        )}

        {/* 4. Organic Leaf Swoosh Crossbar (Emerges from bottom-left and sweeps across) */}
        <path
          d="M 10 138
             C 32 116, 62 96, 96 86
             C 124 78, 146 80, 158 92
             C 140 85, 116 85, 88 93
             C 56 102, 30 118, 10 138 Z"
          fill={`url(#${idPrefix}crossSwoosh)`}
        />

        {/* 5. Center Leaf Ridge Highlight */}
        <path
          d="M 24 128
             C 52 108, 82 94, 114 89
             C 134 86, 148 88, 154 92
             C 142 88, 122 86, 102 89
             C 70 96, 44 110, 24 128 Z"
          fill="#d9f99d"
          opacity="0.75"
        />
      </svg>

      {/* ========================================================= */}
      {/* 2. CORPORATE TYPOGRAPHY ("Adarsh™" & "Harvesting Tomorrow") */}
      {/* ========================================================= */}
      {!emblemOnly && (
        <div className="flex flex-col justify-center leading-none tracking-tight">
          
          {/* Main Brand Name + TM */}
          <div className="flex items-baseline gap-0.5">
            <span
              className={`font-serif font-black tracking-tight text-2xl sm:text-[28px] lg:text-[32px] leading-tight ${
                light ? 'text-white' : 'text-emerald-950'
              }`}
              style={{
                fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
                letterSpacing: '-0.02em'
              }}
            >
              Adarsh
            </span>
            <span
              className={`font-serif font-bold text-[10px] sm:text-xs leading-none -translate-y-2 sm:-translate-y-2.5 ${
                light ? 'text-emerald-300' : 'text-emerald-800'
              }`}
              style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif" }}
            >
              ™
            </span>
          </div>

          {/* Subtitle Tagline */}
          {showTagline && (
            <span
              className={`font-serif italic text-[11px] sm:text-[13px] font-bold tracking-wide -mt-1 ${
                light ? 'text-emerald-300' : 'text-emerald-800'
              }`}
              style={{
                fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
                letterSpacing: '0.015em'
              }}
            >
              Harvesting Tomorrow
            </span>
          )}

        </div>
      )}

    </div>
  );
};
