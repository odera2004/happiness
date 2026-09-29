"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 flex justify-center">
      <nav 
        className="w-full max-w-5xl px-6 lg:px-8 backdrop-blur-md rounded-lg py-0 my-0 animate-scale-fade-in bg-[rgba(255,255,255,0.4)] border border-[rgba(255,255,255,0.32)]" 
        style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 50px' }}
      >
        <div className="flex items-center justify-between h-[68px]">
          {/* Logo */}
          <Link href="/">
            <h1 className="font-serif text-xl md:text-2xl tracking-wider text-foreground font-bold whitespace-nowrap">
              HOUSE OF HAPPINESS
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <a
              href="#services"
              className="text-sm tracking-wide text-foreground/70 hover:text-foreground boty-transition font-medium"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Services
            </a>
            <a
              href="#contact-banner"
              className="text-sm tracking-wide text-foreground/70 hover:text-foreground boty-transition font-medium"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('contact-banner')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Book
            </a>
            <a
              href="#merch"
              className="text-sm tracking-wide text-foreground/70 hover:text-foreground boty-transition font-medium"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('merch')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Merch
            </a>
            <a
              href="#contact"
              className="text-sm tracking-wide text-foreground/70 hover:text-foreground boty-transition font-medium"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Contact
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 text-foreground/80 hover:text-foreground boty-transition"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden boty-transition ${
            isMenuOpen ? "max-h-64 pb-6" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-4 pt-4 border-t border-border/50">
            <a
              href="#services"
              className="text-sm tracking-wide text-foreground/70 hover:text-foreground boty-transition font-medium"
              onClick={(e) => {
                e.preventDefault()
                setIsMenuOpen(false)
                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Services
            </a>
            <a
              href="#contact-banner"
              className="text-sm tracking-wide text-foreground/70 hover:text-foreground boty-transition font-medium"
              onClick={(e) => {
                e.preventDefault()
                setIsMenuOpen(false)
                document.getElementById('contact-banner')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Book
            </a>
            <a
              href="#merch"
              className="text-sm tracking-wide text-foreground/70 hover:text-foreground boty-transition font-medium"
              onClick={(e) => {
                e.preventDefault()
                setIsMenuOpen(false)
                document.getElementById('merch')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Merch
            </a>
            <a
              href="#contact"
              className="text-sm tracking-wide text-foreground/70 hover:text-foreground boty-transition font-medium"
              onClick={(e) => {
                e.preventDefault()
                setIsMenuOpen(false)
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}