import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom"; // 👈 asegúrate de usar "react-router-dom"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/Portafolio_Arquitecta_Kelly">
      <App />
    </BrowserRouter>
  </StrictMode>,
)
