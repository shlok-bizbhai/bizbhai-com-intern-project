function Footer() {
  return (
    <footer className="bg-slate-950 px-6 py-12 text-white md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-blue-600 to-indigo-600 text-sm font-bold text-white">
                B
              </div>
              <h2 className="text-2xl font-black tracking-tight">BizBhAI</h2>
            </div>

            <p className="mt-4 max-w-xs text-base text-slate-400">
              Your business ka AI bhai. India’s growth partner for ambitious local brands.
            </p>
          </div>

          <div>
            <h3 className="text-base font-bold text-white">Company</h3>
            <div className="mt-4 flex flex-col gap-3 text-slate-400">
              <a href="#about" className="transition hover:text-white">About</a>
              <a href="#services" className="transition hover:text-white">Services</a>
              <a href="#process" className="transition hover:text-white">How It Works</a>
              <a href="#contact" className="transition hover:text-white">Contact</a>
            </div>
          </div>

          <div>
            <h3 className="text-base font-bold text-white">Get started</h3>
            <p className="mt-4 text-slate-400">
              Ready to build your AI-powered business presence?
            </p>

            <a
              href="#contact"
              className="mt-5 inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
            >
              Get Started
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-6 text-sm text-slate-500">
          <p>© 2026 BizBhAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer