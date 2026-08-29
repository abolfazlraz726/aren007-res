import React from 'react';
import { Language } from '../types';
import { WHY_CHOOSE_DATA } from '../data/portfolioData';
import { TiltCard } from './TiltCard';
import { Sparkles, Send, ShieldCheck } from 'lucide-react';

interface WhyChooseSectionProps {
  lang: Language;
  onNavigateContact: () => void;
}

export const WhyChooseSection: React.FC<WhyChooseSectionProps> = ({
  lang,
  onNavigateContact,
}) => {
  return (
    <section
      id="why"
      className="relative z-20 py-24 px-5 sm:px-8 md:px-12 max-w-7xl mx-auto"
      dir={lang === 'fa' ? 'rtl' : 'ltr'}
    >
      {/* Header */}
      <div className="mb-16 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-mono tracking-widest uppercase mb-4 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          {lang === 'en' ? 'THE UNFAIR ADVANTAGE' : 'چرا انتخاب آرن؟ تمایز و مزیت رقابتی ما'}
        </div>

        <h2
          className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4 leading-tight"
          style={{ fontFamily: lang === 'fa' ? 'var(--font-heading)' : 'var(--font-brand)' }}
        >
          {lang === 'en' ? (
            <>
              Why Founders & Visionaries <span className="text-gradient-emerald glow-emerald">Trust AREN</span>
            </>
          ) : (
            <>
              چرا کارفرمایان حرفه‌ای <span className="text-gradient-emerald glow-emerald">آرن را انتخاب می‌کنند؟</span>
            </>
          )}
        </h2>

        <p className="text-neutral-300 text-base sm:text-lg leading-relaxed font-body">
          {lang === 'en'
            ? 'We deliver what ordinary agencies cannot: zero-vulnerability security, extraordinary 3D performance, and direct engineering access with no intermediaries.'
            : 'ارائه چیزی فراتر از یک سایت معمولی: امنیت تضمین‌شده در برابر هک، کدهای سبک و فوق‌سریع، جلوه‌های سه‌بعدی و ارتباط مستقیم در تلگرام.'}
        </p>
      </div>

      {/* 4 Pillars Grid with 3D TiltCards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
        {WHY_CHOOSE_DATA.map((pillar, index) => (
          <TiltCard key={pillar.id} maxTilt={6} glowColor="rgba(52, 211, 153, 0.25)">
            <div className="bg-black/45 hover:bg-black/60 border border-white/10 hover:border-emerald-500/40 rounded-3xl p-7 sm:p-8 backdrop-blur-xl transition-all duration-500 relative overflow-hidden group h-full shadow-lg">
              <div className="flex items-start justify-between mb-5">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center justify-center font-mono font-bold text-sm shadow-[0_0_15px_rgba(52,211,153,0.2)]">
                  0{index + 1}
                </div>

                <span className="text-2xl">{pillar.icon}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors font-heading">
                {lang === 'en' ? pillar.title : pillar.titleFa}
              </h3>

              <p className="text-xs sm:text-sm text-neutral-300 font-body leading-relaxed">
                {lang === 'en' ? pillar.description : pillar.descriptionFa}
              </p>
            </div>
          </TiltCard>
        ))}
      </div>

      {/* Direct Telegram Banner */}
      <div className="bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-blue-500/20 border border-emerald-500/30 rounded-3xl p-8 sm:p-10 backdrop-blur-2xl text-center flex flex-col items-center justify-center relative overflow-hidden shadow-2xl">
        <h3 className="text-2xl sm:text-3xl font-black text-white mb-3 font-heading">
          {lang === 'en' ? 'Ready to Elevate Your Platform?' : 'آماده خلق یک پلتفرم بی‌رقیب و امن هستید؟'}
        </h3>
        <p className="text-sm sm:text-base text-neutral-300 max-w-xl font-body mb-6 leading-relaxed">
          {lang === 'en'
            ? 'Send a direct message on Telegram (@Aren_R0) to discuss milestones, technical architecture, and rapid deployment.'
            : 'همین حالا در تلگرام به آیدی @Aren_R0 پیام دهید تا نیازمندی‌های پروژه، زمان‌بندی و برآورد دقیق را دریافت کنید.'}
        </p>

        <a
          href="https://t.me/Aren_R0"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 py-3.5 px-8 rounded-2xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 hover:from-emerald-400 hover:to-cyan-300 text-black font-brand font-black text-sm tracking-wider uppercase transition-all shadow-[0_0_25px_rgba(52,211,153,0.4)] hover:scale-105"
        >
          <Send className="w-4 h-4 text-black" />
          <span>{lang === 'en' ? 'Message Aren on Telegram (@Aren_R0)' : 'شروع گفتگو با آرن در تلگرام (@Aren_R0)'}</span>
        </a>
      </div>
    </section>
  );
};

