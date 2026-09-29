"use client"

import { ArrowUpRight } from "lucide-react"

const merchItems = [
  {
    id: "packaged-orders",
    name: "House Merch Pack",
    price: "$50",
    description: "Custom packaged apparel ready for delivery and dispatch.",
    image: "https://res.cloudinary.com/do0mtxjce/image/upload/v1790697703/WhatsApp_Image_2026-09-29_at_18.53.07_dfdz7w.jpg",
    badge: "Bestseller"
  },
  {
    id: "flower-box-luxury",
    name: "Luxury Rose Box",
    price: "$85",
    description: "Premium preserved roses arranged in a signature box.",
    image: "https://res.cloudinary.com/do0mtxjce/image/upload/v1790697699/WhatsApp_Image_2026-09-29_at_18.53.03_k4uaan.jpg",
    badge: "Popular"
  },
  {
    id: "apparel-hoodie",
    name: "Signature Brand Hoodie",
    price: "$60",
    description: "Heavyweight organic cotton hoodie with custom embroidered logo.",
    image: "https://res.cloudinary.com/do0mtxjce/image/upload/v1790697708/WhatsApp_Image_2026-09-29_at_18.53.04_xxhz7w.jpg",
    badge: "New"
  },
  {
    id: "full-apparel wear",
    name: "full-set",
    price: "$35",
    description: "Hand-poured soy wax candles to elevate any venue setup.",
    image: "https://res.cloudinary.com/do0mtxjce/image/upload/v1790594634/WhatsApp_Image_2026-09-27_at_19.09.38_phj5xj.jpg",
    badge: null
  },
  {
    id: "custom-tote",
    name: "custom made set",
    price: "$25",
    description: "Durable canvas tote bag for your everyday essentials.",
    image: "https://res.cloudinary.com/do0mtxjce/image/upload/v1790697694/WhatsApp_Image_2026-09-29_at_18.53.02_lalhd8.jpg",
    badge: "Classic"
  }
]

export function ProductGrid() {
  // Phone number for WhatsApp orders (enter without '+' or spaces)
  const whatsappNumber = "0740764113"

  const getWhatsAppLink = (itemName: string, price: string) => {
    const text = `Hello House of Happiness! I would like to order/inquire about: *${itemName}* (${price}).`
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`
  }

  return (
    <section id="merch" className="pt-28 pb-24 bg-card border-t border-border/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-12">
        {/* Section Header */}
        <div className="max-w-2xl">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-primary mb-3 block">
            OFFICIAL MERCH &amp; GIFTS
          </span>
          <h2 className="font-serif text-4xl md:text-6xl text-foreground font-medium mb-4">
            House Essentials
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Explore our signature collection of merch, custom packaged gifts, and event essentials.
          </p>
        </div>
      </div>

      {/* Infinite Horizontal Carousel Container */}
      <div className="relative w-full overflow-hidden group">
        {/* Carousel Inner Track */}
        <div className="flex gap-6 animate-marquee w-max group-hover:[animation-play-state:paused]">
          {/* Duplicate loop array to achieve seamless infinite looping */}
          {[...merchItems, ...merchItems].map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="w-[300px] sm:w-[340px] flex-shrink-0 bg-background rounded-3xl overflow-hidden border border-border hover:border-primary/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Container */}
                <div className="relative h-72 w-full overflow-hidden bg-muted">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  {item.badge && (
                    <span className="absolute top-4 left-4 bg-background/90 backdrop-blur-md text-foreground font-semibold text-xs px-3 py-1 rounded-full border border-border shadow-sm">
                      {item.badge}
                    </span>
                  )}
                </div>

                {/* Card Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-serif text-xl font-semibold text-foreground">
                      {item.name}
                    </h3>
                    <span className="font-serif font-bold text-lg text-primary">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Order on WhatsApp */}
              <div className="p-6 pt-0">
                <a
                  href={getWhatsAppLink(item.name, item.price)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs tracking-wider uppercase py-3.5 px-4 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  Order on WhatsApp
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tailwind Animation Helper in CSS / Tailwind config */}
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
      `}</style>
    </section>
  )
}