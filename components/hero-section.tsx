import Link from "next/link"
import { BrandLogo } from "./brand-logo"

export function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-left items-center px-6 pt-24">
      <div className="max-w-7xl relative z-10 ml-[10%] lg:ml-[15%]">
        <h1 className="text-7xl font-bold mb-8 tracking-tighter">
          <span className="text-primary-light">Welcome to</span>
          <br />
          <span className="text-white font-[500]">Avalanche Team1</span>
        </h1>
        <Link
          href="/get-started"
          className="inline-block bg-gradient-to-r from-primary to-primary-light hover:from-primary-light hover:to-primary transition-all duration-300 rounded-md px-8 py-3 text-white font-medium"
        >
          Get Started
        </Link>
      </div>
      <div className="absolute top-1/2 right-[-5%] transform -translate-y-1/2">
        <BrandLogo className="w-[600px] h-[600px] opacity-75" />
      </div>
    </section>
  )
}

