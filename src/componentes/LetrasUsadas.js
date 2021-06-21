import { useContext, useState } from "react";
import { DatosPartidaContext } from "../contexts/DatosPartidaContext";

export const LetrasUsadas = () => {
  const { letrasUsadas } = useContext(DatosPartidaContext);
  return (
    <ul className="letras-usadas">
      {letrasUsadas.map((letra) => (
        <li key={letra}>{letra}</li>
      ))}
    </ul>
  );
};
