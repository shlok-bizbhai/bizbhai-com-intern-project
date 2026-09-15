function Services() {
  return (
    <section id="services" className="px-6 py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto">

        <div className="text-center">
          <p className="text-blue-600 font-semibold">
            Our Services
          </p>

          <h2 className="text-4xl font-bold mt-3">
            Everything Your Business Needs to Grow
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            BizBhAI provides simple AI-powered solutions to help
            businesses grow online and reach more customers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">

          <div className="bg-white p-8 rounded-2xl border">
            <div className="text-4xl">
              🌐
            </div>

            <h3 className="text-2xl font-bold mt-6">
              Website Service
            </h3>

            <p className="text-gray-600 mt-4">
              Get a professional and mobile-friendly website
              for your business.
            </p>

            <a
              href="#contact"
              className="inline-block mt-6 font-semibold"
            >
              Learn More →
            </a>
          </div>

          <div className="bg-white p-8 rounded-2xl border">
            <div className="text-4xl">
              📍
            </div>

            <h3 className="text-2xl font-bold mt-6">
              Google Business Profile
            </h3>

            <p className="text-gray-600 mt-4">
              Improve your Google presence and help more local
              customers find your business.
            </p>

            <a
              href="#contact"
              className="inline-block mt-6 font-semibold"
            >
              Learn More →
            </a>
          </div>

          <div className="bg-white p-8 rounded-2xl border">
            <div className="text-4xl">
              💬
            </div>

            <h3 className="text-2xl font-bold mt-6">
              WhatsApp Business
            </h3>

            <p className="text-gray-600 mt-4">
              Use WhatsApp to answer customer questions,
              manage enquiries and follow up with customers.
            </p>

            <a
              href="#contact"
              className="inline-block mt-6 font-semibold"
            >
              Learn More →
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Services