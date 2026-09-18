import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'
import Button from './Button'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Small "premium" touch: a subtle shadow once the page has scrolled,
  // instead of a flat border the whole time. A one-off state change,
  // not a continuous animation.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 border-b border-line bg-white/85 backdrop-blur-md transition-shadow duration-200 ${
        scrolled ? 'shadow-[0_1px_0_rgba(11,27,51,0.04),0_8px_24px_-16px_rgba(11,27,51,0.25)]' : ''
      }`}
    >
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 md:h-20 lg:px-8"
        aria-label="Primary"
      >
        <Logo />

        <ul className="hidden items-center gap-9 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[15px] font-medium text-muted transition-colors hover:text-navy-950"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button href="#contact">Get Started</Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-navy-950 md:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Kept mounted and animated via max-height/opacity rather than
          appearing/disappearing instantly. `inert` removes it from the
          tab order and from assistive tech while closed. */}
      <div
        id="mobile-menu"
        inert={!isOpen}
        aria-hidden={!isOpen}
        className={`overflow-hidden border-t border-line bg-white transition-all duration-300 ease-out md:hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col gap-1 px-4 py-4 sm:px-6">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-[15px] font-medium text-ink hover:bg-surface"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <Button href="#contact" className="w-full" onClick={() => setIsOpen(false)}>
              Get Started
            </Button>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Navbar
