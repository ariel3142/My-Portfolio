import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import profileImg from "../assets/profile.jpg";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0)
  const letters = ['A', 'P']

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(p => {
        if (p >= 100) { clearInterval(timer); return 100 }
        return p + 2
      })
    }, 20)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-navy-950">
      {/* Grid background */}
      <div className="absolute inset-0 grid-dots opacity-50" />

      {/* Animated logo */}
      <div className="relative mb-8">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "backOut" }}
          className="relative"
        >
          {/* Rotating ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-4 rounded-full border border-cyan-400/30 border-dashed"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-8 rounded-full border border-purple-400/20 border-dashed"
          />

          {/* Logo box */}
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center shadow-cyan-lg">
            <img
                            src={profileImg}
                            alt="Profile"
                            className="w-full h-full object-cover"
                          />
          </div>
        </motion.div>
      </div>

      {/* Name */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="font-syne font-bold text-2xl text-white mb-2"
      >
        Wait for a moment, ....
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="font-mono text-xs text-cyan-400/70 tracking-widest uppercase mb-10"
      >
        Initializing Portfolio...
      </motion.div>

      {/* Progress bar */}
      <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ ease: "easeOut" }}
        />
      </div>
      <div className="mt-2 font-mono text-xs text-white/30">{progress}%</div>
    </div>
  )
}