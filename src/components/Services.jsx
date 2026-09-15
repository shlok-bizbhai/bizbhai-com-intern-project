function Services() {
  return (
    <section id="services" className="py-20 md:py-28 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">Everything you need, in one place</h2>
          <p className="mt-4 text-gray-400 text-lg">
            Three core services that build your business's online presence from the ground up.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition">
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4">
              <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-blue-400">
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
                <path d="M3 12h18M12 3c2.5 2.7 2.5 15.3 0 18M12 3c-2.5 2.7-2.5 15.3 0 18" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold">Website</h3>
            <p className="mt-2 text-gray-400">
              A fast, mobile-friendly website that showcases your business and turns visitors into customers.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition">
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4">
              <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-purple-400">
                <path d="M12 2C7 2 3 6 3 10.5 3 16 12 22 12 22s9-6 9-11.5C21 6 17 2 12 2Z" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="12" cy="10.5" r="2.5" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold">Google Business Profile</h3>
            <p className="mt-2 text-gray-400">
              A fully optimized Google listing with photos, posts, and reviews so customers find you first.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition">
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4">
              <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-green-400">
                <path
                  d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.6-1.2A9 9 0 1 0 12 3Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path d="M8.5 9.5c0 3.5 2.5 6 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold">WhatsApp Business</h3>
            <p className="mt-2 text-gray-400">
              Answer enquiries, share updates, and stay connected with customers where they already are.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
