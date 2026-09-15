function Footer() {
  return (
    <footer className="border-t border-paper/10 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <span className="font-display text-xl tracking-wide">
          Biz<span className="text-marigold">BhAI</span>
        </span>

        <nav className="flex gap-6 text-sm text-dim">
          <a href="#intro" className="hover:text-paper transition">About</a>
          <a href="#services" className="hover:text-paper transition">Services</a>
          <a href="#process" className="hover:text-paper transition">How It Works</a>
        </nav>

        <p className="text-sm text-dim">
          &copy; {new Date().getFullYear()} BizBhAI. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
