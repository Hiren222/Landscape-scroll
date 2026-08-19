'use client';

import React from 'react';
import { motion } from 'motion/react';

export default function Milestones() {
  const milestones = [
    { number: '350+', label: 'Projects Completed' },
    { number: '12', label: 'Years of Experience' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '50+', label: '5-Star Reviews' },
  ];

  return (
    <section className="bg-white py-12 sm:py-16 border-b border-gray-100 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
          {milestones.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex flex-col items-center justify-center text-center px-4 ${
                index !== milestones.length - 1
                  ? 'md:border-r md:border-[#2D6A2D]/20'
                  : ''
              } ${
                index % 2 === 0 ? 'border-r border-[#2D6A2D]/20 md:border-r-0' : ''
              }`}
            >
              <span className="text-4xl sm:text-5xl font-black text-[#2D6A2D] tracking-tight mb-1">
                {item.number}
              </span>
              <span className="text-sm sm:text-base text-[#6B7280] font-medium tracking-wide">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
