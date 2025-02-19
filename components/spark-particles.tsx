"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei"
import * as THREE from "three"

function SparkField() {
  const ref = useRef<any>()

  // Generate more particles for a denser effect
  const count = 7000
  const positions = new Float32Array(count * 3)
  const colors = new Float32Array(count * 3)
  const scales = new Float32Array(count)
  const speeds = new Float32Array(count)

  // Initialize particles
  for (let i = 0; i < count; i++) {
    const i3 = i * 3

    // Random positions in a sphere
    const radius = 20
    const theta = Math.random() * Math.PI * 2
    const phi = Math.acos(Math.random() * 2 - 1)

    positions[i3] = radius * Math.sin(phi) * Math.cos(theta)
    positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
    positions[i3 + 2] = radius * Math.cos(phi)

    // Ember colors (orange to red)
    colors[i3] = Math.random() * 0.2 + 0.8 // R: 0.8-1.0
    colors[i3 + 1] = Math.random() * 0.3 + 0.2 // G: 0.2-0.5
    colors[i3 + 2] = Math.random() * 0.2 // B: 0-0.2

    // Random scales and speeds
    scales[i] = Math.random() * 0.8 + 0.2
    speeds[i] = Math.random() * 0.8 + 0.2
  }

  useFrame((state, delta) => {
    if (!ref.current) return

    const positions = ref.current.geometry.attributes.position.array

    // Update each particle
    for (let i = 0; i < count; i++) {
      const i3 = i * 3

      // Upward movement with speed variation
      positions[i3 + 1] += speeds[i] * delta * 2

      // Add subtle horizontal drift
      positions[i3] += Math.sin(state.clock.elapsedTime * 0.1 + i) * delta * 0.1
      positions[i3 + 2] += Math.cos(state.clock.elapsedTime * 0.1 + i) * delta * 0.1

      // Reset position when particle moves too high
      if (positions[i3 + 1] > 20) {
        positions[i3 + 1] = -20
        positions[i3] = (Math.random() - 0.5) * 40
        positions[i3 + 2] = (Math.random() - 0.5) * 40
      }
    }

    ref.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <Points ref={ref}>
      <PointMaterial
        transparent
        vertexColors
        size={0.15}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={count} array={colors} itemSize={3} />
        <bufferAttribute attach="attributes-scale" count={count} array={scales} itemSize={1} />
      </bufferGeometry>
    </Points>
  )
}

export function SparkParticles() {
  return (
    <div className="fixed inset-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <SparkField />
        <fogExp2 attach="fog" color="#000000" density={0.15} />
      </Canvas>
    </div>
  )
}

