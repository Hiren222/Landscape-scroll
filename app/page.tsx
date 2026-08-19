'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Milestones from '@/components/Milestones';
import Services from '@/components/Services';
import HowWeWork from '@/components/HowWeWork';
import OurWork from '@/components/OurWork';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import PolicyModal from '@/components/PolicyModal';

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>('');
  const [prefilledService, setPrefilledService] = useState<string>('');
  const [prefilledPlan, setPrefilledPlan] = useState<string>('');
  const [policyModalType, setPolicyModalType] = useState<'privacy' | 'terms' | null>(null);

  // Scroll Spy Logic
  useEffect(() => {
    const sectionIds = ['services', 'how-we-work', 'our-work', 'why-us', 'pricing', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionIds[i]);
            return;
          }
        }
      }
      setActiveSection('');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToOurWork = () => {
    const workSection = document.getElementById('our-work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceTitle: string) => {
    setPrefilledService(serviceTitle);
    setPrefilledPlan('');
    scrollToContact();
  };

  const handleSelectPlan = (planName: string) => {
    setPrefilledPlan(planName);
    setPrefilledService('');
    scrollToContact();
  };

  return (
    <div className="min-h-screen bg-white text-[#1C1C1C] flex flex-col font-sans selection:bg-[#2D6A2D] selection:text-white">
      {/* Sticky Header Nav */}
      <Navbar activeSection={activeSection} onGetQuoteClick={scrollToContact} />

      {/* Main Page Sections */}
      <main className="flex-grow">
        {/* Pinned Hero Section with GSAP Video Scroll (z-index: 0) */}
        <Hero onViewWorkClick={scrollToOurWork} onGetQuoteClick={scrollToContact} />

        {/* Content Sections Below Hero (z-index: 10 with solid background to scroll smoothly over Hero) */}
        <div className="relative z-10 bg-white shadow-2xl">
          {/* Milestone Strip */}
          <Milestones />

          {/* Services Section */}
          <Services onSelectService={handleSelectService} />

          {/* How We Work Section */}
          <HowWeWork />

          {/* Our Work Portfolio Section */}
          <OurWork onGetQuoteForProject={handleSelectService} />

          {/* Why Choose Us Section */}
          <WhyChooseUs />

          {/* Testimonials Section */}
          <Testimonials />

          {/* Pricing Section */}
          <Pricing onSelectPlan={handleSelectPlan} />

          {/* Contact and Quote Request Form Section */}
          <ContactForm
            key={`${prefilledService}-${prefilledPlan}`}
            prefilledService={prefilledService}
            prefilledPlan={prefilledPlan}
          />
        </div>
      </main>

      {/* Footer (z-index: 10) */}
      <div className="relative z-10 bg-[#142312]">
        <Footer
          onOpenPolicy={(type) => setPolicyModalType(type)}
          onSelectServiceLink={handleSelectService}
        />
      </div>

      {/* Privacy / Terms Modal */}
      <PolicyModal
        type={policyModalType}
        onClose={() => setPolicyModalType(null)}
      />
    </div>
  );
}
