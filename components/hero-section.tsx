import Link from "next/link"
import { BrandLogo } from "./brand-logo"

export function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center px-6 pt-24 overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        <h1 className="text-5xl md:text-7xl font-display mb-8 tracking-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-[#ff0000]">
            Welcome to
          </span>
          <br />
          <span className="text-white font-[500]">Avalanche Team1</span>
        </h1>
        <p className="text-lg text-white/80 max-w-xl mb-8">
          Build your fast & interoperable Layer 1 blockchain with Avalanche's technology.
        </p>
        <Link
          href="/get-started"
          className="inline-block bg-gradient-to-r from-primary to-primary-light hover:from-primary-light hover:to-primary transition-all duration-300 rounded-md px-8 py-3 text-white font-medium transform hover:scale-105"
        >
          Get Started
        </Link>
      </div>
      <div className="absolute top-1/2 right-[-5%] transform -translate-y-1/2">
        <div className="relative">
          <BrandLogo className="w-[600px] h-[600px] opacity-75" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
        </div>
      </div>
    </section>
  )
}

