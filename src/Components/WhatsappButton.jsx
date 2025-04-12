import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsappButton = () => {
  return (
    <a
      href="https://wa.me/573052341622" // 🔁 Cambia por tu número de WhatsApp con código país
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110"
    >
      <FaWhatsapp className="text-3xl" />
    </a>
  );
};

export default WhatsappButton;
