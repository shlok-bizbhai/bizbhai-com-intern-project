function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-5 max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-blue-600">BizBhAI</h1>

        <div className="hidden md:flex gap-8 text-gray-600">
          <a href="#services" className="hover:text-blue-600">Services</a>
          <a href="#process" className="hover:text-blue-600">How It Works</a>
          <a href="#about" className="hover:text-blue-600">About</a>
        </div>

        <button className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700">
          Get Started
        </button>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-blue-600 font-semibold mb-4">
            Grow Your Business Online
          </p>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Make Your Business
            <span className="text-blue-600"> More Visible</span>
          </h2>

          <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-8">
            BizBhAI helps local businesses build a strong online presence
            through websites, Google Business Profile and WhatsApp Business.
          </p>

          <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700">
            Start Growing Today →
          </button>
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-6 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-blue-600 font-semibold mb-2">ABOUT BIZBHAI</p>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Your Digital Growth Partner
          </h2>

          <p className="text-gray-600 text-lg">
            We help small and local businesses reach more customers online.
            From creating a professional website to improving your Google
            presence and connecting with customers on WhatsApp, BizBhAI
            provides simple digital solutions.
          </p>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-gray-50 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-blue-600 font-semibold">OUR SERVICES</p>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Everything Your Business Needs
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {/* Website */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition">
              <div className="text-4xl mb-5">🌐</div>
              <h3 className="text-2xl font-bold mb-3">
                Business Website
              </h3>
              <p className="text-gray-600">
                Get a professional, responsive website that helps customers
                discover and trust your business.
              </p>
            </div>

            {/* Google */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition">
              <div className="text-4xl mb-5">📍</div>
              <h3 className="text-2xl font-bold mb-3">
                Google Business Profile
              </h3>
              <p className="text-gray-600">
                Improve your visibility on Google Search and Google Maps so
                nearby customers can find you easily.
              </p>
            </div>

            {/* WhatsApp */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition">
              <div className="text-4xl mb-5">💬</div>
              <h3 className="text-2xl font-bold mb-3">
                WhatsApp Business
              </h3>
              <p className="text-gray-600">
                Connect with customers directly and make communication
                faster and easier through WhatsApp.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-blue-600 font-semibold">HOW IT WORKS</p>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Get Online in 3 Simple Steps
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10 text-center">

            <div>
              <div className="w-16 h-16 mx-auto rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mt-5 mb-2">
                Tell Us About Your Business
              </h3>
              <p className="text-gray-600">
                Share your business details and goals with our team.
              </p>
            </div>

            <div>
              <div className="w-16 h-16 mx-auto rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mt-5 mb-2">
                We Build Your Presence
              </h3>
              <p className="text-gray-600">
                We create and optimize your digital presence.
              </p>
            </div>

            <div>
              <div className="w-16 h-16 mx-auto rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mt-5 mb-2">
                Start Reaching Customers
              </h3>
              <p className="text-gray-600">
                Your business becomes easier for customers to discover.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 bg-blue-600 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-5">
          Ready to Grow Your Business?
        </h2>

        <p className="text-blue-100 mb-8">
          Take your business online and reach more customers.
        </p>

        <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100">
          Get Started Today →
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 px-6 py-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold text-white">BizBhAI</h2>
            <p className="mt-2 text-gray-400">
              Helping local businesses grow digitally.
            </p>
          </div>

          <div className="text-sm text-gray-400">
            © 2026 BizBhAI. All rights reserved.
          </div>
        </div>
      </footer>

    </div>
  )
}

export default App