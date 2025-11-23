'use client'
import { motion } from 'framer-motion'
import { SiGithub } from 'react-icons/si'
import { projects } from '@/app/data/projects'

export default function WorksSection() {
  return (
    <section id="works" className="relative overflow-hidden bg-white py-24 sm:py-32">
      {/* Decorative blurred circles - scattered small dots */}
      <div className="pointer-events-none absolute top-[18%] left-[5%] h-24 w-24 rounded-full bg-teal-300 opacity-10" />
      <div className="pointer-events-none absolute top-[55%] left-[10%] h-16 w-16 rounded-full bg-blue-300 opacity-10" />
      <div className="pointer-events-none absolute bottom-[28%] left-[6%] h-20 w-20 rounded-full bg-green-300 opacity-10" />

      <div className="pointer-events-none absolute top-[22%] right-[8%] h-20 w-20 rounded-full bg-green-300 opacity-10" />
      <div className="pointer-events-none absolute top-[68%] right-[12%] h-24 w-24 rounded-full bg-teal-300 opacity-10" />
      <div className="pointer-events-none absolute right-[5%] bottom-[18%] h-16 w-16 rounded-full bg-blue-300 opacity-10" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mx-auto flex max-w-2xl flex-col items-center justify-center text-center"
        >
          <h2 className="mb-6 text-sm font-semibold tracking-widest text-teal-600 uppercase">
            Works
          </h2>
          <p className="mb-8 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            制作実績
          </p>
          <p className="text-lg leading-relaxed text-gray-600">
            これまでに手がけたプロジェクトの一部をご紹介します。
          </p>
        </motion.div>

        <div className="mx-auto mt-20 grid w-full max-w-6xl gap-10 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group flex flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-md transition-all duration-500 hover:border-teal-200 hover:shadow-xl"
            >
              <div className="to-peach-100 relative aspect-video overflow-hidden bg-gradient-to-br">
                <div className="flex h-full items-center justify-center text-gray-400">
                  <span className="text-sm">プロジェクト画像</span>
                </div>
              </div>

              <div className="flex flex-col p-8">
                <h3 className="mb-4 text-2xl font-bold text-gray-900">{project.title}</h3>
                <p className="mb-6 text-sm leading-relaxed text-gray-600">{project.description}</p>

                <div className="mb-8 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-teal-50 px-4 py-2 text-xs font-medium text-teal-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-6">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-gray-600 transition-colors duration-500 hover:text-teal-600"
                  >
                    <SiGithub className="h-4 w-4" />
                    コード
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-gray-600 transition-colors duration-500 hover:text-teal-600"
                  >
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
