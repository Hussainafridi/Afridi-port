import React from 'react'
import Header from './component/Header'
import Hero from './component/Hero'
import About from './component/About'
import { Feature } from './component/Feature'
import Techn from './component/Techn'
import Contact from './component/Contact'
import Footer from './component/Footer'



export const App = () => {
 
  return (
    <div className= "">
      <Header />
  <Hero/>
  <About/>
  <Techn/>
  <Feature/>
  <Contact/>
<Footer/>
  

      </div>
  )
}


export default App
