import React from 'react';

interface AnimatedLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
}

export const AnimatedLogo: React.FC<AnimatedLogoProps> = ({
  size = 'md',
  showText = true,
  className = '',
}) => {
  const sizeMap = {
    sm: { box: 'w-7 h-7', text: 'text-lg', badge: 'w-2 h-2', fontSize: 'text-xs' },
    md: { box: 'w-9 h-9', text: 'text-2xl', badge: 'w-2.5 h-2.5', fontSize: 'text-sm' },
    lg: { box: 'w-16 h-16', text: 'text-4xl', badge: 'w-4 h-4', fontSize: 'text-2xl' },
  };

  const currentSize = sizeMap[size];

  return (
    <div className={`flex items-center gap-3 select-none group cursor-pointer ${className}`}>
      {/* 3D Animated Logo Core */}
      <div className={`relative ${currentSize.box} flex items-center justify-center`}>
        {/* Outer Orbiting Cyber Ring */}
        <div
          className="absolute inset-0 rounded-2xl border border-emerald-400/40 group-hover:border-cyan-400/80 animate-spin transition-all"
          style={{ animationDuration: '8s' }}
        />

        {/* Counter Orbiting Ring */}
        <div
          className="absolute -inset-1 rounded-2xl border border-dashed border-cyan-400/30 group-hover:border-emerald-400/60 animate-spin transition-all"
          style={{ animationDuration: '12s', animationDirection: 'reverse' }}
        />

        {/* Glowing Center Glass Prism */}
        <div className="absolute inset-0.5 rounded-xl bg-gradient-to-tr from-emerald-500 via-cyan-500 to-blue-600 flex items-center justify-center font-brand font-black text-black shadow-[0_0_20px_rgba(52,211,153,0.6)] group-hover:scale-105 group-hover:shadow-[0_0_30px_rgba(6,182,212,0.8)] transition-all duration-300">
          <span className={`font-black tracking-tighter ${currentSize.fontSize}`}>A</span>
        </div>

        {/* Pulsing Energy Core Dot */}
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-black shadow-[0_0_10px_#34d399] animate-pulse" />
      </div>

      {/* Brand Text */}
      {showText && (
        <div className="flex items-center gap-1.5">
          <span
            className={`font-black tracking-tight text-white font-brand ${currentSize.text} group-hover:text-emerald-400 transition-colors duration-300`}
          >
            AREN
          </span>
          <span className="text-emerald-400 text-xs font-mono font-bold align-super">®</span>
          <span
            className="text-emerald-400 text-sm group-hover:rotate-180 transition-transform duration-700 select-none inline-block ml-0.5"
            aria-hidden="true"
          >
            ✳︎
          </span>
        </div>
      )}
    </div>
  );
};
