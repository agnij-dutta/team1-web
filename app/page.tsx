import { NavBar } from "@/components/nav-bar"
import { HeroSection } from "@/components/hero-section"
import { CommunitySection } from "@/components/community-section"
import { MindshareSection } from "@/components/mindshare-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <NavBar />
      <HeroSection />
      <CommunitySection />
      <MindshareSection />
    </main>
  )
}

