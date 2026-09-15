function Hero() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
        <div>
          <p className="text-teal text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            — For shops that mean business
          </p>

          <h1 className="font-display text-6xl md:text-7xl leading-[0.95] uppercase">
            Your dukaan's{' '}
            <span className="text-marigold">digital signboard</span>
          </h1>

          <p className="mt-6 max-w-md text-dim text-lg">
            A website, a Google Business profile, and a WhatsApp Business
            setup — so customers walking past online find you first.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-4">
            <a
              href="#cta"
              className="px-6 py-3 rounded-md bg-marigold text-ink font-semibold text-center hover:brightness-110 transition"
            >
              Get Started Free
            </a>
            <a
              href="#process"
              className="px-6 py-3 rounded-md border border-paper/20 text-paper font-semibold text-center hover:bg-paper/5 transition"
            >
              See How It Works
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="-rotate-3 bg-marigold text-ink rounded-2xl p-10 shadow-2xl shadow-black/50">
            <p className="font-display text-5xl leading-[0.9] uppercase">
              Open
              <br />
              Online
              <br />
              24/7
            </p>
            <p className="mt-4 text-sm font-medium text-ink/70">
              No "shop closed" sign, ever.
            </p>
          </div>
          <div className="absolute -top-5 -right-4 rotate-6 w-16 h-16 rounded-full bg-teal border-4 border-ink" />
        </div>
      </div>
    </section>
  )
}

export default Hero
