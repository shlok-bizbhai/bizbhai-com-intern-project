import { CheckCircle2, Globe, MapPin, MessageCircle } from 'lucide-react'
import Button from './Button'

const ROWS = [
  { icon: Globe, label: 'Website', bg: 'bg-accent/10', iconColor: 'text-accent' },
  { icon: MapPin, label: 'Google Business', bg: 'bg-accent-cyan/15', iconColor: 'text-navy-900' },
  { icon: MessageCircle, label: 'WhatsApp', bg: 'bg-navy-950/[0.07]', iconColor: 'text-navy-900' },
]

const NODES = [
  { icon: Globe, bg: 'bg-accent/10', iconColor: 'text-accent', left: '50%', top: '14%' },
  { icon: MapPin, bg: 'bg-accent-cyan/15', iconColor: 'text-navy-900', left: '20%', top: '86%' },
  { icon: MessageCircle, bg: 'bg-navy-950/[0.07]', iconColor: 'text-navy-900', left: '80%', top: '86%' },
]

function Node({ icon: Icon, bg, iconColor, left, top, delay }) {
  return (
    <div
      className="absolute flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-white shadow-card"
      style={{ left, top, animationDelay: delay }}
    >
      <span className={`flex h-8 w-8 items-center justify-center rounded-full ${bg}`}>
        <Icon className={`h-4 w-4 ${iconColor}`} aria-hidden="true" />
      </span>
    </div>
  )
}

function Hero() {
  return (
    <section
      id="home"
      className="relative scroll-mt-16 overflow-hidden bg-white pt-14 pb-20 sm:scroll-mt-20 sm:pt-20 sm:pb-28"
    >
      <div className="mx-auto grid max-w-7xl gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-12 lg:px-8">
        {/* Left column: copy + CTAs */}
        <div className="hero-rise max-w-xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-1.5 text-sm font-medium text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            Digital growth for modern businesses
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.12] tracking-tight text-navy-950 sm:text-5xl lg:text-[3.35rem]">
            Build your business presence. Get discovered. Grow.
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-muted">
            BizBhAI helps businesses create a professional online presence through
            websites, Google Business Profiles, and WhatsApp Business solutions.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="#contact">Get Started</Button>
            <Button href="#services" variant="secondary">
              Explore Services
            </Button>
          </div>
        </div>

        {/* Right column: a small "digital presence" dashboard, connected
            to the three services it represents. Grounds the hero visual
            in the actual product instead of a generic illustration. */}
        <div className="hero-rise hero-rise-delay relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-navy-950/[0.05] to-accent/[0.07] sm:-inset-10" />

          <div className="relative z-10 rounded-2xl border border-line bg-white p-6 shadow-card-hover sm:p-7">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-navy-950">Digital presence</span>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-muted">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                Live
              </span>
            </div>

            <div className="mt-4 divide-y divide-line border-y border-line">
              {ROWS.map(({ icon: Icon, label, bg, iconColor }) => (
                <div key={label} className="flex items-center justify-between py-2.5">
                  <div className="flex items-center gap-2.5">
                    <span className={`flex h-7 w-7 items-center justify-center rounded-lg ${bg}`}>
                      <Icon className={`h-3.5 w-3.5 ${iconColor}`} aria-hidden="true" />
                    </span>
                    <span className="text-sm font-medium text-ink">{label}</span>
                  </div>
                  <CheckCircle2 className="h-4 w-4 text-accent" aria-hidden="true" />
                </div>
              ))}
            </div>

            <div className="mt-4">
              <span className="text-xs font-medium text-muted">Visibility</span>
              <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-navy-950/10">
                <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-accent to-accent-cyan" />
              </div>
            </div>
          </div>

          {/* Connecting nodes: the three services shown as one ecosystem */}
          <div className="relative mt-6 h-36 sm:h-44">
            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <line
                x1="50"
                y1="14"
                x2="20"
                y2="86"
                pathLength="1"
                strokeDasharray="1"
                strokeDashoffset="1"
                stroke="var(--color-accent)"
                strokeOpacity="0.35"
                strokeWidth="1.5"
                strokeLinecap="round"
                className="draw-line"
                style={{ animationDelay: '0.5s' }}
              />
              <line
                x1="50"
                y1="14"
                x2="80"
                y2="86"
                pathLength="1"
                strokeDasharray="1"
                strokeDashoffset="1"
                stroke="var(--color-accent)"
                strokeOpacity="0.35"
                strokeWidth="1.5"
                strokeLinecap="round"
                className="draw-line"
                style={{ animationDelay: '0.65s' }}
              />
              <line
                x1="20"
                y1="86"
                x2="80"
                y2="86"
                pathLength="1"
                strokeDasharray="1"
                strokeDashoffset="1"
                stroke="var(--color-accent)"
                strokeOpacity="0.35"
                strokeWidth="1.5"
                strokeLinecap="round"
                className="draw-line"
                style={{ animationDelay: '0.8s' }}
              />
            </svg>

            {NODES.map((node, index) => (
              <Node key={node.left + node.top} {...node} delay={`${0.3 + index * 0.1}s`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
