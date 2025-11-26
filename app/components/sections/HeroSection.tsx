'use client'

import { motion } from 'framer-motion'
import FloatingCube from '../ui/FloatingCube'

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-start overflow-hidden bg-white pt-32 md:items-center md:pt-20">
      {/* Floating 3D Cube */}
      <FloatingCube />

      {/* Decorative circles - scattered small dots */}
      <div className="pointer-events-none absolute left-[5%] top-[15%] h-24 w-24 rounded-full bg-teal-300 opacity-10 blur-2xl" />
      <div className="pointer-events-none absolute left-[15%] top-[60%] h-20 w-20 rounded-full bg-blue-300 opacity-10 blur-2xl" />
      <div className="pointer-events-none absolute bottom-[25%] left-[8%] h-16 w-16 rounded-full bg-green-300 opacity-10 blur-2xl" />

      <div className="pointer-events-none absolute right-[10%] top-[25%] h-20 w-20 rounded-full bg-blue-300 opacity-10 blur-2xl" />
      <div className="pointer-events-none absolute right-[5%] top-[70%] h-24 w-24 rounded-full bg-teal-300 opacity-10 blur-2xl" />
      <div className="pointer-events-none absolute bottom-[15%] right-[12%] h-16 w-16 rounded-full bg-green-300 opacity-10 blur-2xl" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col-reverse items-center justify-between gap-12 px-6 md:flex-row md:items-start lg:px-8">
        {/* Left Side - Catch Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
          className="flex w-full flex-col items-center text-center md:w-auto md:items-start md:text-left"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
            className="mb-4 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl"
          >
            あなたの想いを
            <br />
            カタチにします。
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7, ease: 'easeOut' }}
            className="max-w-md text-base leading-relaxed text-gray-600 sm:text-lg"
          >
            心を込めた丁寧な開発で、
            <br />
            あなたのビジョンを実現します。
          </motion.p>
        </motion.div>

        {/* Right Side - Name & Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2, ease: 'easeOut' }}
          className="flex w-full flex-col items-center text-center md:w-auto md:items-end md:text-right"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4, ease: 'easeOut' }}
            className="mb-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl"
          >
            HK
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.6, ease: 'easeOut' }}
            className="text-lg font-medium text-teal-600 sm:text-xl"
          >
            Full Stack Developer
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 1.8, ease: 'easeOut' }}
            className="mt-3 h-1 w-24 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500"
          />
        </motion.div>
      </div>
    </section>
  )
}
