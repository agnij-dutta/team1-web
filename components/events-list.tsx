"use client"

import { useState } from "react"
import Image from "next/image"
import { MapPin, Users } from "lucide-react"
import { cn } from "@/lib/utils"

const events = [
  {
    id: 1,
    date: "Feb 12",
    day: "Wednesday",
    time: "4:00 PM",
    title: "Avalanche Game Night Kalyani, India",
    location: "Game In Cage",
    hosts: ["Sarnavo saha Sardar", "Tamaghna Choudhuri"],
    attendees: 20,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-kQbrV584PiibN1PEzK4oGAhmQL2pRR.png",
    status: "upcoming",
  },
  {
    id: 2,
    date: "Feb 18",
    day: "Tuesday",
    time: "3:00 PM",
    title: "Avalanche Game Night Kolkata, India",
    location: "BattleGround Gaming",
    hosts: ["Sarnavo saha Sardar", "Bartick Maiti"],
    attendees: 24,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-kQbrV584PiibN1PEzK4oGAhmQL2pRR.png",
    status: "upcoming",
  },
  {
    id: 3,
    date: "Feb 25",
    day: "Tuesday",
    time: "5:00 PM",
    title: "Avalanche Gaming Tournament Mumbai",
    location: "GamersHub Arena",
    hosts: ["Rahul Sharma", "Priya Patel"],
    attendees: 45,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-kQbrV584PiibN1PEzK4oGAhmQL2pRR.png",
    status: "upcoming",
  },
  {
    id: 4,
    date: "Mar 3",
    day: "Wednesday",
    time: "2:00 PM",
    title: "Avalanche Esports Championship Delhi",
    location: "Digital Sports Complex",
    hosts: ["Amit Kumar", "Neha Singh"],
    attendees: 60,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-kQbrV584PiibN1PEzK4oGAhmQL2pRR.png",
    status: "upcoming",
  },
  {
    id: 5,
    date: "Mar 10",
    day: "Wednesday",
    time: "6:00 PM",
    title: "Avalanche Gaming Fest Bangalore",
    location: "Tech Park Gaming Zone",
    hosts: ["Karthik R", "Ananya M"],
    attendees: 35,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-kQbrV584PiibN1PEzK4oGAhmQL2pRR.png",
    status: "upcoming",
  },
  {
    id: 6,
    date: "Jan 15",
    day: "Monday",
    time: "4:00 PM",
    title: "Avalanche Winter Gaming Event",
    location: "Cyber Gaming Hub",
    hosts: ["Vikram Shah", "Meera Kapoor"],
    attendees: 30,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-kQbrV584PiibN1PEzK4oGAhmQL2pRR.png",
    status: "past",
  },
  {
    id: 7,
    date: "Jan 22",
    day: "Monday",
    time: "3:00 PM",
    title: "Avalanche Gaming Championship 2024",
    location: "Digital Arena",
    hosts: ["Rajesh Kumar", "Sneha Gupta"],
    attendees: 50,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-kQbrV584PiibN1PEzK4oGAhmQL2pRR.png",
    status: "past",
  },
]

export function EventsList() {
  const [filter, setFilter] = useState<"upcoming" | "past">("upcoming")

  const filteredEvents = events.filter((event) => event.status === filter)

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between mb-12">
        <h1 className="text-4xl md:text-5xl font-display tracking-tight">Events</h1>
        <div className="bg-white/5 rounded-full p-1 backdrop-blur-sm">
          {["upcoming", "past"].map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab as "upcoming" | "past")}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-all",
                filter === tab ? "bg-primary text-white" : "text-white/60 hover:text-white",
              )}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="relative">
        <div className="event-timeline" />
        <div className="space-y-8">
          {filteredEvents.map((event) => (
            <div key={event.id} className="flex gap-6 items-start group">
              <div className="relative">
                <div className="event-date group-hover:border-primary/40">
                  <span className="text-sm font-medium text-white/80">{event.date.split(" ")[0]}</span>
                  <span className="text-xs text-white/60">{event.date.split(" ")[1]}</span>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 top-full h-full w-px bg-primary/20 group-hover:bg-primary/40 transition-colors" />
              </div>
              <div className="event-card flex-1">
                <div className="flex gap-6 items-start">
                  <div className="flex-1">
                    <span className="text-white/60 text-sm">{event.time}</span>
                    <h3 className="text-xl font-medium mt-1 mb-3">{event.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-white/60">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>+{event.attendees} going</span>
                      </div>
                    </div>
                  </div>
                  <div className="relative w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                    <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-white/60">By</span>
                    <div className="flex items-center">
                      {event.hosts.map((host, index) => (
                        <span key={host} className="text-sm text-white/80">
                          {host}
                          {index < event.hosts.length - 1 && ", "}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

