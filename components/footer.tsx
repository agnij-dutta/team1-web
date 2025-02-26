"use client"
import { BrandLogo } from "./brand-logo"
import { motion } from "framer-motion"

export function Footer() {
  const footerLinks = {
    DEVELOPERS: ["Get Started", "Avalanche Academy", "Video Tutorials", "Validators", "Documentation", "Blog"],
    INDIVIDUALS: ["Get Started", "Avalanche Explorer", "Support"],
    ENTERPRISE: ["Get Started", "Enterprise Case Study", "The Snow Report", "Support"],
    APPLICATIONS: ["Art and Culture", "Gaming", "Evergreen"],
    COMMUNITY: ["Avalanche Ecosystem", "Media Store", "Avalanche Summit", "Ambassador DAO", "Community Hub"],
  }

  return (
    <footer className="w-full px-6 py-12 bg-black/50 border-t border-red-500/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start justify-between gap-12 mb-12">
          <motion.div 
            className="flex-shrink-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <BrandLogo className="w-32 h-32 filter drop-shadow-glow" />
            <p className="mt-4 text-sm text-gray-400 max-w-xs">
              Empowering the future of decentralized communities through innovative blockchain solutions.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 w-full">
            {Object.entries(footerLinks).map(([category, links], index) => (
              <motion.div 
                key={category} 
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-sm font-bold text-red-400/90 font-display">{category}</h3>
                <ul className="space-y-2">
                  {links.map((link, linkIndex) => (
                    <motion.li 
                      key={link}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: (index * 0.1) + (linkIndex * 0.05) }}
                    >
                      <a 
                        href="#" 
                        className="text-sm text-gray-400 hover:text-red-400 transition-colors duration-200 flex items-center group"
                      >
                        <span className="relative">
                          {link}
                          <span className="absolute left-0 bottom-0 w-0 h-px bg-red-400 transition-all duration-200 group-hover:w-full" />
                        </span>
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
        
        <motion.div 
          className="border-t border-red-500/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-sm text-gray-400">© 2025 Avalanche. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-gray-400 hover:text-red-400 transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="text-sm text-gray-400 hover:text-red-400 transition-colors duration-200">Terms of Service</a>
          </div>
        </motion.div>
      </div>
      
      <style jsx>{`
        .drop-shadow-glow {
          filter: drop-shadow(0 0 20px rgba(239, 68, 68, 0.2));
        }
      `}</style>
    </footer>
  )
}

