import React from 'react';
import { Language } from '../types';
import { PROJECTS_DATA } from '../data/portfolioData';
import { TiltCard } from './TiltCard';
import { ExternalLink, Sparkles, Code2, ArrowUpRight } from 'lucide-react';

interface WebDevSectionProps {
  lang: Language;
}

export const WebDevSection: React.FC<WebDevSectionProps> = ({ lang }) => {
  return (
    <section
      id="webdev"
      className="relative z-20 py-24 px-5 sm:px-8 md:px-12 max-w-7xl mx-auto"
      dir={lang === 'fa' ? 'rtl' : 'ltr'}
    >
      {/* Header */}
      <div className="mb-16 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-xs font-mono tracking-widest uppercase mb-4 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          {lang === 'en' ? 'FULL-STACK WEB & ARCHITECTURE' : 'توسعه وب فول‌استک و سیستم‌های پیشرفته'}
        </div>

        <h2
          className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4 leading-tight"
          style={{ fontFamily: lang === 'fa' ? 'var(--font-heading)' : 'var(--font-brand)' }}
        >
          {lang === 'en' ? (
            <>
              High-Velocity Web & <span className="text-gradient-emerald glow-cyan">Custom Digital Engines</span>
            </>
          ) : (
            <>
              سایت‌های فوق‌سریع و <span className="text-gradient-emerald glow-cyan">معماری اختصاصی کد</span>
            </>
          )}
        </h2>

        <p className="text-neutral-300 text-base sm:text-lg leading-relaxed font-body">
          {lang === 'en'
            ? 'From interactive 3D landing pages to complex multi-tenant SaaS and automated Telegram ecosystems. Every application is optimized for sub-second speed and zero vulnerabilities.'
            : 'از لندینگ پیج‌های سه‌بعدی و مدرن تا پلتفرم‌های پیچیده تحت وب و ربات‌های اتوماسیون تلگرام. طراحی اختصاصی با سرعت لود زیر ثانیه و بدون هیچ آسیب‌پذیری.'}
        </p>
      </div>

      {/* Projects Grid with TiltCard 3D depth */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS_DATA.map((project) => (
          <TiltCard key={project.id} maxTilt={6} glowColor="rgba(6, 182, 212, 0.25)">
            <div className="bg-black/45 hover:bg-black/60 border border-white/10 hover:border-cyan-500/50 rounded-3xl overflow-hidden backdrop-blur-xl transition-all duration-500 hover:shadow-[0_0_30px_rgba(6,182,212,0.25)] flex flex-col justify-between group h-full">
              {/* Image Container with Overlay */}
              <div className="relative h-52 sm:h-64 w-full overflow-hidden bg-neutral-950">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-85 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e15] via-[#0c0e15]/40 to-transparent" />

                {/* Status Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-[11px] font-mono font-bold text-emerald-400 border border-emerald-500/40 shadow-lg">
                    {project.category.toUpperCase()}
                  </span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono px-2.5 py-0.5 rounded-lg bg-white/5 text-neutral-300 border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors font-heading">
                    {lang === 'en' ? project.title : project.titleFa}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-300 font-body leading-relaxed mb-6">
                    {lang === 'en' ? project.description : project.descriptionFa}
                  </p>
                </div>

                {/* Action row */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <a
                    href={`https://t.me/Aren_R0?text=${encodeURIComponent(
                      `Hi Aren, I saw ${project.title} on your portfolio and want to build a similar project.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-mono font-bold text-emerald-400 hover:text-emerald-300 transition-colors group-hover:translate-x-1"
                  >
                    <span>{lang === 'en' ? 'Commission Similar Project' : 'سفارش پروژه مشابه'}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>

                  <span className="text-[11px] font-mono text-neutral-500">
                    Built by AREN
                  </span>
                </div>
              </div>
            </div>
          </TiltCard>
        ))}
      </div>
    </section>
  );
};

