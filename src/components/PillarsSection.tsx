import React from 'react';
import { Language } from '../types';
import { TiltCard } from './TiltCard';
import { ShieldCheck, Zap, Sparkles } from 'lucide-react';

interface PillarsSectionProps {
  lang: Language;
  onNavigate: (sectionId: string) => void;
}

export const PillarsSection: React.FC<PillarsSectionProps> = ({ lang, onNavigate }) => {
  return (
    <section className="relative z-10 w-full py-16 px-5 sm:px-8 md:px-14">
      <div className="max-w-7xl mx-auto" dir={lang === 'fa' ? 'rtl' : 'ltr'}>
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-4 backdrop-blur-md">
            <span>⚡</span>
            <span className="uppercase tracking-widest font-bold">
              {lang === 'en' ? 'CORE COMPETENCIES' : 'ستون‌های تمایز و کیفیت'}
            </span>
          </div>

          <h2
            className="text-2xl sm:text-4xl font-black text-white mb-3 tracking-tight"
            style={{ fontFamily: lang === 'fa' ? 'var(--font-heading)' : 'var(--font-brand)' }}
          >
            {lang === 'en' ? (
              <>
                Engineered for <span className="text-gradient-emerald">Speed</span>, Hardened for{' '}
                <span className="text-gradient-amber">Security</span>
              </>
            ) : (
              <>
                مهندسی شده برای <span className="text-gradient-emerald">سرعت</span>، سنگربندی شده برای{' '}
                <span className="text-gradient-amber">امنیت مطلق</span>
              </>
            )}
          </h2>

          <p className="text-sm sm:text-base text-neutral-300 font-body leading-relaxed">
            {lang === 'en'
              ? 'Every product built in the Aren Lab combines zero-compromise security auditing with modern full-stack performance.'
              : 'هر پروژه‌ای که در لابراتوار آرن توسعه می‌یابد، تلفیقی از بالاترین سطح امنیت سایبری و بالاترین سرعت وب است.'}
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Zero-Trust Security */}
          <TiltCard maxTilt={8} glowColor="rgba(52, 211, 153, 0.3)">
            <div className="p-6 sm:p-7 rounded-3xl bg-black/40 hover:bg-black/60 border border-white/10 hover:border-emerald-500/50 backdrop-blur-xl transition-all duration-300 shadow-xl h-full flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.25)]">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 font-bold">
                    OFFENSIVE SECURITY
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 font-heading group-hover:text-emerald-300 transition-colors">
                  {lang === 'en' ? 'Zero-Day Hardening & Pentesting' : 'تست نفوذ و ایمن‌سازی نفوذناپذیر'}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 font-body leading-relaxed">
                  {lang === 'en'
                    ? 'Red Team vulnerability auditing, SQLi/XSS elimination, and OWASP Top 10 compliance built into every deployment.'
                    : 'تست نفوذ پیشرفته Red Team، بستن تمام روزنه‌های نفوذ (OWASP Top 10) و کدنویسی امن و بدون باگ از هسته سیستم.'}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-emerald-400">
                <span>99.9% SHIELDED</span>
                <button
                  type="button"
                  onClick={() => onNavigate('security')}
                  className="hover:underline text-neutral-300 hover:text-emerald-300 cursor-pointer"
                >
                  {lang === 'en' ? 'Learn more →' : 'بررسی بیشتر ←'}
                </button>
              </div>
            </div>
          </TiltCard>

          {/* Card 2: Ultra High Speed Web */}
          <TiltCard maxTilt={8} glowColor="rgba(6, 182, 212, 0.3)">
            <div className="p-6 sm:p-7 rounded-3xl bg-black/40 hover:bg-black/60 border border-white/10 hover:border-cyan-500/50 backdrop-blur-xl transition-all duration-300 shadow-xl h-full flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.25)]">
                    <Zap className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-mono text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20 font-bold">
                    100/100 LIGHTHOUSE
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 font-heading group-hover:text-cyan-300 transition-colors">
                  {lang === 'en' ? 'Full-Stack Architecture & 3D Web' : 'توسعه وب فوق‌سریع و رابط‌های ۳بعدی'}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 font-body leading-relaxed">
                  {lang === 'en'
                    ? 'High-performance React/Vite architectures, interactive 3D WebGL visuals, and smooth mobile-first UX with sub-second loads.'
                    : 'معماری مدرن فول‌استک با React و Vite، انیمیشن‌های نرم سه‌بعدی و سرعت لودینگ زیر یک ثانیه برای حداکثر جذب کاربر.'}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-cyan-400">
                <span>&lt; 300MS LOAD</span>
                <button
                  type="button"
                  onClick={() => onNavigate('webdev')}
                  className="hover:underline text-neutral-300 hover:text-cyan-300 cursor-pointer"
                >
                  {lang === 'en' ? 'View projects →' : 'نمونه پروژه‌ها ←'}
                </button>
              </div>
            </div>
          </TiltCard>

          {/* Card 3: Direct Partnership */}
          <TiltCard maxTilt={8} glowColor="rgba(168, 85, 247, 0.3)">
            <div className="p-6 sm:p-7 rounded-3xl bg-black/40 hover:bg-black/60 border border-white/10 hover:border-purple-500/50 backdrop-blur-xl transition-all duration-300 shadow-xl h-full flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.25)]">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-mono text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20 font-bold">
                    DIRECT ACCESS
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 font-heading group-hover:text-purple-300 transition-colors">
                  {lang === 'en' ? 'Direct Engineer Partnership' : 'همکاری مستقیم و تحویل به موقع'}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 font-body leading-relaxed">
                  {lang === 'en'
                    ? 'Speak directly with Aren on Telegram (@Aren_R0). Real-time progress updates, clean codebases, and ongoing assistance.'
                    : 'مکالمه مستقیم با مهندس ارشد در تلگرام (@Aren_R0)، شفافیت کامل در روند پیشرفت و پشتیبانی پس از تحویل.'}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-purple-400">
                <span>TELEGRAM: @Aren_R0</span>
                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="hover:underline text-neutral-300 hover:text-purple-300 cursor-pointer"
                >
                  {lang === 'en' ? 'Get in touch →' : 'ارتباط فوری ←'}
                </button>
              </div>
            </div>
          </TiltCard>

        </div>
      </div>
    </section>
  );
};
