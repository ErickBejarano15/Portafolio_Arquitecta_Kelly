import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import imgFernando from '../../assets/Home/Reviews/fernando.png';
import imgGladis from '../../assets/Home/Reviews/gladis.png';
import imgAna from '../../assets/Home/Reviews/Ana.png';

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
     {
      nombre: 'Ana Teresa Ospina ',
      imagen: imgAna,
      texto: 'Hace un año y medio, decidí tener mi propio consultorio. Desde el primer momento, su enfoque detallado y su capacidad para entender mis necesidades fueron clave. No solo me propusieron soluciones innovadoras para optimizar el espacio, sino que también me ayudaron a elegir materiales y colores que transmitieran calidez y profesionalismo. Además, siempre estuvieron atentos a mi presupuesto, buscando alternativas de calidad sin sacrificar el diseño.\n\nEl proceso fue fluido y organizado, cumpliendo con los plazos establecidos y manteniéndome informada en cada etapa. Cuando vi el resultado final, superó mis expectativas: un consultorio elegante, funcional y perfectamente adaptado a mi estilo de trabajo.',
     },
    // {
    //   nombre: 'Laura Torres',
    //   imagen: 'ruta/a/laura.jpg',
    //   texto: 'Transformó nuestro apartamento en un lugar acogedor y moderno. Muy agradecida con su trabajo.'
    // },
  ];

  return (
    <section className="w-full text-[#598242] py-16 px-4 md:px-32 font-asap">
      <h2 className="text-center text-3xl md:text-3xl font-bold mb-12 ">
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
              <h3 className="font-bold text-black text-base mb-2">{testimonio.nombre}</h3>
              <div className="text-sm text-gray-800 leading-relaxed text-justify space-y-4">
  {testimonio.texto.split('\n').map((line, i) => (
    <p key={i}>{line}</p>
  ))}
</div>

              <div className="w-full h-[1px] bg-black my-8"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Reviews;
