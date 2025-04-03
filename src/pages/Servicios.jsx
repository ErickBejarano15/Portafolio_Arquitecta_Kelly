import React from 'react';
import Galeria_Servicios from '../Components/Components_Servicios/Galeria_Servicios';
import imgLlave1 from '../assets/Servicios/llave/llave1.jpg';
import imgLlave2 from '../assets/Servicios/llave/llave2.jpg';
import imgDiseno1 from '../assets/Servicios/diseño/diseño1.jpg';
import imgDiseno2 from '../assets/Servicios/diseño/diseño2.jpg';
import imgInterv1 from '../assets/Servicios/interventoria/interv1.jpg';
import imgInterv2 from '../assets/Servicios/interventoria/interv2.jpg';

const servicios = [
  {
    id: 'llave',
    titulo: 'Servicio Llave en Mano',
    descripcion: `Un servicio completo desde la concepción hasta la entrega. Te acompaño en todo el proceso del proyecto: diseño, ejecución y supervisión.`,
    viñetas: [
      'Diseño personalizado según tus necesidades.',
      'Ejecución con materiales y acabados de calidad.',
      'Supervisión constante hasta la entrega final.'
    ],
    imagenes: [imgLlave1, imgLlave2]
  },
  {
    id: 'diseno',
    titulo: 'Diseño Arquitectónico e Interior',
    descripcion: `Propuestas funcionales y estéticas para transformar tus ideas en espacios reales.`,
    viñetas: [
      'Diseño arquitectónico 2D y 3D.',
      'Selección de materiales, colores y mobiliario.',
      'Propuesta visual e identidad de tu espacio.'
    ],
    imagenes: [imgDiseno1, imgDiseno2]
  },
  {
    id: 'interventoria',
    titulo: 'Interventoría de Obras',
    descripcion: `Supervisión y acompañamiento técnico para garantizar la calidad y cumplimiento de tu proyecto.`,
    viñetas: [
      'Revisión de planos y cronogramas.',
      'Informe técnico y seguimiento de obra.',
      'Garantía de cumplimiento en cada fase.'
    ],
    imagenes: [imgInterv1, imgInterv2]
  }
];

const Servicios = () => {
  return (
    <section className="w-full bg-white text-black px-6 py-12 md:px-32 font-manrope -mt-10">
      <h1 className="text-4xl md:text-5xl font-bold font-montserrat mb-2">Servicios</h1>
      <div className="w-full h-[1px] bg-black mb-12" />

      {servicios.map((servicio) => (
        <div key={servicio.id} className="mb-20">
          <h2 className="text-2xl md:text-3xl font-semibold font-gowun mb-4">{servicio.titulo}</h2>
          <p className="text-base md:text-lg text-justify text-gray-700 mb-4">{servicio.descripcion}</p>

          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6 text-justify">
            {servicio.viñetas.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>

          {/* Galería del servicio */}
          <Galeria_Servicios imagenes={servicio.imagenes} />
        </div>
      ))}
    </section>
  );
};

export default Servicios;
