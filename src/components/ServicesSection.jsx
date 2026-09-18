import { services } from '../data/services'
import ServiceCard from './ServiceCard'
import useReveal from '../hooks/useReveal'

function ServicesSection() {
  const [ref, visible] = useReveal()

  return (
    <section id="services" className="scroll-mt-16 bg-white py-20 sm:scroll-mt-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl">
            Everything your business needs to get online
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            Three focused services that work together, or stand on their own,
            depending on what your business needs right now.
          </p>
        </div>

        <div ref={ref} className="mt-14 grid gap-6 md:grid-cols-3 md:gap-7">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`transition-all duration-700 ease-out ${
                visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: visible ? `${index * 100}ms` : '0ms' }}
            >
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
