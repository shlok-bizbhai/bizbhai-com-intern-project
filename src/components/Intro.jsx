function Intro() {
  return (
    <section id="intro" className="py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-teal text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            — About
          </p>
          <h2 className="font-display text-4xl md:text-5xl uppercase">
            What is <span className="text-marigold">BizBhAI</span>?
          </h2>
          <p className="mt-4 text-dim text-lg">
            BizBhAI helps small and local businesses build a complete online
            presence — a professional website, an optimized Google Business
            profile, and an always-on WhatsApp Business setup — all in one
            place, without needing a technical team.
          </p>
        </div>

        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <span className="mt-1.5 w-2.5 h-2.5 rotate-45 bg-teal flex-shrink-0" />
            <span className="text-paper">Set up your online presence in days, not months</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1.5 w-2.5 h-2.5 rotate-45 bg-marigold flex-shrink-0" />
            <span className="text-paper">No technical knowledge required</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1.5 w-2.5 h-2.5 rotate-45 bg-maroon flex-shrink-0" />
            <span className="text-paper">Everything managed from one simple dashboard</span>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Intro
