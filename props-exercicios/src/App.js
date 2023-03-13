import React from "react";
import "./styles.css";
import CardVideo from "./Components/CardVideo";

export default function App() {

  <div className="box-pagina-principal" onClick={reproduzVideo}>
    <img src="https://picsum.photos/400/400?a=1 " alt="" />
    <h4>{titulo}</h4>
  </div>




  return (
    <div>
    <div className="tela-inteira">
      <header>
        <h1>LabeTube</h1>
        <input type="text" placeholder="Busca" id="campoDeBusca" />
      </header>

      <main>
        <nav className="menu-vertical">
          <ul>
            <li className="botoes-meunu-vertical">Início</li>
            <li className="botoes-meunu-vertical">Em alta</li>
            <li className="botoes-meunu-vertical">Inscrições</li>
            <hr />
            <li className="botoes-meunu-vertical">Originais</li>
            <li className="botoes-meunu-vertical">Histórico</li>
          </ul>
        </nav>

        <CardVideo />

      </main>

      <footer>
        <h4>Oi! Eu moro no footer!</h4>
      </footer>
    </div>
  </div>

  );
}
