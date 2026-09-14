import React from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Search, 
  TrendingUp, 
  BarChart3, 
  Target, 
  Sparkles,
  Zap,
  ShieldCheck,
  MousePointerClick
} from 'lucide-react';

export const FeatureSections: React.FC = () => {
  const scrollToContact = () => {
    const el = document.querySelector('#contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="services" className="space-y-0">
      {/* Section Header */}
      <section className="pt-16 pb-8 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-light border border-cyan/20 text-cyan-dark text-xs font-semibold tracking-wide uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan" />
            <span>Our Core Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight mb-4">
            Services Engineered for Rapid Business Growth
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            From search visibility to automated lead pipelines, we provide end-to-end digital growth systems that deliver predictable, measurable returns.
          </p>
        </div>
      </section>

      {/* Feature 1: Digital Marketing (White BG, Visual Right) */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Text Side */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <span className="px-3.5 py-1 rounded-full bg-cyan-light text-cyan-dark text-xs font-bold tracking-wider uppercase mb-4 border border-cyan/20">
                Digital Marketing
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy tracking-tight leading-tight mb-5">
                Data-Driven Marketing Campaigns That Consistently Convert
              </h3>
              <p className="text-base text-slate-600 leading-relaxed mb-6">
                Stop wasting advertising dollars on vanity clicks. We build high-intent PPC, paid social, and dynamic retargeting campaigns engineered to acquire your highest-value clients at the lowest customer acquisition cost (CAC).
              </p>
              
              <ul className="space-y-3 mb-8 w-full">
                {[
                  'Multi-channel ad optimization across Google, Meta, and LinkedIn',
                  'Precision audience targeting and behavioral retargeting funnels',
                  'Transparent real-time ROAS tracking and performance dashboards'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start text-sm text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-cyan mr-2.5 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={scrollToContact}
                className="inline-flex items-center text-sm font-bold text-navy hover:text-cyan group transition-colors"
              >
                <span>Scale Your Ad Campaigns</span>
                <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform text-cyan" />
              </button>
            </div>

            {/* Visual Card Side */}
            <div className="lg:col-span-6">
              <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-soft border border-slate-200/80 hover:shadow-card-hover transition-all duration-300">
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-cyan-light flex items-center justify-center text-cyan">
                      <Target className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-navy">Campaign Performance Hub</h4>
                      <p className="text-xs text-slate-500">Live Multichannel ROAS Tracker</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5 animate-pulse"></span>
                    Optimal ROI
                  </span>
                </div>

                {/* Metrics 3-box */}
                <div className="grid grid-cols-3 gap-3 mb-5">
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-center">
                    <span className="text-[11px] text-slate-500 font-medium">Avg. ROAS</span>
                    <p className="text-lg sm:text-xl font-bold text-navy mt-0.5 text-cyan">5.2x</p>
                  </div>
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-center">
                    <span className="text-[11px] text-slate-500 font-medium">Click-Through</span>
                    <p className="text-lg sm:text-xl font-bold text-navy mt-0.5">+4.8%</p>
                  </div>
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-center">
                    <span className="text-[11px] text-slate-500 font-medium">CPA Decrease</span>
                    <p className="text-lg sm:text-xl font-bold text-emerald-600 mt-0.5">-38%</p>
                  </div>
                </div>

                {/* Channel Breakdown */}
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-xs font-semibold mb-1">
                      <span className="text-navy flex items-center">
                        <span className="w-2 h-2 rounded-full bg-cyan mr-1.5"></span>
                        Google Search Ads
                      </span>
                      <span className="text-slate-600">62% Conversion Share</span>
                    </div>
                    <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-cyan rounded-full" style={{ width: '62%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-semibold mb-1">
                      <span className="text-navy flex items-center">
                        <span className="w-2 h-2 rounded-full bg-navy mr-1.5"></span>
                        LinkedIn Retargeting
                      </span>
                      <span className="text-slate-600">26% Conversion Share</span>
                    </div>
                    <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-navy rounded-full" style={{ width: '26%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 2: SEO & Search Visibility (Light Cyan BG, Visual Left) */}
      <section className="py-16 sm:py-20 lg:py-24 bg-cyan-light/50 border-t border-cyan/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual Card Side (Left on Desktop) */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-soft border border-cyan/20 hover:shadow-card-hover transition-all duration-300">
                {/* Search Ranking Card */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
                  <div className="flex items-center space-x-2.5">
                    <div className="w-9 h-9 rounded-xl bg-navy text-cyan flex items-center justify-center">
                      <Search className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-navy">Google Rank Monitor</h4>
                      <p className="text-xs text-slate-500">Target Keywords Tracked: 154</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
                    Top 3: 84%
                  </span>
                </div>

                {/* Keyword list rows */}
                <div className="space-y-2.5 mb-5">
                  <div className="flex items-center justify-between p-2.5 bg-slate-50/90 rounded-xl border border-slate-100 text-xs">
                    <div className="flex items-center space-x-2">
                      <span className="w-6 h-6 rounded-md bg-cyan text-white font-bold flex items-center justify-center text-[11px]">#1</span>
                      <span className="font-semibold text-navy">enterprise b2b solutions</span>
                    </div>
                    <span className="text-emerald-600 font-bold flex items-center">
                      <TrendingUp className="w-3 h-3 mr-1" /> +12 pos
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 bg-slate-50/90 rounded-xl border border-slate-100 text-xs">
                    <div className="flex items-center space-x-2">
                      <span className="w-6 h-6 rounded-md bg-navy text-cyan font-bold flex items-center justify-center text-[11px]">#1</span>
                      <span className="font-semibold text-navy">high roas digital marketing</span>
                    </div>
                    <span className="text-emerald-600 font-bold flex items-center">
                      <TrendingUp className="w-3 h-3 mr-1" /> +18 pos
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 bg-slate-50/90 rounded-xl border border-slate-100 text-xs">
                    <div className="flex items-center space-x-2">
                      <span className="w-6 h-6 rounded-md bg-slate-200 text-slate-700 font-bold flex items-center justify-center text-[11px]">#2</span>
                      <span className="font-semibold text-navy">lead generation agency</span>
                    </div>
                    <span className="text-emerald-600 font-bold flex items-center">
                      <TrendingUp className="w-3 h-3 mr-1" /> +8 pos
                    </span>
                  </div>
                </div>

                {/* SEO Authority Gauge */}
                <div className="p-3.5 bg-cyan-light/70 rounded-xl border border-cyan/20 flex items-center justify-between">
                  <div className="flex items-center space-x-2.5">
                    <ShieldCheck className="w-5 h-5 text-cyan" />
                    <div>
                      <p className="text-xs font-bold text-navy">Domain Authority Rating</p>
                      <p className="text-[11px] text-slate-600">Audit Status: All Web Vitals Passed</p>
                    </div>
                  </div>
                  <span className="text-sm font-extrabold text-navy">DA 78/100</span>
                </div>
              </div>
            </div>

            {/* Text Side */}
            <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col items-start">
              <span className="px-3.5 py-1 rounded-full bg-white text-cyan-dark text-xs font-bold tracking-wider uppercase mb-4 border border-cyan/30 shadow-2xs">
                SEO & Search Visibility
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy tracking-tight leading-tight mb-5">
                Dominate Organic Search & Capture High-Intent Buyers
              </h3>
              <p className="text-base text-slate-600 leading-relaxed mb-6">
                When prospective customers search for your solutions, are they finding you or your competitors? We deploy advanced technical audits, semantic content clusters, and authoritative backlinks to position your brand at the very top of Google.
              </p>

              <ul className="space-y-3 mb-8 w-full">
                {[
                  'Technical SEO architecture, mobile performance, and Core Web Vitals',
                  'Commercial keyword mapping aimed directly at buyer intent',
                  'White-hat editorial link acquisition that builds lasting domain power'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start text-sm text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-cyan mr-2.5 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={scrollToContact}
                className="inline-flex items-center text-sm font-bold text-navy hover:text-cyan group transition-colors"
              >
                <span>Boost Your Search Rankings</span>
                <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform text-cyan" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 3: Website Development (White BG, Visual Right) */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Text Side */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <span className="px-3.5 py-1 rounded-full bg-cyan-light text-cyan-dark text-xs font-bold tracking-wider uppercase mb-4 border border-cyan/20">
                Website Development
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy tracking-tight leading-tight mb-5">
                High-Performance Websites Engineered for Conversions
              </h3>
              <p className="text-base text-slate-600 leading-relaxed mb-6">
                Your website is your best salesperson 24 hours a day. We design responsive, lightning-fast digital experiences optimized to hook visitors in seconds, build instant credibility, and drive frictionless conversions.
              </p>

              <ul className="space-y-3 mb-8 w-full">
                {[
                  'Sub-second page load times with 98+ Google Lighthouse scores',
                  'Mobile-first responsive architecture designed for modern screens',
                  'Persuasive conversion-centered UX that guides users toward action'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start text-sm text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-cyan mr-2.5 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={scrollToContact}
                className="inline-flex items-center text-sm font-bold text-navy hover:text-cyan group transition-colors"
              >
                <span>Build Your High-Converting Site</span>
                <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform text-cyan" />
              </button>
            </div>

            {/* Visual Card Side */}
            <div className="lg:col-span-6">
              <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-soft border border-slate-200/80 hover:shadow-card-hover transition-all duration-300">
                {/* Speed Metric Header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                      <Zap className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-navy">PageSpeed & UX Audit</h4>
                      <p className="text-xs text-slate-500">Core Web Vitals Benchmark</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-black text-emerald-600">99</span>
                    <span className="text-xs text-slate-400 font-medium">/100</span>
                  </div>
                </div>

                {/* Score Indicators */}
                <div className="grid grid-cols-3 gap-3 mb-5">
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-center">
                    <span className="text-[10px] text-slate-500 font-semibold uppercase">LCP Load</span>
                    <p className="text-sm sm:text-base font-bold text-navy mt-0.5">0.6s</p>
                    <span className="text-[9px] text-emerald-600 font-semibold">Fastest 1%</span>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-center">
                    <span className="text-[10px] text-slate-500 font-semibold uppercase">FID Delay</span>
                    <p className="text-sm sm:text-base font-bold text-navy mt-0.5">12ms</p>
                    <span className="text-[9px] text-emerald-600 font-semibold">Instant</span>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-center">
                    <span className="text-[10px] text-slate-500 font-semibold uppercase">Mobile Friendly</span>
                    <p className="text-sm sm:text-base font-bold text-navy mt-0.5">100%</p>
                    <span className="text-[9px] text-cyan font-semibold">Verified</span>
                  </div>
                </div>

                {/* Device Preview representation */}
                <div className="bg-navy rounded-xl p-4 text-white">
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="text-slate-300 font-medium flex items-center">
                      <MousePointerClick className="w-3.5 h-3.5 text-cyan mr-1.5" />
                      Conversion Rate Uplift
                    </span>
                    <span className="text-cyan font-bold">+3.4x Bookings</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Custom optimized funnels eliminate checkout friction and maximize lead capture form completions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 4: Lead Generation (Light Cyan BG, Visual Left) */}
      <section className="py-16 sm:py-20 lg:py-24 bg-cyan-light/50 border-t border-cyan/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual Card Side */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-soft border border-cyan/20 hover:shadow-card-hover transition-all duration-300">
                {/* Pipeline Header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
                  <div className="flex items-center space-x-2.5">
                    <div className="w-9 h-9 rounded-xl bg-cyan text-white flex items-center justify-center">
                      <BarChart3 className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-navy">Automated Pipeline</h4>
                      <p className="text-xs text-slate-500">Live Inbound Deal Flow</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-cyan bg-cyan-light px-2.5 py-1 rounded-full border border-cyan/20">
                    Active Sync
                  </span>
                </div>

                {/* Funnel Steps */}
                <div className="space-y-3 mb-5">
                  <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                    <div className="flex justify-between items-center text-xs mb-1.5">
                      <span className="font-bold text-navy">Stage 1: Inbound Visitors</span>
                      <span className="font-semibold text-slate-600">12,450 / mo</span>
                    </div>
                    <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full bg-slate-400 rounded-full" style={{ width: '100%' }}></div>
                    </div>
                  </div>

                  <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                    <div className="flex justify-between items-center text-xs mb-1.5">
                      <span className="font-bold text-navy">Stage 2: Qualified Leads</span>
                      <span className="font-semibold text-cyan font-bold">1,820 / mo</span>
                    </div>
                    <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full bg-cyan rounded-full" style={{ width: '68%' }}></div>
                    </div>
                  </div>

                  <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                    <div className="flex justify-between items-center text-xs mb-1.5">
                      <span className="font-bold text-navy">Stage 3: Sales Appointments Booked</span>
                      <span className="font-semibold text-emerald-600 font-bold">342 Demos</span>
                    </div>
                    <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-500 rounded-full" style={{ width: '42%' }}></div>
                    </div>
                  </div>
                </div>

                {/* Pipeline Value Highlight */}
                <div className="bg-navy rounded-xl p-3.5 flex items-center justify-between text-white">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Total Pipeline Value</span>
                    <p className="text-base sm:text-lg font-bold text-cyan mt-0.5">$384,500 / mo</p>
                  </div>
                  <span className="text-xs bg-cyan/20 text-cyan border border-cyan/30 px-2.5 py-1 rounded-md font-semibold">
                    100% CRM Integrated
                  </span>
                </div>
              </div>
            </div>

            {/* Text Side */}
            <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col items-start">
              <span className="px-3.5 py-1 rounded-full bg-white text-cyan-dark text-xs font-bold tracking-wider uppercase mb-4 border border-cyan/30 shadow-2xs">
                Lead Generation
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy tracking-tight leading-tight mb-5">
                Predictable, Scalable Inbound Systems That Fill Your Calendar
              </h3>
              <p className="text-base text-slate-600 leading-relaxed mb-6">
                Never worry about where your next client is coming from. We build automated multi-touch lead capture systems that identify high-intent prospects, qualify them automatically, and book ready-to-buy appointments directly onto your team’s calendar.
              </p>

              <ul className="space-y-3 mb-8 w-full">
                {[
                  'Automated lead scoring, filtering, and instant CRM enrichment',
                  'High-converting interactive lead magnets, calculators, and audits',
                  'Direct calendar booking integration with automated SMS/email reminders'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start text-sm text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-cyan mr-2.5 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={scrollToContact}
                className="inline-flex items-center text-sm font-bold text-navy hover:text-cyan group transition-colors"
              >
                <span>Automate Your Lead Pipeline</span>
                <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform text-cyan" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
