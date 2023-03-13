import React from "react";
import "./styles.css";
import { GlobalStyle } from "./GlobalStyle";
import Header from "./Componentes/Header/Header";
import Footer from "./Componentes/Footer/Footer";
import Main from "./Componentes/Main/Main";

export default function App() {

  return (
    <div>

      <GlobalStyle/>


      <div className="tela-inteira">

        <Header/>
        
        <Main/>

        <Footer/>

      </div>
      
    </div>
  );
}
