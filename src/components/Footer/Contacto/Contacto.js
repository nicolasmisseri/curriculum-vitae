import React from "react";

export default function Contacto() {
  return (
    <div>
      <div
        id="skills-rrss"
        className="grid grid-cols-2 gap-4 divide-x blanco-y-negro"
      ></div>

      <div id="rrss" class=" col-span-1 flex flex-row items-center justify-end">
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
  );
}
