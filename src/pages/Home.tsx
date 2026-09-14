import React from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Stats } from '../components/Stats';
import { Clients } from '../components/Clients';
import { FeatureSections } from '../components/FeatureSections';
import { MidPageCta } from '../components/MidPageCta';
import { Testimonials } from '../components/Testimonials';
import { ContactForm } from '../components/ContactForm';
import { Footer } from '../components/Footer';
import { FloatingWhatsApp } from '../components/FloatingWhatsApp';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-navy selection:bg-cyan selection:text-navy">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Stats />
        <Clients />
        <FeatureSections />
        <MidPageCta />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};
