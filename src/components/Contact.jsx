import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FiGithub, FiLinkedin, FiMail, FiSend, FiInstagram } from 'react-icons/fi'
import { HiCheckCircle } from 'react-icons/hi2'
import { personalInfo } from '../data/portfolioData'
import { useTheme } from '../context/ThemeContext'
import { FaWhatsapp } from "react-icons/fa";

const socials = [
  {
    icon: <FiGithub size={20} />,
    label: 'GitHub',
    value: '@ariel3142',
    href: 'https://github.com/ariel3142',
    color: '#ffffff',
    colorClass: 'hover:border-white/40 hover:text-white',
  },
  {
    icon: <FiLinkedin size={20} />,
    label: 'LinkedIn',
    value: 'in/Beltsazar-ariel',
    href: 'https://www.linkedin.com/in/beltsazar-ariel-9bb689313/',
    color: '#0a66c2',
    colorClass: 'hover:border-blue-400/40 hover:text-blue-400',
  },
  {
    icon: <FiMail size={20} />,
    label: 'Email',
    value: 'beltsazarariel5@gmail.com',
    href: 'mailto:beltsazarariel5@gmail.com',
    color: '#00d4ff',
    colorClass: 'hover:border-cyan-400/40 hover:text-cyan-400',
  },
  {
    icon: <FaWhatsapp size={20} />,
    label: 'WhatsApp',
    value: '085175379210',
    href: 'https://wa.me/6285175379210',
    color: '#25D366',
    colorClass: 'hover:border-green-400/40 hover:text-green-400',
  },
  {
    icon: <FiInstagram size={20} />,
    label: 'Instagram',
    value: '@itsarielll____',
    href: 'https://www.instagram.com/itsarielll____/',
    color: '#E1306C',
    colorClass: 'hover:border-pink-400/40 hover:text-pink-400',
  },
]

