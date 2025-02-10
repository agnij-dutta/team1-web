import Link from "next/link"
import { BrandLogo } from "./brand-logo"

export function HeroSection() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center px-6 pt-24 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="max-w-5xl mx-auto relative z-10">
        <h1 className="text-6xl md:text-8xl font-display mb-8 tracking-tight">
          <span className="text-primary">Welcome to</span>
          <br />
          <span className="text-white font-[500]">Avalanche Team1</span>
        </h1>
        <p className="text-xl text-white/80 max-w-xl mb-12">
          Build your fast & interoperable Layer 1 blockchain with Avalanche's technology.
        </p>
        <Link href="/get-started" className="cta-button inline-block">
          Get Started
        </Link>
      </div>
      <div className="absolute top-1/2 right-[-5%] transform -translate-y-1/2">
        <div className="relative">
          <BrandLogo className="w-[600px] h-[600px] opacity-75" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent" />
        </div>
      </div>
    </section>
  )
}

