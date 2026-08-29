import React, { useState } from 'react';
import { Language } from '../types';
import { TiltCard } from './TiltCard';
import { ShieldCheck, Bug, Terminal, Cpu, CheckCircle2 } from 'lucide-react';

interface CyberSecuritySectionProps {
  lang: Language;
}

export const CyberSecuritySection: React.FC<CyberSecuritySectionProps> = ({ lang }) => {
  const [selectedVector, setSelectedVector] = useState<number>(0);
  const [simulating, setSimulating] = useState<boolean>(false);
  const [simLog, setSimLog] = useState<string>('System Idle. Ready for security simulation test.');

  const attackVectors = [
    {
      title: 'SQL Injection & Auth Bypass',
      titleFa: 'تزریق به دیتابیس (SQLi) و دور زدن احراز هویت',
      desc: 'Simulating payload attacks targeting relational/NoSQL backends and JWT validation loopholes.',
      descFa: 'بررسی آسیب‌پذیری پایگاه‌داده در برابر کوئری‌های مخرب و جعل توکن‌های امنیتی.',
      mitigation: 'Parameterized queries, ORM strict typing, cryptographic JWT validation & rate-limiting.',
      mitigationFa: 'استفاده از کوئری‌های پارامتری، ولیدیشن تایپ‌های دقیق، امضای دیجیتال و محدودیت نرخ درخواست.',
      status: 'SHIELDED',
      threatLevel: 'CRITICAL',
    },
    {
      title: 'XSS & Client-Side Hijacking',
      titleFa: 'تزریق اسکریپت سمت کاربر (XSS) و سرقت سشن',
      desc: 'Simulating stored/reflected DOM manipulation aimed at stealing session cookies and user credentials.',
      descFa: 'تست نفوذ جهت جلوگیری از اجرای اسکریپت‌های مخرب در مرورگر کاربران و دزدیده شدن کوکی‌ها.',
      mitigation: 'Content Security Policy (CSP), Contextual HTML escaping, HttpOnly SameSite cookies.',
      mitigationFa: 'سیاست‌های امنیتی سخت‌گیرانه CSP، اسکیپ کاراکترهای خطرناک و کوکی‌های محافظت‌شده HttpOnly.',
      status: 'SHIELDED',
      threatLevel: 'HIGH',
    },
    {
      title: 'DDoS & Layer 7 Rate Flooding',
      titleFa: 'حملات منع سرویس (DDoS) و فلود لایه ۷',
      desc: 'Simulating botnet surges aiming to exhaust server RAM, CPU, and database connection pools.',
      descFa: 'شبیه‌سازی حملات سنگین ربات‌ها برای اشغال منابع سرور و از دسترس خارج کردن سایت.',
      mitigation: 'Distributed Redis rate-limiting, Cloudflare WAF challenge, dynamic IP throttling.',
      mitigationFa: 'فایروال ابری، لیمیت هوشمند با ردیس، کدهای ضد ربات و بلاک آنی آی‌پی‌های مشکوک.',
      status: 'SHIELDED',
      threatLevel: 'CRITICAL',
    },
    {
      title: 'API Broken Object Level Auth (BOLA)',
      titleFa: 'باگ‌های سطح دسترسی آبجکت در API (BOLA/IDOR)',
      desc: 'Simulating unauthorized horizontal privilege escalation across tenant database records.',
      descFa: 'تست نفوذ دسترسی به اطلاعات سایر کاربران با تغییر دستی شناسه‌ها و پارامترها.',
      mitigation: 'RBAC claim verification, owner-tenant UUID check, zero-trust token middleware.',
      mitigationFa: 'بررسی مالکیت دقیق هر رکورد در لایه میدلور و عدم اتکا به داده‌های سمت کلاینت.',
      status: 'SHIELDED',
      threatLevel: 'HIGH',
    },
  ];

  const handleRunSimulation = (index: number) => {
    setSelectedVector(index);
    setSimulating(true);
    const vector = attackVectors[index];
    setSimLog(`[TEST INITIALIZED] Injecting payload for: ${vector.title}...`);

    setTimeout(() => {
      setSimLog(
        `[INSPECTION] Scanning attack vector... Zero-Trust WAF detected anomalous pattern.\n[MITIGATION] Payload isolated in sandbox. Access revoked. System 100% SECURE.`
      );
      setSimulating(false);
    }, 900);
  };

  return (
    <section
      id="cyber"
      className="relative z-20 py-24 px-5 sm:px-8 md:px-12 max-w-7xl mx-auto"
      dir={lang === 'fa' ? 'rtl' : 'ltr'}
    >
      {/* Section Header */}
      <div className="mb-16 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 mb-4 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-xs font-mono tracking-widest uppercase font-bold">
            {lang === 'en' ? 'OFFENSIVE SECURITY & ETHICAL HACKING' : 'تست نفوذ، امنیت سایبری و هک اخلاقی'}
          </span>
        </div>

        <h2
          className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4 leading-tight"
          style={{ fontFamily: lang === 'fa' ? 'var(--font-heading)' : 'var(--font-brand)' }}
        >
          {lang === 'en' ? (
            <>
              Offensive Insights, <span className="text-gradient-emerald glow-emerald">Zero-Compromise Defense</span>
            </>
          ) : (
            <>
              تفکر تهاجمی هکرها، <span className="text-gradient-emerald glow-emerald">دفاع خلل‌ناپذیر سایبری</span>
            </>
          )}
        </h2>

        <p className="text-neutral-300 text-base sm:text-lg leading-relaxed font-body">
          {lang === 'en'
            ? 'To build unbreakable web software, you must know how adversaries exploit it. Every application developed by Aren undergoes adversarial red-team penetration testing.'
            : 'برای ساخت سیستمی نفوذناپذیر، باید نحوه حمله هکرها را شناخت. تمامی پروژه‌ها توسط آرن تحت آزمون‌های سخت‌گیرانه نفوذپذیری و آسیب‌پذیری روز-صفر قرار می‌گیرند.'}
        </p>
      </div>

      {/* Interactive Attack Vector Sandbox */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Vector Selection List (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-3">
          {attackVectors.map((vector, index) => (
            <TiltCard key={vector.title} maxTilt={5} glowColor="rgba(6, 182, 212, 0.25)">
              <div
                onClick={() => handleRunSimulation(index)}
                className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer backdrop-blur-md ${
                  selectedVector === index
                    ? 'bg-black/60 border-cyan-400/60 shadow-[0_0_20px_rgba(6,182,212,0.25)]'
                    : 'bg-black/35 border-white/10 hover:border-white/25 hover:bg-black/50'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono font-bold text-cyan-400 tracking-wider">
                    VEC-0{index + 1}
                  </span>
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold ${
                      vector.threatLevel === 'CRITICAL'
                        ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                        : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                    }`}
                  >
                    {vector.threatLevel}
                  </span>
                </div>

                <h4 className="text-base font-bold text-white mb-1 font-heading">
                  {lang === 'en' ? vector.title : vector.titleFa}
                </h4>

                <p className="text-xs text-neutral-400 font-body line-clamp-2 leading-relaxed">
                  {lang === 'en' ? vector.desc : vector.descFa}
                </p>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* Right: Real-time Threat Inspector & Mitigation Report (7 cols) */}
        <div className="lg:col-span-7 bg-black/50 border border-white/15 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden">
          <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-400 flex items-center justify-center font-bold font-mono shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                <ShieldCheck className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white font-heading">
                  {lang === 'en'
                    ? attackVectors[selectedVector].title
                    : attackVectors[selectedVector].titleFa}
                </h4>
                <span className="text-xs font-mono text-emerald-400 font-bold">
                  DEFENSE STATUS: {attackVectors[selectedVector].status}
                </span>
              </div>
            </div>

            <button
              type="button"
              disabled={simulating}
              onClick={() => handleRunSimulation(selectedVector)}
              className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-mono font-bold text-xs uppercase tracking-wider transition-all disabled:opacity-50 cursor-pointer shadow-[0_0_15px_rgba(6,182,212,0.4)]"
            >
              {simulating ? (lang === 'en' ? 'TESTING...' : 'در حال تست...') : (lang === 'en' ? 'RE-TEST VECTOR' : 'تست مجدد')}
            </button>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h5 className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-1.5">
              {lang === 'en' ? 'Threat Mechanics:' : 'مکانیزم آسیب‌پذیری:'}
            </h5>
            <p className="text-sm text-neutral-200 font-body leading-relaxed">
              {lang === 'en'
                ? attackVectors[selectedVector].desc
                : attackVectors[selectedVector].descFa}
            </p>
          </div>

          {/* Hardened Countermeasure */}
          <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 mb-6">
            <h5 className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider mb-1 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>{lang === 'en' ? 'Aren Hardened Countermeasure:' : 'پادزهر و لایه دفاعی پیاده‌شده توسط آرن:'}</span>
            </h5>
            <p className="text-xs sm:text-sm text-emerald-200 font-body leading-relaxed">
              {lang === 'en'
                ? attackVectors[selectedVector].mitigation
                : attackVectors[selectedVector].mitigationFa}
            </p>
          </div>

          {/* Live Simulation Log Console */}
          <div className="bg-black/60 rounded-2xl p-4 border border-white/10 font-mono text-xs text-neutral-300">
            <div className="text-[10px] text-neutral-500 uppercase tracking-wider mb-2 flex items-center justify-between">
              <span>INSPECTION LOG:</span>
              <span className="text-emerald-400 font-bold">● LIVE MONITOR</span>
            </div>
            <p className="text-emerald-400 whitespace-pre-wrap leading-relaxed">
              {simLog}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

