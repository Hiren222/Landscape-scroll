'use client';

import React, { useRef, useEffect } from 'react';
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

  useEffect(() => {
    if (typeof window === 'undefined') return;

    gsap.registerPlugin(ScrollTrigger);

    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    // Helper for one-time event listener (especially for iOS unlock)
    function once(
      el: HTMLElement | Document | HTMLVideoElement,
      event: string,
      fn: EventListenerOrEventListenerObject,
      opts?: boolean | AddEventListenerOptions
    ) {
      const onceFn = function (this: unknown, e: Event) {
        el.removeEventListener(event, onceFn);
        if (typeof fn === 'function') {
          fn.call(this, e);
        }
      };
      el.addEventListener(event, onceFn, opts);
      return onceFn;
    }

    // Activate video context on mobile/iOS touch
    once(document.documentElement, 'touchstart', () => {
      video.play().then(() => video.pause()).catch(() => {});
    });

    const src = video.currentSrc || video.src || '/landscape-bg.mp4';

    // GSAP ScrollTrigger timeline for video scrubbing
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { duration: 1, ease: 'none' },
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
        },
      });

      const setupAnimation = () => {
        const duration = video.duration && !isNaN(video.duration) && video.duration > 0 ? video.duration : 25.5;
        tl.clear();
        tl.fromTo(
          video,
          { currentTime: 0 },
          { currentTime: duration, ease: 'none' }
        );
      };

      if (video.readyState >= 1) {
        setupAnimation();
      } else {
        once(video, 'loadedmetadata', () => {
          setupAnimation();
        });
      }
    }, container);

    // Pre-fetch blob optimization for ultra-smooth scrub buffering
    const timer = setTimeout(() => {
      if (typeof window !== 'undefined' && 'fetch' in window && src) {
        fetch(src)
          .then((response) => {
            if (!response.ok) throw new Error('Video fetch status: ' + response.status);
            return response.blob();
          })
          .then((blob) => {
            const blobURL = URL.createObjectURL(blob);
            const t = video.currentTime;
            once(document.documentElement, 'touchstart', () => {
              video.play().then(() => video.pause()).catch(() => {});
            });
            video.setAttribute('src', blobURL);
            video.currentTime = t + 0.01;
          })
          .catch((err) => {
            console.log('Video blob caching fallback:', err);
          });
      }
    }, 800);

    return () => {
      clearTimeout(timer);
      ctx.revert();
    };
  }, []);

  return (
    <div
      id="hero-scroll-container"
      ref={containerRef}
      className="relative w-full h-[320vh] z-0"
    >
      {/* Sticky / Pinned Viewport Container */}
      <section
        ref={pinRef}
        className="sticky top-0 w-full h-screen flex items-center justify-center overflow-hidden -mt-20 z-0"
      >
        {/* Background Video & Fallback Image */}
        <div className="absolute inset-0 z-0 bg-black overflow-hidden pointer-events-none">
          {/* Static Fallback Poster Image */}
          <Image
            src="https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=2000&q=80"
            alt="Austin Texas Landscaping & Hardscaping Background"
            fill
            priority
            referrerPolicy="no-referrer"
            className="object-cover object-center scale-105"
          />

          {/* Background Video with Scrubbing */}
          <video
            ref={videoRef}
            muted
            playsInline
            preload="auto"
            className="video-background absolute inset-0 w-full h-full object-cover object-center scale-105 z-0"
            src="/landscape-bg.mp4"
          >
            <source src="/landscape-bg.mp4" type="video/mp4" />
            <source src="/api/hero-video" type="video/mp4" />
            <source src="/landscape.mp4" type="video/mp4" />
          </video>

          {/* Vignette & Soft Darkness for crystal clear editorial text */}
          <div className="absolute inset-0 bg-black/45 backdrop-contrast-[1.05] z-1" />
          <div className="absolute inset-0 bg-radial-at-c from-black/20 via-black/50 to-black/80 z-1" />
        </div>

        {/* Hero Content - Centered Minimal Editorial Layout matching reference */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-28 w-full text-center flex flex-col items-center">
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
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 text-white/70 pointer-events-none">
          <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-white/60">Scroll</span>
          <ChevronDown className="w-3.5 h-3.5 text-white/60 animate-bounce" />
        </div>
      </section>
    </div>
  );
}
