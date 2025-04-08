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
    <section className="w-full py-12 px-4 md:px-32 font-asap font-bold">
      {/* Título principal */}
      <div className="relative mb-12 text-center">
        <h2 className="text-5xl md:text-5xl text-[#598242] uppercase mb-2">Proyectos</h2>
      </div>

      {/* Swiper / Carrusel */}
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={8}
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
            <div className="relative group overflow-hidden shadow-md border-none">
              {/* IMAGEN con efecto blanco y negro al hacer hover */}
              <img
                src={proyecto.img}
                alt={proyecto.title}
                className="w-full h-[480px] object-cover rounded-none transition duration-500 group-hover:grayscale"
              />

              {/* CONTENIDO AL HACER HOVER */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 text-white p-4 flex flex-col justify-end bg-black bg-opacity-40">
                <h3
                  className="text-xl font-bold mb-2"
                  style={{
                    textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
                  }}
                >
                  {proyecto.title}
                </h3>

                {proyecto.desc && (
                  <p
                    className="text-sm mb-3 max-w-sm text-justify"
                    style={{
                      textShadow: '1px 1px 2px rgba(0,0,0,0.7)',
                    }}
                  >
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

                {/* BOTÓN VER MÁS estilizado */}
                <Link
                  to={`/proyectos/${proyecto.id}`}
                  className="text-sm bg-transparent border border-white text-white px-4 py-2 transition duration-300 hover:text-lime-600 active:text-lime-700"
                >
                  Ver más
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Proyectos_Preview;
