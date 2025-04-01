import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import imgLlave from '../../assets/Home/Servicios/llave-en-mano.png';
import imgDiseño from '../../assets/Home/Servicios/Diseño.png';
import imgConstruccion from '../../assets/Home/Servicios/construcción.jpg';
import imgInterventoria from '../../assets/Home/Servicios/interventoria.png';

const servicios = [
  {
    id: 1,
    titulo: 'LLAVE EN MANO',
    descripcion: 'Desde la idea hasta el final, me ocupo de todo y tú disfrutas el resultado.',
    img: imgLlave,
  },
  {
    id: 2,
    titulo: 'DISEÑO',
    descripcion: 'Transformo tus ideas y necesidades en espacios donde cada rincón te haga sentir a gusto.',
    img: imgDiseño,
  },
  {
    id: 3,
    titulo: 'CONSTRUCCIÓN',
    descripcion: 'Gestiono y ejecuto cada etapa del proyecto para garantizarte una construcción de alta calidad.',
    img: imgConstruccion,
  },
  {
    id: 4,
    titulo: 'INTERVENTORÍA',
    descripcion: 'Acompañamiento especializado para el recibo de Unidades Residenciales o inmuebles.',
    img: imgInterventoria,
  },
];

const Servicios_Review = () => {
  return (
    <section className="w-full bg-gris-canva py-12 px-4 md:px-32 font-manrope">
      {/* Título principal */}
      <div className="relative mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-left">Servicios</h2>
        <div className="w-[100%] h-[2px] bg-black origin-left transform skew-x-[-30deg]"></div>
      </div>

      {/* Vista móvil: Slider */}
      <div className="block md:hidden">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 8000, disableOnInteraction: false }}
          spaceBetween={16}
          slidesPerView={1}
        >
          {servicios.map((s) => (
            <SwiperSlide key={s.id}>
              <div className="flex flex-col items-center gap-4 text-center">
                {/* Imagen móvil con hover zoom */}
                <img
                  src={s.img}
                  alt={s.titulo}
                  className="w-full h-[250px] object-cover transition-transform duration-500 hover:scale-105"
                />
                <h3 className="text-xl font-bold">{s.titulo}</h3> {/* ← Cambia tipografía y tamaño aquí */}
                <p className="text-sm px-2">{s.descripcion}</p>   {/* ← Cambia tamaño del texto aquí */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Vista escritorio: Intercalado */}
      <div className="hidden md:flex flex-col gap-20">
        {servicios.map((s, index) => (
          <div
            key={s.id}
            className={`flex flex-col md:flex-row items-center gap-10 ${
              index % 2 === 1 ? 'md:flex-row-reverse' : ''
            }`}
          >
            {/* Imagen con hover */}
            <div className="w-full md:w-1/2">
              <img
                src={s.img}
                alt={s.titulo}
                className="w-full h-[250px] object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Texto */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">{s.titulo}</h3> {/* ← Cambia tamaño y fuente del título aquí */}
              <p className="text-base text-gray-700">{s.descripcion}</p> {/* ← Cambia tamaño de texto aquí */}
            </div>
          </div>
        ))}
      </div>

      {/* Botón final */}
      <div className="mt-12 text-center">
        <Link
          to="/Servicios"
          className="inline-block relative px-8 py-3 text-white font-semibold overflow-hidden group bg-slate-600 rounded-md shadow-md"
        >
          <span className="absolute inset-0 bg-gris-canva-osc transition-transform duration-500 ease-out transform -translate-x-full group-hover:translate-x-0 rounded-md"></span>
          <span className="relative z-10 group-hover:text-white transition-colors duration-300">
            Conocer más
          </span>
        </Link>
      </div>
    </section>
  );
};

export default Servicios_Review;
