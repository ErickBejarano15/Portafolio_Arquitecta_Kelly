import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import imgSlide1 from '../../assets/Home/High_Slader/slide1.png';
import imgSlide2 from '../../assets/Home/High_Slader/slide2.png';
import imgSlide3 from '../../assets/Home/High_Slader/slide3.png';

const High_Slider = () => {
  const slides = [
    {
      image: imgSlide1,
      text: (
        <>
          ACOMPAÑAMIENTO EXPERTO <br />
          PARA EL RECIBO DE TUS PROYECTOS
        </>
      ),
    },
    {
      image: imgSlide2,
      text: (
        <>
          ESPACIOS <br />
          QUE CUENTAN <br />
          TU HISTORIA
        </>
      ),
    },
    {
      image: imgSlide3,
      text: (
        <>
          GARANTIZANDO <br />
          LA MÁS ALTA CALIDAD <br />
          EN CADA FASE DEL PROCESO
        </>
      ),
    },
  ];

  return (
    <div className="w-full mx-auto -mt-20">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={0}
        centeredSlides={true}
        loop={true} // ← 🔁 Evita el "blanco" al final
        speed={1000} // ← 🌊 Transición suave entre slides
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        className="overflow-hidden"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative w-full">
              {/* Imagen de fondo */}
              <img
                src={slide.image}
                alt={`Slide ${idx}`}
                className="w-full h-screen object-cover transition-all duration-1000 ease-in-out"
              />

              {/* Overlay + Texto justificado a la izquierda */}
              <div className="absolute inset-0 flex items-center bg-black bg-opacity-40 px-8 md:px-32">
                <h2 className="text-white text-3xl md:text-5xl font-bold font-asap text-left leading-snug drop-shadow-md">
                  {slide.text}
                </h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default High_Slider;
