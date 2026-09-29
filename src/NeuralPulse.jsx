import { useEffect, useRef } from 'react'

// Hero background: a drifting constellation of data points (the "network")
// with an ECG-style trace sweeping across it (the "ICU monitor").
export default function NeuralPulse() {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas.getContext('2d')
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let w = 0, h = 0, dpr = 1, raf = 0, nodes = []
    const mouse = { x: -1e4, y: -1e4 }

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = canvas.clientWidth
      h = canvas.clientHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const count = Math.round(Math.min(90, (w * h) / 14000))
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: 1.2 + Math.random() * 2,
      }))
    }

    // One heartbeat: flat, P wave, QRS spike, T wave. Input t in [0,1).
    const beat = (t) => {
      if (t > 0.1 && t < 0.18) return Math.sin(((t - 0.1) / 0.08) * Math.PI) * 0.12
      if (t > 0.24 && t < 0.27) return -((t - 0.24) / 0.03) * 0.15
      if (t > 0.27 && t < 0.31) return -0.15 + ((t - 0.27) / 0.04) * 1.15
      if (t > 0.31 && t < 0.35) return 1 - ((t - 0.31) / 0.04) * 1.3
      if (t > 0.35 && t < 0.38) return -0.3 + ((t - 0.35) / 0.03) * 0.3
      if (t > 0.48 && t < 0.62) return Math.sin(((t - 0.48) / 0.14) * Math.PI) * 0.22
      return 0
    }

    const draw = (time) => {
      ctx.clearRect(0, 0, w, h)
      const linkDist = Math.min(160, w / 7)

      for (const n of nodes) {
        if (!reduced) {
          n.x += n.vx
          n.y += n.vy
          if (n.x < 0 || n.x > w) n.vx *= -1
          if (n.y < 0 || n.y > h) n.vy *= -1
          const dx = n.x - mouse.x, dy = n.y - mouse.y
          const d = Math.hypot(dx, dy)
          if (d < 120 && d > 0) {
            n.x += (dx / d) * 0.6
            n.y += (dy / d) * 0.6
          }
        }
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j]
          const d = Math.hypot(a.x - b.x, a.y - b.y)
          if (d < linkDist) {
            ctx.strokeStyle = `rgba(139, 120, 214, ${(1 - d / linkDist) * 0.28})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }
      for (const n of nodes) {
        ctx.fillStyle = 'rgba(124, 107, 196, 0.55)'
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
        ctx.fill()
      }

      // ECG sweep
      const baseY = h * 0.88
      const amp = Math.min(90, h * 0.12)
      const period = Math.max(260, w / 3.2)
      const head = reduced ? w : ((time * 0.18) % (w + 200))
      const tail = 420
      ctx.lineWidth = 2
      ctx.lineJoin = 'round'
      let prev = null
      for (let x = Math.max(0, head - tail); x <= Math.min(w, head); x += 2) {
        const y = baseY - beat((x % period) / period) * amp
        if (prev) {
          const alpha = reduced ? 0.35 : Math.max(0, 1 - (head - x) / tail) * 0.75
          ctx.strokeStyle = `rgba(150, 110, 220, ${alpha})`
          ctx.beginPath()
          ctx.moveTo(prev[0], prev[1])
          ctx.lineTo(x, y)
          ctx.stroke()
        }
        prev = [x, y]
      }
      if (!reduced && head <= w && prev) {
        ctx.fillStyle = 'rgba(190, 160, 255, 0.9)'
        ctx.shadowColor = 'rgba(160, 120, 255, 0.9)'
        ctx.shadowBlur = 16
        ctx.beginPath()
        ctx.arc(prev[0], prev[1], 3.5, 0, Math.PI * 2)
        ctx.fill()
        ctx.shadowBlur = 0
      }

      if (!reduced) raf = requestAnimationFrame(draw)
    }

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }
    const onLeave = () => { mouse.x = mouse.y = -1e4 }

    resize()
    const ro = new ResizeObserver(() => {
      resize()
      if (reduced) draw(0)
    })
    ro.observe(canvas)
    window.addEventListener('pointermove', onMove, { passive: true })
    window.addEventListener('pointerleave', onLeave)
    raf = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerleave', onLeave)
    }
  }, [])

  return <canvas ref={ref} className="hero__canvas" aria-hidden="true" />
}
