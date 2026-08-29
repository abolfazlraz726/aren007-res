import React, { useEffect, useState } from 'react';
import { Language } from '../types';
import { ShieldCheck, Cpu, Terminal, Sparkles, ChevronRight, Zap } from 'lucide-react';

interface CyberPreloaderProps {
  lang: Language;
  onFinish?: () => void;
}

export const CyberPreloader: React.FC<CyberPreloaderProps> = ({ lang, onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [statusIndex, setStatusIndex] = useState(0);
  const [isClosing, setIsClosing] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);

  const statusLogsEn = [
    'Initializing Aren Cyber Architecture & Core Systems...',
    'Establishing Zero-Trust Defensive Shield & Cryptography...',
    'Optimizing 3D Interactive WebGL & Video Matrix Canvas...',
    'Synchronizing Telegram Direct Gateway (@Aren_R0)...',
    'System Ready // Launching Cyber Interface...',
  ];

  const statusLogsFa = [
    'در حال راه‌اندازی هسته معماری وب و سیستم‌های آرن...',
    'فعال‌سازی سنگر امنیتی، پروتکل‌های رمزنگاری و تست نفوذ...',
    'بهینه‌سازی بوم سه‌بعدی تعاملی و رندرهای گرافیکی...',
    'اتصال درگاه ارتباط مستقیم تلگرام با آیدی @Aren_R0...',
    'بارگذاری تکمیل شد // ورود به سامانه امنیتی و نمونه‌کارها...',
  ];

  const currentLogs = lang === 'fa' ? statusLogsFa : statusLogsEn;

  useEffect(() => {
    // Smart progress simulation with real-world feel
    const startTime = Date.now();
    const duration = 2000; // 2.0 seconds ideal duration for dramatic yet fast loading

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const rawProgress = Math.min(100, Math.floor((elapsed / duration) * 100));

      // Dynamic curve: fast start, smooth middle, quick finish
      setProgress(rawProgress);

      // Step logs based on progress
      if (rawProgress < 25) {
        setStatusIndex(0);
      } else if (rawProgress < 50) {
        setStatusIndex(1);
      } else if (rawProgress < 75) {
        setStatusIndex(2);
      } else if (rawProgress < 95) {
        setStatusIndex(3);
      } else {
        setStatusIndex(4);
      }

      if (rawProgress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsClosing(true);
          setTimeout(() => {
            setIsRemoved(true);
            if (onFinish) onFinish();
          }, 600);
        }, 300);
      }
    }, 35);

    return () => clearInterval(interval);
  }, [onFinish]);

  const handleSkip = () => {
    setProgress(100);
    setIsClosing(true);
    setTimeout(() => {
      setIsRemoved(true);
      if (onFinish) onFinish();
    }, 300);
  };

  if (isRemoved) return null;

  return (
    <div
      id="cyber-preloader"
      dir={lang === 'fa' ? 'rtl' : 'ltr'}
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#07090e] transition-all duration-700 ease-out select-none px-4 ${
        isClosing ? 'opacity-0 pointer-events-none scale-105 blur-sm' : 'opacity-100'
      }`}
    >
      {/* Background Cyber Grid & Radiant Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-950/30 via-[#07090e] to-black pointer-events-none" />
      
      {/* Ambient Pulsing Orbs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 sm:w-[450px] h-80 sm:h-[450px] bg-emerald-500/15 rounded-full blur-[100px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-cyan-500/10 rounded-full blur-[90px] pointer-events-none" />

      {/* Cyber Grid Lines overlay */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(52, 211, 153, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(52, 211, 153, 0.2) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />

      {/* Center Preloader Content Card */}
      <div className="relative z-10 max-w-lg w-full flex flex-col items-center text-center">
        
        {/* 1. Futuristic Animated Hologram Core */}
        <div className="relative w-28 h-28 sm:w-36 sm:h-36 mb-8 flex items-center justify-center">
          {/* Outer Orbiting Cyber Ring */}
          <div
            className="absolute inset-0 rounded-3xl border-2 border-emerald-400/40 animate-spin"
            style={{ animationDuration: '6s' }}
          />

          {/* Reverse Orbiting Dashed Ring */}
          <div
            className="absolute -inset-2.5 rounded-3xl border border-dashed border-cyan-400/50 animate-spin"
            style={{ animationDuration: '10s', animationDirection: 'reverse' }}
          />

          {/* Glowing Radial Core Prism */}
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-tr from-emerald-500 via-cyan-500 to-blue-600 flex flex-col items-center justify-center font-brand font-black text-black shadow-[0_0_40px_rgba(52,211,153,0.7)] animate-pulse">
            <span className="text-3xl sm:text-4xl tracking-tighter">A</span>
            <span className="text-[9px] font-mono font-bold tracking-widest uppercase text-black/80 -mt-1">
              CYBER
            </span>
          </div>

          {/* Orbiting Satellite Dot */}
          <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-emerald-400 border-2 border-black shadow-[0_0_15px_#34d399] animate-ping" />
        </div>

        {/* 2. Brand Title */}
        <div className="flex items-center gap-2 mb-2">
          <span className="text-2xl sm:text-3xl font-black font-brand tracking-wider text-white">
            AREN
          </span>
          <span className="text-emerald-400 text-xs font-mono font-bold">®</span>
          <span className="text-cyan-400 text-xs font-mono bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/30">
            v2.6 // SECURE LAB
          </span>
        </div>

        <p className="text-xs sm:text-sm text-neutral-400 font-mono mb-6">
          {lang === 'en'
            ? 'Web Architecture & Offensive Cyber Defense'
            : 'توسعه وب، مهندسی نرم‌افزار و امنیت سایبری'}
        </p>

        {/* 3. High-Tech Cyber Progress Bar */}
        <div className="w-full bg-black/60 border border-white/10 rounded-2xl p-4 sm:p-5 backdrop-blur-xl shadow-2xl mb-5">
          {/* Top Label & Percentage */}
          <div className="flex items-center justify-between text-xs font-mono mb-2.5">
            <span className="text-neutral-400 flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-emerald-400 animate-spin" style={{ animationDuration: '4s' }} />
              <span>{lang === 'en' ? 'SYSTEM INITIALIZING' : 'در حال بارگذاری سیستم'}</span>
            </span>
            <span className="text-emerald-400 font-bold text-sm tracking-wider font-mono">
              {progress}%
            </span>
          </div>

          {/* Bar track */}
          <div className="w-full h-2.5 bg-neutral-900 rounded-full overflow-hidden p-0.5 border border-white/5 relative">
            <div
              className="h-full rounded-full bg-gradient-to-r from-emerald-500 via-cyan-400 to-blue-500 shadow-[0_0_15px_rgba(52,211,153,0.8)] transition-all duration-150 ease-out relative"
              style={{ width: `${progress}%` }}
            >
              {/* Pulsing leading light */}
              <div className="absolute right-0 top-0 bottom-0 w-3 bg-white rounded-full blur-[1px] animate-pulse" />
            </div>
          </div>

          {/* Terminal Console Log */}
          <div className="mt-3.5 pt-3 border-t border-white/5 flex items-center gap-2 text-[11px] sm:text-xs font-mono text-neutral-300 min-h-[24px]">
            <Terminal className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span className="truncate animate-pulse">
              {currentLogs[statusIndex]}
            </span>
          </div>
        </div>

        {/* 4. Telemetry & Direct Bypass Button */}
        <div className="flex items-center justify-between w-full text-[11px] font-mono text-neutral-500 px-1">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-ping" />
              <span>ONLINE</span>
            </span>
            <span>PING: 14ms</span>
          </div>

          {/* Fast Skip Option so users on slower networks can enter immediately */}
          <button
            type="button"
            onClick={handleSkip}
            className="inline-flex items-center gap-1 text-neutral-400 hover:text-emerald-300 transition-colors cursor-pointer py-1 px-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10"
          >
            <span>{lang === 'en' ? 'Bypass & Enter' : 'ورود فوری به سایت'}</span>
            <ChevronRight className="w-3 h-3" />
          </button>
        </div>

      </div>
    </div>
  );
};
