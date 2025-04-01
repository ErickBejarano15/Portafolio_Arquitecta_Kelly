import React from 'react';

const Galeria_Servicios = ({ imagenes }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {imagenes.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt={`Imagen ${idx + 1}`}
          className="w-full h-[250px] object-cover rounded-md shadow-md hover:scale-105 transition-transform duration-500"
        />
      ))}
    </div>
  );
};

export default Galeria_Servicios;
