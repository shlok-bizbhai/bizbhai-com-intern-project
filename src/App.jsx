import React, { useState } from 'react';
import { 
  Globe, 
  MapPin, 
  MessageSquare, 
  Bot, 
  CheckCircle2, 
  ArrowRight, 
  Phone, 
  Mail, 
  Sparkles, 
  Menu, 
  X, 
  ChevronRight, 
  Send, 
  Smartphone, 
  Zap, 
  Clock, 
  TrendingUp 
} from 'lucide-react';

function Navbar({ onOpenModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold shadow-sm">
              <Bot className="w-5 h-5" />
            </div>
            <span className="text-xl font-bold text-slate-800">
              Biz<span className="text-blue-600">BhAI</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
            <a href="#services" className="hover:text-blue-600 transition-colors">Services</a>
            <a href="#process" className="hover:text-blue-600 transition-colors">How It Works</a>
            <button 
              onClick={onOpenModal}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg transition-all shadow-sm"
            >
              Book Audit
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-slate-900"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-4 space-y-3">
          <a 
            href="#about" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-600 hover:text-blue-600 py-1"
          >
            About
          </a>
          <a 
            href="#services" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-600 hover:text-blue-600 py-1"
          >
            Services
          </a>
          <a 
            href="#process" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-600 hover:text-blue-600 py-1"
          >
            How It Works
          </a>
          <button 
            onClick={() => { setMobileMenuOpen(false); onOpenModal(); }}
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg"
          >
            Book Audit
          </button>
        </div>
      )}
    </nav>
  );
}

function Hero({ onOpenModal }) {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50/60 to-white border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Launch Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs sm:text-sm font-medium mb-6">
          <Sparkles className="w-4 h-4 text-blue-600" />
          <span>14-Day Done-For-You Launch Guarantee</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight max-w-4xl mx-auto mb-6">
          Transform Your Local Business with <span className="text-blue-600">AI & Smart Digital Twins</span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto mb-8 leading-relaxed">
          From fast custom websites and Google Map rankings to automated WhatsApp AI agents. We give your business a 24/7 digital twin that handles inquiries and generates sales automatically.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button 
            onClick={onOpenModal}
            className="w-full sm:w-auto px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
          >
            <span>Book Free Business Audit</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          
          <a 
            href="#services" 
            className="w-full sm:w-auto px-6 py-3.5 bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 font-semibold rounded-lg transition-colors text-center"
          >
            Explore Services
          </a>
        </div>

        {/* Feature Highlights */}
        <div className="mt-12 pt-8 border-t border-slate-200/80 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-slate-700">
          <div className="flex flex-col items-center">
            <Zap className="w-6 h-6 text-blue-600 mb-1" />
            <p className="text-lg font-bold text-slate-900">14-Day Setup</p>
            <p className="text-xs text-slate-500">Fast Implementation</p>
          </div>
          <div className="flex flex-col items-center">
            <Clock className="w-6 h-6 text-emerald-500 mb-1" />
            <p className="text-lg font-bold text-slate-900">24/7 Availability</p>
            <p className="text-xs text-slate-500">AI Automation</p>
          </div>
          <div className="flex flex-col items-center">
            <TrendingUp className="w-6 h-6 text-blue-600 mb-1" />
            <p className="text-lg font-bold text-slate-900">5x Local Reach</p>
            <p className="text-xs text-slate-500">Google & WhatsApp</p>
          </div>
          <div className="flex flex-col items-center">
            <Smartphone className="w-6 h-6 text-emerald-500 mb-1" />
            <p className="text-lg font-bold text-slate-900">Zero Code</p>
            <p className="text-xs text-slate-500">100% Done For You</p>
          </div>
        </div>

      </div>
    </section>
  );
}

