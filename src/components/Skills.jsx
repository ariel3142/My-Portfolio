import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { skills } from '../data/portfolioData'
import { useTheme } from '../context/ThemeContext'

const categories = [
  { key: 'languages', label: 'Programming Languages', emoji: '💻' },
  { key: 'frameworks', label: 'Frameworks & Libraries', emoji: '⚡' },
  { key: 'tools', label: 'Tools & Platforms', emoji: '🔧' },
]

function SkillCard({ skill, i, isDark }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: i * 0.08 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -4, scale: 1.02 }}
      className={`relative p-5 rounded-2xl border group cursor-default overflow-hidden transition-shadow
        ${isDark ? 'bg-white/5 border-white/10 hover:border-white/20' : 'bg-white border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-md'}`}
    >
      {/* Animated glow */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        className="absolute inset-0 rounded-2xl transition-opacity duration-300"
        style={{ background: `radial-gradient(circle at 50% 50%, ${skill.color}15, transparent 70%)` }}
      />

      <div className="relative">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <span className={`font-syne font-semibold text-sm ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {skill.name}
          </span>
          <span className="font-mono text-xs" style={{ color: skill.color }}>
            {skill.level}%
          </span>
        </div>

        {/* Progress bar */}
        <div className={`h-1.5 rounded-full overflow-hidden ${isDark ? 'bg-white/10' : 'bg-gray-100'}`}>
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
            transition={{ duration: 1, delay: i * 0.08 + 0.3, ease: 'easeOut' }}
            className="h-full rounded-full relative"
            style={{ background: `linear-gradient(90deg, ${skill.color}99, ${skill.color})` }}
          >
            {/* Shimmer */}
            <motion.div
              animate={{ x: ['-100%', '200%'] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 + 1 }}
              className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            />
          </motion.div>
        </div>

        {/* Skill level label */}
        <div className="mt-2 flex justify-end">
          <span className={`font-mono text-xs ${isDark ? 'text-white/30' : 'text-gray-400'}`}>
            {skill.level >= 90 ? 'Expert' : skill.level >= 80 ? 'Advanced' : skill.level >= 70 ? 'Proficient' : 'Intermediate'}
          </span>
        </div>
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const { isDark } = useTheme()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className={`section-padding relative overflow-hidden
      ${isDark ? 'bg-navy-950' : 'bg-slate-50'}`}>

      <div className="absolute inset-0 grid-dots opacity-40" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400/20 to-transparent" />

      {/* Orb decoration */}
      <div className="absolute right-0 top-1/2 w-96 h-96 rounded-full bg-purple-500/5 blur-3xl" />

      <div className="max-w-7xl mx-auto relative" ref={ref}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-16 text-center"
        >
          <div className="flex justify-center mb-4">
            <span className="section-label">02 — Skills</span>
          </div>
          <h2 className="section-title">
            Things I Have <span className="gradient-text">Learned</span>
          </h2>
          <p className={`max-w-xl mx-auto font-dm text-base ${isDark ? 'text-white/50' : 'text-gray-500'}`}>
            Technologies I've worked with and the proficiency level I've built over years of study and projects.
          </p>
        </motion.div>

        {/* Categories */}
        <div className="space-y-12">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.key}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: ci * 0.15 }}
            >
              {/* Category header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg
                  ${isDark ? 'bg-white/5 border border-white/10' : 'bg-white border border-gray-200 shadow-sm'}`}>
                  {cat.emoji}
                </div>
                <div>
                  <h3 className={`font-syne font-bold text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {cat.label}
                  </h3>
                </div>
                <div className={`flex-1 h-px ${isDark ? 'bg-white/5' : 'bg-gray-200'}`} />
                <span className={`font-mono text-xs ${isDark ? 'text-white/30' : 'text-gray-400'}`}>
                  {skills[cat.key].length} skills
                </span>
              </div>

              {/* Skills grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {skills[cat.key].map((skill, i) => (
                  <SkillCard key={skill.name} skill={skill} i={i} isDark={isDark} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech cloud */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className={`mt-16 p-6 rounded-3xl border text-center
            ${isDark ? 'bg-white/3 border-white/8' : 'bg-white border-gray-200'}`}
        >
          <div className={`font-mono text-xs uppercase tracking-widest mb-4 ${isDark ? 'text-white/30' : 'text-gray-400'}`}>
            Also familiar with
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {["REST API", "Docker","Figma", "Linux", "Postman", "Bootstrap", "jQuery", "npm", "Vite", "GraphQL", "Nginx", "Canva", "MS Office"].map((tech, i) => (
              <motion.span
                key={i}
                whileHover={{ scale: 1.1, y: -2 }}
                className={`px-3 py-1.5 rounded-lg font-mono text-xs border cursor-default transition-colors
                  ${isDark
                    ? 'bg-white/5 border-white/10 text-white/60 hover:border-cyan-400/30 hover:text-cyan-400'
                    : 'bg-gray-50 border-gray-200 text-gray-600 hover:border-cyan-300 hover:text-cyan-600'
                  }`}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}