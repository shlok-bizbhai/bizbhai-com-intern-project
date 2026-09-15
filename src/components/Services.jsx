function Services() {
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-teal text-xs font-semibold uppercase tracking-[0.2em] mb-4 text-center">
          — Three boards, one shopfront
        </p>
        <h2 className="font-display text-4xl md:text-5xl uppercase text-center">
          Everything you need, in one place
        </h2>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="-rotate-1 rounded-2xl bg-marigold text-ink p-7 shadow-xl shadow-black/40">
            <div className="w-11 h-11 rounded-full bg-ink/10 flex items-center justify-center mb-5">
              <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
                <path d="M3 12h18M12 3c2.5 2.7 2.5 15.3 0 18M12 3c-2.5 2.7-2.5 15.3 0 18" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </div>
            <h3 className="font-display text-2xl uppercase">Website</h3>
            <p className="mt-2 text-ink/70">
              A fast, mobile-friendly website that showcases your business and turns visitors into customers.
            </p>
          </div>

          <div className="rotate-1 rounded-2xl bg-teal text-paper p-7 shadow-xl shadow-black/40">
            <div className="w-11 h-11 rounded-full bg-paper/10 flex items-center justify-center mb-5">
              <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                <path d="M12 2C7 2 3 6 3 10.5 3 16 12 22 12 22s9-6 9-11.5C21 6 17 2 12 2Z" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="12" cy="10.5" r="2.5" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </div>
            <h3 className="font-display text-2xl uppercase">Google Business Profile</h3>
            <p className="mt-2 text-paper/70">
              A fully optimized Google listing with photos, posts, and reviews so customers find you first.
            </p>
          </div>

          <div className="-rotate-1 rounded-2xl bg-maroon text-paper p-7 shadow-xl shadow-black/40">
            <div className="w-11 h-11 rounded-full bg-paper/10 flex items-center justify-center mb-5">
              <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                <path
                  d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.6-1.2A9 9 0 1 0 12 3Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path d="M8.5 9.5c0 3.5 2.5 6 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            <h3 className="font-display text-2xl uppercase">WhatsApp Business</h3>
            <p className="mt-2 text-paper/70">
              Answer enquiries, share updates, and stay connected with customers where they already are.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
