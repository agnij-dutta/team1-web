import Link from "next/link"
import { OrbitalFlags } from "@/components/orbital-flags"
import { SparkParticles } from "./spark-particles"

export function HeroSection() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center px-6 pt-24 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black" />
        <div className="absolute inset-0 noise-pattern mix-blend-soft-light opacity-10" />
      </div>
      
      <SparkParticles className="opacity-40" />
      
      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col md:flex-row items-center justify-between gap-16">
        <div className="flex-1 relative z-10">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-500/10 via-red-500/5 to-transparent blur-3xl"></div>
            <h1 className="text-6xl md:text-8xl font-display mb-8 tracking-tight">
              <span className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(255,0,0,0.5)]">
                Welcome to
              </span>
              <br />
              <span className="text-white font-[600] drop-shadow-[0_0_25px_rgba(255,255,255,0.15)]">
                Avalanche Team1
              </span>
            </h1>
          </div>
          <p className="text-xl text-white/80 max-w-xl mb-12 font-light leading-relaxed backdrop-blur-sm">
            Build your fast & interoperable Layer 1 blockchain with Avalanche's advanced technology.
          </p>
          <div className="flex items-center gap-8">
            <Link 
              href="/get-started" 
              className="cta-button inline-block"
            >
              Get Started
            </Link>
            <Link
              href="/events"
              className="text-white/70 hover:text-white font-display text-lg tracking-wide transition-all hover:tracking-wider"
            >
              View Events →
            </Link>
          </div>
        </div>
        
        <div className="relative flex-1 flex justify-center">
          <div className="absolute inset-0 bg-gradient-conic from-red-500/20 via-transparent to-transparent opacity-20 blur-3xl"></div>
          <OrbitalFlags />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent md:hidden" />
        </div>
      </div>
    </section>
  )
}

