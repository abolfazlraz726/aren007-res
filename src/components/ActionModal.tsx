import React from 'react';
import { Language } from '../types';

interface ActionModalProps {
  actionKey: string | null;
  onClose: () => void;
  lang: Language;
  onNavigateSection: (sectionId: string) => void;
}

export const ActionModal: React.FC<ActionModalProps> = ({
  actionKey,
  onClose,
  lang,
  onNavigateSection,
}) => {
  if (!actionKey) return null;

  const contentMap: Record<
    string,
    {
      title: string;
      titleFa: string;
      desc: string;
      descFa: string;
      primaryBtn: string;
      primaryBtnFa: string;
      targetSection?: string;
      telegramPrompt?: string;
    }
  > = {
    pitch: {
      title: 'Pitch a Project or Startup Idea',
      titleFa: 'طرح ایده و سفارش پروژه',
      desc: 'Have a breakthrough SaaS, e-commerce platform, or high-tier 3D web application? Direct engineering with Aren ensures rapid prototype to hardened production.',
      descFa: 'ایده یک وب‌سایت خاص، پلتفرم SaaS یا استارتاپ را دارید؟ مستقیماً با آرن در تلگرام در میان بگذارید تا زمان‌بندی و راهکار فنی دقیق را دریافت کنید.',
      primaryBtn: 'Open Telegram @Aren_R0',
      primaryBtnFa: 'ارسال ایده در تلگرام (@Aren_R0)',
      telegramPrompt: 'Hello Aren! I would like to pitch a new project idea and discuss development.',
    },
    work: {
      title: 'Collaborate & Partner with AREN',
      titleFa: 'همکاری و استخدام تخصصی',
      desc: 'Looking for a Senior Full-Stack Engineer, DevSecOps Specialist, or Security Consultant for your organization or startup? Aren is available for select high-impact commissions.',
      descFa: 'نیازمند نیروی متخصص ارشد برای توسعه وب یا مشاوره امنیتی و تست نفوذ هستید؟ جهت بررسی شرایط همکاری با آرن در تلگرام پیام دهید.',
      primaryBtn: 'Contact on Telegram',
      primaryBtnFa: 'گفتگو با آرن (@Aren_R0)',
      telegramPrompt: 'Hi Aren, we are interested in discussing collaboration opportunities.',
    },
    hello: {
      title: 'Send a Direct Hello',
      titleFa: 'ارسال پیام و ارتباط مستقیم',
      desc: 'Say hi directly to Aren on Telegram (@Aren_R0). We love discussing cutting-edge frontend architecture, security zero-days, and digital systems.',
      descFa: 'همین حالا در تلگرام به آیدی @Aren_R0 پیام دهید و با ما در ارتباط باشید.',
      primaryBtn: 'Say Hello on Telegram',
      primaryBtnFa: 'ارسال پیام در تلگرام (@Aren_R0)',
      telegramPrompt: 'Hello Aren! Dropping in to say hi and connect.',
    },
    operate: {
      title: 'How AREN Operates',
      titleFa: 'نحوه عملکرد و استانداردهای کاری آرن',
      desc: 'We merge design purity with offensive security testing. Every project receives dedicated git commits, zero-trust backend safeguards, and lifetime deployment assistance.',
      descFa: 'ما با ترکیب ظرافت طراحی مدرن و متدولوژی‌های هک اخلاقی، پروژه‌هایی سریع و نفوذناپذیر تحویل می‌دهیم.',
      primaryBtn: 'View Resume & Skills',
      primaryBtnFa: 'مشاهده رزومه و مراحل سفارش',
      targetSection: 'resume',
    },
  };

  const current = contentMap[actionKey] || contentMap.pitch;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-fade-in"
      dir={lang === 'fa' ? 'rtl' : 'ltr'}
      onClick={onClose}
    >
      <div
        className="bg-[#0e1017] border border-white/20 rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer text-sm font-mono"
        >
          ✕
        </button>

        <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-500 to-cyan-400 text-black font-brand font-black flex items-center justify-center text-xl mb-4 shadow-[0_0_15px_rgba(52,211,153,0.5)]">
          A
        </div>

        <h3
          className="text-2xl font-bold text-white mb-2 tracking-tight font-brand"
        >
          {lang === 'en' ? current.title : current.titleFa}
        </h3>

        <p className="text-sm text-neutral-300 font-body leading-relaxed mb-6">
          {lang === 'en' ? current.desc : current.descFa}
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          {current.targetSection ? (
            <button
              type="button"
              onClick={() => {
                onClose();
                onNavigateSection(current.targetSection!);
              }}
              className="flex-1 py-3.5 px-5 rounded-2xl bg-gradient-to-r from-emerald-500 to-cyan-400 hover:from-emerald-400 hover:to-cyan-300 text-black font-brand font-bold text-xs uppercase tracking-wider transition-all text-center cursor-pointer shadow-lg"
            >
              {lang === 'en' ? current.primaryBtn : current.primaryBtnFa}
            </button>
          ) : (
            <a
              href={`https://t.me/Aren_R0?text=${encodeURIComponent(current.telegramPrompt || '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3.5 px-5 rounded-2xl bg-gradient-to-r from-emerald-500 to-cyan-400 hover:from-emerald-400 hover:to-cyan-300 text-black font-brand font-bold text-xs uppercase tracking-wider transition-all text-center cursor-pointer shadow-lg"
            >
              {lang === 'en' ? current.primaryBtn : current.primaryBtnFa}
            </a>
          )}

          <button
            type="button"
            onClick={onClose}
            className="py-3.5 px-5 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-mono text-xs transition-colors cursor-pointer"
          >
            {lang === 'en' ? 'Close' : 'بستن'}
          </button>
        </div>
      </div>
    </div>
  );
};
