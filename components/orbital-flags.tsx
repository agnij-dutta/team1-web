"use client"

import { useState } from 'react';
import { BrandLogo } from './brand-logo';
import type { CSSProperties } from 'react';

const FLAGS = [
  "🇺🇸", "🇬🇧", "🇯🇵", "🇨🇳", "🇮🇳", "🇩🇪", "🇫🇷", "🇮🇹", "🇨🇦", "🇦🇺", "🇧🇷", "🇷🇺"
];

export function OrbitalFlags() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative w-[600px] h-[600px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className={`
          transition-transform duration-700 ease-out
          ${isHovered ? 'scale-110' : 'scale-100'}
        `}>
          <BrandLogo className="w-[200px] h-[200px] opacity-90 relative z-10" />
          <div className="absolute inset-0 bg-red-500/20 blur-3xl -z-10" />
        </div>
      </div>
      <div className="absolute inset-0">
        <div className={`
          orbital-ring
          ${isHovered ? 'hover:animate-none' : ''}
        `}>
          {FLAGS.map((flag, index) => (
            <div
              key={flag}
              className={`
                orbital-flag
                transform-gpu
                ${isHovered ? 'hover:scale-150 transition-transform duration-300' : ''}
              `}
              style={{
                '--flag-index': index,
                '--total-flags': FLAGS.length,
                transform: `
                  rotate(${(360 * index) / FLAGS.length}deg)
                  translateX(250px)
                  rotate(${-(360 * index) / FLAGS.length}deg)
                `
              } as CSSProperties}
            >
              <div className="relative">
                <div className="absolute inset-[-8px] rounded-full bg-black/20 backdrop-blur-sm border border-red-500/30 shadow-[0_0_15px_rgba(143,1,1,0.3)] transition-all duration-300 group-hover:shadow-[0_0_25px_rgba(143,1,1,0.5)]" />
                <span className="relative text-2xl filter drop-shadow-[0_0_8px_rgba(255,0,0,0.5)]">
                  {flag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black opacity-50" />
    </div>
  );
}

// Also export as default
export default OrbitalFlags;