import { motion } from 'framer-motion'
import { HiArrowDown, HiDownload } from 'react-icons/hi'
import { HiCodeBracket } from 'react-icons/hi2'
import { useEffect, useState } from 'react'
import { useTheme } from '../context/ThemeContext'
import profileImg from "../assets/profile.jpg";
import myCV from "../assets/My-CV.pdf";

const roles = ["Web Developer", "Software Engineer", "Photographer", "Full-Stack Dev", "Tech Enthusiast"]

function TypewriterText({ words }) {
  const [index, setIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[index]
    let timeout

    if (!deleting && displayed.length < word.length) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 80)
    } else if (!deleting && displayed.length === word.length) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setIndex((index + 1) % words.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, index, words])

  return (
    <span className="gradient-text">
      {displayed}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ repeat: Infinity, duration: 0.7 }}
        className="ml-0.5"
      >|</motion.span>
    </span>
  )
}

function FloatingOrb({ className, delay = 0 }) {
  return (
    <motion.div
      animate={{
        y: [0, -30, 0],
        x: [0, 15, 0],
        scale: [1, 1.05, 1],
      }}
      transition={{ duration: 8, repeat: Infinity, delay, ease: 'easeInOut' }}
      className={className}
    />
  )
}

export default function Hero() {
  const { isDark } = useTheme()

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } }
  }
  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  }

  return (
    <section id="home" className={`relative min-h-screen flex items-center overflow-hidden
      ${isDark ? 'bg-navy-950' : 'bg-slate-50'}`}>

      {/* Background elements */}
      <div className="absolute inset-0 grid-dots" />

      {/* Orbs */}
      <FloatingOrb
        className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full bg-cyan-500/10 blur-3xl"
        delay={0}
      />
      <FloatingOrb
        className="absolute bottom-1/3 left-1/4 w-96 h-96 rounded-full bg-purple-500/10 blur-3xl"
        delay={2}
      />
      <FloatingOrb
        className="absolute top-1/3 left-1/2 w-48 h-48 rounded-full bg-cyan-400/5 blur-2xl"
        delay={4}
      />

      {/* Code decorations */}
      <div className="absolute right-10 top-32 hidden lg:block opacity-20 font-mono text-xs text-cyan-400 leading-relaxed">
        <div>&lt;div className="developer"&gt;</div>
        <div className="pl-4">&lt;h1&gt;Hello World&lt;/h1&gt;</div>
        <div className="pl-4">&lt;p&gt;Let's build something&lt;/p&gt;</div>
        <div>&lt;/div&gt;</div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pt-28 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left content */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="order-2 lg:order-1"
          >
            {/* Badge */}
            <motion.div variants={item} className="mb-6">
              <span className="section-label">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Available for Work
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.div variants={item} className="mb-3">
              <h1 className={`font-syne font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-none
                ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Hi, I'm
              </h1>
            </motion.div>

            <motion.div variants={item} className="mb-4">
              <h1 className="font-syne font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-none gradient-text">
                Ariel Putra
              </h1>
            </motion.div>

            {/* Roles typewriter */}
            <motion.div variants={item} className="mb-6">
              <div className={`font-syne text-xl md:text-2xl lg:text-3xl font-medium
                ${isDark ? 'text-white/50' : 'text-gray-500'}`}>
                <TypewriterText words={roles} />
              </div>
            </motion.div>

            {/* Tagline */}
            <motion.p
              variants={item}
              className={`text-base md:text-lg leading-relaxed max-w-lg mb-8
                ${isDark ? 'text-white/60' : 'text-gray-600'}`}
            >
              Final Year Informatics Engineering Student crafting elegant digital experiences
              through clean code and creative problem-solving.
            </motion.p>

            {/* Buttons */}
            <motion.div variants={item} className="flex flex-wrap gap-4 mb-12">
              <motion.a
                href="/cv.pdf"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                <a
                  href={myCV}
                  download
                  className="btn-primary flex items-center gap-2"
                >
                  <HiDownload size={18} />
                  Download CV
                </a>
              </motion.a>
              <motion.button
                onClick={scrollToProjects}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-outline"
              >
                <HiCodeBracket size={18} />
                View Projects
              </motion.button>
            </motion.div>

            
          </motion.div>

          {/* Right - Profile visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Outer ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-8 rounded-full border border-dashed border-cyan-400/20"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-16 rounded-full border border-dashed border-purple-400/10"
              />

              {/* Profile image container */}
              <div className="relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80">
                {/* Gradient border */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 p-0.5">
                  <div className={`w-full h-full rounded-3xl overflow-hidden flex items-center justify-center
                    ${isDark ? 'bg-navy-800' : 'bg-slate-100'}`}>
                    {/* Placeholder avatar */}
                    <div className="flex flex-col items-center gap-3 opacity-60">
                      <span className={`font-mono text-xs ${isDark ? 'text-white/40' : 'text-gray-400'}`}>
                        <img
                          src={profileImg}
                          alt="Profile"
                          className="w-full h-full object-cover"
                        />
                      </span>
                    </div>
                  </div>
                </div>

                {/* Floating badges */}
                <motion.div
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className={`absolute -right-8 top-8 px-3 py-1.5 rounded-xl text-xs font-mono font-medium
                    border shadow-lg
                    ${isDark ? 'bg-navy-800 border-cyan-400/30 text-cyan-400' : 'bg-white border-cyan-200 text-cyan-600 shadow-cyan-100'}`}
                >
                  &lt;/Dev&gt;
                </motion.div>

                <motion.div
                  animate={{ y: [5, -5, 5] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className={`absolute -left-8 bottom-12 px-3 py-1.5 rounded-xl text-xs font-mono font-medium
                    border shadow-lg
                    ${isDark ? 'bg-navy-800 border-purple-400/30 text-purple-400' : 'bg-white border-purple-200 text-purple-600'}`}
                >
                  Informatics
                </motion.div>

                <motion.div
                  animate={{ y: [-3, 7, -3] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  className={`absolute -bottom-4 right-4 px-3 py-1.5 rounded-xl text-xs font-mono font-medium
                    border shadow-lg
                    ${isDark ? 'bg-navy-800 border-green-400/30 text-green-400' : 'bg-white border-green-200 text-green-600'}`}
                >
                  Open to Work ✓
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="flex justify-center mt-16"
        >
          <motion.button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className={`flex flex-col items-center gap-1 text-xs font-mono tracking-widest
              ${isDark ? 'text-white/30 hover:text-white/60' : 'text-gray-400 hover:text-gray-600'} transition-colors`}
          >
            <span className="uppercase">Scroll</span>
            <HiArrowDown size={16} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}