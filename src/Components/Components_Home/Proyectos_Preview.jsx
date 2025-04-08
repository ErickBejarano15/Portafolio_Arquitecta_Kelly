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
        <h2 className="text-5xl md:text-5xl text-[#598242] text-center uppercase mb-2">Proyectos</h2>
      </div>

      {/* Swiper / Carrusel */}
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={8} // ← AQUÍ puedes cambiar el espacio entre tarjetas (en píxeles)
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 }, // ← Cambia cuántas tarjetas aparecen en escritorio
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
              {/* IMAGEN */}
              <img
                src={proyecto.img}
                alt={proyecto.title}
                className="w-full h-[480px] object-cover rounded-none group-hover:opacity-40 transition duration-500"
                // ↑ Cambia `h-[380px]` para ajustar la ALTURA de la tarjeta (Ej: h-[320px])
                // ↑ Puedes usar `rounded-md` si quieres bordes redondeados
              />

              {/* CONTENIDO AL HACER HOVER */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 text-white p-4 flex flex-col justify-end bg-black bg-opacity-40">
                <h3 className="text-xl font-bold mb-2">{proyecto.title}</h3>

                {proyecto.desc && (
                  <p className="text-sm mb-3 max-w-sm text-justify">
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
    </section>
  );
};

export default Proyectos_Preview;
