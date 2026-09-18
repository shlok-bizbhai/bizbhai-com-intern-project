import { ClipboardList, Rocket, Settings2 } from 'lucide-react'
import { processSteps } from '../data/services'
import useReveal from '../hooks/useReveal'

const ICONS = { ClipboardList, Settings2, Rocket }

function ProcessSection() {
  const [ref, visible] = useReveal()

  return (
    <section id="process" className="scroll-mt-16 bg-white py-20 sm:scroll-mt-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl">
            Simple process. Real digital presence.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            No lengthy onboarding, no technical back-and-forth. Three steps take
            your business from hard-to-find to easy-to-reach.
          </p>
        </div>

        <ol ref={ref} className="relative mt-16 flex flex-col gap-10 md:flex-row md:gap-8">
          {/* Connector lines grow in once the section is reached, echoing
              the idea of BizBhAI guiding the visitor through the steps. */}
          <div
            aria-hidden="true"
            className={`absolute bottom-2 left-7 top-2 w-px origin-top border-l-2 border-dashed border-line transition-transform duration-[1100ms] ease-out md:hidden ${
              visible ? 'scale-y-100' : 'scale-y-0'
            }`}
          />
          <div
            aria-hidden="true"
            className={`absolute left-[12%] right-[12%] top-7 hidden h-px origin-left bg-line transition-transform duration-[1100ms] ease-out md:block ${
              visible ? 'scale-x-100' : 'scale-x-0'
            }`}
          />

          {processSteps.map((step, index) => {
            const Icon = ICONS[step.icon]
            return (
              <li
                key={step.id}
                className={`relative flex gap-5 transition-all duration-700 ease-out md:flex-1 md:flex-col md:gap-0 ${
                  visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                }`}
                style={{ transitionDelay: visible ? `${index * 150}ms` : '0ms' }}
              >
                <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-navy-950 text-white transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_12px_30px_-8px_rgba(11,27,51,0.4)]">
                  {Icon && <Icon className="h-6 w-6" aria-hidden="true" />}
                </span>
                <div className="md:mt-5">
                  <p className="text-sm font-semibold text-accent-dark">Step {index + 1}</p>
                  <h3 className="mt-1 text-lg font-bold text-navy-950">{step.title}</h3>
                  <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted">
                    {step.description}
                  </p>
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}

export default ProcessSection
