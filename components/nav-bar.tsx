import Link from "next/link"
import { BrandLogo } from "./brand-logo"

export function NavBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <nav className="max-w-7xl mx-auto">
        <div className="backdrop-blur-md bg-black/30 rounded-full border border-primary/20 px-6 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <BrandLogo size="small" className="w-8 h-8" />
          </Link>
          <div className="flex items-center gap-6">
            <Link
              href="/events"
              className="text-white/90 hover:text-primary-light transition-colors text-sm uppercase tracking-wider"
            >
              Events
            </Link>
            <Link
              href="/leaderboard"
              className="text-white/90 hover:text-primary-light transition-colors text-sm uppercase tracking-wider"
            >
              Leaderboard
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}

