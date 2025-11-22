'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

export default function ScrollHelper() {
  const [showScrollDown, setShowScrollDown] = useState(true)
  const [showScrollUp, setShowScrollUp] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about')
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight

      // Hide scroll down banner after About section is visible
      if (aboutSection) {
        const aboutRect = aboutSection.getBoundingClientRect()
        const isAboutFullyVisible = aboutRect.top <= 0 && aboutRect.bottom >= windowHeight
        setShowScrollDown(!isAboutFullyVisible && scrollY < windowHeight)
        setShowScrollUp(isAboutFullyVisible || scrollY >= windowHeight)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about')
    aboutSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* Scroll Down Banner - Bottom right corner */}
      <AnimatePresence>
        {showScrollDown && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            onClick={scrollToAbout}
            className="fixed bottom-8 right-8 z-40 flex items-center gap-2 rounded-full bg-white/90 px-4 py-3 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl"
            aria-label="Scroll down"
          >
            <span className="text-sm font-medium text-gray-700">スクロールしてね</span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Image
                src="/images/darakeru.png"
                alt="Scroll indicator"
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
              />
            </motion.div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Floating Action Button - Scroll to top */}
      <AnimatePresence>
        {showScrollUp && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.3 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-40 flex items-center gap-2 rounded-full bg-white/90 px-4 py-3 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl"
            aria-label="Scroll to top"
          >
            <span className="text-sm font-medium text-gray-700">ページトップへ</span>
            <motion.div
              animate={{ y: [-2, 2, -2] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Image
                src="/images/arrow_up.png"
                alt="Scroll to top"
                width={48}
                height={48}
                className="h-12 w-12 object-contain"
              />
            </motion.div>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}
