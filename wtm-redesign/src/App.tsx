import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductArchitecture from './components/ProductArchitecture'
import CompletedProjects from './components/CompletedProjects'
import ClientInfrastructure from './components/ClientInfrastructure'
import Footer from './components/Footer'

// Round 1 (Structure): skeleton, layout boxes, content positioning, type
// hierarchy. No scroll-triggers or animation physics yet.
export default function App() {
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
