const steps = [
  { number: "1", title: "Consultation", desc: "We understand your business and your goals." },
  { number: "2", title: "Setup", desc: "We build your website, profile, and WhatsApp presence." },
  { number: "3", title: "Launch", desc: "Your business goes live and starts reaching customers." },
];

function ProcessSteps() {
  return (
    <section id="process" className="bg-slate-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-slate-900 text-center">How It Works</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="w-10 h-10 mx-auto rounded-full bg-teal-700 text-white flex items-center justify-center font-semibold">
                {step.number}
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{step.title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProcessSteps;