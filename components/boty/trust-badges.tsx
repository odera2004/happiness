"use client"

import { useEffect, useRef, useState } from "react"
import { Sparkles, Heart, Flower2, Clock } from "lucide-react"

const badges = [
  {
    icon: Flower2,
    title: "Fresh Floral Design",
    description: "Sourced daily for lasting beauty"
  },
  {
    icon: Sparkles,
    title: "Bespoke Styling",
    description: "Tailored to your event vision"
  },
  {
    icon: Heart,
    title: "Unforgettable Moments",
    description: "Memories crafted with love"
  },
  {
    icon: Clock,
    title: "Seamless Setup",
    description: "On-time delivery & execution"
  }
]

export function TrustBadges() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section className="py-20 bg-background border-t border-border/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div 
          ref={sectionRef}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {badges.map((badge, index) => (
            <div
              key={badge.title}
              className={`p-6 lg:p-8 text-center rounded-xl transition-all duration-700 ease-out ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <badge.icon className="text-primary mb-4 mx-auto size-12" strokeWidth={1} />
              <h3 className="font-serif text-foreground mb-2 text-xl lg:text-2xl">{badge.title}</h3>
              <p className="text-sm text-muted-foreground">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}