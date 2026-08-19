'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, DollarSign, Leaf, HeartHandshake } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      title: 'Licensed and Insured',
      icon: ShieldCheck,
      description: 'Fully certified team with over 12 years of hands-on landscaping experience across Austin.',
    },
    {
      title: 'Upfront Pricing',
      icon: DollarSign,
      description: 'No hidden fees. You see the full cost before we lift a single shovel.',
    },
    {
      title: 'Eco-Friendly Methods',
      icon: Leaf,
      description: 'We use organic treatments and sustainable practices that are safe for your family and the environment.',
    },
    {
      title: 'Satisfaction Guaranteed',
      icon: HeartHandshake,
      description: 'We do not consider a job done until you are completely happy with the result.',
    },
  ];

  return (
    <section id="why-us" className="bg-[#1C1C1C] text-white py-20 sm:py-28 scroll-mt-20 relative overflow-hidden">
      {/* Background Subtle Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#2D6A2D]/10 rounded-full blur-3xl -z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#2D6A2D] bg-[#2D6A2D]/20 px-3 py-1 rounded-full inline-block mb-3 border border-[#2D6A2D]/40">
            The Austin Standard
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Why Choose Us
          </h2>
          <p className="text-base sm:text-lg text-gray-400 font-normal leading-relaxed">
            Delivering exceptional quality, total reliability, and unmatched care for your outdoor spaces.
          </p>
        </div>

        {/* 4 Feature Blocks 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-5 p-6 rounded-xl bg-white/5 border border-white/10 hover:border-[#2D6A2D] transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-[#2D6A2D] text-white flex items-center justify-center shrink-0 shadow-lg">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Thin Forest Green Divider Line */}
        <div className="border-t border-[#2D6A2D]/40 pt-12 text-center max-w-3xl mx-auto">
          <blockquote className="text-xl sm:text-2xl font-serif italic text-white mb-4 leading-relaxed">
            &ldquo;We treat every garden like it is our own.&rdquo;
          </blockquote>
          <p className="text-xs font-bold uppercase tracking-widest text-[#2D6A2D]">
            Landscaping Company, Austin TX
          </p>
        </div>
      </div>
    </section>
  );
}
