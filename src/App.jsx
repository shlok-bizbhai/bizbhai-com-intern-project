import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Intro from './components/Intro'
import Services from './components/Services'
import ProcessSteps from './components/ProcessSteps'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Intro />
      <Services />
      <ProcessSteps />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
