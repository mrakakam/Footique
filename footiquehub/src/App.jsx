import { useState } from "react";
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Testimonial } from './components/Testimonial'
import { Footer } from './components/Footer'

function App() {

  const [cartCount, setCartCount] = useState(0);

  return (
    <>
      <Navbar cartCount={cartCount} />
      <Hero setCartCount={setCartCount} />
      <Testimonial/>
      <Footer/>
    </>
  )
}

export default App
