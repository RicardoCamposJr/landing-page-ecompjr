//import { useState } from 'react'
//import style from "../src/styles/App.module.css"
import About from "./components/About/About"
import Header from "./components/Header/Header"
import HeaderFullLogo from "./components/Header/HeaderFullLogo"
import Contact from "./components/contact/Contact"
import MVV from "./components/mission-vision-value/MVV"
import Services from "./components/services/Services"
function App() {
  return (
    <div className="container">
        <Header />
        <HeaderFullLogo />
        <About />
        <MVV />
        <Services />
        <Contact />
    </div>
  )
}

export default App
