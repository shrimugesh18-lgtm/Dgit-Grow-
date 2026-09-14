import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export const MidPageCta: React.FC = () => {
  const scrollToContact = () => {
    const el = document.querySelector('#contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-cyan-light border border-cyan/30 px-6 py-12 sm:px-12 sm:py-16 lg:py-20 text-center shadow-soft">
          {/* Subtle Decorative Elements */}
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-cyan/15 rounded-full blur-2xl pointer-events-none"></div>
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-cyan/15 rounded-full blur-2xl pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl mx-auto">
            {/* Small Eyebrow */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-white text-cyan-dark text-xs font-bold tracking-wider uppercase mb-5 border border-cyan/30 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-cyan" />
              <span>Accelerate Your Growth</span>
            </div>

            {/* Strong Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight mb-5 leading-tight">
              Ready to Grow Your Business?
            </h2>

            {/* Short Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Stop guessing what works. Schedule a free 30-minute growth strategy consultation and discover the exact roadmap to capture your market.
            </p>

            {/* Visually Centered CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                type="button"
                onClick={scrollToContact}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-cyan hover:bg-cyan-hover active:scale-98 transition-all duration-150 rounded-full shadow-soft hover:shadow-cyan-glow focus:outline-none focus:ring-2 focus:ring-cyan focus:ring-offset-2"
              >
                <span>Let's Work Together</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>

            {/* Subtle disclaimer */}
            <p className="text-xs text-slate-500 mt-4">
              No obligation. Free audit and competitor analysis included.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
