function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full overflow-x-hidden border-b border-slate-800 bg-slate-950">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-3 sm:px-4 md:px-6 py-3 sm:py-4">

        {/* Logo */}
        <div className="flex shrink-0 items-center gap-2">
          <svg
            className="h-8 w-8 sm:h-10 sm:w-10 cursor-pointer"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M12 36V12C12 9.79086 13.7909 8 16 8H24C29.5228 8 34 12.4772 34 18C34 21.1411 32.552 23.9447 30.289 25.7473C33.638 27.219 36 30.6077 36 34.5C36 40.299 31.299 45 25.5 45H16C13.7909 45 12 43.2091 12 41V36Z"
              fill="rgba(37, 99, 235, 0.15)"
              stroke="#2563EB"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="24" cy="18" r="3" fill="#2563EB" />
            <circle cx="25.5" cy="34.5" r="3" fill="#2563EB" />
            <circle cx="12" cy="26" r="3" fill="#2563EB" />
            <path
              d="M12 26L24 18M12 26L25.5 34.5"
              stroke="#2563EB"
              strokeWidth="1.5"
              strokeDasharray="3 3"
            />
          </svg>

          {/* Brand Name */}
          <div className="text-xl sm:text-2xl font-bold cursor-pointer whitespace-nowrap">
            <span className="text-white">Biz</span>
            <span className="text-blue-500">BhAI</span>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#home"
            className="text-sm font-semibold text-white hover:text-blue-300"
          >
            Home
          </a>

          <a
            href="#services"
            className="flex items-center gap-1 text-sm font-semibold text-slate-300 hover:text-white"
          >
            Products
            <span className="text-xs"></span>
          </a>

          <a
            href="#services"
            className="flex items-center gap-1 text-sm font-semibold text-slate-300 hover:text-white"
          >
            Industries
            <span className="text-xs"></span>
          </a>

          <a
            href="#process"
            className="text-sm font-semibold text-slate-300 hover:text-white"
          >
            How It Works
          </a>

          <a
            href="#pricing"
            className="text-sm font-semibold text-slate-300 hover:text-white"
          >
            Pricing
          </a>

          <a
            href="#resources"
            className="flex items-center gap-1 text-sm font-semibold text-slate-300 hover:text-white"
          >
            Resources
            <span className="text-xs"></span>
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          {/* Existing User */}
          <div className="flex flex-col items-center gap-0.5">
            <span className="hidden sm:block text-[11px] text-slate-400">
              Existing user
            </span>

            <button className="h-8 px-3 sm:h-10 sm:w-28 cursor-pointer rounded-full border border-slate-600 text-xs sm:text-sm font-semibold text-white transition hover:border-slate-400 hover:scale-[1.02]">
              Login
            </button>
          </div>

          {/* New User */}
          <div className="flex flex-col items-center gap-0.5">
            <span className="hidden sm:block text-[11px] text-slate-400">
              New user
            </span>

            <button className="flex h-8 px-3 sm:h-10 sm:w-48 cursor-pointer items-center justify-center gap-1 sm:gap-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-xs sm:text-sm font-semibold text-white transition hover:scale-[1.02]">
              <span className="text-xs sm:text-base">✧</span>
              <span className="hidden sm:inline">Explore BizBhAI</span>
              <span className="sm:hidden">Explore</span>
              <span>→</span>
            </button>
          </div>
        </div>

      </div>
    </nav>
  )
}

export default Navbar