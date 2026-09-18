function Introduction() {
  return (
    <section
      id="about"
      className="bg-[#172554] py-20 text-white lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-2">

          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F97360]">
              About BizBhAI
            </span>

            <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              Helping businesses build
              <span className="block text-[#F97360]">
                their digital presence.
              </span>
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-white/70">
              BizBhAI is a digital business solution platform designed to
              help businesses establish and strengthen their presence online.
            </p>

            <p className="mt-5 text-lg leading-8 text-white/70">
              We focus on essential digital solutions that help businesses
              present themselves professionally, become easier to discover,
              and communicate effectively with their customers.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm">
                Digital Presence
              </span>

              <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm">
                Business Visibility
              </span>

              <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm">
                Customer Connection
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Introduction;