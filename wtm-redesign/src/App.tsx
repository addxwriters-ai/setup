import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductArchitecture from './components/ProductArchitecture'
import CompletedProjects from './components/CompletedProjects'
import ClientInfrastructure from './components/ClientInfrastructure'
import Footer from './components/Footer'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  useEffect(() => {
    // Heavyweight smooth scroll via ScrollTrigger's normalizeScroll —
    // eliminates jagged browser jumps, unifies touch/wheel/keyboard into
    // one deliberate, heavy-feeling ticker without a third-party lib.
    ScrollTrigger.normalizeScroll(true)
    ScrollTrigger.config({ ignoreMobileResize: true })

    return () => {
      ScrollTrigger.normalizeScroll(false)
    }
  }, [])

  return (
    <div className="min-h-screen bg-industrial text-stark">
      <Navbar />
      <main>
        <Hero />
        <ProductArchitecture />
        <CompletedProjects />
        <ClientInfrastructure />
      </main>
      <Footer />
    </div>
  )
}
