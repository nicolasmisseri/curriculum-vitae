import React from "react";
import Contacto from "./Contacto/Contacto";
import Skills from "./Skills/Skills";

export default function Footer() {
  return (
    <div id="skills-rrss" className="grid grid-cols-2 gap-4 divide-x bt-1">
      <Skills />
      <Contacto />
    </div>
  );
}
