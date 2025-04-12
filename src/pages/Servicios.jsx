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
    id: 'diseno',
    titulo: 'Diseño',
    descripcion: `Nos encargamos de elaborar el diseño con todo detalle, definiendo cada elemento con precisión. Además, si decides ejecutar la obra por tu cuenta, puedes contar con nuestro acompañamiento y colaboración directa con el constructor.\n\nTe acompañamos desde el primer paso: resolvemos tus dudas, te guiamos en el proceso y te ayudamos a poner en marcha tu proyecto con claridad y confianza.\n\nNos adaptamos a ti para que el diseño de tu vivienda, oficina o local comercial refleje exactamente lo que deseas transmitir.`,
    viñetas: [
      'Diseño arquitectónico 2D y 3D.',
      'Selección de materiales, colores y mobiliario.',
      'Propuesta visual e identidad de tu espacio.'
    ],
    imagenes: [imgDiseno1, imgDiseno2]
  },
  
  {
    id: 'llave',
    titulo: 'Remodelación',
    descripcion: `En nuestro servicio de reformas integrales o parciales, transformamos tu espacio para adaptarlo por completo a tus necesidades. Rediseñamos la distribución, renovamos instalaciones y utilizamos materiales de alta calidad para crear ambientes funcionales, cómodos y con estilo propio. Ya sea una vivienda, oficina o local comercial, trabajamos para que refleje tu personalidad y te sientas plenamente identificado con él.\n\nContamos con un equipo especializado en diseño y construcción, que supervisa minuciosamente cada etapa del proceso: desde la planificación del proyecto hasta la ejecución final de la obra.`,
    viñetas: [
      'Diseño personalizado según tus necesidades.',
      'Ejecución con materiales y acabados de calidad.',
      'Supervisión constante hasta la entrega final.'
    ],
    imagenes: [imgLlave1, imgLlave2]
  },
 
  {
    id: 'construccion',
    titulo: 'Construcción',
    descripcion: `Ejecutamos tu vivienda, local comercial, oficina o desarrollo urbanístico con los más altos estándares de calidad y compromiso. Nos encargamos de materializar tu proyecto cumpliendo la normativa vigente, los plazos acordados y las especificaciones técnicas definidas.\n\nNuestro equipo coordina cada fase de la obra, garantizando un proceso ordenado, eficiente y cuidadosamente supervisado.\n\nTe acompañamos durante todo el camino para que el resultado final sea exactamente como lo imaginaste.`,
    viñetas: [
      'Revisión de planos y cronogramas.',
      'Informe técnico y seguimiento de obra.',
      'Garantía de cumplimiento en cada fase.'
    ],
    imagenes: [imgInterv1, imgInterv2]
  },

  {
    id: 'interventoria',
    titulo: 'Interventoría',
    descripcion: `Nos encargamos de verificar que la construcción cumpla con la normativa vigente, así como con las especificaciones técnicas y los acuerdos previamente establecidos con el constructor. Supervisamos aspectos clave relacionados con la calidad de la obra, la reglamentación urbanística y el correcto desarrollo del proyecto.\n\nEste servicio está dirigido tanto a zonas comunes como a elementos individuales: urbanizaciones, apartamentos, viviendas unifamiliares, locales comerciales o industriales. Sea cual sea el tipo de inmueble, te acompañamos en el proceso para que recibas lo que realmente esperas, sin sorpresas ni inconvenientes.`,
    viñetas: [
      'Revisión de planos y cronogramas.',
      'Informe técnico y seguimiento de obra.',
      'Garantía de cumplimiento en cada fase.'
    ],
    imagenes: [imgInterv1, imgInterv2]
  },

];

const Servicios = () => {
  return (
    <section className="w-full bg-white text-black px-6 py-12 md:px-32 font-asap -mt-10">
      <h1 className="text-4xl md:text-5xl font-bold font-montserrat mb-2">Servicios</h1>
      <div className="w-full h-[1px] bg-black mb-12" />

      {servicios.map((servicio) => (
        <div key={servicio.id} className="mb-20">
          <h2 className="text-2xl md:text-3xl font-semibold font-asap mb-4">{servicio.titulo}</h2>

          {/* Renderizar párrafos individuales */}
          <div className="text-base md:text-lg text-justify text-gray-700 mb-4 space-y-4">
            {servicio.descripcion.split('\n').map((parrafo, idx) => (
              <p key={idx}>{parrafo}</p>
            ))}
          </div>

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
