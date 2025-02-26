"use client"
import { useEffect, useRef, memo } from 'react'
import { motion } from 'framer-motion'

const EnhancedBackgroundCanvas = memo(function EnhancedBackgroundCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const hexagonsRef = useRef<{ x: number; y: number; size: number; opacity: number; speed: number }[]>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      ctx.scale(dpr, dpr)
    }

    resizeCanvas()
    const resizeObserver = new ResizeObserver(resizeCanvas)
    resizeObserver.observe(canvas)

    // Initialize hexagons only once
    if (hexagonsRef.current.length === 0) {
      for (let i = 0; i < 30; i++) {
        hexagonsRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 20 + 10,
          opacity: Math.random() * 0.08,
          speed: Math.random() * 0.15 + 0.05
        })
      }
    }

    let animationFrame: number
    let lastTime = performance.now()

    const drawHexagon = (x: number, y: number, size: number) => {
      ctx.beginPath()
      for (let i = 0; i < 6; i++) {
        const angle = (i * Math.PI) / 3
        const px = x + size * Math.cos(angle)
        const py = y + size * Math.sin(angle)
        if (i === 0) ctx.moveTo(px, py)
        else ctx.lineTo(px, py)
      }
      ctx.closePath()
    }

    const animate = (currentTime: number) => {
      const deltaTime = currentTime - lastTime
      lastTime = currentTime

      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      hexagonsRef.current.forEach(hexagon => {
        ctx.strokeStyle = `rgba(239, 68, 68, ${hexagon.opacity})`
        ctx.lineWidth = 1
        drawHexagon(hexagon.x, hexagon.y, hexagon.size)
        ctx.stroke()
        
        hexagon.y += hexagon.speed * deltaTime
        if (hexagon.y > canvas.height + hexagon.size) {
          hexagon.y = -hexagon.size
          hexagon.x = Math.random() * canvas.width
        }
      })

      animationFrame = requestAnimationFrame(animate)
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationFrame)
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <canvas 
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ width: '100vw', height: '100vh' }}
    />
  )
})

export function EnhancedBackground() {
  return (
    <>
      <EnhancedBackgroundCanvas />
      <div className="fixed inset-0 bg-gradient-radial from-transparent via-black/80 to-black pointer-events-none z-0" />
      <div className="fixed inset-0 bg-[#030303] opacity-90 pointer-events-none z-0" />
      <motion.div 
        className="fixed inset-0 bg-gradient-to-b from-red-950/10 via-transparent to-red-950/5 pointer-events-none z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
    </>
  )
}

