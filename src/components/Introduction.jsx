function Introduction() {
  return (
    <section
      id="about"
      className="px-6 py-20 md:px-12 md:py-28 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-end mb-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 mb-5">
              Built for ambitious local businesses
            </p>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Your business deserves
              <br />
              more than just a website.
            </h2>
          </div>

          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
            Your Digital Twin is your complete online business engine —
            website, Google profile, WhatsApp agent, ads, follow-ups,
            reviews and dashboard working together to help customers
            find you, trust you and choose you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="group p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:-translate-y-1 hover:shadow-xl transition">
            <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center text-2xl mb-7">
              🌐
            </div>

            <p className="text-sm font-semibold text-gray-400 mb-2">
              01
            </p>

            <h3 className="text-2xl font-bold mb-4">
              Website
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Professional website with SEO, mobile-ready design
              and fast loading to help customers discover your business.
            </p>
          </div>

          <div className="group p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:-translate-y-1 hover:shadow-xl transition">
            <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center text-2xl mb-7">
              📍
            </div>

            <p className="text-sm font-semibold text-gray-400 mb-2">
              02
            </p>

            <h3 className="text-2xl font-bold mb-4">
              Google Business Profile
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Optimized Google listing with photos, posts, reviews
              and local SEO to improve your online visibility.
            </p>
          </div>

          <div className="group p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:-translate-y-1 hover:shadow-xl transition">
            <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center text-2xl mb-7">
              💬
            </div>

            <p className="text-sm font-semibold text-gray-400 mb-2">
              03
            </p>

            <h3 className="text-2xl font-bold mb-4">
              WhatsApp AI Agent
            </h3>

            <p className="text-gray-600 leading-relaxed">
              24/7 AI assistant for enquiries, bookings, FAQs
              and customer follow-ups.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Introduction