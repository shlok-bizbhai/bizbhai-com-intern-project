import {
  FaXTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa6"

function Footer() {
  return (
    <footer className="border-t border-slate-700 bg-slate-800 px-6 py-16">
      <div className="mx-auto max-w-7xl">

        {/* Main Footer */}
        <div className="flex flex-col gap-12 md:flex-row">

          {/* Brand */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-white">
              BizBhAI
            </h2>

            <p className="mt-3 font-medium text-blue-300">
              Your Business Ka AI Bhai
            </p>

            <p className="mt-4 max-w-sm leading-7 text-slate-300">
              India's AI Growth Partner for Small Businesses. We build and
              run your complete AI business system.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex gap-3">

              <a
                href="https://x.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-slate-600 text-white transition hover:border-blue-500 hover:bg-blue-600"
              >
                <FaXTwitter size={20} />
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-slate-600 text-white transition hover:border-blue-500 hover:bg-blue-600"
              >
                <FaLinkedinIn size={20} />
              </a>

              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-slate-600 text-white transition hover:border-blue-500 hover:bg-blue-600"
              >
                <FaInstagram size={20} />
              </a>

              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-slate-600 text-white transition hover:border-blue-500 hover:bg-blue-600"
              >
                <FaFacebookF size={20} />
              </a>

            </div>
          </div>

          {/* Company */}
          <div className="flex-1">
            <h3 className="font-semibold uppercase text-white">
              Company
            </h3>

            <div className="mt-5 flex flex-col gap-4">
              <a href="#about" className="text-slate-300 transition hover:text-white">
                About Us
              </a>

              <a href="#" className="text-slate-300 transition hover:text-white">
                Case Studies
              </a>

              <a href="#" className="text-slate-300 transition hover:text-white">
                Pricing
              </a>

              <a href="#" className="text-slate-300 transition hover:text-white">
                Reviews
              </a>

              <a href="#contact" className="text-slate-300 transition hover:text-white">
                Contact
              </a>
            </div>
          </div>

          {/* Resources */}
          <div className="flex-1">
            <h3 className="font-semibold uppercase text-white">
              Resources
            </h3>

            <div className="mt-5 flex flex-col gap-4">
              <a href="#process" className="text-slate-300 transition hover:text-white">
                How It Works
              </a>

              <a href="#" className="text-slate-300 transition hover:text-white">
                Products
              </a>

              <a href="#" className="text-slate-300 transition hover:text-white">
                Industries
              </a>

              <a href="#" className="text-slate-300 transition hover:text-white">
                Ecosystem
              </a>

              <a href="#" className="text-slate-300 transition hover:text-white">
                Growth Plan
              </a>

              <a href="#" className="text-slate-300 transition hover:text-white">
                FAQ
              </a>
            </div>
          </div>

          {/* Stay Updated */}
          <div className="flex-1">
            <h3 className="font-semibold uppercase text-white">
              Stay Updated
            </h3>

            <p className="mt-5 text-slate-300">
              Get the latest AI business tips.
            </p>

            <input
              type="email"
              placeholder="Enter your email"
              className="mt-5 w-full rounded-lg border border-slate-600 bg-slate-900 px-4 py-3 text-white placeholder:text-slate-500 outline-none"
            />

            <button className="mt-3 w-full cursor-pointer rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-500 hover:scale-[1.02]">
              Subscribe
            </button>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="mt-8 flex flex-col gap-4 border-t border-slate-700 pt-6 md:flex-row md:items-center md:justify-between">

          <p className="text-sm text-slate-400">
            © 2026 BizBhAI. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a
              href="#"
              className="text-sm text-slate-400 transition hover:text-white"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="text-sm text-slate-400 transition hover:text-white"
            >
              Terms of Service
            </a>
          </div>

        </div>

      </div>
    </footer>
  )
}

export default Footer