export default function Contact() {
  const { isDark } = useTheme()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [focused, setFocused] = useState(null)

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email'
    if (!form.message.trim()) e.message = 'Message is required'
    else if (form.message.trim().length < 10) e.message = 'Message too short (min 10 chars)'
    return e
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      setForm({ name: '', email: '', message: '' })
      setErrors({})
    }, 1500)
  }

  const inputClass = (field) => `w-full px-4 py-3.5 rounded-xl border font-dm text-sm outline-none
    transition-all duration-200 resize-none
    ${isDark
      ? `bg-white/5 text-white placeholder:text-white/30
         ${focused === field ? 'border-cyan-400/60 shadow-[0_0_0_3px_rgba(0,212,255,0.1)]' : 'border-white/10'}
         ${errors[field] ? 'border-red-400/50' : ''}`
      : `bg-gray-50 text-gray-900 placeholder:text-gray-400
         ${focused === field ? 'border-cyan-400 shadow-[0_0_0_3px_rgba(0,212,255,0.1)]' : 'border-gray-200'}
         ${errors[field] ? 'border-red-400' : ''}`
    }`

  return (
    <section id="contact" className={`section-padding relative overflow-hidden
      ${isDark ? 'bg-navy-900' : 'bg-white'}`}>

      <div className="absolute inset-0 grid-lines opacity-30" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400/20 to-transparent" />

      {/* Orbs */}
      <div className="absolute right-0 bottom-0 w-96 h-96 rounded-full bg-purple-500/8 blur-3xl" />
      <div className="absolute left-0 top-1/2 w-64 h-64 rounded-full bg-cyan-500/8 blur-3xl" />

      <div className="max-w-6xl mx-auto relative" ref={ref}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-16 text-center"
        >
          <div className="flex justify-center mb-4">
            <span className="section-label">05 — Contact</span>
          </div>
          <h2 className="section-title">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className={`max-w-xl mx-auto font-dm text-base ${isDark ? 'text-white/50' : 'text-gray-500'}`}>
            I'm open to any opportunities, full-time jobs, internships, and collaborations.
            Drop me a message — I reply within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">

          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            {/* CTA */}
            <div className={`p-6 rounded-3xl border overflow-hidden relative
              ${isDark ? 'bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border-cyan-400/20' : 'bg-gradient-to-br from-cyan-50 to-purple-50 border-cyan-200'}`}>
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-cyan-400/10 blur-xl" />
              <div className="relative">
                <div className="font-syne font-bold text-lg text-white mb-2">
                  {isDark ? '' : ''}
                  <span className={isDark ? 'text-white' : 'text-gray-900'}>
                    Available for Work
                  </span>
                </div>
                <p className={`font-dm text-sm leading-relaxed ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
                  Currently seeking full-time Software Developer roles and internship opportunities.
                  Graduating in <strong>{personalInfo.graduationYear}</strong>.
                </p>
                <div className={`mt-4 flex items-center gap-2 text-xs font-mono
                  ${isDark ? 'text-white/40' : 'text-gray-400'}`}>
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  Response time: &lt; 24h
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="space-y-3">
              {socials.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  whileHover={{ x: 4 }}
                  className={`flex items-center gap-4 p-4 rounded-2xl border transition-all duration-200 group
                    ${isDark
                      ? `bg-white/4 border-white/10 text-white/60 ${social.colorClass}`
                      : `bg-gray-50 border-gray-200 text-gray-600 ${social.colorClass}`
                    }`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors
                    ${isDark ? 'bg-white/8 group-hover:bg-white/12' : 'bg-white border border-gray-200 group-hover:border-gray-300'}`}>
                    {social.icon}
                  </div>
                  <div>
                    <div className={`font-mono text-xs uppercase tracking-wider mb-0.5 ${isDark ? 'text-white/30' : 'text-gray-400'}`}>
                      {social.label}
                    </div>
                    <div className="font-dm text-sm font-medium">{social.value}</div>
                  </div>
                  <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right — Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className={`p-7 rounded-3xl border
              ${isDark ? 'bg-white/4 border-white/10' : 'bg-gray-50 border-gray-200'}`}>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-10 text-center gap-4"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 300, delay: 0.2 }}
                    className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center text-green-400"
                  >
                    <HiCheckCircle size={36} />
                  </motion.div>
                  <h3 className={`font-syne font-bold text-xl ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Message Sent! 🎉
                  </h3>
                  <p className={`font-dm text-sm max-w-xs ${isDark ? 'text-white/60' : 'text-gray-500'}`}>
                    Thanks for reaching out! I'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-outline text-xs px-5 py-2"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className={`font-mono text-xs mb-6 ${isDark ? 'text-cyan-400/60' : 'text-cyan-500/60'}`}>
                    {'// message.send()'}
                  </div>

                  {/* Name */}
                  <div>
                    <label className={`block font-mono text-xs uppercase tracking-wider mb-2
                      ${isDark ? 'text-white/40' : 'text-gray-400'}`}>
                      Name *
                    </label>
                    <input
                      type="text"
                      placeholder="Your full name"
                      value={form.name}
                      onChange={e => { setForm({...form, name: e.target.value}); setErrors({...errors, name: ''}) }}
                      onFocus={() => setFocused('name')}
                      onBlur={() => setFocused(null)}
                      className={inputClass('name')}
                    />
                    {errors.name && (
                      <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }}
                        className="text-red-400 text-xs mt-1 font-mono">
                        {errors.name}
                      </motion.p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className={`block font-mono text-xs uppercase tracking-wider mb-2
                      ${isDark ? 'text-white/40' : 'text-gray-400'}`}>
                      Email *
                    </label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={e => { setForm({...form, email: e.target.value}); setErrors({...errors, email: ''}) }}
                      onFocus={() => setFocused('email')}
                      onBlur={() => setFocused(null)}
                      className={inputClass('email')}
                    />
                    {errors.email && (
                      <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }}
                        className="text-red-400 text-xs mt-1 font-mono">
                        {errors.email}
                      </motion.p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className={`block font-mono text-xs uppercase tracking-wider mb-2
                      ${isDark ? 'text-white/40' : 'text-gray-400'}`}>
                      Message *
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Tell me about the opportunity or project..."
                      value={form.message}
                      onChange={e => { setForm({...form, message: e.target.value}); setErrors({...errors, message: ''}) }}
                      onFocus={() => setFocused('message')}
                      onBlur={() => setFocused(null)}
                      className={inputClass('message')}
                    />
                    <div className="flex justify-between mt-1">
                      {errors.message
                        ? <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                            className="text-red-400 text-xs font-mono">{errors.message}</motion.p>
                        : <span />
                      }
                      <span className={`font-mono text-xs ${isDark ? 'text-white/20' : 'text-gray-400'}`}>
                        {form.message.length}/500
                      </span>
                    </div>
                  </div>

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: loading ? 1 : 1.02 }}
                    whileTap={{ scale: loading ? 1 : 0.98 }}
                    className="w-full btn-primary justify-center py-4 text-base disabled:opacity-70"
                  >
                    {loading ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                          className="w-4 h-4 rounded-full border-2 border-navy-950/40 border-t-navy-950"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <FiSend size={17} />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}