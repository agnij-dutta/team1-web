import { NavBar } from "@/components/nav-bar"
import { EventsList } from "@/components/events-list"
import { GridBackground } from "@/components/grid-background"

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-black relative">
      <GridBackground />
      <div className="relative z-10">
        <NavBar />
        <div className="max-w-5xl mx-auto px-6 pt-32 pb-24">
          <EventsList />
        </div>
      </div>
    </main>
  )
}

