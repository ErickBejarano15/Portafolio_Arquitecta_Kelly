import { Link } from 'react-router-dom';
import detalleImg from '../../assets/detalle.jpg';

const Resumen_Proyectos = () => {
  return (
    <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden mb-10">
      {/* Imagen de fondo que cubre todo el ancho */}
      <img
        src={detalleImg}
        alt="Encabezado Proyectos"
        className="w-full h-[300px] md:h-[480px] object-cover block"
      />

      {/* Capa oscura encima de la imagen */}
      <div className="absolute inset-0 bg-black bg-opacity-40" />

      {/* Contenido sobre la imagen */}
      <div className="absolute inset-0 flex flex-col justify-center md:justify-end px-6 md:px-32 pb-6 md:pb-12">
        <h1 className="text-white text-3xl md:text-5xl font-bold font-asap uppercase mb-2">
          Proyectos
        </h1>
        <Link
          to="/"
          className="text-white text-sm underline hover:text-lime-400 transition"
        >
          Volver al Home
        </Link>
      </div>
    </div>
  );
};

export default Resumen_Proyectos;
