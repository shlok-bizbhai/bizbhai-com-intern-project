import { CheckCircle2, Globe, MapPin, MessageCircle } from 'lucide-react'

const OUTCOMES = [
  'Be easy to find when someone searches for what you offer',
  'Build credibility the moment a customer lands on your page',
  'Make it simple for customers to reach out and get answers',
]

const ECOSYSTEM = [
  {
    icon: Globe,
    label: 'Website',
    detail: 'Your digital storefront, open around the clock.',
  },
  {
    icon: MapPin,
    label: 'Google Presence',
    detail: 'Found by nearby customers searching right now.',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp Communication',
    detail: 'A direct, familiar way for customers to reach you.',
  },
]

function IntroSection() {
  return (
    <section id="about" className="scroll-mt-16 bg-surface py-20 sm:scroll-mt-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
        {/* Left: explanation */}
        <div className="max-w-xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl">
            Your business deserves a digital presence that works.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Plenty of businesses offer great products and services, yet stay hard to
            find online. BizBhAI helps close that gap with a practical digital
            presence built around how customers actually search, compare, and reach
            out today.
          </p>

          <ul className="mt-8 space-y-4">
            {OUTCOMES.map((outcome) => (
              <li key={outcome} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                <span className="text-[15px] leading-relaxed text-ink">{outcome}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: connected ecosystem cards */}
        <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div
            className="absolute bottom-6 left-6 top-6 hidden w-px border-l-2 border-dashed border-line sm:block"
            aria-hidden="true"
          />
          <ul className="space-y-5">
            {ECOSYSTEM.map(({ icon: Icon, label, detail }) => (
              <li
                key={label}
                className="relative flex items-start gap-4 rounded-2xl border border-line bg-white p-5 shadow-card sm:pl-6"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-950 text-white">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-semibold text-navy-950">{label}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default IntroSection
