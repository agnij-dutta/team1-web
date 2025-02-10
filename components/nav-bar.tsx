"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

const routes = [
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
          <Link href="/" className="flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-RYjzSh2t3iZzYQO5flxcl0EuFGguBA.png"
              alt="Logo"
              width={32}
              height={32}
              className="transition-transform hover:scale-105"
            />
          </Link>
          <div className="nav-links hidden md:flex items-center gap-6">
            {routes.map((route) => (
              <Link
                key={route.path}
                href={route.path}
                className="text-base font-medium text-white hover:text-white/80 transition-colors tracking-wider"
              >
                {route.name}
              </Link>
            ))}
          </div>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="nav-mobile md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col gap-4 mt-8">
              {routes.map((route) => (
                <Link
                  key={route.path}
                  href={route.path}
                  className="text-lg font-medium text-white/80 hover:text-white transition-colors tracking-wide"
                >
                  {route.name}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  )
}

