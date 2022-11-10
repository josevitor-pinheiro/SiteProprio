/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";

import "./home.css";

export default function Home() {
  return (
    <div className="home-container">
      <div className="img-perfil">Futura imagem</div>
      <h1>José Vitor Pinheiro</h1>
      <p>Apaixonado por tecnologia</p>
      <div id="arrow-home">
        <a href="#projects"></a>
      </div>
    </div>
  );
}
