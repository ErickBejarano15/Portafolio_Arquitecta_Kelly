import './App.css';
import NavBar from "./Components/NavBar";
import { Routes, Route } from 'react-router-dom';

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Servicios from "./pages/Servicios";
import Proyectos from "./pages/Proyectos";
import DetalleProyecto from './pages/DetalleProyecto';
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <NavBar />
      <div className="pt-40">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Servicios" element={<Servicios />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/proyectos/:id" element={<DetalleProyecto />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
