import "./App.css";

function App() {
  return (
    <div className="App bg-zinc-900 font-mono">
      <div className="h-screen">
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
                      <a
                        href="#rrss"
                        className="text-white hover:text-gray-700"
                      >
                        Contacto
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </header>
        <div className="grid grid-cols-2 h-screen relative">
          <div className="flex flex-col justify-center items-center border-l-2 border-t-2 h-full">
            <h1 className="text-2xl font-bold mb-2 text-white pl-7 pr-7">
              Transformemos ideas en experiencias digitales impresionantes
            </h1>
            <p className="text-gray-400 pl-7 pr-7">
              Déjame llevar tu visión al siguiente nivel con mis habilidades de
              desarrollo front-end.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center h-screen ">
            <img
              id="img-profile"
              className="inline-block opacity-70 w-6/12 hover:transition-all"
              src="images/perfil.png"
              alt="Descripción de la imagen"
            />
          </div>
        </div>
      </div>

      <div
        id="sobre-mi"
        class="p-14 bg-gray-100 flex flex-col justify-center items-center h-screen"
      >
        <h2 class="text-2xl font-bold mb-4">Sobre mí</h2>
        <p class="mb-4">
          Soy Nicolás Misseri, un apasionado Director del Departamento de TI y
          Front End Developer en Century 21 Argentina. Además de mis habilidades
          técnicas, estoy en proceso de cursar la carrera de Analista
          Programador Universitario en la Facultad de Informática de la
          Universidad Nacional de La Plata. También soy Fullstack Developer
          graduado de CoderHouse desde 2021.
        </p>
        <p class="mb-4">
          Con más de 7 años de experiencia en el desarrollo de Front End y en la
          gestión de equipos de TI, mi objetivo es brindar soluciones
          innovadoras y de calidad que satisfagan las necesidades de mis
          clientes y mejoren su experiencia de usuario. Siempre estoy en
          constante aprendizaje y me encanta enfrentar nuevos desafíos en el
          mundo de la tecnología.
        </p>
        <a
          href="#rrss"
          class="bg-zinc-900 hover:text-gray-700 text-white font-bold py-2 px-4 rounded"
        >
          Contáctame
        </a>
      </div>

      <div id="trabajos">
        <h2 class="text-2xl text-white font-bold pt-40">Portfolio</h2>
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

      <div
        id="skills-rrss"
        className="grid grid-cols-2 gap-4 divide-x blanco-y-negro"
      >
        <div
          id="skills"
          class="col-span-1 flex flex-row items-center text-white "
        >
          <h2 class="text-2xl font-bold pl-7 mt-9 mb-9">Skills:</h2>
          <div class="flex justify-center">
            <a
              href="https://es.wikipedia.org/wiki/HTML"
              Target="_blank"
              class="shadow-md rounded-lg h-16 w-16 flex flex-col items-center justify-center"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/250px-HTML5_logo_and_wordmark.svg.png"
                alt="Imagen"
                class="h-8 w-8"
              />
              <span class="mt-2 text-center text-sm font-medium">HTML</span>
            </a>
            <a
              href="https://es.wikipedia.org/wiki/CSS"
              Target="_blank"
              class="shadow-md rounded-lg h-16 w-16 flex flex-col items-center justify-center ml-4"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/250px-CSS3_logo_and_wordmark.svg.png"
                alt="Imagen"
                class="h-8 w-8"
              />
              <span class="mt-2 text-center text-sm font-medium">CSS</span>
            </a>
            <a
              href="https://es.wikipedia.org/wiki/JavaScript"
              Target="_blank"
              class="shadow-md rounded-lg h-16 w-16 flex flex-col items-center justify-center ml-4"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/320px-Unofficial_JavaScript_logo_2.svg.png"
                alt="Imagen"
                class="h-8 w-8"
              />
              <span class="mt-2 text-center text-sm font-medium">
                JavaScript
              </span>
            </a>
            <a
              href="https://en.wikipedia.org/wiki/React_(JavaScript_library)"
              Target="_blank"
              class="shadow-md rounded-lg h-16 w-16 flex flex-col items-center justify-center ml-4"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/250px-React.svg.png"
                alt="Imagen"
                class="h-8 w-8"
              />
              <span class="mt-2 text-center text-sm font-medium">React</span>
            </a>
            <a
              href="https://en.wikipedia.org/wiki/Tailwind_CSS"
              Target="_blank"
              class="shadow-md rounded-lg h-16 w-16 flex flex-col items-center justify-center ml-4"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png"
                alt="Imagen"
                class="h-8 w-8"
              />
              <span class="mt-2 text-center text-sm font-medium">
                Tailwinds
              </span>
            </a>
            <a
              href="https://es.wikipedia.org/wiki/Bootstrap_(framework)"
              Target="_blank"
              class="shadow-md rounded-lg h-16 w-16 flex flex-col items-center justify-center ml-4"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/250px-Bootstrap_logo.svg.png"
                alt="Imagen"
                class="h-8 w-8"
              />
              <span class="mt-2 text-center text-sm font-medium">
                Bootstrap
              </span>
            </a>
            <a
              href="https://es.wikipedia.org/wiki/Sass"
              Target="_blank"
              class="shadow-md rounded-lg h-16 w-16 flex flex-col items-center justify-center ml-4"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/320px-Sass_Logo_Color.svg.png"
                alt="Imagen"
                class="h-8 w-8"
              />
              <span class="mt-2 text-center text-sm font-medium">Sass</span>
            </a>
          </div>
        </div>

        <div
          id="rrss"
          class=" col-span-1 flex flex-row items-center justify-end text-white "
        >
          <h2 class="text-2xl font-bold pl-7 mt-9 mb-9">Contacto:</h2>
          <div class="flex justify-center">
            <a
              href="https://www.linkedin.com/in/nicolasmisseri/"
              Target="_blank"
              class="shadow-md rounded-lg h-16 w-16 flex flex-col items-center justify-center"
            >
              <img src="images/linkedin.png" alt="Imagen" class="h-8 w-8" />
              <span class="mt-2 text-center text-sm font-medium">Linkedin</span>
            </a>
            <a
              href="https://github.com/nicolasmisseri"
              Target="_blank"
              class="shadow-md rounded-lg h-16 w-16 flex flex-col items-center justify-center ml-4"
            >
              <img src="images/github.png" alt="Imagen" class="h-8 w-8" />
              <span class="mt-2 text-center text-sm font-medium">Github</span>
            </a>
            <a
              href="https://drive.google.com/file/d/1hHq5bO_G_zhtQ-iyxo0GEFRfOGf_Bj0e/view?usp=share_link"
              Target="_blank"
              class="shadow-md rounded-lg h-16 w-16 flex flex-col items-center justify-center"
            >
              <img src="images/pdf.png" alt="Imagen" class="h-8 w-8" />
              <span class="mt-2 text-center text-sm font-medium">CV</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
