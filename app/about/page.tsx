'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Briefcase, GraduationCap } from 'lucide-react'
import { strengths, experiences } from '@/app/data/about'

export default function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="min-h-screen bg-white"
    >
      {/* Back Button */}
      <div className="fixed left-6 top-24 z-50">
        <Link
          href="/"
          className="flex items-center gap-2 text-gray-600 transition-colors duration-300 hover:text-teal-600"
        >
          <ArrowLeft className="h-5 w-5" />
          <span className="text-sm font-medium">戻る</span>
        </Link>
      </div>

      {/* Hero Section with Image */}
      <section className="relative flex min-h-screen items-center overflow-hidden bg-white px-6 py-32 lg:px-8">
        {/* Decorative circles */}
        <div className="pointer-events-none absolute left-[5%] top-[15%] h-24 w-24 rounded-full bg-orange-300 opacity-10 blur-2xl" />
        <div className="pointer-events-none absolute right-[10%] top-[25%] h-20 w-20 rounded-full bg-blue-300 opacity-10 blur-2xl" />
        <div className="pointer-events-none absolute bottom-[20%] left-[8%] h-16 w-16 rounded-full bg-green-300 opacity-10 blur-2xl" />

        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center gap-16 md:flex-row">
          {/* Left Side - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex w-full flex-1 flex-col"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mb-4 text-sm font-semibold uppercase tracking-widest text-teal-600"
            >
              Profile
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="mb-8 text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl"
            >
              HK
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="space-y-6 text-lg leading-relaxed text-gray-700"
            >
              <p>
                はじめまして、HKと申します。
                <br />
                Web開発を通じて、あなたの想いをカタチにするお手伝いをしています。
              </p>

              <p>
                私は「丁寧さ」を大切にしています。
                <br />
                このAI時代において、AIが得意な部分はもう任せてしまい、
                <br />
                人間にしかない直感や経験、コミュニケーションによって
                <br />
                スピード感と丁寧さを両立させ、温かみのあるプロダクトを作ります！
              </p>

              <p>
                技術は日々進化していますが、それを使うのはあくまで私たち人間です。
                <br />
                あなたの想いを実現するために、様々な技術を駆使して全力でサポートさせていただきます。
              </p>
            </motion.div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-full flex-1"
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="/images/kh_2.JPG"
                alt="KH"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Personality & Strengths Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-orange-50/30 px-6 py-24 sm:py-32">
        {/* Decorative circles */}
        <div className="pointer-events-none absolute right-[5%] top-[20%] h-24 w-24 rounded-full bg-blue-300 opacity-10 blur-2xl" />
        <div className="pointer-events-none absolute bottom-[30%] left-[10%] h-20 w-20 rounded-full bg-green-300 opacity-10 blur-2xl" />

        <div className="relative z-10 mx-auto w-full max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20 text-center"
          >
            <h2 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              私の性格と強み
            </h2>
            <p className="text-lg text-gray-600">
              誠実に、丁寧に、心を込める。
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {strengths.map((strength, index) => (
              <motion.div
                key={strength.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group flex flex-col items-center justify-center rounded-3xl border border-teal-100 bg-white p-8 text-center shadow-md transition-all duration-500 hover:border-teal-300 hover:shadow-xl"
              >
                <div className="mb-6 inline-flex rounded-2xl bg-teal-50 p-4">
                  <strength.icon className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="mb-4 text-xl font-bold text-gray-900">{strength.title}</h3>
                <p className="leading-relaxed text-gray-600">{strength.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="px-6 py-24 sm:py-32">
        <div className="mx-auto w-full max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20 text-center"
          >
            <h2 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              これまでの歩み
            </h2>
            <p className="text-lg text-gray-600">職歴と学歴をご紹介します。</p>
          </motion.div>

          <div className="relative flex flex-col items-center">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 h-full w-[2px] bg-gradient-to-b from-teal-500 via-cyan-400 to-transparent md:left-1/2" />

            {experiences.map((exp, index) => {
              const Icon = exp.type === 'work' ? Briefcase : GraduationCap
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative mb-16 flex w-full items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 flex h-5 w-5 items-center justify-center rounded-full bg-teal-500 shadow-lg ring-4 ring-white md:left-1/2 md:-translate-x-1/2">
                    <div className="h-2 w-2 rounded-full bg-white" />
                  </div>

                  {/* Content */}
                  <div className={`ml-20 w-full md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="group flex flex-col rounded-3xl border border-gray-100 bg-white p-8 shadow-md transition-all duration-500 hover:border-teal-200 hover:shadow-xl">
                      <div className="mb-6 flex items-center gap-3">
                        <div className="rounded-2xl bg-teal-50 p-3">
                          <Icon className="h-6 w-6 text-teal-600" />
                        </div>
                        <span className="text-sm font-medium text-gray-500">{exp.period}</span>
                      </div>

                      <h3 className="mb-2 text-xl font-bold text-gray-900">{exp.title}</h3>
                      <p className="mb-4 text-sm font-medium text-teal-600">{exp.company}</p>
                      <p className="text-sm leading-relaxed text-gray-600">{exp.description}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Personal Message Section */}
      <section className="px-6 py-24 sm:py-32">
        <div className="mx-auto w-full max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="from-teal-50/50 to-white p-12 text-center"
          >
            <h2 className="mb-8 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
              最後に
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-gray-700">
              <p>
                私にとって、Web開発は単なる技術ではありません。
                <br />
                それは、人と人をつなぎ、想いを届ける手段だと考えています。
              </p>
              <p>
                あなたのビジョンを実現するために、全力でサポートさせていただきます。
                <br />
                一緒に、素敵なプロダクトを創りましょう。
              </p>
              <p className="pt-4 text-center text-xl font-semibold text-teal-600">
                お気軽にご相談ください。お待ちしています。
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="px-6 py-16">
        <div className="mx-auto w-full max-w-4xl text-center">
          <Link
            href="/#contact"
            className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 px-10 py-5 text-lg font-semibold text-white shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-xl"
          >
            お問い合わせ
          </Link>
        </div>
      </section>
    </motion.div>
  )
}
