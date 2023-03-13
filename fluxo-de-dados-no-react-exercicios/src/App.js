import styled, { createGlobalStyle } from "styled-components";
import { useState } from "react";
import FormularioPostagem from "./components/FormularioPostagem/FormularioPostagem";
import { Header } from "./components/Header";
import TelaDaPostagem from "./components/TelaDaPostagem/TelaDaPostagem";
import FormularioLogin from "./components/FormularioLogin/FormularioLogin";
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

function App() {
  const [pageFlow, setPageFlow] = useState(1);
  const [name, setName] = useState("");
  const [urlImg, setUrlImg] = useState("");

  const [titulo, setTitulo] = useState(""); 
  const [urlImgPost, setUrlImgPost] = useState(""); 
  const [descricao, setDescricao] = useState(""); 
  
  return (
    <>
      <GlobalStyle />
      <Container>
        <aside>

          {pageFlow === 1 ? (
            <Header/>          
          ) : ( <Header name={name} urlImg={urlImg}/> )}

          {pageFlow === 1 ? (
            <FormularioLogin setPageFlow={setPageFlow} name={name} setName={setName} urlImg={urlImg} setUrlImg={setUrlImg}/>
          ) : (
            <FormularioPostagem titulo={titulo} setTitulo={setTitulo} urlImgPost={urlImgPost} setUrlImgPost={setUrlImgPost} descricao={descricao} setDescricao={setDescricao}/>
          )}

        </aside>
        <TelaDaPostagem titulo={titulo} urlImgPost={urlImgPost} descricao={descricao}/>
      </Container>
    </>
  );
}

export default App;
