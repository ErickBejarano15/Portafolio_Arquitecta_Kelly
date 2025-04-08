import React from 'react';
import { useParams } from 'react-router-dom';
import proyectosData from '../data/Proyectos_Data.json';
import { imagenesProyectos } from '../data/Proyectos_Data';
import { FaTools, FaHardHat, FaCouch } from 'react-icons/fa';

const DetalleProyecto = () => {
  const { id } = useParams();
  const index = parseInt(id);
  const proyecto = proyectosData[index];

  if (!proyecto) {
    return <div className="p-8 text-center text-red-500">Proyecto no encontrado</div>;
  }

  // Simulamos galería (por ahora repetimos la imagen principal)
  const galeria = [
    imagenesProyectos[index],
    imagenesProyectos[index],
    imagenesProyectos[index],
  ];

  return (
    <div className="px-6 py-12 md:px-32 bg-gray-50 font-asap">
      {/* Título */}
      <h1 className="text-4xl font-gowun mb-2">{proyecto.title}</h1>
      <div className="w-full h-[1px] bg-black mb-8" />

      {/* Descripción + Imagen */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-12">
        {/* Texto + íconos */}
        <div>
          <p className="text-justify leading-relaxed text-gray-700 mb-6">
            {proyecto.detalles || proyecto.desc || 'Sin descripción detallada disponible.'}
          </p>

          {/* Iconos aquí abajo */}
          <div className="flex gap-10 text-sm text-gray-700">
            {proyecto.tags.includes('Diseño') && (
              <div className="flex flex-col items-center">
                <FaTools className="text-xl mb-1" />
                <span>Diseño</span>
              </div>
            )}
            {proyecto.tags.includes('Construcción') && (
              <div className="flex flex-col items-center">
                <FaHardHat className="text-xl mb-1" />
                <span>Construcción</span>
              </div>
            )}
            {proyecto.tags.includes('Mobiliario') && (
              <div className="flex flex-col items-center">
                <FaCouch className="text-xl mb-1" />
                <span>Mobiliario</span>
              </div>
            )}
          </div>
        </div>

        {/* Imagen principal */}
        <div>
          <img
            src={imagenesProyectos[index]}
            alt={proyecto.title}
            className="w-full h-[400px] object-cover border mb-4"
          />

          {/* Galería de miniaturas */}
          <div className="grid grid-cols-3 gap-4">
            {galeria.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Galería ${i + 1}`}
                className="w-full h-24 object-cover border hover:scale-105 transition"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetalleProyecto;
