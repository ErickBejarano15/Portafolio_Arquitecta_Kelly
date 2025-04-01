import { FaTools, FaHardHat, FaCouch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Lista_Proyectos = ({ proyectos }) => {
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {proyectos.map((proyecto) => (
        <div key={proyecto.id} className="bg-white border shadow p-4">
          <img
            src={proyecto.img}
            alt={proyecto.title}
            className="w-full h-52 object-cover mb-4"
          />

          {/* Título con fuente Montserrat */}
          <h3 className="text-xl font-semibold font-[Montserrat]">{proyecto.title}</h3>

          {/* Texto con fuente Manrope */}
          <p className="text-gray-600 text-sm mb-3">{proyecto.desc}</p>

          <div className="flex justify-around text-center text-sm text-gray-700">
            <div className="flex flex-col items-center">
              <FaTools className="text-lg mb-1" />
              <span>Diseño</span>
            </div>
            <div className="flex flex-col items-center">
              <FaHardHat className="text-lg mb-1" />
              <span>Construcción</span>
            </div>
            <div className="flex flex-col items-center">
              <FaCouch className="text-lg mb-1" />
              <span>Mobiliario</span>
            </div>
          </div>

          <Link
            to={`/proyectos/${proyecto.id}`}
            className="block mt-4 text-center text-white bg-gray-800 hover:bg-gray-700 py-2 px-4 transition"
          >
            Ver más
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Lista_Proyectos;
