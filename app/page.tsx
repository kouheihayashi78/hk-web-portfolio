'use client'

import { motion } from 'framer-motion'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

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
        <h1 className='mt-10 text-4xl font-bold'>メインの内容</h1>
      </main>
      <Footer />
    </motion.div>
  )
}
