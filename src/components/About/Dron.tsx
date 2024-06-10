import React, { useEffect } from "react";

const MyComponent: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(
            "animate-fade-left",
            "animate-duration-[1500ms]",
            "animate-ease-linear"
          );
          observer.unobserve(entry.target);
        }
      });
    });

    const images = document.querySelectorAll(".fade-in");
    images.forEach((image) => {
      observer.observe(image);
    });

    // Limpiar el observer cuando el componente se desmonte
    return () => {
      images.forEach((image) => {
        observer.unobserve(image);
      });
    };
  }, []); // El array vacío significa que este efecto se ejecuta solo una vez, cuando el componente se monta

  return (
    // El resto de tu componente...
    <main>
      <div className="grid grid-cols-1 md:grid-cols-2 px-16 gap-8 w-[80%] mx-auto mb-32">
        <div className="text-white">
          <h1 className="mb-4 text-4xl">Nosotros</h1>
          <p className="text-lg">
            Donde el drone se fusiona con lentes de realidad virtual permitiendo
            volar en primera persona, Volar con The condor vision Revoluciona la
            forma de ver y vivir experiencias Más que poder admirar la caída de
            las cascadas, las estructuras de edificios los detalles, de la
            playa, montañas y deportes , sentirás que estás ahí, aunque estés a
            miles de kilómetros de distancia definitivamente será un recorrido
            inmersivo que te genere felicidad, adrenalina.
          </p>
        </div>
        <div>
          <img src="/drone1.png" alt="drone" className="w-full fade-in" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 px-16 gap-8 w-[80%] mx-auto mb-16">
        <div>
          <img src="/drone2.png" alt="drone" className="w-full fade-in" />
        </div>
        <div className="text-white">
          <img src="/comillas.png" alt="" />
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus,
            officia?
          </p>
        </div>
      </div>
    </main>
  );
};

export default MyComponent;
