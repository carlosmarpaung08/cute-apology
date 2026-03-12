import { useEffect, useState } from 'react'

const COLORS = ['#FFB3C6', '#C9B1FF', '#FFD700', '#FF85A1', '#A78BFA', '#FFA07A', '#98FB98', '#87CEEB']
const SHAPES = ['●', '■', '▲', '★', '♥', '✿']

export default function Confetti() {
  const [pieces, setPieces] = useState([])

  useEffect(() => {
    const newPieces = Array.from({ length: 80 }, (_, i) => ({
      id: i,
      char: SHAPES[Math.floor(Math.random() * SHAPES.length)],
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      left: Math.random() * 100,
      size: 10 + Math.random() * 16,
      duration: 2.5 + Math.random() * 3,
      delay: Math.random() * 2,
    }))
    setPieces(newPieces)
  }, [])

  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 1000, overflow: 'hidden' }}>
      {pieces.map(p => (
        <span
          key={p.id}
          style={{
            position: 'absolute',
            top: '-30px',
            left: `${p.left}%`,
            color: p.color,
            fontSize: `${p.size}px`,
            animation: `confettiFall ${p.duration}s ${p.delay}s ease-in forwards`,
            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.15))',
          }}
        >
          {p.char}
        </span>
      ))}
    </div>
  )
}
