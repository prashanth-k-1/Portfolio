import { motion } from "framer-motion"
import { useState } from "react"
import { Mail, Phone, MapPin, ArrowUpRight, HelpCircle } from "lucide-react"
import { CONTACT } from "../constants"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    const mailtoLink = `mailto:${CONTACT.email}?subject=Contact from ${formData.name}&body=${formData.message}%0D%0A%0D%0AFrom: ${formData.email}`
    window.location.href = mailtoLink
  }

  const contactCards = [
    {
      icon: Mail,
      title: "Email us",
      text: CONTACT.email,
      href: `mailto:${CONTACT.email}`
    },
    {
      icon: Phone,
      title: "Call us",
      text: CONTACT.phoneNo,
      href: `tel:${CONTACT.phoneNo}`
    },
    {
      icon: MapPin,
      title: "Our location",
      text: CONTACT.address,
      href: "#"
    }
  ]

  return (
    <section className="relative min-h-screen bg-black overflow-hidden pt-40 pb-20" id="contact">
      {/* Emerald glow background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-emerald-500/10 blur-[120px] pointer-events-none" />
      
      {/* Massive background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span className="text-white/[0.02] font-bold text-[20vw] select-none whitespace-nowrap">
          CONTACT
        </span>
      </div>

      {/* Circuit board pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit-contact" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M0 50 H40 M60 50 H100" stroke="white" strokeWidth="0.5" fill="none" opacity="0.3" />
              <path d="M50 0 V40 M50 60 V100" stroke="white" strokeWidth="0.5" fill="none" opacity="0.3" />
              <circle cx="50" cy="50" r="2" fill="white" opacity="0.4" />
              <circle cx="0" cy="50" r="1.5" fill="white" opacity="0.3" />
              <circle cx="100" cy="50" r="1.5" fill="white" opacity="0.3" />
              <circle cx="50" cy="0" r="1.5" fill="white" opacity="0.3" />
              <circle cx="50" cy="100" r="1.5" fill="white" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit-contact)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10 max-w-6xl">
        {/* Main Content - Two Column Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Left Column - Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-zinc-300">
                <HelpCircle size={14} className="text-zinc-400" />
                Contact
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-5xl font-semibold text-white tracking-tight"
            >
              Get in touch
            </motion.h2>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="text-zinc-400 text-lg max-w-md leading-relaxed"
            >
              Have questions or ready to transform your business with AI automation?
            </motion.p>

            {/* Contact Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-4 pt-4"
            >
              {contactCards.map((card, index) => (
                <motion.a
                  key={index}
                  href={card.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="group flex items-center justify-between p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-white/10 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-zinc-800/80 border border-white/10 flex items-center justify-center">
                      <card.icon size={20} className="text-zinc-300" />
                    </div>
                    <div>
                      <p className="text-white font-medium">{card.title}</p>
                      <p className="text-zinc-400 text-sm">{card.text}</p>
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-zinc-800/50 border border-white/5 flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300">
                    <ArrowUpRight 
                      size={16} 
                      className="text-zinc-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" 
                    />
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <form 
              onSubmit={handleSubmit}
              className="p-8 md:p-10 rounded-3xl bg-black/40 backdrop-blur-xl border border-white/10 space-y-6"
            >
              {/* Name Input */}
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  required
                  className="w-full px-5 py-4 rounded-xl bg-white/[0.03] border border-white/5 text-white placeholder-zinc-500 focus:outline-none focus:border-white/20 focus:bg-white/[0.05] transition-all duration-300"
                />
              </div>

              {/* Email Input */}
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                  className="w-full px-5 py-4 rounded-xl bg-white/[0.03] border border-white/5 text-white placeholder-zinc-500 focus:outline-none focus:border-white/20 focus:bg-white/[0.05] transition-all duration-300"
                />
              </div>

              {/* Message Input */}
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  rows={5}
                  required
                  className="w-full px-5 py-4 rounded-xl bg-white/[0.03] border border-white/5 text-white placeholder-zinc-500 focus:outline-none focus:border-white/20 focus:bg-white/[0.05] transition-all duration-300 resize-none"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full py-4 rounded-xl bg-white text-black font-bold text-lg hover:bg-zinc-200 transition-all duration-300"
              >
                Submit
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-24 pt-8 border-t border-white/5"
        >
          <p className="text-zinc-500 text-sm">
            &copy; {new Date().getFullYear()} Chinthaparthi Prashanth Kumar Reddy. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
