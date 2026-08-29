import React from 'react';
import { Language } from '../types';
import { AnimatedLogo } from './AnimatedLogo';
import { MessageSquare, Heart } from 'lucide-react';

interface FooterProps {
  lang: Language;
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onNavigate }) => {
  return (
    <footer
      className="relative z-20 border-t border-white/10 bg-[#08090d]/95 backdrop-blur-2xl py-12 px-5 sm:px-8 md:px-12 text-white"
      dir={lang === 'fa' ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left: Brand with AnimatedLogo */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="cursor-pointer" onClick={() => onNavigate('hero')}>
            <AnimatedLogo size="md" showText={true} />
          </div>
          <p className="text-xs text-neutral-400 font-body text-center md:text-left">
            {lang === 'en'
              ? 'Next-Gen Web Architecture & Offensive Cyber Defense.'
              : 'توسعه تخصصی وب، سیستم‌های فوق‌سریع و تست نفوذ و امنیت سایبری.'}
          </p>
        </div>

        {/* Center: Quick Links */}
        <div className="flex flex-wrap justify-center gap-6 text-xs sm:text-sm text-neutral-300 font-mono">
          <button
            type="button"
            onClick={() => onNavigate('resume')}
            className="hover:text-emerald-400 transition-colors cursor-pointer bg-transparent border-none p-0"
          >
            {lang === 'en' ? 'Dossier' : 'رزومه'}
          </button>
          <button
            type="button"
            onClick={() => onNavigate('cyber')}
            className="hover:text-emerald-400 transition-colors cursor-pointer bg-transparent border-none p-0"
          >
            {lang === 'en' ? 'Cyber Security' : 'امنیت سایبری'}
          </button>
          <button
            type="button"
            onClick={() => onNavigate('webdev')}
            className="hover:text-emerald-400 transition-colors cursor-pointer bg-transparent border-none p-0"
          >
            {lang === 'en' ? 'Web Architecture' : 'توسعه وب'}
          </button>
          <button
            type="button"
            onClick={() => onNavigate('why')}
            className="hover:text-emerald-400 transition-colors cursor-pointer bg-transparent border-none p-0"
          >
            {lang === 'en' ? 'Why Us' : 'چرا انتخاب من'}
          </button>
          <button
            type="button"
            onClick={() => onNavigate('order')}
            className="hover:text-emerald-400 transition-colors cursor-pointer bg-transparent border-none p-0"
          >
            {lang === 'en' ? 'Order Guide' : 'ثبت سفارش'}
          </button>
          <button
            type="button"
            onClick={() => onNavigate('contact')}
            className="hover:text-emerald-400 transition-colors cursor-pointer bg-transparent border-none p-0"
          >
            {lang === 'en' ? 'Contact' : 'ارتباط'}
          </button>
        </div>

        {/* Right: Direct Telegram Badge */}
        <div className="flex flex-col items-center md:items-end gap-1.5">
          <a
            href="https://t.me/Aren_R0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-emerald-500 hover:text-black text-white text-xs font-mono font-bold transition-all border border-white/15 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Telegram: @Aren_R0</span>
          </a>
          <span className="text-[11px] text-neutral-500 font-mono">
            © {new Date().getFullYear()} AREN (@Aren_R0). All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

