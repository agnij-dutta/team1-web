import { LeaderboardBackground } from "@/components/leaderboard-background"

export default function LeaderboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="min-h-screen">
      <LeaderboardBackground />
      {children}
    </section>
  )
}