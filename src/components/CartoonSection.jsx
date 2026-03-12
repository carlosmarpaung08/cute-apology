import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

// 🐻 Bear character - sad apologizing / happy
function BearCharacter({ mood }) {
  // mood: 'sad' | 'offering' | 'happy'
  const isSad = mood === 'sad'
  const isOffering = mood === 'offering'
  const isHappy = mood === 'happy'

  return (
    <div style={{ position: 'relative', width: '110px', height: '160px', flexShrink: 0 }}>
      {/* Floating hearts when happy */}
      {isHappy && [0,1,2].map(i => (
        <motion.span key={i}
          initial={{ opacity: 0, y: 0, x: 0 }}
          animate={{ opacity: [0, 1, 0], y: -60, x: (i - 1) * 25 }}
          transition={{ delay: i * 0.3, duration: 1.5, repeat: Infinity, repeatDelay: 0.5 }}
          style={{ position: 'absolute', top: 0, left: '50%', fontSize: '1.1rem', zIndex: 10 }}
        >❤️</motion.span>
      ))}

      {/* Body */}
      <motion.div
        animate={isHappy ? { rotate: [-3, 3, -3] } : isSad ? { y: [0, -3, 0] } : {}}
        transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute', bottom: '10px', left: '50%',
          transform: 'translateX(-50%)',
          width: '70px', height: '80px',
          background: '#C9A96E',
          borderRadius: '35px 35px 28px 28px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.12)',
        }}
      >
        {/* Tummy */}
        <div style={{
          position: 'absolute', bottom: '12px', left: '50%',
          transform: 'translateX(-50%)',
          width: '40px', height: '36px',
          background: '#E8C99A', borderRadius: '50%',
        }} />
        {/* Left arm */}
        <motion.div
          animate={isOffering ? { rotate: [-40, -50, -40] } : isHappy ? { rotate: [30, 40, 30] } : { rotate: [5, 10, 5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{
            position: 'absolute', top: '20px', left: '-22px',
            width: '26px', height: '12px',
            background: '#C9A96E', borderRadius: '6px',
            transformOrigin: 'right center',
          }}
        />
        {/* Right arm */}
        <motion.div
          animate={isHappy ? { rotate: [-30, -40, -30] } : { rotate: [-5, -10, -5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{
            position: 'absolute', top: '20px', right: '-22px',
            width: '26px', height: '12px',
            background: '#C9A96E', borderRadius: '6px',
            transformOrigin: 'left center',
          }}
        />
        {/* Flower offering */}
        {isOffering && (
          <motion.div
            animate={{ rotate: [-10, 10, -10], y: [0, -3, 0] }}
            transition={{ duration: 1.2, repeat: Infinity }}
            style={{
              position: 'absolute', top: '5px', left: '-38px',
              fontSize: '1.6rem',
            }}
          >🌸</motion.div>
        )}
      </motion.div>

      {/* Head */}
      <motion.div
        animate={isSad ? { rotate: [-8, 0, -8] } : isHappy ? { y: [-2, 2, -2] } : {}}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute', top: '0px', left: '50%',
          transform: 'translateX(-50%)',
          width: '80px', height: '78px',
          background: '#C9A96E', borderRadius: '50%',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          zIndex: 2,
        }}
      >
        {/* Ears */}
        <div style={{ position: 'absolute', top: '-12px', left: '6px', width: '22px', height: '22px', background: '#C9A96E', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', top: '-10px', left: '10px', width: '14px', height: '14px', background: '#E8A0B0', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', top: '-12px', right: '6px', width: '22px', height: '22px', background: '#C9A96E', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', top: '-10px', right: '10px', width: '14px', height: '14px', background: '#E8A0B0', borderRadius: '50%' }} />

        {/* Eyes */}
        <div style={{
          position: 'absolute', top: isSad ? '32px' : '26px', left: '15px',
          width: '12px', height: isSad ? '8px' : '12px',
          background: '#3D2314', borderRadius: '50%', transition: 'all 0.4s',
        }} />
        {isHappy && <div style={{ position: 'absolute', top: '24px', left: '18px', width: '4px', height: '4px', background: '#fff', borderRadius: '50%' }} />}
        <div style={{
          position: 'absolute', top: isSad ? '32px' : '26px', right: '15px',
          width: '12px', height: isSad ? '8px' : '12px',
          background: '#3D2314', borderRadius: '50%', transition: 'all 0.4s',
        }} />
        {isHappy && <div style={{ position: 'absolute', top: '24px', right: '18px', width: '4px', height: '4px', background: '#fff', borderRadius: '50%' }} />}

        {/* Sad eyebrows */}
        {isSad && (
          <>
            <div style={{ position: 'absolute', top: '24px', left: '12px', width: '16px', height: '3px', background: '#3D2314', borderRadius: '3px', transform: 'rotate(15deg)' }} />
            <div style={{ position: 'absolute', top: '24px', right: '12px', width: '16px', height: '3px', background: '#3D2314', borderRadius: '3px', transform: 'rotate(-15deg)' }} />
          </>
        )}

        {/* Tear drop */}
        {isSad && (
          <motion.div
            animate={{ y: [0, 8, 0], opacity: [0.8, 0, 0.8] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            style={{
              position: 'absolute', top: '42px', left: '18px',
              width: '7px', height: '11px',
              background: 'linear-gradient(180deg, #87CEEB, #4FACDE)',
              borderRadius: '50% 50% 50% 50% / 0% 0% 100% 100%',
            }}
          />
        )}

        {/* Nose */}
        <div style={{ position: 'absolute', top: '42px', left: '50%', transform: 'translateX(-50%)', width: '18px', height: '12px', background: '#8B5E3C', borderRadius: '50%' }} />

        {/* Mouth */}
        <div style={{
          position: 'absolute', bottom: '14px', left: '50%',
          transform: `translateX(-50%) ${isHappy ? 'scaleY(1)' : 'scaleY(-1)'}`,
          width: '24px', height: '11px',
          background: isHappy ? '#FF85A1' : '#A0522D',
          borderRadius: '0 0 12px 12px', transition: 'all 0.4s',
        }} />

        {/* Cheeks */}
        <div style={{ position: 'absolute', top: '42px', left: '5px', width: '18px', height: '11px', background: 'rgba(255,133,161,0.4)', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', top: '42px', right: '5px', width: '18px', height: '11px', background: 'rgba(255,133,161,0.4)', borderRadius: '50%' }} />
      </motion.div>
    </div>
  )
}

// 🐰 Partner bunny character
function BunnyCharacter({ mood }) {
  const isAngry = mood === 'angry'
  const isShy = mood === 'shy'
  const isHappy = mood === 'happy'

  return (
    <div style={{ position: 'relative', width: '100px', height: '155px', flexShrink: 0 }}>
      {/* Happy sparkles */}
      {isHappy && [0,1].map(i => (
        <motion.span key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5], x: (i === 0 ? -20 : 20) }}
          transition={{ delay: i * 0.4, duration: 1.2, repeat: Infinity }}
          style={{ position: 'absolute', top: '10px', left: '50%', fontSize: '1rem' }}
        >✨</motion.span>
      ))}

      {/* Body */}
      <motion.div
        animate={isShy ? { x: [0, 3, 0] } : isHappy ? { rotate: [3, -3, 3] } : {}}
        transition={{ duration: 1.3, repeat: Infinity }}
        style={{
          position: 'absolute', bottom: '10px', left: '50%',
          transform: 'translateX(-50%)',
          width: '65px', height: '78px',
          background: '#F0E6FF',
          borderRadius: '32px 32px 26px 26px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        }}
      >
        {/* Tummy */}
        <div style={{ position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)', width: '36px', height: '34px', background: '#FFF0F5', borderRadius: '50%' }} />
        {/* Arms */}
        <motion.div
          animate={isShy ? { rotate: [60, 70, 60] } : isHappy ? { rotate: [25, 35, 25] } : { rotate: [5, 8, 5] }}
          transition={{ duration: 1.3, repeat: Infinity }}
          style={{ position: 'absolute', top: '18px', left: '-20px', width: '24px', height: '11px', background: '#F0E6FF', borderRadius: '6px', transformOrigin: 'right center' }}
        />
        <motion.div
          animate={isShy ? { rotate: [-60, -70, -60] } : isHappy ? { rotate: [-25, -35, -25] } : { rotate: [-5, -8, -5] }}
          transition={{ duration: 1.3, repeat: Infinity }}
          style={{ position: 'absolute', top: '18px', right: '-20px', width: '24px', height: '11px', background: '#F0E6FF', borderRadius: '6px', transformOrigin: 'left center' }}
        />
        {/* Shy hands covering face */}
        {isShy && (
          <>
            <div style={{ position: 'absolute', top: '-30px', left: '-22px', fontSize: '1rem' }}>🤭</div>
          </>
        )}
      </motion.div>

      {/* Head */}
      <motion.div
        animate={isAngry ? { rotate: [-5, 5, -5] } : isHappy ? { y: [-2, 2, -2] } : {}}
        transition={{ duration: 1.2, repeat: Infinity }}
        style={{
          position: 'absolute', top: '0', left: '50%',
          transform: 'translateX(-50%)',
          width: '74px', height: '72px',
          background: '#F0E6FF', borderRadius: '50%',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          zIndex: 2,
        }}
      >
        {/* Long ears */}
        <div style={{ position: 'absolute', top: '-34px', left: '12px', width: '18px', height: '38px', background: '#F0E6FF', borderRadius: '10px 10px 0 0', transform: 'rotate(-8deg)' }} />
        <div style={{ position: 'absolute', top: '-32px', left: '15px', width: '10px', height: '28px', background: '#FFCCE0', borderRadius: '8px 8px 0 0', transform: 'rotate(-8deg)' }} />
        <div style={{ position: 'absolute', top: '-34px', right: '12px', width: '18px', height: '38px', background: '#F0E6FF', borderRadius: '10px 10px 0 0', transform: 'rotate(8deg)' }} />
        <div style={{ position: 'absolute', top: '-32px', right: '15px', width: '10px', height: '28px', background: '#FFCCE0', borderRadius: '8px 8px 0 0', transform: 'rotate(8deg)' }} />

        {/* Eyes */}
        <div style={{
          position: 'absolute', top: isAngry ? '28px' : '24px', left: '13px',
          width: '11px', height: isAngry ? '7px' : '11px',
          background: '#4A2545', borderRadius: '50%', transition: 'all 0.4s',
        }} />
        {isHappy && <div style={{ position: 'absolute', top: '22px', left: '16px', width: '3px', height: '3px', background: '#fff', borderRadius: '50%' }} />}
        <div style={{
          position: 'absolute', top: isAngry ? '28px' : '24px', right: '13px',
          width: '11px', height: isAngry ? '7px' : '11px',
          background: '#4A2545', borderRadius: '50%', transition: 'all 0.4s',
        }} />
        {isHappy && <div style={{ position: 'absolute', top: '22px', right: '16px', width: '3px', height: '3px', background: '#fff', borderRadius: '50%' }} />}

        {/* Angry eyebrows */}
        {isAngry && (
          <>
            <div style={{ position: 'absolute', top: '20px', left: '10px', width: '16px', height: '3px', background: '#4A2545', borderRadius: '3px', transform: 'rotate(-15deg)' }} />
            <div style={{ position: 'absolute', top: '20px', right: '10px', width: '16px', height: '3px', background: '#4A2545', borderRadius: '3px', transform: 'rotate(15deg)' }} />
          </>
        )}

        {/* Nose */}
        <div style={{ position: 'absolute', top: '39px', left: '50%', transform: 'translateX(-50%)', width: '10px', height: '7px', background: '#FFAAC0', borderRadius: '50%' }} />

        {/* Mouth */}
        <div style={{
          position: 'absolute', bottom: '13px', left: '50%',
          transform: `translateX(-50%) ${isHappy || isShy ? 'scaleY(1)' : 'scaleY(-1)'}`,
          width: '20px', height: '9px',
          background: isHappy ? '#FF85A1' : '#CC8899',
          borderRadius: '0 0 10px 10px', transition: 'all 0.4s',
        }} />

        {/* Cheeks */}
        <div style={{ position: 'absolute', top: '40px', left: '4px', width: '16px', height: '10px', background: 'rgba(255,133,161,0.4)', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', top: '40px', right: '4px', width: '16px', height: '10px', background: 'rgba(255,133,161,0.4)', borderRadius: '50%' }} />
      </motion.div>
    </div>
  )
}

// Scene stages
const SCENES = [
  {
    id: 'sad',
    bearMood: 'sad',
    bunnyMood: 'angry',
    bearSpeech: 'Aku minta maaf... 😢',
    bunnySpeech: 'Hmph! 😤',
    bg: 'linear-gradient(135deg, #E8E0FF 0%, #FFE0EE 100%)',
    label: '😔 Awal...',
  },
  {
    id: 'offering',
    bearMood: 'offering',
    bunnyMood: 'shy',
    bearSpeech: 'Ini buat kamu 🌸',
    bunnySpeech: 'Eh... 🥺',
    bg: 'linear-gradient(135deg, #FFE4EF 0%, #EDE0FF 100%)',
    label: '🌸 Minta maaf...',
  },
  {
    id: 'happy',
    bearMood: 'happy',
    bunnyMood: 'happy',
    bearSpeech: 'Aku sayang kamu! ❤️',
    bunnySpeech: 'Aku juga! 💕',
    bg: 'linear-gradient(135deg, #FFD6E8 0%, #D6EAFF 100%)',
    label: '🎉 Baikan!',
  },
]

export default function CartoonSection() {
  const [sceneIdx, setSceneIdx] = useState(0)
  const [auto, setAuto] = useState(true)
  const scene = SCENES[sceneIdx]

  useEffect(() => {
    if (!auto) return
    const t = setTimeout(() => {
      setSceneIdx(i => (i + 1) % SCENES.length)
    }, 3200)
    return () => clearTimeout(t)
  }, [sceneIdx, auto])

  return (
    <section style={{
      padding: 'clamp(3rem, 6vw, 5rem) 1.5rem',
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      position: 'relative', zIndex: 1,
    }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ textAlign: 'center', marginBottom: '2rem', zIndex: 1 }}
      >
        <h2 style={{
          fontFamily: "'Dancing Script', cursive",
          fontSize: 'clamp(1.8rem, 5vw, 2.8rem)',
          background: 'linear-gradient(135deg, #C2185B, #7B1FA2)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          marginBottom: '0.4rem',
        }}>Cerita Kita 🐻🐰</h2>
        <p style={{ color: 'var(--text-light)', fontFamily: "'Quicksand', sans-serif", fontSize: '0.95rem' }}>
          Klik untuk lanjut ceritanya~
        </p>
      </motion.div>

      {/* Main scene card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        onClick={() => { setAuto(false); setSceneIdx(i => (i + 1) % SCENES.length) }}
        style={{
          maxWidth: '520px', width: '100%', zIndex: 1, cursor: 'pointer',
        }}
      >
        {/* Scene box */}
        <AnimatePresence mode="wait">
          <motion.div
            key={scene.id}
            initial={{ opacity: 0, scale: 0.93, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.93, y: -20 }}
            transition={{ duration: 0.45 }}
            style={{
              background: scene.bg,
              borderRadius: '28px',
              padding: '2.5rem 1.5rem 2rem',
              boxShadow: '0 20px 60px rgba(199,130,200,0.2)',
              border: '1.5px solid rgba(255,179,198,0.35)',
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.2rem',
              position: 'relative', overflow: 'hidden',
              minHeight: '340px',
            }}
          >
            {/* Top shimmer bar */}
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0, height: '4px',
              background: 'linear-gradient(90deg, #FF85A1, #C9B1FF, #FF85A1)',
              backgroundSize: '200% 100%',
              animation: 'shimmer 3s linear infinite',
            }} />

            {/* Stars bg decoration */}
            {['10%:15%','85%:20%','20%:80%','80%:75%','50%:10%'].map((p, i) => (
              <span key={i} style={{
                position: 'absolute',
                top: p.split(':')[1], left: p.split(':')[0],
                fontSize: '1rem', opacity: 0.18,
                animation: `sparkle ${2 + i * 0.5}s ${i * 0.3}s ease-in-out infinite`,
              }}>{'✨⭐🌸💕❤️'[i]}</span>
            ))}

            {/* Ground / floor */}
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0, height: '60px',
              background: 'rgba(255,220,235,0.3)',
              borderRadius: '0 0 28px 28px',
            }} />
            {/* Grass dots */}
            {[15, 30, 50, 70, 85].map(x => (
              <div key={x} style={{
                position: 'absolute', bottom: '55px', left: `${x}%`,
                fontSize: '1.1rem', opacity: 0.5,
              }}>🌿</div>
            ))}

            {/* Characters row */}
            <div style={{
              display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
              gap: 'clamp(1.5rem, 6vw, 4rem)',
              width: '100%', padding: '0 1rem', zIndex: 2,
            }}>
              {/* Bear with speech bubble */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                <motion.div
                  key={scene.bearSpeech}
                  initial={{ opacity: 0, scale: 0.7, y: 8 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  style={{
                    background: 'rgba(255,255,255,0.9)',
                    borderRadius: '14px',
                    padding: '0.5rem 0.75rem',
                    fontSize: '0.78rem',
                    fontFamily: "'Quicksand', sans-serif",
                    fontWeight: 700,
                    color: '#7C4B7E',
                    boxShadow: '0 3px 12px rgba(199,130,200,0.2)',
                    maxWidth: '120px',
                    textAlign: 'center',
                    position: 'relative',
                  }}
                >
                  {scene.bearSpeech}
                  <div style={{ position: 'absolute', bottom: '-7px', left: '50%', transform: 'translateX(-50%)', width: 0, height: 0, borderLeft: '7px solid transparent', borderRight: '7px solid transparent', borderTop: '7px solid rgba(255,255,255,0.9)' }} />
                </motion.div>
                <BearCharacter mood={scene.bearMood} />
                <p style={{ fontSize: '0.72rem', color: 'var(--text-light)', fontFamily: "'Quicksand', sans-serif", fontWeight: 600 }}>Aku</p>
              </div>

              {/* Bunny with speech bubble */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                <motion.div
                  key={scene.bunnySpeech}
                  initial={{ opacity: 0, scale: 0.7, y: 8 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                  style={{
                    background: 'rgba(255,255,255,0.9)',
                    borderRadius: '14px',
                    padding: '0.5rem 0.75rem',
                    fontSize: '0.78rem',
                    fontFamily: "'Quicksand', sans-serif",
                    fontWeight: 700,
                    color: '#7C4B7E',
                    boxShadow: '0 3px 12px rgba(199,130,200,0.2)',
                    maxWidth: '110px',
                    textAlign: 'center',
                    position: 'relative',
                  }}
                >
                  {scene.bunnySpeech}
                  <div style={{ position: 'absolute', bottom: '-7px', left: '50%', transform: 'translateX(-50%)', width: 0, height: 0, borderLeft: '7px solid transparent', borderRight: '7px solid transparent', borderTop: '7px solid rgba(255,255,255,0.9)' }} />
                </motion.div>
                <BunnyCharacter mood={scene.bunnyMood} />
                <p style={{ fontSize: '0.72rem', color: 'var(--text-light)', fontFamily: "'Quicksand', sans-serif", fontWeight: 600 }}>Kamu</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Scene selector dots */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.6rem', marginTop: '1.2rem' }}>
          {SCENES.map((s, i) => (
            <motion.button
              key={s.id}
              onClick={e => { e.stopPropagation(); setAuto(false); setSceneIdx(i) }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              style={{
                width: sceneIdx === i ? '28px' : '10px',
                height: '10px',
                borderRadius: '5px',
                background: sceneIdx === i ? 'linear-gradient(90deg, #FF85A1, #C9B1FF)' : 'rgba(201,177,255,0.4)',
                border: 'none', cursor: 'pointer',
                transition: 'all 0.3s ease',
                padding: 0,
              }}
            />
          ))}
        </div>

        {/* Scene labels */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '0.7rem', flexWrap: 'wrap' }}>
          {SCENES.map((s, i) => (
            <span key={s.id} style={{
              fontSize: '0.78rem',
              fontFamily: "'Quicksand', sans-serif",
              fontWeight: sceneIdx === i ? 700 : 500,
              color: sceneIdx === i ? 'var(--pink-deep)' : 'var(--text-light)',
              transition: 'all 0.3s',
            }}>
              {s.label}{i < SCENES.length - 1 ? ' →' : ''}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  )
}