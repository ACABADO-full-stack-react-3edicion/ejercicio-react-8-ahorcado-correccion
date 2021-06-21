import { useEffect, useState } from "react";

export const Huecos = (props) => {
  const { palabra, letrasAcertadas } = props;

  return (
    <ul className="palabra">
      {letrasAcertadas.split("").map((letra, i) => (
        <li key={i}>{letra}</li>
      ))}
    </ul>
  );
};
