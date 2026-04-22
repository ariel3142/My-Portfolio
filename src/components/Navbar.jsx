import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { HiSun, HiMoon } from 'react-icons/hi2'
import { useTheme } from '../context/ThemeContext'
import profileImg from "../assets/profile.jpg";

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const { isDark, toggle } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      // Update active section
      const sections = navLinks.map(l => l.href.slice(1))
      const current = sections.find(id => {
        const el = document.getElementById(id)
        if (!el) return false
        const rect = el.getBoundingClientRect()
        return rect.top <= 100 && rect.bottom >= 100
      })
      if (current) setActiveSection(current)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
          ${scrolled
            ? isDark
              ? 'bg-navy-950/80 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20'
              : 'bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-lg shadow-gray-200/20'
            : 'bg-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={e => { e.preventDefault(); handleNavClick('#home') }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 group"
          >
            <div className="w-9 h-9 rounded-xl overflow-hidden shadow-cyan border border-cyan-400/30">

              <img
                src={profileImg}
                alt="Profile"
                className="w-full h-full object-cover"
              />

            </div>
            <span className={`font-syne font-bold text-lg transition-colors
              ${isDark ? 'text-white' : 'text-gray-900'}`}>
            <span className="gradient-text">AP.</span>
            </span>
          </motion.a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={e => { e.preventDefault(); handleNavClick(link.href) }}
                whileHover={{ y: -1 }}
                className={`relative px-4 py-2 rounded-lg font-dm text-sm font-medium transition-all duration-200
                  ${activeSection === link.href.slice(1)
                    ? isDark ? 'text-cyan-400' : 'text-cyan-600'
                    : isDark ? 'text-white/60 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                  }`}
              >
                {activeSection === link.href.slice(1) && (
                  <motion.span
                    layoutId="activeNav"
                    className={`absolute inset-0 rounded-lg ${isDark ? 'bg-cyan-400/10' : 'bg-cyan-50'}`}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </motion.a>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Theme toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggle}
              className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors
                ${isDark ? 'bg-white/5 hover:bg-white/10 text-yellow-300' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'}`}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={isDark ? 'moon' : 'sun'}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isDark ? <HiSun size={18} /> : <HiMoon size={18} />}
                </motion.span>
              </AnimatePresence>
            </motion.button>

            {/* CTA */}
            <motion.a
              href="#contact"
              onClick={e => { e.preventDefault(); handleNavClick('#contact') }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:inline-flex btn-primary text-xs px-5 py-2.5"
            >
              Hire Me
            </motion.a>

            {/* Mobile menu btn */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`md:hidden w-9 h-9 rounded-xl flex items-center justify-center
                ${isDark ? 'bg-white/5 text-white' : 'bg-gray-100 text-gray-700'}`}
            >
              {mobileOpen ? <HiX size={20} /> : <HiMenuAlt3 size={20} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className={`fixed top-[73px] left-0 right-0 z-40 mx-4 rounded-2xl p-4
              ${isDark ? 'bg-navy-800/95 backdrop-blur-xl border border-white/10' : 'bg-white border border-gray-200 shadow-xl'}`}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={e => { e.preventDefault(); handleNavClick(link.href) }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className={`flex items-center justify-between px-4 py-3 rounded-xl mb-1 font-dm font-medium text-sm transition-colors
                  ${activeSection === link.href.slice(1)
                    ? isDark ? 'bg-cyan-400/10 text-cyan-400' : 'bg-cyan-50 text-cyan-600'
                    : isDark ? 'text-white/70 hover:text-white hover:bg-white/5' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
              >
                {link.label}
                {activeSection === link.href.slice(1) && (
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                )}
              </motion.a>
            ))}
            <div className="mt-3 pt-3 border-t border-white/10">
              <a
                href="#contact"
                onClick={e => { e.preventDefault(); handleNavClick('#contact') }}
                className="btn-primary w-full justify-center"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}