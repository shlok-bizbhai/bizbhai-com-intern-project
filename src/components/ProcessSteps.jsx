function ProcessSteps() {
  return (
    <section id="process" className="py-20 md:py-28 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">How it works</h2>
          <p className="mt-4 text-gray-400 text-lg">Three simple steps to get your business online.</p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-8">
          <div className="relative pl-2">
            <span className="text-5xl font-extrabold text-white/10">01</span>
            <h3 className="mt-3 text-xl font-semibold">Tell us about your business</h3>
            <p className="mt-2 text-gray-400">Share a few details about what you do and who your customers are.</p>
          </div>

          <div className="relative pl-2">
            <span className="text-5xl font-extrabold text-white/10">02</span>
            <h3 className="mt-3 text-xl font-semibold">We build your online presence</h3>
            <p className="mt-2 text-gray-400">Your website, Google profile, and WhatsApp Business get set up and optimized.</p>
          </div>

          <div className="relative pl-2">
            <span className="text-5xl font-extrabold text-white/10">03</span>
            <h3 className="mt-3 text-xl font-semibold">You go live and grow</h3>
            <p className="mt-2 text-gray-400">Customers start finding you online, and you manage it all from one dashboard.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProcessSteps
