import React from 'react'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner' 
import Footer from './Components/Footer'
import Contactus from './pages/contact'
import Services from './pages/services'
import Skills from './pages/skills'

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Skills />
      <Services />
      <Contactus />
      <Footer />
    </div>
  )
}

export default App