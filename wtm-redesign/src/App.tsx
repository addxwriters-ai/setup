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

    // Muted paragraphs resolve from 70% → solid white once scrolled past.
    const batch = ScrollTrigger.batch('.body-muted', {
      start: 'top 75%',
      onEnter: (els) => els.forEach((el) => el.classList.add('is-active')),
    })

    return () => {
      ScrollTrigger.normalizeScroll(false)
      batch.forEach((st) => st.kill())
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
