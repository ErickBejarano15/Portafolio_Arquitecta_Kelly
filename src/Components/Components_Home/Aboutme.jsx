import React from 'react';
import { Link } from 'react-router-dom';
import imgPerfil from '../../assets/Home/Aboutme/foto-kelly.jpg';
import imgExtra from '../../assets/Home/Aboutme/experiencia.jpg';

const Aboutme = () => {
  return (
    <section className="w-full py-12 px-4 md:px-32 font-manrope">
      {/* Título */}
      <div className="relative mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-left">Sobre mí</h2>
        <div className="w-full h-[1px] bg-black"></div>
      </div>

      {/* Presentación con imagen */}
      <div className="flex flex-col md:flex-row items-center gap-10 mb-20">
        <div className="flex-1 text-justify text-sm md:text-base">
          <p className="mb-6">
            Soy una profesional apasionada por la arquitectura con experiencia en diseño interior, planificación de espacios y ejecución de proyectos residenciales y comerciales. Mi enfoque combina funcionalidad y estética, adaptando cada diseño a las necesidades únicas de cada cliente.
          </p>
          <p>
            Me especializo en ofrecer soluciones creativas y sostenibles que transforman espacios comunes en lugares llenos de vida, comodidad y propósito. Cada proyecto representa una oportunidad para materializar ideas y convertirlas en experiencias significativas.
          </p>
        </div>

        <div className="flex-1">
          <img src={imgPerfil} alt="Kelly Benjumea" className="w-full max-w-sm rounded-md shadow-md mx-auto" />
        </div>
      </div>

      {/* Sección de experiencia */}
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1">
          <img src={imgExtra} alt="Experiencia" className="w-full rounded-md shadow-md" />
        </div>

        <div className="flex-1 text-justify text-sm md:text-base">
          <h3 className="text-lg font-semibold mb-4">Te ofrezco la mejor experiencia</h3>
          <p className="mb-4">
            Cada espacio tiene una historia por contar. Mi misión es ayudarte a descubrirla, traduciendo tus ideas y emociones en formas, texturas y ambientes que reflejen tu esencia.
          </p>
          <p>
            Creo que los lugares que habitamos deben inspirarnos, reconectarnos y hacernos sentir orgullosos. Trabajo con sensibilidad, técnica y creatividad para construir no solo estructuras, sino experiencias memorables que enriquecen tu día a día.
          </p>
        </div>
      </div>
      {/* Botón */}
            {/*<div className="mt-12 text-center">
              <Link
                to="/Servicios"
                className="inline-block relative px-8 py-3 text-white font-semibold overflow-hidden group bg-slate-600 rounded-md shadow-md"
              >
                <span className="absolute inset-0 bg-gris-canva-osc transition-transform duration-500 ease-out transform translate-x-[-100%] group-hover:translate-x-0 rounded-md"></span>
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                  Conocer más
                </span>
              </Link>
            </div>*/}

    </section>
  );
};

export default Aboutme;
