import React from 'react';

/**
 * Custom SVG icons reflecting the SCOOP LOOP packaging DNA:
 * Looping arrows, circular badges, and energetic fast-food stamps.
 */

export const LoopArrow: React.FC<{ className?: string; size?: number; color?: string }> = ({
  className = '',
  size = 24,
  color = 'currentColor',
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M4 12C4 7.58172 7.58172 4 12 4C15.5 4 18.5 6.2 19.5 9.5M20 12C20 16.4183 16.4183 20 12 20C8.5 20 5.5 17.8 4.5 14.5"
      stroke={color}
      strokeWidth="2.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 9.5H19.5V6M8 14.5H4.5V18"
      stroke={color}
      strokeWidth="2.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ScoopLoopLogo: React.FC<{ className?: string; variant?: 'dark' | 'yellow' | 'white' }> = ({
  className = '',
  variant = 'dark',
}) => {
  const textColor = variant === 'yellow' ? '#FFE000' : variant === 'white' ? '#FFFFFF' : '#0B3B24';
  const loopBg = variant === 'dark' ? '#FFE000' : '#0B3B24';
  const loopStroke = variant === 'dark' ? '#0B3B24' : '#FFE000';

  return (
    <div className={`inline-flex items-center gap-1.5 sm:gap-2.5 font-black tracking-tight select-none max-w-full ${className}`}>
      {/* Icon emblem */}
      <div
        className="relative flex items-center justify-center w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl shadow-xs shrink-0"
        style={{ backgroundColor: loopBg }}
      >
        <svg
          className="w-4 h-4 sm:w-5 sm:h-5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 12a7 7 0 0 1 12-4.5M19 12a7 7 0 0 1-12 4.5"
            stroke={loopStroke}
            strokeWidth="3.2"
            strokeLinecap="round"
          />
          <path
            d="M13.5 7.5H17.2V3.8M10.5 16.5H6.8V20.2"
            stroke={loopStroke}
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Brand typography */}
      <div className="flex flex-col leading-none min-w-0">
        <span
          className="text-sm sm:text-lg font-black uppercase tracking-tight truncate"
          style={{ color: textColor, fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          SCOOP LOOP
        </span>
        <span
          className="text-[7px] sm:text-[9px] font-extrabold tracking-widest uppercase opacity-85 truncate"
          style={{ color: textColor }}
        >
          CHICKEN &amp; SIDES
        </span>
      </div>
    </div>
  );
};

export const LoopingPattern: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 400 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`w-full opacity-15 pointer-events-none ${className}`}
  >
    <path
      d="M10 60 C 50 10, 90 10, 130 60 C 170 110, 210 110, 250 60 C 290 10, 330 10, 370 60"
      stroke="#0B3B24"
      strokeWidth="8"
      strokeLinecap="round"
      strokeDasharray="16 14"
    />
    <circle cx="130" cy="60" r="14" fill="#0B3B24" />
    <circle cx="250" cy="60" r="14" fill="#0B3B24" />
    <path
      d="M125 55 L 135 60 L 125 65"
      stroke="#FFE000"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
