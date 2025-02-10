import type React from "react"
import { NavBar } from "@/components/nav-bar"

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <NavBar />
      {children}
    </>
  )
}

