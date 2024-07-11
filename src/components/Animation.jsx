import React from "react";
import { motion } from "framer-motion";

function Animation() {
  // Manejador para el movimiento del mouse sobre la imagen
  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) / 20; // Hace la rotación más sutil
    const y = (clientY - (top + height / 2)) / -20; // Hace la rotación más sutil

    // Ajusta la escala y la posición en el eje Z basándose en la posición del mouse
    const scale = 1 + Math.abs(x + y) * 0.005; // Aumenta la escala ligeramente basado en la rotación
    const z = Math.abs(x + y) * 2; // Mueve la imagen en el eje Z basado en la rotación

    currentTarget.style.transform = `rotateY(${x}deg) rotateX(${y}deg) scale(${scale}) translateZ(${z}px)`;
  };

  // Restablecer la transformación al salir
  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform =
      "rotateY(0deg) rotateX(0deg) scale(1) translateZ(0px)";
  };

  return (
    <main className="h-screen bg-white flex justify-center items-center">
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        transition={{ type: "spring", stiffness: 100, damping: 10 }} // Hace la transición más suave
        className="w-64 h-64 perspective"
      >
        <img
          src="/drone3.png"
          alt="Imagen 3D"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </main>
  );
}

export default Animation;
