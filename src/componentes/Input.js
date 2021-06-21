import { useState } from "react";

export const Input = (props) => {
  const { compruebaLetra, victoria, derrota } = props;
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
