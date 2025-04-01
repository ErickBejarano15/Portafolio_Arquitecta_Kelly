import React from 'react';
import { FaTools, FaHardHat, FaCouch } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';

import proyectosData from '../../data/Proyectos_Data.json';
import { imagenesProyectos } from '../../data/Proyectos_Data';

const Proyectos_Preview = () => {
  const proyectos = proyectosData.map((proyecto, index) => ({
    ...proyecto,
    img: imagenesProyectos[index],
  }));

  return (
    <section className="w-full bg-gris-canva py-12 px-4 md:px-32 font-manrope">
      {/* Título principal */}
      <div className="relative mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-left">Proyectos</h2>
        <div className="w-full h-[1px] bg-black"></div>
      </div>

      {/* Swiper / Carrusel */}
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={16} // ← AQUI puedes ajustar el espacio entre tarjetas
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
      >
        {proyectos.map((proyecto) => (
          <SwiperSlide key={proyecto.id}>
            <div className="relative group overflow-hidden border shadow-md">
              {/* IMAGEN */}
              <img
                src={proyecto.img}
                alt={proyecto.title}
                className="w-full h-[380px] object-cover group-hover:opacity-40 transition duration-500" // ← Cambia aquí el alto
              />

              {/* CONTENIDO AL HACER HOVER */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 text-white p-4 flex flex-col justify-end bg-black bg-opacity-40">
                <h3 className="text-xl font-bold mb-2">{proyecto.title}</h3>

                {proyecto.desc && (
                  <p className="text-sm mb-3 max-w-sm text-justify">
                    {/* ← Justificado aquí */}
                    {proyecto.desc}
                  </p>
                )}

                {/* ÍCONOS DE SERVICIO */}
                <div className="flex flex-col gap-2 text-sm mb-4">
                  {proyecto.tags?.includes('Diseño') && (
                    <div className="flex items-center gap-2">
                      <FaTools className="text-xl" />
                      <span>Diseño</span>
                    </div>
                  )}
                  {proyecto.tags?.includes('Construcción') && (
                    <div className="flex items-center gap-2">
                      <FaHardHat className="text-xl" />
                      <span>Construcción</span>
                    </div>
                  )}
                  {proyecto.tags?.includes('Mobiliario') && (
                    <div className="flex items-center gap-2">
                      <FaCouch className="text-xl" />
                      <span>Mobiliario</span>
                    </div>
                  )}
                </div>

                {/* BOTÓN INDIVIDUAL */}
                <Link
                  to={`/proyectos/${proyecto.id}`}
                  className="text-sm bg-white text-black px-4 py-2 hover:bg-gray-200 transition"
                >
                  Ver más
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* BOTÓN GENERAL */}
      <div className="mt-12 text-center">
        <Link
          to="/proyectos"
          className="inline-block relative px-8 py-3 text-white font-semibold overflow-hidden group bg-slate-600 shadow-md"
        >
          <span className="absolute inset-0 bg-gris-canva-osc transition-transform duration-500 ease-out transform -translate-x-full group-hover:translate-x-0"></span>
          <span className="relative z-10 group-hover:text-white transition-colors duration-300">
            Conocer más
          </span>
        </Link>
      </div>
    </section>
  );
};

export default Proyectos_Preview;
