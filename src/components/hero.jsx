
import {
  ArrowRight,
  Globe,
  MapPin,
  MessageCircle,
  ChevronRight,
} from "lucide-react";

function Hero({ setShowModal, scrollTo }) {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#FFFBF5] pt-32 pb-16 lg:pt-40 lg:pb-20"
    >
      {/* Decorative circles */}
      <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#F97360]/10" />
      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#172554]/5" />

      <div className="relative mx-auto max-w-6xl px-6 text-center lg:px-10">

        {/* Small heading */}
        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#F97360]/30 bg-white px-5 py-2.5 text-sm font-semibold shadow-sm">
          <span className="h-2.5 w-2.5 rounded-full bg-[#F97360]" />
          Digital solutions for growing businesses
        </div>

        {/* Main heading */}
        <h1 className="mx-auto max-w-4xl text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
          Your business deserves
          <span className="block text-[#F97360]">
            to be seen.
          </span>
        </h1>

        {/* Description */}
        <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-[#172554]/60 sm:text-xl">
          BizBhAI helps businesses build a professional digital presence,
          reach more customers, and stay connected online.
        </p>

        {/* Buttons */}
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">

          <button
            onClick={() => setShowModal(true)}
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#172554] px-8 py-4 font-semibold text-white shadow-lg shadow-[#172554]/15 transition duration-300 hover:-translate-y-1 hover:bg-[#24366d]"
          >
            Get Started

            <ArrowRight
              size={18}
              className="transition group-hover:translate-x-1"
            />
          </button>

          <button
            onClick={() => scrollTo("services")}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-[#172554]/15 bg-white px-8 py-4 font-semibold transition duration-300 hover:-translate-y-1 hover:border-[#F97360] hover:text-[#F97360]"
          >
            Explore Services
            <ChevronRight size={18} />
          </button>

        </div>

        {/* Service Preview */}
        <div className="mx-auto mt-16 max-w-4xl">

          <div className="grid overflow-hidden rounded-3xl border border-[#172554]/10 bg-white shadow-xl shadow-[#172554]/5 sm:grid-cols-3">

            {/* Website */}
            <div className="flex items-center gap-4 border-b border-[#172554]/10 p-6 text-left sm:border-b-0 sm:border-r">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#172554] text-white">
                <Globe size={22} />
              </div>

              <div>
                <h3 className="font-bold">
                  Website
                </h3>

                <p className="mt-1 text-sm text-[#172554]/50">
                  Look professional online
                </p>
              </div>
            </div>

            {/* Google */}
            <div className="flex items-center gap-4 border-b border-[#172554]/10 p-6 text-left sm:border-b-0 sm:border-r">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#F97360] text-white">
                <MapPin size={22} />
              </div>

              <div>
                <h3 className="font-bold">
                  Google Business
                </h3>

                <p className="mt-1 text-sm text-[#172554]/50">
                  Become easier to discover
                </p>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex items-center gap-4 p-6 text-left">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#172554] text-white">
                <MessageCircle size={22} />
              </div>

              <div>
                <h3 className="font-bold">
                  WhatsApp Business
                </h3>

                <p className="mt-1 text-sm text-[#172554]/50">
                  Stay connected with customers
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;