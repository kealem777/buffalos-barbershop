import React from 'react';

// Left Barber Scissors
export function BarberScissorsIcon({ className = "w-12 h-12" }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="scissorsGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fde68a" />
          <stop offset="50%" stopColor="#d97706" />
          <stop offset="100%" stopColor="#b45309" />
        </linearGradient>
        <linearGradient id="bladeSteel" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="50%" stopColor="#cbd5e1" />
          <stop offset="100%" stopColor="#64748b" />
        </linearGradient>
        <filter id="scissorsGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#f59e0b" floodOpacity="0.4" />
        </filter>
      </defs>

      <g filter="url(#scissorsGlow)">
        {/* Scissor Blade 1 */}
        <path
          d="M24 24 L52 8 C53 7.5 54 8.5 53.5 9.5 L36 32 Z"
          fill="url(#bladeSteel)"
          stroke="#e2e8f0"
          strokeWidth="0.8"
        />
        {/* Scissor Blade 2 */}
        <path
          d="M24 32 L54 44 C55 44.5 54.5 45.5 53.5 45 L32 26 Z"
          fill="url(#bladeSteel)"
          stroke="#e2e8f0"
          strokeWidth="0.8"
        />

        {/* Pivot screw */}
        <circle cx="28" cy="28" r="3.5" fill="url(#scissorsGold)" stroke="#fff" strokeWidth="0.8" />
        <circle cx="28" cy="28" r="1.5" fill="#451a03" />

        {/* Scissor Handle 1 (Upper Ring) */}
        <path
          d="M26 26 L16 16 C13 13 8 15 8 19 C8 23 12 25 15 23 L25 27"
          stroke="url(#scissorsGold)"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="18" r="5" stroke="url(#scissorsGold)" strokeWidth="3" fill="#0f172a" />

        {/* Scissor Handle 2 (Lower Ring with tang) */}
        <path
          d="M26 30 L16 40 C13 43 8 41 8 37 C8 33 12 31 15 33 L25 29"
          stroke="url(#scissorsGold)"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="38" r="5" stroke="url(#scissorsGold)" strokeWidth="3" fill="#0f172a" />
        {/* Little finger rest / tang */}
        <path d="M7 41 Q4 46 6 48" stroke="url(#scissorsGold)" strokeWidth="2.5" strokeLinecap="round" />
      </g>
    </svg>
  );
}

// Right Barber Straight Razor Blade (Опасная бритва / Лезвие)
export function BarberRazorIcon({ className = "w-12 h-12" }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="razorGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="50%" stopColor="#d97706" />
          <stop offset="100%" stopColor="#92400e" />
        </linearGradient>
        <linearGradient id="razorSteel" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="40%" stopColor="#f1f5f9" />
          <stop offset="70%" stopColor="#94a3b8" />
          <stop offset="100%" stopColor="#475569" />
        </linearGradient>
        <filter id="razorGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#f59e0b" floodOpacity="0.4" />
        </filter>
      </defs>

      <g filter="url(#razorGlow)">
        {/* Open Straight Razor Handle (Scale) */}
        <path
          d="M26 34 L12 50 C10 52 14 56 16 54 L32 38"
          stroke="url(#razorGold)"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M14 48 L28 34"
          stroke="#451a03"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        {/* Pivot Pin */}
        <circle cx="28" cy="34" r="3" fill="url(#razorGold)" stroke="#fff" strokeWidth="0.8" />
        <circle cx="28" cy="34" r="1" fill="#18181b" />

        {/* Tang / Monkey tail */}
        <path
          d="M26 36 Q22 40 20 38"
          stroke="url(#razorSteel)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* Steel Blade */}
        <path
          d="M29 33 L48 14 C51 11 55 13 54 17 L36 37 Z"
          fill="url(#razorSteel)"
          stroke="#cbd5e1"
          strokeWidth="0.8"
        />

        {/* Hollow ground bevel line */}
        <path
          d="M32 31 L49 14"
          stroke="#ffffff"
          strokeWidth="1.2"
          strokeLinecap="round"
        />

        {/* Cutting razor edge gleam */}
        <path
          d="M36 37 L54 17"
          stroke="#f8fafc"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        {/* Barber razor decorative etching */}
        <line x1="37" y1="28" x2="43" y2="22" stroke="url(#razorGold)" strokeWidth="1" strokeLinecap="round" />
      </g>
    </svg>
  );
}

// Classic Double Edge Razor Blade (Safety Razor Blade)
export function SafetyRazorBladeIcon({ className = "w-10 h-10" }) {
  return (
    <svg
      viewBox="0 0 64 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="bladeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="50%" stopColor="#e2e8f0" />
          <stop offset="100%" stopColor="#94a3b8" />
        </linearGradient>
      </defs>
      {/* Outer Blade Rectangle with notched corners */}
      <rect x="4" y="4" width="56" height="32" rx="2" fill="url(#bladeGrad)" stroke="#cbd5e1" strokeWidth="1.5" />
      {/* Blade slot cutouts */}
      <rect x="10" y="18" width="44" height="4" rx="2" fill="#0f172a" />
      <circle cx="18" cy="20" r="3.5" fill="#0f172a" />
      <circle cx="32" cy="20" r="5" fill="#0f172a" />
      <circle cx="46" cy="20" r="3.5" fill="#0f172a" />
      {/* Outer corner cutouts */}
      <rect x="2" y="16" width="4" height="8" rx="1" fill="#0a0a0c" />
      <rect x="58" y="16" width="4" height="8" rx="1" fill="#0a0a0c" />
    </svg>
  );
}
