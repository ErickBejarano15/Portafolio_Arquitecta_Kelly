import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom"; // 👈 asegúrate de usar "react-router-dom"
import ScrollToTop from './Components/ScrollToTop.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/Portafolio_Arquitecta_Kelly">
       <ScrollToTop/>
       <App />
    </BrowserRouter>
  </StrictMode>,
)
