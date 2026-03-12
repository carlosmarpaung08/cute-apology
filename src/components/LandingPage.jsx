import { motion } from 'framer-motion'
import { useState } from 'react'

export default function LandingPage({ onOpenLetter, revealed }) {
  const [hovered, setHovered] = useState(false)

  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      position: 'relative',
      zIndex: 1,
    }}>
      {/* Decorative stars */}
      {['✨','⭐','🌟','💫','✨','⭐'].map((s, i) => (
        <span key={i} style={{
          position: 'absolute',
          fontSize: `${18 + Math.random() * 14}px`,
          top: `${10 + i * 14}%`,
          left: i % 2 === 0 ? `${5 + i * 3}%` : `${80 - i * 3}%`,
          animation: `sparkle ${2 + i * 0.4}s ${i * 0.3}s ease-in-out infinite`,
          opacity: 0,
        }}>{s}</span>
      ))}

      {/* Big envelope icon */}
      <motion.div
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        style={{ fontSize: '90px', marginBottom: '1rem', filter: 'drop-shadow(0 8px 20px rgba(255,133,161,0.5))' }}
      >
        💌
      </motion.div>

      {/* Main title */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{
          fontFamily: "'Dancing Script', cursive",
          fontSize: 'clamp(2.2rem, 6vw, 4rem)',
          color: 'var(--text-dark)',
          textAlign: 'center',
          marginBottom: '1rem',
          lineHeight: 1.2,
          textShadow: '0 2px 12px rgba(200,100,180,0.25)',
          background: 'linear-gradient(135deg, #C2185B, #7B1FA2)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        Aku Ada Sesuatu Buat Kamu ❤️
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        style={{
          fontFamily: "'Quicksand', sans-serif",
          fontSize: 'clamp(1rem, 3vw, 1.3rem)',
          color: 'var(--text-mid)',
          textAlign: 'center',
          marginBottom: '2.5rem',
          fontWeight: 600,
          maxWidth: '400px',
        }}
      >
        Tolong dibuka ya… ini penting banget 🥺
      </motion.p>

      {/* CTA Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.8, type: 'spring', stiffness: 200 }}
        whileHover={{ scale: 1.08, boxShadow: '0 12px 40px rgba(255,133,161,0.6)' }}
        whileTap={{ scale: 0.95 }}
        onClick={onOpenLetter}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          background: 'linear-gradient(135deg, #FF85A1 0%, #C9B1FF 100%)',
          border: 'none',
          borderRadius: '50px',
          padding: '1rem 2.5rem',
          fontSize: '1.2rem',
          fontFamily: "'Quicksand', sans-serif",
          fontWeight: 700,
          color: '#fff',
          cursor: 'pointer',
          boxShadow: '0 8px 28px rgba(255,133,161,0.45)',
          letterSpacing: '0.5px',
          transition: 'all 0.3s ease',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <span style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)',
          backgroundSize: '200% 100%',
          animation: hovered ? 'shimmer 1s infinite' : 'none',
        }} />
        💌 Buka Suratnya
      </motion.button>

      {/* Decorative hearts row */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        style={{ marginTop: '3rem', fontSize: '1.6rem', letterSpacing: '0.8rem', opacity: 0.5 }}
      >
        ❤️ 💕 ❤️ 💕 ❤️
      </motion.div>

      {/* Scroll hint if revealed */}
      {revealed && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{ position: 'absolute', bottom: '2rem', fontSize: '1.5rem', animation: 'float 2s ease-in-out infinite' }}
        >
          ↓
        </motion.div>
      )}
    </section>
  )
}
