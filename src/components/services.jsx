
import {
  Check,
  Globe,
  MapPin,
  MessageCircle,
} from "lucide-react";

function Services({ services }) {
  return (
    <section
      id="services"
      className="py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F97360]">
            Our Services
          </span>

          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Everything you need to get noticed.
          </h2>

          <p className="mt-5 text-lg leading-8 text-[#172554]/60">
            Simple digital services designed to help your business look
            professional and stay connected with customers.
          </p>
        </div>

       
        <div className="mt-12 grid gap-6 lg:grid-cols-3">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="service-card group rounded-3xl border border-[#172554]/10 bg-white p-7 shadow-sm"
              >

                
                <div className="flex items-center justify-between">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#172554] text-white transition group-hover:bg-[#F97360]">
                    <Icon size={25} />
                  </div>

                  <span className="text-sm font-bold text-[#172554]/20">
                    0{index + 1}
                  </span>

                </div>

                
                <h3 className="mt-7 text-2xl font-bold">
                  {service.title}
                </h3>

                
                <p className="mt-4 leading-7 text-[#172554]/60">
                  {service.text}
                </p>

                
                <div className="mt-7 space-y-3 border-t border-[#172554]/10 pt-6">

                  {service.points.map((point) => (
                    <div
                      key={point}
                      className="flex items-start gap-3 text-sm"
                    >
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#F97360]/10 text-[#F97360]">
                        <Check size={13} />
                      </div>

                      <span className="text-[#172554]/70">
                        {point}
                      </span>
                    </div>
                  ))}

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default Services;