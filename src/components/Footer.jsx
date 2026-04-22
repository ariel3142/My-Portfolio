import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiArrowUp, FiInstagram } from 'react-icons/fi'
import { useTheme } from '../context/ThemeContext'
import { personalInfo } from '../data/portfolioData'
import profileImg from "../assets/profile.jpg";
import { FaWhatsapp } from "react-icons/fa";

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

const socials = [
  { icon: <FiGithub size={17} />, href: personalInfo.github, label: 'GitHub' },
  { icon: <FiLinkedin size={17} />, href: personalInfo.linkedin, label: 'LinkedIn' },
  { icon: <FiMail size={17} />, href: `mailto:${personalInfo.email}`, label: 'Email' },
  { icon: <FaWhatsapp size={17} />, href: personalInfo.whatsapp, label: 'WhatsApp' },
  { icon: <FiInstagram size={17} />, href: personalInfo.instagram, label: 'Instagram' },
]

export default function Footer() {
  const { isDark } = useTheme()

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className={`relative overflow-hidden border-t
      ${isDark ? 'bg-navy-950 border-white/5' : 'bg-slate-50 border-gray-200'}`}>

      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-16">
        <div className="grid md:grid-cols-3 gap-10 mb-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className={`font-syne font-bold text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}> Ariel Putra
              </span>
            </div>
            <p className={`font-dm text-sm leading-relaxed max-w-xs
              ${isDark ? 'text-white/40' : 'text-gray-500'}`}>
              Final Year Informatics Engineering Student building elegant web experiences with clean code.
            </p>
            <div className={`mt-4 flex items-center gap-2 text-xs font-mono ${isDark ? 'text-white/30' : 'text-gray-400'}`}>
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Available for work
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className={`font-syne font-bold text-sm mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={e => { e.preventDefault(); scrollTo(link.href) }}
                  className={`font-dm text-sm transition-colors hover:text-cyan-400
                    ${isDark ? 'text-white/50' : 'text-gray-500'}`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact info */}
          <div>
            <h4 className={`font-syne font-bold text-sm mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Get In Touch
            </h4>
            <div className="space-y-2 mb-5">
              <a
                href={`mailto:${personalInfo.email}`}
                className={`block font-dm text-sm transition-colors hover:text-cyan-400
                  ${isDark ? 'text-white/50' : 'text-gray-500'}`}
              >
                {personalInfo.email}
              </a>
              <div className={`font-dm text-sm ${isDark ? 'text-white/50' : 'text-gray-500'}`}>
                {personalInfo.location}
              </div>
            </div>
            <div className="flex gap-2">
              {socials.map((s, i) => (
                <motion.a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors
                    ${isDark
                      ? 'bg-white/5 border border-white/10 text-white/60 hover:border-cyan-400/30 hover:text-cyan-400'
                      : 'bg-white border border-gray-200 text-gray-500 hover:border-cyan-300 hover:text-cyan-600 shadow-sm'
                    }`}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className={`flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t
          ${isDark ? 'border-white/5' : 'border-gray-200'}`}>
          <div className={`font-dm text-xs ${isDark ? 'text-white/30' : 'text-gray-400'}`}>
            © {new Date().getFullYear()} Beltsazar Ariel Putra.
          </div>

          <div className="flex items-center gap-4">
            <span className={`font-mono text-xs ${isDark ? 'text-white/20' : 'text-gray-400'}`}>
              Informatics Engineering · 2025
            </span>

            {/* Back to top */}
            <motion.button
              onClick={scrollTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors
                ${isDark
                  ? 'bg-white/5 border border-white/10 text-white/40 hover:border-cyan-400/30 hover:text-cyan-400'
                  : 'bg-white border border-gray-200 text-gray-400 hover:text-cyan-600 shadow-sm'
                }`}
            >
              <FiArrowUp size={14} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  )
}