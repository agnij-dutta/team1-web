"use client"

import { NavBar } from "@/components/nav-bar"
import { cn } from "@/lib/utils"
import { motion, HTMLMotionProps } from "framer-motion"

interface PageWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
}

export function PageWrapper({ children, className, ...props }: PageWrapperProps) {
  return (
    <div className="min-h-screen bg-[#030303] relative overflow-hidden">
      <div className="relative z-10 min-h-screen flex flex-col">
        <NavBar />
        <motion.main 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={cn(
            "flex-1 container mx-auto px-4 flex flex-col",
            "pt-32 pb-12", // Consistent spacing for navbar
            className
          )}
          {...props}
        >
          {children}
        </motion.main>
      </div>
    </div>
  )
}