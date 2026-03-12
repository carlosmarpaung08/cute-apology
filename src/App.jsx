import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PasscodeScreen from './components/PasscodeScreen'
import LandingPage from './components/LandingPage'
import ApologyLetter from './components/ApologyLetter'
import FunnyInteraction from './components/FunnyInteraction'
import CartoonSection from './components/CartoonSection'
import FinalMessage from './components/FinalMessage'
import FloatingHearts from './components/FloatingHearts'
import Confetti from './components/Confetti'

export default function App() {
  const [unlocked, setUnlocked] = useState(false)
  const [currentSection, setCurrentSection] = useState('landing')
  const [showConfetti, setShowConfetti] = useState(false)
  const [forgiven, setForgiven] = useState(false)

  const handleOpenLetter = () => {
    setCurrentSection('letter')
    setTimeout(() => {
      document.getElementById('letter-section')?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  const handleForgiven = () => {
    setForgiven(true)
    setShowConfetti(true)
    setCurrentSection('forgiven')
    setTimeout(() => setShowConfetti(false), 5000)
  }

  return (
    <AnimatePresence mode="wait">
      {!unlocked ? (
        <PasscodeScreen key="passcode" onUnlock={() => setUnlocked(true)} />
      ) : (
        <motion.div
          key="main"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          style={{ position: 'relative', minHeight: '100vh', background: 'linear-gradient(135deg, #FFF5E6 0%, #FFE4EF 50%, #EDE0FF 100%)' }}
        >
          <FloatingHearts />
          {showConfetti && <Confetti />}

          {/* Landing Section */}
          <LandingPage onOpenLetter={handleOpenLetter} revealed={currentSection !== 'landing'} />

          {/* Letter Section */}
          <AnimatePresence>
            {currentSection !== 'landing' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <div id="letter-section">
                  <ApologyLetter />
                </div>
                <FunnyInteraction onForgiven={handleForgiven} />
                <CartoonSection />
                {forgiven && <FinalMessage />}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
