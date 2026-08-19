'use client';

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { ArrowRight, Star, ChevronDown } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface HeroProps {
  onViewWorkClick: () => void;
  onGetQuoteClick: () => void;
}

export default function Hero({ onViewWorkClick, onGetQuoteClick }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    gsap.registerPlugin(ScrollTrigger);

    const video = videoRef.current;
    const container = containerRef.current;
    const content = contentRef.current;
    const indicator = scrollIndicatorRef.current;
    if (!video || !container) return;

    video.muted = true;
    video.pause();

    const onReady = () => {
      setVideoReady(true);
      if (video.currentTime === 0) {
        video.currentTime = 0.001;
      }
    };

    if (video.readyState >= 1) {
      onReady();
    } else {
      video.addEventListener('loadedmetadata', onReady);
      video.addEventListener('canplay', onReady);
      video.addEventListener('loadeddata', onReady);
    }

    // GSAP ScrollTrigger timeline purely for scroll-driven scrubbing & fade out at 25%
    const ctx = gsap.context(() => {
      // 1. Video scrubbing across the entire container
      ScrollTrigger.create({
        trigger: container,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1.2,
        onUpdate: (self) => {
          const duration = video.duration && !isNaN(video.duration) && video.duration > 0 ? video.duration : 25.5;
          const targetTime = self.progress * duration;
          video.pause();
          video.currentTime = targetTime;
        },
      });

      // 2. Hero Text & CTA Content Fades out completely by 10% scroll progress
      if (content) {
        gsap.fromTo(
          content,
          { opacity: 1, y: 0 },
          {
            opacity: 0,
            y: -30,
            ease: 'none',
            scrollTrigger: {
              trigger: container,
              start: 'top top',
              end: '10% top',
              scrub: 0.3,
              onUpdate: (self) => {
                // Disable pointer events when faded
                if (content) {
                  content.style.pointerEvents = self.progress > 0.7 ? 'none' : 'auto';
                }
              },
            },
          }
        );
      }

      // 3. Scroll indicator fades out quickly within 6%
      if (indicator) {
        gsap.fromTo(
          indicator,
          { opacity: 1 },
          {
            opacity: 0,
            ease: 'none',
            scrollTrigger: {
              trigger: container,
              start: 'top top',
              end: '6% top',
              scrub: 0.2,
            },
          }
        );
      }
    }, container);

    return () => {
      video.removeEventListener('loadedmetadata', onReady);
      video.removeEventListener('canplay', onReady);
      video.removeEventListener('loadeddata', onReady);
      ctx.revert();
    };
  }, []);

  return (
    <div
      id="hero-scroll-container"
      ref={containerRef}
      className="relative w-full h-[550vh] z-0 bg-[#0F1710]"
    >
      {/* Sticky / Pinned Viewport Container */}
      <section
        ref={pinRef}
        className="sticky top-0 w-full h-screen flex items-center justify-center overflow-hidden -mt-20 z-0"
      >
        {/* Background Video Layer */}
        <div className="absolute inset-0 z-0 bg-[#0F1710] overflow-hidden pointer-events-none">
          {/* Static Fallback Poster Image (only visible before video starts rendering) */}
          <div className={`absolute inset-0 z-0 transition-opacity duration-700 ${videoReady ? 'opacity-0' : 'opacity-100'}`}>
            <Image
              src="https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=2000&q=80"
              alt="Austin Texas Landscaping & Hardscaping Background"
              fill
              priority
              referrerPolicy="no-referrer"
              className="object-cover object-center scale-105"
            />
          </div>

          {/* Active Background Video (No autoplay, strictly scroll-driven) */}
          <video
            ref={videoRef}
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover object-center scale-105 z-10"
            src="/Landscape-Bg-final.mp4"
          >
            <source src="/Landscape-Bg-final.mp4" type="video/mp4" />
            <source src="/api/hero-video" type="video/mp4" />
          </video>

          {/* Subtle darkness tint for text legibility without muddying video colors */}
          <div className="absolute inset-0 bg-black/20 z-20" />
        </div>

        {/* Hero Content - Centered Minimal Editorial Layout */}
        <div
          ref={contentRef}
          className="relative z-30 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 sm:pt-44 pb-20 w-full text-center flex flex-col items-center translate-y-4 sm:translate-y-8 will-change-transform"
        >
          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-white leading-[1.05] mb-6 drop-shadow-md font-serif max-w-3xl"
          >
            Scroll to craft<br className="hidden sm:inline" /> the landscape
          </motion.h1>

          {/* Shortened Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed mb-8 max-w-2xl font-light drop-shadow-sm"
          >
            Artisanal stonework, living architecture, and outdoor sanctuaries that will outlive the home.
          </motion.p>

          {/* CTA Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          >
            <button
              onClick={onViewWorkClick}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#2D5A27] hover:bg-[#23471f] text-white font-medium rounded-md shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer text-sm sm:text-base"
            >
              View Our Work
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onGetQuoteClick}
              className="px-8 py-3.5 border border-white/60 text-white font-medium rounded-md hover:bg-white hover:text-[#1C1C1C] transition-all duration-300 text-center cursor-pointer text-sm sm:text-base backdrop-blur-xs"
            >
              Get a Free Quote
            </button>
          </motion.div>

          {/* Rating Snippet */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex items-center justify-center gap-2.5 text-white/80 text-xs sm:text-sm font-medium"
          >
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span>4.9 / 5.0 Rating · 50+ Austin Estates</span>
          </motion.div>
        </div>

        {/* Scroll Indicator Prompt */}
        <div
          ref={scrollIndicatorRef}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-1.5 text-white/70 pointer-events-none"
        >
          <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-white/60">Scroll</span>
          <ChevronDown className="w-3.5 h-3.5 text-white/60 animate-bounce" />
        </div>
      </section>
    </div>
  );
}
