import { FaHardHat, FaCouch, FaPaintBrush } from 'react-icons/fa';
import {TfiPencilAlt} from "react-icons/tfi";
import { Link } from 'react-router-dom';

const Lista_Proyectos = ({ proyectos }) => {
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {proyectos.map((proyecto) => (
        <div key={proyecto.id} className="bg-white border shadow p-4">
          {/* Imagen del proyecto */}
          <img
            src={proyecto.img}
            alt={proyecto.title}
            className="w-full h-52 object-cover mb-4"
          />

          {/* Título con fuente Montserrat */}
          <h3 className="text-xl  text-gris-canva font-semibold font-[Montserrat]">{proyecto.title}</h3>

          {/* Descripción breve */}
          <p className="text-gray-600 text-sm mb-3">{proyecto.desc}</p>

          {/* Íconos por tags */}
          <div className="flex justify-around text-center text-sm text-gray-700 mt-2">
            {proyecto.tags?.includes('Diseño') && (
              <div className="flex flex-col items-center">
                <TfiPencilAlt className="text-lg mb-1 text-gris-canva" />
                <span>Diseño</span>
              </div>
            )}
            {proyecto.tags?.includes('Construcción') && (
              <div className="flex flex-col items-center">
                <FaHardHat className="text-lg mb-1 text-gris-canva" />
                <span>Construcción</span>
              </div>
            )}
            {proyecto.tags?.includes('Mobiliario') && (
              <div className="flex flex-col items-center">
                <FaCouch className="text-lg mb-1 text-gris-canva" />
                <span>Mobiliario</span>
              </div>
            )}
            {proyecto.tags?.includes('Muralismo') && (
              <div className="flex flex-col items-center">
                <FaPaintBrush className="text-lg mb-1 text-gris-canva" />
                <span>Muralismo</span>
              </div>
            )}
          </div>

          {/* Botón Ver más */}
          <Link
            to={`/proyectos/${proyecto.id}`}
            className="block mt-4 text-center text-white bg-gris-canva hover:bg-green-700 py-2 px-4 transition"
          >
            Ver más
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Lista_Proyectos;
