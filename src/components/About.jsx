import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

import {
  FaCode,
  FaLightbulb,
  FaGraduationCap,
  FaPuzzlePiece,
  FaMicrochip,
  FaStar,
  FaCamera,
  FaPalette
} from "react-icons/fa";

import {
  stats,
  aboutText,
  interests,
  personalInfo
} from '../data/portfolioData'

import { useTheme } from '../context/ThemeContext'


function StatCard({ stat, i, isDark }) {

  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  const icons = {
    code: <FaCode size={20} />,
    cpu: <FaMicrochip size={20} />,
    briefcase: <FaGraduationCap size={20} />,
    git: <FaCode size={20} />,
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: i * 0.1 }}
      whileHover={{ y: -4, scale: 1.02 }}
      className={`relative p-5 rounded-2xl border group cursor-default overflow-hidden transition-shadow duration-300
        ${isDark ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200 shadow-sm'}`}
    >

      <div className="relative">

        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center text-cyan-400 mb-3">

          {icons[stat.icon] || <FaStar size={20} />}

        </div>

        <div className="font-bold text-3xl mb-1 gradient-text">
          {stat.value}
        </div>

        <div className={`text-sm ${isDark ? 'text-white/50' : 'text-gray-500'}`}>
          {stat.label}
        </div>

      </div>

    </motion.div>
  )
}


const interestIcons = {
  web: <FaCode size={22} />,
  code: <FaMicrochip size={22} />,
  puzzle: <FaPuzzlePiece size={22} />,
  camera: <FaCamera size={22} />,
  palette: <FaPalette size={22} />,
}


export default function About() {

  const { isDark } = useTheme()

  const ref = useRef(null)

  const inView = useInView(ref, {
    once: true,
    margin: '-100px'
  })


  return (

    <section
      id="about"
      className={`py-20 relative
      ${isDark ? 'bg-navy-900' : 'bg-white'}`}
    >

      <div className="max-w-7xl mx-auto px-6" ref={ref}>

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >

          <h2 className="text-3xl font-bold mb-4">

            Let me introduce <span className="gradient-text">Myself</span>

          </h2>

          <p className={`max-w-2xl mx-auto
            ${isDark ? 'text-white/50' : 'text-gray-500'}`}>

            A passionate developer who loves building useful and elegant applications.

          </p>

        </motion.div>


        {/* Grid */}

        <div className="grid lg:grid-cols-2 gap-12 mb-16">


          {/* Bio */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >

            <div className={`p-8 rounded-3xl border
              ${isDark ? 'bg-white/5 border-white/10' : 'bg-gray-50 border-gray-200'}`}>

              <div className="space-y-4">

                {aboutText.trim().split('\n\n').map((para, i) => (

                  <p
                    key={i}
                    className={`${isDark ? 'text-white/70' : 'text-gray-700'}`}
                  >

                    {para.trim()}

                  </p>

                ))}

              </div>


              {/* Info */}

              <div className={`mt-6 pt-6 border-t grid grid-cols-2 gap-4
                ${isDark ? 'border-white/10' : 'border-gray-200'}`}>

                {[
                  { label: "University", value: personalInfo.university },
                  { label: "Major", value: personalInfo.major },
                  { label: "Location", value: personalInfo.location },
                  { label: "Graduation", value: personalInfo.graduationYear },
                ].map((info, i) => (

                  <div key={i}>

                    <div className="text-xs text-gray-400">
                      {info.label}
                    </div>

                    <div className="text-sm font-medium">
                      {info.value}
                    </div>

                  </div>

                ))}

              </div>

            </div>

          </motion.div>


          {/* Interests */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >

            <div className="space-y-4">

              {interests.map((interest, i) => (

                <div
                  key={i}
                  className={`flex items-center gap-4 p-5 rounded-2xl border
                    ${isDark
                      ? 'bg-white/5 border-white/10'
                      : 'bg-white border-gray-200'
                    }`}
                >

                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center text-white">

                    {interestIcons[interest.icon]}

                  </div>

                  <div>

                    <div className="font-bold mb-1">
                      {interest.title}
                    </div>

                  </div>

                </div>

              ))}

            </div>

          </motion.div>

        </div>


        {/* Stats */}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

          {stats.map((stat, i) => (

            <StatCard
              key={i}
              stat={stat}
              i={i}
              isDark={isDark}
            />

          ))}

        </div>

      </div>

    </section>

  )

}