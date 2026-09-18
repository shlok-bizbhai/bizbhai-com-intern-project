# BizBhAI — Landing Page

A responsive landing page for BizBhAI, a digital-business service provider
helping businesses get online through websites, Google Business Profiles, and
WhatsApp Business.

Built with React 19, Tailwind CSS v4, Vite, and lucide-react icons.

## Getting started

```bash
npm install
npm run dev      # start the dev server
npm run build    # production build (outputs to dist/)
npm run preview  # preview the production build locally
npm run lint     # run oxlint
```

## Project structure

```text
src/
├── components/
│   ├── Navbar.jsx          # sticky nav + accessible mobile menu
│   ├── Hero.jsx             # hero section with headline, CTAs, visual
│   ├── IntroSection.jsx     # "about" section
│   ├── ServiceCard.jsx      # reusable card used by ServicesSection
│   ├── ServicesSection.jsx  # maps over data/services.js
│   ├── ProcessSection.jsx   # 3-step process, data-driven
│   ├── CTASection.jsx       # closing call-to-action band
│   ├── Footer.jsx           # multi-column footer
│   ├── Logo.jsx             # shared wordmark + mark
│   └── Button.jsx           # shared button (primary/secondary, light/dark)
├── data/
│   └── services.js          # service + process-step content
├── App.jsx
├── main.jsx
└── index.css                 # Tailwind import + design tokens
```

Colors, fonts, and shadows are defined once as design tokens in
`src/index.css` (`@theme` block) so the whole page stays visually consistent.

## Placeholder content

Contact details in the footer (`hello@bizbhai.com`, `+91 00000 00000`, and the
address line) are placeholders — swap them for real business information
before launch. The same placeholder email is used for the "Get Started" and
"Talk to Us" `mailto:` links in the CTA section.

## Git workflow

This project is not yet connected to the BizBhAI GitHub repository, so the
branch, commit, push, and pull-request steps below are for you to run once
you've copied this project into that repo:

```bash
git checkout -b your-name          # e.g. mayank-singh
git add .
git commit -m "feat: initialize BizBhAI landing page"
# ...additional meaningful commits as you build...
git push origin your-name
```

Then open a Pull Request from your branch into `main` and add
`@shlok-bizbhai` as the reviewer.
