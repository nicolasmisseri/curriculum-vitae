import React from "react";

export default function Skills() {
  return (
    <div>
      <div id="skills" className="col-span-1 flex flex-row items-center">
        <h2 className="text-2xl font-bold pl-7 mt-9 mb-9">Skills:</h2>
        <div className="flex justify-center">
          <a
            href="https://es.wikipedia.org/wiki/HTML"
            target="_blank"
            className="shadow-md rounded-lg h-16 w-16 flex flex-col items-center justify-center"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/250px-HTML5_logo_and_wordmark.svg.png"
              alt="Imagen"
              className="h-8 w-8"
            />
            <span className="mt-2 text-center text-sm font-medium">HTML</span>
          </a>
          <a
            href="https://es.wikipedia.org/wiki/CSS"
            target="_blank"
            className="shadow-md rounded-lg h-16 w-16 flex flex-col items-center justify-center ml-4"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/250px-CSS3_logo_and_wordmark.svg.png"
              alt="Imagen"
              className="h-8 w-8"
            />
            <span className="mt-2 text-center text-sm font-medium">CSS</span>
          </a>
          <a
            href="https://es.wikipedia.org/wiki/JavaScript"
            target="_blank"
            className="shadow-md rounded-lg h-16 w-16 flex flex-col items-center justify-center ml-4"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/320px-Unofficial_JavaScript_logo_2.svg.png"
              alt="Imagen"
              className="h-8 w-8"
            />
            <span className="mt-2 text-center text-sm font-medium">
              JavaScript
            </span>
          </a>
          <a
            href="https://en.wikipedia.org/wiki/React_(JavaScript_library)"
            target="_blank"
            className="shadow-md rounded-lg h-16 w-16 flex flex-col items-center justify-center ml-4"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/250px-React.svg.png"
              alt="Imagen"
              className="h-8 w-8"
            />
            <span className="mt-2 text-center text-sm font-medium">React</span>
          </a>
          <a
            href="https://en.wikipedia.org/wiki/Tailwind_CSS"
            target="_blank"
            className="shadow-md rounded-lg h-16 w-16 flex flex-col items-center justify-center ml-4"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png"
              alt="Imagen"
              className="h-8 w-8"
            />
            <span className="mt-2 text-center text-sm font-medium">
              Tailwinds CSS
            </span>
          </a>
          <a
            href="https://es.wikipedia.org/wiki/Bootstrap_(framework)"
            target="_blank"
            className="shadow-md rounded-lg h-16 w-16 flex flex-col items-center justify-center ml-4"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/250px-Bootstrap_logo.svg.png"
              alt="Imagen"
              className="h-8 w-8"
            />
            <span className="mt-2 text-center text-sm font-medium">
              Bootstrap
            </span>
          </a>
          <a
            href="https://es.wikipedia.org/wiki/Sass"
            target="_blank"
            className="shadow-md rounded-lg h-16 w-16 flex flex-col items-center justify-center ml-4"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/320px-Sass_Logo_Color.svg.png"
              alt="Imagen"
              className="h-8 w-8"
            />
            <span className="mt-2 text-center text-sm font-medium">Sass</span>
          </a>
        </div>
      </div>
    </div>
  );
}
