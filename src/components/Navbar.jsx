function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0a0e17]/80 backdrop-blur">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold">
            Biz<span className="text-blue-500">BhAI</span>
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-300">
          <a href="#intro" className="hover:text-white transition">About</a>
          <a href="#services" className="hover:text-white transition">Services</a>
          <a href="#process" className="hover:text-white transition">How It Works</a>
        </nav>

        <a
          href="#cta"
          className="px-4 py-2 rounded-lg text-sm font-semibold bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 transition"
        >
          Get Started
        </a>
      </div>
    </header>
  )
}

export default Navbar
