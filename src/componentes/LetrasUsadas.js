import { useState } from "react";

export const LetrasUsadas = (props) => {
  const { letrasUsadas } = props;
  return (
    <ul className="letras-usadas">
      {letrasUsadas.map((letra) => (
        <li key={letra}>{letra}</li>
      ))}
    </ul>
  );
};
