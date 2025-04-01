import React from 'react';
import { FaTools, FaHardHat, FaCouch } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';

import imgProyecto1 from '../../assets/Home/Proyectos/proyectos1.png';
import imgProyecto2 from '../../assets/Home/Proyectos/proyectos2.png';
import imgProyecto3 from '../../assets/Home/Proyectos/proyectos3.png';
import imgProyecto4 from '../../assets/Home/Proyectos/proyectos4.png';

const Proyectos = () => {
  const proyectos = [
    {
      img: imgProyecto1,
      title: 'SAN JUAQUIN 201',
      desc: 'Renovación en dos etapas 2019 - 2024, un espacio tradicional que evoluciona.',
    },
    {
      img: imgProyecto2,
      title: 'CONSULTORIO MÉDICO',
      desc: 'Aprovechamos cada centímetro para crear un consultorio flexible, elegante y acogedor.',
    },
    {
      img: imgProyecto3,
      title: 'LOCAL GASTRONÓMICO',
      desc: '',
    },
    {
      img: imgProyecto4,
      title: 'VIVIENDA CAMPESTRE',
      desc: '',
    },
  ];

  return (
    <section className="w-full bg-gris-canva py-12 px-4 md:px-32 font-manrope">
      <div className="relative mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-left">Proyectos</h2>
        <div className="w-full h-[1px] bg-black"></div>
      </div>

      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
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
        {proyectos.map((proyecto, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative group overflow-hidden rounded-md shadow-md">
              <img
                src={proyecto.img}
                alt={proyecto.title}
                className="w-full h-96 object-cover group-hover:opacity-40 transition duration-500"
              />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 text-white p-6 flex flex-col justify-center items-start bg-black bg-opacity-40">
                <h3 className="text-xl font-bold mb-2">{proyecto.title}</h3>
                {proyecto.desc && (
                  <p className="text-sm mb-4 max-w-sm">{proyecto.desc}</p>
                )}
                <div className="flex gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <FaTools className="text-lg" /> <span>Diseño</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaHardHat className="text-lg" /> <span>Construcción</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCouch className="text-lg" /> <span>Mobiliario</span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

            {/* Botón */}
            <div className="mt-12 text-center">
        <Link
          to="/proyectos"
          className="inline-block relative px-8 py-3 text-white font-semibold overflow-hidden group bg-slate-600 rounded-md shadow-md"
        >
          <span className="absolute inset-0 bg-gris-canva-osc transition-transform duration-500 ease-out transform translate-x-[-100%] group-hover:translate-x-0 rounded-md"></span>
          <span className="relative z-10 group-hover:text-white transition-colors duration-300">
            Conocer más
          </span>
        </Link>
      </div>
    </section>
  );
};

export default Proyectos;
