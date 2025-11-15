'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Works', href: '#works' },
    { name: 'Contact', href: '#contact' },
  ]

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false)
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 shadow-md backdrop-blur-sm'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <a href="#" className="flex items-center transition-opacity duration-500 hover:opacity-80">
            <Image
              src="/images/logo.jpeg"
              alt="HK Logo"
              width={48}
              height={48}
              className="h-12 w-12 rounded-full object-cover"
            />
          </a>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="hidden items-center gap-8 md:flex"
        >
          {navItems.map((item, index) => (
            <li key={item.name}>
              <motion.a
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="group relative text-sm font-medium text-gray-600 transition-colors duration-500 hover:text-teal-600"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-teal-500 to-cyan-500 transition-all duration-500 group-hover:w-full" />
              </motion.a>
            </li>
          ))}
        </motion.ul>

        {/* Mobile Menu Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex items-center justify-center text-gray-600 transition-colors duration-300 hover:text-teal-600 md:hidden"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </motion.button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 top-[72px] z-40 bg-black/20 backdrop-blur-sm md:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="fixed right-0 top-[72px] z-50 flex h-[calc(100vh-72px)] w-64 flex-col bg-white shadow-2xl md:hidden"
            >
              <nav className="flex flex-1 flex-col justify-between p-6">
                <ul className="space-y-6">
                  {navItems.map((item, index) => (
                    <motion.li
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <button
                        onClick={() => handleNavClick(item.href)}
                        className="block w-full text-left text-lg font-medium text-gray-700 transition-colors duration-300 hover:text-teal-600"
                      >
                        {item.name}
                      </button>
                    </motion.li>
                  ))}
                </ul>

                {/* Floating house image at bottom */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex justify-center pb-8"
                >
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                      rotate: [-2, 2, -2],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    <Image
                      src="/images/house.svg"
                      alt="House decoration"
                      width={100}
                      height={100}
                      className="opacity-70"
                    />
                  </motion.div>
                </motion.div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
