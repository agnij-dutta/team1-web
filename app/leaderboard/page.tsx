import { Card } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Pagination, PaginationContent, PaginationItem, PaginationLink } from "@/components/ui/pagination"
import { cn } from "@/lib/utils"
import { NavBar } from "@/components/nav-bar"
import { SparkParticles } from "@/components/spark-particles"

interface LeaderboardEntry {
  rank: number
  username: string
  points: number
  badges: string[]
  level: number
}

// Add more mock data to demonstrate scrolling
const leaderboardData: LeaderboardEntry[] = Array.from({ length: 50 }, (_, i) => ({
  rank: i + 1,
  username: `User${i + 1}`,
  points: Math.round(15000 * (1 - i * 0.02)),
  badges: ["Active Member", i < 10 ? "Top Contributor" : "", i < 5 ? "Early Adopter" : ""].filter(Boolean),
  level: Math.round(30 * (1 - i * 0.015))
}))

export default function LeaderboardPage() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <div className="absolute inset-0 radial-gradient-top" />
        <div className="absolute inset-0 radial-gradient-bottom" />
      </div>
      <SparkParticles className="opacity-50" />
      
      <div className="relative z-10">
        <NavBar />
        <div className="container mx-auto py-12 px-4">
          <div className="space-y-4 text-center mb-12">
            <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-red-600 to-red-500 pb-2">
              Community Leaderboard
            </h1>
            <p className="text-xl text-muted-foreground">Top contributors shaping our ecosystem</p>
          </div>
          
          <Card className="border-red-500/20 bg-black/40 backdrop-blur-xl">
            <div className="max-h-[calc(100vh-300px)] overflow-auto">
              <Table>
                <TableHeader>
                  <TableRow className="hover:bg-transparent">
                    <TableHead className="w-20 text-red-200">Rank</TableHead>
                    <TableHead className="text-red-200">User</TableHead>
                    <TableHead className="text-red-200">Level</TableHead>
                    <TableHead className="text-red-200">Points</TableHead>
                    <TableHead className="text-red-200">Achievements</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {leaderboardData.map((entry) => (
                    <TableRow 
                      key={entry.rank} 
                      className="hover:bg-red-500/5 transition-colors duration-200 group cursor-pointer"
                    >
                      <TableCell className="font-medium">
                        <div className={cn(
                          "w-8 h-8 rounded-full flex items-center justify-center text-lg",
                          entry.rank === 1 && "bg-yellow-500/20 text-yellow-300",
                          entry.rank === 2 && "bg-slate-400/20 text-slate-300",
                          entry.rank === 3 && "bg-amber-500/20 text-amber-600",
                          entry.rank > 3 && "bg-red-500/10 text-red-300"
                        )}>
                          {entry.rank === 1 && "🥇"}
                          {entry.rank === 2 && "🥈"}
                          {entry.rank === 3 && "🥉"}
                          {entry.rank > 3 && entry.rank}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center text-white font-medium">
                            {entry.username.charAt(0)}
                          </div>
                          <div>
                            <p className="font-semibold text-white group-hover:text-red-400 transition-colors">
                              {entry.username}
                            </p>
                            <p className="text-xs text-muted-foreground">Active Contributor</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-medium bg-red-500/10 text-red-300 px-2 py-0.5 rounded-md">
                            Lvl {entry.level}
                          </span>
                          <div className="h-2 w-24 bg-muted rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-red-500 to-red-600 rounded-full transition-all duration-300"
                              style={{ width: `${(entry.level % 5) * 20}%` }}
                            />
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <span className="font-mono text-lg text-red-300">
                          {entry.points.toLocaleString()}
                        </span>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2 flex-wrap">
                          {entry.badges.map((badge) => (
                            <Badge 
                              key={badge} 
                              className="bg-red-500/10 text-red-300 hover:bg-red-500/20 transition-colors"
                            >
                              {badge}
                            </Badge>
                          ))}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </Card>

          <div className="mt-6">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationLink 
                    href="#" 
                    className="hover:bg-red-500/10 hover:text-red-300"
                  >
                    Previous
                  </PaginationLink>
                </PaginationItem>
                {[1, 2, 3, 4, 5].map((page) => (
                  <PaginationItem key={page}>
                    <PaginationLink 
                      href="#" 
                      isActive={page === 1}
                      className={cn(
                        "hover:bg-red-500/10 hover:text-red-300",
                        page === 1 && "bg-red-500/20 text-red-300"
                      )}
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                <PaginationItem>
                  <PaginationLink 
                    href="#"
                    className="hover:bg-red-500/10 hover:text-red-300"
                  >
                    Next
                  </PaginationLink>
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </div>
    </div>
  )
}