import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const MyComponent: React.FC = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const isInView1 = useInView(ref1);
  const isInView2 = useInView(ref2);
  const isInView3 = useInView(ref3);

  return (
    <main>
      <div className="grid grid-cols-1 md:grid-cols-2 px-16 gap-8 md:w-[80%] mx-auto mb-32">
        <div className="text-white">
          <h1 className="mb-4 text-4xl font-normal">Nuestra Historia</h1>
          <p className="text-lg font-light">
            Nuestro vuelo comenzó LP Dron en 2021 empresa madre que ofrecía
            servicios de drones para áreas de seguridad pública, mapeo y
            monitorio de construcciones.  
            <br />
            Cuando volaban con nosotros, miraban el recorrido a través de una
            pantalla y se asombraban al ver la ruta en vivo, pero faltaba algo:
            La posibilidad de sentir que estás ahí y elegir como volar.  Fue asi
            que nos atrevimos a volar y crear una experiencia más allá,
            queríamos romper reglas. Fue así como decidimos fusionar el Drone
            con lentes de realidad aumentada totalmente en vivo.   Nuestra
            primera presentación fue en el Hotel Stereo Beach Resort en Ensenada
            en junio del 2022. Invitamos a todos a vivir esta experiencia mágica
            de visitar un paisaje, tomar asiento y observarlo desde el cielo
            simultáneamente. donde hubo una increíble aprobación del concepto  Y
            el resto es historia, el Drone se fusiona con gafas de realidad
            aumentada permitiendo volar en tiempo real y convertirte en el
            piloto.   <br /> <br />
            Actualmente somo la primera empresa en México que cuenta con una
            propuesta y tecnología en drones con realidad aumentada en vivo que
            brinda vuelos para múltiples sectores.
          </p>
        </div>
        <div ref={ref1}>
          <motion.img
            src="/drone1.png"
            alt=""
            initial={{ opacity: 0, x: 100 }} // Estado inicial de la animación: completamente transparente y 100px a la izquierda
            animate={{ opacity: isInView1 ? 1 : 0, x: isInView1 ? 0 : 100 }} // Paso 4: Controlar la animación con isInView
            transition={{ duration: 1 }} // Duración de la transición en segundos
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 px-16 gap-8 md:w-[80%] mx-auto mb-16">
        <div ref={ref2}>
          <motion.img
            src="/drone2.png"
            alt=""
            initial={{ opacity: 0, x: -100 }} // Estado inicial de la animación: completamente transparente y 100px a la izquierda
            animate={{ opacity: isInView2 ? 1 : 0, x: isInView2 ? 0 : -100 }} // Paso 4: Controlar la animación con isInView
            transition={{ duration: 1 }} // Duración de la transición en segundos
          />
        </div>
        <div className="text-white flex justify-center items-center flex-col">
          <img src="/comillas.png" alt="" />
          <p className="text-[35px] md:md:w-[60%] text-start md:text-center">
            El cielo no es el límite porque la visión del cóndor ya está ahí.
          </p>
        </div>
      </div>
      <div className="mb-16">
        <h1 className="text-start md:text-center text-[#61B7F8] font-extrabold px-12 text-xl mb-8">
          ¿POR QUÉ UN CÓNDOR?
        </h1>
        <h2 className="text-start md:text-center text-[#FAFBFF] text-3xl md:w-[70%] px-12 mx-auto">
          Es un ave majestuosa que se caracteriza por tener una planeación
          elegante y estable gracias a que alcanza grandes alturas quisimos
          similar esta hermosa ave con los drones que tienen una estabilidad y
          planeación impecable 
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-[80%] mx-auto">
        <div>
          <h1 className="text-3xl text-[#FAFBFF] mb-4 font-bold">Misión</h1>
          <p className="text-[#A8A9AC] font-light mb-16">
            Inclusión:  Disfrutar y vivir experiencias debe ser accesible para
            todos  Cóndor no está limitado por la edad, el movimiento o las
            capacidades cognitivas, queremos revolucionar la experiencia para
            que todo se diviertan. 
          </p>
          <h1 className="text-3xl font-bold mb-4 text-[#FAFBFF]">Visión</h1>
          <p className="text-[#A8A9AC] mb-16 font-light">
            Queremos que el cielo no sea el límite para tu proyecto, nos
            gustaría formar parte de tu visión y robustecer tu proyecto con la
            visión de cóndor te aseguramos:  experiencia, inclusión y
            eficiencia. 
          </p>
          <h1 className="text-3xl font-bold mb-4 text-[#FAFBFF]">Valores</h1>
          <ul className="list-disc pl-4 space-y-2 text-[#A8A9AC] mb-16">
            <li>
              <strong className="text-white">Somos Creativos</strong> - Creamos
              posibilidades de vivir experiencias nunca vistas.
            </li>
            <li>
              <strong className="text-white">Disruptivos</strong> - Somos el
              futuro de volar.
            </li>
            <li>
              <strong className="text-white">Intrépidos</strong> - Llegamos a
              lugares jamás vistos.
            </li>
            <li>
              <strong className="text-white">Conscientes</strong> - Queremos que
              todos vivan la experiencia.
            </li>
            <li>
              <strong className="text-white">Expertos</strong> - Contamos con el
              equipo de última gama y los pilotos más preparados.
            </li>
          </ul>
        </div>
        <div ref={ref3}>
          <motion.img
            src="/drone3.png"
            alt=""
            initial={{ opacity: 0, x: 100 }} // Estado inicial de la animación: completamente transparente y 100px a la izquierda
            animate={{ opacity: isInView3 ? 1 : 0, x: isInView3 ? 0 : 100 }} // Paso 4: Controlar la animación con isInView
            transition={{ duration: 1 }} // Duración de la transición en segundos
          />
        </div>
      </div>
    </main>
  );
};

export default MyComponent;
