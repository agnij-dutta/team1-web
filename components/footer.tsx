import Image from "next/image"
import Link from "next/link"

export function Footer() {
  const footerLinks = {
    DEVELOPERS: ["Get Started", "Avalanche Academy", "Video Tutorials", "Validators", "Documentation", "Blog"],
    INDIVIDUALS: ["Get Started", "Avalanche Explorer", "Support"],
    ENTERPRISE: ["Get Started", "Enterprise Case Study", "The Snow Report", "Support"],
    APPLICATIONS: ["Art and Culture", "Gaming", "Evergreen"],
    COMMUNITY: ["Avalanche Ecosystem", "Media Store", "Avalanche Summit", "Ambassador DAO", "Community Hub"],
  }

  return (
    <footer className="w-full px-6 py-12 bg-black/50 border-t border-primary/20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-6 gap-8">
        <div className="col-span-1">
          <Image
            src="/placeholder.svg?height=40&width=120"
            alt="Avalanche Logo"
            width={120}
            height={40}
            className="mb-4"
          />
          <div className="flex gap-4">
            {["Twitter", "Discord", "GitHub", "LinkedIn", "YouTube"].map((social) => (
              <Link key={social} href="#" className="text-white/60 hover:text-primary-light transition-colors">
                <span className="sr-only">{social}</span>
                <div className="w-6 h-6 rounded-full bg-white/10" />
              </Link>
            ))}
          </div>
        </div>
        {Object.entries(footerLinks).map(([category, links]) => (
          <div key={category} className="col-span-1">
            <h3 className="font-medium text-sm text-white/60 mb-4">{category}</h3>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link}>
                  <Link href="#" className="text-sm text-white hover:text-primary-light transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  )
}

