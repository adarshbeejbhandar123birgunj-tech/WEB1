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
  const idPrefix = light ? 'orig-logo-light-' : 'orig-logo-dark-';

  if (emblemOnly) {
    return (
      <svg
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-auto shrink-0 select-none ${className}`}
        aria-label="Adarsh Emblem"
      >
        <defs>
          <linearGradient id={`${idPrefix}grad-left`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7bc043" />
            <stop offset="55%" stopColor="#2e7d32" />
            <stop offset="100%" stopColor="#1b5e20" />
          </linearGradient>
          <linearGradient id={`${idPrefix}grad-cross`} x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1b5e20" />
            <stop offset="40%" stopColor="#4caf50" />
            <stop offset="100%" stopColor="#8bc34a" />
          </linearGradient>
          <linearGradient id={`${idPrefix}grad-right`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={light ? "#ffffff" : "#1b5e20"} />
            <stop offset="100%" stopColor={light ? "#c8e6c9" : "#0d3c13"} />
          </linearGradient>
        </defs>

        {/* Left Leaf Blade of the 'A' */}
        <path
          d="M 40 6
             C 30 18, 16 38, 13 54
             C 11 67, 18 73, 26 74
             C 21 65, 23 54, 29 40
             C 34 28, 38 15, 40 6 Z"
          fill={`url(#${idPrefix}grad-left)`}
        />
        {/* Right Stem of the 'A' with Serif Base */}
        <path
          d="M 40 6
             L 61 65
             C 63 70, 66 72, 70 73
             L 70 74
             L 51 74
             L 51 73
             C 55 72, 57 70, 56 65
             L 46 36
             L 40 6 Z"
          fill={`url(#${idPrefix}grad-right)`}
        />
        {/* Sweeping Center Leaf Crossbar */}
        <path
          d="M 5 69
             C 16 57, 32 47, 49 42
             C 64 38, 73 40, 78 45
             C 68 41, 56 41, 43 45
             C 27 50, 14 58, 5 69 Z"
          fill={`url(#${idPrefix}grad-cross)`}
        />
        {/* Center Leaf Rib Highlight */}
        <path
          d="M 11 64
             C 25 54, 41 45, 57 43
             C 68 41, 75 42, 77 44
             C 71 42, 60 41, 50 43
             C 35 46, 21 54, 11 64 Z"
          fill="#dcedc8"
          opacity="0.8"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox={showTagline ? "0 0 280 80" : "0 0 280 62"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-auto shrink-0 select-none ${className}`}
      aria-label="Adarsh - Harvesting Tomorrow"
    >
      <defs>
        {/* Left Leaf Blade Gradient */}
        <linearGradient id={`${idPrefix}grad-left`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7bc043" />
          <stop offset="55%" stopColor="#2e7d32" />
          <stop offset="100%" stopColor="#1b5e20" />
        </linearGradient>

        {/* Dynamic Leaf Crossbar Gradient */}
        <linearGradient id={`${idPrefix}grad-cross`} x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1b5e20" />
          <stop offset="40%" stopColor="#4caf50" />
          <stop offset="100%" stopColor="#8bc34a" />
        </linearGradient>

        {/* Right Stem Gradient */}
        <linearGradient id={`${idPrefix}grad-right`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={light ? "#ffffff" : "#1b5e20"} />
          <stop offset="100%" stopColor={light ? "#c8e6c9" : "#0d3c13"} />
        </linearGradient>
      </defs>

      {/* ======================================================= */}
      {/* 1. ORIGINAL STYLIZED LEAF "A" EMBLEM                    */}
      {/* ======================================================= */}
      <g transform="translate(4, 2)">
        {/* Left Leaf Blade */}
        <path
          d="M 36 5
             C 27 16, 14 35, 12 50
             C 10 61, 16 67, 24 68
             C 19 59, 21 49, 26 36
             C 30 25, 34 14, 36 5 Z"
          fill={`url(#${idPrefix}grad-left)`}
        />
        {/* Right Stem with Serif Base */}
        <path
          d="M 36 5
             L 55 59
             C 57 64, 60 66, 63 67
             L 63 68
             L 46 68
             L 46 67
             C 49 66, 51 64, 50 59
             L 41 33
             L 36 5 Z"
          fill={`url(#${idPrefix}grad-right)`}
        />
        {/* Center Sweeping Leaf Crossbar */}
        <path
          d="M 4 63
             C 14 52, 29 43, 44 38
             C 58 34, 66 36, 71 41
             C 62 37, 51 37, 39 41
             C 24 45, 12 53, 4 63 Z"
          fill={`url(#${idPrefix}grad-cross)`}
        />
        {/* Center Leaf Rib Highlight */}
        <path
          d="M 10 59
             C 23 49, 37 41, 51 39
             C 61 37, 68 38, 70 40
             C 64 38, 54 37, 45 39
             C 32 42, 19 49, 10 59 Z"
          fill="#dcedc8"
          opacity="0.8"
        />
      </g>

      {/* ======================================================= */}
      {/* 2. CLASSIC CORPORATE TYPOGRAPHY                         */}
      {/* ======================================================= */}
      <g transform="translate(86, 0)">
        {/* Main "Adarsh" Wordmark */}
        <text
          x="0"
          y="44"
          fontFamily="'Cormorant Garamond', 'Playfair Display', Georgia, serif"
          fontSize="44"
          fontWeight="bold"
          letterSpacing="-0.5px"
          fill={light ? "#ffffff" : "#14532d"}
        >
          Adarsh
        </text>

        {/* Superscript "TM" */}
        <text
          x="142"
          y="23"
          fontFamily="'Cormorant Garamond', 'Playfair Display', Georgia, serif"
          fontSize="12"
          fontWeight="600"
          fill={light ? "#a7f3d0" : "#166534"}
        >
          TM
        </text>

        {/* Tagline: "Harvesting Tomorrow" */}
        {showTagline && (
          <text
            x="2"
            y="68"
            fontFamily="'Cormorant Garamond', 'Playfair Display', Georgia, serif"
            fontSize="16"
            fontStyle="italic"
            fontWeight="600"
            letterSpacing="0.3px"
            fill={light ? "#a7f3d0" : "#2d7a3a"}
          >
            Harvesting Tomorrow
          </text>
        )}
      </g>
    </svg>
  );
};
