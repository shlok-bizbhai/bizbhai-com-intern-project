import { Mail, MapPin, Phone } from 'lucide-react'
import Logo from './Logo'
import { services } from '../data/services'

const QUICK_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

function Footer() {
  return (
    <footer className="bg-navy-950">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <Logo tone="light" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              Helping businesses build a stronger digital presence.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Quick links</h3>
            <ul className="mt-4 space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-white/60 hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Services</h3>
            <ul className="mt-4 space-y-3">
              {services.map((service) => (
                <li key={service.id}>
                  <a href={`#${service.id}`} className="text-sm text-white/60 hover:text-white">
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Contact</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-white/60">
                <Mail className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                <a href="mailto:hello@bizbhai.com" className="hover:text-white">
                  hello@bizbhai.com
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-white/60">
                <Phone className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                <span>+91 00000 00000</span>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-white/60">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                <span>Add your business address here</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="mx-auto max-w-7xl px-4 py-6 text-center text-sm text-white/55 sm:px-6 lg:px-8">
          © 2026 BizBhAI. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
