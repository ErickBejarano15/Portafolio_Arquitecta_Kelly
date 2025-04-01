import { createContext, useContext, useState, useEffect } from "react";
import proyectosData from "../data/Proyectos_Data.json";

const ProyectosContext = createContext();

export const ProyectosProvider = ({ children }) => {
  const [proyectos, setProyectos] = useState([]);
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);

  useEffect(() => {
    setProyectos(proyectosData);
  }, []);

  const seleccionarProyecto = (id) => {
    const proyecto = proyectos.find((p) => p.id === parseInt(id));
    setProyectoSeleccionado(proyecto);
  };

  return (
    <ProyectosContext.Provider
      value={{ proyectos, proyectoSeleccionado, seleccionarProyecto }}
    >
      {children}
    </ProyectosContext.Provider>
  );
};

export const useProyectos = () => useContext(ProyectosContext);
