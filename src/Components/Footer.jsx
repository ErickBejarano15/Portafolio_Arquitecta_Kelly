import React from 'react';
import { FaPhone, FaEnvelope, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative bg-gris-canva text-black pt-0 pb-8 px-4 md:px-32 font-asap font-bold">
      {/* Curva decorativa */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
        <svg
          className="relative block w-full h-[40px] md:h-[80px]"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M1200 0L0 0 598.97 114.72 1200 0z"
            fill="currentColor"
            className="text-[#56684b]" // ← cambia aquí si el fondo del footer tiene otro color
          />
        </svg>
      </div>

      {/* Contenido del footer */}
      <div className="mt-[40px] md:mt-[80px] flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
        {/* Sección izquierda */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contáctame,</h3>
          <div className="flex items-center gap-2 mb-2">
            <FaPhone className="text-lg text-[#a39240]" />
            <span>+57 305 234 1622</span>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-lg text-[#a39240]" />
            <span>kbenjum@gmail.com</span>
          </div>
        </div>

        {/* Sección derecha */}
        <div className="flex gap-4">
          <a href="#" target="_blank" rel="noopener noreferrer" className="bg-slate-200 text-[#a39240] p-2 rounded-full">
            <FaInstagram className="text-lg" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="bg-slate-200 text-[#a39240] p-2 rounded">
            <FaLinkedin className="text-lg" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
