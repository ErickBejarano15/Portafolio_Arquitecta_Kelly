import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import proyectosData from '../data/Proyectos_Data.json';
import { imagenesProyectos } from '../data/Proyectos_Data.js';

import { FaHardHat, FaCouch, FaPaintBrush } from 'react-icons/fa'; // 🟢 Agregado FaPaintBrush
import {TfiPencilAlt} from "react-icons/tfi";
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const DetalleProyecto = () => {
  const { id } = useParams();
  const index = parseInt(id);
  const proyecto = proyectosData[index];
  const galeria = imagenesProyectos[index];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!proyecto) {
    return <div className="text-center py-20">Proyecto no encontrado.</div>;
  }

  const renderMedia = (src, className = '') => {
    return src.endsWith('.mp4') ? (
      <video controls className={className}>
        <source src={src} type="video/mp4" />
        Tu navegador no soporta el video.
      </video>
    ) : (
      <img src={src} alt="galería" className={className} />
    );
  };

  return (
    <section className="w-full px-4 md:px-32 py-12 font-asap">
      <h1 className="text-3xl md:text-5xl font-bold text-gris-canva mb-2">{proyecto.title}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Texto y tags */}
        <div>
          <p className="text-gray-700 text-justify">{proyecto.detalles}</p>

          <div className="flex gap-10 mt-8 flex-wrap">
            {proyecto.tags?.includes("Diseño") && (
              <div className="flex flex-col items-center text-sm">
                <TfiPencilAlt className="text-xl text-gris-canva mb-1" />
                <span>Diseño</span>
              </div>
            )}
            {proyecto.tags?.includes("Construcción") && (
              <div className="flex flex-col items-center text-sm">
                <FaHardHat className="text-xl text-gris-canva mb-1" />
                <span>Construcción</span>
              </div>
            )}
            {proyecto.tags?.includes("Mobiliario") && (
              <div className="flex flex-col items-center text-sm">
                <FaCouch className="text-xl text-gris-canva mb-1" />
                <span>Mobiliario</span>
              </div>
            )}
            {proyecto.tags?.includes("Muralismo") && (
              <div className="flex flex-col items-center text-sm">
                <FaPaintBrush className="text-xl text-gris-canva mb-1" />
                <span>Muralismo</span>
              </div>
            )}
          </div>
        </div>

        {/* Imagen destacada */}
        <div className="border shadow-md w-full h-[350px] relative">
          {renderMedia(galeria[activeIndex], 'w-full h-full object-cover rounded')}
          {!isMobile && (
            <>
              <button
                onClick={() =>
                  setActiveIndex((prev) => (prev > 0 ? prev - 1 : galeria.length - 1))
                }
                className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white text-black rounded-full p-1 shadow-md hover:scale-110 transition"
              >
                <MdChevronLeft size={24} />
              </button>
              <button
                onClick={() =>
                  setActiveIndex((prev) => (prev < galeria.length - 1 ? prev + 1 : 0))
                }
                className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white text-black rounded-full p-1 shadow-md hover:scale-110 transition"
              >
                <MdChevronRight size={24} />
              </button>
            </>
          )}
        </div>
      </div>

      {/* Miniaturas en escritorio */}
      {!isMobile && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-12">
          {galeria.map((media, idx) => (
            <div
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`cursor-pointer border rounded overflow-hidden transition transform hover:scale-105 ${
                idx === activeIndex ? 'ring-4 ring-[#598242]' : ''
              }`}
            >
              {renderMedia(media, 'w-full h-[120px] object-cover')}
            </div>
          ))}
        </div>
      )}

      {/* Slider en móvil */}
      {isMobile && (
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={16}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
        >
          {galeria.map((media, idx) => (
            <SwiperSlide key={idx}>
              {renderMedia(media, 'w-full h-[250px] object-cover rounded border')}
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      {/* Botón volver */}
      <div className="text-center mt-10">
        <Link
          to="/proyectos"
          className="inline-block bg-[#598242] text-white px-6 py-2 hover:bg-[#466b32] transition rounded"
        >
          Volver a Proyectos
        </Link>
      </div>
    </section>
  );
};

export default DetalleProyecto;
