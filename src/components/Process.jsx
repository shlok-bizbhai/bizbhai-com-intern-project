function Process() {
  const steps = [
    {
      number: "01",
      title: "Tell us about your business",
      text: "Share your goals, challenges and what growth looks like for your business right now.",
    },
    {
      number: "02",
      title: "We build your AI setup",
      text: "We create the website, profile, marketing automations and AI systems around your customer journey.",
    },
    {
      number: "03",
      title: "Go live and grow",
      text: "Launch confidently, improve performance and start converting more demand into sales and repeat customers.",
    },
  ]

  return (
    <section id="process" className="bg-white px-6 py-20 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">How it works</p>
          <h2 className="mt-4 text-4xl font-black tracking-[-0.06em] text-slate-950 md:text-5xl">
            Get your business growing in 3 simple steps
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Starting with BizBhAI is straightforward, strategic and built for real-world traction.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-7 text-center shadow-[0_10px_30px_rgba(15,23,42,0.02)]">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-slate-950 text-lg font-bold text-white shadow-lg shadow-slate-200">
                {step.number}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-950">{step.title}</h3>
              <p className="mt-4 text-base leading-relaxed text-slate-600">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process