function ProcessSteps() {
  return (
    <section id="process" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-teal text-xs font-semibold uppercase tracking-[0.2em] mb-4 text-center">
          — How it works
        </p>
        <h2 className="font-display text-4xl md:text-5xl uppercase text-center">
          Three steps to go live
        </h2>

        <div className="mt-14 grid md:grid-cols-3 gap-10">
          <div>
            <span className="font-display text-6xl text-teal">01</span>
            <div className="mt-2 h-px bg-paper/15" />
            <h3 className="mt-4 text-xl font-semibold">Tell us about your business</h3>
            <p className="mt-2 text-dim">Share a few details about what you do and who your customers are.</p>
          </div>

          <div>
            <span className="font-display text-6xl text-marigold">02</span>
            <div className="mt-2 h-px bg-paper/15" />
            <h3 className="mt-4 text-xl font-semibold">We build your online presence</h3>
            <p className="mt-2 text-dim">Your website, Google profile, and WhatsApp Business get set up and optimized.</p>
          </div>

          <div>
            <span className="font-display text-6xl text-maroon">03</span>
            <div className="mt-2 h-px bg-paper/15" />
            <h3 className="mt-4 text-xl font-semibold">You go live and grow</h3>
            <p className="mt-2 text-dim">Customers start finding you online, and you manage it all from one dashboard.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProcessSteps
