"use client"

import { useCallback } from "react"
import { Particles } from "@tsparticles/react"
import { loadSlim } from "@tsparticles/slim"
import type { Engine } from "@tsparticles/engine"
import { cn } from "@/lib/utils"

export function SparkParticles({ className }: { className?: string }) {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  return (
    <Particles
      className={cn("absolute inset-0 pointer-events-none", className)}
      init={particlesInit}
      options={{
        particles: {
          number: {
            value: 50,
            density: {
              enable: true,
              width: 800,
              height: 800
            }
          },
          color: {
            value: "#8f0101"
          },
          shape: {
            type: "circle"
          },
          opacity: {
            value: 0.3,
            random: true,
            animation: {
              enable: true,
              speed: 0.5,
              startValue: "random",
              sync: false,
              destroy: "none"
            }
          },
          size: {
            value: 2,
            random: true,
            animation: {
              enable: true,
              speed: 1,
              startValue: "random",
              sync: false,
              destroy: "none"
            }
          },
          move: {
            enable: true,
            speed: 0.8,
            direction: "none",
            random: true,
            straight: false,
            outModes: {
              default: "out"
            }
          }
        },
        interactivity: {
          detectsOn: "canvas",
          events: {
            onHover: {
              enable: false
            }
          }
        },
        background: {
          color: {
            value: "transparent"
          }
        }
      }}
    />
  )
}

