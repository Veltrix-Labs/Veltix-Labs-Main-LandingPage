"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import VisionSection from "@/components/vision-section"
import InnovationsSection from "@/components/innovations-section"
import CareersSection from "@/components/careers-section"
import AdvisorsSection from "@/components/advisors-section"
import WhyJoinSection from "@/components/why-join-section"
import FounderSection from "@/components/founder-section"
import NewsletterSection from "@/components/newsletter-section"
import Footer from "@/components/footer"
import Header from "@/components/header"
import ImportantBanner from "@/components/important-banner"
import { useInView } from "react-intersection-observer"

export default function Home() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  // Refs for each section to detect when they're in view
  const [heroRef, heroInView] = useInView({ threshold: 0.3 })
  const [aboutRef, aboutInView] = useInView({ threshold: 0.3 })
  const [visionRef, visionInView] = useInView({ threshold: 0.3 })
  const [innovationsRef, innovationsInView] = useInView({ threshold: 0.3 })
  const [careersRef, careersInView] = useInView({ threshold: 0.3 })
  const [advisorsRef, advisorsInView] = useInView({ threshold: 0.3 })
  const [whyJoinRef, whyJoinInView] = useInView({ threshold: 0.3 })
  const [importantNoteRef, importantNoteInView] = useInView({ threshold: 0.3 })
  const [founderRef, founderInView] = useInView({ threshold: 0.3 })
  const [newsletterRef, newsletterInView] = useInView({ threshold: 0.3 })

  // Update active section based on which one is in view
  useEffect(() => {
    if (heroInView) setActiveSection("hero")
    else if (aboutInView) setActiveSection("about")
    else if (visionInView) setActiveSection("vision")
    else if (innovationsInView) setActiveSection("innovations")
    else if (careersInView) setActiveSection("careers")
    else if (advisorsInView) setActiveSection("advisors")
    else if (whyJoinInView) setActiveSection("whyJoin")
    else if (importantNoteInView) setActiveSection("importantNote")
    else if (founderInView) setActiveSection("founder")
    else if (newsletterInView) setActiveSection("newsletter")
  }, [
    heroInView,
    aboutInView,
    visionInView,
    innovationsInView,
    careersInView,
    advisorsInView,
    whyJoinInView,
    importantNoteInView,
    founderInView,
    newsletterInView,
  ])

  // After mounting, we can show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-gray-950">
      <Header activeSection={activeSection} scrollToSection={scrollToSection} />
      <main className="overflow-hidden">
        <section id="hero" ref={heroRef} className="transition-all duration-500">
          <HeroSection scrollToSection={scrollToSection} />
        </section>

        <section id="about" ref={aboutRef} className="transition-all duration-500">
          <AboutSection />
        </section>

        <section id="vision" ref={visionRef} className="transition-all duration-500">
          <VisionSection />
        </section>

        <section id="innovations" ref={innovationsRef} className="transition-all duration-500">
          <InnovationsSection />
        </section>

        <section id="careers" ref={careersRef} className="transition-all duration-500">
          <CareersSection />
        </section>

        <section id="advisors" ref={advisorsRef} className="transition-all duration-500">
          <AdvisorsSection />
        </section>

        <section id="whyJoin" ref={whyJoinRef} className="transition-all duration-500">
          <WhyJoinSection />
        </section>

        <section
          id="importantNote"
          ref={importantNoteRef}
          className="transition-all duration-500 bg-gradient-to-b from-gray-950 to-gray-900 neural-bg py-8"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ImportantBanner />
          </div>
        </section>

        <section id="founder" ref={founderRef} className="transition-all duration-500">
          <FounderSection />
        </section>

        <section id="newsletter" ref={newsletterRef} className="transition-all duration-500">
          <NewsletterSection />
        </section>
      </main>
      <Footer />
    </div>
  )
}
