"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"

interface BatProps {
  count?: number
}

export default function AnimatedBats({ count = 15 }: BatProps) {
  const batsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!batsRef.current) return

    const bats: HTMLElement[] = []

    // Create bats
    for (let i = 0; i < count; i++) {
      const bat = document.createElement("div")
      bat.className = "absolute pointer-events-none"
      bat.style.opacity = (Math.random() * 0.6 + 0.4).toString() // Increased opacity
      bat.style.transform = `scale(${Math.random() * 0.5 + 0.3})` // Larger size

      // SVG bat icon with inline SVG instead of path
      bat.innerHTML = `
        <svg 
          width="40" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="currentColor" 
          class="text-primary opacity-90"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M2 6C2 6 7.5 10 12 10C16.5 10 22 6 22 6C22 6 20 10 12 10C4 10 2 6 2 6Z" />
          <path d="M12 10C4 10 2 16 2 16C2 16 4 13 6 13C8 13 10 15 12 15C14 15 16 13 18 13C20 13 22 16 22 16C22 16 20 10 12 10Z" />
        </svg>
      `

      batsRef.current.appendChild(bat)
      bats.push(bat)

      // Initial position - random across the screen
      gsap.set(bat, {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        rotation: Math.random() * 360,
      })

      // Animate each bat
      animateBat(bat)
    }

    function animateBat(bat: HTMLElement) {
      // Random destination
      const newX = Math.random() * window.innerWidth
      const newY = Math.random() * window.innerHeight
      const duration = Math.random() * 10 + 10 // 10-20 seconds

      gsap.to(bat, {
        x: newX,
        y: newY,
        rotation: Math.random() * 360,
        duration: duration,
        ease: "power1.inOut",
        onComplete: () => animateBat(bat), // Recursive animation
      })

      // Flapping wings animation
      gsap.to(bat, {
        scaleX: 1.2,
        scaleY: 0.8,
        duration: 0.2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      })
    }

    return () => {
      bats.forEach((bat) => {
        gsap.killTweensOf(bat)
        if (bat.parentNode === batsRef.current) {
          batsRef.current.removeChild(bat)
        }
      })
    }
  }, [count])

  return <div ref={batsRef} className="fixed inset-0 z-10 overflow-hidden pointer-events-none" aria-hidden="true" />
}
