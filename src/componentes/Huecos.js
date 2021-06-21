import { useContext } from "react";
import { DatosPartidaContext } from "../contexts/DatosPartidaContext";

export const Huecos = (props) => {
  const { palabra, letrasAcertadas } = useContext(DatosPartidaContext);
  return (
    <>
      <ul className="palabra">
        {letrasAcertadas.split("").map((letra, i) => (
          <li key={i}>{letra}</li>
        ))}
      </ul>
    </>
  );
};
