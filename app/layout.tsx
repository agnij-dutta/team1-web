import { Space_Grotesk } from "next/font/google"
import "./globals.css"
import type React from "react" // Import React

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body className="bg-black text-white min-h-screen font-sans">{children}</body>
    </html>
  )
}

