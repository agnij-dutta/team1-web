"use client"
import { useState, useRef, useEffect } from 'react';
import { BrandLogo } from './brand-logo';
import type { CSSProperties } from 'react';

const FLAGS = [
  "🇺🇸", "🇬🇧", "🇯🇵", "🇨🇳", "🇮🇳", "🇩🇪", "🇫🇷", "🇮🇹", "🇨🇦", "🇦🇺", "🇧🇷", "🇷🇺"
];

export function OrbitalFlags() {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const flagRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let startTime = performance.now();
    let animationFrame: number;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const rotation = (elapsed * 0.018) % 360; // Complete rotation in 20 seconds

      FLAGS.forEach((_, index) => {
        const flagEl = flagRefs.current[index];
        if (!flagEl) return;

        const angle = ((360 * index) / FLAGS.length + rotation) * (Math.PI / 180);
        const radius = 250;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        flagEl.style.transform = `translate(${x}px, ${y}px)`;
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative w-[600px] h-[600px] will-change-transform"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className={`
          transition-transform duration-700 ease-out will-change-transform
          ${isHovered ? 'scale-110' : 'scale-100'}
        `}>
          <BrandLogo className="w-[200px] h-[200px] opacity-90 relative z-10" />
          <div className="absolute inset-0 bg-red-500/20 blur-3xl -z-10" />
        </div>
      </div>
      <div className="absolute inset-0">
        {FLAGS.map((flag, index) => (
          <div
            key={flag}
            ref={el => flagRefs.current[index] = el}
            className={`
              absolute top-1/2 left-1/2 -translate-x-4 -translate-y-4
              will-change-transform transform-gpu
              transition-transform duration-300
              ${isHovered ? 'hover:scale-150' : ''}
            `}
          >
            <span className="text-4xl filter drop-shadow-lg select-none">{flag}</span>
          </div>
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black opacity-50" />
    </div>
  );
}

// Also export as default
export default OrbitalFlags;