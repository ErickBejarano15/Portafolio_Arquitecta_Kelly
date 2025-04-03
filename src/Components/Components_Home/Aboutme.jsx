import React from 'react';
import imgPerfil from '../../assets/Home/Aboutme/foto-kelly.jpg';

const Aboutme = () => {
  return (
    <section className="w-full py-12 px-4 md:px-32 font-manrope">
      {/* Título centrado */}
      <div className="relative mb-12 text-center">
        <h2 className="text-3xl md:text-4xl text-[#598242] font-bold uppercase">Sobre mí</h2>
      </div>

      {/* Presentación con imagen */}
      <div className="flex flex-col md:flex-row items-center gap-10 mb-20">
        <div className="flex-1 text-justify text-sm md:text-base">
          <p className="mb-6">
            Cuento con una sólida trayectoria liderando proyectos de arquitectura, diseño interior y construcción en diferentes escalas. Mi experiencia abarca desde intervenciones residenciales hasta espacios comerciales, siempre priorizando la calidad, funcionalidad y cumplimiento en los tiempos de entrega.
          </p>
          <p>
            Me enfoco en ofrecer propuestas viables que se ajusten a presupuestos reales, sin sacrificar el estilo ni la calidad. Cada cliente recibe una atención personalizada, con soluciones prácticas, estéticas y adaptadas a sus necesidades específicas, garantizando resultados que superan expectativas.
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
