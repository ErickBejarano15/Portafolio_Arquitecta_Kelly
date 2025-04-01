const Filtro_Servicios = ({ filtro, setFiltro }) => {
    const servicios = ['Todos', 'Diseño', 'Construcción', 'Mobiliario'];
  
    return (
      <div className="flex flex-wrap gap-4 mb-10">
      {servicios.map((servicio) => (
        <button
          key={servicio}
          onClick={() => setFiltro(servicio)}
          className={`px-4 py-2 border text-sm uppercase font-semibold transition
            ${filtro === servicio
              ? 'bg-black text-white'
              : 'bg-white text-black hover:bg-gray-200'}
          `}
        >
          {servicio}
        </button>
      ))}
    </div>
  );
};
 
  export default Filtro_Servicios;
  