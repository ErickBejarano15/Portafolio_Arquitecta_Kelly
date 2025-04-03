import React from 'react';
import { FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="w-full min-h-screen -mt-10 bg-white text-black font-manrope px-6 py-12 md:px-32 flex flex-col items-center justify-center">
      <h1 className="text-4xl md:text-5xl font-bold font-montserrat mb-4">Contáctame</h1>
      <div className="w-full max-w-xl text-center text-gray-700 text-lg text-justify mb-8">
        Estoy disponible para conversar sobre tus proyectos, ideas o colaboraciones.
        Puedes contactarme fácilmente a través de WhatsApp o LinkedIn.
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* WhatsApp */}
        <a
          href="https://wa.me/573052341622?text=Hola%20Kelly,%20estoy%20interesado%20en%20tus%20servicios."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
        >
          <FaWhatsapp className="text-2xl" />
          <span className="text-lg font-semibold">WhatsApp</span>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/kellybenjumea"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-6 py-3 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition"
        >
          <FaLinkedin className="text-2xl" />
          <span className="text-lg font-semibold">LinkedIn</span>
        </a>
      </div>
    </section>
  );
};

export default Contact;
