import { ArrowRight, CheckCircle2, Globe, MapPin, MessageCircle } from 'lucide-react'

const ICONS = { Globe, MapPin, MessageCircle }

// Full class strings kept literal (not built with template strings) so
// Tailwind's scanner picks them up regardless of which service is passed in.
const ACCENT_STYLES = {
  accent: { bg: 'bg-accent/10', icon: 'text-accent' },
  'accent-cyan': { bg: 'bg-accent-cyan/15', icon: 'text-navy-900' },
  'navy-800': { bg: 'bg-navy-950/[0.07]', icon: 'text-navy-900' },
}

function ServiceCard({ service }) {
  const { icon, name, description, features, cta, accent } = service
  const Icon = ICONS[icon]
  const accentStyle = ACCENT_STYLES[accent] ?? ACCENT_STYLES.accent

  return (
    <article
      id={service.id}
      className="group flex h-full scroll-mt-24 flex-col rounded-2xl border border-line bg-white p-7 shadow-card transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-accent/30 hover:shadow-card-hover sm:p-8"
    >
      <span
        className={`flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 ease-out group-hover:scale-110 ${accentStyle.bg}`}
      >
        {Icon && <Icon className={`h-6 w-6 ${accentStyle.icon}`} aria-hidden="true" />}
      </span>

      <h3 className="mt-6 text-xl font-bold text-navy-950">{name}</h3>
      <p className="mt-3 text-[15px] leading-relaxed text-muted">{description}</p>

      <ul className="mt-6 space-y-2.5">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-[14px] text-ink">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <a
        href="#contact"
        className="mt-8 inline-flex items-center gap-1.5 border-t border-line pt-6 font-semibold text-navy-950 transition-colors group-hover:text-accent-dark"
      >
        {cta}
        <ArrowRight
          className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1.5"
          aria-hidden="true"
        />
      </a>
    </article>
  )
}

export default ServiceCard
