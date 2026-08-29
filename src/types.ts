export type Language = 'en' | 'fa';

export type BackgroundMode = 'video-scrub' | 'cyber-grid' | 'dark-matrix' | 'ambient-studio' | 'neon-hacker';

export interface SkillItem {
  name: string;
  nameFa: string;
  level: number;
  category: 'cyber' | 'dev' | 'core';
  description: string;
  descriptionFa: string;
  icon: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  titleFa: string;
  category: 'Cyber Security' | 'Full-Stack Web' | 'Automation & Bots' | 'Core Architecture';
  categoryFa: 'امنیت سایبری و تست نفوذ' | 'توسعه وب فول‌استک' | 'ربات و اتوماسیون' | 'معماری سیستم';
  description: string;
  descriptionFa: string;
  tags: string[];
  metrics: string;
  metricsFa: string;
  demoUrl?: string;
  telegramContact: string;
  image: string;
}

export interface WhyChoosePillar {
  id: string;
  title: string;
  titleFa: string;
  description: string;
  descriptionFa: string;
  highlight: string;
  highlightFa: string;
  icon: string;
}

export interface OrderStep {
  number: string;
  title: string;
  titleFa: string;
  description: string;
  descriptionFa: string;
  tip: string;
  tipFa: string;
}
