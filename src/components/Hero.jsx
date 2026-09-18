function Hero() {
  return (
    <section id="home" className="relative overflow-hidden px-6 py-16 md:px-10 md:py-24">
      <div className="absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.14),transparent_55%)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.08fr_0.92fr]">
        <div>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-blue-700">
            <span className="inline-block h-2 w-2 rounded-full bg-blue-600" />
            India’s AI growth platform
          </div>

          <h1 className="max-w-xl text-4xl font-black leading-[1.02] tracking-[-0.06em] text-slate-950 md:text-6xl">
            Turn your business
            <span className="mt-2 block text-transparent bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text">
              into a demand engine.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-slate-600 md:text-xl">
            BizBhAI builds your AI-powered digital twin — website, Google Business profile,
            WhatsApp AI agent, bookings, marketing, inventory intelligence and live dashboard —
            ready in 14 days.
          </p>

          <p className="mt-4 max-w-xl text-base font-medium text-slate-700 md:text-lg">
            We recover lost demand and turn it into bookings, orders, reviews and repeat customers.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-slate-950 px-7 py-3.5 text-base font-semibold text-white shadow-xl shadow-slate-200 transition hover:-translate-y-0.5 hover:bg-slate-800"
            >
              Get Free AI Business Audit
            </a>

            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-7 py-3.5 text-base font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:text-slate-900"
            >
              Explore BizBhAI
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-4 text-sm text-slate-600">
            <div className="rounded-full border border-slate-200 bg-white/60 px-4 py-2 backdrop-blur-sm">
              14-day launch
            </div>
            <div className="rounded-full border border-slate-200 bg-white/60 px-4 py-2 backdrop-blur-sm">
              AI-powered growth
            </div>
            <div className="rounded-full border border-slate-200 bg-white/60 px-4 py-2 backdrop-blur-sm">
              Human-first strategy
            </div>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-130">
            <div className="absolute -inset-6 rounded-4xl bg-linear-to-br from-blue-100 via-white to-indigo-100 blur-2xl" />

            <div className="relative rounded-4xl border border-slate-200 bg-white p-5 shadow-[0_30px_80px_rgba(15,23,42,0.12)]">
              <div className="rounded-3xl bg-linear-to-br from-slate-950 via-slate-900 to-blue-950 p-6 text-white">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-300">BizBhAI</p>
                    <h2 className="mt-1 text-2xl font-bold">Digital Twin</h2>
                  </div>
                  <div className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-300">
                    Live
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-300">Growth</p>
                    <p className="mt-3 text-3xl font-black text-white">5x</p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-300">Launch</p>
                    <p className="mt-3 text-lg font-bold text-white">14 days</p>
                  </div>
                </div>

                <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="mb-3 flex items-center justify-between text-sm text-slate-300">
                    <span>Lead flow</span>
                    <span>+84%</span>
                  </div>
                  <div className="h-2.5 w-full overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-[84%] rounded-full bg-linear-to-r from-blue-400 to-cyan-300" />
                  </div>
                </div>
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-medium text-slate-500">Website</p>
                  <p className="mt-2 text-xl font-bold text-slate-900">SEO + UX</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-medium text-slate-500">AI Agent</p>
                  <p className="mt-2 text-xl font-bold text-slate-900">24/7</p>
                </div>
              </div>
            </div>

            <div className="absolute -left-5 bottom-8 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-xl shadow-slate-200">
              <p className="text-xs uppercase tracking-[0.16em] text-slate-400">Growth</p>
              <p className="mt-1 text-xl font-black text-slate-900">+3.2x</p>
            </div>

            <div className="absolute -right-4 top-6 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-xl shadow-slate-200">
              <p className="text-xs uppercase tracking-[0.16em] text-slate-400">Leads</p>
              <p className="mt-1 text-xl font-black text-blue-600">AI × 5</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero