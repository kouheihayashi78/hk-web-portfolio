'use client'
import { motion } from 'framer-motion'
import { skillCategories } from '@/app/data/skills'

export default function SkillsSection() {
  return (
    <section id="skills" className="relative overflow-hidden bg-gradient-to-b from-white to-teal-50/30 py-24 sm:py-32">
      {/* Decorative blurred circles - scattered small dots */}
      <div className="pointer-events-none absolute left-[7%] top-[15%] h-20 w-20 rounded-full bg-blue-300 opacity-10 blur-2xl" />
      <div className="pointer-events-none absolute left-[4%] top-[65%] h-24 w-24 rounded-full bg-green-300 opacity-10 blur-2xl" />
      <div className="pointer-events-none absolute bottom-[25%] left-[12%] h-16 w-16 rounded-full bg-teal-300 opacity-10 blur-2xl" />

      <div className="pointer-events-none absolute right-[6%] top-[25%] h-16 w-16 rounded-full bg-green-300 opacity-10 blur-2xl" />
      <div className="pointer-events-none absolute right-[10%] top-[60%] h-20 w-20 rounded-full bg-teal-300 opacity-10 blur-2xl" />
      <div className="pointer-events-none absolute bottom-[20%] right-[4%] h-24 w-24 rounded-full bg-blue-300 opacity-10 blur-2xl" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-20 flex max-w-2xl flex-col items-center justify-center text-center"
        >
          <h2 className="mb-6 text-sm font-semibold uppercase tracking-widest text-teal-600">
            Skills
          </h2>
          <p className="mb-8 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            できること
          </p>
          <p className="text-lg leading-relaxed text-gray-600">
            常に新しい技術を学び、最新のソリューションを提供することを目指しています。
          </p>
        </motion.div>

        <div className="mx-auto flex w-full max-w-4xl flex-col gap-16">
          {skillCategories.map((category, index) => {
            const CategoryIcon = category.icon
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex flex-col gap-8 md:flex-row md:items-start"
              >
                {/* Left Side - Icon */}
                <div className="flex shrink-0 items-center justify-center md:items-start">
                  <div className="rounded-2xl bg-teal-50 p-5">
                    <CategoryIcon className="h-10 w-10 text-teal-600" />
                  </div>
                </div>

                {/* Right Side - Content */}
                <div className="flex flex-1 flex-col">
                  <h3 className="mb-4 text-2xl font-bold text-gray-900">{category.title}</h3>
                  <p className="mb-6 leading-relaxed text-gray-600">{category.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-3">
                    {category.tags.map((tag) => {
                      const TagIcon = tag.icon
                      return (
                        <div
                          key={tag.name}
                          className="flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-4 py-2 transition-all duration-300 hover:border-teal-300 hover:bg-teal-50"
                        >
                          {TagIcon && <TagIcon className="h-4 w-4" style={{ color: tag.color }} />}
                          <span className="text-sm font-medium text-gray-700">{tag.name}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
