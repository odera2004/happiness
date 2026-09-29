"use client"

import { useEffect, useRef, useState } from "react"
import { Sparkles, CalendarCheck, Heart, ArrowRight } from "lucide-react"

export function CTABanner() {
  const [isVisible, setIsVisible] = useState(false)
  const bannerRef = useRef<HTMLDivElement>(null)

  // Replace with your actual WhatsApp phone number (with country code, no + or spaces)
  const whatsappNumber = "0740764113" 
  const whatsappMessage = encodeURIComponent("Hello House of Happiness! I would like to book/inquire about an event setup.")
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (bannerRef.current) {
      observer.observe(bannerRef.current)
    }

    return () => {
      if (bannerRef.current) {
        observer.unobserve(bannerRef.current)
      }
    }
  }, [])

  return (
    <section id="contact-banner" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div 
          ref={bannerRef}
          className={`rounded-3xl p-10 md:p-16 flex flex-col justify-center relative overflow-hidden min-h-[420px] transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          {/* Background Image */}
          <img
            src="https://res.cloudinary.com/do0mtxjce/image/upload/v1790594634/WhatsApp_Image_2026-09-27_at_19.09.38_phj5xj.jpg"
            alt="House of Happiness Event Styling"
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          {/* Gradient Dark Overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-transparent" />

          {/* Blur Mask Overlay */}
          <div 
            className="absolute inset-0 backdrop-blur-[6px]" 
            style={{ 
              maskImage: 'linear-gradient(to right, black 0%, black 40%, transparent 65%)', 
              WebkitMaskImage: 'linear-gradient(to right, black 0%, black 40%, transparent 65%)' 
            }}
          />
          
          {/* Content */}
          <div className="relative z-10 text-left max-w-xl">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-primary-foreground/80 mb-3 block">
              CREATE UNFORGETTABLE MOMENTS
            </span>
            <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-medium mb-2 leading-tight">
              100% Bespoke.
            </h3>
            <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white/70 mb-8 font-light italic">
              100% Unforgettable.
            </h3>
            
            <div className="flex flex-col items-start gap-4 mb-8">
              <div className="flex items-center gap-3 text-white/90">
                <Sparkles className="w-5 h-5 text-amber-300 flex-shrink-0" strokeWidth={1.5} />
                <span className="text-base font-medium">Custom Decor &amp; Floral Themes</span>
              </div>
              <div className="flex items-center gap-3 text-white/90">
                <CalendarCheck className="w-5 h-5 text-amber-300 flex-shrink-0" strokeWidth={1.5} />
                <span className="text-base font-medium">End-to-End Event Coordination</span>
              </div>
              <div className="flex items-center gap-3 text-white/90">
                <Heart className="w-5 h-5 text-amber-300 flex-shrink-0" strokeWidth={1.5} />
                <span className="text-base font-medium">Tailored for Every Milestone</span>
              </div>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-8 py-4 rounded-full text-sm tracking-wider transition-all duration-300 shadow-lg hover:gap-3"
            >
              Book Your Event via WhatsApp
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}