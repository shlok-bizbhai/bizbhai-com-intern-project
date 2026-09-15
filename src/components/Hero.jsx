function Hero() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-purple-600/20 blur-3xl" />

      <div className="relative max-w-3xl mx-auto px-6 flex flex-col items-center text-center">
        <span className="mb-6 px-4 py-1.5 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-gray-300">
          Built for local businesses
        </span>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Grow Your Business{' '}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Online with BizBhAI
          </span>
        </h1>

        <p className="mt-6 max-w-xl text-gray-400 text-lg">
          One platform for your website, Google Business profile, and WhatsApp
          Business — so customers can find you, trust you, and choose you.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a
            href="#cta"
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 font-semibold hover:opacity-90 transition"
          >
            Get Started Free
          </a>
          <a
            href="#process"
            className="px-6 py-3 rounded-lg border border-white/15 font-semibold text-gray-200 hover:bg-white/5 transition"
          >
            See How It Works
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
