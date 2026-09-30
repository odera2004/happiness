"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#032b1d]">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[1]"
        src="https://res.cloudinary.com/do0mtxjce/video/upload/v1790528316/WhatsApp_Video_2026-09-27_at_18.41.29_ccbhv6.mp4"
      />
      
      {/* Dark overlay to ensure text contrast */}
      <div className="absolute inset-0 bg-black/40 z-[2]" />

      {/* Bottom fade gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-background via-background/60 to-transparent z-[5]" />

      {/* Centered Content */}
      <div className="relative z-10 w-full px-6 lg:px-8 pt-28 pb-16 md:py-20 flex justify-center items-center">
        <div className="max-w-4xl mx-auto text-center">
          
          <span 
            className="text-xs sm:text-sm uppercase mb-4 sm:mb-6 block text-amber-200 font-bold animate-blur-in opacity-0 tracking-widest drop-shadow-md" 
            style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
          >
            ✨ HOUSE OF HAPPINESS — EVENTS & DECORS CO.
          </span>

          <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl leading-[1.15] mb-6 text-balance text-white">
            <span 
              className="block animate-blur-in opacity-0 font-bold drop-shadow-lg" 
              style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
            >
              Styled with Love,
            </span>
            <span 
              className="block animate-blur-in opacity-0 font-bold text-5xl sm:text-7xl xl:text-8xl italic text-amber-100 drop-shadow-lg mt-1" 
              style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
            >
              Designed by Happiness.
            </span>
          </h2>

          <p 
            className="text-base sm:text-lg leading-relaxed mb-8 max-w-xl mx-auto text-stone-100 font-medium animate-blur-in opacity-0 drop-shadow-md" 
            style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}
          >
            Every occasion deserves to be extraordinary. We craft bespoke styling and immersive experiences for weddings, baby showers, and milestone celebrations.
          </p>
          
          <div 
            className="animate-blur-in opacity-0 flex justify-center" 
            style={{ animationDelay: '1.0s', animationFillMode: 'forwards' }}
          >
            <Link
              href="#services"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#e6e2dd] text-[#032b1d] font-bold rounded-full hover:bg-white transition-all shadow-xl hover:scale-105 border border-[#c7c0b5]"
            >
              <span>EXPLORE OUR SERVICES</span>
              <ArrowRight className="w-5 h-5 text-[#032b1d]" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}