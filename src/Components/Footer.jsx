import React from 'react';
import { FaPhone, FaEnvelope, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white text-black py-8 px-4 md:px-32 font-montserrat">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
        {/* Sección izquierda */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contáctame,</h3>
          <div className="flex items-center gap-2 mb-2">
            <FaPhone className="text-lg " />
            <span>+57 305 234 1622</span>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-lg" />
            <span>kbenjum@gmail.com</span>
          </div>
        </div>

        {/* Sección derecha */}
        <div className="flex gap-4">
          <a href="#" target="_blank" rel="noopener noreferrer" className="bg-slate-200 text-gris-canva-osc p-2 rounded-full">
            <FaInstagram className="text-lg" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="bg-slate-200 text-gris-canva-osc p-2 rounded">
            <FaLinkedin className="text-lg" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;