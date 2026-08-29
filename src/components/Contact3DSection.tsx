import React, { useState } from 'react';
import { Language } from '../types';

interface Contact3DSectionProps {
  lang: Language;
}

export const Contact3DSection: React.FC<Contact3DSectionProps> = ({ lang }) => {
  const [copied, setCopied] = useState(false);
  const [projectType, setProjectType] = useState('Full-Stack Web App');
  const [scope, setScope] = useState('');
  const [urgency, setUrgency] = useState('Standard (1-2 weeks)');
  const [clientName, setClientName] = useState('');

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText('@Aren_R0');
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (e) {
      console.error(e);
    }
  };

  const generateTelegramUrl = () => {
    const text =
      lang === 'en'
        ? `Hello Aren!
Name: ${clientName || 'Anonymous'}
Project Type: ${projectType}
Timeline: ${urgency}
Details: ${scope || 'Looking to discuss requirements and get a quote.'}`
        : `سلام آرن عزیز!
نام / شرکت: ${clientName || 'کارفرما'}
نوع پروژه: ${projectType}
زمان‌بندی مدنظر: ${urgency}
توضیحات پروژه: ${scope || 'مایل به دریافت مشاوره فنی و برآورد هزینه و زمان هستم.'}`;

    return `https://t.me/Aren_R0?text=${encodeURIComponent(text)}`;
  };

  return (
    <section
      id="contact"
      className="relative z-20 py-24 px-5 sm:px-8 md:px-12 max-w-7xl mx-auto"
      dir={lang === 'fa' ? 'rtl' : 'ltr'}
    >
      {/* Header */}
      <div className="mb-16 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-mono tracking-widest uppercase mb-4 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          {lang === 'en' ? 'ENCRYPTED DIRECT CHANNEL' : 'ارتباط مستقیم و ثبت سفارش در تلگرام'}
        </div>

        <h2
          className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4 leading-tight"
          style={{ fontFamily: 'var(--font-brand)' }}
        >
          {lang === 'en' ? (
            <>
              Connect with <span className="text-gradient-emerald glow-emerald">AREN</span> on Telegram
            </>
          ) : (
            <>
              ارتباط مستقیم با <span className="text-gradient-emerald glow-emerald">آرن</span> در تلگرام
            </>
          )}
        </h2>

        <p className="text-neutral-300 text-base sm:text-lg leading-relaxed font-body">
          {lang === 'en'
            ? 'Skip the bureaucratic agency delays. Directly converse with Aren on Telegram (@Aren_R0) for fast turnaround, project scoping, and architecture roadmaps.'
            : 'بدون واسطه و اتلاف وقت، جزئیات پروژه خود را مستقیماً در تلگرام مطرح کنید تا مشاوره فنی و زمان‌بندی دقیق را دریافت نمایید.'}
        </p>
      </div>

      {/* Grid: 3D Holographic Card + Telegram Message Builder */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: 3D Holographic ID Card (5 cols) */}
        <div className="lg:col-span-5 bg-black/45 border border-white/10 rounded-3xl p-7 sm:p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden group hover:border-emerald-500/50 transition-all duration-500">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-emerald-500 via-cyan-500 to-blue-500 flex items-center justify-center font-brand font-black text-black text-2xl shadow-[0_0_20px_rgba(52,211,153,0.5)] mb-6">
            A
          </div>

          <h3 className="text-2xl font-black text-white mb-1 font-brand">
            AREN <span className="text-emerald-400 font-mono text-sm">@Aren_R0</span>
          </h3>

          <p className="text-xs sm:text-sm text-cyan-300 font-mono mb-6">
            Cyber Security • Full-Stack Engineer • System Architect
          </p>

          <div className="space-y-3 font-mono text-xs mb-8">
            <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.04] border border-white/10">
              <span className="text-neutral-400">Telegram Handle:</span>
              <span className="text-emerald-400 font-bold">@Aren_R0</span>
            </div>

            <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.04] border border-white/10">
              <span className="text-neutral-400">Response Speed:</span>
              <span className="text-cyan-400 font-bold">&lt; 2 Hours</span>
            </div>

            <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.04] border border-white/10">
              <span className="text-neutral-400">Availability:</span>
              <span className="text-emerald-400 font-bold">OPEN FOR COMMISSIONS</span>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <button
              type="button"
              onClick={handleCopy}
              className="w-full py-3 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-mono font-bold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{copied ? '✓ COPIED TO CLIPBOARD' : 'COPY TELEGRAM ID (@Aren_R0)'}</span>
            </button>

            <a
              href="https://t.me/Aren_R0"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-black font-brand font-black text-xs uppercase tracking-wider text-center transition-all shadow-[0_0_20px_rgba(52,211,153,0.3)] hover:scale-[1.02]"
            >
              {lang === 'en' ? 'Open Telegram App' : 'باز کردن چت تلگرام'}
            </a>
          </div>
        </div>

        {/* Right: Instant Message Builder (7 cols) */}
        <div className="lg:col-span-7 bg-black/50 border border-white/15 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
          <h3 className="text-xl font-bold text-white mb-2 font-brand">
            {lang === 'en' ? 'Quick Telegram Inquiry Builder' : 'پیش‌نویس پیام و محاسبه اولیه سفارش'}
          </h3>
          <p className="text-xs sm:text-sm text-neutral-400 font-body mb-6">
            {lang === 'en'
              ? 'Select your project scope below to automatically format a structured message for Aren.'
              : 'گزینه‌های زیر را انتخاب کنید تا پیام شما با فرمت منظم برای ارسال در تلگرام آماده شود.'}
          </p>

          <div className="space-y-4 font-body text-xs sm:text-sm">
            <div>
              <label className="block text-neutral-300 font-mono text-xs mb-1.5 uppercase tracking-wider">
                {lang === 'en' ? 'Your Name / Company:' : 'نام شما یا سازمان:'}
              </label>
              <input
                type="text"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                placeholder={lang === 'en' ? 'e.g. John Doe / TechCorp' : 'مثال: علی رضایی / شرکت توسعه داده'}
                className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-neutral-600 focus:outline-hidden focus:border-emerald-500"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-neutral-300 font-mono text-xs mb-1.5 uppercase tracking-wider">
                  {lang === 'en' ? 'Project Type:' : 'نوع پروژه:'}
                </label>
                <select
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                  className="w-full p-3 rounded-xl bg-[#121520] border border-white/10 text-white focus:outline-hidden focus:border-emerald-500 cursor-pointer"
                >
                  <option value="Full-Stack Web App">Full-Stack Web App</option>
                  <option value="3D Landing Page / Portfolio">3D Landing Page / Portfolio</option>
                  <option value="Cyber Security / Pentest">Cyber Security / Pentest</option>
                  <option value="Telegram Automation Bot">Telegram Automation Bot</option>
                  <option value="Consulting / Hardening">Consulting / Hardening</option>
                </select>
              </div>

              <div>
                <label className="block text-neutral-300 font-mono text-xs mb-1.5 uppercase tracking-wider">
                  {lang === 'en' ? 'Desired Timeline:' : 'زمان‌بندی:'}
                </label>
                <select
                  value={urgency}
                  onChange={(e) => setUrgency(e.target.value)}
                  className="w-full p-3 rounded-xl bg-[#121520] border border-white/10 text-white focus:outline-hidden focus:border-emerald-500 cursor-pointer"
                >
                  <option value="Urgent (1-3 days)">Urgent (1-3 days)</option>
                  <option value="Standard (1-2 weeks)">Standard (1-2 weeks)</option>
                  <option value="Flexible (1 month+)">Flexible (1 month+)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-neutral-300 font-mono text-xs mb-1.5 uppercase tracking-wider">
                {lang === 'en' ? 'Brief Idea or Requirements:' : 'توضیحات و نیازمندی‌های کلی:'}
              </label>
              <textarea
                rows={3}
                value={scope}
                onChange={(e) => setScope(e.target.value)}
                placeholder={
                  lang === 'en'
                    ? 'Tell Aren about your project vision, target features, or security needs...'
                    : 'خلاصه‌ای از ایده، ویژگی‌های اصلی یا نیازمندی امنیتی را بنویسید...'
                }
                className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-neutral-600 focus:outline-hidden focus:border-emerald-500 resize-none"
              />
            </div>

            <a
              href={generateTelegramUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 hover:from-emerald-400 hover:to-cyan-400 text-black font-brand font-black text-xs uppercase tracking-wider text-center transition-all shadow-[0_0_25px_rgba(52,211,153,0.4)] flex items-center justify-center gap-2 hover:scale-[1.02]"
            >
              <span>{lang === 'en' ? 'Send Formatted Inquiry to @Aren_R0' : 'ارسال پیش‌نویس به تلگرام @Aren_R0'}</span>
              <span>✈️</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
