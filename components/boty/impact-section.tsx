"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const services = [
  {
    id: "weddings",
    title: "Weddings",
    description: "Transform your dream wedding into an unforgettable reality with our bespoke styling, from intimate ceremonies to grand celebrations.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
    link: "#contact"
  },
  {
    id: "baby-showers",
    title: "Baby Showers",
    description: "Celebrate the arrival of your little one with enchanting setups, whimsical decor, and every precious detail planned to perfection.",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=1200&auto=format&fit=crop",
    link: "#contact"
  },
  {
    id: "birthdays",
    title: "Birthdays",
    description: "From milestone celebrations to themed extravaganzas, we create birthday experiences that sparkle with joy and wonder.",
    image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80&w=1200&auto=format&fit=crop",
    link: "#contact"
  },
  {
    id: "luxury-picnics",
    title: "Luxury Picnics",
    description: "Elevate your outdoor experience with our curated luxury picnic setups — complete with gourmet styling and dreamy aesthetics.",
    image: "https://res.cloudinary.com/do0mtxjce/image/upload/v1790591524/WhatsApp_Image_2026-09-27_at_18.41.38_1_c3hggt.jpg",
    link: "#contact"
  },
  {
    id: "corporate-events",
    title: "Corporate Events",
    description: "Make a lasting impression with polished, professional event styling that reflects your brand's excellence and sophistication.",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop",
    link: "#contact"
  }
]

export function ImpactSection() {
  const [headerVisible, setHeaderVisible] = useState(false)
  const [cardsVisible, setCardsVisible] = useState(false)
  const headerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const headerObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const cardsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCardsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (headerRef.current) {
      headerObserver.observe(headerRef.current)
    }

    if (cardsRef.current) {
      cardsObserver.observe(cardsRef.current)
    }

    return () => {
      if (headerRef.current) {
        headerObserver.unobserve(headerRef.current)
      }
      if (cardsRef.current) {
        cardsObserver.unobserve(cardsRef.current)
      }
    }
  }, [])

  return (
    <section id="services" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <span 
            className={`text-sm tracking-[0.3em] uppercase text-primary mb-4 block ${
              headerVisible ? 'animate-blur-in opacity-0' : 'opacity-0'
            }`}
            style={headerVisible ? { animationDelay: '0.2s', animationFillMode: 'forwards' } : {}}
          >
            WHAT WE DO
          </span>
          <h2 
            className={`font-serif text-4xl leading-tight text-foreground mb-6 text-balance md:text-7xl ${
              headerVisible ? 'animate-blur-in opacity-0' : 'opacity-0'
            }`} 
            style={headerVisible ? { animationDelay: '0.4s', animationFillMode: 'forwards' } : {}}
          >
            Our Services
          </h2>
          <p 
            className={`text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto ${
              headerVisible ? 'animate-blur-in opacity-0' : 'opacity-0'
            }`} 
            style={headerVisible ? { animationDelay: '0.6s', animationFillMode: 'forwards' } : {}}
          >
            Every occasion deserves to be extraordinary. We craft immersive experiences that leave lasting impressions.
          </p>
        </div>

        {/* Services Grid */}
        <div 
          ref={cardsRef} 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`group flex flex-col bg-card rounded-3xl overflow-hidden border border-border shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 ${
                cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              {/* Image Container with Hover Scale */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Card Body */}
              <div className="flex flex-col flex-1 p-8 justify-between">
                <div>
                  <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* CTA Link */}
                <Link
                  href={service.link}
                  className="inline-flex items-center gap-2 text-xs font-bold text-primary tracking-widest uppercase hover:text-primary/80 transition-colors pt-2"
                >
                  <span>GET A QUOTE</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}