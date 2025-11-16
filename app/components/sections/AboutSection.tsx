'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function AboutSection() {
  const [isHovering, setIsHovering] = useState(false)

  return (
    <section id="about" className="relative overflow-hidden bg-white py-24 sm:py-32">
      {/* Decorative blurred circles - scattered small dots */}
      <div className="pointer-events-none absolute top-[20%] left-[6%] h-20 w-20 rounded-full bg-green-300 opacity-10" />
      <div className="pointer-events-none absolute top-[70%] left-[10%] h-16 w-16 rounded-full bg-teal-300 opacity-10" />
      <div className="pointer-events-none absolute bottom-[30%] left-[3%] h-24 w-24 rounded-full bg-blue-300 opacity-10" />

      <div className="pointer-events-none absolute top-[30%] right-[8%] h-24 w-24 rounded-full bg-teal-300 opacity-10" />
      <div className="pointer-events-none absolute top-[75%] right-[5%] h-20 w-20 rounded-full bg-green-300 opacity-10" />
      <div className="pointer-events-none absolute right-[15%] bottom-[20%] h-16 w-16 rounded-full bg-blue-300 opacity-10" />

      <div className="relative z-10 m-auto flex w-full max-w-7xl flex-col items-center justify-center px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 flex max-w-2xl flex-col items-center justify-center text-center"
        >
          <h2 className="mb-6 text-sm font-semibold uppercase tracking-widest text-teal-600">
            About
          </h2>
          <p className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            はじめまして
          </p>
        </motion.div>

        {/* Content: Text + Photo */}
        <div className="flex w-full max-w-6xl flex-col items-center gap-12 md:flex-row md:items-start">
          {/* Left Side - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-1 flex-col"
          >
            <p className="text-lg leading-relaxed text-gray-600">
              一般のプログラマーです、必要としてくださる方のため全力を注ぎます。
              <br />
              <br />
              AIをうまく用いて、スピード感を持ちながら、なるべくモダンな技術でデザインを洗練された形に変えていきます。
              <br />
              <br />
              Laravelを使った開発が得意ですが、それ以外も色々使えます。<br />
              最近はもっぱらNext.jsで完結させることが多いです。
              <br />
              <br />
              昨日の自分よりも少しでも成長することを意識し、日々学習を継続しており、特にAWS周りの学習に力を入れております。
            </p>
          </motion.div>

          {/* Right Side - Photo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full flex-1 md:max-w-md"
          >
            <div className="relative aspect-square overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="/images/kh_1.jpeg"
                alt="KH"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                priority
              />
            </div>
          </motion.div>
        </div>

        {/* More Details Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16"
        >
          <Link
            href="/about"
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full border-2 border-teal-300 bg-white px-8 py-4 text-base font-semibold text-gray-700 shadow-md transition-all duration-500 hover:border-teal-400 hover:bg-teal-50"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {/* Progress bar animation */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: isHovering ? 1 : 0 }}
              transition={{ duration: 1, ease: 'easeInOut' }}
              className="absolute bottom-0 left-0 h-1 w-full origin-left bg-gradient-to-r from-teal-500 to-cyan-500"
            />
            <span>詳しくみる</span>
            <ArrowRight className="h-5 w-5 transition-transform duration-500 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
