// Central data source for the three BizBhAI services.
// ServicesSection maps over this array so each offering renders
// through the same reusable ServiceCard component.

export const services = [
  {
    id: 'website',
    icon: 'Globe',
    name: 'Professional Website',
    description:
      'A responsive, professional website that gives your business credibility and makes it easier for customers to find what you offer.',
    features: [
      'Responsive design for every screen size',
      'Clean, professional layout',
      'Clear business information',
      'Built-in contact and lead capture',
      'SEO-friendly page structure',
    ],
    cta: 'Build my website',
    accent: 'accent',
  },
  {
    id: 'google-business',
    icon: 'MapPin',
    name: 'Google Business Profile',
    description:
      'A properly structured, optimized profile that helps customers find your business on Google Search and Google Maps.',
    features: [
      'Full profile setup',
      'Accurate business information',
      'Category and service optimization',
      'Location and hours listed clearly',
      'Ongoing visibility support',
    ],
    cta: 'Improve my Google presence',
    accent: 'accent-cyan',
  },
  {
    id: 'whatsapp-business',
    icon: 'MessageCircle',
    name: 'WhatsApp Business',
    description:
      'A WhatsApp Business setup that makes it simple for customers to reach you, browse what you offer, and get quick answers.',
    features: [
      'Business profile setup',
      'Product and service catalog',
      'Structured contact workflow',
      'Faster customer communication',
      'Clear business information for buyers',
    ],
    cta: 'Set up WhatsApp Business',
    accent: 'navy-800',
  },
]

export const processSteps = [
  {
    id: 'step-1',
    icon: 'ClipboardList',
    title: 'Tell us about your business',
    description:
      'We start by understanding your business type, goals, and where your digital presence stands today.',
  },
  {
    id: 'step-2',
    icon: 'Settings2',
    title: 'We build your digital presence',
    description:
      'Our team sets up your website, Google Business Profile, WhatsApp Business, or whichever mix your business needs.',
  },
  {
    id: 'step-3',
    icon: 'Rocket',
    title: 'Get discovered and connect',
    description:
      'Your business becomes easier to find, easier to trust, and easier for customers to reach.',
  },
]
