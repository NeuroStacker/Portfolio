import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white p-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-primary">404 - Page Not Found</h1>
      <h2 className="text-2xl md:text-3xl mb-8">Oops! You've ventured into the unknown.</h2>
      <p className="text-lg md:text-xl mb-8 text-center max-w-2xl">
        The page you're looking for doesn't exist on Ronak Gupta's portfolio website. Let's get you back to the main
        portfolio.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-primary text-black font-medium rounded-md hover:bg-primary/90 transition-colors"
      >
        Return to Ronak's Portfolio
      </Link>
    </div>
  )
}
