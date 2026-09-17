/*
  BizBhAI.com — Landing Page
  --------------------------
  A single-file React component styled with Tailwind CSS.

  Setup notes (for a Vite + React + Tailwind project):
  1. Add these two Google Font links inside the <head> of index.html:

       <link rel="preconnect" href="https://fonts.googleapis.com">
       <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
       <link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@500;600;700;800&family=Work+Sans:wght@400;500;600&display=swap" rel="stylesheet">

  2. Drop this file in as src/App.jsx (or import <Landing /> wherever you render it).
  3. No extra Tailwind config is required — all custom colors use Tailwind's
     arbitrary-value syntax (e.g. bg-[#3A1330]) so this works with a stock
     Tailwind v3 or v4 setup.
*/

const COLORS = {
  paper: "#FDEEF3",   // soft blush pink — the page background
  ink: "#3A1330",     // deep plum-wine — headings, footer, primary text
  slate: "#8A6470",   // dusty rose — secondary text
  red: "#E23A82",     // hot pink — website service, primary accent
  marigold: "#F2789A",// coral pink — Google Business Profile service, highlights
  leaf: "#B23A6E",     // berry magenta — WhatsApp service, primary CTA
};

function Icon({ name, className = "w-7 h-7" }) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };
  switch (name) {
    case "website":
      return (
        <svg {...common}>
          <rect x="3" y="4.5" width="18" height="15" rx="1.5" />
          <path d="M3 8.5h18" />
          <circle cx="6" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
          <path d="M7.5 13.5l2 2 3.5-4" />
        </svg>
      );
    case "pin":
      return (
        <svg {...common}>
          <path d="M12 21s7-6.1 7-11.6A7 7 0 0 0 5 9.4C5 14.9 12 21 12 21z" />
          <circle cx="12" cy="9.5" r="2.4" />
        </svg>
      );
    case "chat":
      return (
        <svg {...common}>
          <path d="M4 5.5h16v10.5H10l-4 3.5v-3.5H4z" />
          <path d="M8 9.5h8M8 12.5h5" />
        </svg>
      );
    case "form":
      return (
        <svg {...common}>
          <rect x="4" y="3.5" width="16" height="17" rx="1.5" />
          <path d="M8 8.5h8M8 12h8M8 15.5h5" />
        </svg>
      );
    case "build":
      return (
        <svg {...common}>
          <path d="M14.5 3.5l6 6-8.5 8.5-6 1.5 1.5-6z" />
          <path d="M13 6l5 5" />
        </svg>
      );
    case "found":
      return (
        <svg {...common}>
          <circle cx="10.5" cy="10.5" r="6.5" />
          <path d="M15.5 15.5L21 21" />
        </svg>
      );
    default:
      return null;
  }
}

function SignboardChip({ children, rotate = "-rotate-2", className = "" }) {
  return (
    <span
      className={`inline-block border-[3px] border-[#3A1330] px-4 py-1.5 ${rotate} bg-[#FDEEF3] ${className}`}
    >
      {children}
    </span>
  );
}

