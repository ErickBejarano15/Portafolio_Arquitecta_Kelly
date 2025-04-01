import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaInstagram, FaLinkedin, FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Top Bar */}
      <div className="bg-gris-canva-osc text-white py-2 px-4 flex justify-between items-center text-sm">
        <div className="flex gap-4 items-center">
          <span className="flex items-center gap-2">
            <FaPhone />
            +57 305 234 1622
          </span>
          <span className="flex items-center gap-2">
            <FaEnvelope />
            KBENJUM@GMAIL.COM
          </span>
        </div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-teal-200 transition"><FaInstagram /></a>
          <a href="#" className="hover:text-teal-200 transition"><FaLinkedin /></a>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className='bg-gris-canva shadow-lg py-3 px-8 md:px-32 flex justify-between items-center'>
        <Link to="/">
          <span className='flex flex-col leading-tight'>
            <span className='font-rem text-4xl text-black'>KELLY</span>
            <span className='font-rem text-xl text-black'>BENJUMEA</span>
            <span className='font-rem text-xl text-black'>PROYECTOS</span>
          </span>
        </Link>

        {/* Hamburger menu icon */}
        <div className="md:hidden cursor-pointer z-50" onClick={() => setMenuOpen(!menuOpen)}>
          <FaBars className="text-3xl" />
        </div>

        {/* Navigation links */}
        <div className={`absolute top-full left-0 w-full bg-gris-canva md:bg-transparent md:static md:flex md:items-center md:w-auto transition-all duration-300 ease-in-out overflow-hidden ${menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 md:opacity-100 md:max-h-screen'}`}>
          <div className='flex flex-col md:flex-row md:gap-5'>
          <Link to="/" className='block py-2 px-4 font-montserrat text-black hover:text-teal-200 hover:bg-slate-700 transition duration-300'>
              Inicio
            </Link>
            <Link to="/about" className='block py-2 px-4 font-montserrat text-black hover:text-teal-200 hover:bg-slate-700 transition duration-300'>
              Sobre Mí
            </Link>
            <Link to="/Servicios" className='block py-2 px-4 font-montserrat text-black hover:text-teal-200 hover:bg-slate-700 transition duration-300'>
              Servicios
            </Link>
            <Link to="/Proyectos" className='block py-2 px-4 font-montserrat text-black hover:text-teal-200 hover:bg-slate-700 transition duration-300'>
              Proyectos
            </Link>
            <Link to="/Contacto" className='block py-2 px-4 font-montserrat text-black hover:text-teal-200 hover:bg-slate-700 transition duration-300'>
              Contacto
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
