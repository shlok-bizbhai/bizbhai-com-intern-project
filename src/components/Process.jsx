import { Search, Wrench, TrendingUp } from "lucide-react"

function Process() {
  return (
    <section id="process" className="bg-slate-800 px-6 py-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6">

        {/* Section Introduction */}
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-300">
            How It Works
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            A simple process to grow your business.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            We make it simple to build, launch, and improve your digital
            presence.
          </p>
        </div>

        {/* Process Steps */}
        <div className="mt-12 flex w-full flex-col gap-6 md:flex-row">

          {/* Step 1 */}
          <div className="flex-1 rounded-lg border border-slate-700 bg-slate-900 p-8 shadow-[0_8px_30px_rgba(0,0,0,0.25)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.35)] transition cursor-pointer hover:scale-[1.02]">
            <div className="flex items-center justify-between">
              <Search size={32} className="text-white" />

              <p className="text-sm font-semibold text-blue-300">
                01
              </p>
            </div>

            <h3 className="mt-6 text-2xl font-bold text-white">
              Discover
            </h3>

            <p className="mt-4 leading-7 text-slate-300">
              Understand your business, goals, customers, and digital needs.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex-1 rounded-lg border border-slate-700 bg-slate-900 p-8 shadow-[0_8px_30px_rgba(0,0,0,0.25)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.35)] transition cursor-pointer hover:scale-[1.02]">
            <div className="flex items-center justify-between">
              <Wrench size={32} className="text-white" />

              <p className="text-sm font-semibold text-blue-300">
                02
              </p>
            </div>

            <h3 className="mt-6 text-2xl font-bold text-white">
              Build
            </h3>

            <p className="mt-4 leading-7 text-slate-300">
              Create the right digital solutions to strengthen your online
              presence.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex-1 rounded-lg border border-slate-700 bg-slate-900 p-8 shadow-[0_8px_30px_rgba(0,0,0,0.25)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.35)] transition cursor-pointer hover:scale-[1.02]">
            <div className="flex items-center justify-between">
              <TrendingUp size={32} className="text-white" />

              <p className="text-sm font-semibold text-blue-300">
                03
              </p>
            </div>

            <h3 className="mt-6 text-2xl font-bold text-white">
              Grow
            </h3>

            <p className="mt-4 leading-7 text-slate-300">
              Launch, optimize, and continuously improve your digital
              presence.
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Process