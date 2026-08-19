'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "They completely transformed our backyard from a patch of weeds into something we are genuinely proud of. Incredible work from start to finish.",
      name: "Sarah M.",
      neighborhood: "Westlake Hills",
      service: "Garden Design",
    },
    {
      quote: "On time, on budget, and the lawn has never looked better. I have already recommended them to three neighbors.",
      name: "James R.",
      neighborhood: "Round Rock",
      service: "Lawn Care & Mowing",
    },
    {
      quote: "The stone patio they built is the best investment we have made in our home. Every guest comments on it.",
      name: "Linda & Tom K.",
      neighborhood: "South Austin",
      service: "Hardscaping",
    },
  ];

  return (
    <section id="testimonials" className="bg-white py-20 sm:py-28 border-b border-gray-100 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#2D6A2D] bg-[#2D6A2D]/10 px-3 py-1 rounded-full inline-block mb-3">
            Client Reviews
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1C1C] tracking-tight mb-4">
            What Our Clients Say
          </h2>
          <p className="text-base sm:text-lg text-[#6B7280] font-normal leading-relaxed">
            Honest words from homeowners and businesses we have worked with.
          </p>
        </div>

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-8 border-l-4 border-[#2D6A2D] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between border-t border-r border-b border-gray-100"
            >
              <div>
                {/* 5 Forest Green Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#2D6A2D] text-[#2D6A2D]" />
                  ))}
                </div>

                {/* Opening Quotation Mark */}
                <Quote className="w-8 h-8 text-[#2D6A2D]/20 mb-2 rotate-180" />

                {/* Quote */}
                <p className="text-[#1C1C1C] italic text-base leading-relaxed mb-6 font-normal">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Author & Service */}
              <div className="pt-4 border-t border-gray-100 flex flex-col">
                <span className="font-bold text-[#1C1C1C] text-base">
                  {item.name}
                </span>
                <span className="text-xs text-[#6B7280] mb-1">
                  {item.neighborhood}
                </span>
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#2D6A2D]">
                  {item.service}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
