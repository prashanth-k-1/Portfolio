import { motion, AnimatePresence } from "framer-motion"
import PropTypes from "prop-types"

const Loader = ({ isLoading, onLoadingComplete }) => {
  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          onAnimationComplete={() => !isLoading && onLoadingComplete?.()}
          className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
        >
          {/* Subtle background glow */}
          <div className="absolute inset-0">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/10 blur-[150px]" 
            />
          </div>

          {/* Center content */}
          <div className="relative flex flex-col items-center">
            {/* Logo text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                CPKR
              </span>
            </motion.div>

            {/* Animated line loader */}
            <div className="relative w-48 h-[2px] bg-white/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-emerald-400 to-transparent"
              />
            </div>

            {/* Loading text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-6 text-zinc-500 text-sm tracking-widest uppercase"
            >
              <motion.span
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                Loading
              </motion.span>
            </motion.p>
          </div>

          {/* Corner decorations */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ delay: 0.3 }}
            className="absolute top-8 left-8 w-16 h-16 border-l border-t border-white/20"
          />
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ delay: 0.4 }}
            className="absolute top-8 right-8 w-16 h-16 border-r border-t border-white/20"
          />
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ delay: 0.5 }}
            className="absolute bottom-8 left-8 w-16 h-16 border-l border-b border-white/20"
          />
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ delay: 0.6 }}
            className="absolute bottom-8 right-8 w-16 h-16 border-r border-b border-white/20"
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  onLoadingComplete: PropTypes.func
}

export default Loader
