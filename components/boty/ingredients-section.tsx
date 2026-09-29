"use client"

import { useEffect, useRef, useState } from "react"
import { PackageCheck, Truck, ShieldCheck, HeartHandshake } from "lucide-react"

const highlights = [
  {
    icon: PackageCheck,
    title: "Premium Packaging",
    description: "Every item is carefully packed and sealed in our signature House of Happiness wrapping."
  },
  {
    icon: Truck,
    title: "Nationwide Delivery",
    description: "Fast, reliable shipping directly to your doorstep for all apparel and merchandise."
  },
  {
    icon: ShieldCheck,
    title: "Quality Guaranteed",
    description: "Bespoke fabrics and durable prints crafted to stay fresh wear after wear."
  },
  {
    icon: HeartHandshake,
    title: "Made with Love",
    description: "Designed with passion to bring the House of Happiness spirit everywhere you go."
  }
]

export function MerchSection() {
  const [scrollProgress, setScrollProgress] = useState(1) // Default to 1 for non-desktop
  const [isDesktop, setIsDesktop] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024)
    }

    checkIsDesktop()
    window.addEventListener('resize', checkIsDesktop)

    const handleScroll = () => {
      if (!sectionRef.current || window.innerWidth < 1024) {
        setScrollProgress(1)
        return
      }

      const section = sectionRef.current
      const rect = section.getBoundingClientRect()
      const sectionTop = rect.top
      const windowHeight = window.innerHeight

      if (sectionTop > 0) {
        setScrollProgress(0)
        return
      }

      const scrollDistance = Math.abs(sectionTop)
      const maxScrollDistance = rect.height - windowHeight
      const progress = scrollDistance / maxScrollDistance

      const clampedProgress = Math.max(0, Math.min(1, progress))
      setScrollProgress(clampedProgress)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener('resize', checkIsDesktop)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // On desktop, scroll-based blur; on mobile, text is immediately crisp
  const blurAmount = isDesktop ? Math.max(0, 20 - (scrollProgress || 0) * 20) : 0
  const opacity = isDesktop ? Math.min(1, (scrollProgress || 0) + 0.3) : 1

  return (
    <section 
      ref={sectionRef} 
      className="relative w-full bg-background lg:min-h-[180vh]"
    >
      {/* Container: Normal padding flow on mobile, Sticky on Desktop */}
      <div className="relative py-16 px-4 sm:px-6 lg:py-0 lg:px-8 lg:sticky lg:top-0 lg:h-screen lg:overflow-hidden flex items-center justify-center">
        
        {/* Full Viewport Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://res.cloudinary.com/do0mtxjce/image/upload/v1790592034/WhatsApp_Image_2026-09-27_at_18.56.41_xanbe6.jpg"
            alt="House of Happiness Merchandise Packages"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for text contrast */}
          <div className="absolute inset-0 bg-black/70 lg:bg-black/55 backdrop-blur-[2px]" />
        </div>

        {/* Content Box */}
        <div className="relative z-10 w-full max-w-5xl mx-auto py-6">
          <div 
            className="text-center transition-all duration-100 ease-linear"
            style={{
              filter: `blur(${blurAmount}px)`,
              opacity: opacity
            }}
          >
            <span className="text-xs sm:text-sm tracking-[0.25em] sm:tracking-[0.3em] uppercase text-[#e6e2dd] mb-3 sm:mb-4 block font-semibold">
              HOUSE OF HAPPINESS MERCH &amp; APPAREL
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-white mb-4 sm:mb-6 text-balance">
              Packed with care,
              <br />
              delivered with joy.
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-stone-200 leading-relaxed max-w-2xl mx-auto font-medium mb-8 sm:mb-10 px-2">
              Explore our exclusive branded merch collection. From cozy custom apparel to signature gifts, each order is individually sealed and prepared for dispatch.
            </p>

            {/* Packaging Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 text-left max-w-5xl mx-auto">
              {highlights.map((item) => (
                <div 
                  key={item.title} 
                  className="bg-white/10 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-white/20 text-white shadow-lg"
                >
                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#eab308] mb-2" />
                  <h3 className="font-semibold text-sm sm:text-base text-white mb-1">{item.title}</h3>
                  <p className="text-xs text-stone-300 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}