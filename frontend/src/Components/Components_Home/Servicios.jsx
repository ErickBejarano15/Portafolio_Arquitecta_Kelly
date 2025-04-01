import React from 'react';
import { Link } from 'react-router-dom';
import imgLlave from '../../assets/Home/Servicios/llave-en-mano.png';
import imgDiseño from '../../assets/Home/Servicios/Diseño.png';
import imgConstruccion from '../../assets/Home/Servicios/construcción.jpg';
import imgInterventoria from '../../assets/Home/Servicios/interventoria.png';

const Servicios = () => {
  return (
    <section className="w-full bg-gris-canva py-12 px-4 md:px-32 font-manrope">
      {/* Título con línea decorativa */}
      <div className="relative mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-left">Servicios</h2>
        <div className="w-[100%] h-[2px] bg-black origin-left transform skew-x-[-30deg]"></div>
      </div>

      {/* Primera fila */}
      <div className="grid md:grid-cols-2 gap-10 mb-16 items-center">
        <div>
          <h3 className="font-bold text-lg text-center">LLAVE EN MANO</h3>
          <p className="text-sm md:text-base max-w-md mx-auto text-center">
            Desde la idea hasta el final, me ocupo de todo<br />
            y tú disfrutas el resultado
          </p>
        </div>
        <img
          src={imgLlave}
          alt="Llave en mano"
          className="w-full h-auto rounded-md shadow"
        />

        <div>
          <h3 className="font-bold text-lg text-center">DISEÑO</h3>
          <p className="text-sm md:text-base max-w-md mx-auto text-center">
            Transformo tus ideas y necesidades en espacios<br />
            donde cada rincón te haga sentir a gusto.
          </p>
        </div>
        <img
          src={imgDiseño}
          alt="Diseño"
          className="w-full h-auto rounded-md shadow"
        />
      </div>

      {/* Segunda fila */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h3 className="font-bold text-lg text-center">CONSTRUCCIÓN</h3>
          <p className="text-sm md:text-base max-w-md mx-auto text-center">
            Gestiono y ejecuto cada etapa del proyecto para<br />
            garantizarte una construcción de alta calidad.
          </p>
        </div>
        <img
          src={imgConstruccion}
          alt="Construcción"
          className="w-full h-auto rounded-md shadow"
        />

        <div>
          <h3 className="font-bold text-lg text-center">INTERVENTORÍA</h3>
          <p className="text-sm md:text-base max-w-md mx-auto text-center">
            Acompañamiento especializado para el recibo de<br />
            Unidades Residenciales o inmuebles.
          </p>
        </div>
        <img
          src={imgInterventoria}
          alt="Interventoría"
          className="w-full h-auto rounded-md shadow"
        />
      </div>

      {/* Botón */}
      <div className="mt-12 text-center">
        <Link
          to="/Servicios"
          className="inline-block relative px-8 py-3 text-white font-semibold overflow-hidden group bg-slate-600 rounded-md shadow-md"
        >
          <span className="absolute inset-0 bg-gris-canva-osc transition-transform duration-500 ease-out transform translate-x-[-100%] group-hover:translate-x-0 rounded-md"></span>
          <span className="relative z-10 group-hover:text-white transition-colors duration-300">
            Conocer más
          </span>
        </Link>
      </div>
    </section>
  );
};

export default Servicios;
