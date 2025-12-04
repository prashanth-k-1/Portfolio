import { PROJECTS } from "../constants"
import { motion } from "framer-motion"
import { FolderOpen, ExternalLink, Github, ArrowUpRight } from "lucide-react"

const Projects = () => {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden py-24" id="projects">
      {/* Emerald glow background */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-emerald-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500/5 blur-[100px] pointer-events-none" />

      {/* Massive background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span className="text-white/[0.02] font-bold text-[18vw] select-none whitespace-nowrap">
          PROJECTS
        </span>
      </div>

      {/* Circuit board pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit-proj" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M0 40 H35 M45 40 H80" stroke="white" strokeWidth="0.5" fill="none" opacity="0.3" />
              <path d="M40 0 V35 M40 45 V80" stroke="white" strokeWidth="0.5" fill="none" opacity="0.3" />
              <circle cx="40" cy="40" r="2" fill="white" opacity="0.4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit-proj)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/60 backdrop-blur-md border border-white/10 text-sm text-zinc-300">
              <FolderOpen size={14} className="text-emerald-400" />
              Featured Work
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white tracking-tight mb-6">
            Projects I&apos;ve Built
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Showcasing real-world applications with modern architecture and clean code
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Card */}
              <div className="h-full p-6 md:p-8 rounded-2xl bg-zinc-900/40 backdrop-blur-md border border-white/5 hover:border-emerald-500/30 hover:bg-white/[0.05] transition-all duration-500">
                {/* Image */}
                <div className="relative mb-6 rounded-xl overflow-hidden bg-zinc-800/50">
                  <div className="aspect-video relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Hover Links */}
                    <div className="absolute bottom-4 left-4 right-4 flex gap-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500 text-black font-medium text-sm hover:bg-emerald-400 transition-colors"
                        >
                          <ExternalLink size={14} />
                          Live Demo
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm text-white font-medium text-sm hover:bg-white/20 transition-colors"
                        >
                          <Github size={14} />
                          Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  {/* Title with arrow */}
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl md:text-2xl font-semibold text-white group-hover:text-emerald-400 transition-colors">
                      {project.title}
                    </h3>
                    <ArrowUpRight 
                      size={20} 
                      className="text-zinc-600 group-hover:text-emerald-400 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 flex-shrink-0 mt-1" 
                    />
                  </div>

                  {/* Description */}
                  <p className="text-zinc-400 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/5 text-zinc-400 text-xs font-medium hover:bg-emerald-500/10 hover:text-emerald-400 hover:border-emerald-500/20 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="https://github.com/prashanth-k-1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-zinc-900/60 backdrop-blur-md border border-white/10 text-white font-medium hover:border-emerald-500/30 hover:bg-white/[0.05] transition-all duration-300 group"
          >
            <Github size={18} />
            <span>View More on GitHub</span>
            <ArrowUpRight size={16} className="text-emerald-400 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
