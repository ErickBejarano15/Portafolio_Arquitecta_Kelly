import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import imgFernando from '../../assets/Home/Reviews/fernando.png';
import imgGladis from '../../assets/Home/Reviews/gladis.png';

const Reviews = () => {
  const testimonios = [
    {
      nombre: 'Fernando Gil',
      imagen: imgFernando,
      texto:
        'Kelly ha sido una excelente profesional en varios proyectos que he realizado con ella, es una persona muy cumplida, organizada y responsable, pone detalle en todo lo que hace y se acomoda fácilmente a tu presupuesto. Sin duda la volvería a contratar en un futuro.',
    },
    {
      nombre: 'Gladis',
      imagen: imgGladis,
      texto: 
      'Conozco el trabajo y desempeño profesional de la arquitecta Kelly. De hecho hemos contratado la reforma de nuestro apartamento y otros más. Su planificación,ejecución y entrega de los trabajos han sido a satisfacción. Recomiendo, a quienes estén en planes de construir,modificar,remodelar que cuenten con su asesoría.',
    },
    // {
    //   nombre: 'Carlos Martínez',
    //   imagen: 'ruta/a/carlos.jpg',
    //   texto: 'Muy profesional, cumplida con los tiempos y atenta a cada detalle. ¡Excelente experiencia!'
    // },
    // {
    //   nombre: 'Laura Torres',
    //   imagen: 'ruta/a/laura.jpg',
    //   texto: 'Transformó nuestro apartamento en un lugar acogedor y moderno. Muy agradecida con su trabajo.'
    // },
  ];

  return (
    <section className="w-full text-[#598242] py-16 px-4 md:px-32 font-asap">
      <h2 className="text-center text-5xl md:text-3xl font-semibold mb-12">
        ¿Qué dicen los clientes?
      </h2>

      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        autoplay={{ delay: 20000, disableOnInteraction: false }}
        loop
      >
        {testimonios.map((testimonio, idx) => (
          <SwiperSlide key={idx}>
            <div className="text-center max-w-2xl mx-auto px-4">
              <img
                src={testimonio.imagen}
                alt={testimonio.nombre}
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="font-semibold text-black text-base mb-2">{testimonio.nombre}</h3>
              <p className="text-sm text-gray-800 leading-relaxed">
                {testimonio.texto}
              </p>
              <div className="w-full h-[1px] bg-black my-8"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Reviews;
