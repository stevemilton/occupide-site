import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Situation from './components/Situation'
import Solution from './components/Solution'
import Services from './components/Services'
import OperatingSystem from './components/OperatingSystem'
import Lifecycle from './components/Lifecycle'
import Deliver from './components/Deliver'
import Team from './components/Team'
import Cta from './components/Cta'
import Footer from './components/Footer'
import ContactModal from './components/ContactModal'

export default function App() {
  const [contact, setContact] = useState(false)
  const open = () => setContact(true)
  return (
    <div className="m-site">
      <Header onContact={open} />
      <Hero onContact={open} />
      <Situation />
      <Solution />
      <Services />
      <OperatingSystem />
      <Lifecycle />
      <Deliver />
      <Team />
      <Cta onContact={open} />
      <Footer />
      <ContactModal open={contact} onClose={() => setContact(false)} />
    </div>
  )
}
