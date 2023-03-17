import React from "react";

export default function SobreMi() {
  return (
    <div
      id="sobre-mi"
      class="p-14 bg-gray-100 flex flex-col justify-center items-center h-screen"
    >
      <h2 class="text-2xl font-bold mb-4">Sobre mí</h2>
      <p class="mb-4">
        Soy Nicolás Misseri, un apasionado Director del Departamento de TI y
        Front End Developer en Century 21 Argentina. Además de mis habilidades
        técnicas, estoy en proceso de cursar la carrera de Analista Programador
        Universitario en la Facultad de Informática de la Universidad Nacional
        de La Plata. También soy Fullstack Developer graduado de CoderHouse
        desde 2021.
      </p>
      <p class="mb-4">
        Con más de 7 años de experiencia en el desarrollo de Front End y en la
        gestión de equipos de TI, mi objetivo es brindar soluciones innovadoras
        y de calidad que satisfagan las necesidades de mis clientes y mejoren su
        experiencia de usuario. Siempre estoy en constante aprendizaje y me
        encanta enfrentar nuevos desafíos en el mundo de la tecnología.
      </p>
      <a
        href="#rrss"
        class="bg-zinc-900 hover:text-gray-700 text-white font-bold py-2 px-4 rounded"
      >
        Contáctame
      </a>
    </div>
  );
}
