import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import About from './components/About'
import Services from './components/Services'
import Emergency from './components/Emergency'
import Doctors from './components/Doctors'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Appointment from './components/Appointment'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingButtons from './components/FloatingButtons'

export default function App() {
  return (
    <div className="min-h-screen" style={{ background: '#060E1E' }}>
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Services />
      <Emergency />
      <Doctors />
      <Gallery />
      <Testimonials />
      <Appointment />
      <Contact />
      <Footer />
      <FloatingButtons />
    </div>
  )
}
