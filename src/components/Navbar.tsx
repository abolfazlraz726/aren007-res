import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { AnimatedLogo } from './AnimatedLogo';
import { Shield, Code, Sparkles, Send, FileText, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  lang: Language;
  onToggleLang: () => void;
  onNavigate: (sectionId: string) => void;
  onOpenContact?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  onToggleLang,
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Simple active section detector
      const sections = ['hero', 'resume', 'cyber', 'webdev', 'why', 'order', 'contact'];
      const scrollPos = window.scrollY + 200;
      for (const s of sections) {
        const el = document.getElementById(s);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(s);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links =
    lang === 'en'
      ? [
          { label: 'Dossier', id: 'resume', icon: FileText },
          { label: 'Cyber Defense', id: 'cyber', icon: Shield },
          { label: 'Web Architecture', id: 'webdev', icon: Code },
          { label: 'The Edge', id: 'why', icon: Sparkles },
          { label: 'Commission', id: 'order', icon: Send },
        ]
      : [
          { label: 'رزومه تخصصی', id: 'resume', icon: FileText },
          { label: 'تست نفوذ و امنیت', id: 'cyber', icon: Shield },
          { label: 'توسعه وب مدرن', id: 'webdev', icon: Code },
          { label: 'مزیت و استاندارد', id: 'why', icon: Sparkles },
          { label: 'ثبت سفارش', id: 'order', icon: Send },
        ];

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <>
      <header
        id="aren-navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-3 sm:py-4 px-4 sm:px-8 flex justify-center`}
        dir="ltr"
      >
        <div
          className={`w-full max-w-7xl mx-auto flex items-center justify-between transition-all duration-500 px-4 sm:px-6 py-2.5 sm:py-3 rounded-3xl ${
            scrolled
              ? 'bg-[#0a0c13]/85 backdrop-blur-2xl border border-white/15 shadow-[0_10px_35px_rgba(0,0,0,0.6)]'
              : 'bg-[#0e111a]/50 backdrop-blur-xl border border-white/10 shadow-lg'
          }`}
        >
          {/* Animated 3D Logo (Left) */}
          <div onClick={() => handleLinkClick('hero')} id="navbar-logo">
            <AnimatedLogo size="md" showText={true} />
          </div>

          {/* Desktop Floating Navigation Pills (Center) */}
          <nav
            id="desktop-nav-links"
            className="hidden lg:flex items-center gap-1 p-1 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md shadow-inner"
            dir={lang === 'fa' ? 'rtl' : 'ltr'}
          >
            {links.map((link) => {
              const Icon = link.icon;
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => handleLinkClick(link.id)}
                  className={`group relative flex items-center gap-2 px-3.5 py-1.5 rounded-xl transition-all duration-300 cursor-pointer text-xs font-semibold ${
                    isActive
                      ? 'bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 text-emerald-300 border border-emerald-500/30 shadow-[0_0_15px_rgba(52,211,153,0.2)]'
                      : 'text-neutral-300 hover:text-white hover:bg-white/10 border border-transparent'
                  }`}
                >
                  <Icon
                    className={`w-3.5 h-3.5 transition-transform duration-300 group-hover:scale-110 ${
                      isActive ? 'text-emerald-400' : 'text-neutral-400 group-hover:text-emerald-400'
                    }`}
                  />
                  <span>{link.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Desktop Right Controls (Language & Direct Telegram CTA) */}
          <div id="desktop-nav-right" className="hidden md:flex items-center gap-3">
            {/* Language Switch */}
            <button
              type="button"
              id="lang-toggle-desktop"
              onClick={onToggleLang}
              className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider px-3 py-1.5 rounded-xl border border-white/15 bg-white/5 hover:bg-white/15 text-neutral-200 transition-all cursor-pointer hover:border-emerald-400/50"
              title={lang === 'en' ? 'تغییر به زبان فارسی' : 'Switch to English'}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>{lang === 'en' ? 'FA (فارسی)' : 'EN (English)'}</span>
            </button>

            {/* Direct Telegram Link */}
            <a
              id="desktop-cta-link"
              href="https://t.me/Aren_R0"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 hover:from-emerald-400 hover:to-cyan-400 text-black font-brand font-black text-xs tracking-wider uppercase transition-all shadow-[0_0_20px_rgba(52,211,153,0.35)] hover:shadow-[0_0_30px_rgba(52,211,153,0.6)] hover:scale-105"
            >
              <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
              <span>@Aren_R0</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile Controls & Hamburger */}
          <div className="flex md:hidden items-center gap-2.5">
            <button
              type="button"
              id="lang-toggle-mobile"
              onClick={onToggleLang}
              className="text-[11px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-xl border border-white/20 bg-white/10 text-white"
            >
              {lang === 'en' ? 'FA' : 'EN'}
            </button>

            <button
              type="button"
              id="mobile-hamburger-button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              className="w-9 h-9 rounded-xl bg-white/10 border border-white/15 flex flex-col justify-center items-center gap-[4.5px] z-50 cursor-pointer"
            >
              <span
                className={`w-5 h-[2px] bg-white block transition-all duration-300 ease-in-out ${
                  mobileMenuOpen ? 'rotate-45 translate-y-[6.5px] bg-emerald-400' : ''
                }`}
              />
              <span
                className={`w-5 h-[2px] bg-white block transition-all duration-300 ease-in-out ${
                  mobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`w-5 h-[2px] bg-white block transition-all duration-300 ease-in-out ${
                  mobileMenuOpen ? '-rotate-45 -translate-y-[6.5px] bg-emerald-400' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Overlay Menu */}
      <div
        id="mobile-nav-overlay"
        className={`fixed inset-0 bg-[#06070a]/95 backdrop-blur-2xl z-40 md:hidden flex flex-col justify-center px-8 gap-6 transition-all duration-300 ${
          mobileMenuOpen
            ? 'opacity-100 pointer-events-auto scale-100'
            : 'opacity-0 pointer-events-none scale-95'
        }`}
        dir={lang === 'fa' ? 'rtl' : 'ltr'}
      >
        <div className="flex items-center gap-3 mb-2" dir="ltr">
          <AnimatedLogo size="md" showText={true} />
        </div>

        <div className="flex flex-col gap-4">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <button
                key={link.id}
                type="button"
                onClick={() => handleLinkClick(link.id)}
                className="group flex items-center justify-between p-3 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-emerald-500/50 hover:bg-white/[0.08] text-white transition-all cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-lg font-bold font-heading group-hover:text-emerald-300 transition-colors">
                    {link.label}
                  </span>
                </div>
                <span className="text-sm font-mono text-emerald-400">→</span>
              </button>
            );
          })}
        </div>

        <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
          <a
            href="https://t.me/Aren_R0"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="py-3.5 px-5 rounded-2xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 text-black font-brand font-black text-sm text-center shadow-[0_0_25px_rgba(52,211,153,0.4)]"
          >
            {lang === 'en' ? 'Open Telegram @Aren_R0' : 'ارتباط مستقیم تلگرام (@Aren_R0)'}
          </a>

          <p className="text-xs text-neutral-400 font-mono text-center">
            Cyber Security • Full-Stack Architecture • DevSecOps
          </p>
        </div>
      </div>
    </>
  );
};

