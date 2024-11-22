import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Features from "./components/Features"
import Organize from "./components/Organize"
import Prototyping from "./components/Prototyping"
import Partners from "./components/Partners"
import Testimonials from "./components/Testimonials"
import Pricing from "./components/Pricing"
import Contact from "./components/Contact"


function App() {  
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Features />      
        <Organize />  
        <Prototyping />
        <Partners />
        <Testimonials />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
