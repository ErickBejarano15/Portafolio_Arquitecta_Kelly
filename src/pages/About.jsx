import React from 'react'; 
import img from '../assets/Home/Aboutme/foto-kelly.png';

const About = () => {
  return (
    <section className="w-full bg-white text-black font-asap px-6 py-12 md:px-32 -mt-10">
      {/* Encabezado */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-asap mb-2">Sobre Mí</h1>
        <div className="w-full h-[1px] bg-black mb-6" /> {/* Línea fina al 100% */}
        <p className="text-gray-700 max-w-3xl text-lg text-justify">
          Soy Kelly Benjumea, arquitecta apasionada por transformar espacios en experiencias que inspiran, confortan y representan a las personas que los habitan. Mi enfoque combina diseño arquitectónico, interiorismo y soluciones integrales “llave en mano”.
        </p>
      </div>

      {/* Proyectos y servicios */}
      <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
        <div>
          <h2 className="text-2xl font-semibold font-asap mb-2">Lo que hago</h2>
          <div className="w-1/2 h-[1px] bg-black mb-4" /> {/* Línea fina al 50% */}
          <ul className="list-disc list-inside text-gray-700 space-y-2 text-base text-justify">
            <li><strong>Diseño arquitectónico:</strong> conceptualización, modelado y presentación.</li>
            <li><strong>Diseño interior:</strong> selección de materiales, mobiliario y ambientación.</li>
            <li><strong>Construcción:</strong> desde el estudio técnico hasta la ejecución.</li>
            <li><strong>Interventoría:</strong> supervisión y acompañamiento profesional en obra.</li>
            <li><strong>Proyectos llave en mano:</strong> entrego el espacio completamente finalizado.</li>
          </ul>
        </div>

        {/* Imagen de referencia o ilustración */}
        <div>
          <img
            src={img}
            alt="Kelly Benjumea"
            className="w-full h-[400px] object-cover rounded-md shadow-md hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>

      {/* Cierre / filosofía */}
      <div className="border-t border-gray-300 pt-8 max-w-3xl text-gray-800">
        <h3 className="text-xl font-semibold mb-3">Mi filosofía</h3>
        <p className="text-base leading-relaxed text-justify">
          Cada proyecto es una oportunidad para crear algo que inspire y funcione. Mi compromiso es con la calidad, el detalle y sobre todo con las personas que confían en mí para diseñar sus espacios. Creo en el equilibrio entre funcionalidad, estética y emoción.
        </p>
      </div>
    </section>
  );
};

export default About;
