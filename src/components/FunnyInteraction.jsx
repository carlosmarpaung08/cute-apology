import { motion, AnimatePresence } from 'framer-motion'
import { useState, useRef, useCallback } from 'react'

export default function FunnyInteraction({ onForgiven }) {
  const [noPos, setNoPos] = useState({ x: 0, y: 0 })
  const [noCount, setNoCount] = useState(0)
  const [forgiven, setForgiven] = useState(false)
  const noRef = useRef(null)

  const funnyMessages = [
    "Eh kabur dulu~", "Hehehe nggak mau~", "Coba lagi dong 😜",
    "Wkwkwk nggak bisa!", "Nggak bisa diclick!", "Lari~~ 🏃",
    "Hihihi~ 😝", "Nope nope nope~",
  ]

  const escapeButton = useCallback((e) => {
    const btn = noRef.current
    if (!btn) return
    const vw = window.innerWidth
    const vh = window.innerHeight
    const rect = btn.getBoundingClientRect()

    const dx = (e.clientX - rect.left - rect.width / 2)
    const dy = (e.clientY - rect.top - rect.height / 2)

    const escapeX = -(dx / Math.abs(dx || 1)) * (100 + Math.random() * 120)
    const escapeY = -(dy / Math.abs(dy || 1)) * (80 + Math.random() * 100)

    const newX = Math.max(-vw * 0.3, Math.min(vw * 0.3, noPos.x + escapeX))
    const newY = Math.max(-vh * 0.3, Math.min(vh * 0.3, noPos.y + escapeY))

    setNoPos({ x: newX, y: newY })
    setNoCount(c => c + 1)
  }, [noPos])

  const handleForgiven = () => {
    setForgiven(true)
    onForgiven()
  }

  const currentMessage = funnyMessages[noCount % funnyMessages.length]

  return (
    <section style={{
      padding: 'clamp(3rem, 6vw, 5rem) 1.5rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative',
      zIndex: 1,
    }}>
      {/* Background decoration */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse at center, rgba(255,179,198,0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{
          textAlign: 'center',
          marginBottom: '1rem',
          zIndex: 1,
          position: 'relative',
        }}
      >
        <div style={{ fontSize: '3rem', marginBottom: '0.5rem', animation: 'wiggle 1.5s ease-in-out infinite' }}>🥺</div>
        <h2 style={{
          fontFamily: "'Dancing Script', cursive",
          fontSize: 'clamp(1.8rem, 5vw, 2.8rem)',
          background: 'linear-gradient(135deg, #C2185B, #7B1FA2)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          marginBottom: '0.5rem',
        }}>
          Kamu mau maafin aku gak?
        </h2>
        {noCount > 0 && (
          <motion.p
            key={noCount}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            style={{
              fontSize: '0.9rem',
              color: 'var(--text-light)',
              fontStyle: 'italic',
            }}
          >
            "{currentMessage}" ({noCount}x mencoba kabur 🙈)
          </motion.p>
        )}
      </motion.div>

      {/* Buttons area */}
      <div style={{
        position: 'relative',
        width: '100%',
        maxWidth: '500px',
        height: '160px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '2rem',
        zIndex: 2,
      }}>
        {/* YES button */}
        <AnimatePresence>
          {!forgiven ? (
            <motion.button
              whileHover={{ scale: 1.12 }}
              whileTap={{ scale: 0.93 }}
              onClick={handleForgiven}
              style={{
                background: 'linear-gradient(135deg, #FF85A1, #FF4D7D)',
                border: 'none',
                borderRadius: '50px',
                padding: '1rem 2.2rem',
                fontSize: '1.2rem',
                fontFamily: "'Quicksand', sans-serif",
                fontWeight: 700,
                color: '#fff',
                cursor: 'pointer',
                boxShadow: '0 8px 24px rgba(255,77,125,0.45)',
                transition: 'box-shadow 0.3s',
                flexShrink: 0,
              }}
            >
              ❤️ Maafin
            </motion.button>
          ) : (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 15 }}
              style={{
                fontSize: '1.3rem',
                fontFamily: "'Quicksand', sans-serif",
                fontWeight: 700,
                color: 'var(--pink-deep)',
                padding: '1rem 2rem',
                background: 'rgba(255,255,255,0.8)',
                borderRadius: '50px',
                boxShadow: '0 8px 24px rgba(255,133,161,0.3)',
              }}
            >
              🎉 Yayyyy! Makasih! 🎉
            </motion.div>
          )}
        </AnimatePresence>

        {/* NO button - runs away */}
        {!forgiven && (
          <motion.button
            ref={noRef}
            animate={{ x: noPos.x, y: noPos.y }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            onMouseEnter={escapeButton}
            onTouchStart={escapeButton}
            style={{
              background: 'linear-gradient(135deg, #e0e0e0, #bdbdbd)',
              border: 'none',
              borderRadius: '50px',
              padding: '1rem 2.2rem',
              fontSize: '1.2rem',
              fontFamily: "'Quicksand', sans-serif",
              fontWeight: 700,
              color: '#888',
              cursor: 'not-allowed',
              boxShadow: '0 4px 12px rgba(0,0,0,0.12)',
              flexShrink: 0,
              userSelect: 'none',
              zIndex: 10,
            }}
          >
            😡 Nggak
          </motion.button>
        )}
      </div>

      {/* Hint text */}
      {!forgiven && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 1.5 }}
          style={{
            fontSize: '0.85rem',
            color: 'var(--text-light)',
            fontStyle: 'italic',
            marginTop: '0.5rem',
            zIndex: 1,
          }}
        >
          (Psst… tombol "Nggak" kayaknya males diklik 😅)
        </motion.p>
      )}
    </section>
  )
}
