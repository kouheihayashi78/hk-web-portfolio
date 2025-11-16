'use client'

import { motion } from 'framer-motion'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import HeroSection from './components/sections/HeroSection'
import AboutSection from './components/sections/AboutSection'

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="bg-white text-gray-900"
    >
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
      </main>
      <Footer />
    </motion.div>
  )
}
