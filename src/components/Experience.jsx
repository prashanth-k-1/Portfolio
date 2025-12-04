import { EXPERIENCES, PUBLICATIONS } from "../constants"
import { motion } from "framer-motion"
import { Briefcase, Calendar, MapPin, BookOpen, ExternalLink, Award } from "lucide-react"

const Experience = () => {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden py-24" id="experience">
      {/* Emerald glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-emerald-500/10 blur-[120px] pointer-events-none" />
      
      {/* Massive background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span className="text-white/[0.02] font-bold text-[20vw] select-none whitespace-nowrap">
          EXPERIENCE
        </span>
      </div>

      {/* Circuit board pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit-exp" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M0 50 H40 M60 50 H100" stroke="white" strokeWidth="0.5" fill="none" opacity="0.3" />
              <path d="M50 0 V40 M50 60 V100" stroke="white" strokeWidth="0.5" fill="none" opacity="0.3" />
              <circle cx="50" cy="50" r="2" fill="white" opacity="0.4" />
              <circle cx="0" cy="50" r="1.5" fill="white" opacity="0.3" />
              <circle cx="100" cy="50" r="1.5" fill="white" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit-exp)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10 max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Badge */}
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-zinc-300 mb-6">
            <Briefcase size={14} className="text-emerald-400" />
            Career Journey
          </span>
          
          <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-4">
            Work Experience
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            My professional journey building scalable applications and solving complex problems
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500/50 via-white/20 to-transparent md:-translate-x-1/2" />

          <div className="space-y-12">
            {EXPERIENCES.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 -translate-x-1/2 md:-translate-x-1/2 z-10">
                  <div className="w-4 h-4 rounded-full bg-emerald-500 ring-4 ring-black shadow-lg shadow-emerald-500/30" />
                </div>

                {/* Date - Hidden on mobile, shown on desktop */}
                <div className={`hidden md:flex md:w-1/2 ${
                  index % 2 === 0 ? "justify-end pr-12" : "justify-start pl-12"
                }`}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.2 + 0.2 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20"
                  >
                    <Calendar size={14} className="text-emerald-400" />
                    <span className="text-emerald-400 font-semibold">{experience.year}</span>
                  </motion.div>
                </div>

                {/* Content Card */}
                <div className={`md:w-1/2 pl-8 md:pl-0 ${
                  index % 2 === 0 ? "md:pl-12" : "md:pr-12"
                }`}>
                  {/* Mobile Date */}
                  <div className="flex md:hidden items-center gap-2 mb-4">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                      <Calendar size={12} className="text-emerald-400" />
                      <span className="text-emerald-400 font-semibold text-sm">{experience.year}</span>
                    </div>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                    className="p-6 md:p-8 rounded-2xl bg-white/[0.02] backdrop-blur-sm border border-white/5 hover:bg-white/[0.05] hover:border-white/10 transition-all duration-300 group"
                  >
                    {/* Role */}
                    <h3 className="text-xl md:text-2xl font-semibold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                      {experience.role}
                    </h3>
                    
                    {/* Company */}
                    <div className="flex items-center gap-2 text-zinc-400 mb-4">
                      <MapPin size={14} />
                      <span className="text-sm font-medium">{experience.company}</span>
                    </div>
                    
                    {/* Description */}
                    <p className="text-zinc-400 leading-relaxed mb-6">
                      {experience.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1.5 text-xs font-medium rounded-lg bg-zinc-800/80 text-zinc-300 border border-white/5 hover:border-emerald-500/30 hover:text-emerald-400 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* IEEE Publication Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          {/* Publication Header */}
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-zinc-300 mb-6">
              <BookOpen size={14} className="text-emerald-400" />
              Research & Publication
            </span>
            <h3 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
              IEEE Publication
            </h3>
          </div>

          {/* Publication Card */}
          {PUBLICATIONS.map((pub, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-emerald-500/5 blur-3xl rounded-3xl" />
              
              <div className="relative p-8 md:p-10 rounded-3xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur-sm border border-white/10 hover:border-emerald-500/30 transition-all duration-300">
                {/* IEEE Badge */}
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium">
                    <Award size={14} />
                    {pub.publisher} Published
                  </span>
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-800/80 border border-white/10 text-zinc-300 text-sm">
                    <Calendar size={14} />
                    {pub.date}
                  </span>
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-800/80 border border-white/10 text-zinc-300 text-sm">
                    <MapPin size={14} />
                    {pub.location}
                  </span>
                </div>

                {/* Title */}
                <h4 className="text-2xl md:text-3xl font-semibold text-white mb-3">
                  {pub.title}
                </h4>

                {/* Conference */}
                <p className="text-emerald-400 font-medium mb-4">
                  {pub.conference}
                </p>

                {/* Description */}
                <p className="text-zinc-400 leading-relaxed mb-6 max-w-3xl">
                  {pub.description}
                </p>

                {/* Model Results */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-center">
                    <div className="text-2xl font-bold text-emerald-400">{pub.results.accuracy}</div>
                    <div className="text-xs text-zinc-400 mt-1">Accuracy</div>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                    <div className="text-2xl font-bold text-white">{pub.results.precision}</div>
                    <div className="text-xs text-zinc-400 mt-1">Precision</div>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                    <div className="text-2xl font-bold text-white">{pub.results.recall}</div>
                    <div className="text-xs text-zinc-400 mt-1">Recall</div>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                    <div className="text-2xl font-bold text-white">{pub.results.f1Score}</div>
                    <div className="text-xs text-zinc-400 mt-1">F1-Score</div>
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {pub.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1.5 text-xs font-medium rounded-lg bg-zinc-800/80 text-zinc-300 border border-white/5 hover:border-emerald-500/30 hover:text-emerald-400 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* DOI Link */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="flex items-center gap-2 text-zinc-500 text-sm">
                    <span className="font-medium">DOI:</span>
                    <code className="px-2 py-1 rounded bg-zinc-800/80 text-zinc-300 text-xs">
                      {pub.doi}
                    </code>
                  </div>
                  <a
                    href={pub.doiLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-colors w-fit"
                  >
                    View on IEEE Xplore
                    <ExternalLink size={14} />
                  </a>
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
