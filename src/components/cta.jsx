
import { ArrowRight } from "lucide-react";

function CTA({ setShowModal }) {
  return (
    <section className="px-6 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-[#172554] px-7 py-14 text-center text-white sm:px-12 lg:px-20 lg:py-20">

        <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-medium">
          Ready to get started?
        </span>

        <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
          Give your business the digital presence it deserves.
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/60">
          Start with the essentials and build a stronger connection with
          your customers.
        </p>

        <button
          onClick={() => setShowModal(true)}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#F97360] px-7 py-4 font-bold text-white transition hover:-translate-y-1"
        >
          Get Started
          <ArrowRight size={18} />
        </button>

      </div>
    </section>
  );
}

export default CTA;