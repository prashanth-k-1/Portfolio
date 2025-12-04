import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState } from "react"
import PropTypes from "prop-types"
import {
  SiReact, SiJavascript, SiTailwindcss, SiPostgresql,
  SiSupabase, SiFramer, SiVite, SiGit, SiVitest, SiDeno
} from "react-icons/si"
import { FaJava } from "react-icons/fa"
import { TbApi } from "react-icons/tb"
import { BiData } from "react-icons/bi"
import { VscWorkspaceTrusted } from "react-icons/vsc"
import { BsShieldLock, BsDatabase } from "react-icons/bs"
import { HiOutlineStatusOnline } from "react-icons/hi"
import { MdPayment } from "react-icons/md"

const skills = [
  { name: "React 18", icon: SiReact, color: "#61DAFB" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Java", icon: FaJava, color: "#ED8B00" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "Supabase", icon: SiSupabase, color: "#3FCF8E" },
  { name: "REST APIs", icon: TbApi, color: "#10B981" },
  { name: "Framer", icon: SiFramer, color: "#BB4B96" },
  { name: "Vite", icon: SiVite, color: "#646CFF" },
  { name: "TanStack", icon: BiData, color: "#FF4154" },
  { name: "Zustand", icon: BsDatabase, color: "#764ABC" },
  { name: "JWT", icon: BsShieldLock, color: "#D63AFF" },
  { name: "RBAC", icon: VscWorkspaceTrusted, color: "#10B981" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "Vitest", icon: SiVitest, color: "#6E9F18" },
  { name: "Razorpay", icon: MdPayment, color: "#528FF0" },
  { name: "WebSocket", icon: HiOutlineStatusOnline, color: "#10B981" },
  { name: "SQL", icon: BsDatabase, color: "#CC2927" },
  { name: "Deno", icon: SiDeno, color: "#70FFAF" },
]

const SkillChip = ({ skill }) => {
  const [isHovered, setIsHovered] = useState(false)
  const Icon = skill.icon

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.08, y: -3 }}
      className="relative flex-shrink-0"
    >
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl blur-xl transition-opacity duration-300"
        style={{ 
          backgroundColor: skill.color,
          opacity: isHovered ? 0.4 : 0
        }}
      />

      {/* Card */}
      <div 
        className="relative flex items-center gap-3 px-5 py-3 rounded-2xl border backdrop-blur-sm transition-all duration-300 cursor-pointer"
        style={{
          background: isHovered 
            ? `linear-gradient(135deg, ${skill.color}20, ${skill.color}05)`
            : "rgba(20, 20, 25, 0.9)",
          borderColor: isHovered ? `${skill.color}60` : "rgba(255,255,255,0.1)",
          boxShadow: isHovered 
            ? `0 10px 40px -10px ${skill.color}50`
            : "0 4px 20px -5px rgba(0,0,0,0.5)"
        }}
      >
        <motion.div
          animate={{ 
            rotate: isHovered ? [0, -10, 10, 0] : 0,
            scale: isHovered ? 1.15 : 1
          }}
          transition={{ duration: 0.3 }}
        >
          <Icon 
            className="w-6 h-6 transition-all duration-300"
            style={{ 
              color: isHovered ? skill.color : "#6b7280",
              filter: isHovered ? `drop-shadow(0 0 10px ${skill.color})` : "none"
            }}
          />
        </motion.div>

        <span 
          className="text-sm font-medium transition-colors duration-300 whitespace-nowrap"
          style={{ color: isHovered ? "#fff" : "#9ca3af" }}
        >
          {skill.name}
        </span>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: isHovered ? 1 : 0 }}
          className="w-2 h-2 rounded-full"
          style={{ backgroundColor: skill.color }}
        />
      </div>
    </motion.div>
  )
}

SkillChip.propTypes = {
  skill: PropTypes.shape({
    name: PropTypes.string.isRequired,
    icon: PropTypes.elementType.isRequired,
    color: PropTypes.string.isRequired,
  }).isRequired,
}

const MarqueeRow = ({ items, direction, speed }) => {
  const duplicated = [...items, ...items, ...items]
  
  return (
    <div className="relative overflow-hidden py-2 group">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
      
      <motion.div
        className="flex gap-4"
        animate={{
          x: direction === "left" ? ["0%", "-33.33%"] : ["-33.33%", "0%"]
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{ willChange: "transform" }}
      >
        {duplicated.map((skill, index) => (
          <SkillChip key={`${skill.name}-${index}`} skill={skill} />
        ))}
      </motion.div>
    </div>
  )
}

MarqueeRow.propTypes = {
  items: PropTypes.array.isRequired,
  direction: PropTypes.oneOf(["left", "right"]).isRequired,
  speed: PropTypes.number.isRequired,
}

const Technologies = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const orbitRotate = useTransform(scrollYProgress, [0, 1], [0, 360])

  const row1 = skills.slice(0, 7)
  const row2 = skills.slice(7, 13)
  const row3 = skills.slice(13)

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen bg-black overflow-hidden py-20 sm:py-28" 
      id="technologies"
    >
      {/* Mesh Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-emerald-600/5 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[100px]" />
      </div>

      {/* Dot Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Orbiting Circles - 3D effect */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{ y: backgroundY }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {/* Central glow pulse */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-emerald-500/20 blur-[80px]"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          
          {/* Orbit 1 */}
          <motion.div
            style={{ rotate: orbitRotate }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-emerald-500/20"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-emerald-500/60 shadow-lg shadow-emerald-500/50" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-emerald-400/40" />
          </motion.div>
          
          {/* Orbit 2 */}
          <motion.div
            style={{ rotate: useTransform(scrollYProgress, [0, 1], [0, -180]) }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/5"
          >
            <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white/30" />
          </motion.div>
          
          {/* Orbit 3 */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-purple-500/5"
          >
            <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-purple-400/30" />
          </motion.div>
        </div>
      </motion.div>

      {/* Floating Orbs */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          style={{
            left: `${10 + i * 12}%`,
            top: `${15 + (i % 4) * 20}%`,
            backgroundColor: i % 2 === 0 ? "rgba(16, 185, 129, 0.4)" : "rgba(139, 92, 246, 0.3)",
          }}
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.3,
          }}
        />
      ))}

      <div className="relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20 px-4"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6 backdrop-blur-sm"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <SiReact className="w-4 h-4 text-emerald-400" />
            </motion.div>
            <span className="text-sm text-emerald-400 font-medium">Full Stack Developer</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-4">
            Technologies
          </h2>
          
          <p className="text-zinc-500 text-base sm:text-lg max-w-lg mx-auto">
            The toolkit I use to craft exceptional digital experiences
          </p>
        </motion.div>

        {/* Scrolling marquee rows */}
        <div className="space-y-4 mb-16">
          <MarqueeRow items={row1} direction="left" speed={25} />
          <MarqueeRow items={row2} direction="right" speed={30} />
          <MarqueeRow items={row3} direction="left" speed={22} />
        </div>

        {/* Bottom stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center px-4"
        >
          <div className="flex items-center gap-8 sm:gap-12">
            {[
              { value: skills.length, label: "Technologies" },
              { value: "3+", label: "Years Learning" },
              { value: "∞", label: "Passion" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="text-center cursor-default"
              >
                <div className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-xs sm:text-sm text-zinc-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          className="mt-12 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent max-w-xl mx-auto"
        />
      </div>
    </section>
  )
}

export default Technologies
