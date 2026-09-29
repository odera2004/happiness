"use client"

import { useEffect, useRef, useState } from "react"
import { Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah & David M.",
    location: "Nairobi",
    rating: 5,
    text: "House of Happiness brought our wedding vision to life! The floral arch and table setups were pure perfection.",
    service: "Wedding Decor"
  },
  {
    id: 2,
    name: "Emma L.",
    location: "Karen",
    rating: 5,
    text: "The baby shower setup was enchanting! Whimsical, detailed, and completely stress-free for us.",
    service: "Baby Shower"
  },
  {
    id: 3,
    name: "Jessica R.",
    location: "Runda",
    rating: 5,
    text: "My 30th birthday decor was breathtaking! The balloon arch and luxury lighting made the entire night magical.",
    service: "Birthday Extravaganza"
  },
  {
    id: 4,
    name: "Maria K.",
    location: "Kilimani",
    rating: 5,
    text: "Every detail was styled with love. They turned an ordinary space into an unforgettable party atmosphere.",
    service: "Private Celebration"
  },
  {
    id: 5,
    name: "Sophie T.",
    location: "Gigiri",
    rating: 5,
    text: "Professional, creative, and passionate team. Our guests are still raving about the event styling weeks later!",
    service: "Corporate Gala"
  },
  {
    id: 6,
    name: "Anna P.",
    location: "Lavington",
    rating: 5,
    text: "Bespoke styling at its best. They listened to every request and delivered beyond our expectations.",
    service: "Bridal Shower"
  },
  {
    id: 7,
    name: "Claire B.",
    location: "Westlands",
    rating: 5,
    text: "The attention to detail in their floral arrangements and decor elements is truly unmatched.",
    service: "Wedding Decor"
  },
  {
    id: 8,
    name: "Lily W.",
    location: "Muthaiga",
    rating: 5,
    text: "From start to finish, the House of Happiness team treated our celebration with so much care and happiness.",
    service: "Anniversary Party"
  },
  {
    id: 9,
    name: "Rachel D.",
    location: "Kitisuru",
    rating: 5,
    text: "An incredible experience working with them. They truly create magic for every single occasion!",
    service: "Milestone Birthday"
  }
]

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
  <div className="rounded-3xl p-6 mb-4 flex-shrink-0 bg-card border border-border/50 shadow-sm">

    {/* Stars */}
    <div className="flex gap-1 mb-3 text-amber-400">
      {[...Array(testimonial.rating)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-current" />
      ))}
    </div>

    {/* Quote */}
    <p className="text-foreground/80 leading-relaxed mb-4 text-pretty font-medium text-xl font-serif tracking-wide">
      &ldquo;{testimonial.text}&rdquo;
    </p>

    {/* Author */}
    <div className="flex items-start justify-between gap-2">
      <div>
        <p className="text-foreground text-sm font-bold">{testimonial.name}</p>
        <p className="text-xs text-muted-foreground">{testimonial.location}</p>
      </div>
      <span className="text-xs tracking-wide text-primary/80 bg-primary/10 px-3 py-1 rounded-full whitespace-nowrap font-medium">
        {testimonial.service}
      </span>
    </div>
  </div>
)

export function Testimonials() {
  const [headerVisible, setHeaderVisible] = useState(false)
  const headerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (headerRef.current) {
      observer.observe(headerRef.current)
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current)
      }
    }
  }, [])

  return (
    <section className="py-24 bg-background overflow-hidden pb-24 pt-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <span className={`text-sm tracking-[0.3em] uppercase text-primary mb-4 block ${headerVisible ? 'animate-blur-in opacity-0' : 'opacity-0'}`} style={headerVisible ? { animationDelay: '0.2s', animationFillMode: 'forwards' } : {}}>
            KIND WORDS
          </span>
          <h2 className={`font-serif text-4xl leading-tight text-foreground text-balance md:text-7xl ${headerVisible ? 'animate-blur-in opacity-0' : 'opacity-0'}`} style={headerVisible ? { animationDelay: '0.4s', animationFillMode: 'forwards' } : {}}>
            Loved by Our Clients
          </h2>
        </div>

        {/* Scrolling Testimonials - Horizontal */}
        <div className="relative">
          {/* Gradient Overlays - Left & Right */}
          <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          
          {/* Row 1 - Scrolling Left */}
          <div className="relative overflow-hidden mb-4">
            <div className="animate-scroll-left hover:animate-scroll-left-slow flex gap-4 w-max">
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <div key={`row1-${testimonial.id}-${index}`} className="w-[350px] flex-shrink-0">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 - Scrolling Right */}
          <div className="relative overflow-hidden">
            <div className="animate-scroll-right hover:animate-scroll-right-slow flex gap-4 w-max">
              {[...testimonials.slice().reverse(), ...testimonials.slice().reverse()].map((testimonial, index) => (
                <div key={`row2-${testimonial.id}-${index}`} className="w-[350px] flex-shrink-0">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 40s linear infinite;
        }

        .animate-scroll-right {
          animation: scroll-right 40s linear infinite;
        }

        .animate-scroll-left-slow {
          animation: scroll-left 80s linear infinite;
        }

        .animate-scroll-right-slow {
          animation: scroll-right 80s linear infinite;
        }
      `}</style>
    </section>
  )
}