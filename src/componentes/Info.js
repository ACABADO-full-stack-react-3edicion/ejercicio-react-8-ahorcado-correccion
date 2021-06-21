import { useState } from "react";

export const Info = (props) => {
  const { victoria, derrota } = props;
  return (
    <>
      {victoria && <div className="mensaje ganar">¡Ganaste!</div>}
      {derrota && <div className="mensaje perder">Ooooh... perdiste</div>}
    </>
  );
};
