import { useContext, useState } from "react";
import { ResultadoContext } from "../contexts/ResultadoContext";

export const Info = () => {
  const { victoria, derrota } = useContext(ResultadoContext);
  return (
    <>
      {victoria && <div className="mensaje ganar">¡Ganaste!</div>}
      {derrota && <div className="mensaje perder">Ooooh... perdiste</div>}
    </>
  );
};
