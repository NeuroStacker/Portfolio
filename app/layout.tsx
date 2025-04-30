import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://ronak.live"),
  title: "Ronak Gupta | Full-Stack Developer & ML Enthusiast from Chennai",
  description:
    "Official portfolio website of Ronak Gupta, a Full-Stack Developer and Machine Learning Enthusiast based in Chennai, India. Specializing in AI, ML, and web development.",
  keywords: [
    "Ronak Gupta",
    "Ronak",
    "Gupta",
    "Full-Stack Developer",
    "Machine Learning",
    "AI",
    "Portfolio",
    "Chennai",
    "Developer",
    "Software Engineer",
    "ronak.live",
    "Python Developer",
    "AI Engineer",
    "ML Engineer",
    "Web Developer",
    "Ronak Gupta Chennai",
    "Ronak Gupta Developer",
    "Ronak Gupta Portfolio",
  ],
  authors: [{ name: "Ronak Gupta", url: "https://ronak.live" }],
  creator: "Ronak Gupta",
  publisher: "Ronak Gupta",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ronak.live",
    title: "Ronak Gupta | Full-Stack Developer & ML Enthusiast",
    description:
      "Official portfolio website of Ronak Gupta, a Full-Stack Developer and Machine Learning Enthusiast based in Chennai, India.",
    siteName: "Ronak Gupta Portfolio",
    images: [
      {
        url: "https://ronak.live/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ronak Gupta Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ronak Gupta | Full-Stack Developer & ML Enthusiast",
    description:
      "Official portfolio website of Ronak Gupta, a Full-Stack Developer and Machine Learning Enthusiast based in Chennai, India.",
    creator: "@ronakgupta730",
    images: ["https://ronak.live/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://ronak.live",
  },
  verification: {
    google: "verification_token", // Replace with your Google Search Console verification token
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://ronak.live" />
        <meta name="author" content="Ronak Gupta" />
        <meta name="copyright" content="Ronak Gupta" />
        <meta name="application-name" content="Ronak Gupta Portfolio" />
        <meta name="msapplication-TileColor" content="#4a54d1" />
        <meta name="theme-color" content="#4a54d1" />
        <meta name="geo.region" content="IN-TN" />
        <meta name="geo.placename" content="Chennai" />
        <meta name="geo.position" content="13.0827;80.2707" />
        <meta name="ICBM" content="13.0827, 80.2707" />

        {/* Schema.org markup for Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Ronak Gupta",
              url: "https://ronak.live",
              image: "https://ronak.live/og-image.png",
              sameAs: [
                "https://github.com/NeuroStacker",
                "https://www.linkedin.com/in/guptaronak",
                "https://x.com/ronakgupta730",
                "https://www.instagram.com/ronak_guptaofficial",
              ],
              jobTitle: "Full-Stack Developer",
              worksFor: {
                "@type": "Organization",
                name: "Self-employed",
              },
              description: "Full-Stack Developer and Machine Learning Enthusiast based in Chennai, India.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Chennai",
                addressRegion: "Tamil Nadu",
                addressCountry: "India",
              },
              alumniOf: {
                "@type": "EducationalOrganization",
                name: "SRM Institute of Science and Technology",
                sameAs: "https://www.srmist.edu.in/",
              },
              knowsAbout: [
                "Python",
                "Machine Learning",
                "AI",
                "Full-Stack Development",
                "React",
                "Next.js",
                "TensorFlow",
              ],
            }),
          }}
        />

        {/* Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              url: "https://ronak.live",
              name: "Ronak Gupta Portfolio",
              description:
                "Official portfolio website of Ronak Gupta, a Full-Stack Developer and Machine Learning Enthusiast based in Chennai, India.",
              author: {
                "@type": "Person",
                name: "Ronak Gupta",
              },
            }),
          }}
        />

        {/* Portfolio Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  item: {
                    "@type": "SoftwareApplication",
                    name: "Legal & Medical Chatbot (LexiMed)",
                    description:
                      "Summarizing and advising based on legal & medical documents. An AI-powered assistant for legal and medical professionals.",
                    applicationCategory: "AI Application",
                    operatingSystem: "Web",
                    author: {
                      "@type": "Person",
                      name: "Ronak Gupta",
                    },
                  },
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  item: {
                    "@type": "SoftwareApplication",
                    name: "AI Intruder Detection System",
                    description:
                      "Using YOLO for security applications. Real-time detection and alerting system for unauthorized access.",
                    applicationCategory: "Security Application",
                    operatingSystem: "Cross-platform",
                    author: {
                      "@type": "Person",
                      name: "Ronak Gupta",
                    },
                  },
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  item: {
                    "@type": "SoftwareApplication",
                    name: "Lab Assistant Software",
                    description:
                      "Disease recognition from blood test results. Automated analysis and interpretation of medical lab reports.",
                    applicationCategory: "Medical Application",
                    operatingSystem: "Cross-platform",
                    author: {
                      "@type": "Person",
                      name: "Ronak Gupta",
                    },
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
