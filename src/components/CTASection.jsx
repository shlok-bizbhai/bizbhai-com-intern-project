import Button from './Button'

const CONTACT_EMAIL = 'hello@bizbhai.com'

function CTASection() {
  return (
    <section id="contact" className="scroll-mt-16 bg-navy-950 py-20 sm:scroll-mt-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Ready to put your business online?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/70">
          Let&apos;s build a digital presence that makes your business easier to
          discover, trust, and contact.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            href={`mailto:${CONTACT_EMAIL}?subject=Get%20started%20with%20BizBhAI`}
            variant="primary"
            tone="dark"
          >
            Get Started
          </Button>
          <Button
            href={`mailto:${CONTACT_EMAIL}?subject=Question%20about%20BizBhAI`}
            variant="secondary"
            tone="dark"
          >
            Talk to Us
          </Button>
        </div>
      </div>
    </section>
  )
}

export default CTASection
