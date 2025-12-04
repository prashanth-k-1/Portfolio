import { motion } from "framer-motion"
import { Code2 } from "lucide-react"

const skills = [
  { name: "React 18", category: "frontend" },
  { name: "Java", category: "language" },
  { name: "PostgreSQL", category: "backend" },
  { name: "TypeScript", category: "language" },
  { name: "JavaScript", category: "language" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Supabase", category: "backend" },
  { name: "REST APIs", category: "backend" },
  { name: "JWT", category: "security" },
  { name: "WebSocket", category: "realtime" },
  { name: "Vite", category: "frontend" },
  { name: "Git", category: "tools" },
  { name: "Razorpay", category: "payments" },
  { name: "Vitest", category: "testing" },
  { name: "Playwright", category: "testing" },
  { name: "TanStack Query", category: "frontend" },
  { name: "Zustand", category: "frontend" },
  { name: "Framer Motion", category: "frontend" },
  { name: "OAuth", category: "security" },
  { name: "RBAC", category: "security" },
  { name: "Row Level Security", category: "backend" },
  { name: "Deno Edge Functions", category: "backend" },
  { name: "PhonePe", category: "payments" },
  { name: "Paytm", category: "payments" },
  { name: "CI/CD", category: "tools" },
  { name: "Vercel", category: "tools" },
  { name: "SQL", category: "language" },
  { name: "HTML5", category: "language" },
  { name: "CSS3", category: "language" },
  { name: "Sentry", category: "tools" },
]

const Technologies = () => {
  return (
    <section className="relative bg-black overflow-hidden py-32" id="technologies">
      {/* Subtle gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-emerald-500/[0.03] blur-[200px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10 max-w-5xl">
        {/* Minimal Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-emerald-400 text-sm tracking-widest uppercase mb-4"
          >
            <Code2 size={14} />
            Skills
          </motion.span>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-light text-white tracking-tight"
          >
            Technologies I use
          </motion.h2>
        </motion.div>

        {/* Masonry Cloud */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.1 + index * 0.02,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05, 
                y: -2,
                transition: { duration: 0.2 }
              }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-emerald-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative px-4 py-2.5 rounded-full bg-white/[0.03] border border-white/[0.06] text-zinc-400 text-sm font-light tracking-wide hover:text-white hover:border-white/20 hover:bg-white/[0.06] transition-all duration-300 cursor-default">
                {skill.name}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Minimal divider line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
        />

        {/* Bottom text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
          className="text-center text-zinc-600 text-sm mt-8 tracking-wide"
        >
          Multi-Tenant SaaS • Domain-Driven Design • Serverless Architecture
        </motion.p>
      </div>
    </section>
  )
}

export default Technologies
