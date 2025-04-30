"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { FileText } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    })

    tl.fromTo(textRef.current?.children || [], { y: 50, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.2, duration: 0.8 })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-20 md:py-32 bg-black relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black opacity-80"></div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center">
            <span className="text-primary">ABOUT</span> ME
          </h2>

          <div className="grid grid-cols-1 gap-12 items-center">
            {/* Text Content */}
            <div ref={textRef} className="space-y-6">
              <p className="text-lg md:text-xl text-gray-300">
                Hi, I'm Ronak, a computer science and engineering student passionate about AI, machine learning, and
                full-stack development. I enjoy building AI-driven solutions and developing efficient, scalable
                applications.
              </p>
              <p className="text-lg md:text-xl text-gray-300">
                I have experience with Python, Java, C, C++, and Kotlin, along with frameworks like Flask, Django, and
                TensorFlow. Some of my projects include a Smart Health Monitoring System, an AI-powered legal and
                medical chatbot (LexiMed), an AI Intruder Detection System, and a Lab Assistant Software for disease
                recognition.
              </p>
              <p className="text-lg md:text-xl text-gray-300">
                I love solving problems, exploring new technologies, and working on innovative ideas to make an impact.
              </p>

              <div className="pt-4">
                <Button
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  onClick={() =>
                    window.open(
                      "https://drive.google.com/file/d/1j7CmuO2JmgJHbsw4B9z1p7dkgt5Fgevh/view?usp=sharing",
                      "_blank",
                    )
                  }
                >
                  <FileText className="mr-2 h-4 w-4" /> Download Resume
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
