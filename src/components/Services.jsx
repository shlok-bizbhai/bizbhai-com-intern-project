import Card from "./Card"
import { Globe, MapPin, MessageCircle } from "lucide-react"

function Services() {
  return (
    <section id="services" className="bg-slate-900 px-6 py-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6">

        {/* Section Introduction */}
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-300">
            Our Services
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            Everything you need to grow online.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Build a stronger digital presence with the essential services
            your business needs to reach and engage more customers.
          </p>
        </div>

        {/* Service Cards */}
        <div className="mt-12 flex w-full flex-col gap-6 md:flex-row">

          <Card
            icon={<Globe size={32} className="text-white" />}
            title="Website"
            description="Professional website with SEO, mobile-ready design and fast loading."
          />

          <Card
            icon={<MapPin size={32} className="text-white" />}
            title="Google Business Profile"
            description="Optimized Google listing with photos, posts, reviews and local SEO."
          />

          <Card
            icon={<MessageCircle size={32} className="text-white" />}
            title="WhatsApp Business"
            description="24/7 AI assistant for enquiries, bookings, FAQs and follow-ups."
          />

        </div>

      </div>
    </section>
  )
}

export default Services