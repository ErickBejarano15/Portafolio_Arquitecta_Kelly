import React, { useState } from 'react';
import Resumen_Proyectos from '../Components/Components_Proyectos/Resumen_Proyectos';
import Filtro_Servicios from '../Components/Components_Proyectos/Filtros_Servicios';
import Lista_Proyectos from '../Components/Components_Proyectos/Lista_Proyectos';
import proyectosData from '../data/Proyectos_Data.json';
import { imagenesProyectos } from '../data/Proyectos_Data';

const Proyectos = () => {
  const [filtro, setFiltro] = useState('Todos');

  const proyectos = proyectosData.map((proyecto, index) => ({
    ...proyecto,
    img: imagenesProyectos[index]
  }));

  const proyectosFiltrados =
    filtro === 'Todos'
      ? proyectos
      : proyectos.filter((p) =>
          p.tags?.some((tag) => tag.toLowerCase() === filtro.toLowerCase())
        );

  return (
    <section className="w-full bg-white py-12 px-6 md:px-20 font-manrope -mt-10">
      <Resumen_Proyectos />
      <Filtro_Servicios filtro={filtro} setFiltro={setFiltro} />
      <Lista_Proyectos proyectos={proyectosFiltrados} />
    </section>
  );
};

export default Proyectos;
