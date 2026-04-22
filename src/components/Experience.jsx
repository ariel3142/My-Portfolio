import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  FaBriefcase,
  FaGraduationCap,
  FaTrophy,
  FaStar,
  FaUserTie
} from "react-icons/fa";
import { experiences } from '../data/portfolioData'
import { useTheme } from '../context/ThemeContext'

const typeConfig = {

  freelance: {
    icon: <FaUserTie size={16} />,
    label: 'Freelance',
    gradient: 'from-cyan-500 to-blue-500',
    glow: 'shadow-cyan',
    badgeBg: 'bg-cyan-500/10 text-cyan-400 border-cyan-400/20',
  },

  internship: {
    icon: <FaBriefcase size={16} />,
    label: 'Internship',
    gradient: 'from-cyan-500 to-blue-500',
    glow: 'shadow-cyan',
    badgeBg: 'bg-cyan-500/10 text-cyan-400 border-cyan-400/20',
  },

  academic: {
    icon: <FaGraduationCap size={16} />,
    label: 'Academic',
    gradient: 'from-purple-500 to-violet-500',
    glow: 'shadow-purple',
    badgeBg: 'bg-purple-500/10 text-purple-400 border-purple-400/20',
  },

  achievement: {
    icon: <FaTrophy size={16} />,
    label: 'Achievement',
    gradient: 'from-orange-500 to-yellow-500',
    glow: '',
    badgeBg: 'bg-orange-500/10 text-orange-400 border-orange-400/20',
  },

  start: {
    icon: <FaStar size={16} />,
    label: 'Milestone',
    gradient: 'from-blue-500 to-indigo-500',
    glow: '',
    badgeBg: 'bg-blue-500/10 text-blue-400 border-blue-400/20',
  },
}

function TimelineItem({ exp, i, isDark }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const config = typeConfig[exp.type] || typeConfig.academic
  const isLeft = i % 2 === 0

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: i * 0.1 }}
      className={`relative grid md:grid-cols-2 gap-6 md:gap-12 items-center mb-8`}
    >
      {/* Left content (even items) */}
      <div className={`${isLeft ? 'md:text-right' : 'md:col-start-2'}`}>
        {isLeft ? (
          <ExperienceCard exp={exp} config={config} isDark={isDark} />
        ) : (
          <div className="hidden md:block" />
        )}
      </div>

      {/* Center dot */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 0.3, delay: i * 0.1 + 0.2 }}
          className={`w-10 h-10 rounded-full bg-gradient-to-br ${config.gradient} flex items-center justify-center text-white z-10 ${config.glow} shadow-lg`}
        >
          {config.icon}
        </motion.div>
        <div className={`font-mono text-xs mt-2 ${isDark ? 'text-white/30' : 'text-gray-400'}`}>
          {exp.year}
        </div>
      </div>

      {/* Right content (odd items) */}
      <div className={`${!isLeft ? '' : 'hidden md:block'}`}>
        {!isLeft ? (
          <ExperienceCard exp={exp} config={config} isDark={isDark} />
        ) : (
          <div className="hidden md:block" />
        )}
      </div>

      {/* Mobile layout - always show card with left dot */}
      <div className={`md:hidden col-span-2`}>
        <div className="flex gap-4">
          <div className="flex flex-col items-center">
            <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${config.gradient} flex items-center justify-center text-white flex-shrink-0`}>
              {config.icon}
            </div>
            <div className={`w-0.5 flex-1 mt-2 ${isDark ? 'bg-white/10' : 'bg-gray-200'}`} />
          </div>
          <div className="flex-1 pb-2">
            <div className={`font-mono text-xs mb-2 ${isDark ? 'text-white/30' : 'text-gray-400'}`}>
              {exp.year}
            </div>
            <ExperienceCard exp={exp} config={config} isDark={isDark} />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function ExperienceCard({ exp, config, isDark }) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      className={`p-5 rounded-2xl border transition-all duration-300 cursor-default group
        ${isDark
          ? 'bg-white/4 border-white/10 hover:border-white/20 hover:bg-white/6'
          : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-md'
        }`}
    >
      {/* Type badge */}
      <div className="flex flex-wrap items-center gap-2 mb-3">
        <span className={`inline-flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded-lg border ${config.badgeBg}`}>
          {config.icon}
          {config.label}
        </span>
        <span className={`text-xs font-mono ${isDark ? 'text-white/30' : 'text-gray-400'}`}>
          {exp.period}
        </span>
      </div>

      {/* Title */}
      <h3 className={`font-syne font-bold text-base mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>
        {exp.title}
      </h3>
      <p className={`font-dm text-sm font-medium mb-3 ${isDark ? 'text-cyan-400/80' : 'text-cyan-600'}`}>
        {exp.company} · {exp.location}
      </p>

      {/* Description */}
      <p className={`font-dm text-sm leading-relaxed mb-4 ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
        {exp.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {exp.tags.map((tag) => (
          <span
            key={tag}
            className={`font-mono text-xs px-2 py-0.5 rounded border
              ${isDark ? 'bg-white/5 border-white/10 text-white/50' : 'bg-gray-50 border-gray-200 text-gray-500'}`}
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Experience() {
  const { isDark } = useTheme()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className={`section-padding relative overflow-hidden
      ${isDark ? 'bg-navy-950' : 'bg-slate-50'}`}>

      <div className="absolute inset-0 grid-dots opacity-40" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />

      <div className="max-w-5xl mx-auto relative" ref={ref}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-16 text-center"
        >
          <div className="flex justify-center mb-4">
            <span className="section-label">04 — Experience</span>
          </div>
          <h2 className="section-title">
            My <span className="gradient-text">Journey</span>
          </h2>
          <p className={`max-w-xl mx-auto font-dm text-base ${isDark ? 'text-white/50' : 'text-gray-500'}`}>
            A timeline of my professional internships, academic projects, and milestones as a developer.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line (desktop) */}
          <div className={`hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px
            ${isDark ? 'bg-gradient-to-b from-cyan-400/30 via-white/10 to-transparent' : 'bg-gradient-to-b from-cyan-300/50 via-gray-200 to-transparent'}`}
          />

          {experiences.map((exp, i) => (
            <TimelineItem key={exp.id} exp={exp} i={i} isDark={isDark} />
          ))}
        </div>
      </div>
    </section>
  )
}