import { Garagem } from "./Componentes/Garagem/Garagem";
import { GlobalStyle } from "./GlobalStyle";

export default function App() {
  const nome = "Conway";

  function apresentaGaragem() {
    alert(`Boas vindas à garagem de ${nome}`);
  }

  return (
    <>
      <GlobalStyle/>
      <Garagem nome={nome} mensagemAprentacao={apresentaGaragem} />
    </>
  );
}