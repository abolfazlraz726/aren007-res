import React, { useState } from 'react';
import { useTypewriter } from '../hooks/useTypewriter';
import { Language } from '../types';
import { ShieldCheck, MessageSquare, Copy, Check, ArrowDown, ExternalLink } from 'lucide-react';

interface HeroSectionProps {
  lang: Language;
  onSelectAction: (actionKey: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  lang,
  onSelectAction,
}) => {
  const [copied, setCopied] = useState(false);

  // Engaging typewriter text focused on web development & offensive cyber defense
  const typewriterText =
    lang === 'en'
      ? 'Architecting ultra-fast digital web products with impenetrable offensive cyber defense. Direct collaboration from blueprint to production.'
      : 'توسعه وب‌سایت‌های فوق‌سریع و اپلیکیشن‌های مدرن همراه با سنگر امنیتی نفوذناپذیر و تست نفوذ اخلاقی. ارتباط مستقیم بدون واسطه با مهندس پروژه.';

  const { displayed, done } = useTypewriter({
    text: typewriterText,
    speed: 25,
    startDelay: 250,
  });

  const handleCopyContact = async (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText('@Aren_R0');
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <section
      id="hero"
      className="relative z-10 w-full min-h-[92vh] flex flex-col justify-center items-center pt-32 pb-16 px-5 sm:px-8 md:px-14 overflow-hidden text-center"
    >
      {/* 3D Ambient Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-glow" />

      {/* Transparent, Open, Non-Cluttered Central Container */}
      <div
        className="max-w-4xl mx-auto w-full flex flex-col items-center justify-center relative"
        dir={lang === 'fa' ? 'rtl' : 'ltr'}
      >
        {/* 1. Cyber Badge & Live Status Indicator */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-black/40 border border-emerald-400/30 backdrop-blur-md mb-6 shadow-[0_0_25px_rgba(52,211,153,0.15)] hover:border-emerald-400/60 transition-all">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-[11px] sm:text-xs font-mono font-bold text-emerald-300 uppercase tracking-widest">
            {lang === 'en' ? 'AREN // CYBER & WEB ARCHITECT' : 'آرن // مهندسی وب و امنیت سایبری'}
          </span>
          <span className="text-white/30">|</span>
          <span className="text-[11px] sm:text-xs font-mono text-cyan-300 font-bold">
            {lang === 'en' ? 'ONLINE & ACCEPTING ORDERS' : 'پذیرش پروژه فعال'}
          </span>
        </div>

        {/* 2. Hero Big Title - Clean, Dark Aesthetic with Crisp Contrast without opaque boxes */}
        <h1
          className="text-4xl sm:text-6xl md:text-7xl font-black text-white mb-6 leading-[1.25] tracking-tight drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]"
          style={{ fontFamily: lang === 'fa' ? 'var(--font-heading)' : 'var(--font-brand)' }}
        >
          {lang === 'en' ? (
            <>
              Senior <span className="text-gradient-emerald glow-emerald">Web Architect</span> &{' '}
              <span className="text-gradient-amber">Offensive Cyber</span> Security Engineer
            </>
          ) : (
            <>
              مهندس <span className="text-gradient-emerald glow-emerald">طراحی وب</span> و{' '}
              متخصص <span className="text-gradient-amber">هک و امنیت سایبری</span>
            </>
          )}
        </h1>

        {/* 3. Soulful Subtitle with Typewriter */}
        <div className="min-h-[60px] mb-8 max-w-2xl text-center">
          <p
            id="hero-typewriter-text"
            className="text-base sm:text-xl text-neutral-200 leading-relaxed font-body drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]"
          >
            {displayed}
            {!done && (
              <span
                className="inline-block w-[3px] h-[1.15em] bg-emerald-400 align-middle ml-1 mr-1 animate-blink shadow-[0_0_8px_#34d399]"
                aria-hidden="true"
              />
            )}
          </p>
        </div>

        {/* 4. Streamlined 3D Action Buttons */}
        <div className="flex flex-wrap gap-4 items-center justify-center mb-6 w-full max-w-xl">
          {/* Primary 3D Glow Button: Telegram Commission */}
          <a
            href="https://t.me/Aren_R0"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-3 px-7 sm:px-9 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 hover:from-emerald-400 hover:to-cyan-400 text-black font-brand font-black text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-[0_0_35px_rgba(52,211,153,0.5)] hover:shadow-[0_0_50px_rgba(6,182,212,0.8)] hover:scale-105 active:scale-95 cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 text-black" />
            <span>{lang === 'en' ? 'Commission on Telegram (@Aren_R0)' : 'ثبت سفارش در تلگرام (@Aren_R0)'}</span>
            <span className="text-base group-hover:translate-x-1 transition-transform">🚀</span>
          </a>

          {/* Secondary Glass Button: View Dossier & Skills */}
          <button
            type="button"
            onClick={() => onSelectAction('resume')}
            className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-4 rounded-2xl bg-black/40 hover:bg-black/60 text-white hover:text-emerald-300 border border-white/20 hover:border-emerald-400/60 text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer backdrop-blur-md hover:scale-105 active:scale-95 shadow-lg"
          >
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>{lang === 'en' ? 'Explore Dossier' : 'بررسی پرونده و رزومه'}</span>
          </button>

          {/* Quick Copy Telegram ID Button */}
          <button
            type="button"
            id="reach-us-copy-pill"
            onClick={handleCopyContact}
            className="inline-flex items-center gap-2 px-4 py-3.5 rounded-2xl bg-black/40 hover:bg-emerald-500/20 text-neutral-200 hover:text-emerald-300 border border-white/15 hover:border-emerald-400/50 text-xs font-mono transition-all cursor-pointer backdrop-blur-md"
            title="Copy Telegram Handle"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400 font-bold">{lang === 'en' ? 'COPIED!' : 'کپی شد!'}</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-neutral-400" />
                <span>@Aren_R0</span>
              </>
            )}
          </button>
        </div>

        {/* Micro Status Notice */}
        <p className="text-xs sm:text-sm text-neutral-300 font-mono flex items-center justify-center gap-2 drop-shadow-md">
          <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
          {lang === 'en'
            ? 'Direct developer chat • Response within 2 hours • Zero agency overhead'
            : 'مشاوره فنی رایگان و مستقیم با مهندس • پاسخگویی فوری در تلگرام • بدون هزینه واسطه'}
        </p>
      </div>

      {/* Bottom Scroll Indicator */}
      <div
        className="mt-16 flex flex-col items-center justify-center gap-2 opacity-80 hover:opacity-100 transition-opacity cursor-pointer group select-none"
        onClick={() => onSelectAction('resume')}
      >
        <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-300 group-hover:text-emerald-400 transition-colors">
          {lang === 'en' ? 'EXPLORE LAB & PORTFOLIO' : 'مشاهده پرونده تخصصی و رزومه'}
        </span>
        <ArrowDown className="w-4 h-4 text-emerald-400 animate-bounce" />
      </div>
    </section>
  );
};
