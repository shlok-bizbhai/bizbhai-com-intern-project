const points = [
  'Set up your online presence in days, not months',
  'No technical knowledge required',
  'Everything managed from one simple dashboard',
]

function Intro() {
  return (
    <section id="intro" className="py-20 md:py-28 border-t border-white/5">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            What is <span className="text-blue-500">BizBhAI</span>?
          </h2>
          <p className="mt-4 text-gray-400 text-lg">
            BizBhAI helps small and local businesses build a complete online
            presence — a professional website, an optimized Google Business
            profile, and an always-on WhatsApp Business setup — all in one
            place, without needing a technical team.
          </p>
        </div>

        <ul className="space-y-4">
          {points.map((point) => (
            <li key={point} className="flex items-start gap-3">
              <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
              </span>
              <span className="text-gray-300">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Intro
