"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { PointMaterial, Points } from "@react-three/drei"
import * as random from "maath/random"

function ParticleField() {
  const ref = useRef<any>()
  const points = useMemo(() => {
    return random.inSphere(new Float32Array(5000), { radius: 20 })
  }, [])

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10
      ref.current.rotation.y -= delta / 15
    }
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={points} stride={3} frustumCulled={false}>
        <PointMaterial transparent color="#8f0101" size={0.02} sizeAttenuation={true} depthWrite={false} blending={2} />
      </Points>
    </group>
  )
}

export function EnhancedBackground() {
  return (
    <div className="fixed inset-0 bg-black">
      {/* 3D Particle Canvas */}
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <ParticleField />
        </Canvas>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0">
        <div className="enhanced-grid-pattern" />
      </div>

      {/* Gradients */}
      <div className="absolute inset-0">
        <div className="enhanced-gradient" />
      </div>

      {/* Vignette */}
      <div className="absolute inset-0 vignette" />
    </div>
  )
}

