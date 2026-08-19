'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Check, Star } from 'lucide-react';

interface PricingProps {
  onSelectPlan: (planName: string) => void;
}

export default function Pricing({ onSelectPlan }: PricingProps) {
  const plans = [
    {
      name: 'Basic Lawn Care',
      price: '$89',
      period: '/month',
      isPopular: false,
      description: 'Essential lawn maintenance to keep your property neat and presentable.',
      features: [
        'Weekly lawn mowing and edging',
        'Leaf blowing and path clearing',
        'Monthly property inspection',
        'Email support',
      ],
      buttonText: 'Select Basic Plan',
      buttonStyle: 'border-2 border-[#2D6A2D] text-[#2D6A2D] hover:bg-[#2D6A2D] hover:text-white',
    },
    {
      name: 'Garden Plus',
      price: '$179',
      period: '/month',
      isPopular: true,
      description: 'Comprehensive care for thriving lawns, healthy shrubs, and vibrant garden beds.',
      features: [
        'Everything in Basic Lawn Care',
        'Bi-monthly shrub trimming',
        'Seasonal fertilization treatment',
        'Weed control and removal',
        'Priority scheduling',
      ],
      buttonText: 'Select Garden Plus',
      buttonStyle: 'bg-[#2D6A2D] text-white hover:bg-[#235423] shadow-md',
    },
    {
      name: 'Full Property Care',
      price: '$299',
      period: '/month',
      isPopular: false,
      description: 'Total worry-free landscaping management for premier residential properties.',
      features: [
        'Everything in Garden Plus',
        'Monthly tree inspection & light trimming',
        'Irrigation system check & adjustment',
        'Seasonal planting & flower rotation',
        'Dedicated account manager',
        'Same-week emergency response',
      ],
      buttonText: 'Select Full Care',
      buttonStyle: 'border-2 border-[#2D6A2D] text-[#2D6A2D] hover:bg-[#2D6A2D] hover:text-white',
    },
  ];

  return (
    <section id="pricing" className="bg-[#F0F5F0] py-20 sm:py-28 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#2D6A2D] bg-[#2D6A2D]/10 px-3 py-1 rounded-full inline-block mb-3">
            Monthly Maintenance
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1C1C] tracking-tight mb-4">
            Our Plans
          </h2>
          <p className="text-base sm:text-lg text-[#6B7280] font-normal leading-relaxed">
            Transparent pricing with no hidden fees — ever.
          </p>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-white rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                plan.isPopular
                  ? 'border-2 border-[#2D6A2D] shadow-xl lg:-translate-y-2'
                  : 'border border-gray-200 shadow-sm hover:shadow-lg'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#2D6A2D] text-white text-xs font-extrabold uppercase tracking-wider px-4 py-1 rounded-full shadow-md flex items-center gap-1.5">
                  <Star className="w-3.5 h-3.5 fill-white text-white" />
                  <span>Most Popular</span>
                </div>
              )}

              <div>
                <h3 className="text-xl font-bold text-[#1C1C1C] mb-2">
                  {plan.name}
                </h3>
                <p className="text-xs text-[#6B7280] mb-6 min-h-[36px]">
                  {plan.description}
                </p>

                <div className="flex items-baseline gap-1 mb-6 pb-6 border-b border-gray-100">
                  <span className="text-4xl sm:text-5xl font-black text-[#1C1C1C]">
                    {plan.price}
                  </span>
                  <span className="text-sm font-semibold text-[#6B7280]">
                    {plan.period}
                  </span>
                </div>

                <ul className="space-y-3.5 mb-8">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3 text-sm text-[#1C1C1C]">
                      <div className="w-5 h-5 rounded-full bg-[#2D6A2D]/10 text-[#2D6A2D] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => onSelectPlan(plan.name)}
                className={`w-full py-3.5 rounded-lg text-sm font-bold transition-all duration-300 cursor-pointer ${plan.buttonStyle}`}
              >
                {plan.buttonText}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Small Centered Italic Note */}
        <p className="text-center text-sm italic text-[#6B7280] mt-12 max-w-2xl mx-auto">
          Custom quotes available for commercial properties and one-off projects. Contact us for details.
        </p>
      </div>
    </section>
  );
}
