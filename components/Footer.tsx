'use client';

import React from 'react';
import { Leaf, Facebook, Instagram, Share2, MapPin, Phone, Mail, Clock } from 'lucide-react';

interface FooterProps {
  onOpenPolicy: (type: 'privacy' | 'terms') => void;
  onSelectServiceLink: (serviceName: string) => void;
}

export default function Footer({ onOpenPolicy, onSelectServiceLink }: FooterProps) {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#1C1C1C] text-white pt-16 pb-8 border-t border-[#2D6A2D]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 4-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12">
          {/* Column 1: Branding & Social */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-[#2D6A2D] flex items-center justify-center">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight text-white">
                Landscaping Company
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Transforming Outdoor Spaces, One Garden at a Time. Professional, reliable lawn and landscaping care in Austin, Texas.
            </p>

            {/* Social Icons that turn green on hover */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-[#2D6A2D] hover:bg-white hover:border-white transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-[#2D6A2D] hover:bg-white hover:border-white transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://houzz.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-[#2D6A2D] hover:bg-white hover:border-white transition-all duration-300"
                aria-label="Houzz"
              >
                <Share2 className="w-4 h-4" />
              </a>
              <a
                href="https://google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-[#2D6A2D] hover:bg-white hover:border-white transition-all duration-300"
                aria-label="Google Business Profile"
              >
                <span className="text-xs font-black">G</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 border-b border-white/10 pb-2 inline-block">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-gray-400 hover:text-[#2D6A2D] transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => scrollToSection(e, '#services')}
                  className="text-gray-400 hover:text-[#2D6A2D] transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#how-we-work"
                  onClick={(e) => scrollToSection(e, '#how-we-work')}
                  className="text-gray-400 hover:text-[#2D6A2D] transition-colors"
                >
                  How We Work
                </a>
              </li>
              <li>
                <a
                  href="#our-work"
                  onClick={(e) => scrollToSection(e, '#our-work')}
                  className="text-gray-400 hover:text-[#2D6A2D] transition-colors"
                >
                  Our Work
                </a>
              </li>
              <li>
                <a
                  href="#why-us"
                  onClick={(e) => scrollToSection(e, '#why-us')}
                  className="text-gray-400 hover:text-[#2D6A2D] transition-colors"
                >
                  Why Us
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  onClick={(e) => scrollToSection(e, '#pricing')}
                  className="text-gray-400 hover:text-[#2D6A2D] transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => scrollToSection(e, '#contact')}
                  className="text-gray-400 hover:text-[#2D6A2D] transition-colors"
                >
                  Contact & Free Quote
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 border-b border-white/10 pb-2 inline-block">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { name: 'Lawn Care', full: 'Lawn Care and Mowing' },
                { name: 'Garden Design', full: 'Garden Design' },
                { name: 'Tree Trimming', full: 'Tree and Shrub Trimming' },
                { name: 'Irrigation', full: 'Irrigation System' },
                { name: 'Hardscaping', full: 'Hardscaping' },
                { name: 'Seasonal Cleanup', full: 'Seasonal Cleanup' },
              ].map((s) => (
                <li key={s.name}>
                  <button
                    onClick={() => onSelectServiceLink(s.full)}
                    className="text-gray-400 hover:text-[#2D6A2D] transition-colors text-left cursor-pointer"
                  >
                    {s.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 border-b border-white/10 pb-2 inline-block">
              Austin Location
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#2D6A2D] shrink-0 mt-0.5" />
                <span>4820 Green Valley Drive, Suite 101, Austin, TX 78745</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#2D6A2D] shrink-0" />
                <a href="tel:5125550139" className="hover:text-white transition-colors">
                  (512) 555 0139
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#2D6A2D] shrink-0" />
                <a href="mailto:hello@landscapingcompany.com" className="hover:text-white transition-colors">
                  hello@landscapingcompany.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#2D6A2D] shrink-0 mt-0.5" />
                <span>Mon–Fri: 7am–6pm, Sat: 8am–4pm</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Thin Forest Green Divider Line Above Bottom Bar */}
        <div className="border-t border-[#2D6A2D]/30 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© 2025 Landscaping Company. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <button
              onClick={() => onOpenPolicy('privacy')}
              className="hover:text-gray-300 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={() => onOpenPolicy('terms')}
              className="hover:text-gray-300 transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
