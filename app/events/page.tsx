import { NavBar } from "@/components/nav-bar"
import { EventsList } from "@/components/events-list"
import { EnhancedBackground } from "@/components/enhanced-background"

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-black relative overflow-hidden">
      <EnhancedBackground />
      <div className="relative z-10">
        <NavBar />
        <div className="max-w-5xl mx-auto px-6 pt-32 pb-24">
          <div className="relative">
            <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
            <EventsList />
          </div>
        </div>
      </div>
    </main>
  )
}

