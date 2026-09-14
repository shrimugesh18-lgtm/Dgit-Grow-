import React from 'react';
import { Search, TrendingUp, Award, ArrowUpRight, CheckCircle2, Globe, Users, Zap } from 'lucide-react';

export const HeroMockup: React.FC = () => {
  return (
    <div className="relative w-full max-w-lg lg:max-w-xl mx-auto">
      {/* Background ambient glow */}
      <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan/20 to-cyan/10 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

      {/* Main Browser / Device Card */}
      <div className="relative bg-white rounded-2xl shadow-soft-lg border border-slate-200/80 overflow-hidden">
        {/* Browser Top Window Chrome */}
        <div className="bg-navy px-4 py-3 flex items-center justify-between border-b border-navy-700">
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded-full bg-[#EF4444]/90 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-[#F59E0B]/90 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-[#10B981]/90 inline-block"></span>
          </div>

          <div className="flex-1 max-w-xs mx-3">
            <div className="bg-navy-800/90 text-slate-300 px-3 py-1 rounded-full text-xs flex items-center justify-center space-x-1.5 border border-navy-700">
              <span className="w-2 h-2 rounded-full bg-cyan inline-block animate-pulse"></span>
              <span className="text-slate-400 font-mono text-[11px] truncate">dgitgrow.com/analytics/growth</span>
            </div>
          </div>

          <div className="flex items-center space-x-2 text-slate-400">
            <div className="w-2 h-2 rounded-full bg-slate-500"></div>
            <div className="w-2 h-2 rounded-full bg-slate-500"></div>
          </div>
        </div>

        {/* Browser Viewport Content */}
        <div className="p-4 sm:p-5 bg-gradient-to-b from-slate-50/70 to-white">
          {/* Mock Search Bar Simulation */}
          <div className="bg-white rounded-xl p-3 shadow-sm border border-slate-200/70 mb-4">
            <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
              <span className="font-semibold text-navy flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-cyan" />
                Google Search Position #1
              </span>
              <span className="bg-emerald-50 text-emerald-600 font-semibold px-2 py-0.5 rounded-full text-[10px]">
                Active Campaign
              </span>
            </div>
            <div className="flex items-center bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 text-xs text-slate-600">
              <Search className="w-3.5 h-3.5 text-cyan mr-2 flex-shrink-0" />
              <span className="font-medium text-navy truncate">best digital marketing agency</span>
              <span className="ml-auto text-[10px] text-slate-400">2.4M Searches/mo</span>
            </div>
            {/* Organic Result Snippet */}
            <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-start justify-between">
              <div>
                <p className="text-[11px] text-cyan font-medium">https://yourbusiness.com</p>
                <p className="text-xs font-bold text-navy truncate">Grow Faster & Win Ready-to-Buy Clients</p>
              </div>
              <div className="flex items-center text-amber-500 text-[10px] font-bold">
                ★ 4.9 <span className="text-slate-400 font-normal ml-1">(340+ reviews)</span>
              </div>
            </div>
          </div>

          {/* Growth Analytics Graph Card */}
          <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200/70">
            <div className="flex items-center justify-between mb-3">
              <div>
                <p className="text-[11px] font-medium text-slate-500 uppercase tracking-wider">Organic Traffic Growth</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-xl sm:text-2xl font-bold text-navy tracking-tight">+184.2%</span>
                  <span className="text-xs font-semibold text-emerald-600 flex items-center">
                    <TrendingUp className="w-3 h-3 mr-0.5" />
                    vs last quarter
                  </span>
                </div>
              </div>

              <div className="flex items-center space-x-1 bg-slate-100 p-1 rounded-lg text-[10px] font-semibold text-slate-600">
                <span className="px-2 py-0.5 rounded bg-white text-navy shadow-xs">30D</span>
                <span className="px-2 py-0.5 rounded text-slate-500">90D</span>
                <span className="px-2 py-0.5 rounded text-slate-500">1Y</span>
              </div>
            </div>

            {/* SVG Area Chart */}
            <div className="relative h-28 sm:h-32 w-full pt-2">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 300 100" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="cyanGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#19C7D8" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#19C7D8" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                {/* Horizontal grid lines */}
                <line x1="0" y1="25" x2="300" y2="25" stroke="#E2E8F0" strokeDasharray="3 3" strokeWidth="0.8" />
                <line x1="0" y1="60" x2="300" y2="60" stroke="#E2E8F0" strokeDasharray="3 3" strokeWidth="0.8" />
                <line x1="0" y1="95" x2="300" y2="95" stroke="#E2E8F0" strokeWidth="1" />
                
                {/* Gradient Area Fill */}
                <path
                  d="M 0,85 Q 40,75 75,68 T 150,45 T 225,28 T 300,10 L 300,95 L 0,95 Z"
                  fill="url(#cyanGradient)"
                />
                {/* Solid Curve Line */}
                <path
                  d="M 0,85 Q 40,75 75,68 T 150,45 T 225,28 T 300,10"
                  fill="none"
                  stroke="#19C7D8"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                {/* Active Data Points */}
                <circle cx="150" cy="45" r="4" fill="#FFFFFF" stroke="#19C7D8" strokeWidth="2.5" />
                <circle cx="225" cy="28" r="4" fill="#FFFFFF" stroke="#19C7D8" strokeWidth="2.5" />
                <circle cx="300" cy="10" r="5" fill="#19C7D8" stroke="#FFFFFF" strokeWidth="2" />
              </svg>

              <div className="flex justify-between text-[9px] text-slate-400 mt-1">
                <span>Week 1</span>
                <span>Week 2</span>
                <span>Week 3</span>
                <span>Week 4 (Peak)</span>
              </div>
            </div>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 gap-2.5 mt-3">
            <div className="bg-slate-50/80 border border-slate-200/60 rounded-xl p-2.5 flex items-center space-x-2.5">
              <div className="w-7 h-7 rounded-lg bg-cyan-light flex items-center justify-center text-cyan flex-shrink-0">
                <Users className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] text-slate-500 truncate">Qualified Leads</p>
                <p className="text-xs font-bold text-navy">1,420 <span className="text-[10px] text-emerald-600 font-semibold">(+48%)</span></p>
              </div>
            </div>

            <div className="bg-slate-50/80 border border-slate-200/60 rounded-xl p-2.5 flex items-center space-x-2.5">
              <div className="w-7 h-7 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 flex-shrink-0">
                <Zap className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] text-slate-500 truncate">Ad ROAS</p>
                <p className="text-xs font-bold text-navy">4.8x <span className="text-[10px] text-emerald-600 font-semibold">(Target 3.0x)</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Badge 1: Top Right - SEO Score */}
      <div className="absolute -top-4 -right-2 sm:-right-4 bg-white/95 backdrop-blur-sm border border-slate-200 shadow-soft px-3 py-2 rounded-xl flex items-center space-x-2.5 animate-float z-10">
        <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600">
          <Award className="w-4 h-4" />
        </div>
        <div>
          <div className="flex items-center space-x-1">
            <span className="text-xs font-bold text-navy">SEO Score</span>
            <CheckCircle2 className="w-3 h-3 text-cyan" />
          </div>
          <span className="text-[11px] font-bold text-emerald-600">98/100 (A+ Grade)</span>
        </div>
      </div>

      {/* Floating Badge 2: Bottom Left - Conversion Rate */}
      <div className="absolute -bottom-5 -left-2 sm:-left-4 bg-white/95 backdrop-blur-sm border border-slate-200 shadow-soft px-3.5 py-2.5 rounded-xl flex items-center space-x-2.5 animate-float-reverse z-10">
        <div className="w-8 h-8 rounded-full bg-cyan-light flex items-center justify-center text-cyan">
          <ArrowUpRight className="w-4 h-4" />
        </div>
        <div>
          <p className="text-[10px] font-medium text-slate-500 uppercase tracking-wider">Conversion Rate</p>
          <div className="flex items-center space-x-1.5">
            <span className="text-sm font-bold text-navy">+42.6%</span>
            <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-1.5 py-0.2 rounded">Optimized</span>
          </div>
        </div>
      </div>
    </div>
  );
};
