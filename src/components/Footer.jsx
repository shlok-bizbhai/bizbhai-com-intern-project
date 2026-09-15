function Footer() {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center font-bold text-sm">
            B
          </div>
          <span className="font-bold">
            Biz<span className="text-blue-500">BhAI</span>
          </span>
        </div>

        <nav className="flex gap-6 text-sm text-gray-400">
          <a href="#intro" className="hover:text-white transition">About</a>
          <a href="#services" className="hover:text-white transition">Services</a>
          <a href="#process" className="hover:text-white transition">How It Works</a>
        </nav>

        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} BizBhAI. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
