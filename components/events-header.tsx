"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

export function EventsHeader() {
  const [activeTab, setActiveTab] = useState<"upcoming" | "past">("upcoming")

  return (
    <div className="flex items-center justify-between mb-12">
      <h1 className="text-4xl md:text-5xl font-display tracking-tight">Events</h1>
      <div className="bg-white/5 rounded-full p-1 backdrop-blur-sm">
        <button
          onClick={() => setActiveTab("upcoming")}
          className={cn(
            "px-6 py-2 rounded-full text-sm font-medium transition-all",
            activeTab === "upcoming" ? "bg-primary text-white" : "text-white/60 hover:text-white",
          )}
        >
          Upcoming
        </button>
        <button
          onClick={() => setActiveTab("past")}
          className={cn(
            "px-6 py-2 rounded-full text-sm font-medium transition-all",
            activeTab === "past" ? "bg-primary text-white" : "text-white/60 hover:text-white",
          )}
        >
          Past
        </button>
      </div>
    </div>
  )
}

