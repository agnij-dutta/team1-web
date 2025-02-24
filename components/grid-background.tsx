export function GridBackground() {
  return (
    <div className="fixed inset-0">
      {/* Simple gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-primary/5" />

      {/* Subtle radial gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/40" />
      </div>

      {/* Fine noise texture */}
      <div className="absolute inset-0 noise-pattern opacity-[0.05] mix-blend-soft-light" />
    </div>
  )
}

