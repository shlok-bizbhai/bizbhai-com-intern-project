function Navbar() {
  return (
    <header className="w-full border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        <span className="text-xl font-bold text-slate-900">
          BizBhAI
        </span>

        <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
          <a href="#about" className="hover:text-teal-700">
            About
          </a>

          <a href="#services" className="hover:text-teal-700">
            Services
          </a>

          <a href="#process" className="hover:text-teal-700">
            Process
          </a>
        </nav>

        <a
          href="#cta"
          className="bg-teal-700 text-white text-sm font-semibold px-4 py-2 rounded-md hover:bg-teal-800 transition"
        >
          Get Started
        </a>

      </div>
    </header>
  );
}

export default Navbar;