function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-ink/90 backdrop-blur border-b border-paper/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="font-display text-2xl tracking-wide">
          Biz<span className="text-marigold">BhAI</span>
        </span>

        <nav className="hidden md:flex items-center gap-8 text-sm text-dim">
          <a href="#intro" className="hover:text-paper transition">About</a>
          <a href="#services" className="hover:text-paper transition">Services</a>
          <a href="#process" className="hover:text-paper transition">How It Works</a>
        </nav>

        <a
          href="#cta"
          className="px-4 py-2 rounded-md text-sm font-semibold bg-marigold text-ink hover:brightness-110 transition"
        >
          Get Started
        </a>
      </div>
    </header>
  )
}

export default Navbar
