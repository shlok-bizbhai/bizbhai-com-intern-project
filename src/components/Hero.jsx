function Hero() {
  return (
    <section
  id="home"
  className="px-6 py-16 md:px-12 md:py-24 bg-gray-50"
>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 mb-6">
            ✦ India's Most Complete AI Growth Platform
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Make Your Business
            <br />
            the Top Choice
            <br />
            with{" "}
            <span className="text-blue-600">
              BizBhAI 5x
            </span>
          </h1>

          <p className="mt-8 text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
            BizBhAI builds your AI-powered Digital Twin — website,
            Google Business profile, WhatsApp AI agent, bookings,
            marketing campaigns, inventory intelligence and dashboard —
            live in 14 days.
          </p>

          <p className="mt-5 text-base md:text-lg font-medium text-gray-800 max-w-xl">
            We recover lost demand and turn it into bookings, orders,
            reviews and repeat customers.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="bg-black text-white px-6 py-3 rounded-full text-center"
            >
              Get Free AI Business Audit →
            </a>

            <a
              href="#services"
              className="border border-gray-300 px-6 py-3 rounded-full text-center"
            >
              Explore BizBhAI
            </a>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative w-full max-w-lg">
            <div className="aspect-square rounded-4xl bg-white border border-gray-200 shadow-2xl flex items-center justify-center">
              <div className="text-center px-10">
                <div className="w-24 h-24 mx-auto rounded-3xl bg-blue-100 flex items-center justify-center text-5xl mb-7">
                  🤖
                </div>

                <h2 className="text-3xl font-bold mb-3">
                  BizBhAI
                </h2>

                <p className="text-gray-500 text-lg">
                  Your AI-powered Digital Twin
                </p>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-5 bg-black text-white px-6 py-4 rounded-2xl shadow-xl">
              <p className="text-sm text-gray-400">
                Launch faster
              </p>

              <p className="font-bold">
                Live in 14 days
              </p>
            </div>

            <div className="absolute -top-5 -right-5 bg-white border border-gray-200 px-6 py-4 rounded-2xl shadow-lg">
              <p className="text-sm text-gray-500">
                Growth powered by
              </p>

              <p className="font-bold text-blue-600">
                AI × 5
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero