'use client'

import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'

export default function ContactSection() {
  const email = 'kouhei.basketball7.8@gmail.com'

  return (
    <section id="contact" className="relative overflow-hidden bg-white py-24 sm:py-32">
      {/* Decorative blurred circles - scattered small dots */}
      <div className="pointer-events-none absolute left-[8%] top-[15%] h-20 w-20 rounded-full bg-green-300 opacity-10 blur-2xl" />
      <div className="pointer-events-none absolute left-[4%] top-[58%] h-24 w-24 rounded-full bg-blue-300 opacity-10 blur-2xl" />
      <div className="pointer-events-none absolute bottom-[25%] left-[13%] h-16 w-16 rounded-full bg-teal-300 opacity-10 blur-2xl" />

      <div className="pointer-events-none absolute right-[9%] top-[20%] h-24 w-24 rounded-full bg-teal-300 opacity-10 blur-2xl" />
      <div className="pointer-events-none absolute right-[6%] top-[65%] h-16 w-16 rounded-full bg-green-300 opacity-10 blur-2xl" />
      <div className="pointer-events-none absolute bottom-[18%] right-[10%] h-20 w-20 rounded-full bg-blue-300 opacity-10 blur-2xl" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mx-auto flex max-w-2xl flex-col items-center justify-center text-center"
        >
          <h2 className="mb-6 text-sm font-semibold uppercase tracking-widest text-teal-600">
            Contact
          </h2>
          <p className="mb-8 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            お気軽にご連絡ください
          </p>
          <p className="mb-12 text-lg leading-relaxed text-gray-600">
            プロジェクトのご相談やお仕事のご依頼など、お気軽にメッセージをお送りください。
          </p>

          {/* Email Contact Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full max-w-lg"
          >
            <div className="flex flex-col items-center rounded-3xl border border-gray-100 bg-white p-12 shadow-md transition-all duration-500 hover:border-teal-200 hover:shadow-xl">
              <div className="mb-6 inline-flex rounded-2xl bg-teal-50 p-5">
                <Mail className="h-10 w-10 text-teal-600" />
              </div>
              <h3 className="mb-4 text-xl font-semibold text-gray-900">下記アドレスへメールにてご連絡ください</h3>
              <a
                href={`mailto:${email}`}
                className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-xl"
              >
                <Mail className="h-5 w-5" />
                <span>{email}</span>
              </a>
              <p className="mt-6 text-sm text-gray-500">クリックするとメールアプリが起動します</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
