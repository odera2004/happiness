"use client"

import Link from "next/link"
import { Instagram, Facebook, Video, Pin } from "lucide-react"

const footerLinks = {
  services: [
    { name: "Weddings & Ceremonies", href: "#services" },
    { name: "Baby Showers", href: "#services" },
    { name: "Birthdays & Parties", href: "#services" },
    { name: "Luxury Picnics", href: "#services" },
    { name: "Corporate Events", href: "#services" }
  ],
  company: [
    { name: "About Us", href: "#services" },
    { name: "Gifts & Flowers", href: "#gifts" },
    { name: "Official Merch", href: "#merch" },
    { name: "Social Community", href: "#socials" }
  ],
  support: [
    { name: "Get a Quote", href: "#contact" },
    { name: "Contact Us", href: "#contact" },
    { name: "FAQ", href: "#contact" },
    { name: "Booking Policy", href: "#contact" }
  ]
}

export function Footer() {
  return (
    <footer id="contact" className="bg-card pt-20 pb-10 relative overflow-hidden border-t border-border">
      {/* Giant Background Text */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none select-none z-0 opacity-10">
        <span className="font-serif text-[120px] sm:text-[180px] md:text-[240px] lg:text-[320px] font-bold text-foreground whitespace-nowrap leading-none tracking-tight">
          HAPPINESS
        </span>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-4 tracking-wider">
              HOUSE OF HAPPINESS
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Bespoke event styling, immersive decor, and luxury floral gifts crafted with love for every precious milestone.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/house_of_happiness_events_co/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-foreground/70 hover:text-primary hover:border-primary transition-all duration-300 shadow-sm"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.tiktok.com/@oyollah_?_r=1&_t=ZS-9AAYfhQjhcS"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-foreground/70 hover:text-primary hover:border-primary transition-all duration-300 shadow-sm"
                aria-label="TikTok"
              >
                <Video className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-foreground/70 hover:text-primary hover:border-primary transition-all duration-300 shadow-sm"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://pin.it/5QQJuCs78"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-foreground/70 hover:text-primary hover:border-primary transition-all duration-300 shadow-sm"
                aria-label="Pinterest"
              >
                <Pin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Our Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Explore</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Support &amp; Booking</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-border/60">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} House of Happiness — Events &amp; Decors Co. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}