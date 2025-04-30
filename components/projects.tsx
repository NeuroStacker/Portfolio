"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  github: string
}

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)

  const projects: Project[] = [
    {
      id: 1,
      title: "Legal & Medical Chatbot (LexiMed)",
      description:
        "Summarizing and advising based on legal & medical documents. An AI-powered assistant for legal and medical professionals.",
      image: "/images/leximed.png",
      tags: ["Python", "TensorFlow", "NLP", "Flask"],
      github: "https://github.com/NeuroStacker/LexiMed",
    },
    {
      id: 2,
      title: "AI Intruder Detection System",
      description:
        "Using YOLO for security applications. Real-time detection and alerting system for unauthorized access.",
      image: "/images/intruder-detection.png",
      tags: ["Python", "YOLO", "OpenCV", "Computer Vision"],
      github: "https://github.com/NeuroStacker/AI-Intruder-detetion-system",
    },
    {
      id: 3,
      title: "Lab Assistant Software",
      description:
        "Disease recognition from blood test results. Automated analysis and interpretation of medical lab reports.",
      image: "/images/lab-assist.png",
      tags: ["Python", "Machine Learning", "Data Visualization"],
      github: "https://github.com/Vitthal-choudhary/Data-Visualization-For-Lab-Report",
    },
  ]

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Animate heading
    gsap.fromTo(
      headingRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      },
    )

    // Animate projects
    gsap.fromTo(
      ".project-card",
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 0.8,
        scrollTrigger: {
          trigger: projectsRef.current,
          start: "top 80%",
        },
      },
    )

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section id="projects" ref={sectionRef} className="py-20 md:py-32 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div ref={headingRef} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            <span className="text-primary">Featured</span> Projects
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A showcase of my recent work, interactive experiences built with modern technologies.
          </p>
        </div>

        <div ref={projectsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card bg-gray-950/80 rounded-lg overflow-hidden border border-gray-900 transition-all duration-300 hover:shadow-[0_0_20px_rgba(74,84,209,0.2)] hover:border-primary/50 hover:-translate-y-2"
            >
              <div className="relative h-48 md:h-56 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>
              <div className="p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-2 text-primary">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm md:text-base">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-5 md:mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-gray-900 text-gray-300 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 md:gap-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-gray-800 hover:border-primary hover:bg-primary/10"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4" />
                      View on GitHub
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            onClick={() => window.open("https://github.com/NeuroStacker", "_blank")}
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  )
}
