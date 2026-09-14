import React from 'react';
import { ArrowRight, Sparkles, CheckCircle } from 'lucide-react';
import { HeroMockup } from './HeroMockup';

export const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-8 pb-16 md:pt-16 md:pb-24 lg:pt-20 lg:pb-28 overflow-hidden bg-white">
      {/* Background subtle radial gradient accent */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-light/50 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-slate-50 rounded-full blur-2xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Supporting copy, CTAs */}
          <div className="lg:col-span-6 text-center lg:text-left flex flex-col items-center lg:items-start">
            {/* Small Eyebrow / Tag Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-light border border-cyan/20 text-cyan-dark text-xs font-semibold tracking-wide uppercase mb-6 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-cyan" />
              <span>Full-Service Digital Growth Partner</span>
            </div>

            {/* Large Bold Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-navy tracking-tight leading-[1.12] mb-6">
              Stop Losing Customers to Your <span className="text-cyan underline decoration-cyan/30 decoration-wavy decoration-2">Competitors</span>
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mb-8">
              We help ambitious businesses dominate search results, transform high-intent traffic into qualified leads, and accelerate revenue with proven data-driven digital marketing strategies.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 sm:gap-4 w-full sm:w-auto mb-8">
              <button
                type="button"
                onClick={() => scrollToSection('#contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 text-base font-semibold text-white bg-cyan hover:bg-cyan-hover active:scale-98 transition-all duration-150 rounded-full shadow-soft hover:shadow-cyan-glow focus:outline-none focus:ring-2 focus:ring-cyan focus:ring-offset-2"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>

              <button
                type="button"
                onClick={() => scrollToSection('#services')}
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 text-base font-semibold text-navy bg-white hover:bg-slate-50 active:scale-98 transition-all duration-150 rounded-full border border-slate-300/90 shadow-2xs hover:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-300"
              >
                <span>Learn More</span>
              </button>
            </div>

            {/* Key Trust Highlights */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-500 font-medium">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-cyan mr-1.5 flex-shrink-0" />
                <span>Zero Long-Term Lock-in</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-cyan mr-1.5 flex-shrink-0" />
                <span>Verified ROI Guaranteed</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-cyan mr-1.5 flex-shrink-0" />
                <span>Dedicated Growth Strategist</span>
              </div>
            </div>
          </div>

          {/* Right Column: SaaS Browser Mockup */}
          <div className="lg:col-span-6 w-full mt-4 lg:mt-0 flex justify-center">
            <HeroMockup />
          </div>
        </div>
      </div>
    </section>
  );
};
