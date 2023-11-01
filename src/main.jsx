import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "../src/styles/global.css"
//Realizando o import da biblioteca Swiper para o slider da página:
import {register} from "swiper/element/bundle"
register()
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)