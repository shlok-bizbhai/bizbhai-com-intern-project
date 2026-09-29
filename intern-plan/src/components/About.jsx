function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">What is BizBhAI?</h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            BizBhAI is a digital partner for small and growing businesses. We
            take care of your website, your presence on Google, and your
            customer communication on WhatsApp — so you can focus on running
            your business, not managing your tech.
          </p>
        </div>
        <div className="bg-teal-50 border border-teal-100 rounded-lg p-8">
          <p className="text-teal-800 font-medium">
            "Businesses that go online with a clear digital presence grow faster
            and reach more customers."
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;