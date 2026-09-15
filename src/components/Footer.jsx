function Footer() {
  return (
    <footer className="bg-gray-950 text-white px-6 py-12">
      <div className="max-w-6xl mx-auto">

        <div className="grid md:grid-cols-3 gap-8">

          <div>
            <h2 className="text-2xl font-bold">
              BizBhAI
            </h2>

            <p className="text-gray-400 mt-4">
              Your Business Ka AI Bhai.
              India's AI growth partner for small and local businesses.
            </p>
          </div>

          <div>
            <h3 className="font-bold">
              Company
            </h3>

            <div className="flex flex-col gap-3 mt-4 text-gray-400">
              <a href="#about">About</a>
              <a href="#services">Services</a>
              <a href="#process">How It Works</a>
              <a href="#contact">Contact</a>
            </div>
          </div>

          <div>
            <h3 className="font-bold">
              Get Started
            </h3>

            <p className="text-gray-400 mt-4">
              Ready to build your AI-powered business presence?
            </p>

            <a
              href="#contact"
              className="inline-block bg-white text-black px-5 py-2 mt-5 rounded-full"
            >
              Get Started
            </a>
          </div>

        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-gray-500 text-sm">
          <p>
            © 2026 BizBhAI. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer