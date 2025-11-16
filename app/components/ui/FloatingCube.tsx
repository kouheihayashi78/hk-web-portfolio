'use client'

import { motion } from 'framer-motion'

export default function FloatingCube() {
  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
      <motion.div
        className="perspective-1000"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.45 }}
        transition={{ duration: 2 }}
      >
        <motion.div
          className="relative"
          style={{ transformStyle: 'preserve-3d' }}
          animate={{
            rotateX: [0, 360],
            rotateY: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {/* Cube structure */}
          <div className="relative h-64 w-64" style={{ transformStyle: 'preserve-3d' }}>
            {/* Front face */}
            <div
              className="absolute h-64 w-64 border-2 border-teal-200/40 bg-gradient-to-br from-teal-100/20 to-cyan-100/20 backdrop-blur-sm"
              style={{
                transform: 'translateZ(128px)',
              }}
            >
              <div className="flex h-full w-full items-center justify-center text-6xl text-teal-300/40">
              </div>
            </div>

            {/* Back face */}
            <div
              className="absolute h-64 w-64 border-2 border-blue-200/40 bg-gradient-to-br from-blue-100/20 to-cyan-100/20 backdrop-blur-sm"
              style={{
                transform: 'translateZ(-128px) rotateY(180deg)',
              }}
            >
              <div className="flex h-full w-full items-center justify-center text-6xl text-blue-300/40">
              </div>
            </div>

            {/* Left face */}
            <div
              className="absolute h-64 w-64 border-2 border-green-200/40 bg-gradient-to-br from-green-100/20 to-teal-100/20 backdrop-blur-sm"
              style={{
                transform: 'rotateY(-90deg) translateZ(128px)',
              }}
            >
              <div className="flex h-full w-full items-center justify-center text-6xl text-green-300/40">
              </div>
            </div>

            {/* Right face */}
            <div
              className="absolute h-64 w-64 border-2 border-cyan-200/40 bg-gradient-to-br from-cyan-100/20 to-blue-100/20 backdrop-blur-sm"
              style={{
                transform: 'rotateY(90deg) translateZ(128px)',
              }}
            >
              <div className="flex h-full w-full items-center justify-center text-6xl text-cyan-300/40">
              </div>
            </div>

            {/* Top face */}
            <div
              className="absolute h-64 w-64 border-2 border-teal-200/40 bg-gradient-to-br from-teal-100/20 to-green-100/20 backdrop-blur-sm"
              style={{
                transform: 'rotateX(90deg) translateZ(128px)',
              }}
            >
              <div className="flex h-full w-full items-center justify-center text-6xl text-teal-300/40">
              </div>
            </div>

            {/* Bottom face */}
            <div
              className="absolute h-64 w-64 border-2 border-blue-200/40 bg-gradient-to-br from-blue-100/20 to-cyan-100/20 backdrop-blur-sm"
              style={{
                transform: 'rotateX(-90deg) translateZ(128px)',
              }}
            >
              <div className="flex h-full w-full items-center justify-center text-6xl text-blue-300/40">
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
