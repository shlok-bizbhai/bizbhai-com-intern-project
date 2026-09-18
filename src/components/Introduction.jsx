function Introduction() {
  return (
    <section id="about" className="px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 grid items-end gap-10 lg:grid-cols-2">
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Built for ambitious local businesses
            </p>

            <h2 className="text-4xl font-black leading-tight tracking-[-0.06em] text-slate-950 md:text-5xl">
              Your business deserves
              <span className="mt-2 block text-slate-700">more than a website.</span>
            </h2>
          </div>

          <p className="max-w-xl text-lg leading-relaxed text-slate-600 md:text-xl">
            Your digital twin is your complete online growth engine — website, Google profile,
            WhatsApp agent, ad strategy, reviews and dashboard working together to help customers
            find you, trust you and choose you.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              number: "01",
              title: "Website",
              text: "Professional, conversion-focused websites built to load fast and turn visitor traffic into real inquiries.",
              emoji: "🌐",
            },
            {
              number: "02",
              title: "Google Business Profile",
              text: "Optimized local visibility with better discoverability, reviews and a stronger first impression.",
              emoji: "📍",
            },
            {
              number: "03",
              title: "WhatsApp AI Agent",
              text: "A 24/7 assistant for enquiries, bookings, FAQs and follow-ups that keeps revenue moving.",
              emoji: "💬",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="group rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-[0_10px_30px_rgba(15,23,42,0.03)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.08)]"
            >
              <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-2xl shadow-inner shadow-blue-100">
                {item.emoji}
              </div>

              <p className="mb-2 text-sm font-semibold tracking-[0.16em] text-slate-400">{item.number}</p>
              <h3 className="mb-4 text-2xl font-bold text-slate-950">{item.title}</h3>
              <p className="text-base leading-relaxed text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Introduction