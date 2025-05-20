"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Menu, X, Mail } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

interface HeaderProps {
  activeSection: string
  scrollToSection: (sectionId: string) => void
}

export default function Header({ activeSection, scrollToSection }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Navigation items
  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "innovations", label: "Innovations" },
    { id: "careers", label: "Careers" },
    { id: "advisors", label: "Advisors" },
  ]

  // Handle navigation click
  const handleNavClick = (sectionId: string) => {
    // Close the mobile menu first
    setIsMobileMenuOpen(false)

    // Small delay to ensure the menu closes before scrolling
    setTimeout(() => {
      const section = document.getElementById(sectionId)
      if (section) {
        // Calculate position accounting for fixed header
        const headerHeight = document.querySelector("header")?.offsetHeight || 0
        const sectionPosition = section.getBoundingClientRect().top + window.pageYOffset - headerHeight

        // Scroll to the section
        window.scrollTo({
          top: sectionPosition,
          behavior: "smooth",
        })
      }
    }, 100)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-gray-900/80 backdrop-blur-md py-2 shadow-sm" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => handleNavClick("hero")}>
            <Image src="/images/veltrix-logo.png" alt="Veltrix Labs Logo" width={40} height={40} className="mr-2" />
            <span className="font-bold text-xl text-white">Veltrix Labs</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === item.id ? "text-primary" : "text-gray-300"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isMobileMenuOpen ? "auto" : 0,
          opacity: isMobileMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-gray-900"
      >
        <div className="px-4 py-2 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                activeSection === item.id ? "bg-gray-800 text-primary" : "text-gray-300 hover:bg-gray-800"
              }`}
            >
              {item.label}
            </button>
          ))}

          {/* Subscribe button - Mobile only */}
          <button
            onClick={() => handleNavClick("newsletter")}
            className="flex items-center w-full text-left px-3 py-2 rounded-md text-base font-medium bg-blue-600 hover:bg-blue-700 text-white mt-2"
          >
            <Mail className="h-4 w-4 mr-2" />
            Subscribe
          </button>
        </div>
      </motion.div>
    </header>
  )
}
