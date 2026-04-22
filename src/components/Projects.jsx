import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { HiArrowUpRight, HiCodeBracket } from 'react-icons/hi2'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { projects } from '../data/portfolioData'
import { useTheme } from '../context/ThemeContext'
import gisImg from "../assets/projects/webgis.png";
import posImg from "../assets/projects/pos.png";
import photographyImg from "../assets/projects/photography.jpg";

const filters = ['All']

function ProjectCard({ project, i, isDark }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: i * 0.1 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className={`group relative rounded-3xl border overflow-hidden transition-all duration-500
        ${isDark
          ? 'bg-white/4 border-white/10 hover:border-white/20 hover:shadow-card-hover'
          : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-xl'
        }
        ${project.featured ? '' : ''}`}
    >
      {/* Top image/visual area */}
      <div className="relative h-44 overflow-hidden">

        {/* Project Image */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />

        {/* Grid overlay */}
        <div className="absolute inset-0 grid-lines opacity-20" />
        {/* Project icon */}
        <motion.div
          
          transition={{ duration: 0.4 }}
          className="text-5xl z-10 select-none"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover rounded-xl"
          />
        </motion.div>

        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span className="bg-black/30 backdrop-blur-sm text-white/80 font-mono text-xs px-3 py-1 rounded-full border border-white/20">
            {project.category}
          </span>
        </div>

        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-3 right-3">
            <span className="bg-yellow-400/90 text-yellow-900 font-syne font-bold text-xs px-2.5 py-1 rounded-full">
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Title */}
        <div className="mb-1">
          <h3 className={`font-syne font-bold text-lg leading-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {project.title}
          </h3>
          <p className={`font-mono text-xs mt-0.5 ${isDark ? 'text-white/40' : 'text-gray-400'}`}>
            {project.subtitle}
          </p>
        </div>

        {/* Description */}
        <p className={`font-dm text-sm leading-relaxed mt-3 mb-4 line-clamp-3
          ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`font-mono text-xs px-2.5 py-1 rounded-lg border
                ${isDark ? 'bg-white/5 border-white/10 text-white/60' : 'bg-gray-50 border-gray-200 text-gray-500'}`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex gap-2 pt-4 border-t border-white/5">

          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-400 text-navy-950 font-syne font-semibold text-xs hover:shadow-cyan transition-shadow"
          >

            <FiExternalLink size={13} />

            {project.category === "Photography"
              ? "Open Gallery"
              : "Live Demo"}

          </a>


          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border font-syne font-semibold text-xs transition-colors
      ${isDark
                ? 'border-white/15 text-white/70 hover:border-white/30 hover:text-white'
                : 'border-gray-200 text-gray-600 hover:border-gray-300 hover:text-gray-900'
              }`}
          >

            {project.category === "Photography"
              ? <FiExternalLink size={13} />
              : <FiGithub size={13} />}

            {project.category === "Photography"
              ? "View Photos"
              : "GitHub"}

          </a>

        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const { isDark } = useTheme()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter)

  return (
    <section id="projects" className={`section-padding relative overflow-hidden
      ${isDark ? 'bg-navy-900' : 'bg-white'}`}>

      <div className="absolute inset-0 grid-lines opacity-30" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />

      {/* Left orb */}
      <div className="absolute left-0 top-1/2 w-80 h-80 rounded-full bg-cyan-500/5 blur-3xl" />

      <div className="max-w-7xl mx-auto relative" ref={ref}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-12 text-center"
        >
          <div className="flex justify-center mb-4">
            <span className="section-label">03 — Projects</span>
          </div>
          <h2 className="section-title">
            Things I've <span className="gradient-text">Built</span>
          </h2>
          <p className={`max-w-xl mx-auto font-dm text-base ${isDark ? 'text-white/50' : 'text-gray-500'}`}>
            A selection of projects showcasing my skills across web development, systems design, and software engineering.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex justify-center gap-2 mb-10"
        >
          {filters.map((f) => (
            <motion.button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`relative px-5 py-2 rounded-xl font-syne font-semibold text-sm transition-all duration-200
                ${activeFilter === f
                  ? 'text-white'
                  : isDark ? 'text-white/50 hover:text-white' : 'text-gray-500 hover:text-gray-900'
                }`}
            >
              {activeFilter === f && (
                <motion.span
                  layoutId="filter"
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-400"
                />
              )}
              <span className="relative">{f}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard project={project} i={i} isDark={isDark} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View more */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-10"
        >
          <a
            href="https://github.com/rizkypratama"
            target="_blank"
            rel="noreferrer"
            className="btn-outline inline-flex"
          >
            <HiCodeBracket size={18} />
            View All on GitHub
            <HiArrowUpRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}