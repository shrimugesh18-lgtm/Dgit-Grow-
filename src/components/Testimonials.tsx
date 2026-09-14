import React from 'react';
import { Star, Quote, Sparkles } from 'lucide-react';
import { TestimonialItem } from '../types';

const testimonials: TestimonialItem[] = [
  {
    id: '1',
    quote:
      'Dgit Grow transformed our digital acquisition completely. Within four months, our organic inbound leads increased by 280%, and our cost-per-lead dropped by nearly half. They act like a true in-house growth partner.',
    name: 'Marcus Vance',
    role: 'Chief Marketing Officer',
    company: 'NexusFlow Technologies',
    rating: 5,
    avatar: 'MV',
  },
  {
    id: '2',
    quote:
      'We had worked with two other SEO agencies that promised the world with zero results. Dgit Grow restructured our technical architecture and targeted high-intent commercial keywords. We now rank #1 across all our core markets.',
    name: 'Elena Rostova',
    role: 'Founder & CEO',
    company: 'Apex Digital Solutions',
    rating: 5,
    avatar: 'ER',
  },
  {
    id: '3',
    quote:
      'The conversion redesign they executed on our web application was a masterclass. Our bounce rate dropped instantly, and demo requests jumped from 15 per week to over 60. The return on investment has been exceptional.',
    name: 'David Chen',
    role: 'VP of Growth',
    company: 'CloudScale Systems',
    rating: 5,
    avatar: 'DC',
  },
];

export const Testimonials: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-28 bg-slate-50/70 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-cyan-light text-cyan-dark text-xs font-bold tracking-wider uppercase mb-4 border border-cyan/20">
            <Sparkles className="w-3.5 h-3.5 text-cyan" />
            <span>Proven Client Results</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight mb-4">
            What Our Clients Say
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            See how ambitious companies partner with Dgit Grow to scale their customer acquisition and dominate their respective markets.
          </p>
        </div>

        {/* Testimonials Grid: 1 col on mobile, 3 cols on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl p-7 sm:p-8 shadow-soft border border-slate-200/80 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* 5-Star Rating & Quote Icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center space-x-1" aria-label={`${t.rating} out of 5 stars`}>
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-7 h-7 text-cyan/30" />
                </div>

                {/* Quote Text */}
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6 italic">
                  "{t.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-5 border-t border-slate-100 flex items-center space-x-3.5">
                <div className="w-11 h-11 rounded-full bg-navy text-cyan font-bold text-sm flex items-center justify-center flex-shrink-0 shadow-sm border border-cyan/30">
                  {t.avatar}
                </div>
                <div className="min-w-0">
                  <h4 className="text-sm font-bold text-navy truncate">{t.name}</h4>
                  <p className="text-xs text-slate-500 truncate">{t.role}</p>
                  <p className="text-xs font-semibold text-cyan-dark truncate">{t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
