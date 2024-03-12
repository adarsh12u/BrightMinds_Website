import './App.css'
import React from 'react'
import { AboutUs, Clients, Footers, Home, Navbar, Projects, Services, Technologies } from './components'

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
          <Footers/>
    </div>
  )
}

export default App