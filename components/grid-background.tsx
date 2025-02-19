export function GridBackground() {
  return (
    <div className="fixed inset-0">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-primary/5" />

      {/* Animated grid with perspective */}
      <div className="absolute inset-0 perspective-[1000px]">
        <div className="absolute inset-0 grid-pattern transform-gpu rotate-x-65 scale-y-150 translate-y-[-20%]" />
      </div>

      {/* Radial gradients for depth */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 radial-gradient-top" />
        <div className="absolute inset-0 radial-gradient-bottom" />
      </div>

      {/* Vignette effect */}
      <div className="absolute inset-0 vignette-gradient" />

      {/* Noise texture */}
      <div className="absolute inset-0 noise-pattern opacity-[0.15]" />
    </div>
  )
}

