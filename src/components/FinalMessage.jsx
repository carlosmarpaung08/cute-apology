import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function FinalMessage() {
  const [hearts, setHearts] = useState([])

  useEffect(() => {
    const newHearts = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: 10 + Math.random() * 80,
      delay: i * 0.15,
      size: 20 + Math.random() * 20,
    }))
    setHearts(newHearts)
  }, [])

  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, type: 'spring', stiffness: 120 }}
      style={{
        padding: 'clamp(4rem, 8vw, 7rem) 1.5rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        zIndex: 1,
        overflow: 'hidden',
      }}
    >
      {/* Background gradient */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(180deg, transparent, rgba(255,179,198,0.12), rgba(201,177,255,0.12), transparent)',
        pointerEvents: 'none',
      }} />

      {/* Floating hearts decoration */}
      {hearts.map(h => (
        <motion.span
          key={h.id}
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: [0, 0.7, 0], y: [-20, -100] }}
          transition={{ delay: h.delay, duration: 3, repeat: Infinity }}
          style={{
            position: 'absolute',
            bottom: '20%',
            left: `${h.x}%`,
            fontSize: `${h.size}px`,
            pointerEvents: 'none',
          }}
        >
          ❤️
        </motion.span>
      ))}

      {/* Card */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8, type: 'spring', stiffness: 180 }}
        style={{
          background: 'rgba(255,255,255,0.9)',
          backdropFilter: 'blur(16px)',
          borderRadius: '32px',
          padding: 'clamp(2.5rem, 6vw, 4rem)',
          maxWidth: '560px',
          width: '100%',
          boxShadow: '0 24px 80px rgba(199,130,200,0.28), 0 8px 24px rgba(199,130,200,0.15)',
          border: '2px solid rgba(255,133,161,0.35)',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          zIndex: 2,
        }}
      >
        {/* Top color bar */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0,
          height: '5px',
          background: 'linear-gradient(90deg, var(--pink-deep), var(--purple-deep), var(--pink-deep))',
          backgroundSize: '200% 100%',
          animation: 'shimmer 3s linear infinite',
        }} />

        {/* Big heart icon */}
        <motion.div
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{ fontSize: '4rem', marginBottom: '1.5rem' }}
        >
          ❤️
        </motion.div>

        {/* Main message */}
        <h2 style={{
          fontFamily: "'Dancing Script', cursive",
          fontSize: 'clamp(1.6rem, 5vw, 2.4rem)',
          background: 'linear-gradient(135deg, #C2185B, #7B1FA2)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          marginBottom: '1.5rem',
          lineHeight: 1.4,
        }}>
          Makasih udah mau dengerin aku ❤️
        </h2>

        <p style={{
          fontFamily: "'Quicksand', sans-serif",
          fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
          color: 'var(--text-mid)',
          lineHeight: 1.8,
          fontWeight: 600,
          marginBottom: '2rem',
        }}>
          Aku janji bakal jadi lebih baik.<br />
          Kamu adalah hal terbaik dalam hidupku. 🌸
        </p>

        {/* Promise badges */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.75rem',
          justifyContent: 'center',
          marginBottom: '2rem',
        }}>
          {['Lebih sabar ✨', 'Lebih dengerin 💕', 'Lebih perhatian 🌸', 'Lebih jaga perasaan kamu ❤️'].map((promise, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + i * 0.15, type: 'spring', stiffness: 300 }}
              style={{
                background: i % 2 === 0
                  ? 'linear-gradient(135deg, rgba(255,179,198,0.25), rgba(255,133,161,0.15))'
                  : 'linear-gradient(135deg, rgba(201,177,255,0.25), rgba(167,139,250,0.15))',
                border: i % 2 === 0 ? '1px solid rgba(255,133,161,0.3)' : '1px solid rgba(167,139,250,0.3)',
                borderRadius: '50px',
                padding: '0.4rem 1rem',
                fontSize: '0.85rem',
                fontFamily: "'Quicksand', sans-serif",
                fontWeight: 700,
                color: 'var(--text-mid)',
              }}
            >
              {promise}
            </motion.span>
          ))}
        </div>

        {/* Footer emoji */}
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}
        >
          🥰
        </motion.div>
        <p style={{
          fontFamily: "'Dancing Script', cursive",
          fontSize: '1.3rem',
          color: 'var(--pink-deep)',
          fontWeight: 700,
        }}>
          Sayang kamu selalu! 💌
        </p>
      </motion.div>

      {/* Bottom decoration */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        style={{
          marginTop: '2.5rem',
          fontSize: '2rem',
          letterSpacing: '0.8rem',
          zIndex: 2,
        }}
      >
        ❤️ 💕 🌸 💕 ❤️
      </motion.div>

      {/* Footer */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{
          marginTop: '1rem',
          fontSize: '0.8rem',
          color: 'var(--text-light)',
          fontStyle: 'italic',
          zIndex: 2,
        }}
      >
        Made with ❤️ just for you~
      </motion.p>
    </motion.section>
  )
}
