function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
        Grow Your Business Online with BizBhAI
      </h1>

      <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-lg">
        We help small businesses build a strong online presence — from websites
        to Google visibility and WhatsApp support, all in one place.
      </p>

      <div className="mt-8 flex justify-center gap-4">

        <a
          href="#cta"
          className="bg-orange-500 text-white font-semibold px-6 py-3 rounded-md hover:bg-orange-600 transition"
        >
          Get Started
        </a>

        <a
          href="#services"
          className="border border-slate-300 text-slate-700 font-semibold px-6 py-3 rounded-md hover:bg-slate-50 transition"
        >
          Our Services
        </a>

      </div>
    </section>
  );
}

export default Hero;