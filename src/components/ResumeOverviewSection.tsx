import React, { useState } from 'react';
import { Language } from '../types';
import { SKILLS_DATA } from '../data/portfolioData';
import { TiltCard } from './TiltCard';
import { AnimatedLogo } from './AnimatedLogo';
import { Shield, Terminal, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';

interface ResumeOverviewSectionProps {
  lang: Language;
  onNavigateContact: () => void;
}

export const ResumeOverviewSection: React.FC<ResumeOverviewSectionProps> = ({
  lang,
  onNavigateContact,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'cyber' | 'dev'>('all');
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalHistory, setTerminalHistory] = useState<Array<{ cmd: string; res: string }>>([
    {
      cmd: 'aren --identity',
      res: 'AREN (@Aren_R0) // Lead Full-Stack Architect, Exploit Researcher & Cyber Vanguard.',
    },
    {
      cmd: 'security --status',
      res: 'Zero-Trust Shield: LOCKED [100%]. Zero-Day Mitigation: ONLINE.',
    },
  ]);

  const filteredSkills = SKILLS_DATA.filter((skill) =>
    activeTab === 'all' ? true : skill.category === activeTab
  );

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanCmd = terminalInput.trim().toLowerCase();
    if (!cleanCmd) return;

    let response = '';
    if (cleanCmd === 'help') {
      response = 'Commands: whoami, skills, contact, telegram, security, projects, clear';
    } else if (cleanCmd === 'whoami' || cleanCmd === 'aren') {
      response = 'Aren — Elite Full-Stack Engineer, Red Team Pen-tester & High-Scale Cloud Architect.';
    } else if (cleanCmd === 'telegram' || cleanCmd === 'contact') {
      response = 'Direct Telegram: https://t.me/Aren_R0 (@Aren_R0) — Instant response for commissions';
    } else if (cleanCmd === 'skills') {
      response = 'Cyber: Penetration Testing, OWASP Top 10, WAF, Memory Hardening | Dev: React, TypeScript, Next.js, Node.js, Python, 3D Shaders';
    } else if (cleanCmd === 'security') {
      response = 'Threat Matrix: 0 Exploits Found. SSL Grade: A+. API Gateway: Authenticated & Cryptographically Signed.';
    } else if (cleanCmd === 'projects') {
      response = 'Active Projects: VaultSec Zero-Trust, OmniCommerce Core, CyberVision 3D, SentinelGuard Engine.';
    } else if (cleanCmd === 'clear') {
      setTerminalHistory([]);
      setTerminalInput('');
      return;
    } else {
      response = `Unknown protocol: "${cleanCmd}". Type "help" for valid terminal instructions.`;
    }

    setTerminalHistory((prev) => [...prev, { cmd: terminalInput, res: response }]);
    setTerminalInput('');
  };

  return (
    <section
      id="resume"
      className="relative z-20 py-24 px-5 sm:px-8 md:px-12 max-w-7xl mx-auto"
      dir={lang === 'fa' ? 'rtl' : 'ltr'}
    >
      {/* Section Header */}
      <div className="mb-16 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 mb-4 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-mono tracking-widest uppercase font-bold">
            {lang === 'en' ? 'DOSSIER & CORE CAPABILITIES' : 'پرونده تخصصی و رزومه آرن'}
          </span>
        </div>

        <h2
          className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4 leading-tight"
          style={{ fontFamily: lang === 'fa' ? 'var(--font-heading)' : 'var(--font-brand)' }}
        >
          {lang === 'en' ? (
            <>
              Elite Web Craftsmanship & <span className="text-gradient-emerald glow-emerald">Zero-Trust Shield</span>
            </>
          ) : (
            <>
              معماری مدرن وب و <span className="text-gradient-emerald glow-emerald">سنگر تسخیرناپذیر امنیت</span>
            </>
          )}
        </h2>

        <p className="text-neutral-300 text-base sm:text-lg leading-relaxed font-body">
          {lang === 'en'
            ? 'Merging hypnotic 3D digital experiences with offensive cyber security hardening. Building bulletproof systems that look stunning and withstand real-world attacks.'
            : 'تلفیق تجربیات دیجیتال سه‌بعدی و کدنویسی پیشرفته با دیواره‌های دفاعی مستحکم امنیتی. تحویل پروژه‌های حساس با بالاترین استانداردهای سرعت و حفاظت.'}
        </p>
      </div>

      {/* Grid: 3D Profile Card + Live Security Terminal */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
        {/* Left Column: 3D Profile Card (5 cols) */}
        <div className="lg:col-span-5">
          <TiltCard maxTilt={10} glowColor="rgba(52, 211, 153, 0.35)">
            <div className="bg-black/45 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden group hover:border-emerald-500/50 transition-all duration-500">
              <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none -z-10 group-hover:bg-emerald-500/20 transition-all" />

              {/* Profile Header */}
              <div className="flex items-center gap-4 mb-6">
                <AnimatedLogo size="lg" showText={false} />

                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl sm:text-2xl font-black text-white font-brand">AREN</h3>
                    <span className="text-xs px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-mono font-bold">
                      VERIFIED
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-cyan-300 font-mono">
                    @Aren_R0 • Cyber Architect & Lead Dev
                  </p>
                </div>
              </div>

              {/* Bio text */}
              <p className="text-sm text-neutral-300 leading-relaxed mb-6 font-body">
                {lang === 'en'
                  ? 'Specialized in next-generation React/TypeScript frontends, resilient microservices, ethical penetration testing, and zero-day threat analysis. Transforming bold visions into secured production environments.'
                  : 'متخصص در توسعه وب مدرن (React/Next.js/Node)، پیاده‌سازی معماری‌های سه‌بعدی و تست نفوذ سامانه‌های حساس. هر خط کد با تفکر امنیتی و استانداردهای جهانی نوشته می‌شود.'}
              </p>

              {/* Quick Metrics */}
              <div className="grid grid-cols-2 gap-3 mb-6 font-mono text-xs">
                <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10">
                  <div className="text-emerald-400 text-lg font-bold font-brand">99.9%</div>
                  <div className="text-neutral-400 text-[11px]">
                    {lang === 'en' ? 'Vulnerability Free' : 'مصونیت از آسیب‌پذیری'}
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10">
                  <div className="text-cyan-400 text-lg font-bold font-brand">&lt; 300ms</div>
                  <div className="text-neutral-400 text-[11px]">
                    {lang === 'en' ? 'Global Response Time' : 'پاسخگویی فوق سریع'}
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10">
                  <div className="text-amber-400 text-lg font-bold font-brand">OWASP</div>
                  <div className="text-neutral-400 text-[11px]">
                    {lang === 'en' ? 'Top 10 Shield' : 'پوشش کامل استاندارد'}
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10">
                  <div className="text-purple-400 text-lg font-bold font-brand">24/7</div>
                  <div className="text-neutral-400 text-[11px]">
                    {lang === 'en' ? 'Telegram Support' : 'پشتیبانی مستقیم تلگرام'}
                  </div>
                </div>
              </div>

              {/* Action button */}
              <button
                type="button"
                onClick={onNavigateContact}
                className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 hover:from-emerald-400 hover:to-cyan-400 text-black font-brand font-black text-xs uppercase tracking-wider transition-all duration-300 shadow-[0_0_20px_rgba(52,211,153,0.3)] hover:scale-[1.02] cursor-pointer"
              >
                {lang === 'en' ? 'Start a Commission with Aren' : 'ثبت سفارش پروژه با آرن'}
              </button>
            </div>
          </TiltCard>
        </div>

        {/* Right Column: Live Interactive Cyber Terminal (7 cols) */}
        <div className="lg:col-span-7 bg-black/50 border border-white/15 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-xl">
          {/* Terminal Window Top Bar */}
          <div className="bg-black/60 px-4 py-3 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            </div>

            <span className="text-xs font-mono text-neutral-400 font-medium flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-emerald-400" />
              aren@mainframe-node: ~ (bash)
            </span>

            <div className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
              SECURE_TLS_V1.3
            </div>
          </div>

          {/* Terminal Body */}
          <div className="p-5 sm:p-6 font-mono text-xs text-neutral-200 min-h-[320px] max-h-[380px] overflow-y-auto flex flex-col gap-3">
            <div className="text-neutral-500 text-[11px] pb-2 border-b border-white/5">
              Type <span className="text-emerald-400 font-bold">help</span>, <span className="text-cyan-400 font-bold">skills</span>, <span className="text-amber-400 font-bold">security</span>, or <span className="text-purple-400 font-bold">telegram</span> for diagnostics.
            </div>

            {terminalHistory.map((item, index) => (
              <div key={index} className="flex flex-col gap-1">
                <div className="flex items-center gap-2 text-emerald-400">
                  <span className="text-neutral-500">aren@terminal:~$</span>
                  <span className="font-semibold">{item.cmd}</span>
                </div>
                <div className="text-neutral-300 pl-4 border-l border-emerald-500/30 whitespace-pre-wrap leading-relaxed">
                  {item.res}
                </div>
              </div>
            ))}

            {/* Input line */}
            <form onSubmit={handleCommandSubmit} className="flex items-center gap-2 mt-auto pt-2">
              <span className="text-emerald-400 font-bold">aren@terminal:~$</span>
              <input
                type="text"
                value={terminalInput}
                onChange={(e) => setTerminalInput(e.target.value)}
                placeholder="type a command..."
                className="flex-1 bg-transparent border-none outline-hidden text-neutral-100 font-mono text-xs focus:ring-0 placeholder:text-neutral-600"
              />
              <button
                type="submit"
                className="text-[11px] px-2.5 py-1 rounded bg-white/10 hover:bg-emerald-500 hover:text-black transition-colors font-mono cursor-pointer"
              >
                EXEC
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Skills Matrix with High Contrast Visuals */}
      <div className="mt-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div>
            <h3
              className="text-2xl sm:text-3xl font-black text-white"
              style={{ fontFamily: lang === 'fa' ? 'var(--font-heading)' : 'var(--font-brand)' }}
            >
              {lang === 'en' ? 'Core Technical Arsenal' : 'جعبه ابزار و تخصص‌های فنی آرن'}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 font-body mt-1">
              {lang === 'en'
                ? 'Mastery in battle-tested technologies and offensive security toolchains.'
                : 'تسلط کامل بر فریم‌ورک‌های مدرن وب، ابزارهای تست نفوذ و دیپلوی ابری.'}
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-2 p-1 rounded-2xl bg-white/[0.06] border border-white/10 backdrop-blur-md">
            <button
              type="button"
              onClick={() => setActiveTab('all')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-emerald-500 text-black shadow-md'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              {lang === 'en' ? 'ALL SKILLS' : 'همه مهارت‌ها'}
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('cyber')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                activeTab === 'cyber'
                  ? 'bg-emerald-500 text-black shadow-md'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              {lang === 'en' ? 'CYBER SECURITY' : 'امنیت سایبری'}
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('dev')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                activeTab === 'dev'
                  ? 'bg-emerald-500 text-black shadow-md'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              {lang === 'en' ? 'WEB DEV' : 'توسعه وب'}
            </button>
          </div>
        </div>

        {/* Skills Cards Grid with 3D Hover */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map((skill) => (
            <TiltCard key={skill.name} maxTilt={6} glowColor="rgba(52, 211, 153, 0.2)">
              <div className="p-5 rounded-2xl bg-black/40 border border-white/10 hover:border-emerald-500/40 transition-all duration-300 backdrop-blur-md group h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xl">{skill.icon}</span>
                    <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/20">
                      {skill.level}%
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-white mb-1 group-hover:text-emerald-300 transition-colors font-brand">
                    {lang === 'en' ? skill.name : skill.nameFa}
                  </h4>

                  <p className="text-xs text-neutral-400 leading-relaxed font-body mb-3">
                    {lang === 'en' ? skill.description : skill.descriptionFa}
                  </p>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-emerald-500 to-cyan-400 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};

