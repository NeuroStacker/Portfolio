"use client"

import { useRef } from "react"
import { Github, Linkedin, Instagram, Mail } from "lucide-react"
import { XIcon } from "./x-icon"

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null)

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com/NeuroStacker",
      label: "GitHub",
      hoverClass: "hover:text-black hover:bg-white",
    },
    {
      icon: <XIcon className="h-5 w-5" />,
      href: "https://x.com/ronakgupta730?t=gUHVHNVyKi0ZlefInfGuhQ&s=09",
      label: "X (Twitter)",
      hoverClass: "hover:text-black hover:bg-white",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://www.linkedin.com/in/guptaronak?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      label: "LinkedIn",
      hoverClass: "hover:text-[#0077b5] hover:bg-white",
    },
    {
      icon: <Instagram className="h-5 w-5" />,
      href: "https://www.instagram.com/ronak_guptaofficial?igsh=MWZ3eDI0djY4M3VjaQ==",
      label: "Instagram",
      hoverClass: "hover:text-[#E1306C] hover:bg-white",
    },
    {
      icon: <Mail className="h-5 w-5" />,
      href: "mailto:ronakgupta730@gmail.com",
      label: "Email",
      hoverClass: "hover:text-[#EA4335] hover:bg-white",
    },
  ]

  return (
    <footer ref={footerRef} className="bg-black border-t border-gray-900 py-10 md:py-12 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="bg-gray-950/80 rounded-lg border border-gray-900 p-6 md:p-8 mb-6 md:mb-8 shadow-[0_0_20px_rgba(74,84,209,0.1)]">
          <h3 className="text-primary font-bold mb-6 text-xl md:text-2xl text-center">CONNECT WITH ME</h3>

          <div className="grid grid-cols-3 sm:grid-cols-5 gap-6 justify-items-center">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full bg-gray-900 text-gray-400 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_10px_rgba(74,84,209,0.3)] ${link.hoverClass}`}
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
