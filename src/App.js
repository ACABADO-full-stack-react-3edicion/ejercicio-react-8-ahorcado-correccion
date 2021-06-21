import { useEffect, useState } from "react";
import { Ahorcado } from "./componentes/Ahorcado";
import { Huecos } from "./componentes/Huecos";
import { Info } from "./componentes/Info";
import { Input } from "./componentes/Input";
import { LetrasUsadas } from "./componentes/LetrasUsadas";

function App() {
  const urlApiPalabras = "http://localhost:3001/palabras";
  const urlApiComprobarLetras = "https://letras-ahorcado.herokuapp.com/letras/";
  const maximoErrores = 11;
  const [palabra, setPalabra] = useState("");
  const [errores, setErrores] = useState(0);
  const [letrasUsadas, setLetrasUsadas] = useState([]);
  const [victoria, setVictoria] = useState(false);
  const [derrota, setDerrota] = useState(false);
  const [letrasAcertadas, setLetrasAcertadas] = useState("");
  const cargarPalabra = async () => {
    const resp = await fetch(urlApiPalabras);
    const palabrasAPI = await resp.json();
    setPalabra(
      palabrasAPI.lista[Math.floor(Math.random() * palabrasAPI.lista.length)]
    );
  };
  const compruebaLetra = async (letraIntento) => {
    if (letrasUsadas.includes(letraIntento)) {
      return;
    }
    setLetrasUsadas([...letrasUsadas, letraIntento]);
    const resp = await fetch(
      `${urlApiComprobarLetras}${palabra}/${letraIntento}`
    );
    const comprobacion = await resp.json();
    if (comprobacion.error) {
      setErrores(errores + 1);
    } else {
      const posiciones = comprobacion.posiciones;
      setLetrasAcertadas(
        letrasAcertadas
          .split("")
          .map((letra, i) => (posiciones.includes(i) ? letraIntento : letra))
          .join("")
      );
    }
  };
  useEffect(() => {
    cargarPalabra();
  }, []);
  useEffect(() => {
    setLetrasAcertadas(palabra.replace(/[a-z]/gi, " "));
  }, [palabra]);
  useEffect(() => {
    if (errores === maximoErrores) {
      setDerrota(true);
    }
  }, [errores]);
  useEffect(() => {
    if (palabra !== "" && letrasAcertadas === palabra) {
      setVictoria(true);
    }
  }, [letrasAcertadas, palabra]);
  return (
    <>
      <Ahorcado errores={errores} />
      <Huecos palabra={palabra} letrasAcertadas={letrasAcertadas} />
      <Input
        compruebaLetra={compruebaLetra}
        victoria={victoria}
        derrota={derrota}
      />
      <LetrasUsadas letrasUsadas={letrasUsadas} />
      <Info victoria={victoria} derrota={derrota} />
    </>
  );
}

export default App;
