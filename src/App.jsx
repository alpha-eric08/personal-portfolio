import React from 'react'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner' 
import Footer from './Components/Footer'
import Contactus from './pages/contact'
import Services from './pages/services'
import Skills from './pages/skills'
import Whyme from './Components/Whyme'
import Portfolio from './pages/portfolio'

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Portfolio />
      <Whyme />
      <Skills />
      <Services />
      <Contactus />
      <Footer />
    </div>
  )
}

export default App