import React, { useState, useEffect } from 'react';
import { FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom';
import logo from "../assets/Logo.svg";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Cerrar menú al hacer scroll hacia arriba
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < lastScrollY && menuOpen) {
        setMenuOpen(false);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, menuOpen]);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className='bg-gris-canva shadow-lg py-2 md:py-3 px-4 md:px-32 flex justify-between items-center'>
        {/* Logo / Marca */}
        <Link to="/">
          {/* Logo */}
          <img
            src={logo}
            alt="Logo"
            className="h-16 w-auto md:h-20 object-contain"
          />
          {/*<span className='flex flex-col leading-tight'>
            <span className='font-rem text-2xl md:text-4xl text-slate-900'>KELLY</span>
            <span className='font-rem text-base md:text-xl text-black'>BENJUMEA</span>
            <span className='font-montserrat text-base md:text-xl text-black'>PROYECTOS</span>
          </span>*/}
        </Link>

        {/* Menú hamburguesa */}
        <div className="md:hidden cursor-pointer z-50" onClick={() => setMenuOpen(!menuOpen)}>
          <FaBars className="text-3xl" />
        </div>

        {/* Enlaces de navegación */}
        <div className={`absolute top-full left-0 w-full bg-gris-canva md:bg-transparent md:static md:flex md:items-center md:w-auto transition-all duration-300 ease-in-out overflow-hidden ${menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 md:opacity-100 md:max-h-screen'}`}>
          <div className='flex flex-col md:flex-row md:gap-5'>
            {[
              { path: '/', label: 'Inicio' },
              { path: '/Servicios', label: 'Servicios' },
              { path: '/Proyectos', label: 'Proyectos' },
              { path: '/about', label: 'Sobre Mí' },
              { path: '/Contact', label: 'Contacto' },
            ].map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                onClick={() => setMenuOpen(false)}
                className='block py-2 px-4 font-manrope font-medium text-white hover:text-yellow-500 transition duration-300'
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
