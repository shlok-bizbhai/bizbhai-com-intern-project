import { useState } from "react"

function Navbar() {
  const [menu, setMenu] = useState(false)

  return (
    <nav className="px-6 py-5 border-b">
      <div className="max-w-6xl mx-auto flex items-center justify-between">

        <h1 className="text-2xl font-bold text-blue-600">
          BizBhAI
        </h1>

        <div className="hidden md:flex gap-6 text-gray-600">
          <a href="#home" className="hover:text-blue-600">Home</a>
          <a href="#services" className="hover:text-blue-600">Services</a>
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#process" className="hover:text-blue-600">How It Works</a>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="bg-black text-white px-5 py-2 rounded-full"
          >
            Get Started
          </a>

          <button
            onClick={() => setMenu(!menu)}
            className="md:hidden border px-3 py-2 rounded"
          >
            Menu
          </button>
        </div>

      </div>

      {menu && (
        <div className="md:hidden flex flex-col gap-4 mt-5 text-gray-600">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#process">How It Works</a>
        </div>
      )}
    </nav>
  )
}

export default Navbar