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
              className="cta-button inline-flex items-center gap-3 group"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                height="24" 
                viewBox="0 0 24 24" 
                width="24"
                className="opacity-90 group-hover:opacity-100 transition-opacity"
              >
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Get Started with Google
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </Link>
            <Link
              href="/events"
              className="text-white/70 hover:text-white font-display text-lg tracking-wide transition-all hover:tracking-wider relative group"
            >
              View Events
              <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
              <span className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-red-500/0 via-red-500 to-red-500/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
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