function TopBar() {
  return (
    <header className="relative z-20 flex items-center justify-between px-6 py-5 sm:px-10">
      <a href="#top" className="font-['Baloo_2'] text-xl font-bold text-[#3A1330]">
        Biz<span className="text-[#E23A82]">Bh</span>AI
      </a>
      <a
        href="#cta"
        className="hidden items-center gap-2 border-[3px] border-[#3A1330] bg-[#B23A6E] px-4 py-2 font-['Work_Sans'] text-sm font-semibold text-white sm:inline-flex"
      >
        Chat on WhatsApp
      </a>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-6 pb-16 pt-6 sm:px-10 sm:pb-24 sm:pt-10">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <SignboardChip className="font-['Work_Sans'] text-xs font-semibold uppercase tracking-wide text-[#3A1330]">
            Digital services for local business
          </SignboardChip>

          <h1 className="mt-6 font-['Baloo_2'] text-4xl font-extrabold leading-[1.08] text-[#3A1330] sm:text-5xl lg:text-6xl">
            Your shop, now easy
            <br />
            to find online.
          </h1>

          <p className="mt-6 max-w-md font-['Work_Sans'] text-lg leading-relaxed text-[#8A6470]">
            BizBhAI sets up your website, Google listing and WhatsApp Business —
            so customers can find you, message you and walk in.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#cta"
              className="inline-flex items-center gap-2 border-[3px] border-[#3A1330] bg-[#B23A6E] px-6 py-3 font-['Work_Sans'] text-base font-semibold text-white transition-transform hover:-translate-y-0.5"
            >
              <Icon name="chat" className="h-5 w-5" />
              Chat on WhatsApp
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 border-[3px] border-[#3A1330] bg-transparent px-6 py-3 font-['Work_Sans'] text-base font-semibold text-[#3A1330] transition-transform hover:-translate-y-0.5"
            >
              See what we do
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="rotate-2 border-[3px] border-[#3A1330] bg-white p-5">
            <p className="font-['Work_Sans'] text-xs font-semibold uppercase tracking-wide text-[#8A6470]">
              Sharma General Store
            </p>
            <p className="mt-1 font-['Baloo_2'] text-xl font-bold text-[#3A1330]">
              Now open on Google
            </p>
            <div className="mt-4 flex items-center gap-2 text-[#F2789A]">
              <span className="font-['Work_Sans'] text-sm font-semibold text-[#3A1330]">4.8</span>
              <span className="font-['Work_Sans'] text-sm">★★★★★</span>
              <span className="font-['Work_Sans'] text-sm text-[#8A6470]">(212)</span>
            </div>
          </div>

          <div className="absolute -bottom-8 -left-6 -rotate-3 border-[3px] border-[#3A1330] bg-[#B23A6E] px-4 py-3 text-white shadow-[6px_6px_0_#3A1330]">
            <p className="font-['Work_Sans'] text-xs font-semibold uppercase tracking-wide opacity-90">
              WhatsApp
            </p>
            <p className="font-['Baloo_2'] text-lg font-bold">"Is this in stock?"</p>
          </div>

          <div className="absolute -right-4 -top-6 rotate-6 border-[3px] border-[#3A1330] bg-[#F2789A] px-3 py-2 text-[#3A1330] shadow-[6px_6px_0_#3A1330]">
            <p className="font-['Baloo_2'] text-sm font-bold">bizbhai.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Intro() {
  return (
    <section className="border-y-[3px] border-[#3A1330] bg-white px-6 py-16 sm:px-10 sm:py-20">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <h2 className="font-['Baloo_2'] text-3xl font-bold leading-tight text-[#3A1330] sm:text-4xl">
          Who's BizBhAI?
        </h2>
        <div className="max-w-2xl">
          <p className="font-['Work_Sans'] text-lg leading-relaxed text-[#8A6470]">
            BizBhAI is the digital bhai for small businesses — shop owners,
            tutors, salons, clinics — who want to be found online but don't
            have time to figure out the tech. We handle the website, the
            Google listing and the WhatsApp setup, so you can get back to
            running your business.
          </p>
          <div className="mt-8 flex flex-wrap gap-x-10 gap-y-4 font-['Work_Sans']">
            <div>
              <p className="font-['Baloo_2'] text-2xl font-bold text-[#E23A82]">3</p>
              <p className="text-sm text-[#8A6470]">services, one setup</p>
            </div>
            <div>
              <p className="font-['Baloo_2'] text-2xl font-bold text-[#F2789A]">~1 week</p>
              <p className="text-sm text-[#8A6470]">to get you live</p>
            </div>
            <div>
              <p className="font-['Baloo_2'] text-2xl font-bold text-[#B23A6E]">1</p>
              <p className="text-sm text-[#8A6470]">friendly bhai to ask</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ icon, accent, tag, title, description, rotate }) {
  return (
    <div className={`relative border-[3px] border-[#3A1330] bg-[#FDEEF3] p-7 ${rotate}`}>
      <div
        className="absolute -top-4 left-6 border-[3px] border-[#3A1330] px-3 py-0.5 font-['Work_Sans'] text-xs font-semibold uppercase tracking-wide text-white"
        style={{ backgroundColor: accent }}
      >
        {tag}
      </div>
      <div className="mt-3 text-[#3A1330]">
        <Icon name={icon} className="h-8 w-8" />
      </div>
      <h3 className="mt-5 font-['Baloo_2'] text-xl font-bold text-[#3A1330]">{title}</h3>
      <p className="mt-3 font-['Work_Sans'] text-[15px] leading-relaxed text-[#8A6470]">
        {description}
      </p>
    </div>
  );
}

function Services() {
  return (
    <section id="services" className="px-6 py-16 sm:px-10 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="max-w-md font-['Baloo_2'] text-3xl font-bold leading-tight text-[#3A1330] sm:text-4xl">
          Three things, sorted.
        </h2>
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            icon="website"
            accent={COLORS.red}
            tag="Website"
            title="A website that works like your shop window"
            description="A fast, mobile-friendly website with your products, prices and story — so people find you on Google before they even walk in."
            rotate="lg:-rotate-1"
          />
          <ServiceCard
            icon="pin"
            accent={COLORS.marigold}
            tag="Google Business Profile"
            title="Show up when people search nearby"
            description="We set up and optimise your Google Business Profile — photos, timings, reviews — so your shop appears on Search and Maps."
            rotate="lg:rotate-1"
          />
          <ServiceCard
            icon="chat"
            accent={COLORS.leaf}
            tag="WhatsApp Business"
            title="Reply to customers like a pro"
            description="A WhatsApp Business account with your catalogue, quick replies and business hours — so customers can order in one tap."
            rotate="lg:-rotate-1"
          />
        </div>
      </div>
    </section>
  );
}

function ProcessStep({ number, icon, title, description, isLast }) {
  return (
    <div className="relative flex flex-1 flex-col items-start">
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 flex-none items-center justify-center border-[3px] border-[#3A1330] bg-[#3A1330] font-['Baloo_2'] text-xl font-bold text-[#FDEEF3]">
          {number}
        </div>
        {!isLast && (
          <div className="hidden h-[3px] flex-1 bg-[#3A1330] sm:block lg:hidden" aria-hidden="true" />
        )}
      </div>
      <div className="mt-5 text-[#3A1330]">
        <Icon name={icon} className="h-6 w-6" />
      </div>
      <h3 className="mt-3 font-['Baloo_2'] text-lg font-bold text-[#3A1330]">{title}</h3>
      <p className="mt-2 max-w-xs font-['Work_Sans'] text-[15px] leading-relaxed text-[#8A6470]">
        {description}
      </p>
    </div>
  );
}

function Process() {
  const steps = [
    {
      icon: "form",
      title: "Tell us about your business",
      description: "Share what you sell, where you're located and how customers reach you today.",
    },
    {
      icon: "build",
      title: "We set it up",
      description: "Our team builds your website, Google listing and WhatsApp Business, and shows it to you before it goes live.",
    },
    {
      icon: "found",
      title: "Customers start finding you",
      description: "Go live and start getting calls, messages and walk-ins from people searching nearby.",
    },
  ];

  return (
    <section className="border-y-[3px] border-[#3A1330] bg-white px-6 py-16 sm:px-10 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-['Baloo_2'] text-3xl font-bold text-[#3A1330] sm:text-4xl">
          How it works
        </h2>
        <div className="mt-14 flex flex-col gap-12 lg:flex-row lg:gap-8">
          {steps.map((step, i) => (
            <ProcessStep key={step.title} number={i + 1} isLast={i === steps.length - 1} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="cta" className="bg-[#3A1330] px-6 py-20 sm:px-10 sm:py-28">
      <div className="mx-auto max-w-3xl text-left">
        <h2 className="font-['Baloo_2'] text-3xl font-bold leading-tight text-[#FDEEF3] sm:text-4xl lg:text-5xl">
          Ready to get found online?
        </h2>
        <p className="mt-5 max-w-xl font-['Work_Sans'] text-lg leading-relaxed text-[#FDEEF3]/80">
          Tell us about your shop and we'll set up your website, Google
          listing and WhatsApp Business — usually within a week.
        </p>
        <a
          href="https://wa.me/910000000000"
          target="_blank"
          rel="noreferrer"
          className="mt-9 inline-flex items-center gap-2 border-[3px] border-[#FDEEF3] bg-[#B23A6E] px-7 py-3.5 font-['Work_Sans'] text-base font-semibold text-white transition-transform hover:-translate-y-0.5"
        >
          <Icon name="chat" className="h-5 w-5" />
          Chat with BizBhAI on WhatsApp
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#3A1330] px-6 pb-10 pt-4 sm:px-10">
      <div className="mx-auto max-w-6xl border-t-[3px] border-[#FDEEF3]/25 pt-10">
        <div className="grid gap-10 sm:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <p className="font-['Baloo_2'] text-xl font-bold text-[#FDEEF3]">
              Biz<span className="text-[#F2789A]">Bh</span>AI
            </p>
            <p className="mt-3 max-w-xs font-['Work_Sans'] text-sm leading-relaxed text-[#FDEEF3]/70">
              Your business, online — the easy way.
            </p>
          </div>
          <div>
            <p className="font-['Work_Sans'] text-sm font-semibold text-[#FDEEF3]">Services</p>
            <ul className="mt-3 space-y-2 font-['Work_Sans'] text-sm text-[#FDEEF3]/70">
              <li><a href="#services" className="hover:text-[#FDEEF3]">Website</a></li>
              <li><a href="#services" className="hover:text-[#FDEEF3]">Google Business Profile</a></li>
              <li><a href="#services" className="hover:text-[#FDEEF3]">WhatsApp Business</a></li>
            </ul>
          </div>
          <div>
            <p className="font-['Work_Sans'] text-sm font-semibold text-[#FDEEF3]">Contact</p>
            <ul className="mt-3 space-y-2 font-['Work_Sans'] text-sm text-[#FDEEF3]/70">
              <li>hello@bizbhai.com</li>
              <li>+91 00000 00000</li>
            </ul>
          </div>
        </div>
        <p className="mt-10 font-['Work_Sans'] text-xs text-[#FDEEF3]/50">
          © {new Date().getFullYear()} BizBhAI. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#FDEEF3] font-['Work_Sans'] antialiased">
      <TopBar />
      <Hero />
      <Intro />
      <Services />
      <Process />
      <CTA />
      <Footer />
    </div>
  );
}