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
  const [scrollProgress, setScrollProgress] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const section = sectionRef.current
      const rect = section.getBoundingClientRect()
      const sectionTop = rect.top
      const windowHeight = window.innerHeight

      // Only start when section is in viewport
      if (sectionTop > 0) {
        setScrollProgress(0)
        return
      }

      // Calculate progress based on how far section has scrolled
      const scrollDistance = Math.abs(sectionTop)
      const maxScrollDistance = rect.height - windowHeight
      const progress = scrollDistance / maxScrollDistance

      // Clamp between 0 and 1
      const clampedProgress = Math.max(0, Math.min(1, progress))
      setScrollProgress(clampedProgress)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial call

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Calculate blur based on scroll progress (starts at 20px, ends at 0px)
  const blurAmount = Math.max(0, 20 - (scrollProgress || 0) * 20)
  const opacity = Math.min(1, (scrollProgress || 0) + 0.3)

  return (
    <section ref={sectionRef} className="relative w-full min-h-[180vh] bg-background">
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Full Viewport Image */}
        <div className="absolute inset-0">
          <img
            src="https://res.cloudinary.com/do0mtxjce/image/upload/v1790592034/WhatsApp_Image_2026-09-27_at_18.56.41_xanbe6.jpg" // replace with your image URL or local path
            alt="House of Happiness Merchandise Packages"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/55 backdrop-blur-[2px]" />
        </div>

        {/* Centered Text Overlay with Scroll-Based Blur */}
        <div className="absolute inset-0 flex items-center justify-center px-6 lg:px-8">
          <div 
            className="text-center max-w-4xl transition-all duration-100 ease-linear"
            style={{
              filter: `blur(${blurAmount}px)`,
              opacity: opacity
            }}
          >
            <span className="text-sm tracking-[0.3em] uppercase text-[#e6e2dd] mb-4 block font-semibold">
              HOUSE OF HAPPINESS MERCH &amp; APPAREL
            </span>
            <h2 className="font-serif text-5xl leading-tight text-white mb-6 text-balance md:text-8xl">
              Packed with care,
              <br />
              delivered with joy.
            </h2>
            <p className="text-lg text-stone-200 leading-relaxed max-w-2xl mx-auto font-medium mb-8">
              Explore our exclusive branded merch collection. From cozy custom apparel to signature gifts, each order is individually sealed and prepared for dispatch.
            </p>

            {/* Packaging Highlights */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left max-w-5xl mx-auto pt-4">
              {highlights.map((item) => (
                <div 
                  key={item.title} 
                  className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/20 text-white shadow-lg"
                >
                  <item.icon className="w-6 h-6 text-[#eab308] mb-2" />
                  <h3 className="font-semibold text-base text-white mb-1">{item.title}</h3>
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