"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import Image from "next/image"

interface Skill {
  name: string
  logo: string
  invert?: boolean
}

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)

  const skills: Skill[] = [
    // Programming Languages
    {
      name: "Python",
      logo: "/images/skills/python.svg",
    },
    {
      name: "Java",
      logo: "/images/skills/java.svg",
    },
    {
      name: "C++",
      logo: "/images/skills/cpp.svg",
    },
    {
      name: "JavaScript",
      logo: "/images/skills/javascript.svg",
    },
    // Frontend
    {
      name: "HTML5",
      logo: "/images/skills/html5.svg",
    },
    {
      name: "CSS3",
      logo: "/images/skills/css3.svg",
    },
    {
      name: "Bootstrap",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    },
    // Backend
    {
      name: "Flask",
      logo: "/images/skills/flask.svg",
      invert: true,
    },
    {
      name: "Django",
      logo: "/images/skills/django.svg",
      invert: true,
    },
    {
      name: "Node.js",
      logo: "/images/skills/nodejs.svg",
    },
    {
      name: "MySQL",
      logo: "/images/skills/mysql.svg",
    },
    {
      name: "PostgreSQL",
      logo: "/images/skills/postgresql.svg",
    },
    // AI & ML
    {
      name: "TensorFlow",
      logo: "/images/skills/tensorflow.svg",
    },
    {
      name: "PyTorch",
      logo: "/images/skills/pytorch.svg",
    },
    {
      name: "OpenCV",
      logo: "/images/skills/opencv.svg",
    },
    {
      name: "YOLO",
      logo: "/images/skills/yolo.svg",
    },
    // Tools & Others
    {
      name: "Git",
      logo: "/images/skills/git.svg",
      invert: true,
    },
    {
      name: "GitHub",
      logo: "/images/skills/github.svg",
      invert: true,
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

    // Animate skills
    gsap.fromTo(
      ".skill-card",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        duration: 0.6,
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top 80%",
        },
      },
    )

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section id="skills" ref={sectionRef} className="py-20 md:py-32 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div ref={headingRef} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            <span className="text-primary">Technical</span> Skills
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A comprehensive overview of my technical expertise and the tools I use to build modern applications.
          </p>
        </div>

        <div ref={skillsRef} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="skill-card bg-gray-950/80 rounded-lg p-4 border border-gray-900 transition-all duration-300 hover:shadow-[0_0_20px_rgba(74,84,209,0.2)] hover:border-primary/50 flex flex-col items-center justify-center text-center"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 relative mb-3 flex items-center justify-center">
                <Image
                  src={skill.logo || "/placeholder.svg"}
                  alt={`${skill.name} logo`}
                  width={64}
                  height={64}
                  className={`object-contain ${skill.invert ? "invert brightness-100" : ""}`}
                />
              </div>
              <h4 className="text-sm md:text-base font-medium text-gray-300">{skill.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
