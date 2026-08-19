'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ClipboardCheck, FileText, Hammer, ShieldCheck } from 'lucide-react';

export default function HowWeWork() {
  const steps = [
    {
      number: '1',
      title: 'Free Consultation',
      icon: ClipboardCheck,
      description: 'We visit your property, listen to your vision, and assess the space at no charge and no obligation.',
    },
    {
      number: '2',
      title: 'Custom Proposal',
      icon: FileText,
      description: 'You receive a detailed, itemized plan and a clear upfront quote — no surprises, ever.',
    },
    {
      number: '3',
      title: 'Expert Execution',
      icon: Hammer,
      description: 'Our experienced crew transforms your outdoor space with care, precision, and professionalism.',
    },
    {
      number: '4',
      title: 'Ongoing Care',
      icon: ShieldCheck,
      description: 'We offer flexible maintenance plans so your space always looks its absolute best every season.',
    },
  ];

  return (
    <section id="how-we-work" className="bg-white py-20 sm:py-28 scroll-mt-20 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#2D6A2D] bg-[#2D6A2D]/10 px-3 py-1 rounded-full inline-block mb-3">
            How We Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1C1C] tracking-tight mb-4">
            Our Process
          </h2>
          <p className="text-base sm:text-lg text-[#6B7280] font-normal leading-relaxed">
            Simple, transparent, and stress-free from start to finish.
          </p>
        </div>

        {/* Timeline Desktop Horizontal / Mobile Vertical */}
        <div className="relative">
          {/* Connecting Dashed Line for Desktop */}
          <div className="hidden lg:block absolute top-10 left-12 right-12 h-0.5 border-t-2 border-dashed border-[#2D6A2D]/30 z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="flex flex-col lg:items-center text-left lg:text-center relative group"
                >
                  {/* Mobile layout has circle on the left with text on right */}
                  <div className="flex lg:flex-col items-center lg:items-center gap-4 lg:gap-0">
                    {/* Circle */}
                    <div className="w-16 h-16 rounded-full bg-[#2D6A2D] text-white font-black text-xl flex items-center justify-center shadow-lg border-4 border-white lg:mb-6 shrink-0 group-hover:scale-105 transition-transform duration-300">
                      {step.number}
                    </div>

                    <div className="lg:hidden">
                      <h3 className="text-xl font-bold text-[#1C1C1C] flex items-center gap-2">
                        <span>{step.title}</span>
                      </h3>
                      <p className="text-[#6B7280] text-sm mt-1 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Desktop Only Content */}
                  <div className="hidden lg:block">
                    <div className="inline-flex p-2 rounded-lg bg-[#2D6A2D]/10 text-[#2D6A2D] mb-3">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1C1C1C] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-[#6B7280] text-sm leading-relaxed px-2">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
