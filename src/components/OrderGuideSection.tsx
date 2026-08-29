import React from 'react';
import { Language } from '../types';
import { ORDER_STEPS_DATA } from '../data/portfolioData';
import { TiltCard } from './TiltCard';
import { CheckCircle2, MessageSquare, Send } from 'lucide-react';

interface OrderGuideSectionProps {
  lang: Language;
  onOpenTelegram: () => void;
}

export const OrderGuideSection: React.FC<OrderGuideSectionProps> = ({
  lang,
  onOpenTelegram,
}) => {
  return (
    <section
      id="order"
      className="relative z-20 py-24 px-5 sm:px-8 md:px-12 max-w-7xl mx-auto"
      dir={lang === 'fa' ? 'rtl' : 'ltr'}
    >
      {/* Header */}
      <div className="mb-16 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-xs font-mono tracking-widest uppercase mb-4 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          {lang === 'en' ? 'COMMISSION PIPELINE' : 'مراحل آسان ثبت سفارش از طریق تلگرام'}
        </div>

        <h2
          className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4 leading-tight"
          style={{ fontFamily: lang === 'fa' ? 'var(--font-heading)' : 'var(--font-brand)' }}
        >
          {lang === 'en' ? (
            <>
              Commissioning with AREN via <span className="text-gradient-emerald glow-cyan">@Aren_R0</span>
            </>
          ) : (
            <>
              مراحل ثبت سفارش و همکاری با <span className="text-gradient-emerald glow-cyan">آرن (@Aren_R0)</span>
            </>
          )}
        </h2>

        <p className="text-neutral-300 text-base sm:text-lg leading-relaxed font-body">
          {lang === 'en'
            ? 'A zero-friction, transparent roadmap. Direct developer collaboration from the first message to final hardened deployment.'
            : 'روندی سریع، شفاف و بدون واسطه. از اولین مشاوره در تلگرام تا کدنویسی، تست نفوذ و تحویل نهایی پروژه.'}
        </p>
      </div>

      {/* 4 Steps Timeline Grid with 3D TiltCards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
        {ORDER_STEPS_DATA.map((step) => (
          <TiltCard key={step.number} maxTilt={8} glowColor="rgba(6, 182, 212, 0.25)">
            <div className="bg-black/45 hover:bg-black/60 border border-white/10 hover:border-cyan-500/50 rounded-3xl p-6 sm:p-7 backdrop-blur-xl transition-all duration-500 flex flex-col justify-between group h-full shadow-lg">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-2xl font-mono font-black text-cyan-400 font-brand">
                    {step.number}
                  </span>
                  <div className="w-8 h-8 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 font-heading group-hover:text-cyan-300 transition-colors">
                  {lang === 'en' ? step.title : step.titleFa}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-300 font-body leading-relaxed mb-4">
                  {lang === 'en' ? step.description : step.descriptionFa}
                </p>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-cyan-400">
                <span>STEP {step.number}</span>
                <span className="font-bold">● VERIFIED</span>
              </div>
            </div>
          </TiltCard>
        ))}
      </div>

      {/* CTA Button */}
      <div className="text-center">
        <button
          type="button"
          onClick={onOpenTelegram}
          className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 hover:from-emerald-400 hover:to-cyan-400 text-black font-brand font-black text-sm tracking-wider uppercase transition-all shadow-[0_0_30px_rgba(52,211,153,0.4)] hover:scale-105 cursor-pointer"
        >
          <Send className="w-4 h-4 text-black" />
          <span>{lang === 'en' ? 'Open Telegram @Aren_R0 Now' : 'ارسال پیام به @Aren_R0 در تلگرام'}</span>
          <span className="text-base">🚀</span>
        </button>
      </div>
    </section>
  );
};

