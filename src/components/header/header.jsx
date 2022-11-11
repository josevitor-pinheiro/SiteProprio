import React from "react";

import "./header.css";

export default function Header() {
  return (
    <div className="Header-container">
      <div className="Buttons-container">
        <div className="a-container">
          <a href="#home">Inicio</a>
        </div>
        <div className="a-container">
          <a href="#projects">Projetos</a>
        </div>
        <div className="a-container">
          <a href="#habilities"> Habilidades</a>
        </div>
        <div className="a-container">
          <a href="#about">Sobre mim</a>
        </div>
        <div className="a-container">
          <a href="#contact">Contato</a>
        </div>
      </div>
    </div>
  );
}
