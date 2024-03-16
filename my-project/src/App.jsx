import './App.css'
import React from 'react'
import { AboutUs, Clients, Contact, Footers, Home, Navbar, Projects, Services, Technologies } from './components'

const App = () => {
  return (
    <div>
      
          <Navbar/>
          <Home/>
         
          <Clients/>   
          <Services/>
          <Technologies/>
          <Projects/>
          <AboutUs/>
 <Contact/>
          <Footers/>
    </div>
  )
}

export default App