import './App.css'
import React from 'react'
import { Clients, Home, Navbar, Projects, Services, Technologies } from './components'

const App = () => {
  return (
    <div>
      
          <Navbar/>
          <Home/>
         
          <Clients/>   
          <Services/>
          <Technologies/>
          <Projects/>
          
    </div>
  )
}

export default App