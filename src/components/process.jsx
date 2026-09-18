
import { ChevronRight } from "lucide-react";

function Process({ steps }) {
  return (
    <section
      id="process"
      className="border-y border-[#172554]/10 bg-white py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

       
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F97360]">
            Our Process
          </span>

          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Simple steps. Real progress.
          </h2>
        </div>

        
        <div className="mt-14 grid gap-6 lg:grid-cols-3">

          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative rounded-3xl bg-[#FFFBF5] p-8"
            >
              <span className="text-6xl font-extrabold text-[#172554]/10">
                {step.number}
              </span>

              <h3 className="mt-4 text-2xl font-bold">
                {step.title}
              </h3>

              <p className="mt-3 leading-7 text-[#172554]/60">
                {step.text}
              </p>

              {/* Arrow */}
              {index < steps.length - 1 && (
                <div className="absolute -right-3 top-1/2 hidden h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full bg-[#F97360] text-white lg:flex">
                  <ChevronRight size={16} />
                </div>
              )}

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Process;