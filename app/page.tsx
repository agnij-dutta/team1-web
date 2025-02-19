import { NavBar } from "@/components/nav-bar"
import { HeroSection } from "@/components/hero-section"
import { CommunitySection } from "@/components/community-section"
import { MindshareSection } from "@/components/mindshare-section"
import { Footer } from "@/components/footer"
import { GridBackground } from "@/components/grid-background"
import { SparkParticles } from "@/components/spark-particles"

export default function Home() {
  return (
    <main className="min-h-screen bg-black relative overflow-hidden">
      <GridBackground />
      <SparkParticles />
      <div className="relative z-10">
        <NavBar />
        <HeroSection />
        <CommunitySection />
        <MindshareSection />
        <Footer />
      </div>
    </main>
  )
}

