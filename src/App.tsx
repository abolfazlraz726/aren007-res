import React, { useState } from 'react';
import { CyberPreloader } from './components/CyberPreloader';
import { BackgroundMedia } from './components/BackgroundMedia';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { PillarsSection } from './components/PillarsSection';
import { ResumeOverviewSection } from './components/ResumeOverviewSection';
import { CyberSecuritySection } from './components/CyberSecuritySection';
import { WebDevSection } from './components/WebDevSection';
import { WhyChooseSection } from './components/WhyChooseSection';
import { OrderGuideSection } from './components/OrderGuideSection';
import { Contact3DSection } from './components/Contact3DSection';
import { ActionModal } from './components/ActionModal';
import { Footer } from './components/Footer';
import { Language } from './types';

export default function App() {
  const [lang, setLang] = useState<Language>('fa');
  const [activeModalAction, setActiveModalAction] = useState<string | null>(null);

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'en' ? 'fa' : 'en'));
  };

  return (
    <div
      className={`min-h-screen relative selection:bg-emerald-400 selection:text-black font-body`}
    >
      {/* High-Tech Cyber Loading & System Initialization Preloader */}
      <CyberPreloader lang={lang} />

      {/* Permanent Fixed 3D Interactive Mouse-Scrub Video Canvas */}
      <BackgroundMedia
        mode="video-scrub"
        sensitivity={0.85}
      />

      {/* Fixed Top Navbar */}
      <Navbar
        lang={lang}
        onToggleLang={toggleLanguage}
        onNavigate={handleNavigate}
        onOpenContact={() => handleNavigate('contact')}
      />

      {/* Main Interactive Sections Flow */}
      <main className="relative z-10">
        {/* Full-Screen Hero Landing with Mouse-Scrub Video */}
        <HeroSection
          lang={lang}
          onSelectAction={(actionKey) => {
            if (actionKey === 'resume' || actionKey === 'operate') {
              handleNavigate('resume');
            } else if (actionKey === 'hello') {
              handleNavigate('contact');
            } else {
              setActiveModalAction(actionKey);
            }
          }}
        />

        {/* 3 Core Quality & Security Pillars */}
        <PillarsSection
          lang={lang}
          onNavigate={handleNavigate}
        />

        {/* Aren's 3D Dossier, Terminal & Skills Overview */}
        <ResumeOverviewSection
          lang={lang}
          onNavigateContact={() => handleNavigate('order')}
        />

        {/* Ethical Hacking, Pentest & Zero-Day Defense Interactive Section */}
        <CyberSecuritySection lang={lang} />

        {/* Full-Stack Modern Web & Architecture Projects */}
        <WebDevSection lang={lang} />

        {/* Why Choose Aren & The Competitive Advantage */}
        <WhyChooseSection
          lang={lang}
          onNavigateContact={() => handleNavigate('contact')}
        />

        {/* 4-Step Order Guide via Telegram @Aren_R0 */}
        <OrderGuideSection
          lang={lang}
          onOpenTelegram={() => window.open('https://t.me/Aren_R0', '_blank')}
        />

        {/* Rich 3D Interactive Telegram Contact & Message Builder */}
        <Contact3DSection lang={lang} />
      </main>

      {/* Footer */}
      <Footer lang={lang} onNavigate={handleNavigate} />

      {/* Interactive Modal for Action Pill Buttons */}
      <ActionModal
        actionKey={activeModalAction}
        onClose={() => setActiveModalAction(null)}
        lang={lang}
        onNavigateSection={handleNavigate}
      />
    </div>
  );
}
