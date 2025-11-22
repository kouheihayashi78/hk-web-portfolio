import { Github, Twitter, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { name: 'GitHub', icon: Github, href: 'https://github.com/kouheihayashi78' },
    { name: 'X', icon: Twitter, href: 'https://x.com/kouhei155048' },
    { name: 'Email', icon: Mail, href: 'mailto:kouhei.basketball7.8@gmail.com' },
  ]

  return (
    <footer className="border-t border-gray-100 bg-white py-12">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-8 px-6 md:flex-row lg:px-8">
        <div className="text-center md:text-left">
          <p className="text-sm text-gray-600">
            &copy; {currentYear} HK Portfolio. All rights reserved.
          </p>
        </div>

        <div className="flex gap-6">
          {socialLinks.map((link) => {
            const Icon = link.icon
            return (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full p-3 text-gray-600 transition-all duration-500 hover:bg-teal-50 hover:text-teal-600"
                aria-label={link.name}
              >
                <Icon className="h-5 w-5" />
              </a>
            )
          })}
        </div>
      </div>
    </footer>
  )
}
