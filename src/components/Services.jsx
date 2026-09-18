function Services() {
  const services = [
    {
      icon: "🌐",
      title: "Website Service",
      text: "Professional, mobile-first websites developed around conversion, trust and local search visibility.",
    },
    {
      icon: "📍",
      title: "Google Business Profile",
      text: "Profile optimization that improves discoverability, strengthens your reputation and brings more local calls.",
    },
    {
      icon: "💬",
      title: "WhatsApp Business",
      text: "Smart WhatsApp automations that respond faster, qualify leads and keep buyers engaged in real time.",
    },
  ]

  return (
    <section id="services" className="bg-slate-50 px-6 py-20 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Our Services</p>
          <h2 className="mt-4 text-4xl font-black tracking-[-0.06em] text-slate-950 md:text-5xl">
            Everything your business needs to grow
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            BizBhAI brings together the tools, systems and human strategy that help local businesses win more demand online.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-[0_10px_30px_rgba(15,23,42,0.03)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.08)]"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-4xl shadow-inner shadow-blue-100">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold text-slate-950">{service.title}</h3>
              <p className="mt-4 text-base leading-relaxed text-slate-600">{service.text}</p>

              <a href="#contact" className="mt-6 inline-flex items-center gap-2 font-semibold text-blue-600 transition group-hover:gap-3">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services