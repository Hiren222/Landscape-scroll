'use client';

import React, { useState, useEffect } from 'react';
import { Leaf, Menu, X } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onGetQuoteClick: () => void;
}

export default function Navbar({ activeSection, onGetQuoteClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Keep navbar transparent while scrolling through the pinned hero animation
      const heroContainer = document.getElementById('hero-scroll-container');
      if (heroContainer) {
        const heroBottom = heroContainer.offsetTop + heroContainer.offsetHeight;
        // Trigger white frosted navbar only once the hero animation has fully finished
        const triggerPoint = heroBottom - window.innerHeight - 30;
        setIsScrolled(window.scrollY >= triggerPoint);
      } else {
        setIsScrolled(window.scrollY > 80);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const navItems = [
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'How We Work', href: '#how-we-work', id: 'how-we-work' },
    { name: 'Our Work', href: '#our-work', id: 'our-work' },
    { name: 'Why Us', href: '#why-us', id: 'why-us' },
    { name: 'Pricing', href: '#pricing', id: 'pricing' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/85 backdrop-blur-md shadow-sm border-b border-[#2D6A2D]'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-2.5 group cursor-pointer"
            >
              <div className="w-10 h-10 rounded-full bg-[#2D6A2D]/10 flex items-center justify-center border border-[#2D6A2D]/20 group-hover:bg-[#2D6A2D] transition-colors duration-300">
                <Leaf className="w-5 h-5 text-[#2D6A2D] group-hover:text-white transition-colors duration-300" />
              </div>
              <div className="flex flex-col">
                <span
                  className={`font-bold text-lg sm:text-xl tracking-tight transition-colors duration-300 ${
                    isScrolled ? 'text-[#1C1C1C]' : 'text-white'
                  }`}
                >
                  Landscaping Company
                </span>
                <span
                  className={`text-[10px] uppercase tracking-widest font-semibold transition-colors duration-300 -mt-1 ${
                    isScrolled ? 'text-[#2D6A2D]' : 'text-emerald-200'
                  }`}
                >
                  Austin, Texas
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`relative py-2 text-sm font-semibold transition-colors duration-300 cursor-pointer ${
                      isActive
                        ? 'text-[#2D6A2D]'
                        : isScrolled
                        ? 'text-[#1C1C1C] hover:text-[#2D6A2D]'
                        : 'text-white/90 hover:text-white'
                    }`}
                  >
                    {item.name}
                    {/* Slow green underline sweep on hover & active indicator */}
                    <span
                      className={`absolute bottom-0 left-0 h-[2px] bg-[#2D6A2D] transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0 hover:w-full'
                      }`}
                    />
                  </a>
                );
              })}
            </nav>

            {/* Desktop CTA Button */}
            <div className="hidden md:block">
              <button
                onClick={onGetQuoteClick}
                className={`px-5 py-2.5 rounded-md text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  isScrolled
                    ? 'bg-[#2D6A2D] text-white hover:bg-[#235423] shadow-md hover:shadow-lg'
                    : 'border border-white text-white hover:bg-white hover:text-[#1C1C1C]'
                }`}
              >
                Get a Free Quote
              </button>
            </div>

            {/* Mobile Hamburger Menu Toggle */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-md transition-colors ${
                  isScrolled ? 'text-[#1C1C1C]' : 'text-white'
                }`}
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Full Screen Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white flex flex-col justify-between p-6 md:hidden animate-in fade-in duration-200">
          <div className="flex items-center justify-between pb-6 border-b border-gray-100">
            <div className="flex items-center gap-2.5">
              <Leaf className="w-6 h-6 text-[#2D6A2D]" />
              <span className="font-bold text-xl text-[#1C1C1C]">Landscaping Company</span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-[#1C1C1C] hover:text-[#2D6A2D]"
              aria-label="Close menu"
            >
              <X className="w-7 h-7" />
            </button>
          </div>

          <div className="flex flex-col items-center justify-center space-y-6 my-auto">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`text-2xl font-bold transition-colors ${
                    isActive ? 'text-[#2D6A2D]' : 'text-[#1C1C1C] hover:text-[#2D6A2D]'
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </div>

          <div className="pt-6 border-t border-gray-100 flex flex-col items-center gap-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onGetQuoteClick();
              }}
              className="w-full py-3.5 bg-[#2D6A2D] text-white font-bold text-center rounded-lg shadow-md hover:bg-[#235423] transition-colors text-base"
            >
              Get a Free Quote
            </button>
            <p className="text-xs text-gray-500 font-medium">Austin, Texas • (512) 555 0139</p>
          </div>
        </div>
      )}
    </>
  );
}
