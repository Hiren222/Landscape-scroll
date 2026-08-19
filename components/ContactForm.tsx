'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  Award,
  Star,
  CheckCircle2,
  Calendar,
  Send,
  Sparkles
} from 'lucide-react';

interface ContactFormProps {
  prefilledService?: string;
  prefilledPlan?: string;
}

export default function ContactForm({ prefilledService, prefilledPlan }: ContactFormProps) {
  const [formData, setFormData] = useState(() => ({
    fullName: '',
    email: '',
    phone: '',
    propertyType: 'Residential Home',
    serviceNeeded: prefilledService || 'Lawn Care and Mowing',
    propertySize: 'Under 2,500 sq ft',
    startDate: '',
    preferredTime: 'Morning 7–12',
    notes: prefilledPlan ? `Interested in the ${prefilledPlan} monthly plan.` : '',
  }));

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required.';
    } else if (formData.phone.replace(/\D/g, '').length < 7) {
      newErrors.phone = 'Please enter a valid phone number.';
    }

    if (!formData.propertyType) {
      newErrors.propertyType = 'Please select a property type.';
    }

    if (!formData.serviceNeeded) {
      newErrors.serviceNeeded = 'Please select a service.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
      }, 800);
    }
  };

  return (
    <section id="contact" className="bg-white py-20 sm:py-28 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#2D6A2D] bg-[#2D6A2D]/10 px-3 py-1 rounded-full inline-block mb-3">
            Free Site Visit & Quote
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1C1C] tracking-tight mb-4">
            Get Your Free Quote
          </h2>
          <p className="text-base sm:text-lg text-[#6B7280] font-normal leading-relaxed">
            Tell us about your outdoor space and we will be in touch within 24 hours.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column - Contact Details & Trust */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-[#1C1C1C]">
                Reach Out Directly
              </h3>
              <p className="text-[#6B7280] text-sm leading-relaxed">
                We serve homeowners, HOAs, and commercial properties throughout the greater Austin metropolitan area.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#2D6A2D]/10 text-[#2D6A2D] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#6B7280]">Address</h4>
                    <p className="text-sm font-semibold text-[#1C1C1C] mt-0.5">
                      4820 Green Valley Drive, Suite 101<br />
                      Austin, TX 78745
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#2D6A2D]/10 text-[#2D6A2D] flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#6B7280]">Phone</h4>
                    <a href="tel:5125550139" className="text-sm font-semibold text-[#1C1C1C] hover:text-[#2D6A2D] transition-colors mt-0.5 block">
                      (512) 555 0139
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#2D6A2D]/10 text-[#2D6A2D] flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#6B7280]">Email</h4>
                    <a href="mailto:hello@landscapingcompany.com" className="text-sm font-semibold text-[#1C1C1C] hover:text-[#2D6A2D] transition-colors mt-0.5 block">
                      hello@landscapingcompany.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#2D6A2D]/10 text-[#2D6A2D] flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#6B7280]">Business Hours</h4>
                    <p className="text-sm font-semibold text-[#1C1C1C] mt-0.5">
                      Monday–Friday: 7am–6pm<br />
                      Saturday: 8am–4pm • Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Styled Map Placeholder */}
            <div className="relative rounded-2xl overflow-hidden border border-gray-200 bg-[#F0F5F0] p-6 text-center shadow-sm">
              <div className="absolute inset-0 bg-[radial-gradient(#2D6A2D_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-[#2D6A2D] text-white flex items-center justify-center mb-3 shadow-md">
                  <MapPin className="w-6 h-6 animate-bounce" />
                </div>
                <h4 className="font-bold text-[#1C1C1C] text-base mb-1">
                  Serving All of Austin & Surrounding Areas
                </h4>
                <p className="text-xs text-[#6B7280] max-w-xs">
                  Westlake Hills • Round Rock • South Austin • Cedar Park • Lake Travis • Bee Cave
                </p>
              </div>
            </div>

            {/* 3 Trust Badges */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="p-3 bg-white border border-gray-100 rounded-xl flex flex-col items-center text-center shadow-xs">
                <ShieldCheck className="w-5 h-5 text-[#2D6A2D] mb-1" />
                <span className="text-[11px] font-bold text-[#1C1C1C] leading-tight">Licensed & Insured</span>
              </div>
              <div className="p-3 bg-white border border-gray-100 rounded-xl flex flex-col items-center text-center shadow-xs">
                <Award className="w-5 h-5 text-[#2D6A2D] mb-1" />
                <span className="text-[11px] font-bold text-[#1C1C1C] leading-tight">12+ Years Experience</span>
              </div>
              <div className="p-3 bg-white border border-gray-100 rounded-xl flex flex-col items-center text-center shadow-xs">
                <Star className="w-5 h-5 text-[#2D6A2D] fill-[#2D6A2D] mb-1" />
                <span className="text-[11px] font-bold text-[#1C1C1C] leading-tight">5-Star Rated</span>
              </div>
            </div>
          </div>

          {/* Right Column - Quote Request Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#F0F5F0] rounded-2xl p-6 sm:p-10 border border-[#2D6A2D]/10 shadow-md">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white rounded-xl p-8 sm:p-10 text-center border border-[#2D6A2D]/20 shadow-lg my-4"
                >
                  <div className="w-16 h-16 bg-[#2D6A2D] text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-[#1C1C1C] mb-4">
                    Quote Request Received!
                  </h3>
                  <p className="text-[#6B7280] text-base leading-relaxed mb-8 max-w-md mx-auto">
                    Thank you! We have received your request and will be in touch within 24 hours to arrange your free site visit. We cannot wait to see your space!
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        fullName: '',
                        email: '',
                        phone: '',
                        propertyType: 'Residential Home',
                        serviceNeeded: 'Lawn Care and Mowing',
                        propertySize: 'Under 2,500 sq ft',
                        startDate: '',
                        preferredTime: 'Morning 7–12',
                        notes: '',
                      });
                    }}
                    className="px-6 py-3 border-2 border-[#2D6A2D] text-[#2D6A2D] font-bold rounded-lg hover:bg-[#2D6A2D] hover:text-white transition-colors cursor-pointer text-sm"
                  >
                    Submit Another Quote Request
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="border-b border-[#2D6A2D]/20 pb-4 mb-2">
                    <h3 className="text-xl font-bold text-[#1C1C1C] flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-[#2D6A2D]" />
                      <span>Request Your Free Proposal</span>
                    </h3>
                    <p className="text-xs text-[#6B7280] mt-1">
                      No obligation, zero pressure, 100% free site consultation in Austin.
                    </p>
                  </div>

                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#1C1C1C] mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Sarah Jenkins"
                      className={`w-full px-4 py-3 bg-white rounded-lg text-sm text-[#1C1C1C] border transition-all duration-200 outline-none focus:border-[#2D6A2D] focus:ring-1 focus:ring-[#2D6A2D] ${
                        errors.fullName ? 'border-red-400 bg-red-50/20' : 'border-gray-300'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-xs text-red-500 font-medium mt-1">{errors.fullName}</p>
                    )}
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#1C1C1C] mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="sarah@example.com"
                        className={`w-full px-4 py-3 bg-white rounded-lg text-sm text-[#1C1C1C] border transition-all duration-200 outline-none focus:border-[#2D6A2D] focus:ring-1 focus:ring-[#2D6A2D] ${
                          errors.email ? 'border-red-400 bg-red-50/20' : 'border-gray-300'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-500 font-medium mt-1">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#1C1C1C] mb-2">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(512) 555-0123"
                        className={`w-full px-4 py-3 bg-white rounded-lg text-sm text-[#1C1C1C] border transition-all duration-200 outline-none focus:border-[#2D6A2D] focus:ring-1 focus:ring-[#2D6A2D] ${
                          errors.phone ? 'border-red-400 bg-red-50/20' : 'border-gray-300'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-xs text-red-500 font-medium mt-1">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  {/* Property Type & Service Needed */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#1C1C1C] mb-2">
                        Property Type <span className="text-red-500">*</span>
                      </label>
                      <select
                        value={formData.propertyType}
                        onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                        className="w-full px-4 py-3 bg-white rounded-lg text-sm text-[#1C1C1C] border border-gray-300 transition-all duration-200 outline-none focus:border-[#2D6A2D] focus:ring-1 focus:ring-[#2D6A2D]"
                      >
                        <option value="Residential Home">Residential Home</option>
                        <option value="Commercial Property">Commercial Property</option>
                        <option value="HOA Community">HOA Community</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#1C1C1C] mb-2">
                        Service Needed <span className="text-red-500">*</span>
                      </label>
                      <select
                        value={formData.serviceNeeded}
                        onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                        className="w-full px-4 py-3 bg-white rounded-lg text-sm text-[#1C1C1C] border border-gray-300 transition-all duration-200 outline-none focus:border-[#2D6A2D] focus:ring-1 focus:ring-[#2D6A2D]"
                      >
                        <option value="Lawn Care and Mowing">Lawn Care and Mowing</option>
                        <option value="Garden Design">Garden Design</option>
                        <option value="Tree and Shrub Trimming">Tree and Shrub Trimming</option>
                        <option value="Irrigation System">Irrigation System</option>
                        <option value="Hardscaping">Hardscaping</option>
                        <option value="Seasonal Cleanup">Seasonal Cleanup</option>
                        <option value="Full Property Care">Full Property Care</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Property Size & Time for Site Visit */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#1C1C1C] mb-2">
                        Property Size
                      </label>
                      <select
                        value={formData.propertySize}
                        onChange={(e) => setFormData({ ...formData, propertySize: e.target.value })}
                        className="w-full px-4 py-3 bg-white rounded-lg text-sm text-[#1C1C1C] border border-gray-300 transition-all duration-200 outline-none focus:border-[#2D6A2D] focus:ring-1 focus:ring-[#2D6A2D]"
                      >
                        <option value="Under 2,500 sq ft">Under 2,500 sq ft</option>
                        <option value="2,500–5,000 sq ft">2,500–5,000 sq ft</option>
                        <option value="5,000–10,000 sq ft">5,000–10,000 sq ft</option>
                        <option value="Over 10,000 sq ft">Over 10,000 sq ft</option>
                        <option value="Not Sure">Not Sure</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#1C1C1C] mb-2">
                        Preferred Time for Visit
                      </label>
                      <select
                        value={formData.preferredTime}
                        onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                        className="w-full px-4 py-3 bg-white rounded-lg text-sm text-[#1C1C1C] border border-gray-300 transition-all duration-200 outline-none focus:border-[#2D6A2D] focus:ring-1 focus:ring-[#2D6A2D]"
                      >
                        <option value="Morning 7–12">Morning 7–12</option>
                        <option value="Afternoon 12–5">Afternoon 12–5</option>
                      </select>
                    </div>
                  </div>

                  {/* Preferred Start Date */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#1C1C1C] mb-2">
                      Preferred Start Date <span className="text-gray-400 font-normal">(Optional)</span>
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        value={formData.startDate}
                        onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                        className="w-full px-4 py-3 bg-white rounded-lg text-sm text-[#1C1C1C] border border-gray-300 transition-all duration-200 outline-none focus:border-[#2D6A2D] focus:ring-1 focus:ring-[#2D6A2D]"
                      />
                    </div>
                  </div>

                  {/* Additional Notes */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#1C1C1C] mb-2">
                      Additional Notes <span className="text-gray-400 font-normal">(Optional)</span>
                    </label>
                    <textarea
                      rows={4}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Tell us more about your outdoor space and what you would like to achieve."
                      className="w-full px-4 py-3 bg-white rounded-lg text-sm text-[#1C1C1C] border border-gray-300 transition-all duration-200 outline-none focus:border-[#2D6A2D] focus:ring-1 focus:ring-[#2D6A2D] resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-[#2D6A2D] text-white font-extrabold text-base rounded-lg hover:bg-[#235423] shadow-md transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Processing Request...</span>
                      </div>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Request My Free Quote</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
