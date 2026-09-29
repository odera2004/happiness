"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ backgroundColor: '#032b1d' }}>
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[1]"
        src="https://res.cloudinary.com/do0mtxjce/video/upload/v1790528316/WhatsApp_Video_2026-09-27_at_18.41.29_ccbhv6.mp4"
      />
      
      {/* Dark overlay to ensure contrast over bright video moments */}
      <div className="absolute inset-0 bg-black/25 z-[2]" />

      {/* Bottom fade gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-[60%] bg-gradient-to-t from-background via-background/60 to-transparent z-[5]" />

      {/* Content */}
      <div className="relative z-10 w-full mr-14 lg:mr-0 pt-96">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="w-full lg:max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
            <span className="text-sm uppercase mb-6 block text-[#1d3d2e] font-bold animate-blur-in opacity-0 tracking-widest drop-shadow-sm" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              ✨ HOUSE OF HAPPINESS — EVENTS & DECORS CO.
            </span>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-6 text-balance text-[#0c1f17]">
              <span className="block animate-blur-in opacity-0 font-bold drop-shadow-sm" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
                Styled with Love,
              </span>
              <span className="block animate-blur-in opacity-0 font-bold xl:text-8xl text-6xl text-[#1b3d2b] italic drop-shadow-sm" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
                Designed by Happiness.
              </span>
            </h2>
            <p className="text-lg leading-relaxed mb-10 max-w-md mx-auto lg:mx-0 text-[#1f2d26] font-semibold animate-blur-in opacity-0 drop-shadow-sm" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
              Every occasion deserves to be extraordinary. We craft bespoke styling and immersive experiences for weddings, baby showers, and milestone celebrations.
            </p>
            
            <div className="animate-blur-in opacity-0" style={{ animationDelay: '1.0s', animationFillMode: 'forwards' }}>
              <Link
                href="#services"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#e6e2dd] text-[#032b1d] font-bold rounded-full hover:bg-[#d8d2ca] transition-all shadow-xl hover:scale-105 border border-[#c7c0b5]"
              >
                <span>EXPLORE OUR SERVICES</span>
                <ArrowRight className="w-5 h-5 text-[#032b1d]" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
    </section>
  )
}