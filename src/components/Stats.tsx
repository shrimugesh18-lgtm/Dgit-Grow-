import React from 'react';
import { StatItem } from '../types';

const stats: StatItem[] = [
  { value: '250+', label: 'Happy Clients', description: 'Across tech, retail & healthcare' },
  { value: '450+', label: 'Projects Completed', description: 'Campaigns & high-ROI funnels' },
  { value: '10+', label: 'Years Experience', description: 'Industry proven leadership' },
  { value: '99%', label: 'Client Satisfaction', description: 'Consistent client retention' },
];

export const Stats: React.FC = () => {
  return (
    <section className="bg-navy py-12 sm:py-16 border-y border-navy-700/80 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-4 sm:p-6 rounded-2xl bg-navy-800/40 border border-navy-700/60 hover:border-cyan/30 transition-all duration-200"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-cyan tracking-tight mb-2">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-white mb-1">
                {stat.label}
              </div>
              <div className="text-[11px] sm:text-xs text-slate-400 max-w-[180px] hidden sm:block">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
