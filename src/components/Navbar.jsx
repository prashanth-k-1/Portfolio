import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Download, Github, Linkedin, Mail } from "lucide-react"

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Skills", href: "#technologies" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Update active section based on scroll position
      const sections = navLinks.map(link => link.href.substring(1))
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const targetId = href.substring(1)
    const element = document.getElementById(targetId)
    if (element) {
      const navbarHeight = 100 // Account for fixed navbar
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      const offsetPosition = elementPosition - navbarHeight

      window.scrollTo({
        top: targetId === "home" ? 0 : offsetPosition,
        behavior: "smooth"
      })
    }
    setIsOpen(false)
  }

  return (
    <>
      {/* Desktop Navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 hidden md:flex justify-center transition-all duration-500 ${
          scrolled ? "pt-4" : "pt-6"
        }`}
      >
        <div className={`flex items-center gap-1 px-2 py-2 rounded-full backdrop-blur-xl transition-all duration-500 ${
          scrolled 
            ? "bg-zinc-900/80 border border-white/10 shadow-2xl shadow-black/20" 
            : "bg-zinc-900/60 border border-white/5"
        }`}>
          {/* Logo */}
          <a 
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="px-4 py-2 text-lg font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent"
          >
            CPKR
          </a>

          {/* Divider */}
          <div className="w-px h-6 bg-white/10" />

          {/* Nav Links */}
          <div className="flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
                  activeSection === link.href.substring(1)
                    ? "text-white"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {activeSection === link.href.substring(1) && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 bg-white/10 rounded-full"
                    transition={{ type: "spring", duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-px h-6 bg-white/10" />

          {/* Resume Button */}
          <a
            href="/FinalResume.pdf"
            download
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500 text-black text-sm font-medium hover:bg-emerald-400 transition-colors"
          >
            <Download size={14} />
            Resume
          </a>
        </div>
      </motion.nav>

      {/* Mobile Navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-4 left-4 right-4 z-50 md:hidden"
      >
        <div className="flex items-center justify-between px-4 py-3 rounded-2xl bg-zinc-900/80 backdrop-blur-xl border border-white/10">
          {/* Logo */}
          <a 
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="text-lg font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent"
          >
            CPKR
          </a>

          {/* Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            {isOpen ? (
              <X size={20} className="text-white" />
            ) : (
              <Menu size={20} className="text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 mt-2 p-4 rounded-2xl bg-zinc-900/95 backdrop-blur-xl border border-white/10"
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                      activeSection === link.href.substring(1)
                        ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                        : "text-zinc-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link.name}
                  </a>
                ))}

                {/* Divider */}
                <div className="h-px bg-white/10 my-2" />

                {/* Social Links */}
                <div className="flex items-center justify-center gap-4 py-2">
                  <a
                    href="https://github.com/prashanth-k-1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    <Github size={18} className="text-zinc-400" />
                  </a>
                  <a
                    href="https://linkedin.com/in/cprashanthkr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    <Linkedin size={18} className="text-zinc-400" />
                  </a>
                  <a
                    href="mailto:prashanthkr7799@gmail.com"
                    className="p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    <Mail size={18} className="text-zinc-400" />
                  </a>
                </div>

                {/* Resume Button */}
                <a
                  href="/FinalResume.pdf"
                  download
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-500 text-black text-sm font-medium hover:bg-emerald-400 transition-colors mt-2"
                >
                  <Download size={14} />
                  Download Resume
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  )
}

export default Navbar
