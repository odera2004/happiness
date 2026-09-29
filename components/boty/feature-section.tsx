"use client"

import { useEffect, useRef, useState } from "react"
import { Heart, Sparkles, Gift, Crown } from "lucide-react"

const features = [
  {
    icon: Heart,
    title: "Handcrafted Flowers",
    description: "Bespoke floral gifts crafted with love"
  },
  {
    icon: Sparkles,
    title: "Immersive Experiences",
    description: "Transformative styling for special occasions"
  },
  {
    icon: Gift,
    title: "Signature Hampers",
    description: "Luxury gift setups tailored for your loved ones"
  },
  {
    icon: Crown,
    title: "Unforgettable Memories",
    description: "Creating magic that lasts a lifetime"
  }
]

export function FeatureSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [isVideoVisible, setIsVideoVisible] = useState(false)
  const [headerVisible, setHeaderVisible] = useState(false)
  const bentoRef = useRef<HTMLDivElement>(null)
  const videoSectionRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const videoObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVideoVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const headerObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (bentoRef.current) {
      observer.observe(bentoRef.current)
    }

    if (videoSectionRef.current) {
      videoObserver.observe(videoSectionRef.current)
    }

    if (headerRef.current) {
      headerObserver.observe(headerRef.current)
    }

    return () => {
      if (bentoRef.current) {
        observer.unobserve(bentoRef.current)
      }
      if (videoSectionRef.current) {
        videoObserver.unobserve(videoSectionRef.current)
      }
      if (headerRef.current) {
        headerObserver.unobserve(headerRef.current)
      }
    }
  }, [])

  return (
    <section className="py-20 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Bento Grid - Mobile-Friendly Aspect Ratios */}
        <div 
          ref={bentoRef}
          className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 mb-20"
        >
          {/* Left Main Block - Custom Decor & Floral Setup */}
          <div 
            className={`relative rounded-3xl overflow-hidden aspect-[4/5] md:aspect-auto md:col-span-2 md:row-span-2 transition-all duration-700 ease-out min-h-[360px] md:min-h-[560px] ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-[0.95]'
            }`}
            style={{ transitionDelay: '0ms' }}
          >
            <img
              src="https://res.cloudinary.com/do0mtxjce/image/upload/v1790530187/WhatsApp_Image_2026-09-27_at_18.41.39_twojby.jpg"
              alt="House of Happiness Floral Arrangements"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Overlay Card */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 bg-white/95 backdrop-blur-sm p-5 sm:p-6 shadow-lg rounded-2xl border border-stone-200/80">
              <div className="flex items-start gap-3">
                <div>
                  <h3 className="text-lg sm:text-xl text-foreground mb-1 font-medium">
                    Express Your <span className="text-primary italic">True Emotions</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Unforgettable floral arrangements, luxury setups, and custom gifts designed to make every moment magical.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Top Right Image - Romantic Decor Accent */}
          <div 
            className={`rounded-3xl relative overflow-hidden aspect-[4/3] sm:aspect-[16/9] md:aspect-auto md:col-span-2 md:h-[270px] transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-[0.95]'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            <img
              src="https://res.cloudinary.com/do0mtxjce/image/upload/v1790530145/WhatsApp_Image_2026-09-27_at_18.41.38_ro59tw.jpg"
              alt="Romantic Celebrations & Flowers"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Bottom Right Image - Luxury Floral Box */}
          <div 
            className={`rounded-3xl relative overflow-hidden aspect-[4/3] sm:aspect-[16/9] md:aspect-auto md:col-span-2 md:h-[270px] transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-[0.95]'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <img
              src="https://res.cloudinary.com/do0mtxjce/image/upload/v1790530113/WhatsApp_Image_2026-09-27_at_18.56.35_idytdw.jpg"
              alt="Bespoke Gift Boxes"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Header Section */}
        <div 
          ref={headerRef}
          className="text-center mb-16"
        >
          <span className={`text-sm tracking-[0.3em] uppercase text-primary mb-4 block ${headerVisible ? 'animate-blur-in opacity-0' : 'opacity-0'}`} style={headerVisible ? { animationDelay: '0.2s', animationFillMode: 'forwards' } : {}}>
            House of Happiness
          </span>
          <h2 className={`font-serif text-3xl sm:text-4xl leading-tight text-foreground mb-6 text-balance md:text-7xl ${headerVisible ? 'animate-blur-in opacity-0' : 'opacity-0'}`} style={headerVisible ? { animationDelay: '0.4s', animationFillMode: 'forwards' } : {}}>
            Gifts That Speak Love.
          </h2>
          <p className={`text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto ${headerVisible ? 'animate-blur-in opacity-0' : 'opacity-0'}`} style={headerVisible ? { animationDelay: '0.6s', animationFillMode: 'forwards' } : {}}>
            We believe every grand gesture and intimate moment deserves stunning floral design and thoughtful presentation. Crafted with precision for the ones you cherish most.
          </p>
        </div>

        {/* Two Videos Side by Side */}
        <div 
          ref={videoSectionRef}
          className="grid lg:grid-cols-2 gap-6 mb-6"
        >
          {/* Video 1 - Valentine's & Romantic Floral Box */}
          <div 
            className={`relative aspect-[4/5] rounded-3xl overflow-hidden boty-shadow transition-all duration-700 ease-out ${
              isVideoVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-[0.85]'
            }`}
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="https://res.cloudinary.com/do0mtxjce/video/upload/v1790529028/WhatsApp_Video_2026-09-27_at_18.56.45_v5owag.mp4" type="video/mp4" />
            </video>
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <div className="absolute inset-0 backdrop-blur-[8px] bg-black/40" style={{ maskImage: 'linear-gradient(to top, black 0%, black 50%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to top, black 0%, black 50%, transparent 100%)' }} />
              <div className="relative z-10">
                <h3 className="font-serif text-2xl sm:text-3xl text-white mb-1">Valentine's Eternal Roses</h3>
                <p className="text-white/80 text-xs sm:text-sm mb-3">Signature Floral Arrangement</p>
                <p className="text-white/90 text-xs sm:text-sm font-semibold mb-1">Hand-Selected Red Roses &amp; Velvet Box Packaging</p>
                <p className="text-white/80 text-xs sm:text-sm leading-relaxed">Surprise your significant other with timeless floral elegance designed to express pure passion and devotion.</p>
              </div>
            </div>
          </div>

          {/* Video 2 - Romantic Keepsake */}
          <div 
            className={`relative aspect-[4/5] rounded-3xl overflow-hidden boty-shadow transition-all duration-700 ease-out ${
              isVideoVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-[0.85]'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              src="https://res.cloudinary.com/do0mtxjce/video/upload/v1790529126/WhatsApp_Video_2026-09-27_at_18.41.47_edupbz.mp4"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <div className="absolute inset-0 backdrop-blur-[8px] bg-black/40" style={{ maskImage: 'linear-gradient(to top, black 0%, black 50%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to top, black 0%, black 50%, transparent 100%)' }} />
              <div className="relative z-10">
                <h3 className="font-serif text-2xl sm:text-3xl text-white mb-1">Lovers' Luxe Collection</h3>
                <p className="text-white/80 text-xs sm:text-sm mb-3">Custom Floral &amp; Gift Hamper</p>
                <p className="text-white/90 text-xs sm:text-sm font-semibold mb-1">Fresh Blooms &middot; Custom Keepsakes</p>
                <p className="text-white/80 text-xs sm:text-sm leading-relaxed">Curated for anniversaries, proposals, and spontaneous romantic gestures. Styled with love, delivered with care.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Cards Below Videos */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`group p-5 boty-transition hover:scale-[1.02] rounded-2xl bg-white shadow-sm border border-stone-100 transition-all duration-700 ease-out ${
                isVideoVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full mb-3 group-hover:bg-primary/20 boty-transition bg-stone-50">
                <feature.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-medium text-foreground mb-1">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}