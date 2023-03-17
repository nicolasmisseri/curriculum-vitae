import React from "react";

export default function Trabajos() {
  return (
    <div>
      <div id="trabajos" className="bg-white">
        <h2 class="text-2xl font-bold pt-40">Portfolio</h2>
        <div class="flex justify-between h-screen items-center">
          <a href="https://one21.com.ar/" class="w-1/3 px-4">
            <div class="bg-white rounded-lg shadow-lg">
              <img
                class="w-full rounded-t-lg blanco-y-negro"
                src="images/web_one21.png"
                alt="Captura de pantalla de la web"
              />
              <div class="px-6 py-4">
                <h2 class="text-lg font-bold text-gray-800">One 21</h2>
                <p class="mt-2 text-gray-600">
                  Sitio web informativo y para confirmacion de asistencia al
                  evento dede fin de año la empresa Century 21 argentina.
                </p>
              </div>
            </div>
          </a>
          <a
            href="https://nicolasmisseri.github.io/biblioteca-personal/"
            class="w-1/3 px-4"
          >
            <div class="bg-white rounded-lg shadow-lg">
              <img
                class="w-full rounded-t-lg blanco-y-negro"
                src="images/web_biblioteca_personal.png"
                alt="Captura de pantalla de la web"
              />
              <div class="px-6 py-4">
                <h2 class="text-lg font-bold text-gray-800">
                  Biblioteca Personal
                </h2>
                <p class="mt-2 text-gray-600">
                  App para registrar tus libros favoritos. Hecha en el marco del
                  curso de JS de Coderhouse.
                </p>
              </div>
            </div>
          </a>
          <a
            href="https://nicolasmisseri.github.io/agenda-familiar/"
            class="w-1/3 px-4"
          >
            <div class="bg-white rounded-lg shadow-lg">
              <img
                class="w-full rounded-t-lg blanco-y-negro"
                src="images/web_agenda_familiar.png"
                alt="Captura de pantalla de la web"
              />
              <div class="px-6 py-4">
                <h2 class="text-lg font-bold text-gray-800">Agenda Familiar</h2>
                <p class="mt-2 text-gray-600">
                  App que calcula el promedio del salario familiar. Proyecto
                  hecho en el marco del curso Argentina Programa.
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
