function Hero() {
  return (
    <section className="bg-slate-900 px-6 py-16 md:py-32">
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">

        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-300">
          AI-Powered Business Growth
        </p>

        <h1 className="text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl">
          Make Your Business
          <span className="block">the Top Choice.</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
          BizBhAI helps businesses build a powerful digital presence with
          AI-powered websites, Google Business profiles, and WhatsApp
          solutions.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <button className="cursor-pointer rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500 hover:scale-[1.02]">
            Get Free AI Business Audit
          </button>

          <button className="cursor-pointer rounded-full border border-slate-600 px-6 py-3 font-semibold text-white transition hover:bg-slate-800 hover:scale-[1.02]">
            Explore Services
          </button>
        </div>

      </div>
    </section>
  )
}

export default Hero