import React, { useState } from "react";
import "./Form.css";
const contact: React.FC = () => {
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const charLimit = 250;
  const phoneLimit = 11;

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (event.target.value.length <= charLimit) {
      setMessage(event.target.value);
    }
  };

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const onlyNums = event.target.value.replace(/[^0-9]/g, "");
    if (onlyNums.length <= phoneLimit) {
      setPhone(onlyNums);
    }
  };

  const charCount = message.length;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form submitted");
  };
  return (
    <main
      className="md:h-screen flex justify-center items-center flex-col"
      style={{
        backgroundImage: "url('/fondo.png')",
        backgroundPosition: "center", // Centra la imagen de fondo
        backgroundRepeat: "no-repeat", // Evita que la imagen de fondo se repita
        backgroundSize: "cover", // Asegura que la imagen de fondo cubra completamente el área del contenedor
      }}
    >
      <section className="text-white py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 px-16">
          <div className="col-span-1">
            <div className="mask">
              <img className="animate-fade-right" src="/contact.png" alt="" />
            </div>
          </div>
          <div className="col-span-2">
            <h1 className="text-center mb-8 text-3xl font-normal">
              OBTENER INFORMACIÓN
            </h1>
            <h2 className="text-center mb-8 text-xl font-normal">
              Escríbenos tenemos la propuesta, el equipo y talento para tu
              proyecto.{" "}
            </h2>
            <form
              onSubmit={handleSubmit}
              className="text-white p-6 rounded shadow-md"
            >
              <div className="flex md:flex-row flex-col gap-4 mb-4">
                <input
                  required
                  type="text"
                  name="name"
                  id="name"
                  className="border-2 border-gray-300 p-2 rounded w-full focus:outline-none focus:border-blue-500 bg-transparent"
                  placeholder="Nombre"
                />
                <input
                  required
                  type="email"
                  name="email"
                  id="email"
                  className="border-2 bg-transparent border-gray-300 p-2 rounded w-full focus:outline-none focus:border-blue-500"
                  placeholder="Correo Electrónico"
                />
                <input
                  required
                  type="tel"
                  name="phone"
                  id="phone"
                  value={phone}
                  onChange={handlePhoneChange}
                  className="border-2 bg-transparent border-gray-300 p-2 rounded w-full focus:outline-none focus:border-blue-500"
                  placeholder="Teléfono"
                />
              </div>
              <div className="flex gap-4 mb-4 md:flex-row flex-col">
                <input
                  required
                  type="text"
                  name="empresa"
                  id="empresa"
                  className="border-2 border-gray-300 p-2 rounded w-full focus:outline-none focus:border-blue-500 bg-transparent"
                  placeholder="Empresa (No obligatorio)"
                />
                <select
                  name="tipoDeServicio"
                  id="tipoDeServicio"
                  className="border-2 border-gray-300 p-2 rounded w-full focus:outline-none focus:border-blue-500  bg-black "
                >
                  <option value="">Selecciona un tipo de servicio</option>
                  <option value="sectorPrivado">Sector privado</option>
                  <option value="sectorPublico">Sector público</option>
                  <option value="espectaculo">Espectáculo</option>
                  <option value="artistico">Artístico</option>
                  <option value="politico">Político</option>
                  <option value="automovilistico">Automovilístico</option>
                  <option value="arquitectonico">Arquitectónico</option>
                  <option value="bienesRaices">Bienes raíces</option>
                  <option value="eventosPersonales">Eventos personales</option>
                </select>
              </div>
              <textarea
                name="message"
                id="message"
                required
                className="border-2 bg-transparent border-gray-300 p-2 rounded w-full focus:outline-none focus:border-blue-500"
                placeholder="Message"
                value={message}
                onChange={handleTextChange}
              ></textarea>
              <p className="text-sm text-end">
                {charCount}/{charLimit} caracteres
              </p>
              <button
                type="submit"
                className="bg-[#2D83C3] text-white p-2 rounded w-full mt-4"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default contact;
