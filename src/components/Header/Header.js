import React from "react";
export default function Header() {
  return (
    <div>
      <header className="header">
        <nav className=" bg-zinc-900 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-19">
              <div className="flex-shrink-0 flex items-center">
                {/* <img className="h-8 w-8" src="images/logo.webp" alt="Logo" /> */}
                <span className="text-xl font-bold ml-2 text-white animate-pulse">
                  Nicolas Misseri
                </span>
              </div>
              <div className="hidden md:block">
                <ul className="ml-4 flex items-center space-x-4">
                  <li>
                    <a href="#" className="text-white hover:text-gray-700">
                      Inicio
                    </a>
                  </li>
                  <li>
                    <a
                      href="#sobre-mi"
                      className="text-white hover:text-gray-700"
                    >
                      Sobre Mi
                    </a>
                  </li>
                  <li>
                    <a
                      href="#trabajos"
                      className="text-white hover:text-gray-700"
                    >
                      Portfolio
                    </a>
                  </li>
                  <li>
                    <a
                      href="#skills"
                      className="text-white hover:text-gray-700"
                    >
                      Skills
                    </a>
                  </li>
                  <li>
                    <a href="#rrss" className="text-white hover:text-gray-700">
                      Contacto
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
