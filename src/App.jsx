//import { useState } from 'react'
//import style from "../src/styles/App.module.css"
import About from "./components/About/About"
import Header from "./components/Header/Header"
import HeaderFullLogo from "./components/Header/HeaderFullLogo"
import MVV from "./components/mission-vision-value/MVV"
function App() {
  return (
    <div className="container">
        <Header />
        <HeaderFullLogo />
        <About />
        <MVV />
    </div>
  )
}

export default App
