const services = [
  {
    title: "Website Service",
    desc: "A fast, mobile-friendly website that represents your business professionally online.",
  },
  {
    title: "Google Business Profile",
    desc: "Get found on Google Maps and Search with an optimized business profile.",
  },
  {
    title: "WhatsApp Business",
    desc: "Talk to your customers directly and manage orders through WhatsApp Business.",
  },
];

function Services() {
  return (
    <section id="services" className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-slate-900 text-center">Our Services</h2>
      <div className="mt-10 grid md:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service.title}
            className="border border-slate-200 rounded-lg p-6 hover:border-teal-300 transition"
          >
            <h3 className="text-lg font-semibold text-slate-900">{service.title}</h3>
            <p className="mt-2 text-slate-600 text-sm leading-relaxed">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;