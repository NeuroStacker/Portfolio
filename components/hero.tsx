"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

export default function Hero() {
  const textRef = useRef<HTMLDivElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)
  const scrollIndicatorRef = useRef<HTMLDivElement>(null)
  const greetingRef = useRef<HTMLDivElement>(null)
  const spotlightRef = useRef<HTMLDivElement>(null)
  const [currentGreeting, setCurrentGreeting] = useState({ text: "Hello" })

  const greetings = [
    { text: "Hello" }, // English
    { text: "नमस्ते" }, // Hindi
    { text: "வணக்கம்" }, // Tamil
    { text: "안녕하세요" }, // Korean
    { text: "Bonjour" }, // French
  ]

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Greeting animation
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * greetings.length)

      gsap.to(greetingRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.5,
        ease: "power2.out",
        onComplete: () => {
          setCurrentGreeting(greetings[randomIndex])
          gsap.to(greetingRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
          })
        },
      })
    }, 3000)

    // Spotlight animation
    if (spotlightRef.current) {
      gsap.to(spotlightRef.current, {
        opacity: "random(0.6, 0.8)",
        duration: "random(2, 3)",
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      })
    }

    // Initial animations
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

    tl.fromTo(greetingRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 })
      .fromTo(
        textRef.current?.children || [],
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.2, duration: 0.8 },
        "-=0.5",
      )
      .fromTo(
        buttonsRef.current?.children || [],
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.6 },
        "-=0.4",
      )

    return () => {
      clearInterval(interval)
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  const scrollToNext = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black"></div>

      {/* Spotlight effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[200vh] pointer-events-none">
          {/* Main spotlight beam */}
          <div
            ref={spotlightRef}
            className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[200%] h-full"
            style={{
              background: `
                radial-gradient(
                  ellipse at 50% 0%,
                  rgba(74, 84, 209, 0.15) 0%,
                  rgba(74, 84, 209, 0.05) 40%,
                  transparent 80%
                )
              `,
            }}
          />

          {/* Top light bar */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-1 bg-primary opacity-50 blur-sm" />

          {/* Side beams */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
            <div className="absolute top-0 left-0 w-1 h-96 bg-gradient-to-b from-primary/50 to-transparent rotate-[-30deg] origin-top blur-sm" />
            <div className="absolute top-0 right-0 w-1 h-96 bg-gradient-to-b from-primary/50 to-transparent rotate-[30deg] origin-top blur-sm" />
          </div>
        </div>
      </div>

      {/* Content wrapper */}
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        {/* Greeting */}
        <div ref={greetingRef} className="text-center transform transition-all duration-500 mb-8 md:mb-12">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tighter text-primary">
            {currentGreeting.text}
          </h1>
        </div>

        {/* Hero Text */}
        <div ref={textRef} className="text-center space-y-4 md:space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
            <span className="text-primary">RONAK GUPTA</span>
          </h2>
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight">
            Full-Stack Developer | ML Enthusiast
          </h3>
        </div>

        {/* CTA Buttons with arrow below */}
        <div className="flex flex-col items-center mt-8 md:mt-12">
          <div ref={buttonsRef} className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10 mb-6">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-6 sm:px-8 rounded-md transition-all duration-300 hover:shadow-[0_0_15px_rgba(74,84,209,0.5)] hover:scale-105"
              onClick={() => scrollToSection("projects")}
            >
              View Projects
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-gray-800 hover:bg-gray-900 px-6 py-6 sm:px-8 rounded-md transition-all duration-300 hover:scale-105"
              onClick={() => scrollToSection("contact")}
            >
              Contact Me
            </Button>
          </div>

          {/* Arrow between and below buttons - fixed positioning */}
          <div
            className="cursor-pointer animate-bounce hover:text-primary transition-colors duration-300 mt-2 flex justify-center w-full"
            onClick={scrollToNext}
          >
            <ChevronDown className="h-8 w-8 text-gray-500" />
          </div>
        </div>
      </div>
    </section>
  )
}
