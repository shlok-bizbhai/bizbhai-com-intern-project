
import { useState } from "react";

import {
  Globe,
  MapPin,
  MessageCircle,
} from "lucide-react";

import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Introduction from "./components/introduction";
import Services from "./components/services";
import Process from "./components/process";
import CTA from "./components/cta";
import Footer from "./components/footer";
import ContactModal from "./components/contact";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const services = [
    {
      icon: Globe,
      title: "Website Service",
      text: "Create a professional website that gives your business a strong and trustworthy online presence.",
      points: [
        "Modern business website",
        "Mobile-friendly design",
        "Clear business information",
      ],
    },
    {
      icon: MapPin,
      title: "Google Business Profile",
      text: "Make it easier for customers to discover your business when they search locally on Google.",
      points: [
        "Business profile setup",
        "Accurate business information",
        "Better local visibility",
      ],
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Business",
      text: "Connect with customers directly and make communication easier through WhatsApp Business.",
      points: [
        "Business communication",
        "Customer enquiries",
        "Easy customer connection",
      ],
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Understand",
      text: "We understand your business, goals, and digital needs.",
    },
    {
      number: "02",
      title: "Build",
      text: "We create simple digital solutions designed around your business.",
    },
    {
      number: "03",
      title: "Grow",
      text: "You get the tools and presence needed to connect with more customers.",
    },
  ];

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#FFFBF5] text-[#172554]">

      <Navbar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        scrollTo={scrollTo}
        setShowModal={setShowModal}
      />

      <Hero
        setShowModal={setShowModal}
        scrollTo={scrollTo}
      />

      <Introduction />

      <Services services={services} />

      <Process steps={steps} />

      <CTA setShowModal={setShowModal} />

      <Footer scrollTo={scrollTo} />

      <ContactModal
        showModal={showModal}
        setShowModal={setShowModal}
      />

    </div>
  );
}

export default App;