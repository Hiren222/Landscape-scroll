'use client';

import React from 'react';
import { motion } from 'motion/react';
import {
  Scissors,
  Flower2,
  Trees,
  Droplets,
  Layers,
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export default function Services({ onSelectService }: ServicesProps) {
  const services = [
    {
      id: 'lawn-care',
      title: 'Lawn Care & Mowing',
      icon: Scissors,
      description: 'Regular cuts, edging, and seasonal treatments that keep your lawn looking immaculate year-round.',
    },
    {
      id: 'garden-design',
      title: 'Garden Design',
      icon: Flower2,
      description: 'Custom garden layouts, plant selection, and full installation tailored to your home and lifestyle.',
    },
    {
      id: 'tree-trimming',
      title: 'Tree & Shrub Trimming',
      icon: Trees,
      description: 'Expert pruning for the health, shape, and long-term beauty of all your trees and shrubs.',
    },
    {
      id: 'irrigation',
      title: 'Irrigation Systems',
      icon: Droplets,
      description: 'Smart, water-efficient irrigation solutions designed and installed to keep your garden thriving.',
    },
    {
      id: 'hardscaping',
      title: 'Hardscaping',
      icon: Layers,
      description: 'Patios, pathways, retaining walls, and outdoor living spaces built to impress and endure.',
    },
    {
      id: 'seasonal-cleanup',
      title: 'Seasonal Cleanup',
      icon: Sparkles,
      description: 'Thorough spring and fall cleanup packages to prepare your outdoor space for every season.',
    },
  ];

  return (
    <section id="services" className="bg-[#F0F5F0] py-20 sm:py-28 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#2D6A2D] bg-[#2D6A2D]/10 px-3 py-1 rounded-full inline-block mb-3">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1C1C] tracking-tight mb-4">
            Our Services
          </h2>
          <p className="text-base sm:text-lg text-[#6B7280] font-normal leading-relaxed">
            Complete landscaping solutions for every outdoor space.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 border-t-4 border-transparent hover:border-[#2D6A2D] hover:-translate-y-1.5 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-[#2D6A2D]/10 flex items-center justify-center text-[#2D6A2D] mb-6 group-hover:bg-[#2D6A2D] group-hover:text-white transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1C1C1C] mb-3 group-hover:text-[#2D6A2D] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[#6B7280] text-sm sm:text-base leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <button
                  onClick={() => onSelectService(service.title)}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#2D6A2D] hover:text-[#235423] transition-colors mt-auto group/btn cursor-pointer"
                >
                  <span>Request Quote for {service.title}</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
