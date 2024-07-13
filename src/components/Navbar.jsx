import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header
        className="w-full bg-blue-500 *:
        text-white fixed top-0 z-50 shadow-md
      "
      >
        <nav>
          <div className="flex justify-between items-center px-8 py-4">
            <img src="/logo.svg" className="w-24" alt="logo" />
            <div onClick={() => setIsOpen(!isOpen)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 cursor-pointer"
              >
                <path d="M3 12h18M3 6h18M3 18h18"></path>
              </svg>
            </div>
          </div>
        </nav>
      </header>
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{ width: 0 }}
            animate={{ width: 250 }}
            exit={{ width: 0 }}
            className="fixed top-0 right-0 h-full bg-gray-800 text-white z-50"
            transition={{ type: "tween", stiffness: 300 }}
          >
            <div className="p-5 flex justify-between">
              <h1 className="text-lg font-bold">TheCondorVision</h1>
              <div onClick={() => setIsOpen(false)} className="cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </div>
            </div>
            <ul className="p-5 space-y-8 mb-8 font-bold">
              <li className="hover:text-blue-700 cursor-pointer border border-gray-700 rounded-lg  py-2 px-4 transition duration-300 ease-in-out hover:border-blue-700 hover:shadow-lg">
                <a href="/about">NOSOTROS</a>
              </li>
              <li className="hover:text-blue-700 cursor-pointer border border-gray-700 rounded-lg  py-2 px-4 transition duration-300 ease-in-out hover:border-blue-700 hover:shadow-lg">
                <a href="/services">SERVICIOS</a>
              </li>
              <li className="hover:text-blue-700 cursor-pointer border border-gray-700 rounded-lg  py-2 px-4 transition duration-300 ease-in-out hover:border-blue-700 hover:shadow-lg">
                <a href="/contact">CONTACTO</a>
              </li>
            </ul>
            <div className="absolute bottom-0 w-full p-4 bg-gray-800 text-white text-center">
              © {new Date().getFullYear()} <strong>TheCondorVision.</strong>{" "}
              Todos los derechos reservados.
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
