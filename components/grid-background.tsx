export function GridBackground() {
  return (
    <div className="fixed inset-0 perspective-1000">
      <div className="enhanced-grid">
        <div className="absolute inset-0 grid-background preserve-3d opacity-30" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-primary/5" />
    </div>
  )
}

