import { useState } from "react"

function Navbar() {
  const [menu, setMenu] = useState(false)

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <a href="#home" className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-blue-600 to-indigo-600 text-sm font-bold text-white shadow-lg shadow-blue-200">
            B
          </div>
          <div>
            <span className="block text-lg font-black tracking-tight text-slate-900">
              BizBhAI
            </span>
          </div>
        </a>

        <div className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          <a href="#home" className="transition hover:text-blue-600">Home</a>
          <a href="#services" className="transition hover:text-blue-600">Services</a>
          <a href="#about" className="transition hover:text-blue-600">About</a>
          <a href="#process" className="transition hover:text-blue-600">How It Works</a>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-slate-200 transition hover:-translate-y-0.5 hover:bg-slate-800 sm:inline-flex"
          >
            Get Started
          </a>

          <button
            onClick={() => setMenu(!menu)}
            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-3.5 py-2 text-sm font-medium text-slate-700 md:hidden"
            aria-label="Toggle menu"
          >
            Menu
          </button>
        </div>
      </div>

      {menu && (
        <div className="border-t border-slate-200 bg-white px-6 py-4 md:hidden">
          <div className="flex flex-col gap-3 text-sm font-medium text-slate-600">
            <a href="#home" onClick={() => setMenu(false)}>Home</a>
            <a href="#services" onClick={() => setMenu(false)}>Services</a>
            <a href="#about" onClick={() => setMenu(false)}>About</a>
            <a href="#process" onClick={() => setMenu(false)}>How It Works</a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar