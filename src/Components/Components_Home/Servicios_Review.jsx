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
    <section className="w-full py-12 px-4 md:px-32 font-manrope">
      {/* Título principal */}
      <div className="relative mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 uppercase text-[#598242]">Servicios</h2>
        <div className="w-full h-[2px] bg-black origin-left transform skew-x-[-30deg]"></div>
      </div>

      {/* Vista móvil: Slider suave */}
      <div className="block md:hidden">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          speed={800}
          spaceBetween={16}
          slidesPerView={1}
        >
          {servicios.map((s) => (
            <SwiperSlide key={s.id}>
              <div className="flex flex-col items-center gap-4 text-center">
                <img
                  src={s.img}
                  alt={s.titulo}
                  className="w-full h-[250px] object-cover transition-transform duration-500 hover:scale-105"
                />
                <h3 className="text-xl font-bold">{s.titulo}</h3>
                <p className="text-sm px-2">{s.descripcion}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Vista escritorio tipo cuadrícula */}
      <div className="hidden md:grid md:grid-cols-2 md:gap-8">
        {servicios.map((s) => (
          <div
            key={s.id}
            className="relative group overflow-hidden h-[300px] cursor-pointer"
          >
            {/* Imagen con escala y efecto escala de grises */}
            <img
              src={s.img}
              alt={s.titulo}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transform transition-transform duration-700 group-hover:scale-110"
            />
            {/* Texto centrado absoluto */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/10 transition duration-300">
              <h3 className="text-white text-2xl font-bold px-4 transition-colors duration-300 group-hover:text-[#a39240]">
                {s.titulo}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Botón final */}
      <div className="mt-12 text-center">
        <Link
          to="/Servicios"
          className="inline-block relative px-8 py-3 text-black font-semibold bg-lime-400 rounded-md shadow-md transition-colors hover:bg-lime-500"
        >
          Conocer más
        </Link>
      </div>
    </section>
  );
};

export default Servicios_Review;
