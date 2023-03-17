import React from "react";
import Presentacion from "./Presentacion/Presentacion";
import SobreMi from "./SobreMi/SobreMi";
import Trabajos from "./Trabajos/Trabajos";

export default function Main() {
  return (
    <div>
      <Presentacion />
      <SobreMi />
      <Trabajos />
    </div>
  );
}
