"use client"

import React, { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowUpRight, Instagram, Video, Facebook, Pin } from "lucide-react"

const socialLinks = [
  {
    name: "Instagram",
    handle: "@houseofhappiness",
    icon: Instagram,
    url: "https://www.instagram.com/house_of_happiness_events_co/",
    description: "Daily event inspiration, decor previews, and behind-the-scenes magic."
  },
  {
    name: "TikTok",
    handle: "@houseofhappiness",
    icon: Video,
    url: "https://www.tiktok.com/@oyollah_?_r=1&_t=ZS-9AAYfhQjhcS",
    description: "Trending event setups, flower box reveals, and quick decor tips."
  },
  {
    name: "Facebook",
    handle: "House of Happiness Co.",
    icon: Facebook,
    url: "https://facebook.com",
    description: "Full event galleries, customer reviews, and upcoming announcements."
  },
  {
    name: "Pinterest",
    handle: "@houseofhappiness",
    icon: Pin,
    url: "https://pin.it/5QQJuCs78",
    description: "Curated mood boards, theme ideas, and romantic styling inspiration."
  }
]

export function Newsletter() {
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
    <section ref={sectionRef} className="py-24 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span 
            className={`text-sm tracking-[0.3em] uppercase text-primary mb-4 block ${
              isVisible ? 'animate-blur-in opacity-0' : 'opacity-0'
            }`}
            style={isVisible ? { animationDelay: '0.2s', animationFillMode: 'forwards' } : {}}
          >
            STAY CONNECTED
          </span>
          <h2 
            className={`font-serif text-4xl leading-tight text-foreground mb-6 text-balance md:text-7xl ${
              isVisible ? 'animate-blur-in opacity-0' : 'opacity-0'
            }`} 
            style={isVisible ? { animationDelay: '0.4s', animationFillMode: 'forwards' } : {}}
          >
            Follow Our Journey
          </h2>
          <p 
            className={`text-lg text-muted-foreground leading-relaxed ${
              isVisible ? 'animate-blur-in opacity-0' : 'opacity-0'
            }`} 
            style={isVisible ? { animationDelay: '0.6s', animationFillMode: 'forwards' } : {}}
          >
            Join our online community for event inspiration, behind-the-scenes styling, and daily floral beauty.
          </p>
        </div>

        {/* Social Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {socialLinks.map((social, index) => (
            <Link
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative p-8 bg-card rounded-3xl border border-border shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <social.icon className="w-6 h-6" />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-1">
                  {social.name}
                </h3>
                <p className="text-xs font-semibold text-primary mb-3 tracking-wider">
                  {social.handle}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {social.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-border/60 text-xs font-bold text-foreground group-hover:text-primary transition-colors flex items-center gap-1">
                <span>CONNECT</span>
                <span>&rarr;</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}