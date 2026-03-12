import { useEffect, useState } from 'react'

const HEART_CHARS = ['❤️', '🩷', '💕', '💗', '💖', '✨', '🌸', '⭐']

export default function FloatingHearts() {
  const [hearts, setHearts] = useState([])

  useEffect(() => {
    const initial = Array.from({ length: 18 }, (_, i) => createHeart(i))
    setHearts(initial)

    const interval = setInterval(() => {
      setHearts(prev => {
        const filtered = prev.filter(h => Date.now() - h.created < h.duration)
        if (filtered.length < 20) {
          return [...filtered, createHeart(Date.now())]
        }
        return filtered
      })
    }, 800)

    return () => clearInterval(interval)
  }, [])

  function createHeart(id) {
    return {
      id: id + Math.random(),
      char: HEART_CHARS[Math.floor(Math.random() * HEART_CHARS.length)],
      left: Math.random() * 100,
      size: 14 + Math.random() * 22,
      duration: 6000 + Math.random() * 6000,
      delay: Math.random() * 2,
      created: Date.now(),
    }
  }

  return (
    <div style={{
      position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden'
    }}>
      {hearts.map(h => (
        <span
          key={h.id}
          style={{
            position: 'absolute',
            bottom: '-50px',
            left: `${h.left}%`,
            fontSize: `${h.size}px`,
            animation: `floatHeart ${h.duration / 1000}s ${h.delay}s ease-out forwards`,
            opacity: 0.7,
            filter: 'drop-shadow(0 0 4px rgba(255,150,180,0.5))',
          }}
        >
          {h.char}
        </span>
      ))}
    </div>
  )
}
