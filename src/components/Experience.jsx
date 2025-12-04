import { EXPERIENCES, PUBLICATIONS } from "../constants"
import { motion } from "framer-motion"
import { useState } from "react"
import { Calendar, MapPin, BookOpen, ExternalLink, Award, ArrowRight, Sparkles, Trophy } from "lucide-react"

// Glowing Border Animation
const GlowingBorder = () => (
  <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
    <motion.div
      className="absolute inset-0"
      style={{
        background: "linear-gradient(90deg, transparent, rgba(16, 185, 129, 0.4), transparent)",
      }}
      animate={{
        x: ["-100%", "100%"],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  </div>
)

const Experience = () => {
  const [hoveredExp, setHoveredExp] = useState(null)

  return (
    <section className="relative min-h-screen bg-black overflow-hidden py-24" id="experience">
      {/* Mesh Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-emerald-600/5 rounded-full blur-[120px]" />
      </div>

      {/* Dot Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Floating Orbs */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-emerald-500/40"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -40, 0],
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        />
      ))}

      <div className="container mx-auto px-6 lg:px-8 relative z-10 max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.8 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 mb-8"
          >
            <Sparkles className="w-8 h-8 text-emerald-400" />
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6">
            Experience
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-emerald-500/50" />
            <p className="text-zinc-500 text-lg">Where I&apos;ve worked</p>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-emerald-500/50" />
          </div>
        </motion.div>

        {/* Experience Cards */}
        <div className="relative mb-32" style={{ perspective: "1000px" }}>
          {EXPERIENCES.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative mb-8 ${index % 2 === 0 ? "md:ml-0 md:mr-auto" : "md:ml-auto md:mr-0"} md:w-[85%]`}
              onMouseEnter={() => setHoveredExp(index)}
              onMouseLeave={() => setHoveredExp(null)}
            >
              <div className="relative group">
                {/* Animated border */}
                <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-emerald-500/20 via-white/10 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {hoveredExp === index && <GlowingBorder />}

                <div className="relative p-8 md:p-10 rounded-3xl bg-zinc-900/80 backdrop-blur-xl border border-white/5 overflow-hidden">
                  {/* Background Number */}
                  <div className="absolute -right-4 -top-8 text-[180px] font-bold text-white/[0.02] select-none pointer-events-none">
                    0{index + 1}
                  </div>

                  {/* Top Row */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6 relative z-10">
                    <motion.div 
                      className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Calendar size={18} className="text-emerald-400" />
                      <span className="text-emerald-400 font-bold">{experience.year}</span>
                    </motion.div>

                    <motion.div
                      className="hidden md:flex items-center gap-2 text-zinc-600 group-hover:text-emerald-400 transition-colors"
                      animate={{ x: hoveredExp === index ? 5 : 0 }}
                    >
                      <span className="text-sm font-medium">Details</span>
                      <ArrowRight size={16} />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors duration-300">
                      {experience.role}
                    </h3>
                    
                    <div className="flex items-center gap-2 text-zinc-400 mb-6">
                      <MapPin size={18} className="text-emerald-500/60" />
                      <span className="font-medium text-lg">{experience.company}</span>
                    </div>
                    
                    <p className="text-zinc-400 leading-relaxed mb-8 text-base md:text-lg max-w-3xl">
                      {experience.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-3">
                      {experience.technologies.map((tech, techIndex) => (
                        <motion.span 
                          key={techIndex}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 + techIndex * 0.05 }}
                          viewport={{ once: true }}
                          whileHover={{ 
                            scale: 1.1, 
                            backgroundColor: "rgba(16, 185, 129, 0.2)",
                            borderColor: "rgba(16, 185, 129, 0.5)"
                          }}
                          className="px-5 py-2.5 text-sm font-semibold rounded-xl bg-white/5 text-zinc-300 border border-white/10 transition-all duration-300 cursor-default"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom gradient line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Publication Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", duration: 0.8 }}
              viewport={{ once: true }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 mb-8"
            >
              <BookOpen className="w-8 h-8 text-emerald-400" />
            </motion.div>
            
            <h3 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-4">
              Publication
            </h3>
            <p className="text-zinc-500 text-lg">Peer-reviewed research in IEEE</p>
          </div>

          {/* Publication Card */}
          {PUBLICATIONS.map((pub, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 via-emerald-400/10 to-emerald-500/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
              
              <div className="relative rounded-3xl bg-zinc-900/90 backdrop-blur-xl border border-white/10 overflow-hidden">
                {/* Header bar */}
                <div className="flex flex-wrap items-center justify-between gap-4 px-8 py-5 border-b border-white/10 bg-white/[0.02]">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30">
                      <Award size={16} className="text-emerald-400" />
                      <span className="text-emerald-400 font-bold text-sm">{pub.publisher}</span>
                    </div>
                    <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 text-zinc-400 text-sm">
                      <Trophy size={14} />
                      <span>Published</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-zinc-500 text-sm">
                    <span className="flex items-center gap-2">
                      <Calendar size={14} />
                      {pub.date}
                    </span>
                    <span className="hidden md:flex items-center gap-2">
                      <MapPin size={14} />
                      {pub.location}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 md:p-10">
                  {/* Conference */}
                  <div className="text-emerald-400 text-sm font-medium mb-4">
                    {pub.conference}
                  </div>

                  {/* Title */}
                  <h4 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">
                    {pub.title}
                  </h4>

                  {/* Description */}
                  <p className="text-zinc-400 leading-relaxed mb-10 max-w-4xl">
                    {pub.description}
                  </p>

                  {/* Results */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                    {[
                      { label: "Accuracy", value: pub.results.accuracy, highlight: true },
                      { label: "Precision", value: pub.results.precision },
                      { label: "Recall", value: pub.results.recall },
                      { label: "F1-Score", value: pub.results.f1Score },
                    ].map((stat, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5 }}
                        className={`p-5 rounded-2xl text-center cursor-default transition-all duration-300 ${
                          stat.highlight 
                            ? "bg-emerald-500/15 border border-emerald-500/30" 
                            : "bg-white/[0.03] border border-white/5 hover:border-white/10"
                        }`}
                      >
                        <div className={`text-3xl font-bold mb-1 ${stat.highlight ? "text-emerald-400" : "text-white"}`}>
                          {stat.value}
                        </div>
                        <div className="text-xs text-zinc-500 uppercase tracking-wider">
                          {stat.label}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-10">
                    {pub.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-4 py-2 text-sm rounded-lg bg-zinc-800/80 text-zinc-400 border border-white/5 hover:text-emerald-400 hover:border-emerald-500/30 transition-colors cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-8 border-t border-white/10">
                    <div className="flex items-center gap-3">
                      <span className="text-zinc-600 text-sm">DOI:</span>
                      <code className="px-3 py-1.5 rounded-lg bg-black/50 text-emerald-400/80 text-sm font-mono">
                        {pub.doi}
                      </code>
                    </div>
                    
                    <motion.a
                      href={pub.doiLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 text-black font-bold text-sm hover:bg-emerald-400 transition-colors"
                    >
                      View on IEEE Xplore
                      <ExternalLink size={16} />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
