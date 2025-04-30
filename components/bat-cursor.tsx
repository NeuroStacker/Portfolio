"use client"

import { useEffect, useState, useRef } from "react"
import gsap from "gsap"

export default function BatCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [isPointer, setIsPointer] = useState(false)
  const signalRef = useRef<HTMLDivElement>(null)
  const emitterRef = useRef<NodeJS.Timeout | null>(null)

  const emitBat = useRef<(x: number, y: number, isClick?: boolean) => void>(() => {})

  useEffect(() => {
    emitBat.current = (x: number, y: number, isClick = false) => {
      if (!signalRef.current) return

      // Emit multiple bats at once for density
      const batsCount = isClick ? 12 : isPointer ? 5 : 2

      for (let i = 0; i < batsCount; i++) {
        const bat = document.createElement("div")
        bat.className = "absolute pointer-events-none z-40"
        bat.style.left = `${x}px`
        bat.style.top = `${y}px`
        bat.style.transform = "translate(-50%, -50%) scale(0.2)"

        // Improved Batman logo SVG with sharper edges and better proportions
        bat.innerHTML = `
          <svg width="40" height="20" viewBox="0 0 40 20" fill="currentColor" class="text-primary opacity-80">
            <path d="M20,0 L14,2 L10,5 L6,9 L0,10 L2,14 L6,16 L10,16 L14,13 L20,18 L26,13 L30,16 L34,16 L38,14 L40,10 L34,9 L30,5 L26,2 Z" />
          </svg>
        `

        signalRef.current.appendChild(bat)

        const angle = Math.random() * Math.PI * 2
        const distance = 40 + Math.random() * 60
        const scale = 0.2 + Math.random() * 0.3
        const duration = 0.3 + Math.random() * 0.4

        gsap.set(bat, { scale: scale })

        gsap.to(bat, {
          x: Math.cos(angle) * distance,
          y: Math.sin(angle) * distance,
          rotation: Math.random() * 360,
          opacity: 0,
          duration: duration,
          ease: "power2.out",
          onComplete: () => {
            if (bat.parentNode === signalRef.current) {
              signalRef.current.removeChild(bat)
            }
          },
        })
      }
    }
  }, [])

  // Emit bats continuously, more frequently when hovering
  useEffect(() => {
    const emitInterval = isPointer ? 50 : 150

    emitterRef.current = setInterval(() => {
      if (isVisible) {
        emitBat.current(position.x, position.y)
      }
    }, emitInterval)

    return () => {
      if (emitterRef.current) {
        clearInterval(emitterRef.current)
      }
    }
  }, [isVisible, position, isPointer])

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)

      // Check if hovering over clickable elements
      const target = e.target as HTMLElement
      const clickableElements = ["A", "BUTTON", "INPUT", "TEXTAREA", "SELECT"]
      const isClickable =
        clickableElements.includes(target.tagName) ||
        target.closest("a") !== null ||
        target.closest("button") !== null ||
        target.getAttribute("role") === "button" ||
        window.getComputedStyle(target).cursor === "pointer"

      setIsPointer(isClickable)

      // Add bat signal on click
      if (e.type === "click") {
        emitBat.current(e.clientX, e.clientY, true) // Emit more bats on click
      }
    }

    const hideCursor = () => {
      setIsVisible(false)
    }

    window.addEventListener("mousemove", updateCursorPosition)
    window.addEventListener("mouseout", hideCursor)
    window.addEventListener("click", updateCursorPosition)

    return () => {
      window.removeEventListener("mousemove", updateCursorPosition)
      window.removeEventListener("mouseout", hideCursor)
      window.removeEventListener("click", updateCursorPosition)
    }
  }, [])

  if (typeof window === "undefined") return null

  return (
    <>
      {/* Signal container */}
      <div ref={signalRef} className="fixed inset-0 pointer-events-none z-40"></div>
    </>
  )
}