function Introduction() {
  return (
    <section id="about" className="py-16 bg-white border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div>
            <h2 className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">The BizBhAI Advantage</h2>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              Stop Losing Local Customers To Manual Operations
            </h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
              Local business owners lose dozens of prospective customers every week simply because calls go unanswered or inquiries sit in WhatsApp without an instant response.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
              BizBhAI creates a digital twin for your business—integrating smart websites, Google Business listings, and AI-powered WhatsApp tools to capture leads, answer FAQs, and book appointments automatically.
            </p>

            <ul className="space-y-3 text-sm text-slate-700">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>Instant automated replies for 100% of customer inquiries</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>Top-tier Google Maps ranking to capture local search traffic</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>Zero technical knowledge required—we handle everything</span>
              </li>
            </ul>
          </div>

          {/* Comparison / Highlight Box */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h4 className="text-sm font-bold text-slate-800 mb-4 pb-2 border-b border-slate-200">
              Traditional vs. BizBhAI Digital Twin
            </h4>

            <div className="space-y-4">
              <div className="p-4 bg-white border border-red-100 rounded-xl">
                <p className="text-xs font-bold text-red-500 uppercase tracking-wider mb-1">Traditional Way</p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Slow customer replies, lost sales outside office hours, invisible on local Google searches, and manual follow-ups.
                </p>
              </div>

              <div className="p-4 bg-emerald-50/60 border border-emerald-200 rounded-xl">
                <p className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-1">The BizBhAI Way</p>
                <p className="text-xs text-slate-700 leading-relaxed font-medium">
                  24/7 AI-driven engagement, instant digital catalog access, high local visibility, and automated lead capture directly into WhatsApp.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function Services({ onOpenModal }) {
  const serviceList = [
    {
      title: "Smart Website & Local SEO",
      icon: Globe,
      color: "bg-blue-50 text-blue-600 border-blue-200",
      description: "Fast, mobile-ready site built specifically for local discovery and optimized to convert local visitors into paying customers.",
      points: [
        "100% Mobile & Speed Optimized",
        "Local Search Keyword Optimization",
        "Direct Call & WhatsApp Action Buttons",
        "Free Hosting & Domain Setup"
      ]
    },
    {
      title: "Google Business Profile",
      icon: MapPin,
      color: "bg-indigo-50 text-indigo-600 border-indigo-200",
      description: "Dominate local map searches and attract customers near you with a fully verified and optimized Google profile.",
      points: [
        "Profile Verification & Category Setup",
        "Google Maps Search Optimization",
        "Automated Customer Review Requests",
        "Regular Post Updates & Photo Uploads"
      ]
    },
    {
      title: "WhatsApp & Voice AI Agent",
      icon: MessageSquare,
      color: "bg-emerald-50 text-emerald-600 border-emerald-200",
      description: "24/7 intelligent agent that handles customer inquiries, provides instant replies, and qualifies leads around the clock.",
      points: [
        "24/7 Instant Inquiry Responses",
        "Automated Appointment Booking",
        "Frequently Asked Questions (FAQs)",
        "Broadcast Messaging Capabilities"
      ]
    },
    {
      title: "AI Digital Twin & Catalog",
      icon: Smartphone,
      color: "bg-sky-50 text-sky-600 border-sky-200",
      description: "Digital product and service showcase enabling customers to browse inventory and place orders seamlessly online.",
      points: [
        "Interactive Digital Product Showcase",
        "Instant Pricing & Availability Checks",
        "Seamless WhatsApp Catalog Integration",
        "Real-time Inventory Updates"
      ]
    }
  ];

  return (
    <section id="services" className="py-16 bg-slate-50 border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">Core Offerings</h2>
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Complete Digital Growth Stack For Local Businesses
          </h3>
          <p className="text-slate-600 text-sm mt-2">
            Pick standalone modules or activate the complete 4-in-1 digital twin package for maximum impact.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {serviceList.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index} 
                className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-lg border flex items-center justify-center mb-5 ${service.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <h4 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-8">
                    {service.points.map((point, pIndex) => (
                      <li key={pIndex} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button 
                  onClick={onOpenModal}
                  className="w-full py-2.5 px-4 bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-800 font-semibold text-sm rounded-lg transition-colors flex items-center justify-center gap-1"
                >
                  <span>Select Service</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

function Process() {
  const steps = [
    {
      number: "01",
      title: "Business Audit & Strategy",
      desc: "We analyze your current local presence, Google rankings, and customer inquiry workflows to identify fast growth opportunities."
    },
    {
      number: "02",
      title: "Done-For-You AI & Web Setup",
      desc: "Our team designs your website, configures your Google Business profile, and trains your customized WhatsApp AI agent."
    },
    {
      number: "03",
      title: "Go Live & Scale",
      desc: "Launch your digital twin! Start capturing 24/7 customer leads, automated appointments, and direct phone calls effortlessly."
    }
  ];

  return (
    <section id="process" className="py-16 bg-white border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">Simple Roadmap</h2>
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
            3 Steps To Digital Growth
          </h3>
          <p className="text-slate-600 text-sm mt-2">
            Get your business running on autopilot in 14 days or less.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-200 rounded-xl p-6 relative">
              <div className="text-3xl font-black text-blue-600 mb-3">
                {step.number}
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h4>
              <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

function CTASection({ onOpenModal }) {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-4xl font-extrabold mb-4">
          Ready To Automate Your Local Business Sales?
        </h2>
        <p className="text-blue-100 text-sm sm:text-base max-w-xl mx-auto mb-8">
          Claim your free 15-minute digital audit today. We'll show you exactly how to rank higher on Google Maps and automate customer responses.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button 
            onClick={onOpenModal}
            className="w-full sm:w-auto px-8 py-3.5 bg-white text-blue-700 hover:bg-slate-100 font-bold rounded-lg shadow-md transition-all"
          >
            Claim Free Business Audit
          </button>
          <a 
            href="https://wa.me/919876543210" 
            target="_blank" 
            rel="noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-lg transition-all flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function ContactModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-xl max-w-md w-full p-6 relative shadow-xl border border-slate-200">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6">
            <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto mb-2" />
            <h3 className="text-lg font-bold text-slate-900">Audit Request Received!</h3>
            <p className="text-xs text-slate-600 mt-1">Our team will reach out to you within 24 hours.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <h3 className="text-xl font-bold text-slate-900 mb-1">Book Your Free Digital Audit</h3>
            <p className="text-xs text-slate-500 mb-4">Fill out your details to get a free strategy session with our AI specialists.</p>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Business Name</label>
              <input 
                type="text" 
                required 
                placeholder="e.g. Apex Dental Clinic"
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-blue-600"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">WhatsApp / Phone Number</label>
              <input 
                type="tel" 
                required 
                placeholder="e.g. +91 98765 43210"
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-blue-600"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Primary Interest</label>
              <select className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-blue-600">
                <option>Complete Digital Twin Package</option>
                <option>Smart Website & Local SEO</option>
                <option>Google Business Profile</option>
                <option>WhatsApp & Voice AI Agent</option>
                <option>AI Digital Twin Catalog</option>
              </select>
            </div>

            <button 
              type="submit" 
              className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg text-sm transition-colors flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Submit Request</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 text-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-slate-800">
          
          {/* Column 1 */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 bg-blue-600 rounded-md flex items-center justify-center text-white">
                <Bot className="w-4 h-4" />
              </div>
              <span className="text-lg font-bold text-white">BizBhAI.com</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Empowering local businesses with AI digital twins, smart web design, Google Maps search optimization, and automated WhatsApp agents.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">Services</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#services" className="hover:text-white transition-colors">Smart Website & SEO</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Google Business Profile</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">WhatsApp AI Agents</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">AI Digital Twin Catalog</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">Contact</h4>
            <ul className="space-y-2 text-xs">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400" />
                <span>support@bizbhai.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-400" />
                <span>+91 98765 43210</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
          <p>© {new Date().getFullYear()} BizBhAI.com. All rights reserved.</p>
          <div className="flex gap-4 mt-2 sm:mt-0">
            <a href="#" className="hover:text-slate-400">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">
      <Navbar onOpenModal={() => setIsModalOpen(true)} />
      <Hero onOpenModal={() => setIsModalOpen(true)} />
      <Introduction />
      <Services onOpenModal={() => setIsModalOpen(true)} />
      <Process />
      <CTASection onOpenModal={() => setIsModalOpen(true)} />
      <Footer />

      {/* Audit Form Modal */}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}