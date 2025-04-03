import React from 'react';
import imgPerfil from '../../assets/Home/Aboutme/foto-kelly.jpg';

const Aboutme = () => {
  return (
    <section className="w-full py-12 px-4 md:px-32 font-manrope">
      {/* Título centrado */}
      <div className="relative mb-12 text-center">
        <h2 className="text-5xl md:text-4xl text-[#598242] font-bold uppercase">Sobre mí</h2>
      </div>

      {/* Presentación con imagen */}
      <div className="flex flex-col md:flex-row items-center gap-10 mb-20">
        <div className="flex-1 text-justify text-sm md:text-base">
          <p className="mb-6">
            Experiencia comprobada en diseño y construcción de espacios funcionales y estéticos, con enfoque práctico y profesional.
          </p>
          <p>
            Ofrezco soluciones adaptadas a cada necesidad, garantizando calidad y cumplimiento, incluso en presupuestos ajustados.
          </p>
        </div>

        <div className="flex-1">
          <img src={imgPerfil} alt="Kelly Benjumea" className="w-full max-w-sm rounded-md shadow-md mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
