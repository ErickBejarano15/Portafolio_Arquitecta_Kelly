import React from 'react';
import { FaPhone, FaEnvelope, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#5e7b42] text-white py-12 px-4 md:px-32 font-asap font-bold min-h-[80vh] flex flex-col justify-between">
      {/* Contenido del footer */}
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 flex-grow">
        {/* Sección izquierda */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contáctame</h3>
          <div className="flex items-center gap-2 mb-2">
            <FaPhone className="text-lg text-oro" />
            <span>+57 305 234 1622</span>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-lg text-oro" />
            <span>kbenjum@gmail.com</span>
          </div>
        </div>

        {/* Sección derecha */}
        <div className="flex gap-4">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#5e7b42] text-oro p-2 rounded-full shadow-md hover:scale-105 transition"
          >
            <FaInstagram className="text-lg" />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#5e7b42] text-oro p-2 rounded shadow-md hover:scale-105 transition"
          >
            <FaLinkedin className="text-lg" />
          </a>
        </div>
      </div>

      {/* Pie de página (opcional) */}
      <div className="mt-8 text-center text-sm">
        © {new Date().getFullYear()} Kelly Benjumea — Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
