import React from 'react';

interface ClientLogo {
  name: string;
  category: string;
  icon: (props: { className?: string }) => JSX.Element;
}

const clientLogos: ClientLogo[] = [
  {
    name: 'TechCorp',
    category: 'Enterprise SaaS',
    icon: ({ className }) => (
      <svg className={className} viewBox="0 0 120 36" fill="currentColor">
        <rect x="2" y="8" width="20" height="20" rx="6" fill="currentColor" fillOpacity="0.8" />
        <path d="M8 18h8M12 14v8" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
        <text x="30" y="23" fontFamily="sans-serif" fontSize="15" fontWeight="bold" letterSpacing="0.5">TECHCORP</text>
      </svg>
    ),
  },
  {
    name: 'NexusFlow',
    category: 'Fintech Systems',
    icon: ({ className }) => (
      <svg className={className} viewBox="0 0 130 36" fill="currentColor">
        <circle cx="12" cy="18" r="9" fill="none" stroke="currentColor" strokeWidth="3" />
        <circle cx="12" cy="18" r="4" fill="currentColor" />
        <text x="28" y="23" fontFamily="sans-serif" fontSize="15" fontWeight="bold">NexusFlow</text>
      </svg>
    ),
  },
  {
    name: 'ApexDigital',
    category: 'E-Commerce',
    icon: ({ className }) => (
      <svg className={className} viewBox="0 0 135 36" fill="currentColor">
        <polygon points="12,7 21,25 3,25" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <text x="28" y="23" fontFamily="sans-serif" fontSize="15" fontWeight="bold">APEX.DIGITAL</text>
      </svg>
    ),
  },
  {
    name: 'CloudScale',
    category: 'Cloud Infrastructure',
    icon: ({ className }) => (
      <svg className={className} viewBox="0 0 130 36" fill="currentColor">
        <path d="M4 22a6 6 0 0 1 10-4 5 5 0 0 1 8 1 4 4 0 0 1-1 8H4z" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <text x="28" y="23" fontFamily="sans-serif" fontSize="15" fontWeight="bold">CloudScale</text>
      </svg>
    ),
  },
  {
    name: 'Veloce',
    category: 'Automotive & Logistics',
    icon: ({ className }) => (
      <svg className={className} viewBox="0 0 110 36" fill="currentColor">
        <path d="M4 23L12 8L20 23" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <text x="26" y="23" fontFamily="sans-serif" fontSize="15" fontWeight="bold" letterSpacing="1">VELOCE</text>
      </svg>
    ),
  },
  {
    name: 'GrowthPulse',
    category: 'B2B Analytics',
    icon: ({ className }) => (
      <svg className={className} viewBox="0 0 135 36" fill="currentColor">
        <polyline points="3,20 7,20 10,10 14,26 18,16 21,20 25,20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <text x="30" y="23" fontFamily="sans-serif" fontSize="15" fontWeight="bold">GrowthPulse</text>
      </svg>
    ),
  },
];

export const Clients: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10">
          <p className="text-xs sm:text-sm font-semibold text-slate-400 uppercase tracking-widest">
            Trusted By 250+ Industry Leaders & High-Growth Companies
          </p>
        </div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 items-center justify-items-center">
          {clientLogos.map((client, idx) => {
            const Icon = client.icon;
            return (
              <div
                key={idx}
                className="w-full flex items-center justify-center p-3 text-slate-400 hover:text-navy hover:scale-105 transition-all duration-200"
                title={client.name}
              >
                <Icon className="h-7 w-auto max-w-[130px] opacity-70 hover:opacity-100 transition-opacity" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
