//import { useState } from 'react'
//import style from "../src/styles/App.module.css"
import About from "./components/About/About"
import Header from "./components/Header/Header"
import HeaderFullLogo from "./components/Header/HeaderFullLogo"
function App() {
  return (
    <div className="container">
        <Header />
        <HeaderFullLogo />
        <About />
    </div>
  )
}

export default App
