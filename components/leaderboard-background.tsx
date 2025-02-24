export function LeaderboardBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute w-full h-full bg-grid-white/[0.02] -z-10" />
      <div className="absolute left-1/4 top-1/4 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-purple-500 opacity-10 rounded-full blur-3xl" />
      <div className="absolute right-1/4 bottom-1/4 translate-x-1/2 translate-y-1/2 w-48 h-48 bg-pink-500 opacity-10 rounded-full blur-3xl" />
      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
    </div>
  )
}