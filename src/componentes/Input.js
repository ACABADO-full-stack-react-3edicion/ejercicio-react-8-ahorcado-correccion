import { useContext, useState } from "react";
import { DatosPartidaContext } from "../contexts/DatosPartidaContext";
import { ResultadoContext } from "../contexts/ResultadoContext";

export const Input = () => {
  const { compruebaLetra } = useContext(DatosPartidaContext);
  const { victoria, derrota } = useContext(ResultadoContext);
  const [letra, setLetra] = useState("");
  const teclear = (e) => {
    setLetra(e.target.value);
    compruebaLetra(e.target.value);
    setTimeout(() => {
      setLetra("");
    }, 300);
  };
  return (
    <input
      type="text"
      value={letra}
      onChange={teclear}
      className="letra"
      maxLength="1"
      disabled={victoria || derrota}
    />
  );
};
