import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import imgSlide1 from '../../assets/Home/High_Slader/slide1.png'
import imgSlide2 from '../../assets/Home/High_Slader/slide2.png'
import imgSlide3 from '../../assets/Home/High_Slader/slide3.png'

const High_Slider = () => {

  const slides = [
    { image: imgSlide1, text: 'ESPACIOS QUE CUENTAN TÚ HISTORIA' },
    { image: imgSlide2, text: 'ACOMPAÑAMIENTO EXPERTÓ PARA EL RECIBO DE TUS PROYECTOS' },
    { image: imgSlide3, text: 'GARANTIZANDO LA MÁS ALTA CALIDAD EN CADA FASE DEL PROCESO'},
  ];

  return (
    <div className="w-full mx-auto">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="overflow-hidden"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative w-full">
              <img src={slide.image} alt={`Slide ${idx}`} className="w-full h-screen object-cover" />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                <h2 className="text-white text-3xl md:text-5xl font-bold font-gowun_dodum text-center px-4">
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

export default High_Slider