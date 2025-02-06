"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

const routes = [
  { name: "Home", path: "/" },
  { name: "Events", path: "/events" },
  { name: "Leaderboard", path: "/leaderboard" },
]

export function NavBar() {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [lastScroll, setLastScroll] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset

      if (currentScroll > lastScroll && !hidden && currentScroll > 100) {
        setHidden(true)
      } else if (currentScroll < lastScroll && hidden) {
        setHidden(false)
      }

      if (currentScroll > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }

      setLastScroll(currentScroll)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [hidden, lastScroll])

  return (
    <div className={cn("nav-wrapper", hidden && "nav-hidden", scrolled && "nav-collapsed")}>
      <nav className={cn("nav-content", scrolled && "nav-scrolled")}>
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <svg width="32" height="32" viewBox="0 0 50 60" className="text-primary" fill="currentColor">
              <rect width="49.3548" height="60" fill="url(#pattern0_11_23)" />
              <defs>
                <pattern id="pattern0_11_23" patternContentUnits="objectBoundingBox" width="1" height="1">
                  <use xlinkHref="#image0_11_23" transform="matrix(0.00303922 0 0 0.0025 -0.107843 0)" />
                </pattern>
              </defs>
            </svg>
          </Link>
          <div className="hidden md:flex items-center gap-6">
            {routes.map((route) => (
              <Link
                key={route.path}
                href={route.path}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors"
              >
                {route.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" className="text-white/70 hover:text-white">
            Sign In
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={cn("md:hidden", scrolled && hidden ? "nav-menu-collapsed" : "")}
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-4 mt-8">
                {routes.map((route) => (
                  <Link
                    key={route.path}
                    href={route.path}
                    className="text-lg font-medium text-white/70 hover:text-white transition-colors"
                  >
                    {route.name}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </div>
  )
}

